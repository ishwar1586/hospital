import React from "react";
import "./DepartmentTypeBadge.css";

import { departmentTypeConfig } from "../../config/departmentType.config";

const DepartmentTypeBadge = ({ type }) => {
  const normalizedType = String(type || "").toLowerCase();
  const config = departmentTypeConfig[normalizedType];

  if (!config) {
    return (
      <span className="department-type-badge department-type-badge--unknown">
        {type || "Not Specified"}
      </span>
    );
  }

  return (
    <span
      className={`department-type-badge department-type-badge--${config.className}`}
    >
      {config.label}
    </span>
  );
};

export default DepartmentTypeBadge;