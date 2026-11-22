import React, { useEffect, useState } from "react";

import {
  patientBasicInformationFields,
  patientContactInformationFields,
  patientAddressInformationFields,
  patientEmergencyContactFields,
  patientIdentificationDetailsFields,
  patientAdditionalInformationFields,
  patientFormInitialValues,
} from "../../config/patientFormConfig";

import ToastNotification from "../../../../master_shared/components/common/ToastNotification/ToastNotification";

import "./PatientForm.css";

const PatientForm = ({ patient = null, onBack }) => {
  /* =========================================
     Create Form Data From Existing Patient
  ========================================= */

  const createInitialFormData = (existingPatient) => {
    /* =====================================
       New Patient
    ===================================== */

    if (!existingPatient) {
      return {
        ...patientFormInitialValues,
      };
    }

    /* =====================================
       Patient Name Handling
    ===================================== */

    const patientName =
      existingPatient.name?.trim() || "";

    const nameParts = patientName
      .split(/\s+/)
      .filter(Boolean);

    let firstName = "";
    let middleName = "";
    let lastName = "";

    if (nameParts.length === 1) {
      firstName = nameParts[0];
    } else if (nameParts.length === 2) {
      firstName = nameParts[0];
      lastName = nameParts[1];
    } else if (nameParts.length >= 3) {
      firstName = nameParts[0];
      lastName =
        nameParts[nameParts.length - 1];

      middleName = nameParts
        .slice(1, -1)
        .join(" ");
    }

    /* =====================================
       Existing Patient Form Data
    ===================================== */

    return {
      ...patientFormInitialValues,

      /* =====================================
         Basic Information
      ===================================== */

      title:
        existingPatient.title || "Mr.",

      firstName:
        existingPatient.firstName ||
        firstName,

      middleName:
        existingPatient.middleName ||
        middleName,

      lastName:
        existingPatient.lastName ||
        lastName,

      dateOfBirth:
        existingPatient.dateOfBirth || "",

      age:
        existingPatient.age !== undefined &&
        existingPatient.age !== null
          ? String(existingPatient.age)
          : "",

      gender:
        existingPatient.gender || "",

      bloodGroup:
        existingPatient.bloodGroup || "",

      maritalStatus:
        existingPatient.maritalStatus || "",

      /* =====================================
         Contact Information
      ===================================== */

      mobileNo:
        existingPatient.mobileNo ||
        existingPatient.mobile ||
        "",

      alternateMobileNo:
        existingPatient.alternateMobileNo ||
        "",

      emailId:
        existingPatient.emailId ||
        existingPatient.email ||
        "",

      landlineNo:
        existingPatient.landlineNo || "",

      whatsappNo:
        existingPatient.whatsappNo || "",

      whatsappNotification:
        existingPatient.whatsappNotification ||
        false,

      /* =====================================
         Address Information
      ===================================== */

      addressLine1:
        existingPatient.addressLine1 || "",

      addressLine2:
        existingPatient.addressLine2 || "",

      landmark:
        existingPatient.landmark || "",

      country:
        existingPatient.country || "India",

      state:
        existingPatient.state || "",

      city:
        existingPatient.city || "",

      pincode:
        existingPatient.pincode || "",

      /* =====================================
         Emergency Contact
      ===================================== */

      emergencyName:
        existingPatient.emergencyName || "",

      emergencyRelationship:
        existingPatient.emergencyRelationship || "",

      emergencyMobile:
        existingPatient.emergencyMobile || "",

      emergencyAlternateNo:
        existingPatient.emergencyAlternateNo || "",

      /* =====================================
         Identification Details
      ===================================== */

      idProofType:
        existingPatient.idProofType || "",

      idProofNumber:
        existingPatient.idProofNumber || "",

      idProofFile:
        existingPatient.idProofFile || null,

      /* =====================================
         Additional Information
      ===================================== */

      preferredLanguage:
        existingPatient.preferredLanguage || "",

      occupation:
        existingPatient.occupation || "",

      referredBy:
        existingPatient.referredBy || "",

      notes:
        existingPatient.notes || "",

      /* =====================================
         Form Options
      ===================================== */

      addAnotherPatient: false,
    };
  };

  /* =========================================
     Form State
  ========================================= */

  const [formData, setFormData] = useState(() =>
    createInitialFormData(patient)
  );

  /* =========================================
     Toast State
  ========================================= */

  const [toast, setToast] = useState({
    open: false,
    type: "success",
    title: "",
    message: "",
  });

  /* =========================================
     Update Form When Patient Changes
  ========================================= */

  useEffect(() => {
    setFormData(
      createInitialFormData(patient)
    );
  }, [patient]);

  /* =========================================
     Show Toast
  ========================================= */

  const showToast = ({
    type = "success",
    title = "Success",
    message = "",
  }) => {
    setToast({
      open: true,
      type,
      title,
      message,
    });
  };

  /* =========================================
     Close Toast
  ========================================= */

  const handleCloseToast = () => {
    setToast((prev) => ({
      ...prev,
      open: false,
    }));
  };

  /* =========================================
     Handle Input Change
  ========================================= */

  const handleChange = (event) => {
    const {
      name,
      value,
      type,
      checked,
      files,
    } = event.target;

    setFormData((prev) => ({
      ...prev,

      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files?.[0] || null
          : value,
    }));
  };

  /* =========================================
     Refresh Form
  ========================================= */

  const handleRefresh = () => {
    setFormData(
      createInitialFormData(patient)
    );

    showToast({
      type: "info",
      title: "Form Refreshed",
      message: patient
        ? "Patient information has been restored."
        : "Form has been reset successfully.",
    });
  };

  /* =========================================
     Cancel Form
  ========================================= */

  const handleCancel = () => {
    showToast({
      type: "warning",
      title: "Changes Cancelled",
      message:
        "Returning to the patient list.",
    });

    setTimeout(() => {
      if (typeof onBack === "function") {
        onBack();
      }
    }, 800);
  };

  /* =========================================
     Submit Form
  ========================================= */

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(
      patient
        ? "Patient updated:"
        : "Patient created:",
      formData
    );

    showToast({
      type: "success",
      title: patient
        ? "Patient Updated"
        : "Patient Created",
      message: patient
        ? "Patient information has been updated successfully."
        : "New patient has been registered successfully.",
    });
  };

  /* =========================================
     Render Field
  ========================================= */

  const renderField = (field) => {
    const {
      name,
      label,
      type,
      placeholder,
      required,
      options = [],
      suffix,
      accept,
      maxLength,
    } = field;

    const fieldValue =
      formData[name] ?? "";

    return (
      <div
        key={name}
        className="patient-form-field"
      >
        {/* =====================================
            Field Label
        ===================================== */}

        <label htmlFor={name}>
          {label}

          {required && (
            <span>*</span>
          )}
        </label>

        {/* =====================================
            Select
        ===================================== */}

        {type === "select" ? (
          <select
            id={name}
            name={name}
            value={fieldValue}
            onChange={handleChange}
            required={required}
          >
            {placeholder && (
              <option value="">
                {placeholder}
              </option>
            )}

            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
        ) : type === "file" ? (
          /* =====================================
             File
          ===================================== */

          <input
            id={name}
            type="file"
            name={name}
            onChange={handleChange}
            required={required}
            accept={accept}
          />
        ) : type === "textarea" ? (
          /* =====================================
             Textarea
          ===================================== */

          <textarea
            id={name}
            name={name}
            value={fieldValue}
            onChange={handleChange}
            placeholder={placeholder}
            required={required}
            maxLength={maxLength}
          />
        ) : suffix ? (
          /* =====================================
             Input With Suffix
          ===================================== */

          <div className="patient-form-input-with-suffix">
            <input
              id={name}
              type={type}
              name={name}
              value={fieldValue}
              onChange={handleChange}
              placeholder={placeholder}
              required={required}
            />

            <span>
              {suffix}
            </span>
          </div>
        ) : (
          /* =====================================
             Normal Input
          ===================================== */

          <input
            id={name}
            type={type}
            name={name}
            value={fieldValue}
            onChange={handleChange}
            placeholder={placeholder}
            required={required}
          />
        )}
      </div>
    );
  };

  /* =========================================
     Combined Field Helpers
  ========================================= */

  const basicFirstRow =
    patientBasicInformationFields.slice(
      0,
      4
    );

  const basicSecondRow =
    patientBasicInformationFields.slice(
      4
    );

  /* =========================================
     Page
  ========================================= */

  return (
    <div className="patient-form-page">

      {/* =====================================
          Top Header
      ===================================== */}

      <div className="patient-form-page-header">

        <div className="patient-form-page-heading">

          <h1>
            {patient
              ? "Edit Patient"
              : "New Patient Registration"}
          </h1>

          <p>
            {patient
              ? "Update patient information and medical records"
              : "Enter patient details to create a new patient record"}
          </p>

        </div>

        <button
          type="button"
          className="patient-form-back-button"
          onClick={handleCancel}
        >
          ← Back to Patient List
        </button>

      </div>


      {/* =====================================
          Registration Form
      ===================================== */}

      <form
        className="patient-registration-form"
        onSubmit={handleSubmit}
      >

        {/* =====================================
            Basic Information
        ===================================== */}

        <section className="patient-form-section">

          <div className="patient-form-section-header">
            <h2>
              Basic Information
            </h2>
          </div>

          {/* First Row */}

          <div className="patient-form-grid patient-form-grid-4">

            {basicFirstRow.map(
              renderField
            )}

          </div>

          {/* Second Row */}

          <div className="patient-form-grid patient-form-grid-5">

            {basicSecondRow.map(
              renderField
            )}

          </div>

        </section>


        {/* =====================================
            Contact Information
        ===================================== */}

        <section className="patient-form-section">

          <div className="patient-form-section-header">

            <h2>
              Contact Information
            </h2>

          </div>

          <div className="patient-form-grid patient-form-grid-5">

            {patientContactInformationFields.map(
              renderField
            )}

          </div>

        </section>


        {/* =====================================
            Address Information
        ===================================== */}

        <section className="patient-form-section">

          <div className="patient-form-section-header">

            <h2>
              Address Information
            </h2>

          </div>

          <div className="patient-form-grid patient-form-grid-4">

            {patientAddressInformationFields.map(
              renderField
            )}

          </div>

        </section>


        {/* =====================================
            Emergency Contact
        ===================================== */}

        <section className="patient-form-section">

          <div className="patient-form-section-header">

            <h2>
              Emergency Contact
            </h2>

          </div>

          <div className="patient-form-grid patient-form-grid-4">

            {patientEmergencyContactFields.map(
              renderField
            )}

          </div>

        </section>


        {/* =====================================
            Identification Details
        ===================================== */}

        <section className="patient-form-section">

          <div className="patient-form-section-header">

            <h2>
              Identification Details
            </h2>

          </div>

          <div className="patient-form-grid patient-form-grid-3">

            {patientIdentificationDetailsFields.map(
              renderField
            )}

          </div>

        </section>


        {/* =====================================
            Additional Information
        ===================================== */}

        <section className="patient-form-section">

          <div className="patient-form-section-header">

            <h2>
              Additional Information
            </h2>

          </div>

          <div className="patient-form-grid patient-form-grid-4">

            {patientAdditionalInformationFields.map(
              renderField
            )}

          </div>

        </section>


        {/* =====================================
            Form Footer
        ===================================== */}

        <div className="patient-form-footer">

          <label className="patient-form-checkbox">

            <input
              type="checkbox"
              name="addAnotherPatient"
              checked={
                formData.addAnotherPatient ||
                false
              }
              onChange={handleChange}
            />

            <span>
              Add another patient after saving
            </span>

          </label>


          {/* =====================================
              Footer Actions
          ===================================== */}

          <div className="patient-form-actions">

            {/* Cancel */}

            <button
              type="button"
              className="patient-form-cancel-button"
              onClick={handleCancel}
            >
              Cancel
            </button>


            {/* Refresh */}

            <button
              type="button"
              className="patient-form-refresh-button"
              onClick={handleRefresh}
            >
              Refresh
            </button>


            {/* Save Draft */}

            <button
              type="submit"
              className="patient-form-draft-button"
            >
              Save as Draft
            </button>


            {/* Save */}

            <button
              type="submit"
              className="patient-form-save-button"
            >
              {patient
                ? "Save Changes"
                : "Save & Create Patient"}
            </button>

          </div>

        </div>

      </form>


      {/* =====================================
          Toast Notification
      ===================================== */}

      <ToastNotification
        open={toast.open}
        type={toast.type}
        title={toast.title}
        message={toast.message}
        duration={4000}
        onClose={handleCloseToast}
      />

    </div>
  );
};

export default PatientForm;