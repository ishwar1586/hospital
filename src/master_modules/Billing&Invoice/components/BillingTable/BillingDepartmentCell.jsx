import React from "react";

const BillingDepartmentCell = ({
  department = "",
}) => {
  const normalizedDepartment = String(
    department || "other"
  )
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");

  const departmentLabel = department || "Other";

  return (
    <div className="billing-department-cell">
      <span
        className={`
          billing-department-cell__badge
          billing-department-cell__badge--${normalizedDepartment}
        `}
      >
        {departmentLabel}
      </span>
    </div>
  );
};

export default BillingDepartmentCell;