import React from "react";
import "./ClinicalInformation.css";

const ClinicalInformation = ({ config, formData, onChange, errors = {} }) => {
  return (
    <section className="new-radiology-order__section">
      <div className="new-radiology-order__section-heading">
        <h2>{config.sections.clinical.title}</h2>
        <p>{config.sections.clinical.description}</p>
      </div>

      <div className="new-radiology-order__grid">
        <div className="new-radiology-order__field new-radiology-order__field--full">
          <label htmlFor="radiology-clinical-indication">
            {config.fields.clinicalIndication.label}
            <span className="new-radiology-order__required">*</span>
          </label>

          <textarea
            id="radiology-clinical-indication"
            rows={3}
            maxLength={500}
            value={formData.clinicalIndication}
            placeholder={config.fields.clinicalIndication.placeholder}
            aria-invalid={Boolean(errors.clinicalIndication)}
            onChange={(event) =>
              onChange("clinicalIndication", event.target.value)
            }
          />

          <div className="new-radiology-order__field-hint">
            <span>
              {errors.clinicalIndication ? (
                <span className="new-radiology-order__error" role="alert">
                  {errors.clinicalIndication}
                </span>
              ) : (
                "Include the reason for the examination."
              )}
            </span>
            <span>{formData.clinicalIndication.length}/500</span>
          </div>
        </div>

        <div className="new-radiology-order__field new-radiology-order__field--full">
          <label htmlFor="radiology-clinical-history">
            {config.fields.relevantHistory.label}
          </label>

          <textarea
            id="radiology-clinical-history"
            rows={3}
            maxLength={2000}
            value={formData.relevantHistory}
            placeholder={config.fields.relevantHistory.placeholder}
            onChange={(event) =>
              onChange("relevantHistory", event.target.value)
            }
          />
        </div>

        <div className="new-radiology-order__field new-radiology-order__field--full">
          <label htmlFor="radiology-order-notes">
            {config.fields.notes.label}
          </label>

          <textarea
            id="radiology-order-notes"
            rows={2}
            maxLength={1000}
            value={formData.notes}
            placeholder={config.fields.notes.placeholder}
            onChange={(event) => onChange("notes", event.target.value)}
          />
        </div>
      </div>
    </section>
  );
};

export default ClinicalInformation;