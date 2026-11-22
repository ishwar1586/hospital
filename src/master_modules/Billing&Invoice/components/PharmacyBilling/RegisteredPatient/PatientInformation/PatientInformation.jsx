// src/master_modules/Billing&Invoice/components/PharmacyBilling/RegisteredPatient/PatientInformation/PatientInformation.jsx

import React from "react";

import PatientInformationHeader from "./PatientInformationHeader";
import PatientInformationCard from "./PatientInformationCard";

import "./PatientInformation.css";

const PatientInformation = ({
  patient = null,
  onViewHistory,
}) => {
  if (!patient) {
    return null;
  }

  return (
    <section className="patient-information">

      <PatientInformationHeader
        patient={patient}
        onViewHistory={onViewHistory}
      />

      <PatientInformationCard
        patient={patient}
      />

    </section>
  );
};

export default PatientInformation;