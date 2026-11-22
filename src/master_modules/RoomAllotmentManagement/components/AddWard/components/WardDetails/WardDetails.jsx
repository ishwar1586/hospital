
import React from "react";
import "./WardDetails.css";

import { wardDetailsConfig } from "../../../../config/addWard/wardDetails.config";

const WardDetails = ({
  formData,
  options,
  onChange,
  errors = {},
}) => {
  const SectionIcon = wardDetailsConfig.section.icon;

  const renderField = (field) => {
    const value = formData[field.name] ?? "";
    const fieldOptions = field.optionKey
      ? options?.[field.optionKey] || []
      : [];

    const hasError = Boolean(errors[field.name]);

    return (
      <div
        className="add-ward__field"
        key={field.name}
        style={{ gridColumn: `span ${field.gridSpan}` }}
      >
        <label
          className="add-ward__label"
          htmlFor={`ward-${field.name}`}
        >
          {field.label}

          {field.required && (
            <span className="add-ward__required">*</span>
          )}
        </label>

        {field.type === "select" ? (
          <select
            id={`ward-${field.name}`}
            className={`add-ward__control ${
              hasError ? "add-ward__control--error" : ""
            }`}
            value={value}
            required={field.required}
            onChange={(event) =>
              onChange(field.name, event.target.value)
            }
            aria-invalid={hasError}
          >
            <option value="">{field.placeholder}</option>

            {fieldOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={`ward-${field.name}`}
            className={`add-ward__control ${
              hasError ? "add-ward__control--error" : ""
            }`}
            type={field.type}
            placeholder={field.placeholder}
            value={value}
            min={field.min}
            required={field.required}
            onChange={(event) =>
              onChange(field.name, event.target.value)
            }
            aria-invalid={hasError}
          />
        )}

        {hasError && (
          <span className="add-ward__error">
            {errors[field.name]}
          </span>
        )}
      </div>
    );
  };

  return (
    <section className="add-ward__section add-ward__details">

      {/* SECTION HEADER */}
      <div className="add-ward__section-header">
        <div className="add-ward__section-icon">
          <SectionIcon />
        </div>

        <h3 className="add-ward__section-title">
          {wardDetailsConfig.section.title}
        </h3>
      </div>

      {/* WARD FORM FIELDS */}
      <div className="add-ward__fields-grid">
        {wardDetailsConfig.fields.map(renderField)}
      </div>

      {/* WARD STATUS */}
      <div className="add-ward__status-wrapper">
        <span className="add-ward__label">
          {wardDetailsConfig.status.label}
        </span>

        <label className="add-ward__status-control">
          <input
            type="checkbox"
            checked={Boolean(formData.status)}
            onChange={(event) =>
              onChange("status", event.target.checked)
            }
          />

          <span className="add-ward__status-switch" />

          <span className="add-ward__status-text">
            {formData.status
              ? wardDetailsConfig.status.activeLabel
              : wardDetailsConfig.status.inactiveLabel}
          </span>
        </label>
      </div>

    </section>
  );
};

export default WardDetails;
