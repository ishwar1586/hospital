
import React from "react";
import { Box, Typography, Button } from "@mui/material";

import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import GppMaybeOutlinedIcon from "@mui/icons-material/GppMaybeOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import "./PaymentStatusCard.css";
const STATUS_CONFIG = {
  success: {
    title: "Payment Successful",
    description: "The payment has been verified successfully.",
    icon: CheckCircleOutlineRoundedIcon,
    className: "success",
  },
  pending: {
    title: "Payment Pending",
    description: "The transaction is awaiting confirmation.",
    icon: PendingOutlinedIcon,
    className: "pending",
  },
  failed: {
    title: "Payment Failed",
    description: "The transaction could not be completed.",
    icon: ErrorOutlineRoundedIcon,
    className: "failed",
  },
  unverified: {
    title: "Payment Verification Required",
    description:
      "The transaction reference has been recorded, but payment is not yet verified.",
    icon: GppMaybeOutlinedIcon,
    className: "unverified",
  },
};

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(Number(value) || 0);

const PaymentStatusCard = ({
  status = "unverified",
  amount = 0,
  transactionReference = "",
  paymentMethod = "",
  invoiceNumber = "",
  paymentDate = "",
  message = "",
  onRetry,
  onViewInvoice,
  showActions = true,
}) => {
  const normalizedStatus = STATUS_CONFIG[status]
    ? status
    : "unverified";

  const config = STATUS_CONFIG[normalizedStatus];
  const StatusIcon = config.icon;

  return (
    <Box
      component="section"
      className={`ipd-payment-status ipd-payment-status--${config.className}`}
      role="status"
      aria-live="polite"
    >
      <Box className="ipd-payment-status__icon">
        <StatusIcon />
      </Box>

      <Box className="ipd-payment-status__content">
        <Typography
          component="h2"
          className="ipd-payment-status__title"
        >
          {config.title}
        </Typography>

        <Typography className="ipd-payment-status__description">
          {message || config.description}
        </Typography>

        <Box className="ipd-payment-status__details">
          <Box className="ipd-payment-status__detail">
            <Typography className="ipd-payment-status__label">
              Amount
            </Typography>
            <Typography className="ipd-payment-status__value">
              {formatCurrency(amount)}
            </Typography>
          </Box>

          {paymentMethod && (
            <Box className="ipd-payment-status__detail">
              <Typography className="ipd-payment-status__label">
                Payment Method
              </Typography>
              <Typography className="ipd-payment-status__value">
                {paymentMethod}
              </Typography>
            </Box>
          )}

          {transactionReference && (
            <Box className="ipd-payment-status__detail">
              <Typography className="ipd-payment-status__label">
                Transaction Reference
              </Typography>
              <Typography className="ipd-payment-status__value">
                {transactionReference}
              </Typography>
            </Box>
          )}

          {invoiceNumber && (
            <Box className="ipd-payment-status__detail">
              <Typography className="ipd-payment-status__label">
                Invoice Number
              </Typography>
              <Typography className="ipd-payment-status__value">
                {invoiceNumber}
              </Typography>
            </Box>
          )}

          {paymentDate && (
            <Box className="ipd-payment-status__detail">
              <Typography className="ipd-payment-status__label">
                Payment Date
              </Typography>
              <Typography className="ipd-payment-status__value">
                {paymentDate}
              </Typography>
            </Box>
          )}
        </Box>

        {showActions && (
          <Box className="ipd-payment-status__actions">
            {normalizedStatus === "failed" && onRetry && (
              <Button
                type="button"
                variant="outlined"
                onClick={onRetry}
              >
                Retry Payment
              </Button>
            )}

            {normalizedStatus === "success" && onViewInvoice && (
              <Button
                type="button"
                variant="contained"
                startIcon={<ReceiptLongOutlinedIcon />}
                onClick={onViewInvoice}
              >
                View Invoice
              </Button>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default PaymentStatusCard;
