// src/features/IPDManagement/components/TransferPatient/TransferPatientFooter.jsx

import React from "react";

import {
  TRANSFER_PATIENT_BUTTON_CONFIG,
} from "../../config/transferPatientConfig";

import "./TransferPatientFooter.css";


const TransferPatientFooter = ({
  currentStep = 1,
  totalSteps = 4,
  onCancel,
  onBack,
  onNext,
  onConfirm,
}) => {

  const config = TRANSFER_PATIENT_BUTTON_CONFIG ?? {};

  const isFirstStep =
    currentStep <= 1;

  const isLastStep =
    currentStep >= totalSteps;


  const handleCancel = () => {
    onCancel?.();
  };


  const handleBack = () => {
    if (isFirstStep) {
      return;
    }

    onBack?.();
  };


  const handleNext = () => {
    if (isLastStep) {
      onConfirm?.();
      return;
    }

    onNext?.();
  };


  return (
    <footer className="ipd-transfer-patient-footer">

      {/* =====================================================
          LEFT SIDE
          ===================================================== */}

      <div className="ipd-transfer-patient-footer__left">

        <button
          type="button"
          className="ipd-transfer-patient-footer__button ipd-transfer-patient-footer__button--cancel"
          onClick={handleCancel}
        >
          {config?.cancel?.label ?? "Cancel"}
        </button>

      </div>


      {/* =====================================================
          RIGHT SIDE
          ===================================================== */}

      <div className="ipd-transfer-patient-footer__right">

        {!isFirstStep && (
          <button
            type="button"
            className="ipd-transfer-patient-footer__button ipd-transfer-patient-footer__button--back"
            onClick={handleBack}
          >
            {config?.back?.label ?? "Back"}
          </button>
        )}


        <button
          type="button"
          className="ipd-transfer-patient-footer__button ipd-transfer-patient-footer__button--primary"
          onClick={handleNext}
        >
          {isLastStep
            ? config?.confirm?.label ?? "Confirm Transfer"
            : config?.next?.label ?? "Next"}
        </button>

      </div>

    </footer>
  );
};


export default TransferPatientFooter;