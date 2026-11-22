
import React, { useMemo, useState } from "react";
import {
  Box,
  Alert,
  Snackbar,
  CircularProgress,
  Typography,
  Divider,
} from "@mui/material";

import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import "./IPDBillingReview.css";

import BillSummaryReview from "./components/BillSummaryReview";
import ReviewPaymentDetails from "./components/ReviewPaymentDetails";
import IPDBillingReviewFooter from "./components/IPDBillingReviewFooter";

import { IPD_BILLING_REVIEW_CONFIG } from "./config/ipdBillingReview.config";
import ipdBillingReviewMock from "./mock/ipdBillingReview.mock";
import { generateIPDInvoice } from "./services/ipdInvoice.service";

// IMPORTANT:
// Shared stepper ko application mein jis exact path se import kiya hai,
// wahi path yahan use karna.
// Neeche path project structure ke hisaab se adjust kar sakte ho.
import IPDBillingStepper from "@/master_modules/Billing&Invoice/components/IPDBillingStepper/IPDBillingStepper.jsx";

const formatCurrency = (value = 0) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(Number(value) || 0);

const IPDBillingReview = ({
  patient: patientProp,
  bill: billProp,
  charges: chargesProp,
  summary: summaryProp,
  payment: paymentProp,

  onBack,
  onCancel,
  onEditPayment,
  onGenerateInvoice,
  onPreviewInvoice,

  invoiceId,
//   stepperProps = {},
}) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [previewOpen, setPreviewOpen] = useState(false);

  const source = ipdBillingReviewMock;

  const patient = patientProp ?? source.patient;
  const bill = billProp ?? source.bill;
  const charges = chargesProp ?? source.charges;
  const summary = summaryProp ?? source.summary;
  const payment = paymentProp ?? source.payment;

  const resolvedInvoiceId =
    invoiceId ||
    bill?.invoiceId ||
    bill?.billNumber ||
    "";

  const resolvedSummary = useMemo(() => {
    const chargeSubtotal = (charges || []).reduce((sum, charge) => {
      const amount = Number(
        charge.amount ??
          charge.totalAmount ??
          charge.netAmount ??
          0
      );

      return sum + (Number.isFinite(amount) ? amount : 0);
    }, 0);

    const subtotal = Number(
      summary?.subtotal ?? bill?.subtotal ?? chargeSubtotal
    );

    const discount = Number(
      summary?.discount ?? bill?.discount ?? 0
    );

    const tax = Number(summary?.tax ?? bill?.tax ?? 0);

    const totalBillAmount = Number(
      summary?.totalBillAmount ??
        bill?.totalBillAmount ??
        subtotal - discount + tax
    );

    const receivedAmount = Number(
      summary?.receivedAmount ??
        bill?.receivedAmount ??
        payment?.receivedAmount ??
        0
    );

    const advancePaid = Number(
      summary?.advancePaid ?? bill?.advancePaid ?? receivedAmount
    );

    const outstandingAmount = Math.max(
      0,
      Number(
        summary?.outstandingAmount ??
          bill?.outstandingAmount ??
          totalBillAmount - receivedAmount
      )
    );

    return {
      subtotal,
      discount,
      tax,
      totalBillAmount,
      receivedAmount,
      advancePaid,
      outstandingAmount,
    };
  }, [charges, summary, bill, payment]);

  const handlePreview = (previewData) => {
    if (typeof onPreviewInvoice === "function") {
      onPreviewInvoice(previewData);
      return;
    }

    setPreviewOpen(true);
  };


const handleGenerateInvoice = async () => {
  if (loading) return;

  setErrorMessage("");
  setSuccessMessage("");

  try {
    setLoading(true);

    const payload = {
      patient,
      bill: {
        ...bill,
        invoiceId: resolvedInvoiceId,
        ...resolvedSummary,
      },
      charges,
      summary: resolvedSummary,
      payment,
    };

    // Generate invoice using the service
    const result = await generateIPDInvoice(payload);

    // Prepare the result for BillingManagement.jsx
    const invoiceData = {
      ...payload,
      invoice: result?.invoice || result?.data?.invoice || result?.data || result,
    };

    // Send the generated invoice to the parent component
    if (typeof onGenerateInvoice === "function") {
      onGenerateInvoice(invoiceData);
    }

    setSuccessMessage(
      result?.message || "Invoice generated successfully."
    );
  } catch (error) {
    setErrorMessage(
      error?.message || "Unable to generate the invoice."
    );
  } finally {
    setLoading(false);
  }
};


  

  const handleCancel = () => {
    if (loading) return;

    if (typeof onCancel === "function") {
      onCancel();
      return;
    }

    setErrorMessage("Cancel action is not connected yet.");
  };

  const handleBack = () => {
    if (loading) return;

    if (typeof onBack === "function") {
      onBack();
      return;
    }

    setErrorMessage("Back action is not connected yet.");
  };

  const handleEditPayment = () => {
    if (typeof onEditPayment === "function") {
      onEditPayment(payment);
      return;
    }

    setErrorMessage("Payment editing is not connected yet.");
  };

  const pageConfig = IPD_BILLING_REVIEW_CONFIG || {};

  return (
    <Box className="ipd-billing-review">
      {/* Page Header */}
      <Box className="ipd-billing-review__header">
        <Box className="ipd-billing-review__header-left">
          <button
            type="button"
            className="ipd-billing-review__back-icon"
            onClick={handleBack}
            disabled={loading}
            aria-label="Go back"
          >
            <ArrowBackOutlinedIcon />
          </button>

          <Box>
            <Typography
              component="h1"
              className="ipd-billing-review__title"
            >
              {pageConfig.title || "Review & Confirm"}
            </Typography>

            <Typography className="ipd-billing-review__subtitle">
              {pageConfig.subtitle ||
                "Review patient billing details before generating the invoice."}
            </Typography>
          </Box>
        </Box>

        <Box className="ipd-billing-review__invoice-badge">
          <ReceiptLongOutlinedIcon />
          <Box>
            <Typography className="ipd-billing-review__badge-label">
              Invoice Reference
            </Typography>
            <Typography className="ipd-billing-review__badge-value">
              {resolvedInvoiceId || "Not assigned"}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Shared Billing Stepper */}
      <Box className="ipd-billing-review__stepper">
        {/* <IPDBillingStepper {...stepperProps} /> */}
        <IPDBillingStepper currentStep={4} />
      </Box>

      {/* Patient Summary */}
      <Box className="ipd-billing-review__patient-card">
        <Box className="ipd-billing-review__patient-icon">
          <PersonOutlineOutlinedIcon />
        </Box>

        <Box className="ipd-billing-review__patient-info">
          <Typography className="ipd-billing-review__patient-name">
            {patient?.patientName ||
              patient?.name ||
              "Patient name unavailable"}
          </Typography>

          <Box className="ipd-billing-review__patient-meta">
            <span>
              UHID:{" "}
              {patient?.uhid ||
                patient?.patientId ||
                patient?.id ||
                "—"}
            </span>

            <span>
              IPD No: {patient?.ipdNo || "—"}
            </span>

            <span>
              Age/Gender:{" "}
              {patient?.age ?? "—"} / {patient?.gender || "—"}
            </span>
          </Box>
        </Box>

        <Box className="ipd-billing-review__room-info">
          <LocalHospitalOutlinedIcon />

          <Box>
            <Typography className="ipd-billing-review__room-label">
              Ward / Room / Bed
            </Typography>
            <Typography className="ipd-billing-review__room-value">
              {patient?.ward || "—"} / {patient?.room || "—"} /{" "}
              {patient?.bed || "—"}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Review Content */}
      <Box className="ipd-billing-review__content">
        <Box className="ipd-billing-review__section">
          <BillSummaryReview
            bill={bill}
            charges={charges}
            summary={resolvedSummary}
            onPreview={handlePreview}
            showPreview
          />
        </Box>

        <Divider className="ipd-billing-review__divider" />

        <Box className="ipd-billing-review__section">
          <ReviewPaymentDetails
            payment={payment}
            bill={bill}
            onEdit={handleEditPayment}
            editable
          />
        </Box>

        {/* Amount Summary */}
        <Box className="ipd-billing-review__totals">
          <Box className="ipd-billing-review__total-row">
            <Typography>Net Bill Amount</Typography>
            <Typography>
              {formatCurrency(resolvedSummary.totalBillAmount)}
            </Typography>
          </Box>

          <Box className="ipd-billing-review__total-row">
            <Typography>Amount Received</Typography>
            <Typography>
              {formatCurrency(resolvedSummary.receivedAmount)}
            </Typography>
          </Box>

          <Divider />

          <Box className="ipd-billing-review__total-row ipd-billing-review__total-row--outstanding">
            <Typography>Outstanding Balance</Typography>
            <Typography>
              {formatCurrency(resolvedSummary.outstandingAmount)}
            </Typography>
          </Box>
        </Box>

        <Alert
          severity="info"
          className="ipd-billing-review__notice"
        >
          Please verify all charges and payment details before generating
          the invoice. Payment status must be confirmed by your backend
          or payment gateway.
        </Alert>
      </Box>

      {/* Footer Actions */}
      <IPDBillingReviewFooter
        onCancel={handleCancel}
        onBack={handleBack}
        onGenerateInvoice={handleGenerateInvoice}
        loading={loading}
        disabled={loading}
      />

      {/* Preview fallback */}
      <Snackbar
        open={previewOpen}
        autoHideDuration={3500}
        onClose={() => setPreviewOpen(false)}
        message="Connect your invoice preview component to display the full preview."
      />

      {/* Feedback */}
      <Snackbar
        open={Boolean(errorMessage)}
        autoHideDuration={5000}
        onClose={() => setErrorMessage("")}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity="error"
          onClose={() => setErrorMessage("")}
        >
          {errorMessage}
        </Alert>
      </Snackbar>

      <Snackbar
        open={Boolean(successMessage)}
        autoHideDuration={4000}
        onClose={() => setSuccessMessage("")}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity="success"
          onClose={() => setSuccessMessage("")}
        >
          {successMessage}
        </Alert>
      </Snackbar>

      {loading && (
        <Box className="ipd-billing-review__loading-overlay">
          <CircularProgress size={34} />
          <Typography>Generating invoice...</Typography>
        </Box>
      )}
    </Box>
  );
};

export default IPDBillingReview;
