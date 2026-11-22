import React from "react";

import pharmacyPaymentConfig from "@/master_modules/Billing&Invoice/config/pharmacyPayment.config";

import "./PaymentBillInfo.css";

const PaymentBillInfo = ({
  bill = null,
  config = pharmacyPaymentConfig?.bill,
}) => {
  const billConfig = config || {};

  const fields = Array.isArray(billConfig?.fields)
    ? billConfig.fields
    : [];

  const BillIcon = billConfig?.icon;

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
      bill,
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

  if (!billConfig?.enabled) {
    return null;
  }

  return (
    <section className="payment-bill-info">
      <div className="payment-bill-info__header">
        <div className="payment-bill-info__header-left">
          <div className="payment-bill-info__icon">
            {BillIcon && <BillIcon />}
          </div>

          <div className="payment-bill-info__heading">
            <h2 className="payment-bill-info__title">
              {billConfig?.title || ""}
            </h2>

            {billConfig?.subtitle && (
              <p className="payment-bill-info__subtitle">
                {billConfig.subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="payment-bill-info__fields">
        {fields.map((field) => (
          <div
            key={field?.id || field?.field}
            className="payment-bill-info__field"
          >
            <span className="payment-bill-info__label">
              {field?.label || ""}
            </span>

            <span className="payment-bill-info__value">
              {getFieldValue(field)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PaymentBillInfo;