import React, { useEffect, useMemo, useState } from "react";
import CloseOutlined from "@mui/icons-material/CloseOutlined";
import "./IPDBillingPayment.css";

import IPDBillingStepper from "@/master_modules/Billing&Invoice/components/IPDBillingStepper/IPDBillingStepper.jsx";
import BillingPaymentHeader from "./components/BillingPaymentHeader";
import IPDPatientBanner from "./components/IPDPatientBanner";
import PaymentMethodSelector from "./components/PaymentMethodSelector";
import CashPaymentForm from "./components/CashPaymentForm";
import UpiPaymentForm from "./components/UpiPaymentForm";
import CardPaymentForm from "./components/CardPaymentForm";
import BankTransferForm from "./components/BankTransferForm";
import BillSummary from "./components/BillSummary";
import BillingPaymentFooter from "./components/BillingPaymentFooter";
import PaymentStatusCard from "./components/PaymentStatusCard";
import { ipdBillingPaymentConfig as config } from "./config/ipdBillingPayment.config";
import {
  getBill,
  calculateBillSummary,
  recordPayment,
} from "./services/ipdBillingPayment.service";

const getPatientId = (patient) =>
  patient?.id || patient?.patientId || patient?.uhid || patient?.ipdNo || null;

const getInvoiceId = (invoiceId, patient, bill) =>
  invoiceId ||
  bill?.invoiceId ||
  bill?.invoiceNumber ||
  bill?.id ||
  patient?.invoiceId ||
  patient?.ipdNo ||
  patient?.uhid ||
  patient?.id ||
  patient?.patientId ||
  "";

const IPDBillingPayment = ({
  patient: selectedPatient,
  invoiceId,
  bill: suppliedBill,
  onBack,
  onCancel,
  onPaymentSuccess,
  onNext,
}) => {
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [amountReceived, setAmountReceived] = useState("");
  const [transactionReference, setTransactionReference] = useState("");
  const [remarks, setRemarks] = useState("");
  const [cardType, setCardType] = useState("debit");
  const [transferMode, setTransferMode] = useState("neft");

  const [bill, setBill] = useState(suppliedBill || null);
  const [loading, setLoading] = useState(!suppliedBill);
  const [paymentStatus, setPaymentStatus] = useState("unverified");
  const [paymentResult, setPaymentResult] = useState(null);
  const [savingPayment, setSavingPayment] = useState(false);
  const [error, setError] = useState("");

  const patientKey =
    selectedPatient?.id ||
    selectedPatient?.patientId ||
    selectedPatient?.uhid ||
    selectedPatient?.ipdNo ||
    "";

  const resolvedInvoiceId = useMemo(
    () => getInvoiceId(invoiceId, selectedPatient, suppliedBill || bill),
    [invoiceId, selectedPatient, suppliedBill, bill]
  );

  useEffect(() => {
    let active = true;

    const loadBill = async () => {
      setError("");
      setLoading(true);

      try {
        const id = getInvoiceId(invoiceId, selectedPatient, suppliedBill);
        if (suppliedBill) {
          // Register the exact bill in the service store using the same key
          // recordPayment will later use.
          const registeredBill = await getBill(id, selectedPatient, suppliedBill);
          if (active) setBill(registeredBill);
          return;
        }

        if (!id) {
          throw new Error("Invoice ID or patient identifier is required to load the bill.");
        }

        const loadedBill = await getBill(id, selectedPatient);
        if (active) setBill(loadedBill);
      } catch (loadError) {
        if (active) {
          setBill(null);
          setError(loadError?.message || "Unable to load IPD bill details.");
        }
      } finally {
        if (active) setLoading(false);
      }
    };

    loadBill();
    return () => {
      active = false;
    };
  }, [invoiceId, patientKey, suppliedBill]); // patientKey avoids object-driven reload loops

  const patient = selectedPatient || bill?.patient || {};

  const summary = useMemo(
    () => (bill ? calculateBillSummary(bill) : {}),
    [bill]
  );

  const outstandingAmount = Math.max(
    0,
    Number(summary.outstandingAmount ?? summary.balanceDue ?? 0)
  );
  const enteredAmount = Math.max(0, Number(amountReceived) || 0);
  const isCashPayment = paymentMethod === "cash";
  const paymentAmount = isCashPayment
    ? Math.min(enteredAmount, outstandingAmount)
    : outstandingAmount;

  const isValid = useMemo(() => {
    if (!bill || outstandingAmount <= 0 || savingPayment) return false;
    if (paymentMethod === "cash") return enteredAmount >= outstandingAmount;
    if (["upi", "card", "bank-transfer"].includes(paymentMethod)) {
      return transactionReference.trim().length > 0;
    }
    return false;
  }, [
    bill,
    outstandingAmount,
    savingPayment,
    paymentMethod,
    enteredAmount,
    transactionReference,
  ]);

  const resetPaymentFields = () => {
    setAmountReceived("");
    setTransactionReference("");
    setRemarks("");
    setCardType("debit");
    setTransferMode("neft");
    setPaymentStatus("unverified");
    setPaymentResult(null);
    setError("");
  };

  const handleBack = () => {
    if (!savingPayment) onBack?.();
  };

  const handleCancel = () => {
    if (savingPayment) return;
    if (onCancel) onCancel();
    else resetPaymentFields();
  };

  const handleConfirmPayment = async () => {
    if (savingPayment) return;

    if (!bill) {
      setError("Bill details are not available. Reload the bill before confirming payment.");
      return;
    }
    if (outstandingAmount <= 0) {
      setError("There is no outstanding balance for this bill.");
      return;
    }
    if (!isValid) {
      setError(
        isCashPayment
          ? "Enter cash received equal to or greater than the outstanding amount."
          : "Enter the transaction reference number before confirming payment."
      );
      return;
    }

    setSavingPayment(true);
    setError("");

    try {
      const id = getInvoiceId(invoiceId, patient, bill);
      if (!id) throw new Error("Invoice ID is missing. Cannot record payment.");

      const result = await recordPayment({
        invoiceId: id,
        patientId: getPatientId(patient),
        patient,
        bill,
        amount: paymentAmount,
        method: paymentMethod,
        transactionReference: transactionReference.trim(),
        remarks: remarks.trim(),
        cardType: paymentMethod === "card" ? cardType : undefined,
        transferMode: paymentMethod === "bank-transfer" ? transferMode : undefined,
        amountReceived: isCashPayment ? enteredAmount : undefined,
      });

      setPaymentResult(result);
      setPaymentStatus(result?.status || "pending");

      if (result?.updatedBill) setBill(result.updatedBill);

      if (result?.status === "success" || result?.status === "verified") {
        onPaymentSuccess?.(result);
        onNext?.(result);
      } else {
        setError(
          "Payment attempt recorded, but confirmation is pending. Verify through the authorized backend or payment gateway."
        );
      }
    } catch (paymentError) {
      setPaymentStatus("failed");
      setError(paymentError?.message || "Unable to record payment.");
    } finally {
      setSavingPayment(false);
    }
  };

  const handleRetry = () => {
    setError("");
    setPaymentStatus("unverified");
    setPaymentResult(null);
  };

  if (loading) {
    return (
      <main className="ipd-billing-payment">
        <div className="ipd-billing-payment__loading">Loading IPD bill details...</div>
      </main>
    );
  }

  if (!bill) {
    return (
      <main className="ipd-billing-payment">
        <div className="ipd-billing-payment__error" role="alert">
          <span>{error || "Unable to load bill details."}</span>
          <button
            type="button"
            className="ipd-billing-payment__error-close"
            onClick={() => setError("")}
            aria-label="Dismiss error"
          >
            <CloseOutlined fontSize="small" />
          </button>
        </div>
        <BillingPaymentFooter
          onBack={handleBack}
          onCancel={handleCancel}
          onConfirm={handleConfirmPayment}
          isValid={false}
          savingPayment={false}
          showBack
          showCancel
        />
      </main>
    );
  }

  return (
    <main className="ipd-billing-payment">
      <BillingPaymentHeader
        onBack={handleBack}
        onCancel={handleCancel}
        title={config.page.title}
        subtitle={config.page.subtitle}
      />

      <div className="ipd-billing-payment__stepper">
        <IPDBillingStepper currentStep={3} />
      </div>

      <IPDPatientBanner patient={patient} currentStep={3} totalSteps={4} />

      {error && (
        <div className="ipd-billing-payment__error" role="alert">
          <span>{error}</span>
          <button
            type="button"
            className="ipd-billing-payment__error-close"
            onClick={() => setError("")}
            aria-label="Dismiss error"
          >
            <CloseOutlined fontSize="small" />
          </button>
        </div>
      )}

      <div className="ipd-billing-payment__main">
        <section className="ipd-billing-payment__payment-panel">
          <div className="ipd-billing-payment__section-heading">
            <div>
              <h2>Payment Details</h2>
              <p>Select a payment method and enter the required details.</p>
            </div>
          </div>

          {outstandingAmount > 0 ? (
            <>
              <PaymentMethodSelector
                value={paymentMethod}
                onChange={(method) => {
                  setPaymentMethod(method);
                  setError("");
                  setTransactionReference("");
                }}
                disabled={savingPayment}
              />

              <div className="ipd-billing-payment__form">
                {paymentMethod === "cash" && (
                  <CashPaymentForm
                    amountReceived={amountReceived}
                    onAmountChange={setAmountReceived}
                    balanceDue={outstandingAmount}
                    disabled={savingPayment}
                  />
                )}

                {paymentMethod === "upi" && (
                  <UpiPaymentForm
                    transactionReference={transactionReference}
                    onTransactionReferenceChange={setTransactionReference}
                    remarks={remarks}
                    onRemarksChange={setRemarks}
                    disabled={savingPayment}
                  />
                )}

                {paymentMethod === "card" && (
                  <CardPaymentForm
                    cardType={cardType}
                    onCardTypeChange={setCardType}
                    transactionReference={transactionReference}
                    onTransactionReferenceChange={setTransactionReference}
                    remarks={remarks}
                    onRemarksChange={setRemarks}
                    disabled={savingPayment}
                  />
                )}

                {paymentMethod === "bank-transfer" && (
                  <BankTransferForm
                    transferMode={transferMode}
                    onTransferModeChange={setTransferMode}
                    transactionReference={transactionReference}
                    onTransactionReferenceChange={setTransactionReference}
                    remarks={remarks}
                    onRemarksChange={setRemarks}
                    disabled={savingPayment}
                  />
                )}
              </div>
            </>
          ) : (
            <div className="ipd-billing-payment__settled">
              <strong>Bill settled</strong>
              <p>No outstanding amount remains to be collected.</p>
            </div>
          )}

          {paymentResult && (
            <PaymentStatusCard
              status={paymentStatus}
              amount={paymentResult.amount ?? paymentAmount}
              transactionReference={paymentResult.transactionReference || transactionReference}
              paymentMethod={paymentMethod}
              invoiceNumber={bill.invoiceNumber || bill.invoiceId || resolvedInvoiceId}
              message={paymentResult.message}
              onRetry={handleRetry}
            />
          )}
        </section>

        <aside className="ipd-billing-payment__summary-panel">
          <BillSummary summary={summary} paymentAmount={paymentAmount} showPaymentAmount />
        </aside>
      </div>

      <BillingPaymentFooter
        onBack={handleBack}
        onCancel={handleCancel}
        onConfirm={handleConfirmPayment}
        savingPayment={savingPayment}
        isPaid={outstandingAmount <= 0}
        isValid={isValid}
        confirmLabel={
          savingPayment ? config.actions.processing : config.actions.confirmPayment
        }
        showBack
        showCancel
      />
    </main>
  );
};

export default IPDBillingPayment;
