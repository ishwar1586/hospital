// src/features/IPDManagement/components/TransferPatient/TransferPatientDetails.jsx

import React from "react";

import {
  TRANSFER_PATIENT_DETAILS_CONFIG,
} from "../../config/transferPatientConfig";

import "./TransferPatientDetails.css";


const TransferPatientDetails = ({
  patient = null,
}) => {

  const fields = Array.isArray(
    TRANSFER_PATIENT_DETAILS_CONFIG
  )
    ? TRANSFER_PATIENT_DETAILS_CONFIG
    : [];


  if (!patient) {
    return (
      <section className="ipd-transfer-patient-details">

        <div className="ipd-transfer-patient-details__empty">
          No patient selected.
        </div>

      </section>
    );
  }


  /*
   * Patient data coming from IPD table row.
   *
   * Current IPD patient structure contains nested
   * patient / doctor / bedAllocation objects.
   *
   * We normalize only for display.
   */

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

    address:
      patient?.patient?.address ??
      patient?.address ??
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


  const getFieldValue = (field) => {

    if (!field?.key) {
      return "—";
    }

    return patientData?.[field.key] ?? "—";
  };


  return (
    <section className="ipd-transfer-patient-details">

      {/* ======================================================
          SECTION HEADER
          ====================================================== */}

      <div className="ipd-transfer-patient-details__header">

        <div>
          <h3 className="ipd-transfer-patient-details__title">
            Patient Details
          </h3>

          <p className="ipd-transfer-patient-details__subtitle">
            Review the patient's current information before transfer.
          </p>
        </div>

      </div>


      {/* ======================================================
          DETAILS GRID
          ====================================================== */}

      <div className="ipd-transfer-patient-details__grid">

        {fields.map((field) => (

          <div
            key={field.id ?? field.key}
            className="ipd-transfer-patient-details__item"
          >

            <span className="ipd-transfer-patient-details__label">
              {field.label}
            </span>

            <span className="ipd-transfer-patient-details__value">
              {getFieldValue(field)}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
};


export default TransferPatientDetails;