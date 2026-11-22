
import React, { useMemo } from "react";

import { consultationFormConfig } from "../../../../config/consultationForm.config";

import "./VitalsForm.css";

const VitalsForm = ({
  value = {},
  onChange,
  errors = {},
  disabled = false,
}) => {
 const config = consultationFormConfig.fields.vitals;
const fields = config.fields;

  const bmi = useMemo(() => {
    const height = Number(value.height);
    const weight = Number(value.weight);

    if (!height || !weight || height <= 0 || weight <= 0) {
      return "";
    }

    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(1);
  }, [value.height, value.weight]);

  const handleChange = (fieldName, fieldValue) => {
    const updatedValues = {
      ...value,
      [fieldName]: fieldValue,
    };

    if (fieldName === "height" || fieldName === "weight") {
      const height = Number(
        fieldName === "height" ? fieldValue : value.height
      );

      const weight = Number(
        fieldName === "weight" ? fieldValue : value.weight
      );

      if (height > 0 && weight > 0) {
        const heightInMeters = height / 100;

        updatedValues.bmi = (
          weight / (heightInMeters * heightInMeters)
        ).toFixed(1);
      } else {
        updatedValues.bmi = "";
      }
    }

    onChange?.(updatedValues);
  };

  const renderField = (fieldName) => {
    const field = fields[fieldName];

    return (
      <div className="vitals-form__field" key={fieldName}>
        <label
          htmlFor={`vitals-${fieldName}`}
          className="vitals-form__label"
        >
          {field.label}
        </label>

        <div className="vitals-form__input-wrapper">
          <input
            id={`vitals-${fieldName}`}
            name={fieldName}
            type="text"
            inputMode={fieldName === "bloodPressure" ? "text" : "decimal"}
            className={`vitals-form__input ${
              errors[fieldName] ? "vitals-form__input--error" : ""
            } ${field.readOnly ? "vitals-form__input--readonly" : ""}`}
            placeholder={field.placeholder}
            value={
              fieldName === "bmi"
                ? bmi
                : value[fieldName] || ""
            }
            onChange={(event) =>
              handleChange(fieldName, event.target.value)
            }
            disabled={disabled || field.readOnly}
            readOnly={field.readOnly || false}
            aria-invalid={Boolean(errors[fieldName])}
          />

          {field.unit && (
            <span className="vitals-form__unit">
              {field.unit}
            </span>
          )}
        </div>

        {errors[fieldName] && (
          <span className="vitals-form__error">
            {errors[fieldName]}
          </span>
        )}
      </div>
    );
  };

  return (
    <section className="vitals-form">
      <div className="vitals-form__header">
        <div className="vitals-form__heading">
          <h3 className="vitals-form__title">
            {config.title}
          </h3>

          <p className="vitals-form__description">
            {config.description}
          </p>
        </div>
      </div>

      <div className="vitals-form__grid">
        {Object.keys(fields).map(renderField)}
      </div>
    </section>
  );
};

export default VitalsForm;
