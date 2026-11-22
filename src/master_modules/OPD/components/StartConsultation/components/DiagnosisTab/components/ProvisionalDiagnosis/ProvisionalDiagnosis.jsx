
import React from "react";
import { diagnosisConfig } from "../../../../config/diagnosis.config";
import "./ProvisionalDiagnosis.css";

const ProvisionalDiagnosis = ({
  value = "",
  onChange,
  error = "",
  disabled = false,
}) => {
  const config = diagnosisConfig.sections.provisionalDiagnosis;

  const handleChange = (event) => {
    onChange?.(event.target.value);
  };

  return (
    <section className="provisional-diagnosis">
      <div className="provisional-diagnosis__header">
        <div className="provisional-diagnosis__icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M6 3.75H14L19 8.75V19.25C19 20.2165 18.2165 21 17.25 21H6.75C5.7835 21 5 20.2165 5 19.25V5.5C5 4.5335 5.7835 3.75 6.75 3.75H6Z"
              fill="currentColor"
            />
            <path
              d="M14 3.75V8.75H19"
              stroke="white"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M8.5 12H15.5M8.5 15H15.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="provisional-diagnosis__heading">
          <h3 className="provisional-diagnosis__title">
            {config.title}
          </h3>

          <p className="provisional-diagnosis__description">
            {config.description}
          </p>
        </div>
      </div>

      <div className="provisional-diagnosis__field">
        <textarea
          id="provisional-diagnosis"
          className={`provisional-diagnosis__textarea ${
            error ? "provisional-diagnosis__textarea--error" : ""
          }`}
          name="provisionalDiagnosis"
          value={value}
          onChange={handleChange}
          placeholder={config.placeholder}
          maxLength={config.maxLength}
          rows={config.rows}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={
            error
              ? "provisional-diagnosis-error provisional-diagnosis-counter"
              : "provisional-diagnosis-counter"
          }
        />

        <div className="provisional-diagnosis__footer">
          {error ? (
            <span
              id="provisional-diagnosis-error"
              className="provisional-diagnosis__error"
              role="alert"
            >
              {error}
            </span>
          ) : (
            <span />
          )}

          <span
            id="provisional-diagnosis-counter"
            className="provisional-diagnosis__counter"
          >
            {value.length}/{config.maxLength}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProvisionalDiagnosis;
