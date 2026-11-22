
import React, { useState } from "react";
import "../styles/DepartmentManagement.css";

// Department Management Components
import DepartmentHeader from "../components/DepartmentHeader/DepartmentHeader";
import DepartmentStats from "../components/DepartmentStats/DepartmentStats";
import DepartmentFilters from "../components/DepartmentFilters/DepartmentFilters";
import DepartmentTable from "../components/DepartmentTable/DepartmentTable";

// Add Department Page
import AddDepartment from "../components/AddDepartment/AddDepartment";

// Initial Filters
const INITIAL_FILTERS = {
  status: "",
  type: "",
  search: "",
};

const DepartmentManagement = ({
  stats,
  onRefresh,
  departments,
  onViewDepartment,
  onEditDepartment,
  onDeleteDepartment,
}) => {
  // Page Navigation State
  const [isAddDepartmentOpen, setIsAddDepartmentOpen] = useState(false);

  // Filter State
  const [filters, setFilters] = useState(INITIAL_FILTERS);

  // Open Add Department Page
  const handleAddDepartment = () => {
    setIsAddDepartmentOpen(true);
  };

  // Back to Department Management
  const handleBackToDepartmentList = () => {
    setIsAddDepartmentOpen(false);
  };

  // Handle Filter Changes
  const handleFilterChange = (field, value) => {
    setFilters((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  // Handle Refresh
  const handleRefresh = () => {
    setFilters({ ...INITIAL_FILTERS });
    onRefresh?.();
  };

  // Handle Department Table Actions
  const handleDepartmentAction = (action, department) => {
    switch (action) {
      case "view":
        onViewDepartment?.(department);
        break;

      case "edit":
        onEditDepartment?.(department);
        break;

      case "delete":
        onDeleteDepartment?.(department);
        break;

      default:
        break;
    }
  };

  // Render Add Department Full Page
  if (isAddDepartmentOpen) {
    return (
      <AddDepartment
        onBack={handleBackToDepartmentList}
      />
    );
  }

  // Render Department Management Page
  return (
    <main className="department-management">

      {/* Department Header */}
      <section className="department-management__header">
        <DepartmentHeader
          onAddDepartment={handleAddDepartment}
        />
      </section>

      {/* Department Statistics */}
      <section className="department-management__stats">
        <DepartmentStats
          stats={stats}
        />
      </section>

      {/* Department Filters */}
      <section className="department-management__filters">
        <DepartmentFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onRefresh={handleRefresh}
        />
      </section>

      {/* Department Table */}
      <section className="department-management__table">
        <DepartmentTable
          data={departments}
          filters={filters}
          onAction={handleDepartmentAction}
        />
      </section>

    </main>
  );
};

export default DepartmentManagement;
