// src/features/IPDManagement/components/TransferPatient/TransferHospitalDetails.jsx

import React from "react";

import {
  TRANSFER_WITHIN_HOSPITAL_FIELDS,
  TRANSFER_ANOTHER_HOSPITAL_FIELDS,
  TRANSFER_MODES,
} from "../../config/transferPatientConfig";

import "./TransferHospitalDetails.css";


const TransferHospitalDetails = ({
  transferType = "withinHospital",
  formData = {},
  onChange,
  options = {},
}) => {

  const isWithinHospital =
    transferType === "withinHospital";


  const fields = isWithinHospital
    ? TRANSFER_WITHIN_HOSPITAL_FIELDS
    : TRANSFER_ANOTHER_HOSPITAL_FIELDS;


  const handleChange = (fieldKey, value) => {

    onChange?.({
      ...formData,
      [fieldKey]: value,
    });

  };


  const getOptions = (fieldKey) => {

    const fieldOptions =
      options?.[fieldKey];

    if (Array.isArray(fieldOptions)) {
      return fieldOptions;
    }

    return [];
  };


  const renderSelectField = (field) => {

    const fieldOptions =
      getOptions(field.key);

    return (
      <div
        key={field.key}
        className="ipd-transfer-hospital-details__field"
      >

        <label className="ipd-transfer-hospital-details__label">

          {field.label}

          {field.required && (
            <span className="ipd-transfer-hospital-details__required">
              *
            </span>
          )}

        </label>


        <select
          className="ipd-transfer-hospital-details__select"
          value={formData?.[field.key] ?? ""}
          onChange={(event) =>
            handleChange(
              field.key,
              event.target.value
            )
          }
        >

          <option value="">
            {field.placeholder ?? "Select"}
          </option>

          {fieldOptions.map((option) => {

            const optionValue =
              option?.value ??
              option?.id ??
              "";

            const optionLabel =
              option?.label ??
              option?.name ??
              option?.title ??
              "";

            return (
              <option
                key={optionValue}
                value={optionValue}
              >
                {optionLabel}
              </option>
            );

          })}

        </select>

      </div>
    );
  };


  const renderRadioField = (field) => {

    const modes = Array.isArray(
      TRANSFER_MODES
    )
      ? TRANSFER_MODES
      : [];


    return (
      <div
        key={field.key}
        className="ipd-transfer-hospital-details__field ipd-transfer-hospital-details__field--full"
      >

        <label className="ipd-transfer-hospital-details__label">

          {field.label}

          {field.required && (
            <span className="ipd-transfer-hospital-details__required">
              *
            </span>
          )}

        </label>


        <div className="ipd-transfer-hospital-details__radio-group">

          {modes.map((mode) => {

            const isSelected =
              formData?.[field.key] ===
              mode.value;


            return (
              <label
                key={mode.id ?? mode.value}
                className={[
                  "ipd-transfer-hospital-details__radio-option",
                  isSelected
                    ? "ipd-transfer-hospital-details__radio-option--selected"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >

                <input
                  type="radio"
                  name={field.key}
                  value={mode.value}
                  checked={isSelected}
                  onChange={(event) =>
                    handleChange(
                      field.key,
                      event.target.value
                    )
                  }
                />

                <span>
                  {mode.label}
                </span>

              </label>
            );

          })}

        </div>

      </div>
    );
  };


  const renderField = (field) => {

    if (!field) {
      return null;
    }


    if (field.type === "radio") {
      return renderRadioField(field);
    }


    return renderSelectField(field);
  };


  return (
    <section className="ipd-transfer-hospital-details">

      {/* =====================================================
          HEADER
          ===================================================== */}

      <div className="ipd-transfer-hospital-details__header">

        <h3 className="ipd-transfer-hospital-details__title">
          {isWithinHospital
            ? "Transfer Within Hospital"
            : "Transfer To Another Hospital"}
        </h3>

        <p className="ipd-transfer-hospital-details__subtitle">
          {isWithinHospital
            ? "Select the target ward, room and bed for the patient."
            : "Enter the receiving hospital and transfer details."}
        </p>

      </div>


      {/* =====================================================
          FORM
          ===================================================== */}

      <div className="ipd-transfer-hospital-details__form">

        {Object.values(fields).map((field) =>
          renderField(field)
        )}

      </div>

    </section>
  );
};


export default TransferHospitalDetails;