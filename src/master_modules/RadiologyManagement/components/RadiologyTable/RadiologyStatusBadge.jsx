import React from "react";

const RadiologyStatusBadge = ({ status }) => {
  const normalizedStatus = String(status ?? "")
    .trim()
    .toLowerCase()
    .replaceAll("_", " ")
    .replaceAll("-", " ");

  const statusClassMap = {
    pending: "pending",
    "in progress": "in-progress",
    completed: "completed",
    cancelled: "cancelled",
  };

  const labelMap = {
    pending: "Pending",
    "in progress": "In Progress",
    completed: "Completed",
    cancelled: "Cancelled",
  };

  const statusClass = statusClassMap[normalizedStatus] ?? "unknown";
  const label = labelMap[normalizedStatus] ?? status ?? "Unknown";

  return (
    <span
      className={`radiology-table__status radiology-table__status--${statusClass}`}
    >
      <span className="radiology-table__status-dot" aria-hidden="true" />
      {label}
    </span>
  );
};

export default RadiologyStatusBadge;