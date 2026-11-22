import React from "react";

import {
  getPatientName,
  getPatientUHID,
  getPatientInitials,
} from "../../utils/ipdHelpers";
import "./IPDTableRow.css";

const PatientDetailsCell = ({ patient }) => {
  if (!patient) {
    return (
      <div className="ipd-patient-cell">
        <span className="ipd-patient-cell__empty">
          —
        </span>
      </div>
    );
  }

  const name = getPatientName(patient);
  const uhid = getPatientUHID(patient);
  const initials = getPatientInitials(patient);

  return (
    <div className="ipd-patient-cell">
      <div className="ipd-patient-cell__avatar">
        {initials || "—"}
      </div>

      <div className="ipd-patient-cell__content">
        <span className="ipd-patient-cell__name">
          {name || "—"}
        </span>

        <span className="ipd-patient-cell__uhid">
          {uhid || "—"}
        </span>
      </div>
    </div>
  );
};

export default PatientDetailsCell;