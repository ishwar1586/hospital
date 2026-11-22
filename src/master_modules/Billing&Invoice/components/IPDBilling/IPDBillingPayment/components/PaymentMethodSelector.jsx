
import React from "react";
import { Box, Typography } from "@mui/material";

import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import "./PaymentMethodSelector.css";
const PAYMENT_METHODS = [
  {
    id: "cash",
    label: "Cash",
    description: "Pay with billing cash", 
    icon: PaymentsOutlinedIcon,
  },
  {
    id: "upi",
    label: "UPI",
    description: "Pay using UPI / QR code",
    icon: PhoneAndroidOutlinedIcon,
  },
  {
    id: "card",
    label: "Card",
    description: "Credit or debit card payment",
    icon: CreditCardOutlinedIcon,
  },
  {
    id: "bank-transfer",
    label: "Bank Transfer",
    description: "Pay via net banking or bank transfer",
    icon: AccountBalanceOutlinedIcon,
  },
];

const PaymentMethodSelector = ({
  value = "cash",
  onChange,
  disabled = false,
}) => {
  const handleMethodSelect = (method) => {
    if (disabled || typeof onChange !== "function") {
      return;
    }

    onChange(method);
  };

  return (
    <Box
      className="ipd-payment-method"
      component="section"
      aria-labelledby="ipd-payment-method-title"
    >
      <Box className="ipd-payment-method__header">
        <Box className="ipd-payment-method__header-icon">
          <CreditCardOutlinedIcon />
        </Box>

        <Box>
          <Typography
            component="h2"
            id="ipd-payment-method-title"
            className="ipd-payment-method__title"
          >
            Select Payment Method
          </Typography>

          <Typography className="ipd-payment-method__subtitle">
            Choose how the patient wants to pay
          </Typography>
        </Box>
      </Box>

      <Box className="ipd-payment-method__options">
        {PAYMENT_METHODS.map((method) => {
          const MethodIcon = method.icon;
          const isSelected = value === method.id;

          return (
            <Box
              key={method.id}
              component="button"
              type="button"
              className={[
                "ipd-payment-method__option",
                isSelected
                  ? "ipd-payment-method__option--selected"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => handleMethodSelect(method.id)}
              disabled={disabled}
              aria-pressed={isSelected}
              aria-label={`${method.label}: ${method.description}`}
            >
              <Box className="ipd-payment-method__option-icon">
                <MethodIcon />
              </Box>

              <Box className="ipd-payment-method__option-content">
                <Typography
                  component="span"
                  className="ipd-payment-method__option-label"
                >
                  {method.label}
                </Typography>

                <Typography
                  component="span"
                  className="ipd-payment-method__option-description"
                >
                  {method.description}
                </Typography>
              </Box>

              <Box className="ipd-payment-method__radio">
                {isSelected ? (
                  <RadioButtonCheckedIcon />
                ) : (
                  <RadioButtonUncheckedIcon />
                )}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default PaymentMethodSelector;
