import React from "react";

const PatientStatusChip = ({ status }) => {
  const normalizedStatus = status?.toLowerCase();

  return (
    <span
      className={`patient-status-chip patient-status-chip--${normalizedStatus}`}
    >
      <span className="patient-status-chip__dot"></span>
      {status}
    </span>
  );
};

export default PatientStatusChip;