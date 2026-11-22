
import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";

import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import "./BillSummaryReview.css";

const DEFAULT_CHARGE_ROWS = [
  { id: "roomCharges", label: "Room Charges", amount: 0 },
  { id: "medicines", label: "Medicines", amount: 0 },
  { id: "laboratory", label: "Laboratory", amount: 0 },
  { id: "radiology", label: "Radiology", amount: 0 },
  { id: "procedures", label: "Procedures", amount: 0 },
  { id: "consultation", label: "Consultation", amount: 0 },
  { id: "otherCharges", label: "Other Charges", amount: 0 },
];

const formatCurrency = (value) => {
  const amount = Number(value);

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number.isFinite(amount) ? amount : 0);
};

const getAmount = (value) => {
  if (value === null || value === undefined || value === "") {
    return 0;
  }

  const amount = Number(value);
  return Number.isFinite(amount) ? amount : 0;
};

const BillSummaryReview = ({
  bill = {},
  charges = [],
  summary = {},
  onPreview,
  showPreview = true,
}) => {
  const chargeSource = Array.isArray(charges) ? charges : [];

  const chargeRows = DEFAULT_CHARGE_ROWS.map((defaultRow) => {
    const matchingCharge = chargeSource.find((charge) => {
      const key = String(
        charge?.id ||
          charge?.key ||
          charge?.type ||
          charge?.category ||
          charge?.label ||
          charge?.name ||
          ""
      )
        .replace(/[\s_-]/g, "")
        .toLowerCase();

      return (
        key === defaultRow.id.toLowerCase() ||
        key === defaultRow.label.replace(/\s/g, "").toLowerCase()
      );
    });

    const amount =
      matchingCharge?.amount ??
      matchingCharge?.total ??
      matchingCharge?.totalAmount ??
      matchingCharge?.netAmount ??
      matchingCharge?.price ??
      bill?.[defaultRow.id] ??
      bill?.[`${defaultRow.id}Amount`] ??
      0;

    return {
      ...defaultRow,
      amount: getAmount(amount),
    };
  });

  const roomCharges = getAmount(
    summary.roomCharges ?? bill.roomCharges
  );

  const medicineCharges = getAmount(
    summary.medicines ?? summary.medicineCharges ?? bill.medicines
  );

  const laboratoryCharges = getAmount(
    summary.laboratory ?? summary.laboratoryCharges ?? bill.laboratory
  );

  const radiologyCharges = getAmount(
    summary.radiology ?? summary.radiologyCharges ?? bill.radiology
  );

  const procedureCharges = getAmount(
    summary.procedures ?? summary.procedureCharges ?? bill.procedures
  );

  const consultationCharges = getAmount(
    summary.consultation ?? summary.consultationCharges ?? bill.consultation
  );

  const otherCharges = getAmount(
    summary.otherCharges ?? bill.otherCharges
  );

  const hasExplicitCategoryAmounts = [
    summary.roomCharges,
    summary.medicines,
    summary.medicineCharges,
    summary.laboratory,
    summary.laboratoryCharges,
    summary.radiology,
    summary.radiologyCharges,
    summary.procedures,
    summary.procedureCharges,
    summary.consultation,
    summary.consultationCharges,
    summary.otherCharges,
    bill.roomCharges,
    bill.medicines,
    bill.laboratory,
    bill.radiology,
    bill.procedures,
    bill.consultation,
    bill.otherCharges,
  ].some((value) => value !== undefined && value !== null);

  const resolvedChargeRows = hasExplicitCategoryAmounts
    ? [
        { id: "roomCharges", label: "Room Charges", amount: roomCharges },
        { id: "medicines", label: "Medicines", amount: medicineCharges },
        { id: "laboratory", label: "Laboratory", amount: laboratoryCharges },
        { id: "radiology", label: "Radiology", amount: radiologyCharges },
        { id: "procedures", label: "Procedures", amount: procedureCharges },
        { id: "consultation", label: "Consultation", amount: consultationCharges },
        { id: "otherCharges", label: "Other Charges", amount: otherCharges },
      ]
    : chargeRows;

  const calculatedSubtotal = resolvedChargeRows.reduce(
    (total, row) => total + row.amount,
    0
  );

  const subtotal = getAmount(
    summary.subtotal ?? summary.subTotal ?? bill.subtotal ?? bill.subTotal ??
    calculatedSubtotal
  );

  const discount = getAmount(
    summary.discount ?? bill.discount
  );

  const tax = getAmount(
    summary.tax ?? summary.taxAmount ?? bill.tax ?? bill.taxAmount
  );

  const totalBillAmount = getAmount(
    summary.totalBillAmount ??
      summary.totalAmount ??
      summary.netBillAmount ??
      bill.totalBillAmount ??
      bill.totalAmount ??
      bill.netBillAmount ??
      subtotal - discount + tax
  );

  const handlePreview = () => {
    if (typeof onPreview === "function") {
      onPreview({
        bill,
        charges: resolvedChargeRows,
        summary: {
          subtotal,
          discount,
          tax,
          totalBillAmount,
        },
      });
    }
  };

  return (
    <Box
      component="section"
      className="ipd-review-bill-summary"
      aria-labelledby="ipd-review-bill-summary-title"
    >
      {/* Header */}
      <Box className="ipd-review-bill-summary__header">
        <Box className="ipd-review-bill-summary__heading">
          <Box className="ipd-review-bill-summary__header-icon">
            <ReceiptLongOutlinedIcon />
          </Box>

          <Typography
            component="h2"
            id="ipd-review-bill-summary-title"
            className="ipd-review-bill-summary__title"
          >
            Bill Summary
          </Typography>
        </Box>

        {showPreview && (
          <Tooltip title="Preview bill summary">
            <IconButton
              type="button"
              className="ipd-review-bill-summary__preview-button"
              onClick={handlePreview}
              aria-label="Preview bill summary"
              size="small"
            >
              <VisibilityOutlinedIcon />
              <Typography component="span">
                Preview
              </Typography>
            </IconButton>
          </Tooltip>
        )}
      </Box>

      {/* Charge Breakdown */}
      <Box className="ipd-review-bill-summary__body">
        <Box
          className="ipd-review-bill-summary__charge-list"
          role="table"
          aria-label="IPD bill charge breakdown"
        >
          {resolvedChargeRows.map((row) => (
            <Box
              key={row.id}
              className="ipd-review-bill-summary__charge-row"
              role="row"
            >
              <Typography
                component="span"
                className="ipd-review-bill-summary__charge-label"
                role="cell"
              >
                {row.label}
              </Typography>

              <Typography
                component="span"
                className="ipd-review-bill-summary__charge-amount"
                role="cell"
              >
                {formatCurrency(row.amount)}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Subtotal */}
        <Box className="ipd-review-bill-summary__calculation-row">
          <Typography component="span">
            Subtotal
          </Typography>

          <Typography component="span">
            {formatCurrency(subtotal)}
          </Typography>
        </Box>

        {/* Discount */}
        <Box className="ipd-review-bill-summary__calculation-row">
          <Typography component="span">
            Discount
          </Typography>

          <Typography
            component="span"
            className="ipd-review-bill-summary__discount"
          >
            -{formatCurrency(discount)}
          </Typography>
        </Box>

        {/* Tax */}
        <Box className="ipd-review-bill-summary__calculation-row">
          <Typography component="span">
            Tax (GST)
          </Typography>

          <Typography component="span">
            {formatCurrency(tax)}
          </Typography>
        </Box>

        {/* Final Total */}
        <Box className="ipd-review-bill-summary__total-row">
          <Typography
            component="span"
            className="ipd-review-bill-summary__total-label"
          >
            Total Bill Amount
          </Typography>

          <Typography
            component="span"
            className="ipd-review-bill-summary__total-amount"
          >
            {formatCurrency(totalBillAmount)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BillSummaryReview;
