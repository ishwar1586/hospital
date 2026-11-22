
import React from "react";
import { NotesOutlined } from "@mui/icons-material";
import "./AdditionalInstructions.css";

const AdditionalInstructions = ({
  value = "",
  onChange,
  disabled = false,
  maxLength = 1000,
}) => {
  const handleChange = (event) => {
    onChange?.(event.target.value);
  };

  return (
    <section className="prescription-instructions">
      <div className="prescription-instructions__header">
        <div className="prescription-instructions__heading">
          <span className="prescription-instructions__icon">
            <NotesOutlined />
          </span>

          <div>
            <h3 className="prescription-instructions__title">
              Additional Instructions
            </h3>
            <p className="prescription-instructions__subtitle">
              Add any special instructions for the patient.
            </p>
          </div>
        </div>

        <span className="prescription-instructions__optional">
          Optional
        </span>
      </div>

      <div className="prescription-instructions__body">
        <textarea
          className="prescription-instructions__textarea"
          value={value}
          onChange={handleChange}
          placeholder="e.g. Take medicines after meals, drink plenty of water, avoid oily food..."
          maxLength={maxLength}
          disabled={disabled}
          rows={4}
        />

        <div className="prescription-instructions__footer">
          <span className="prescription-instructions__hint">
            These instructions will appear on the prescription.
          </span>

          <span className="prescription-instructions__counter">
            {value.length}/{maxLength}
          </span>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInstructions;
