
import React from "react";

import { consultationFormConfig } from "../../../../config/consultationForm.config";

import "./PersonalSocialHistory.css";

const PersonalSocialHistory = ({
  value = "",
  onChange,
  error = "",
  disabled = false,
}) => {
  const field = consultationFormConfig.fields.personalSocialHistory;

  const handleChange = (event) => {
    onChange?.(event.target.value);
  };

  return (
    <section className="personal-social-history">
      <div className="personal-social-history__header">
        <div className="personal-social-history__heading">
          <h3 className="personal-social-history__title">
            {field.title}
          </h3>

          <p className="personal-social-history__description">
            {field.description}
          </p>
        </div>
      </div>

      <div className="personal-social-history__field">
        <label
          htmlFor="personal-social-history-input"
          className="personal-social-history__label"
        >
          {field.label}
        </label>

        <textarea
          id="personal-social-history-input"
          name="personalSocialHistory"
          className={`personal-social-history__textarea ${
            error ? "personal-social-history__textarea--error" : ""
          }`}
          placeholder={field.placeholder}
          rows={field.rows}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          aria-invalid={Boolean(error)}
        />

        {error ? (
          <span className="personal-social-history__error">
            {error}
          </span>
        ) : (
          <span className="personal-social-history__hint">
            {field.hint}
          </span>
        )}
      </div>
    </section>
  );
};

export default PersonalSocialHistory;
