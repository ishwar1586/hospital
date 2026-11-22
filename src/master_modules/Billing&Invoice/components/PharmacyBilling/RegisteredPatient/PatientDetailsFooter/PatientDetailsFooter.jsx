import React from "react";
import {
  ArrowBackOutlined,
  ArrowForwardOutlined,
} from "@mui/icons-material";

import "./PatientDetailsFooter.css";

const PatientDetailsFooter = ({
  onBack,
  onContinue,
  onCancel,
}) => {
  const handleBack = () => {
    if (typeof onBack === "function") {
      onBack();
    }
  };

  const handleContinue = () => {
    if (typeof onContinue === "function") {
      onContinue();
    }
  };

  const handleCancel = () => {
    if (typeof onCancel === "function") {
      onCancel();
    }
  };

  return (
    <footer className="patient-details-footer">
      <div className="patient-details-footer__left">
        <button
          type="button"
          className="patient-details-footer__cancel"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>

      <div className="patient-details-footer__right">
        <button
          type="button"
          className="patient-details-footer__back"
          onClick={handleBack}
        >
          <ArrowBackOutlined />

          <span>Back</span>
        </button>

        <button
          type="button"
          className="patient-details-footer__continue"
          onClick={handleContinue}
        >
          <span>Continue to Medicines</span>

          <ArrowForwardOutlined />
        </button>
      </div>
    </footer>
  );
};

export default PatientDetailsFooter;