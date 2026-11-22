// src/features/IPDManagement/components/DischargePatient/DischargePatientModal.jsx

import React, { useEffect, useState } from "react";

import { Dialog } from "@mui/material";

import DischargePatientHeader from "./DischargePatientHeader";
import DischargePatientStepper from "./DischargePatientStepper";
import DischargePatientDetails from "./DischargePatientDetails";
import DischargeType from "./DischargeType";
import DischargeInformation from "./DischargeInformation";
import DischargeReview from "./DischargeReview";
import DischargePatientFooter from "./DischargePatientFooter";

import {
  DEFAULT_DISCHARGE_PATIENT_FORM,
} from "../../config/dischargePatientConfig";

import "./DischargePatientModal.css";

const DischargePatientModal = ({
  open = false,
  patient = null,
  onClose,
}) => {
  const [currentStep, setCurrentStep] = useState(1);

  const [dischargeForm, setDischargeForm] = useState({
    ...DEFAULT_DISCHARGE_PATIENT_FORM,
  });

  /* ============================================================
     RESET FORM WHEN MODAL OPENS / PATIENT CHANGES
     ============================================================ */

  useEffect(() => {
    if (!open) return;

    setCurrentStep(1);

    setDischargeForm({
      ...DEFAULT_DISCHARGE_PATIENT_FORM,
    });
  }, [open, patient]);


  /* ============================================================
     CLOSE
     ============================================================ */

  const handleClose = () => {
    onClose?.();
  };


  /* ============================================================
     DISCHARGE TYPE CHANGE
     ============================================================ */

  const handleDischargeTypeChange = (value) => {
    setDischargeForm((previousForm) => ({
      ...previousForm,
      dischargeType: value,
    }));
  };


  /* ============================================================
     DISCHARGE INFORMATION CHANGE
     ============================================================ */

  const handleDischargeInformationChange = (updatedFields) => {
    setDischargeForm((previousForm) => ({
      ...previousForm,
      ...updatedFields,
    }));
  };


  /* ============================================================
     NEXT
     ============================================================ */

  const handleNext = () => {
    setCurrentStep((previousStep) =>
      Math.min(previousStep + 1, 3)
    );
  };


  /* ============================================================
     BACK
     ============================================================ */

  const handleBack = () => {
    setCurrentStep((previousStep) =>
      Math.max(previousStep - 1, 1)
    );
  };


  /* ============================================================
     CANCEL
     ============================================================ */

  const handleCancel = () => {
    handleClose();
  };


  /* ============================================================
     CONFIRM
     ============================================================ */

  const handleConfirm = () => {
    /*
      Backend integration will be added later.
      For now, simply close the modal.
    */

    handleClose();
  };


  /* ============================================================
     RENDER
     ============================================================ */

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth={false}
      className="ipd-discharge-patient-modal-dialog"
      PaperProps={{
        className: "ipd-discharge-patient-modal",
      }}
    >

      <div className="ipd-discharge-patient-modal__scroll">

        {/* ======================================================
            HEADER
            ====================================================== */}

        <div className="ipd-discharge-patient-modal__header">
          <DischargePatientHeader
            onClose={handleClose}
          />
        </div>


        {/* ======================================================
            STEPPER
            ====================================================== */}

        <div className="ipd-discharge-patient-modal__stepper">
          <DischargePatientStepper
            currentStep={currentStep}
          />
        </div>


        {/* ======================================================
            CONTENT
            ====================================================== */}

        <div className="ipd-discharge-patient-modal__content">

          {/* ====================================================
              STEP 1 — PATIENT DETAILS
              ==================================================== */}

          {currentStep === 1 && (
            <div className="ipd-discharge-patient-modal__step-content">

              <DischargePatientDetails
                patient={patient}
              />

              <DischargeType
                value={dischargeForm.dischargeType}
                onChange={handleDischargeTypeChange}
              />

            </div>
          )}


          {/* ====================================================
              STEP 2 — DISCHARGE INFORMATION
              ==================================================== */}

          {currentStep === 2 && (
            <div className="ipd-discharge-patient-modal__step-content">

              <DischargeInformation
                formData={dischargeForm}
                onChange={handleDischargeInformationChange}
              />

            </div>
          )}


          {/* ====================================================
              STEP 3 — REVIEW & CONFIRM
              ==================================================== */}

          {currentStep === 3 && (
            <div className="ipd-discharge-patient-modal__step-content">

              <DischargeReview
                patient={patient}
                formData={dischargeForm}
              />

            </div>
          )}

        </div>


        {/* ======================================================
            FOOTER
            ====================================================== */}

        <div className="ipd-discharge-patient-modal__footer-wrapper">

          <DischargePatientFooter
            currentStep={currentStep}
            onCancel={handleCancel}
            onBack={handleBack}
            onNext={handleNext}
            onConfirm={handleConfirm}
          />

        </div>

      </div>

    </Dialog>
  );
};

export default DischargePatientModal;