
import React from "react";

import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

import { labRadiologyConfig } from "../../../../config/labRadiology.config";

import "./SelectedTests.css";

const SelectedTests = ({
  tests = [],
  onRemove,
  clinicalNote = "",
  onClinicalNoteChange,
  disabled = false,
}) => {
  const { selectedTests, clinicalNote: noteConfig } =
    labRadiologyConfig;

  const safeTests = Array.isArray(tests) ? tests : [];

  const safeClinicalNote =
    typeof clinicalNote === "string" ? clinicalNote : "";

  const handleNoteChange = (event) => {
    const value = event.target.value;

    if (value.length <= noteConfig.maxLength) {
      onClinicalNoteChange?.(value);
    }
  };

  const handleRemove = (test) => {
    if (!disabled) {
      onRemove?.(test);
    }
  };

  return (
    <section className="selected-tests">
      <div className="selected-tests__header">
        <div className="selected-tests__heading">
          <span className="selected-tests__heading-icon">
            <DescriptionOutlinedIcon />
          </span>

          <h3 className="selected-tests__title">
            {selectedTests.title}
          </h3>

          <span className="selected-tests__count">
            {safeTests.length}
          </span>
        </div>
      </div>

      <div className="selected-tests__content">
        {safeTests.length > 0 ? (
          <div className="selected-tests__list">
            {safeTests.map((test) => {
              const typeLabel =
                selectedTests.typeLabels[test.type] ||
                test.type;

              return (
                <div
                  className="selected-tests__item"
                  key={test.id}
                >
                  <div className="selected-tests__item-icon">
                    <ScienceOutlinedIcon />
                  </div>

                  <div className="selected-tests__item-name">
                    <span title={test.name}>
                      {test.name}
                    </span>
                  </div>

                  <span
                    className={`selected-tests__type selected-tests__type--${test.type}`}
                  >
                    {typeLabel}
                  </span>

                  <button
                    type="button"
                    className="selected-tests__remove"
                    onClick={() => handleRemove(test)}
                    disabled={disabled}
                    aria-label={`${selectedTests.removeLabel}: ${test.name}`}
                    title={selectedTests.removeLabel}
                  >
                    <CloseOutlinedIcon />
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="selected-tests__empty">
            {selectedTests.emptyMessage}
          </div>
        )}

        <div className="selected-tests__note">
          <label
            className="selected-tests__note-label"
            htmlFor="lab-radiology-clinical-note"
          >
            {noteConfig.label}

            <span className="selected-tests__optional">
              {" "}
              {noteConfig.optionalLabel}
            </span>
          </label>

          <textarea
            id="lab-radiology-clinical-note"
            className="selected-tests__textarea"
            placeholder={noteConfig.placeholder}
            value={safeClinicalNote}
            onChange={handleNoteChange}
            maxLength={noteConfig.maxLength}
            disabled={disabled}
            rows={4}
          />

          {noteConfig.showCharacterCount && (
            <div className="selected-tests__counter">
              <span>
                {safeClinicalNote.length}/{noteConfig.maxLength}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SelectedTests;
