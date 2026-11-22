
import React, {
  useCallback,
  useMemo,
  useState,
} from "react";

import StaffHeader from "../components/StaffHeader/StaffHeader";
import StaffStats from "../components/StaffStats/StaffStats";
import StaffFilters from "../components/StaffFilters/StaffFilters";
import StaffTabs from "../components/StaffTabs/StaffTabs";
import StaffTable from "../components/StaffTable/StaffTable";
import AddStaffMember from "../components/AddStaffMember/AddStaffMember";
import StaffDetailsDrawer from "../components/StaffDetails/StaffDetailsDrawer";

import { useStaff } from "../hooks/useStaff";

import "@/master_modules/StaffManagement/styles/StaffManagement.css";

const StaffManagement = () => {
  const {
    staff = [],
    stats,
    filters,
    loading,
    error,
    updateFilters,
    handleFilterChange,
    resetFilters,
  } = useStaff();

  const [isAddStaffOpen, setIsAddStaffOpen] = useState(false);
  const [createdStaff, setCreatedStaff] = useState([]);

  const [selectedStaff, setSelectedStaff] = useState(null);
  const [isDetailsDrawerOpen, setIsDetailsDrawerOpen] = useState(false);

  // Active tab category filter se derive hoga.
  const activeTab = filters?.staffCategory || "all";

  // Newly created staff ko existing list ke saath merge karo.
  const displayStaff = useMemo(() => {
    const existingIds = new Set(
      staff.map((item) => String(item.id ?? item.employeeId))
    );

    const additionalStaff = createdStaff.filter(
      (item) =>
        !existingIds.has(String(item.id ?? item.employeeId))
    );

    return [...additionalStaff, ...staff];
  }, [staff, createdStaff]);

  const handleTabChange = useCallback(
    (selectedCategory) => {
      updateFilters({
        staffCategory:
          selectedCategory === "all" ? "" : selectedCategory,
      });
    },
    [updateFilters]
  );

  // Add Staff page open karo.
  const handleAddStaff = useCallback(() => {
    setIsDetailsDrawerOpen(false);
    setSelectedStaff(null);
    setIsAddStaffOpen(true);
  }, []);

  const handleCancelAddStaff = useCallback(() => {
    setIsAddStaffOpen(false);
  }, []);

  // Successfully created staff ko local list mein add karo.
  const handleStaffCreated = useCallback((newStaffMember) => {
    if (newStaffMember) {
      setCreatedStaff((previous) => [
        newStaffMember,
        ...previous.filter(
          (item) =>
            String(item.id ?? item.employeeId) !==
            String(newStaffMember.id ?? newStaffMember.employeeId)
        ),
      ]);
    }

    setIsAddStaffOpen(false);
  }, []);

  // Three-dot menu se View click karne par drawer open karo.
  const handleViewStaff = useCallback((staffMember) => {
    if (!staffMember) return;

    setSelectedStaff(staffMember);
    setIsDetailsDrawerOpen(true);
  }, []);

  const handleCloseDetailsDrawer = useCallback(() => {
    setIsDetailsDrawerOpen(false);
    setSelectedStaff(null);
  }, []);

  const handleEditStaff = useCallback((staffMember) => {
    // Edit flow baad mein existing edit form ke saath integrate hoga.
    console.log("Edit staff:", staffMember);
  }, []);

  const handleDeleteStaff = useCallback((staffMember) => {
    // Delete API aur confirmation dialog alag se integrate honge.
    console.log("Delete staff:", staffMember);
  }, []);

  // Add Staff form ko full page par render karo.
  if (isAddStaffOpen) {
    return (
      <div className="staff-management-page">
        <AddStaffMember
          onCancel={handleCancelAddStaff}
          onSuccess={handleStaffCreated}
        />
      </div>
    );
  }

  return (
    <div className="staff-management-page">
      <section className="staff-management-header-section">
        <StaffHeader onAddStaff={handleAddStaff} />
      </section>

      <section className="staff-management-stats-section">
        <StaffStats
          stats={stats}
          loading={loading}
        />
      </section>

      <section className="staff-management-filters-section">
        <StaffFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onReset={resetFilters}
          loading={loading}
        />
      </section>

      <section className="staff-management-tabs-section">
        <StaffTabs
          activeTab={activeTab}
          onTabChange={handleTabChange}
          loading={loading}
        />
      </section>

      {error && (
        <div
          className="staff-management-error"
          role="alert"
        >
          {error}
        </div>
      )}

      <StaffTable
        data={displayStaff}
        loading={loading}
        error={error}
        onView={handleViewStaff}
        onEdit={handleEditStaff}
        onDelete={handleDeleteStaff}
      />

      <section
        className="staff-management-results-section"
        aria-live="polite"
      >
        <div className="staff-management-results-summary">
          <span className="staff-management-results-label">
            Staff Records
          </span>

          <span className="staff-management-results-count">
            {loading
              ? "Loading staff..."
              : `${displayStaff.length} records displayed`}
          </span>
        </div>
      </section>

      {/* Selected staff ki details drawer */}
      <StaffDetailsDrawer
        open={isDetailsDrawerOpen}
        staff={selectedStaff}
        onClose={handleCloseDetailsDrawer}
      />
    </div>
  );
};

export default StaffManagement;
