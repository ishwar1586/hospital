
import React from "react";
import "./BedDetails.css";

import { bedDetailsConfig } from "@/master_modules/RoomAllotmentManagement/config/addBed/bedDetails.config.js";

const BedDetails = ({
  formData,
  options,
  onChange,
  errors = {},
}) => {
  const { section, fields } = bedDetailsConfig;
  const SectionIcon = section.icon;

  const getFieldOptions = (field) => {
    const fieldOptions = options?.[field.optionKey] || [];

    // Room options ko selected Ward ke according filter karo
    if (field.dependentOn === "wardId") {
      return fieldOptions.filter(
        (option) =>
          !option.wardId || option.wardId === formData.wardId
      );
    }

    return fieldOptions;
  };

  const handleChange = (field, value) => {
    onChange(field.name, value);
  };

  return (
    <section className="add-bed__section add-bed__details">

      {/* SECTION HEADER */}
      <div className="add-bed__section-header">
        <div className="add-bed__section-icon">
          <SectionIcon />
        </div>

        <h3 className="add-bed__section-title">
          {section.title}
        </h3>
      </div>

      {/* FORM FIELDS */}
      <div className="add-bed__details-grid">
        {fields.map((field) => {
          const fieldOptions = field.optionKey
            ? getFieldOptions(field)
            : [];

          const fieldValue = formData?.[field.name] ?? "";

          const isRoomDisabled =
            field.dependentOn === "wardId" && !formData?.wardId;

          return (
            <div
              key={field.name}
              className={`add-bed__field add-bed__field--${field.gridColumn}`}
            >
              <label
                htmlFor={`bed-${field.name}`}
                className="add-bed__field-label"
              >
                {field.label}

                {field.required && (
                  <span className="add-bed__required"> *</span>
                )}
              </label>

              <div
                className={`add-bed__field-control ${
                  field.statusField && fieldValue === "available"
                    ? "add-bed__field-control--available"
                    : ""
                }`}
              >
                {field.type === "select" ? (
                  <select
                    id={`bed-${field.name}`}
                    name={field.name}
                    value={fieldValue}
                    disabled={isRoomDisabled}
                    className="add-bed__input add-bed__select"
                    onChange={(event) =>
                      handleChange(field, event.target.value)
                    }
                  >
                    <option value="">
                      {isRoomDisabled
                        ? "Select Ward First"
                        : field.placeholder}
                    </option>

                    {fieldOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <>
                    {field.prefix && (
                      <span className="add-bed__input-prefix">
                        {field.prefix}
                      </span>
                    )}

                    <input
                      id={`bed-${field.name}`}
                      name={field.name}
                      type={field.type}
                      value={fieldValue}
                      placeholder={field.placeholder}
                      min={field.min}
                      className="add-bed__input"
                      onChange={(event) =>
                        handleChange(
                          field,
                          field.type === "number"
                            ? event.target.value
                            : event.target.value
                        )
                      }
                    />
                  </>
                )}
              </div>

              {errors[field.name] && (
                <span className="add-bed__field-error">
                  {errors[field.name]}
                </span>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default BedDetails;
