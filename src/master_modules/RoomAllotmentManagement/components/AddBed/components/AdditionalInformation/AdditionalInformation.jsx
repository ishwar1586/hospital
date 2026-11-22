
import React from "react";
import "./AdditionalInformation.css";

import { additionalInformationConfig } from "@/master_modules/RoomAllotmentManagement/config/addBed/additionalInformation.config.js";
import { bedAdditionalInformationMock } from "@/master_modules/RoomAllotmentManagement/mock/addBed/bedAdditionalInformation.mock";

const AdditionalInformation = ({
  formData,
  options,
  onChange,
}) => {
  const { section, fields, oxygenPoint } = additionalInformationConfig;
  const SectionIcon = section.icon;

  // =========================================
  // CHECKBOX CHANGE
  // =========================================

  const handleFacilityChange = (facilityValue, checked) => {
    const currentFacilities = formData.additionalFacilities || [];

    const updatedFacilities = checked
      ? [...currentFacilities, facilityValue]
      : currentFacilities.filter((item) => item !== facilityValue);

    onChange("additionalFacilities", updatedFacilities);
  };

  return (
    <section className="add-bed__section add-bed__additional-information">

      {/* SECTION HEADER */}
      <div className="add-bed__section-header">
        <div className="add-bed__section-icon">
          <SectionIcon />
        </div>

        <h3 className="add-bed__section-title">
          {section.title}
        </h3>
      </div>

      {/* DROPDOWN FIELDS */}
      <div className="add-bed__additional-grid">

        {fields.map((field) => (
          <div className="add-bed__field" key={field.name}>
            <label
              htmlFor={`bed-${field.name}`}
              className="add-bed__field-label"
            >
              {field.label}
            </label>

            <div className="add-bed__field-control">
              <select
                id={`bed-${field.name}`}
                name={field.name}
                value={formData[field.name] || ""}
                className="add-bed__input add-bed__select"
                onChange={(event) =>
                  onChange(field.name, event.target.value)
                }
              >
                <option value="">
                  {field.placeholder}
                </option>

                {(options?.[field.optionKey] || []).map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}

        {/* OXYGEN POINT TOGGLE */}
        <div className="add-bed__oxygen-field">
          <label
            htmlFor="bed-oxygen-point"
            className="add-bed__oxygen-label"
          >
            {oxygenPoint.label}
          </label>

          <label className="add-bed__toggle">
            <input
              id="bed-oxygen-point"
              type="checkbox"
              checked={Boolean(formData[oxygenPoint.name])}
              onChange={(event) =>
                onChange(oxygenPoint.name, event.target.checked)
              }
            />

            <span className="add-bed__toggle-track">
              <span className="add-bed__toggle-thumb" />
            </span>
          </label>

          <span className="add-bed__oxygen-indicator">
            {oxygenPoint.indicator}
          </span>
        </div>
      </div>

      {/* ADDITIONAL FACILITIES */}
      <div className="add-bed__facilities">
        {bedAdditionalInformationMock.map((facility) => (
          <label
            key={facility.id}
            className="add-bed__facility-option"
          >
            <input
              type="checkbox"
              name={facility.id}
              value={facility.value}
              checked={(formData.additionalFacilities || []).includes(
                facility.value
              )}
              onChange={(event) =>
                handleFacilityChange(
                  facility.value,
                  event.target.checked
                )
              }
            />

            <span className="add-bed__facility-checkbox" />

            <span className="add-bed__facility-label">
              {facility.label}
            </span>
          </label>
        ))}
      </div>

    </section>
  );
};

export default AdditionalInformation;
