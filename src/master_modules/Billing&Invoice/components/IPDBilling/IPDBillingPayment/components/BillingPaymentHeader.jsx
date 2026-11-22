import React from "react";
import { IconButton, Button, Box, Typography } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import "./BillingPaymentHeader.css";

const BillingPaymentHeader = ({
  title = "Billing & Payment",
  subtitle = "Collect payment and review the inpatient bill.",
  onBack,
  onCancel,
}) => {
  return (
    <Box className="ipd-payment-header">
      <Box className="ipd-payment-header__left">
        <IconButton
          className="ipd-payment-header__back"
          onClick={onBack}
          aria-label="Go back"
          type="button"
        >
          <ArrowBackOutlinedIcon />
        </IconButton>

        <Box className="ipd-payment-header__content">
          <Typography
            component="span"
            className="ipd-payment-header__eyebrow"
          >
            IPD BILLING
          </Typography>

          <Typography
            component="h1"
            className="ipd-payment-header__title"
          >
            {title}
          </Typography>

          <Typography
            component="p"
            className="ipd-payment-header__subtitle"
          >
            {subtitle}
          </Typography>
        </Box>
      </Box>

      <Button
        className="ipd-payment-header__cancel"
        variant="outlined"
        startIcon={<CloseOutlinedIcon />}
        onClick={onCancel}
        type="button"
      >
        Cancel
      </Button>
    </Box>
  );
};

export default BillingPaymentHeader;