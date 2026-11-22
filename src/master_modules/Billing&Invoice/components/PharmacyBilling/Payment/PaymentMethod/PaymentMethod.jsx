import React, { useMemo } from "react";

import pharmacyPaymentConfig from "@/master_modules/Billing&Invoice/config/pharmacyPayment.config";

import "./PaymentMethod.css";

const PaymentMethod = ({
  value = "",
  onChange,
  config = pharmacyPaymentConfig?.paymentMethods,
}) => {
  const paymentConfig = config || {};

  const PaymentIcon = paymentConfig?.icon;

  const methods = useMemo(() => {
    if (!Array.isArray(paymentConfig?.methods)) {
      return [];
    }

    return paymentConfig.methods.filter(
      (method) => method?.enabled !== false
    );
  }, [paymentConfig?.methods]);

  const selectedMethod =
    value ||
    paymentConfig?.defaultMethod ||
    "";

  const handleMethodChange = (method) => {
    if (!method?.value) {
      return;
    }

    if (typeof onChange === "function") {
      onChange(method);
    }
  };

  if (!paymentConfig?.enabled) {
    return null;
  }

  return (
    <section className="payment-method">
      {/* Header */}
      <div className="payment-method__header">
        <div className="payment-method__header-left">
          <div className="payment-method__icon">
            {PaymentIcon && <PaymentIcon />}
          </div>

          <div className="payment-method__heading">
            <h2 className="payment-method__title">
              {paymentConfig?.title || ""}
            </h2>

            {paymentConfig?.subtitle && (
              <p className="payment-method__subtitle">
                {paymentConfig.subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div
        className="payment-method__options"
        role="radiogroup"
        aria-label={
          paymentConfig?.title ||
          "Payment Method"
        }
      >
        {methods.map((method) => {
          const MethodIcon = method?.icon;

          const isSelected =
            selectedMethod === method?.value;

          return (
            <button
              key={
                method?.id ||
                method?.value
              }
              type="button"
              role="radio"
              aria-checked={isSelected}
              className={[
                "payment-method__card",
                `payment-method__card--${
                  method?.variant ||
                  "default"
                }`,
                isSelected
                  ? "payment-method__card--selected"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() =>
                handleMethodChange(method)
              }
            >
              {/* Method Icon */}
              <div className="payment-method__card-icon">
                {MethodIcon && (
                  <MethodIcon />
                )}
              </div>

              {/* Method Content */}
              <div className="payment-method__card-content">
                <span className="payment-method__card-title">
                  {method?.title || ""}
                </span>

                {method?.description && (
                  <span className="payment-method__card-description">
                    {method.description}
                  </span>
                )}
              </div>

              {/* Selection Indicator */}
              <span
                className={[
                  "payment-method__indicator",
                  isSelected
                    ? "payment-method__indicator--selected"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                aria-hidden="true"
              />
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default PaymentMethod;