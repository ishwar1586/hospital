
import React from "react";
import { Chip } from "@mui/material";
import "./StaffTable.css";

const StaffStatusBadge = ({ status }) => {
  const normalizedStatus = String(status || "").toLowerCase();

  const statusClass =
    normalizedStatus === "active"
      ? "active"
      : normalizedStatus === "inactive"
        ? "inactive"
        : normalizedStatus === "on leave"
          ? "on-leave"
          : "default";

  return (
    <Chip
      label={status || "Unknown"}
      size="small"
      className={`staff-table__status-badge staff-table__status-badge--${statusClass}`}
    />
  );
};

export default StaffStatusBadge;
