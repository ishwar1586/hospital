// src/features/IPDManagement/components/DischargePatient/DischargeInformation.jsx

import React from "react";

import {
  DISCHARGE_INFORMATION_FIELDS,
  DEATH_INFORMATION_FIELDS,
  DEATH_ADDITIONAL_INFORMATION_FIELDS,
  DISCHARGE_CONDITION_CONFIG,
} from "../../config/dischargePatientConfig";

import "./DischargeInformation.css";


const DischargeInformation = ({
  formData = {},
  onChange,
}) => {

  /* ==========================================================
     CURRENT DISCHARGE TYPE
     ========================================================== */

  const isDeath =
    formData?.dischargeType === "death";


  /* ==========================================================
     SELECT THE CORRECT FIELD CONFIG
     ========================================================== */

  const normalFields = Object.values(
    DISCHARGE_INFORMATION_FIELDS || {}
  ).filter(
    (field) =>
      field?.key !== "dischargeType"
  );


  const deathFields = Object.values(
    DEATH_INFORMATION_FIELDS || {}
  );


  const deathAdditionalFields = Object.values(
    DEATH_ADDITIONAL_INFORMATION_FIELDS || {}
  );


  const fields = isDeath
    ? [
        ...deathFields,
        ...deathAdditionalFields,
      ]
    : normalFields;


  /* ==========================================================
     FIELD VALUE
     ========================================================== */

  const getFieldValue = (field) => {

    if (!field?.key) {
      return "";
    }

    return formData?.[field.key] ?? "";
  };


  /* ==========================================================
     CHANGE HANDLER
     ========================================================== */

  const handleChange = (
    field,
    value
  ) => {

    if (!field?.key) {
      return;
    }

    onChange?.({
      [field.key]: value,
    });
  };


  /* ==========================================================
     SELECT OPTIONS
     ========================================================== */

  const getOptions = (field) => {

    /* --------------------------------------------------------
       NORMAL DISCHARGE CONDITION
       -------------------------------------------------------- */

    if (
      field?.key ===
      "dischargeCondition"
    ) {

      return Object.values(
        DISCHARGE_CONDITION_CONFIG || {}
      );

    }


    /*
     * Doctor / Cause of Death /
     * Place of Death / Informed To
     *
     * Options will come from API/mock later.
     */

    if (
      Array.isArray(field?.options)
    ) {

      return field.options;

    }


    return [];
  };


  /* ==========================================================
     RENDER SELECT
     ========================================================== */

  const renderSelect = (field) => {

    const options =
      getOptions(field);

    const value =
      getFieldValue(field);


    return (
      <div
        key={field.key}
        className="ipd-discharge-information__field"
      >

        <label className="ipd-discharge-information__label">

          {field.label}

          {field.required && (
            <span className="ipd-discharge-information__required">
              *
            </span>
          )}

        </label>


        <select
          className="ipd-discharge-information__select"
          value={value}
          onChange={(event) =>
            handleChange(
              field,
              event.target.value
            )
          }
        >

          <option value="">
            {field.placeholder ||
              "Select"}
          </option>


          {options.map(
            (option) => {

              const optionValue =
                typeof option ===
                "string"
                  ? option
                  : option?.value;

              const optionLabel =
                typeof option ===
                "string"
                  ? option
                  : option?.label ||
                    optionValue;

              return (
                <option
                  key={optionValue}
                  value={optionValue}
                >
                  {optionLabel}
                </option>
              );

            }
          )}

        </select>

      </div>
    );
  };


  /* ==========================================================
     RENDER TEXTAREA
     ========================================================== */

  const renderTextarea = (
    field
  ) => {

    const value =
      getFieldValue(field);


    return (
      <div
        key={field.key}
        className="
          ipd-discharge-information__field
          ipd-discharge-information__field--full
        "
      >

        <label className="ipd-discharge-information__label">

          {field.label}

          {field.required && (
            <span className="ipd-discharge-information__required">
              *
            </span>
          )}

        </label>


        <textarea
          className="ipd-discharge-information__textarea"
          value={value}
          placeholder={
            field.placeholder || ""
          }
          maxLength={
            field.maxLength
          }
          rows={5}
          onChange={(event) =>
            handleChange(
              field,
              event.target.value
            )
          }
        />

      </div>
    );
  };


  /* ==========================================================
     RENDER INPUT
     ========================================================== */

  const renderInput = (
    field
  ) => {

    const value =
      getFieldValue(field);


    return (
      <div
        key={field.key}
        className="ipd-discharge-information__field"
      >

        <label className="ipd-discharge-information__label">

          {field.label}

          {field.required && (
            <span className="ipd-discharge-information__required">
              *
            </span>
          )}

        </label>


        <input
          type={
            field.type || "text"
          }
          className="ipd-discharge-information__input"
          value={value}
          placeholder={
            field.placeholder || ""
          }
          onChange={(event) =>
            handleChange(
              field,
              event.target.value
            )
          }
        />

      </div>
    );
  };


  /* ==========================================================
     RENDER FIELD
     ========================================================== */

  const renderField = (
    field
  ) => {

    if (!field?.key) {
      return null;
    }


    if (
      field.type ===
      "select"
    ) {

      return renderSelect(
        field
      );

    }


    if (
      field.type ===
      "textarea"
    ) {

      return renderTextarea(
        field
      );

    }


    return renderInput(
      field
    );

  };


  /* ==========================================================
     RENDER
     ========================================================== */

  return (
    <section className="ipd-discharge-information">


      {/* ======================================================
          HEADER
          ====================================================== */}

      <div className="ipd-discharge-information__header">

        <h2 className="ipd-discharge-information__title">

          {isDeath
            ? "Death Information"
            : "Discharge Information"}

        </h2>


        <p className="ipd-discharge-information__subtitle">

          {isDeath
            ? "Enter the required information for death discharge."
            : "Enter the clinical and discharge details of the patient."}

        </p>

      </div>


      {/* ======================================================
          FORM
          ====================================================== */}

      <div className="ipd-discharge-information__form">

        {fields.map(
          renderField
        )}

      </div>


    </section>
  );
};


export default DischargeInformation;