import React from "react";

import opdPrescriptionConfig from "@/master_modules/Billing&Invoice/config/opdPrescription.config";
import opdPrescriptionMock from "@/master_modules/Billing&Invoice/mock/opdPrescription.mock.js";

import PrescriptionCard from "./PrescriptionCard";
import PrescriptionDoctor from "./PrescriptionDoctor";
import PrescriptionMedicineList from "./PrescriptionMedicineList";

import "./opdPrescription.css";

const OPDPrescription = ({
  patient = null,
  prescription = null,
}) => {
  const config = opdPrescriptionConfig;

  /*
   * ---------------------------------------------------------
   * PRESCRIPTION DATA
   * ---------------------------------------------------------
   *
   * API / parent prescription data ko priority milegi.
   * Agar prescription null ya undefined hai,
   * to mock data fallback ke roop mein use hoga.
   */

  const prescriptionData =
    prescription || opdPrescriptionMock;

  /*
   * ---------------------------------------------------------
   * SAFETY CHECK
   * ---------------------------------------------------------
   */

  if (!patient && !prescriptionData) {
    return null;
  }

  /*
   * ---------------------------------------------------------
   * MERGED DATA
   * ---------------------------------------------------------
   *
   * Patient information parent patient object se aayegi.
   * Prescription related information prescription data se aayegi.
   */

  const mergedData = {
    ...prescriptionData,

    patientName:
      patient?.patientName ||
      prescriptionData?.patientName ||
      "-",

    uhid:
      patient?.uhid ||
      prescriptionData?.uhid ||
      "-",

    prescriptionDate:
      prescriptionData?.prescriptionDate ||
      "-",
  };

  /*
   * ---------------------------------------------------------
   * DIAGNOSIS
   * ---------------------------------------------------------
   */

  const diagnosis =
    mergedData?.diagnosis ||
    config?.diagnosis?.emptyMessage ||
    "-";

  /*
   * ---------------------------------------------------------
   * MEDICINES
   * ---------------------------------------------------------
   */

  const medicineList = Array.isArray(
    mergedData?.medicines
  )
    ? mergedData.medicines
    : [];

  /*
   * ---------------------------------------------------------
   * RENDER
   * ---------------------------------------------------------
   */

  return (
    <div className="opd-prescription">

      {/* =====================================================
          PATIENT / PRESCRIPTION META
      ===================================================== */}

      {config?.meta?.enabled && (
        <PrescriptionCard
          patient={mergedData}
          config={config.meta}
        />
      )}


      {/* =====================================================
          DOCTOR INFORMATION
      ===================================================== */}

      {config?.doctor?.enabled && (
        <PrescriptionDoctor
          doctor={mergedData?.doctor}
          config={config.doctor}
        />
      )}


      {/* =====================================================
          DIAGNOSIS
      ===================================================== */}

      {config?.diagnosis?.enabled && (
        <div className="opd-prescription__diagnosis">

          <div className="opd-prescription__section-title">
            {config.diagnosis.title}
          </div>

          <div className="opd-prescription__diagnosis-box">
            {diagnosis}
          </div>

        </div>
      )}


      {/* =====================================================
          PRESCRIBED MEDICINES
      ===================================================== */}

      {config?.medicines?.enabled && (
        <div className="opd-prescription__medicines">

          {/* -------------------------------------------------
              MEDICINE SECTION HEADER
          ------------------------------------------------- */}

          <div className="opd-prescription__section-header">

            <div>

              <h3 className="opd-prescription__section-title">
                {config.medicines.title}
              </h3>

              <p className="opd-prescription__section-subtitle">
                {config.medicines.subtitle}
              </p>

            </div>


            {/* -------------------------------------------------
                MEDICINE COUNT
            ------------------------------------------------- */}

            <span className="opd-prescription__medicine-count">
              {medicineList.length}{" "}
              {config.medicines.countLabel}
            </span>

          </div>


          {/* -------------------------------------------------
              MEDICINE LIST COMPONENT
          ------------------------------------------------- */}

          <PrescriptionMedicineList
            medicines={medicineList}
            config={config.medicines}
          />

        </div>
      )}

    </div>
  );
};

export default OPDPrescription;