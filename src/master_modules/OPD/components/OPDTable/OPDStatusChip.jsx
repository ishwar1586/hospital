
import React from "react";
import "./OPDStatusChip.css";

const statusLabels = {
  scheduled: "Scheduled",
  waiting: "Waiting",
  "checked-in": "Checked In",
  "in-consultation": "In Consultation",
  consulted: "Consulted",
  "no-show": "No Show",
  cancelled: "Cancelled",
};

const OPDStatusChip = ({ status }) => {
  const normalizedStatus = String(status || "scheduled")
    .trim()
    .toLowerCase();

  const label =
    statusLabels[normalizedStatus] ||
    normalizedStatus.replaceAll("-", " ");

  return (
    <span
      className={`opd-status-chip opd-status-chip--${normalizedStatus.replace(/[^a-z0-9]+/g, "-")}`}
    >
      <span className="opd-status-chip__dot" />
      {label}
    </span>
  );
};

export default OPDStatusChip;
