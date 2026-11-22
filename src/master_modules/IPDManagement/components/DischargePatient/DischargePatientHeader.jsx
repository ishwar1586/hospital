// src/features/IPDManagement/components/DischargePatient/DischargePatientHeader.jsx

import React from "react";
import CloseIcon from "@mui/icons-material/Close";

import { DISCHARGE_PATIENT_PAGE_CONFIG } from "../../config/dischargePatientConfig";

import "./DischargePatientHeader.css";


const DischargePatientHeader = ({
  onClose,
}) => {

  const {
    title,
    subtitle,
    closeAction,
  } = DISCHARGE_PATIENT_PAGE_CONFIG;


  const handleClose = () => {
    onClose?.();
  };


  return (
    <div className="ipd-discharge-patient-header">

      {/* =====================================================
          HEADER CONTENT
          ===================================================== */}

      <div className="ipd-discharge-patient-header__content">

        <h2 className="ipd-discharge-patient-header__title">
          {title}
        </h2>

        {subtitle && (
          <p className="ipd-discharge-patient-header__subtitle">
            {subtitle}
          </p>
        )}

      </div>


      {/* =====================================================
          CLOSE BUTTON
          ===================================================== */}

      <button
        type="button"
        className="ipd-discharge-patient-header__close"
        onClick={handleClose}
        title={closeAction.tooltip}
        aria-label={closeAction.ariaLabel}
      >
        <CloseIcon />
      </button>

    </div>
  );
};


export default DischargePatientHeader;