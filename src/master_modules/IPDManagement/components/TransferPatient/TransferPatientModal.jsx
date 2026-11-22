// src/features/IPDManagement/components/TransferPatient/TransferPatientModal.jsx

import React, { useState } from "react";
import { Dialog } from "@mui/material";

import TransferPatientHeader from "./TransferPatientHeader";
import TransferPatientStepper from "./TransferPatientStepper";
import TransferPatientDetails from "./TransferPatientDetails";
import TransferDestination from "./TransferDestination";
import TransferHospitalDetails from "./TransferHospitalDetails";
import TransferInformation from "./TransferInformation";
import TransferReview from "./TransferReview";
import TransferPatientFooter from "./TransferPatientFooter";

import "./TransferPatientModal.css";


const TransferPatientModal = ({
  open = false,
  patient = null,
  onClose,
}) => {

  const [currentStep, setCurrentStep] = useState(1);

  const [transferType, setTransferType] = useState(
    "withinHospital"
  );

  const [transferForm, setTransferForm] = useState({});


  /* ==========================================================
     CLOSE
     ========================================================== */

  const handleClose = () => {
    onClose?.();
  };


  /* ==========================================================
     TRANSFER TYPE
     ========================================================== */

  const handleTransferTypeChange = (value) => {

    setTransferType(value);

    setTransferForm((previousForm) => ({
      ...previousForm,
      transferType: value,
    }));

  };


  /* ==========================================================
     FORM CHANGE
     ========================================================== */

  const handleTransferFormChange = (updatedForm) => {

    setTransferForm(updatedForm);

  };


  /* ==========================================================
     NEXT
     ========================================================== */

  const handleNext = () => {

    setCurrentStep((previousStep) =>
      Math.min(previousStep + 1, 4)
    );

  };


  /* ==========================================================
     BACK
     ========================================================== */

  const handleBack = () => {

    setCurrentStep((previousStep) =>
      Math.max(previousStep - 1, 1)
    );

  };


  /* ==========================================================
     CANCEL
     ========================================================== */

  const handleCancel = () => {

    handleClose();

  };


  /* ==========================================================
     CONFIRM
     ========================================================== */

  const handleConfirm = () => {

    /*
     * Final API submission will be connected later.
     */

    handleClose();

  };


  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="lg"
      className="ipd-transfer-patient-modal"
      PaperProps={{
        className:
          "ipd-transfer-patient-modal__paper",
      }}
    >

      {/* =====================================================
          HEADER
          ===================================================== */}

      <TransferPatientHeader
        onClose={handleClose}
      />


      {/* =====================================================
          STEPPER
          ===================================================== */}

      <TransferPatientStepper
        currentStep={currentStep}
      />


      {/* =====================================================
          STEP 1 — PATIENT DETAILS
          ===================================================== */}

      {currentStep === 1 && (
        <>
          <TransferPatientDetails
            patient={patient}
          />

          <TransferDestination
            value={transferType}
            onChange={handleTransferTypeChange}
          />
        </>
      )}


      {/* =====================================================
          STEP 2 — TRANSFER DESTINATION
          ===================================================== */}

      {currentStep === 2 && (
        <TransferHospitalDetails
          transferType={transferType}
          formData={transferForm}
          onChange={handleTransferFormChange}
        />
      )}


      {/* =====================================================
          STEP 3 — TRANSFER INFORMATION
          ===================================================== */}

      {currentStep === 3 && (
        <TransferInformation
          formData={transferForm}
          onChange={handleTransferFormChange}
        />
      )}


      {/* =====================================================
          STEP 4 — REVIEW & CONFIRM
          ===================================================== */}

      {currentStep === 4 && (
        <TransferReview
          patient={patient}
          transferType={transferType}
          formData={transferForm}
        />
      )}


      {/* =====================================================
          FOOTER
          ===================================================== */}

      <TransferPatientFooter
        currentStep={currentStep}
        totalSteps={4}
        onCancel={handleCancel}
        onBack={handleBack}
        onNext={handleNext}
        onConfirm={handleConfirm}
      />

    </Dialog>
  );
};


export default TransferPatientModal;