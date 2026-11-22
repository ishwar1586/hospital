import React from "react";

const BillingPaymentStatus = ({
  status = "",
  config = {},
}) => {
  const normalizedStatus = String(status || "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");

  const statusConfig =
    config[normalizedStatus] ||
    config.default;

  if (!statusConfig) {
    return null;
  }

  const {
    label = status || "Unknown",
    variant = "default",
  } = statusConfig;

  return (
    <span
      className={`
        billing-payment-status
        billing-payment-status--${variant}
      `}
    >
      <span className="billing-payment-status__dot" />

      <span className="billing-payment-status__label">
        {label}
      </span>
    </span>
  );
};

export default BillingPaymentStatus;