// src/features/IPDManagement/components/TransferPatient/TransferReview.jsx

import React from "react";

import {
  TRANSFER_PATIENT_REVIEW_CONFIG,
  TRANSFER_PATIENT_DETAILS_CONFIG,
} from "../../config/transferPatientConfig";

import "./TransferReview.css";


const TransferReview = ({
  patient = null,
  transferType = "withinHospital",
  formData = {},
  options = {},
}) => {

  /* ==========================================================
     PATIENT DATA
     ========================================================== */

  const patientData = {
    name:
      patient?.patient?.name ??
      patient?.patient?.patientName ??
      patient?.patientName ??
      "—",

    uhid:
      patient?.patient?.uhid ??
      patient?.uhid ??
      "—",

    ipdNumber:
      patient?.ipdNumber ??
      patient?.ipdNo ??
      "—",

    age:
      patient?.patient?.age ??
      patient?.age ??
      "—",

    gender:
      patient?.patient?.gender ??
      patient?.gender ??
      "—",

    bloodGroup:
      patient?.patient?.bloodGroup ??
      patient?.bloodGroup ??
      "—",

    phone:
      patient?.patient?.phone ??
      patient?.phone ??
      "—",

    ward:
      patient?.bedAllocation?.wardName ??
      patient?.bedAllocation?.ward ??
      patient?.ward ??
      "—",

    room:
      patient?.bedAllocation?.roomNumber ??
      patient?.bedAllocation?.room ??
      patient?.room ??
      "—",

    doctor:
      patient?.doctor?.name ??
      patient?.doctor?.doctorName ??
      patient?.doctorName ??
      "—",

    department:
      patient?.department?.name ??
      patient?.departmentName ??
      patient?.department ??
      "—",

    admissionDate:
      patient?.admissionDate ??
      "—",
  };


  /* ==========================================================
     OPTION LABEL
     ========================================================== */

  const getOptionLabel = (
    fieldKey,
    value
  ) => {

    if (!value) {
      return "—";
    }

    const fieldOptions =
      options?.[fieldKey];

    if (!Array.isArray(fieldOptions)) {
      return value;
    }

    const selectedOption =
      fieldOptions.find(
        (option) =>
          String(
            option?.value ??
            option?.id ??
            ""
          ) === String(value)
      );

    return (
      selectedOption?.label ??
      selectedOption?.name ??
      selectedOption?.title ??
      value
    );
  };


  /* ==========================================================
     PATIENT DETAILS
     ========================================================== */

  const patientFields =
    Array.isArray(TRANSFER_PATIENT_DETAILS_CONFIG)
      ? TRANSFER_PATIENT_DETAILS_CONFIG
      : [];


  /* ==========================================================
     FORM VALUE
     ========================================================== */

  const getFormValue = (fieldKey) => {

    return formData?.[fieldKey] ?? "—";

  };


  /* ==========================================================
     DESTINATION DATA
     ========================================================== */

  const destinationFields =
    transferType === "withinHospital"
      ? [
          {
            key: "targetWardId",
            label: "Target Ward",
          },
          {
            key: "targetRoomId",
            label: "Target Room",
          },
          {
            key: "targetBedId",
            label: "Target Bed",
          },
        ]
      : [
          {
            key: "receivingHospitalId",
            label: "Receiving Hospital",
          },
          {
            key: "receivingDepartmentId",
            label: "Receiving Department",
          },
          {
            key: "receivingDoctorId",
            label: "Receiving Doctor",
          },
          {
            key: "transferMode",
            label: "Transfer Mode",
          },
          {
            key: "expectedDate",
            label: "Expected Date",
          },
          {
            key: "expectedTime",
            label: "Expected Time",
          },
          {
            key: "reason",
            label: "Reason for Transfer",
          },
        ];


  /* ==========================================================
     INFORMATION DATA
     ========================================================== */

  const informationFields = [
    {
      key: "reason",
      label: "Transfer Reason",
    },
    {
      key: "transferDate",
      label: "Transfer Date",
    },
    {
      key: "transferTime",
      label: "Transfer Time",
    },
    {
      key: "requestedBy",
      label: "Requested By",
    },
    {
      key: "remarks",
      label: "Remarks / Notes",
    },
  ];


  /* ==========================================================
     SECTION
     ========================================================== */

  const renderSection = (
    section,
    children
  ) => {

    return (
      <section
        key={section?.id ?? section?.title}
        className="ipd-transfer-review__section"
      >

        <div className="ipd-transfer-review__section-header">

          <h3 className="ipd-transfer-review__section-title">
            {section?.title}
          </h3>

        </div>

        {children}

      </section>
    );
  };


  return (
    <section className="ipd-transfer-review">

      {/* =====================================================
          HEADER
          ===================================================== */}

      <div className="ipd-transfer-review__header">

        <h2 className="ipd-transfer-review__title">
          Review &amp; Confirm
        </h2>

        <p className="ipd-transfer-review__subtitle">
          Review all transfer details before confirming the transfer.
        </p>

      </div>


      {/* =====================================================
          PATIENT DETAILS
          ===================================================== */}

      {renderSection(
        TRANSFER_PATIENT_REVIEW_CONFIG?.patientDetails,
        <div className="ipd-transfer-review__grid">

          {patientFields.map((field) => (

            <div
              key={field.id ?? field.key}
              className="ipd-transfer-review__item"
            >

              <span className="ipd-transfer-review__label">
                {field.label}
              </span>

              <span className="ipd-transfer-review__value">

                {patientData?.[field.key] ?? "—"}

              </span>

            </div>

          ))}

        </div>
      )}


      {/* =====================================================
          CURRENT LOCATION
          ===================================================== */}

      {renderSection(
        TRANSFER_PATIENT_REVIEW_CONFIG?.currentLocation,
        <div className="ipd-transfer-review__grid">

          <div className="ipd-transfer-review__item">

            <span className="ipd-transfer-review__label">
              Current Ward
            </span>

            <span className="ipd-transfer-review__value">
              {patientData.ward}
            </span>

          </div>


          <div className="ipd-transfer-review__item">

            <span className="ipd-transfer-review__label">
              Room / Bed
            </span>

            <span className="ipd-transfer-review__value">
              {patientData.room}
            </span>

          </div>


          <div className="ipd-transfer-review__item">

            <span className="ipd-transfer-review__label">
              Attending Doctor
            </span>

            <span className="ipd-transfer-review__value">
              {patientData.doctor}
            </span>

          </div>

        </div>
      )}


      {/* =====================================================
          DESTINATION
          ===================================================== */}

      {renderSection(
        TRANSFER_PATIENT_REVIEW_CONFIG?.destination,
        <div className="ipd-transfer-review__grid">

          {destinationFields.map((field) => (

            <div
              key={field.key}
              className="ipd-transfer-review__item"
            >

              <span className="ipd-transfer-review__label">
                {field.label}
              </span>

              <span className="ipd-transfer-review__value">

                {[
                  "targetWardId",
                  "targetRoomId",
                  "targetBedId",
                  "receivingHospitalId",
                  "receivingDepartmentId",
                  "receivingDoctorId",
                  "requestedBy",
                ].includes(field.key)
                  ? getOptionLabel(
                      field.key,
                      getFormValue(field.key)
                    )
                  : getFormValue(field.key)}

              </span>

            </div>

          ))}

        </div>
      )}


      {/* =====================================================
          TRANSFER INFORMATION
          ===================================================== */}

      {renderSection(
        TRANSFER_PATIENT_REVIEW_CONFIG?.transferInformation,
        <div className="ipd-transfer-review__grid">

          {informationFields.map((field) => (

            <div
              key={field.key}
              className="ipd-transfer-review__item"
            >

              <span className="ipd-transfer-review__label">
                {field.label}
              </span>

              <span className="ipd-transfer-review__value">

                {field.key === "reason"
                  ? getOptionLabel(
                      "reason",
                      getFormValue(field.key)
                    )
                  : getFormValue(field.key)}

              </span>

            </div>

          ))}

        </div>
      )}


      {/* =====================================================
          TRANSFER MODE
          ===================================================== */}

      {renderSection(
        TRANSFER_PATIENT_REVIEW_CONFIG?.transport,
        <div className="ipd-transfer-review__transport">

          <span className="ipd-transfer-review__transport-value">

            {getOptionLabel(
              "transferMode",
              getFormValue("transferMode")
            )}

          </span>

        </div>
      )}

    </section>
  );
};


export default TransferReview;