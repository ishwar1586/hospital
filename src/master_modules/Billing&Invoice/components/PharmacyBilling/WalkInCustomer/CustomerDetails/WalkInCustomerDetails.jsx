import React, { useMemo, useState } from "react";

import pharmacyWalkInCustomerConfig from "@/master_modules/Billing&Invoice/config/pharmacyWalkInCustomer.config";

import "./WalkInCustomerDetails.css";

const WalkInCustomerDetails = ({
  value = null,
  onChange,
  onContinue,
  onBack,
  onCancel,
  config = pharmacyWalkInCustomerConfig,
}) => {
  const formConfig = config?.form || {};
  const pageConfig = config?.page || {};
  const customerConfig = config?.customer || {};
  const validationConfig = config?.validation || {};

  const PageIcon = pageConfig?.icons?.page;
  const CustomerTypeIcon = pageConfig?.icons?.customerType;

  const defaultFormData = useMemo(
    () => ({
      ...(customerConfig?.defaults || {}),
      ...(value || {}),
    }),
    [customerConfig?.defaults, value]
  );

  const [formData, setFormData] = useState(defaultFormData);
  const [errors, setErrors] = useState({});

  const fields = useMemo(() => {
    if (!Array.isArray(formConfig?.fields)) {
      return [];
    }

    return formConfig.fields.filter(
      (field) => field?.enabled !== false
    );
  }, [formConfig?.fields]);

  const handleChange = (field, nextValue) => {
    const fieldName = field?.field;

    if (!fieldName) {
      return;
    }

    setFormData((previous) => ({
      ...previous,
      [fieldName]: nextValue,
    }));

    if (errors?.[fieldName]) {
      setErrors((previous) => {
        const nextErrors = { ...previous };
        delete nextErrors[fieldName];
        return nextErrors;
      });
    }

    if (typeof onChange === "function") {
      onChange({
        ...formData,
        [fieldName]: nextValue,
      });
    }
  };

  const validateField = (field, data) => {
    const fieldName = field?.field;
    const fieldValue = data?.[fieldName];

    const isEmpty =
      fieldValue === undefined ||
      fieldValue === null ||
      String(fieldValue).trim() === "";

    if (field?.required && isEmpty) {
      return (
        validationConfig?.messages?.[fieldName] ||
        `${field?.label || "This field"} is required.`
      );
    }

    if (isEmpty) {
      return "";
    }

    const validation = field?.validation || {};
    const normalizedValue = String(fieldValue).trim();

    if (
      validation?.minLength &&
      normalizedValue.length < validation.minLength
    ) {
      return `Minimum ${validation.minLength} characters required.`;
    }

    if (
      validation?.maxLength &&
      normalizedValue.length > validation.maxLength
    ) {
      return `Maximum ${validation.maxLength} characters allowed.`;
    }

    if (
      validation?.min !== undefined &&
      Number(fieldValue) < Number(validation.min)
    ) {
      return (
        validationConfig?.messages?.[fieldName] ||
        `Minimum value is ${validation.min}.`
      );
    }

    if (
      validation?.max !== undefined &&
      Number(fieldValue) > Number(validation.max)
    ) {
      return (
        validationConfig?.messages?.[fieldName] ||
        `Maximum value is ${validation.max}.`
      );
    }

    if (validation?.pattern) {
      const pattern = new RegExp(validation.pattern);

      if (!pattern.test(normalizedValue)) {
        return (
          validationConfig?.messages?.[fieldName] ||
          `${field?.label || "This field"} is invalid.`
        );
      }
    }

    return "";
  };

  const validateForm = () => {
    const nextErrors = {};

    fields.forEach((field) => {
      const error = validateField(field, formData);

      if (error) {
        nextErrors[field.field] = error;
      }
    });

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleContinue = () => {
    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    const customerData = {
      ...formData,

      customerType:
        customerConfig?.type || "walk-in-customer",

      customerTypeLabel:
        customerConfig?.typeLabel || "Walk-in Customer",
    };

    if (typeof onChange === "function") {
      onChange(customerData);
    }

    if (typeof onContinue === "function") {
      onContinue(customerData);
    }
  };

  const handleBack = () => {
    if (typeof onBack === "function") {
      onBack(formData);
    }
  };

  const handleCancel = () => {
    if (typeof onCancel === "function") {
      onCancel();
    }
  };

  const renderField = (field) => {
    const fieldName = field?.field;
    const fieldValue = formData?.[fieldName] ?? "";
    const error = errors?.[fieldName];

    const FieldIcon = field?.icon;

    const commonProps = {
      id: `walk-in-${fieldName}`,
      name: fieldName,
      value: fieldValue,
      onChange: (event) =>
        handleChange(field, event.target.value),
      placeholder: field?.placeholder || "",
      disabled: field?.disabled === true,
      "aria-invalid": Boolean(error),
      "aria-describedby": error
        ? `walk-in-${fieldName}-error`
        : undefined,
    };

    return (
      <div
        className={[
          "walk-in-customer-details__field",
          field?.type === "textarea"
            ? "walk-in-customer-details__field--full"
            : "",
        ]
          .filter(Boolean)
          .join(" ")}
        key={field?.id || fieldName}
      >
        <label
          className="walk-in-customer-details__label"
          htmlFor={`walk-in-${fieldName}`}
        >
          {field?.label || ""}

          {field?.required && (
            <span className="walk-in-customer-details__required">
              *
            </span>
          )}
        </label>

        <div
          className={[
            "walk-in-customer-details__input-wrapper",
            error
              ? "walk-in-customer-details__input-wrapper--error"
              : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {FieldIcon && (
            <span className="walk-in-customer-details__input-icon">
              <FieldIcon />
            </span>
          )}

          {field?.type === "select" ? (
            <select {...commonProps}>
              <option value="">
                {field?.placeholder || "Select"}
              </option>

              {Array.isArray(field?.options) &&
                field.options.map((option) => (
                  <option
                    key={option?.id || option?.value}
                    value={option?.value}
                  >
                    {option?.label || ""}
                  </option>
                ))}
            </select>
          ) : field?.type === "textarea" ? (
            <textarea
              {...commonProps}
              rows={4}
            />
          ) : (
            <input
              {...commonProps}
              type={field?.type || "text"}
              min={field?.validation?.min}
              max={field?.validation?.max}
              maxLength={field?.validation?.maxLength}
              inputMode={
                field?.type === "tel"
                  ? "numeric"
                  : field?.type === "number"
                  ? "numeric"
                  : undefined
              }
            />
          )}
        </div>

        {error && (
          <span
            id={`walk-in-${fieldName}-error`}
            className="walk-in-customer-details__error"
          >
            {error}
          </span>
        )}
      </div>
    );
  };

  if (!formConfig?.enabled) {
    return null;
  }

  return (
    <section className="walk-in-customer-details">
      {/* Header */}
      <div className="walk-in-customer-details__header">
        <div className="walk-in-customer-details__header-left">
          <div className="walk-in-customer-details__page-icon">
            {PageIcon && <PageIcon />}
          </div>

          <div className="walk-in-customer-details__heading">
            <h1 className="walk-in-customer-details__title">
              {pageConfig?.title || ""}
            </h1>

            {pageConfig?.subtitle && (
              <p className="walk-in-customer-details__subtitle">
                {pageConfig.subtitle}
              </p>
            )}
          </div>
        </div>

        {pageConfig?.showCustomerType && (
          <div className="walk-in-customer-details__customer-type">
            {CustomerTypeIcon && (
              <CustomerTypeIcon />
            )}

            <span>
              {pageConfig?.customerTypeLabel ||
                customerConfig?.typeLabel ||
                "Walk-in Customer"}
            </span>
          </div>
        )}
      </div>

      {/* Form Card */}
      <div className="walk-in-customer-details__card">
        <div className="walk-in-customer-details__card-header">
          <div>
            <h2 className="walk-in-customer-details__card-title">
              {formConfig?.title || ""}
            </h2>

            {formConfig?.subtitle && (
              <p className="walk-in-customer-details__card-subtitle">
                {formConfig.subtitle}
              </p>
            )}
          </div>
        </div>

        <div className="walk-in-customer-details__form">
          {fields.map(renderField)}
        </div>
      </div>

      {/* Footer */}
      <div className="walk-in-customer-details__footer">
        <div className="walk-in-customer-details__footer-left">
          {formConfig?.requiredHint !== false && (
            <span className="walk-in-customer-details__footer-hint">
              <span className="walk-in-customer-details__required">
                *
              </span>{" "}
              Required fields
            </span>
          )}
        </div>

        <div className="walk-in-customer-details__footer-actions">
          {config?.footer?.actions?.cancel?.enabled && (
            <button
              type="button"
              className="walk-in-customer-details__button walk-in-customer-details__button--secondary"
              onClick={handleCancel}
            >
              {(() => {
                const CancelIcon =
                  config?.footer?.actions?.cancel?.icon;

                return CancelIcon ? <CancelIcon /> : null;
              })()}

              <span>
                {config?.footer?.actions?.cancel?.label ||
                  "Cancel"}
              </span>
            </button>
          )}

          {config?.footer?.actions?.back?.enabled && (
            <button
              type="button"
              className="walk-in-customer-details__button walk-in-customer-details__button--secondary"
              onClick={handleBack}
            >
              {(() => {
                const BackIcon =
                  config?.footer?.actions?.back?.icon;

                return BackIcon ? <BackIcon /> : null;
              })()}

              <span>
                {config?.footer?.actions?.back?.label ||
                  "Back"}
              </span>
            </button>
          )}

          {config?.footer?.actions?.continue?.enabled && (
            <button
              type="button"
              className="walk-in-customer-details__button walk-in-customer-details__button--primary"
              onClick={handleContinue}
            >
              <span>
                {config?.footer?.actions?.continue?.label ||
                  "Continue"}
              </span>

              {(() => {
                const ContinueIcon =
                  config?.footer?.actions?.continue?.icon;

                return ContinueIcon ? <ContinueIcon /> : null;
              })()}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default WalkInCustomerDetails;