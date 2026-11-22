import React from "react";

import "./MedicalSummary.css";

const MedicalSummary = ({ patient }) => {
  if (!patient) {
    return null;
  }

  const medical = patient.medicalSummary || {};

  return (
    <div className="patient-medical-summary">

      {/* =====================================
          Header
      ===================================== */}

      <div className="patient-medical-summary-header">
        <div>
          <h3 className="patient-medical-summary-title">
            Medical Summary
          </h3>

          <p className="patient-medical-summary-subtitle">
            Important medical information
          </p>
        </div>
      </div>


      {/* =====================================
          Medical Information
      ===================================== */}

      <div className="patient-medical-summary-body">

        <div className="patient-medical-summary-item">
          <span className="patient-medical-summary-label">
            Allergies
          </span>

          <span className="patient-medical-summary-value">
            {medical.allergies || "No known allergies"}
          </span>
        </div>


        <div className="patient-medical-summary-item">
          <span className="patient-medical-summary-label">
            Chronic Conditions
          </span>

          <span className="patient-medical-summary-value">
            {medical.chronicConditions || "None reported"}
          </span>
        </div>


        <div className="patient-medical-summary-item">
          <span className="patient-medical-summary-label">
            Current Medications
          </span>

          <span className="patient-medical-summary-value">
            {medical.currentMedications || "No current medications"}
          </span>
        </div>


        <div className="patient-medical-summary-item">
          <span className="patient-medical-summary-label">
            Past Surgeries
          </span>

          <span className="patient-medical-summary-value">
            {medical.pastSurgeries || "No past surgeries"}
          </span>
        </div>


        <div className="patient-medical-summary-item">
          <span className="patient-medical-summary-label">
            Family History
          </span>

          <span className="patient-medical-summary-value">
            {medical.familyHistory || "No significant family history"}
          </span>
        </div>


        <div className="patient-medical-summary-item">
          <span className="patient-medical-summary-label">
            Medical Notes
          </span>

          <span className="patient-medical-summary-value">
            {medical.notes || "No medical notes available"}
          </span>
        </div>

      </div>

    </div>
  );
};

export default MedicalSummary;