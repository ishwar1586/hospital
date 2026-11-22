// src/master_modules/Billing&Invoice/components/PharmacyBilling/RegisteredPatient/PatientInformation/PatientClinicalInfo.jsx

import React from "react";

const PatientClinicalInfo = ({
  patient = {},
}) => {
  const {
    lastVisit = "-",
    doctor = "-",
    department = "-",
    visitType = "-",
    allergies = "-",
  } = patient;

  return (
    <div className="patient-information__clinical">

      <div className="patient-information__clinical-item">

        <span className="patient-information__detail-label">
          Last Visit
        </span>

        <span className="patient-information__detail-value">
          {lastVisit}
        </span>

      </div>


      <div className="patient-information__clinical-item">

        <span className="patient-information__detail-label">
          Doctor
        </span>

        <span className="patient-information__detail-value">
          {doctor}
        </span>

      </div>


      <div className="patient-information__clinical-item">

        <span className="patient-information__detail-label">
          Department
        </span>

        <span className="patient-information__detail-value">
          {department}
        </span>

      </div>


      <div className="patient-information__clinical-item">

        <span className="patient-information__detail-label">
          Visit Type
        </span>

        <span className="patient-information__detail-value">
          {visitType}
        </span>

      </div>


      <div className="patient-information__clinical-item">

        <span className="patient-information__detail-label">
          Allergies
        </span>

        <span
          className={[
            "patient-information__detail-value",
            allergies !== "-" &&
              "patient-information__detail-value--allergy",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {allergies}
        </span>

      </div>

    </div>
  );
};

export default PatientClinicalInfo;