import React from "react";

import pharmacyPaymentConfig from "@/master_modules/Billing&Invoice/config/pharmacyPayment.config";

import "./PaymentCustomer.css";

const PaymentCustomer = ({
  customer = null,
  config = pharmacyPaymentConfig?.customer,
}) => {
  const customerConfig = config || {};
  const fields = Array.isArray(customerConfig?.fields)
    ? customerConfig.fields
    : [];

  const CustomerIcon = customerConfig?.icon;

  const getNestedValue = (object, path) => {
    if (!object || !path) {
      return undefined;
    }

    return path.split(".").reduce(
      (value, key) => value?.[key],
      object
    );
  };

  const getFieldValue = (fieldConfig) => {
    const value = getNestedValue(
      customer,
      fieldConfig?.field
    );

    if (
      value === undefined ||
      value === null ||
      value === ""
    ) {
      return fieldConfig?.fallback || "-";
    }

    return value;
  };

  if (!customerConfig?.enabled) {
    return null;
  }

  return (
    <section className="payment-customer">
      <div className="payment-customer__header">
        <div className="payment-customer__header-left">
          <div className="payment-customer__icon">
            {CustomerIcon && <CustomerIcon />}
          </div>

          <div className="payment-customer__heading">
            <h2 className="payment-customer__title">
              {customerConfig?.title || ""}
            </h2>

            {customerConfig?.subtitle && (
              <p className="payment-customer__subtitle">
                {customerConfig.subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="payment-customer__fields">
        {fields.map((field) => (
          <div
            key={field?.id || field?.field}
            className="payment-customer__field"
          >
            <span className="payment-customer__label">
              {field?.label || ""}
            </span>

            <span className="payment-customer__value">
              {getFieldValue(field)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PaymentCustomer;