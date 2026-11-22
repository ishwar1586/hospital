
import React from "react";
import {
  Box,
  Button,
  CircularProgress,
} from "@mui/material";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

import "./IPDBillingReviewFooter.css";

const IPDBillingReviewFooter = ({
  onCancel,
  onBack,
  onGenerateInvoice,
  loading = false,
  disabled = false,
  cancelLabel = "Cancel",
  backLabel = "Back",
  generateLabel = "Generate Invoice",
}) => {
  const handleCancel = () => {
    if (typeof onCancel === "function" && !loading) {
      onCancel();
    }
  };

  const handleBack = () => {
    if (typeof onBack === "function" && !loading) {
      onBack();
    }
  };

  const handleGenerateInvoice = () => {
    if (
      typeof onGenerateInvoice === "function" &&
      !loading &&
      !disabled
    ) {
      onGenerateInvoice();
    }
  };

  return (
    <Box
      component="footer"
      className="ipd-review-footer"
      aria-label="Review and confirm actions"
    >
      <Box className="ipd-review-footer__left">
        <Button
          type="button"
          variant="outlined"
          className="ipd-review-footer__button ipd-review-footer__cancel"
          startIcon={<CloseOutlinedIcon />}
          onClick={handleCancel}
          disabled={loading}
        >
          {cancelLabel}
        </Button>

        <Button
          type="button"
          variant="outlined"
          className="ipd-review-footer__button ipd-review-footer__back"
          startIcon={<ArrowBackOutlinedIcon />}
          onClick={handleBack}
          disabled={loading}
        >
          {backLabel}
        </Button>
      </Box>

      <Button
        type="button"
        variant="contained"
        className="ipd-review-footer__button ipd-review-footer__generate"
        startIcon={
          loading ? (
            <CircularProgress
              size={17}
              thickness={5}
              color="inherit"
            />
          ) : (
            <ReceiptLongOutlinedIcon />
          )
        }
        onClick={handleGenerateInvoice}
        disabled={loading || disabled}
      >
        {loading ? "Generating Invoice..." : generateLabel}
      </Button>
    </Box>
  );
};

export default IPDBillingReviewFooter;
