
import React from "react";

import {
  opdDepartmentTabsConfig,
} from "../../config/opdDepartmentTabs.config";

import {
  opdDepartmentsMock,
} from "../../mock/opdDepartments.mock";

import "./OPDDepartmentTabs.css";

const OPDDepartmentTabs = ({
  departments = opdDepartmentsMock,
  config = opdDepartmentTabsConfig,
  selectedDepartmentId,
  onDepartmentChange,
}) => {
  const activeDepartments = departments.filter(
    (department) => department.isActive
  );

  const handleDepartmentSelect = (departmentId) => {
    if (departmentId === selectedDepartmentId) {
      return;
    }

    onDepartmentChange?.(departmentId);
  };

  return (
    <nav
      className="opd-department-tabs"
      aria-label="Filter OPD by department"
    >
      <div
        className="opd-department-tabs__list"
        role="tablist"
        aria-label="OPD departments"
      >
        {activeDepartments.map((department) => {
          const isSelected =
            department.id === selectedDepartmentId;

          return (
            <button
              key={department.id}
              type="button"
              role="tab"
              id={`opd-department-tab-${department.id}`}
              aria-selected={isSelected}
              aria-controls="opd-patient-panel"
              className={[
                "opd-department-tabs__tab",
                isSelected
                  ? "opd-department-tabs__tab--active"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() =>
                handleDepartmentSelect(department.id)
              }
            >
              {department.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default OPDDepartmentTabs;
