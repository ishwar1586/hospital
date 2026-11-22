
import React from "react";
import "./DepartmentDetails.css";

import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

import { departmentDetailsConfig } from "../../../../config/addDepartment/departmentDetails.config";

const DepartmentDetails = ({
  formData = {},
  onChange,
  departmentTypes = [],
  errors = {},
  children,
}) => {
  const { section, fields } = departmentDetailsConfig;

  const handleChange = (fieldName, value) => {
    onChange?.(fieldName, value);
  };

  const renderField = (field) => {
    const value = formData[field.name] ?? "";
    const error = errors[field.name];

    return (
      <div
        className={`department-details__field department-details__field--${field.gridColumn}`}
      >
        <label
          htmlFor={`department-${field.name}`}
          className="department-details__label"
        >
          {field.label}

          {field.required && (
            <span className="department-details__required">*</span>
          )}
        </label>

        {field.type === "text" && (
          <input
            id={`department-${field.name}`}
            type="text"
            name={field.name}
            className={`department-details__input ${
              error ? "department-details__input--error" : ""
            }`}
            placeholder={field.placeholder}
            value={value}
            maxLength={field.maxLength}
            onChange={(event) =>
              handleChange(field.name, event.target.value)
            }
            aria-invalid={Boolean(error)}
          />
        )}

        {field.type === "select" && (
          <div className="department-details__select-wrapper">
            <select
              id={`department-${field.name}`}
              name={field.name}
              className={`department-details__select ${
                error ? "department-details__select--error" : ""
              }`}
              value={value}
              onChange={(event) =>
                handleChange(field.name, event.target.value)
              }
              aria-invalid={Boolean(error)}
            >
              <option value="">{field.placeholder}</option>

              {departmentTypes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <KeyboardArrowDownOutlinedIcon className="department-details__select-icon" />
          </div>
        )}

        {field.type === "textarea" && (
          <>
            <textarea
              id={`department-${field.name}`}
              name={field.name}
              className={`department-details__textarea ${
                error ? "department-details__textarea--error" : ""
              }`}
              placeholder={field.placeholder}
              value={value}
              maxLength={field.maxLength}
              rows={field.rows}
              onChange={(event) =>
                handleChange(field.name, event.target.value)
              }
              aria-invalid={Boolean(error)}
            />

            {field.maxLength && (
              <div className="department-details__character-count">
                {String(value).length}/{field.maxLength}
              </div>
            )}
          </>
        )}

        {error && (
          <span className="department-details__error">
            {error}
          </span>
        )}
      </div>
    );
  };

  return (
    <section className="department-details">
      <div className="department-details__header">
        <BusinessOutlinedIcon className="department-details__icon" />

        <h3 className="department-details__title">
          {section.title}
        </h3>
      </div>

      <div className="department-details__grid">
        {fields.map((field) => (
          <React.Fragment key={field.id}>
            {/* Department Head will render before Description */}
            {field.name === "description" && children}

            {renderField(field)}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default DepartmentDetails;
