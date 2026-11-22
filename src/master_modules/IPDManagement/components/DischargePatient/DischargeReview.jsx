// src/features/IPDManagement/components/DischargePatient/DischargeReview.jsx

import React from "react";
import "./DischargeReview.css";

const DischargeReview = ({
  patient = null,
  formData = {},
}) => {

  /* ============================================================
     HELPER — SAFE VALUE
     ============================================================ */

  const getDisplayValue = (value, fallback = "—") => {
    if (
      value === undefined ||
      value === null ||
      value === ""
    ) {
      return fallback;
    }

    if (typeof value === "string" || typeof value === "number") {
      return String(value);
    }

    if (Array.isArray(value)) {
      if (!value.length) return fallback;

      return value
        .map((item) => getDisplayValue(item, ""))
        .filter(Boolean)
        .join(", ");
    }

    if (typeof value === "object") {
      return (
        value?.name ||
        value?.label ||
        value?.title ||
        value?.value ||
        value?.department ||
        value?.roomNo ||
        value?.bedNo ||
        "—"
      );
    }

    return fallback;
  };


  /* ============================================================
     PATIENT DETAILS
     ============================================================ */

  const patientName =
    getDisplayValue(
      patient?.patientName ||
      patient?.name ||
      patient?.fullName
    );

  const uhid =
    getDisplayValue(
      patient?.uhid ||
      patient?.UHID
    );

  const ipdNumber =
    getDisplayValue(
      patient?.ipdNo ||
      patient?.ipdNumber ||
      patient?.ipd
    );

  const age =
    getDisplayValue(patient?.age);

  const gender =
    getDisplayValue(patient?.gender);

  const bloodGroup =
    getDisplayValue(
      patient?.bloodGroup ||
      patient?.blood_group
    );

  const doctor =
    getDisplayValue(
      patient?.doctor ||
      patient?.doctorName ||
      patient?.attendingDoctor
    );

  const ward =
    getDisplayValue(
      patient?.ward ||
      patient?.wardName
    );

  const room =
    getDisplayValue(
      patient?.room ||
      patient?.roomNo
    );

  const bed =
    getDisplayValue(
      patient?.bed ||
      patient?.bedNo
    );

  const admissionDate =
    getDisplayValue(
      patient?.admissionDate ||
      patient?.admittedDate
    );


  /* ============================================================
     DISCHARGE TYPE
     ============================================================ */

  const dischargeType =
    formData?.dischargeType === "death"
      ? "Death"
      : "Normal Discharge";


  /* ============================================================
     FORMAT LABEL
     ============================================================ */

  const formatLabel = (key) => {
    return String(key)
      .replace(/([A-Z])/g, " $1")
      .replace(/[_-]/g, " ")
      .replace(/^./, (character) =>
        character.toUpperCase()
      );
  };


  /* ============================================================
     FORMAT VALUE
     ============================================================ */

  const formatValue = (value) => {
    return getDisplayValue(value);
  };


  /* ============================================================
     FIELDS TO EXCLUDE
     ============================================================ */

  const excludedFields = [
    "dischargeType",
    "followUpInstructions",
  ];


  /* ============================================================
     DISCHARGE FIELDS
     ============================================================ */

  const dischargeFields = Object.entries(
    formData || {}
  ).filter(
    ([key, value]) =>
      !excludedFields.includes(key) &&
      value !== undefined &&
      value !== null &&
      value !== ""
  );


  /* ============================================================
     RENDER
     ============================================================ */

  return (
    <section className="ipd-discharge-review">

      {/* ========================================================
          HEADER
          ======================================================== */}

      <div className="ipd-discharge-review__header">

        <h2 className="ipd-discharge-review__title">
          Review &amp; Confirm
        </h2>

        <p className="ipd-discharge-review__description">
          Please review the discharge details before confirming.
        </p>

      </div>


      {/* ========================================================
          PATIENT DETAILS
          ======================================================== */}

      <div className="ipd-discharge-review__section">

        <div className="ipd-discharge-review__section-header">

          <h3 className="ipd-discharge-review__section-title">
            Patient Details
          </h3>

        </div>


        <div className="ipd-discharge-review__grid">

          <div className="ipd-discharge-review__item">
            <span className="ipd-discharge-review__label">
              Patient Name
            </span>

            <span className="ipd-discharge-review__value">
              {patientName}
            </span>
          </div>


          <div className="ipd-discharge-review__item">
            <span className="ipd-discharge-review__label">
              UHID
            </span>

            <span className="ipd-discharge-review__value">
              {uhid}
            </span>
          </div>


          <div className="ipd-discharge-review__item">
            <span className="ipd-discharge-review__label">
              IPD No
            </span>

            <span className="ipd-discharge-review__value">
              {ipdNumber}
            </span>
          </div>


          <div className="ipd-discharge-review__item">
            <span className="ipd-discharge-review__label">
              Age / Gender
            </span>

            <span className="ipd-discharge-review__value">
              {age} / {gender}
            </span>
          </div>


          <div className="ipd-discharge-review__item">
            <span className="ipd-discharge-review__label">
              Blood Group
            </span>

            <span className="ipd-discharge-review__value">
              {bloodGroup}
            </span>
          </div>


          <div className="ipd-discharge-review__item">
            <span className="ipd-discharge-review__label">
              Attending Doctor
            </span>

            <span className="ipd-discharge-review__value">
              {doctor}
            </span>
          </div>


          <div className="ipd-discharge-review__item">
            <span className="ipd-discharge-review__label">
              Ward
            </span>

            <span className="ipd-discharge-review__value">
              {ward}
            </span>
          </div>


          <div className="ipd-discharge-review__item">
            <span className="ipd-discharge-review__label">
              Room / Bed
            </span>

            <span className="ipd-discharge-review__value">
              {room} / {bed}
            </span>
          </div>


          <div className="ipd-discharge-review__item">
            <span className="ipd-discharge-review__label">
              Admission Date
            </span>

            <span className="ipd-discharge-review__value">
              {admissionDate}
            </span>
          </div>

        </div>

      </div>


      {/* ========================================================
          DISCHARGE DETAILS
          ======================================================== */}

      <div className="ipd-discharge-review__section">

        <div className="ipd-discharge-review__section-header">

          <h3 className="ipd-discharge-review__section-title">
            Discharge Details
          </h3>

        </div>


        <div className="ipd-discharge-review__grid">

          <div className="ipd-discharge-review__item">

            <span className="ipd-discharge-review__label">
              Discharge Type
            </span>

            <span className="ipd-discharge-review__value">
              {dischargeType}
            </span>

          </div>


          {dischargeFields.map(
            ([key, value]) => (
              <div
                key={key}
                className="ipd-discharge-review__item"
              >

                <span className="ipd-discharge-review__label">
                  {formatLabel(key)}
                </span>

                <span className="ipd-discharge-review__value">
                  {formatValue(value)}
                </span>

              </div>
            )
          )}

        </div>

      </div>

    </section>
  );
};

export default DischargeReview;