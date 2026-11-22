
import React from "react";

import { consultationFormConfig } from "../../../../config/consultationForm.config";

import "./PastHistory.css";

const PastHistory = ({
  value = "",
  onChange,
  error = "",
  disabled = false,
}) => {
  const field = consultationFormConfig.fields.pastHistory;

  const handleChange = (event) => {
    onChange?.(event.target.value);
  };

  return (
    <section className="past-history">
      <div className="past-history__header">
        <div className="past-history__heading">
          <h3 className="past-history__title">
            {field.title}
          </h3>

          <p className="past-history__description">
            {field.description}
          </p>
        </div>
      </div>

      <div className="past-history__field">
        <label
          htmlFor="past-history-input"
          className="past-history__label"
        >
          {field.label}
        </label>

        <textarea
          id="past-history-input"
          name="pastHistory"
          className={`past-history__textarea ${
            error ? "past-history__textarea--error" : ""
          }`}
          placeholder={field.placeholder}
          rows={field.rows}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          aria-invalid={Boolean(error)}
        />

        {error && (
          <span className="past-history__error">
            {error}
          </span>
        )}

        {!error && field.hint && (
          <span className="past-history__hint">
            {field.hint}
          </span>
        )}
      </div>
    </section>
  );
};

export default PastHistory;
