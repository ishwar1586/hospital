import React from "react";
import { MedicationOutlined } from "@mui/icons-material";

const PrescriptionHeader = ({
  title = "Prescription",
  subtitle = "Patient prescription and medication details",
  prescriptionNumber = "",
}) => {
  return (
    <header className="prescription-section__header">

      <div className="prescription-section__header-left">

        <div className="prescription-section__header-icon">
          <MedicationOutlined />
        </div>

        <div className="prescription-section__header-content">

          <h2 className="prescription-section__title">
            {title}
          </h2>

          {subtitle && (
            <p className="prescription-section__subtitle">
              {subtitle}
            </p>
          )}

        </div>

      </div>

      {prescriptionNumber && (
        <div className="prescription-section__prescription-number">

          <span className="prescription-section__prescription-label">
            Prescription No.
          </span>

          <span className="prescription-section__prescription-value">
            {prescriptionNumber}
          </span>

        </div>
      )}

    </header>
  );
};

export default PrescriptionHeader;