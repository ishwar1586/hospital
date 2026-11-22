import React from "react";

const PatientTypeChip = ({ type }) => {
  const normalizedType = type?.toLowerCase();

  return (
    <span
      className={`patient-type-chip patient-type-chip--${normalizedType}`}
    >
      {type}
    </span>
  );
};

export default PatientTypeChip;