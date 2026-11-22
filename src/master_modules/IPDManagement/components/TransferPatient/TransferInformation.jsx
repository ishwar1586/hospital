// src/features/IPDManagement/components/TransferPatient/TransferInformation.jsx

import React from "react";

import {
  TRANSFER_INFORMATION_FIELDS,
} from "../../config/transferPatientConfig";

import "./TransferInformation.css";


const TransferInformation = ({
  formData = {},
  onChange,
  options = {},
}) => {

  const fields = TRANSFER_INFORMATION_FIELDS ?? {};


  const handleChange = (fieldKey, value) => {

    onChange?.({
      ...formData,
      [fieldKey]: value,
    });

  };


  const getOptions = (fieldKey) => {

    const fieldOptions =
      options?.[fieldKey];

    return Array.isArray(fieldOptions)
      ? fieldOptions
      : [];
  };


  const renderSelect = (field) => {

    const fieldOptions =
      getOptions(field.key);


    return (
      <div
        key={field.key}
        className="ipd-transfer-information__field"
      >

        <label className="ipd-transfer-information__label">

          {field.label}

          {field.required && (
            <span className="ipd-transfer-information__required">
              *
            </span>
          )}

        </label>


        <select
          className="ipd-transfer-information__select"
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

            const value =
              option?.value ??
              option?.id ??
              "";

            const label =
              option?.label ??
              option?.name ??
              option?.title ??
              "";

            return (
              <option
                key={value}
                value={value}
              >
                {label}
              </option>
            );

          })}

        </select>

      </div>
    );
  };


  const renderDate = (field) => {

    return (
      <div
        key={field.key}
        className="ipd-transfer-information__field"
      >

        <label className="ipd-transfer-information__label">

          {field.label}

          {field.required && (
            <span className="ipd-transfer-information__required">
              *
            </span>
          )}

        </label>


        <input
          type="date"
          className="ipd-transfer-information__input"
          value={formData?.[field.key] ?? ""}
          onChange={(event) =>
            handleChange(
              field.key,
              event.target.value
            )
          }
        />

      </div>
    );
  };


  const renderTime = (field) => {

    return (
      <div
        key={field.key}
        className="ipd-transfer-information__field"
      >

        <label className="ipd-transfer-information__label">

          {field.label}

          {field.required && (
            <span className="ipd-transfer-information__required">
              *
            </span>
          )}

        </label>


        <input
          type="time"
          className="ipd-transfer-information__input"
          value={formData?.[field.key] ?? ""}
          onChange={(event) =>
            handleChange(
              field.key,
              event.target.value
            )
          }
        />

      </div>
    );
  };


  const renderTextarea = (field) => {

    return (
      <div
        key={field.key}
        className="ipd-transfer-information__field ipd-transfer-information__field--full"
      >

        <label className="ipd-transfer-information__label">

          {field.label}

          {field.required && (
            <span className="ipd-transfer-information__required">
              *
            </span>
          )}

        </label>


        <textarea
          className="ipd-transfer-information__textarea"
          value={formData?.[field.key] ?? ""}
          placeholder={field.placeholder ?? ""}
          maxLength={field.maxLength}
          rows={4}
          onChange={(event) =>
            handleChange(
              field.key,
              event.target.value
            )
          }
        />

      </div>
    );
  };


  const renderField = (field) => {

    if (!field?.key) {
      return null;
    }


    switch (field.type) {

      case "select":
        return renderSelect(field);

      case "date":
        return renderDate(field);

      case "time":
        return renderTime(field);

      case "textarea":
        return renderTextarea(field);

      default:
        return null;
    }
  };


  return (
    <section className="ipd-transfer-information">

      {/* =====================================================
          HEADER
          ===================================================== */}

      <div className="ipd-transfer-information__header">

        <h3 className="ipd-transfer-information__title">
          Transfer Information
        </h3>

        <p className="ipd-transfer-information__subtitle">
          Enter the required information for the patient transfer.
        </p>

      </div>


      {/* =====================================================
          FORM
          ===================================================== */}

      <div className="ipd-transfer-information__form">

        {Object.values(fields).map((field) =>
          renderField(field)
        )}

      </div>

    </section>
  );
};


export default TransferInformation;