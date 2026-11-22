
import React from "react";

import { consultationFormConfig } from "../../../../config/consultationForm.config";

import "./FamilyHistory.css";

const FamilyHistory = ({
  value = "",
  onChange,
  error = "",
  disabled = false,
}) => {
  const field = consultationFormConfig.fields.familyHistory;

  const handleChange = (event) => {
    onChange?.(event.target.value);
  };

  return (
    <section className="family-history">
      <div className="family-history__header">
        <div className="family-history__heading">
          <h3 className="family-history__title">
            {field.title}
          </h3>

          <p className="family-history__description">
            {field.description}
          </p>
        </div>
      </div>

      <div className="family-history__field">
        <label
          htmlFor="family-history-input"
          className="family-history__label"
        >
          {field.label}
        </label>

        <textarea
          id="family-history-input"
          name="familyHistory"
          className={`family-history__textarea ${
            error ? "family-history__textarea--error" : ""
          }`}
          placeholder={field.placeholder}
          rows={field.rows}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          aria-invalid={Boolean(error)}
        />

        {error ? (
          <span className="family-history__error">
            {error}
          </span>
        ) : (
          <span className="family-history__hint">
            {field.hint}
          </span>
        )}
      </div>
    </section>
  );
};

export default FamilyHistory;
