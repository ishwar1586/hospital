
import React from "react";
import "./OPDVisitTypeChip.css";

const OPDVisitTypeChip = ({ visitType }) => {
  const normalizedType = String(visitType || "appointment").toLowerCase();
  const label =
    normalizedType === "walk-in"
      ? "Walk-in"
      : normalizedType === "appointment"
        ? "Appointment"
        : normalizedType.replaceAll("-", " ");

  return (
    <span className={`opd-visit-type-chip opd-visit-type-chip--${normalizedType}`}>
      {label}
    </span>
  );
};

export default OPDVisitTypeChip;
