// src/features/IPDManagement/components/DischargePatient/DischargePatientFooter.jsx

import React from "react";
import "./DischargePatientFooter.css";

const DischargePatientFooter = ({
  currentStep = 1,
  onCancel,
  onBack,
  onNext,
  onConfirm,
}) => {
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === 3;

  return (
    <div className="ipd-discharge-patient-footer">

      {/* ========================================================
          LEFT
          ======================================================== */}

      <div className="ipd-discharge-patient-footer__left">

        <button
          type="button"
          className="ipd-discharge-patient-footer__cancel"
          onClick={onCancel}
        >
          Cancel
        </button>

      </div>


      {/* ========================================================
          RIGHT
          ======================================================== */}

      <div className="ipd-discharge-patient-footer__right">

        {/* BACK BUTTON */}

        {!isFirstStep && (
          <button
            type="button"
            className="ipd-discharge-patient-footer__back"
            onClick={onBack}
          >
            Back
          </button>
        )}


        {/* ======================================================
            STEP 1 & STEP 2 → NEXT
            STEP 3 → CONFIRM DISCHARGE
            ====================================================== */}

        {!isLastStep ? (
          <button
            type="button"
            className="ipd-discharge-patient-footer__next"
            onClick={onNext}
          >
            Next
          </button>
        ) : (
          <button
            type="button"
            className="ipd-discharge-patient-footer__confirm"
            onClick={onConfirm}
          >
            Confirm Discharge
          </button>
        )}

      </div>

    </div>
  );
};

export default DischargePatientFooter;