import React from "react";
import "./DepartmentTableRow.css";

import DepartmentTypeBadge from "./DepartmentTypeBadge";
import DepartmentStatus from "./DepartmentStatus";
import DepartmentActions from "./DepartmentActions";

const DepartmentTableRow = ({
  department,
  onAction,
}) => {
  if (!department) return null;

  return (
    <tr className="department-table-row">
      <td className="department-table-row__name">
        <div className="department-table-row__name-content">
          <span className="department-table-row__department-name">
            {department.departmentName || "—"}
          </span>

          <span className="department-table-row__department-id">
            {department.id || "—"}
          </span>
        </div>
      </td>

      <td className="department-table-row__code">
        {department.code || "—"}
      </td>

      <td>
        <DepartmentTypeBadge type={department.type} />
      </td>

      <td className="department-table-row__doctor">
        {department.headDoctor || "Not Assigned"}
      </td>

      <td className="department-table-row__services">
        <span className="department-table-row__service-count">
          {Number(department.services) || 0}
        </span>
      </td>

      <td>
        <DepartmentStatus status={department.status} />
      </td>

      <td className="department-table-row__actions">
        <DepartmentActions
          department={department}
          onAction={onAction}
        />
      </td>
    </tr>
  );
};

export default DepartmentTableRow;