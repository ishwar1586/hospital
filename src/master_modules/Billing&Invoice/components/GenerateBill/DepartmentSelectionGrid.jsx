import React from "react";

import DepartmentSelectionCard from "./DepartmentSelectionCard";

const DepartmentSelectionGrid = ({
  departments = [],
  config = {},
  selectedDepartment,
  onDepartmentSelect,
}) => {
  if (
    !Array.isArray(departments) ||
    departments.length === 0
  ) {
    return null;
  }

  const handleDepartmentSelect = (department) => {
    if (typeof onDepartmentSelect !== "function") {
      return;
    }

    onDepartmentSelect(department);
  };

  return (
    <div className="department-selection-grid">
      {departments.map((department) => {
        if (!department?.id) {
          return null;
        }

        const isSelected =
          selectedDepartment?.id === department.id;

        return (
          <DepartmentSelectionCard
            key={department.id}
            department={department}
            config={config}
            selected={isSelected}
            onSelect={handleDepartmentSelect}
          />
        );
      })}
    </div>
  );
};

export default DepartmentSelectionGrid;