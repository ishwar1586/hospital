
import React from "react";
import ArrowBackOutlined from "@mui/icons-material/ArrowBackOutlined";

import { startConsultationConfig } from "../../config/startConsultation.config";
import "./ConsultationHeader.css";

const ConsultationHeader = ({
  onBack,
  config = startConsultationConfig.header,
}) => {
  const handleBack = () => {
    if (typeof onBack === "function") {
      onBack();
    }
  };

  return (
    <header className="consultation-header">
      <div className="consultation-header__content">
        <h1 className="consultation-header__title">
          {config.title}
        </h1>

        <p className="consultation-header__subtitle">
          {config.subtitle}
        </p>
      </div>

      <button
        type="button"
        className="consultation-header__back-button"
        onClick={handleBack}
      >
        <ArrowBackOutlined className="consultation-header__back-icon" />

        <span>{config.backButtonLabel}</span>
      </button>
    </header>
  );
};

export default ConsultationHeader;
