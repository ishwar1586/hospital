
import React from "react";

import { consultationFormConfig } from "../../../../config/consultationForm.config";

import "./PresentIllness.css";

const PresentIllness = ({
  value = "",
  onChange,
  error = "",
  disabled = false,
}) => {
  const field = consultationFormConfig.fields.presentIllness;

  const handleChange = (event) => {
    onChange?.(event.target.value);
  };

  return (
    <section className="present-illness">
      <div className="present-illness__header">
        <div className="present-illness__heading">
          <h3 className="present-illness__title">
            {field.title}
          </h3>

          <p className="present-illness__description">
            {field.description}
          </p>
        </div>
      </div>

      <div className="present-illness__field">
        <label
          htmlFor="present-illness-input"
          className="present-illness__label"
        >
          {field.label}
        </label>

        <textarea
          id="present-illness-input"
          name="presentIllness"
          className={`present-illness__textarea ${
            error ? "present-illness__textarea--error" : ""
          }`}
          placeholder={field.placeholder}
          rows={field.rows}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          aria-invalid={Boolean(error)}
        />

        <div className="present-illness__footer">
          {error ? (
            <span className="present-illness__error">
              {error}
            </span>
          ) : (
            <span className="present-illness__hint">
              {field.hint}
            </span>
          )}
        </div>
      </div>
    </section>
  );
};

export default PresentIllness;
