// src/features/IPDManagement/components/TransferPatient/TransferPatientHeader.jsx

import React from "react";
import CloseIcon from "@mui/icons-material/Close";

import "./TransferPatientHeader.css";

const TransferPatientHeader = ({
  onClose,
  disabled = false,
}) => {
  return (
    <div className="ipd-transfer-patient-header">

      <div className="ipd-transfer-patient-header__content">

        <div className="ipd-transfer-patient-header__title">
          Transfer Patient
        </div>

        <button
          type="button"
          className="ipd-transfer-patient-header__close"
          onClick={onClose}
          disabled={disabled}
          aria-label="Close Transfer Patient"
        >
          <CloseIcon />
        </button>

      </div>

    </div>
  );
};

export default TransferPatientHeader;