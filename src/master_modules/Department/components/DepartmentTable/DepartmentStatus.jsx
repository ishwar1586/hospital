import React from "react";
import "./DepartmentStatus.css";

import { departmentStatusConfig } from "../../config/departmentStatus.config";

const DepartmentStatus = ({ status }) => {
  const normalizedStatus = String(status || "").toLowerCase();
  const config = departmentStatusConfig[normalizedStatus];

  if (!config) {
    return (
      <span className="department-status department-status--unknown">
        {status || "Unknown"}
      </span>
    );
  }

  return (
    <span
      className={`department-status department-status--${config.className}`}
    >
      <span className="department-status__dot" />
      {config.label}
    </span>
  );
};

export default DepartmentStatus;