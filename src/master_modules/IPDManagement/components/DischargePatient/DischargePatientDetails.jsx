// src/features/IPDManagement/components/DischargePatient/DischargePatientDetails.jsx

import React from "react";

import {
  DISCHARGE_PATIENT_DETAILS_CONFIG,
} from "../../config/dischargePatientConfig";

import "./DischargePatientDetails.css";


/* ============================================================
 * DISCHARGE PATIENT DETAILS
 * ============================================================ */

const DischargePatientDetails = ({ patient = null }) => {

  const data = patient || {};

  const config =
    DISCHARGE_PATIENT_DETAILS_CONFIG || {};


  /* ==========================================================
   * SAFE VALUE
   * ========================================================== */

  const getPrimitiveValue = (value) => {

    if (
      value === undefined ||
      value === null ||
      value === ""
    ) {
      return null;
    }

    if (
      typeof value === "string" ||
      typeof value === "number"
    ) {
      return value;
    }

    if (typeof value === "object") {

      if (
        value.name !== undefined &&
        value.name !== null &&
        value.name !== ""
      ) {
        return value.name;
      }

      if (
        value.label !== undefined &&
        value.label !== null &&
        value.label !== ""
      ) {
        return value.label;
      }

      if (
        value.value !== undefined &&
        value.value !== null &&
        value.value !== ""
      ) {
        return value.value;
      }

      if (
        value.title !== undefined &&
        value.title !== null &&
        value.title !== ""
      ) {
        return value.title;
      }

      if (
        value.text !== undefined &&
        value.text !== null &&
        value.text !== ""
      ) {
        return value.text;
      }
    }

    return null;
  };


  /* ==========================================================
   * DISPLAY VALUE
   * ========================================================== */

  const displayValue = (value) => {

    const result =
      getPrimitiveValue(value);

    return (
      result === null ||
      result === undefined ||
      result === ""
    )
      ? "—"
      : result;
  };


  /* ==========================================================
   * FIND VALUE RECURSIVELY
   *
   * This is important because patient data can come from
   * different API/mock nesting levels.
   * ========================================================== */

  const findValueByKeys = (
    source,
    keys
  ) => {

    if (
      source === null ||
      source === undefined
    ) {
      return null;
    }


    if (
      typeof source !== "object"
    ) {
      return null;
    }


    /* --------------------------------------------------------
       Direct keys first
       -------------------------------------------------------- */

    for (const key of keys) {

      if (
        Object.prototype.hasOwnProperty.call(
          source,
          key
        )
      ) {

        const value =
          getPrimitiveValue(
            source[key]
          );

        if (
          value !== null &&
          value !== undefined &&
          value !== ""
        ) {
          return value;
        }
      }
    }


    /* --------------------------------------------------------
       Recursive search
       -------------------------------------------------------- */

    for (const value of Object.values(source)) {

      if (
        value &&
        typeof value === "object"
      ) {

        const result =
          findValueByKeys(
            value,
            keys
          );

        if (
          result !== null &&
          result !== undefined &&
          result !== ""
        ) {
          return result;
        }
      }
    }


    return null;
  };


  /* ==========================================================
   * PATIENT NAME
   * ========================================================== */

  const patientName =
    findValueByKeys(
      data,
      [
        "patientName",
        "name",
        "fullName",
        "patient_name",
      ]
    );


  /* ==========================================================
   * UHID
   * ========================================================== */

  const uhid =
    findValueByKeys(
      data,
      [
        "uhid",
        "UHID",
        "patientUHID",
        "patientUhid",
        "uhidNumber",
      ]
    );


  /* ==========================================================
   * IPD NUMBER
   * ========================================================== */

  const ipdNumber =
    findValueByKeys(
      data,
      [
        "ipdNumber",
        "ipdNo",
        "IPDNo",
        "IPDNumber",
        "ipd_number",
      ]
    );


  /* ==========================================================
   * AGE
   * ========================================================== */

  const age =
    findValueByKeys(
      data,
      [
        "age",
        "patientAge",
      ]
    );


  /* ==========================================================
   * GENDER
   * ========================================================== */

  const gender =
    findValueByKeys(
      data,
      [
        "gender",
        "sex",
        "patientGender",
      ]
    );


  /* ==========================================================
   * AGE / GENDER OBJECT
   *
   * Supports:
   *
   * ageGender: {
   *   age: 32,
   *   gender: "Female"
   * }
   *
   * ageGender: "32 / Female"
   * ========================================================== */

  const ageGenderSource =
    data.ageGender ??
    data.age_gender ??
    data.ageAndGender;


  let finalAge = age;
  let finalGender = gender;


  if (
    ageGenderSource &&
    typeof ageGenderSource === "object"
  ) {

    finalAge =
      finalAge ??
      getPrimitiveValue(
        ageGenderSource.age
      );

    finalGender =
      finalGender ??
      getPrimitiveValue(
        ageGenderSource.gender ??
        ageGenderSource.sex
      );
  }


  /* ==========================================================
   * AGE / GENDER STRING
   * ========================================================== */

  if (
    typeof ageGenderSource === "string"
  ) {

    const parts =
      ageGenderSource
        .split("/")
        .map(
          (item) =>
            item.trim()
        )
        .filter(Boolean);


    if (
      !finalAge &&
      parts.length > 0
    ) {
      finalAge = parts[0];
    }


    if (
      !finalGender &&
      parts.length > 1
    ) {
      finalGender = parts[1];
    }
  }


  /* ==========================================================
   * BLOOD GROUP
   *
   * Searches all common locations.
   * ========================================================== */

  const bloodGroup =
    findValueByKeys(
      data,
      [
        "bloodGroup",
        "bloodgroup",
        "blood_group",
        "bloodType",
        "blood_type",
        "blood",
      ]
    );


  /* ==========================================================
   * BED ALLOCATION
   * ========================================================== */

  const bedAllocation =
    data.bedAllocation ||
    data.bedDetails ||
    data.bed_details ||
    {};


  /* ==========================================================
   * WARD
   * ========================================================== */

  const ward =
    getPrimitiveValue(
      bedAllocation.ward
    ) ??
    getPrimitiveValue(
      bedAllocation.wardName
    ) ??
    findValueByKeys(
      data,
      [
        "wardName",
        "currentWard",
      ]
    );


  /* ==========================================================
   * ROOM
   * ========================================================== */

  const room =
    getPrimitiveValue(
      bedAllocation.room
    ) ??
    getPrimitiveValue(
      bedAllocation.roomNumber
    ) ??
    findValueByKeys(
      data,
      [
        "roomNumber",
        "currentRoom",
      ]
    );


  /* ==========================================================
   * BED
   * ========================================================== */

  const bed =
    getPrimitiveValue(
      bedAllocation.bed
    ) ??
    getPrimitiveValue(
      bedAllocation.bedNumber
    ) ??
    findValueByKeys(
      data,
      [
        "bedNumber",
        "currentBed",
      ]
    );


  /* ==========================================================
   * WARD / ROOM / BED
   * ========================================================== */

  const wardRoomBed = [
    ward,
    room,
    bed,
  ]
    .filter(
      (value) =>
        value !== null &&
        value !== undefined &&
        value !== ""
    )
    .join(" / ");


  /* ==========================================================
   * DOCTOR
   * ========================================================== */

  const doctorSource =
    data.doctor ||
    data.admittingDoctor ||
    data.attendingDoctor ||
    {};


  const doctor =
    getPrimitiveValue(
      doctorSource?.name
    ) ??
    getPrimitiveValue(
      doctorSource?.doctorName
    ) ??
    getPrimitiveValue(
      doctorSource?.fullName
    ) ??
    getPrimitiveValue(
      doctorSource
    ) ??
    findValueByKeys(
      data,
      [
        "doctorName",
        "attendingDoctor",
      ]
    );


  /* ==========================================================
   * ADMISSION DATE
   * ========================================================== */

  const admissionDate =
    findValueByKeys(
      data,
      [
        "admissionDate",
        "admittedDate",
        "admission_date",
      ]
    );


  /* ==========================================================
   * STATUS
   * ========================================================== */

  const status =
    findValueByKeys(
      data,
      [
        "status",
        "patientStatus",
        "admissionStatus",
      ]
    );


  /* ==========================================================
   * FINAL AGE / GENDER
   * ========================================================== */

  const ageGenderValue = [

    finalAge !== null &&
    finalAge !== undefined
      ? finalAge
      : null,

    finalGender !== null &&
    finalGender !== undefined
      ? finalGender
      : null,

  ]
    .filter(
      (value) =>
        value !== null &&
        value !== undefined &&
        value !== ""
    )
    .join(" / ");


  /* ==========================================================
   * LABELS
   * ========================================================== */

  const labels = {

    patientName:
      config.patientNameLabel ||
      "Patient Name",

    uhid:
      config.uhidLabel ||
      "UHID",

    ipdNumber:
      config.ipdNumberLabel ||
      "IPD No",

    ageGender:
      config.ageGenderLabel ||
      "Age / Gender",

    bloodGroup:
      config.bloodGroupLabel ||
      "Blood Group",

    wardRoomBed:
      config.wardRoomBedLabel ||
      "Ward / Room / Bed",

    doctor:
      config.doctorLabel ||
      "Attending Doctor",

    admissionDate:
      config.admissionDateLabel ||
      "Admission Date",

    status:
      config.statusLabel ||
      "Patient Status",
  };


  /* ==========================================================
   * RENDER
   * ========================================================== */

  return (
    <section className="ipd-discharge-patient-details">

      {/* ======================================================
          HEADER
          ====================================================== */}

      <div className="ipd-discharge-patient-details__header">

        <h2 className="ipd-discharge-patient-details__title">
          {config.title || "Patient Details"}
        </h2>

        <p className="ipd-discharge-patient-details__description">
          {config.description ||
            "Review the patient's current information before discharge."}
        </p>

      </div>


      {/* ======================================================
          INFORMATION GRID
          ====================================================== */}

      <div className="ipd-discharge-patient-details__grid">

        {/* ----------------------------------------------------
            ROW 1
            ---------------------------------------------------- */}

        <div className="ipd-discharge-patient-details__item">

          <span className="ipd-discharge-patient-details__label">
            {labels.patientName}
          </span>

          <span className="ipd-discharge-patient-details__value">
            {displayValue(patientName)}
          </span>

        </div>


        <div className="ipd-discharge-patient-details__item">

          <span className="ipd-discharge-patient-details__label">
            {labels.uhid}
          </span>

          <span className="ipd-discharge-patient-details__value">
            {displayValue(uhid)}
          </span>

        </div>


        <div className="ipd-discharge-patient-details__item">

          <span className="ipd-discharge-patient-details__label">
            {labels.ipdNumber}
          </span>

          <span className="ipd-discharge-patient-details__value">
            {displayValue(ipdNumber)}
          </span>

        </div>


        <div className="ipd-discharge-patient-details__item">

          <span className="ipd-discharge-patient-details__label">
            {labels.ageGender}
          </span>

          <span className="ipd-discharge-patient-details__value">
            {ageGenderValue || "—"}
          </span>

        </div>


        {/* ----------------------------------------------------
            ROW 2
            ---------------------------------------------------- */}

        <div className="ipd-discharge-patient-details__item">

          <span className="ipd-discharge-patient-details__label">
            {labels.bloodGroup}
          </span>

          <span className="ipd-discharge-patient-details__value">
            {displayValue(bloodGroup)}
          </span>

        </div>


        <div className="ipd-discharge-patient-details__item">

          <span className="ipd-discharge-patient-details__label">
            {labels.wardRoomBed}
          </span>

          <span className="ipd-discharge-patient-details__value">
            {wardRoomBed || "—"}
          </span>

        </div>


        <div className="ipd-discharge-patient-details__item">

          <span className="ipd-discharge-patient-details__label">
            {labels.doctor}
          </span>

          <span className="ipd-discharge-patient-details__value">
            {displayValue(doctor)}
          </span>

        </div>


        <div className="ipd-discharge-patient-details__item">

          <span className="ipd-discharge-patient-details__label">
            {labels.admissionDate}
          </span>

          <span className="ipd-discharge-patient-details__value">
            {displayValue(admissionDate)}
          </span>

        </div>


        {/* ----------------------------------------------------
            ROW 3
            ---------------------------------------------------- */}

        <div className="ipd-discharge-patient-details__item">

          <span className="ipd-discharge-patient-details__label">
            {labels.status}
          </span>

          <span className="ipd-discharge-patient-details__value">
            {displayValue(status)}
          </span>

        </div>

      </div>

    </section>
  );
};


export default DischargePatientDetails;