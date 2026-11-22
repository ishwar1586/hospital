import React from "react";
import "./IPDTableRow.css";

const DoctorCell = ({ doctor }) => {
  if (!doctor) {
    return (
      <span className="ipd-doctor-cell__empty">
        —
      </span>
    );
  }

  const doctorName =
    typeof doctor === "string"
      ? doctor
      : doctor?.name ??
        doctor?.doctorName ??
        doctor?.fullName ??
        doctor?.displayName ??
        doctor?.profile?.name ??
        "";

  return (
    <div className="ipd-doctor-cell">
      <span className="ipd-doctor-cell__name">
        {doctorName || "—"}
      </span>
    </div>
  );
};

export default DoctorCell;