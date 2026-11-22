// src/master_modules/Billing&Invoice/components/PharmacyBilling/RegisteredPatient/PatientDetails/PatientDetails.jsx

import React, { useState } from "react";
import {
  ArrowBackOutlined,
} from "@mui/icons-material";

import PharmacyBillingStepper from "../PharmacyBillingStepper/PharmacyBillingStepper";

import PatientInformation from "../PatientInformation/PatientInformation";

import PrescriptionSection from "../Prescription/PrescriptionSection";

import PatientDetailsFooter from "../PatientDetailsFooter/PatientDetailsFooter";

import "./PatientDetails.css";

const PatientDetails = ({
  patient,
  onBack,
  onClose,
  onContinue,
}) => {
  const [currentStep, setCurrentStep] =
    useState(1);

  /* =========================================================
     STEPPER CHANGE
  ========================================================= */

  const handleStepChange = (step) => {
    if (!step) {
      return;
    }

    if (step?.id === "patient-details") {
      setCurrentStep(1);
      return;
    }

    if (step?.id === "medicines") {
      setCurrentStep(2);
      return;
    }

    if (step?.id === "payment") {
      setCurrentStep(3);
      return;
    }

    if (step?.id === "review") {
      setCurrentStep(4);
    }
  };

  /* =========================================================
     BACK TO PATIENT SELECTION
  ========================================================= */

  const handleBack = () => {
    if (typeof onBack === "function") {
      onBack();
    }
  };

  /* =========================================================
     VIEW PATIENT HISTORY
  ========================================================= */

  const handleViewHistory = (
    selectedPatient
  ) => {
    console.log(
      "View Patient History:",
      selectedPatient
    );

    /*
     * Patient History workflow
     * baad mein yahin integrate karenge.
     */
  };

  /* =========================================================
     CONTINUE TO MEDICINES
  ========================================================= */

  const handleContinue = () => {
    if (
      typeof onContinue === "function"
    ) {
      onContinue();
    }
  };

  /* =========================================================
     CANCEL
  ========================================================= */

  const handleCancel = () => {
    if (typeof onClose === "function") {
      onClose();
    }
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <section className="patient-details">

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <header className="patient-details__header">

        <button
          type="button"
          className="patient-details__back-button"
          onClick={handleBack}
          aria-label="Back to patient selection"
        >
          <ArrowBackOutlined
            className="patient-details__back-icon"
          />
        </button>

        <div className="patient-details__header-content">

          <h1 className="patient-details__title">
            Patient Details
          </h1>

          {patient?.patientName && (
            <span className="patient-details__patient-name">
              {patient.patientName}
            </span>
          )}

        </div>

      </header>


      {/* =====================================================
          BILLING STEPPER
      ===================================================== */}

      <div className="patient-details__stepper">

        <PharmacyBillingStepper
          currentStep={currentStep}
          onStepChange={handleStepChange}
        />

      </div>


      {/* =====================================================
          PAGE CONTENT
      ===================================================== */}

      <div className="patient-details__content">

        {/* ===================================================
            PATIENT INFORMATION
        =================================================== */}

        <PatientInformation
          patient={patient}
          onViewHistory={handleViewHistory}
        />


        {/* ===================================================
            PRESCRIPTION
        =================================================== */}

        <PrescriptionSection
          patient={patient}
        />

      </div>


      {/* =====================================================
          PAGE FOOTER
      ===================================================== */}

      <PatientDetailsFooter
        onBack={handleBack}
        onCancel={handleCancel}
        onContinue={handleContinue}
      />

    </section>
  );
};

export default PatientDetails;