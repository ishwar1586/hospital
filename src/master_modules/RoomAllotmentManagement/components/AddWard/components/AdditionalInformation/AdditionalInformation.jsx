
import React from "react";
import "./AdditionalInformation.css";

import { additionalInformationConfig } from "../../../../config/addWard/additionalInformation.config";

const AdditionalInformation = ({
  formData,
  onChange,
}) => {
  const { section, description } = additionalInformationConfig;

  const SectionIcon = section.icon;

  const descriptionValue = formData[description.name] || "";

  const handleDescriptionChange = (event) => {
    const value = event.target.value;

    if (value.length <= description.maxLength) {
      onChange(description.name, value);
    }
  };

  return (
    <section className="add-ward__section add-ward__additional-info">

      {/* SECTION HEADER */}
      <div className="add-ward__section-header">
        <div className="add-ward__section-icon">
          <SectionIcon />
        </div>

        <h3 className="add-ward__section-title">
          {section.title}
        </h3>
      </div>

      {/* DESCRIPTION FIELD */}
      <div className="add-ward__description-field">

        <label
          className="add-ward__label"
          htmlFor="ward-description"
        >
          {description.label}
        </label>

        <textarea
          id="ward-description"
          className="add-ward__description-control"
          name={description.name}
          rows={description.rows}
          maxLength={description.maxLength}
          placeholder={description.placeholder}
          value={descriptionValue}
          onChange={handleDescriptionChange}
        />

        {/* CHARACTER COUNTER */}
        <div className="add-ward__character-counter">
          <span>
            {descriptionValue.length} / {description.maxLength}
          </span>
        </div>

      </div>

    </section>
  );
};

export default AdditionalInformation;
