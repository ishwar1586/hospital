import React from "react";
import "./BedRemarks.css";

import { bedRemarksConfig } from "@/master_modules/RoomAllotmentManagement/config/addBed/bedRemarks.config";

import NotesOutlinedIcon from "@mui/icons-material/NotesOutlined";

const BedRemarks = ({ formData, onChange }) => {
  const { section, field, characterCount } = bedRemarksConfig;

  const currentValue = formData[field.name] || "";
  const remainingCharacters = field.maxLength - currentValue.length;

  return (
    <section className="add-bed__section add-bed__remarks">
      <div className="add-bed__section-header">
        <div className="add-bed__section-icon">
          <NotesOutlinedIcon />
        </div>

        <div className="add-bed__remarks-heading">
          <h3 className="add-bed__section-title">
            {section.title}
          </h3>

          <p className="add-bed__remarks-description">
            {section.description}
          </p>
        </div>
      </div>

      <div className="add-bed__remarks-field">
        <label
          htmlFor="bed-remarks"
          className="add-bed__field-label"
        >
          {field.label}
        </label>

        <textarea
          id="bed-remarks"
          name={field.name}
          rows={field.rows}
          maxLength={field.maxLength}
          value={currentValue}
          placeholder={field.placeholder}
          className="add-bed__remarks-textarea"
          onChange={(event) =>
            onChange(field.name, event.target.value)
          }
        />

        {characterCount.enabled && (
          <div className="add-bed__remarks-footer">
            <span className="add-bed__remarks-hint">
              Maximum {field.maxLength} characters allowed
            </span>

            {characterCount.showRemaining && (
              <span className="add-bed__remarks-counter">
                {remainingCharacters} characters remaining
              </span>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default BedRemarks;