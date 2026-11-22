
import React from "react";
import { diagnosisConfig } from "../../../../config/diagnosis.config";
import "./ClinicalAssessment.css";

const ClinicalAssessment = ({
  value = "",
  onChange,
  error = "",
  disabled = false,
}) => {
  const config = diagnosisConfig.sections.clinicalAssessment;

  const handleChange = (event) => {
    onChange?.(event.target.value);
  };

  return (
    <section className="clinical-assessment">
      <div className="clinical-assessment__header">
        <div className="clinical-assessment__icon">
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

        <div className="clinical-assessment__heading">
          <h3 className="clinical-assessment__title">
            {config.title}
          </h3>

          <p className="clinical-assessment__description">
            {config.description}
          </p>
        </div>
      </div>

      <div className="clinical-assessment__field">
        <textarea
          id="clinical-assessment"
          name="clinicalAssessment"
          className={`clinical-assessment__textarea ${
            error ? "clinical-assessment__textarea--error" : ""
          }`}
          value={value}
          onChange={handleChange}
          placeholder={config.placeholder}
          maxLength={config.maxLength}
          rows={config.rows}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={
            error
              ? "clinical-assessment-error clinical-assessment-counter"
              : "clinical-assessment-counter"
          }
        />

        <div className="clinical-assessment__footer">
          {error ? (
            <span
              id="clinical-assessment-error"
              className="clinical-assessment__error"
              role="alert"
            >
              {error}
            </span>
          ) : (
            <span />
          )}

          <span
            id="clinical-assessment-counter"
            className="clinical-assessment__counter"
          >
            {value.length}/{config.maxLength}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ClinicalAssessment;
