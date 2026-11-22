
import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";

import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import "./ReviewPaymentDetails.css";

const formatCurrency = (value) => {
  const amount = Number(value);

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number.isFinite(amount) ? amount : 0);
};

const formatDate = (value) => {
  if (!value) return "—";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return String(value);
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
};

const getValue = (...values) => {
  const value = values.find(
    (item) => item !== undefined && item !== null && item !== ""
  );

  return value === undefined ? "—" : value;
};

const ReviewPaymentDetails = ({
  payment = {},
  bill = {},
  onEdit,
  editable = true,
}) => {
  const paymentMethod = getValue(
    payment.paymentMethodLabel,
    payment.paymentMethodName,
    payment.paymentMethod,
    bill.paymentMethodLabel,
    bill.paymentMethodName,
    bill.paymentMethod
  );

  const receivedAmount = getValue(
    payment.receivedAmount,
    payment.amountReceived,
    payment.amount,
    bill.receivedAmount,
    bill.amountReceived,
    bill.amount
  );

  const paymentDate = getValue(
    payment.paymentDate,
    payment.transactionDate,
    bill.paymentDate,
    bill.transactionDate
  );

  const referenceNumber = getValue(
    payment.referenceNo,
    payment.referenceNumber,
    payment.transactionId,
    payment.transactionReference,
    bill.referenceNo,
    bill.referenceNumber
  );

  const remarks = getValue(
    payment.remarks,
    payment.notes,
    bill.remarks,
    bill.notes
  );

  const isAmountAvailable =
    receivedAmount !== "—" &&
    Number.isFinite(Number(receivedAmount));

  const details = [
    {
      id: "paymentMethod",
      label: "Payment Method",
      value: paymentMethod,
    },
    {
      id: "receivedAmount",
      label: "Received Amount",
      value: isAmountAvailable
        ? formatCurrency(receivedAmount)
        : receivedAmount,
      highlight: true,
    },
    {
      id: "paymentDate",
      label: "Payment Date",
      value: paymentDate === "—"
        ? "—"
        : formatDate(paymentDate),
    },
    {
      id: "referenceNo",
      label: "Reference No.",
      value: referenceNumber,
    },
    {
      id: "remarks",
      label: "Remarks",
      value: remarks,
    },
  ];

  const handleEdit = () => {
    if (editable && typeof onEdit === "function") {
      onEdit();
    }
  };

  return (
    <Box
      component="section"
      className="ipd-review-payment-details"
      aria-labelledby="ipd-review-payment-details-title"
    >
      {/* Header */}
      <Box className="ipd-review-payment-details__header">
        <Box className="ipd-review-payment-details__heading">
          <Box className="ipd-review-payment-details__header-icon">
            <PaymentsOutlinedIcon />
          </Box>

          <Typography
            component="h2"
            id="ipd-review-payment-details-title"
            className="ipd-review-payment-details__title"
          >
            Payment Details
          </Typography>
        </Box>

        {editable && (
          <Tooltip title="Edit payment details">
            <IconButton
              type="button"
              size="small"
              className="ipd-review-payment-details__edit-button"
              onClick={handleEdit}
              aria-label="Edit payment details"
            >
              <EditOutlinedIcon />
              <Typography component="span">Edit</Typography>
            </IconButton>
          </Tooltip>
        )}
      </Box>

      {/* Payment Information */}
      <Box className="ipd-review-payment-details__body">
        {details.map((detail) => (
          <Box
            key={detail.id}
            className={[
              "ipd-review-payment-details__row",
              detail.highlight
                ? "ipd-review-payment-details__row--highlight"
                : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <Typography
              component="span"
              className="ipd-review-payment-details__label"
            >
              {detail.label}
            </Typography>

            <Typography
              component="span"
              className="ipd-review-payment-details__separator"
            >
              :
            </Typography>

            <Typography
              component="span"
              className="ipd-review-payment-details__value"
            >
              {String(detail.value)}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ReviewPaymentDetails;
