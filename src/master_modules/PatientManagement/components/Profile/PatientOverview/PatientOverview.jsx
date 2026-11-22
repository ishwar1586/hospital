import React from "react";

import RecentVisits from "../RecentVisits/RecentVisits";
import UpcomingAppointment from "../UpcomingAppointment/UpcomingAppointment";
import MedicalSummary from "../MedicalSummary/MedicalSummary";

import "./PatientOverview.css";


const PatientOverview = ({ patient }) => {
  if (!patient) {
    return null;
  }

  return (
    <div className="patient-overview">

      <div className="patient-overview-visit-grid">

        <RecentVisits
          patient={patient}
        />

        <UpcomingAppointment
          patient={patient}
        />

      </div>


      <MedicalSummary
        patient={patient}
      />

    </div>
  );
};

export default PatientOverview;