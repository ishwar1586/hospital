// src/master_modules/Billing&Invoice/components/PharmacyBilling/RegisteredPatient/PatientInformation/PatientInformationHeader.jsx

import React from "react";
import {
  PersonOutlined,
  HistoryOutlined,
} from "@mui/icons-material";

const PatientInformationHeader = ({
  patient = null,
  onViewHistory,
}) => {
  const handleHistoryClick = () => {
    if (typeof onViewHistory === "function") {
      onViewHistory(patient);
    }
  };

  return (
    <div className="patient-information__header">

      <div className="patient-information__header-left">

        <div className="patient-information__header-icon">
          <PersonOutlined />
        </div>

        <div className="patient-information__header-text">

          <h2 className="patient-information__title">
            Patient Information
          </h2>

          <p className="patient-information__subtitle">
            Registered patient details
          </p>

        </div>

      </div>


      <button
        type="button"
        className="patient-information__history-button"
        onClick={handleHistoryClick}
      >
        <HistoryOutlined />

        <span>
          View Full History
        </span>
      </button>

    </div>
  );
};

export default PatientInformationHeader;