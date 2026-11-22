
import React from "react";
import "./RoomDetails.css";

import { roomDetailsConfig } from "../../../../config/addRoom/roomDetails.config";

const RoomDetails = ({
  formData,
  options,
  onChange,
  errors = {},
}) => {
  const { section, fields, status } = roomDetailsConfig;

  const SectionIcon = section.icon;

  const renderField = (field) => {
    const value = formData[field.name] ?? "";

    const fieldOptions = field.optionKey
      ? options?.[field.optionKey] || []
      : [];

    const hasError = Boolean(errors[field.name]);

    return (
      <div
        className="add-room__field"
        key={field.name}
        style={{ gridColumn: `span ${field.gridSpan}` }}
      >
        <label
          className="add-room__label"
          htmlFor={`room-${field.name}`}
        >
          {field.label}

          {field.required && (
            <span className="add-room__required">*</span>
          )}
        </label>

        <div className="add-room__input-wrapper">

          {field.prefix && (
            <span className="add-room__input-prefix">
              {field.prefix}
            </span>
          )}

          {field.type === "select" ? (
            <select
              id={`room-${field.name}`}
              className={`add-room__control ${
                hasError ? "add-room__control--error" : ""
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
              id={`room-${field.name}`}
              className={`add-room__control ${
                field.prefix ? "add-room__control--prefixed" : ""
              } ${
                hasError ? "add-room__control--error" : ""
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

        </div>

        {hasError && (
          <span className="add-room__error">
            {errors[field.name]}
          </span>
        )}
      </div>
    );
  };

  return (
    <section className="add-room__section add-room__details">

      {/* SECTION HEADER */}
      <div className="add-room__section-header">
        <div className="add-room__section-icon">
          <SectionIcon />
        </div>

        <h3 className="add-room__section-title">
          {section.title}
        </h3>
      </div>

      {/* ROOM FIELDS */}
      <div className="add-room__fields-grid">
        {fields.map(renderField)}
        
        {/* STATUS */}
        <div className="add-room__field add-room__status-field">
          <span className="add-room__label">
            {status.label}
          </span>

          <label className="add-room__status-control">
            <input
              type="checkbox"
              checked={Boolean(formData[status.name])}
              onChange={(event) =>
                onChange(status.name, event.target.checked)
              }
            />

            <span className="add-room__status-switch" />

            <span className="add-room__status-text">
              {formData[status.name]
                ? status.activeLabel
                : status.inactiveLabel}
            </span>
          </label>
        </div>
      </div>

    </section>
  );
};

export default RoomDetails;
