import React from "react";

import pharmacyPaymentConfig from "@/master_modules/Billing&Invoice/config/pharmacyPayment.config";

import "./PaymentSummary.css";

const PaymentSummary = ({
  summary = null,
  config = pharmacyPaymentConfig?.summary,
}) => {
  const summaryConfig = config || {};

  const rows = Array.isArray(summaryConfig?.rows)
    ? summaryConfig.rows
    : [];

  const grandTotalConfig =
    summaryConfig?.grandTotal || {};

  const currency =
    summaryConfig?.currency || "₹";

  const decimalPlaces =
    Number.isInteger(summaryConfig?.decimalPlaces)
      ? summaryConfig.decimalPlaces
      : 2;

  const SummaryIcon = summaryConfig?.icon;

  const getNestedValue = (object, path) => {
    if (!object || !path) {
      return undefined;
    }

    return path.split(".").reduce(
      (value, key) => value?.[key],
      object
    );
  };

  const getNumericValue = (value) => {
    if (
      value === undefined ||
      value === null ||
      value === ""
    ) {
      return 0;
    }

    const numericValue = Number(value);

    return Number.isFinite(numericValue)
      ? numericValue
      : 0;
  };

  const formatCurrency = (value) => {
    const numericValue = getNumericValue(value);

    return `${currency}${numericValue.toFixed(
      decimalPlaces
    )}`;
  };

  const getRowValue = (row) => {
    const value = getNestedValue(
      summary,
      row?.field
    );

    if (
      value === undefined ||
      value === null ||
      value === ""
    ) {
      return 0;
    }

    return value;
  };

  const grandTotal = getRowValue(
    grandTotalConfig
  );

  if (!summaryConfig?.enabled) {
    return null;
  }

  return (
    <section className="payment-summary">
      <div className="payment-summary__header">
        <div className="payment-summary__header-left">
          <div className="payment-summary__icon">
            {SummaryIcon && <SummaryIcon />}
          </div>

          <div className="payment-summary__heading">
            <h2 className="payment-summary__title">
              {summaryConfig?.title || ""}
            </h2>

            {summaryConfig?.subtitle && (
              <p className="payment-summary__subtitle">
                {summaryConfig.subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="payment-summary__body">
        <div className="payment-summary__rows">
          {rows.map((row) => (
            <div
              key={row?.id || row?.field}
              className="payment-summary__row"
            >
              <span className="payment-summary__label">
                {row?.label || ""}
              </span>

              <span className="payment-summary__value">
                {formatCurrency(
                  getRowValue(row)
                )}
              </span>
            </div>
          ))}
        </div>

        {grandTotalConfig?.enabled && (
          <div className="payment-summary__grand-total">
            <span className="payment-summary__grand-total-label">
              {grandTotalConfig?.label || ""}
            </span>

            <span className="payment-summary__grand-total-value">
              {formatCurrency(grandTotal)}
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default PaymentSummary;