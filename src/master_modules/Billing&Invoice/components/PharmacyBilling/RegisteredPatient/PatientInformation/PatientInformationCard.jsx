// src/master_modules/Billing&Invoice/components/PharmacyBilling/RegisteredPatient/PatientInformation/PatientInformationCard.jsx

import React from "react";

import PatientBasicInfo from "./PatientBasicInfo";
import PatientClinicalInfo from "./PatientClinicalInfo";

const PatientInformationCard = ({
  patient = null,
}) => {
  if (!patient) {
    return null;
  }

  return (
    <div className="patient-information__card">

      <PatientBasicInfo
        patient={patient}
      />

      <PatientClinicalInfo
        patient={patient}
      />

    </div>
  );
};

export default PatientInformationCard;