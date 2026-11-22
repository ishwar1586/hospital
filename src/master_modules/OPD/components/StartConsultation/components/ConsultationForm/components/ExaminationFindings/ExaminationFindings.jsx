
import React from "react";

import {
  consultationFormConfig,
  generalConditionOptions,
  consciousnessOptions,
} from "../../../../config/consultationForm.config";

import "./ExaminationFindings.css";

const ExaminationFindings = ({
  value = {},
  onChange,
  errors = {},
  disabled = false,
}) => {
  const config = consultationFormConfig.fields.examinationFindings;
const fields = config.fields;

  const systemicExamination = value.systemicExamination || {};

  const handleFieldChange = (fieldName, fieldValue) => {
    onChange?.({
      ...value,
      [fieldName]: fieldValue,
    });
  };

  const handleSystemicChange = (fieldName, fieldValue) => {
    onChange?.({
      ...value,
      systemicExamination: {
        ...systemicExamination,
        [fieldName]: fieldValue,
      },
    });
  };

  return (
    <section className="examination-findings">
      <div className="examination-findings__header">
        <div className="examination-findings__heading">
          <h3 className="examination-findings__title">
            {config.title}
          </h3>

          <p className="examination-findings__description">
            {config.description}
          </p>
        </div>
      </div>

      {/* General Examination */}

      <div className="examination-findings__section">
        <div className="examination-findings__section-heading">
          <h4 className="examination-findings__section-title">
            General Examination
          </h4>
        </div>

        <div className="examination-findings__grid">
          <div className="examination-findings__field">
            <label className="examination-findings__label">
              {fields.generalCondition.label}
            </label>

            <select
              className="examination-findings__select"
              value={value.generalCondition || ""}
              onChange={(event) =>
                handleFieldChange(
                  "generalCondition",
                  event.target.value
                )
              }
              disabled={disabled}
            >
              {generalConditionOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>

            {errors.generalCondition && (
              <span className="examination-findings__error">
                {errors.generalCondition}
              </span>
            )}
          </div>

          <div className="examination-findings__field">
            <label className="examination-findings__label">
              {fields.consciousnessLevel.label}
            </label>

            <select
              className="examination-findings__select"
              value={value.consciousnessLevel || ""}
              onChange={(event) =>
                handleFieldChange(
                  "consciousnessLevel",
                  event.target.value
                )
              }
              disabled={disabled}
            >
              {consciousnessOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>

            {errors.consciousnessLevel && (
              <span className="examination-findings__error">
                {errors.consciousnessLevel}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Systemic Examination */}

      <div className="examination-findings__section">
        <div className="examination-findings__section-heading">
          <h4 className="examination-findings__section-title">
            Systemic Examination
          </h4>
        </div>

        <div className="examination-findings__grid">
          {[
            "cardiovascular",
            "respiratory",
            "abdomen",
            "centralNervousSystem",
          ].map((fieldName) => (
            <div
              className="examination-findings__field"
              key={fieldName}
            >
              <label className="examination-findings__label">
                {fields[fieldName].label}
              </label>

              <textarea
                className="examination-findings__textarea"
                placeholder={fields[fieldName].placeholder}
                value={systemicExamination[fieldName] || ""}
                onChange={(event) =>
                  handleSystemicChange(
                    fieldName,
                    event.target.value
                  )
                }
                disabled={disabled}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Other Findings */}

      <div className="examination-findings__section">
        <div className="examination-findings__field">
          <label className="examination-findings__label">
            {fields.otherSystemicFindings.label}
          </label>

          <textarea
            className="examination-findings__textarea"
            placeholder={fields.otherSystemicFindings.placeholder}
            value={value.otherSystemicFindings || ""}
            onChange={(event) =>
              handleFieldChange(
                "otherSystemicFindings",
                event.target.value
              )
            }
            disabled={disabled}
          />
        </div>
      </div>
    </section>
  );
};

export default ExaminationFindings;
