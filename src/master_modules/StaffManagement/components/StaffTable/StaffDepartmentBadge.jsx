
import React from "react";
import { Chip } from "@mui/material";
import "./StaffTable.css";

const StaffDepartmentBadge = ({ department }) => {
  if (!department) {
    return <span className="staff-table__muted">—</span>;
  }

  return (
    <Chip
      label={department}
      size="small"
      className="staff-table__department-badge"
    />
  );
};

export default StaffDepartmentBadge;
