
import React from "react";
import { Box, Button, CircularProgress } from "@mui/material";

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import "./BillingPaymentFooter.css";
const BillingPaymentFooter = ({
  onBack,
  onCancel,
  onConfirm,
  savingPayment = false,
  isPaid = false,
  isValid = true,
  confirmLabel = "Confirm Payment",
  showBack = true,
  showCancel = true,
}) => {
  const isConfirmDisabled =
    savingPayment || isPaid || !isValid;

  const handleConfirm = () => {
    if (isConfirmDisabled) return;
    onConfirm?.();
  };

  return (
    <Box
      component="footer"
      className="ipd-payment-footer"
      aria-label="Billing payment actions"
    >
      <Box className="ipd-payment-footer__left">
        {showBack && (
          <Button
            type="button"
            variant="outlined"
            className="ipd-payment-footer__back"
            startIcon={<ArrowBackOutlinedIcon />}
            onClick={onBack}
            disabled={savingPayment}
          >
            Back
          </Button>
        )}

        {showCancel && (
          <Button
            type="button"
            variant="text"
            className="ipd-payment-footer__cancel"
            startIcon={<CloseOutlinedIcon />}
            onClick={onCancel}
            disabled={savingPayment}
          >
            Cancel
          </Button>
        )}
      </Box>

      <Box className="ipd-payment-footer__right">
        <Button
          type="button"
          variant="contained"
          className="ipd-payment-footer__confirm"
          startIcon={
            savingPayment ? (
              <CircularProgress size={17} color="inherit" />
            ) : isPaid ? (
              <CheckCircleOutlineOutlinedIcon />
            ) : (
              <LockOutlinedIcon />
            )
          }
          onClick={handleConfirm}
          disabled={isConfirmDisabled}
        >
          {savingPayment
            ? "Processing Payment..."
            : isPaid
              ? "Payment Completed"
              : confirmLabel}
        </Button>
      </Box>
    </Box>
  );
};

export default BillingPaymentFooter;
