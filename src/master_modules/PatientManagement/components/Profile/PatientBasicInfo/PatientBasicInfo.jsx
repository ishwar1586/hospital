import React from "react";

import "./PatientBasicInfo.css";

const PatientBasicInfo = ({ patient }) => {
  if (!patient) {
    return null;
  }

  return (
    <div className="patient-profile-basic-info">

      <div className="patient-profile-info-item">
        <span className="patient-profile-info-label">
          Patient ID
        </span>

        <span className="patient-profile-info-value">
          {patient.id || "-"}
        </span>
      </div>

      <div className="patient-profile-info-item">
        <span className="patient-profile-info-label">
          Date of Birth
        </span>

        <span className="patient-profile-info-value">
          {patient.dateOfBirth || "-"}
        </span>
      </div>

      <div className="patient-profile-info-item">
        <span className="patient-profile-info-label">
          Marital Status
        </span>

        <span className="patient-profile-info-value">
          {patient.maritalStatus || "-"}
        </span>
      </div>

      <div className="patient-profile-info-item">
        <span className="patient-profile-info-label">
          Occupation
        </span>

        <span className="patient-profile-info-value">
          {patient.occupation || "-"}
        </span>
      </div>

    </div>
  );
};

export default PatientBasicInfo;