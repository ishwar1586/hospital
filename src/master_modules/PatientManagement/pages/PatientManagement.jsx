import React, { useEffect, useState } from "react";

import PatientManagementHeader from "../components/Header/PatientManagementHeader";
import PatientStatsCards from "../components/StatsCards/PatientStatsCards";
import PatientFilters from "../components/Filters/PatientFilters";
import PatientTabs from "../components/Tabs/PatientTabs";
import PatientTable from "../components/Table/PatientTable";
import PatientProfile from "../components/Profile/PatientProfile/PatientProfile";
import PatientForm from "../components/Forms/PatientForm";

import usePatientFilters from "../hooks/usePatientFilters";
import usePatientPagination from "../hooks/usePatientPagination";

import Pagination from "../../../master_shared/components/pagination/Pagination";

import { patientMockData } from "../mock/patient.mock";

import "./../styles/patient-management.css";

const PatientManagement = () => {
  /* =========================================
     Patient Form State
  ========================================= */

  const [showPatientForm, setShowPatientForm] = useState(false);

  const [editingPatient, setEditingPatient] = useState(null);

  /* =========================================
     Tab State
  ========================================= */

  const [activeTab, setActiveTab] = useState("all");

  /* =========================================
     Selected Patient
  ========================================= */

  const [selectedPatient, setSelectedPatient] = useState(null);

  /* =========================================
     Patient Filters
  ========================================= */

  const {
    filters,
    filteredPatients,
    handleFilterChange,
    resetFilters,
  } = usePatientFilters(patientMockData, activeTab);

  /* =========================================
     Patient Pagination
  ========================================= */

  const {
    page,
    rowsPerPage,
    totalRows,
    paginatedData,
    handlePageChange,
    handleRowsPerPageChange,
    resetPagination,
  } = usePatientPagination(filteredPatients);

  /* =========================================
     Reset Pagination When Tab Changes
  ========================================= */

  useEffect(() => {
    resetPagination();
  }, [activeTab, resetPagination]);

  /* =========================================
     Reset Pagination When Filters Change
  ========================================= */

  useEffect(() => {
    resetPagination();
  }, [filters, resetPagination]);

  /* =========================================
     Filter Reset
  ========================================= */

  const handleResetFilters = () => {
    resetFilters();
    resetPagination();
  };

  /* =========================================
     Tab Change
  ========================================= */

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    resetPagination();
  };

  /* =========================================
     New Patient
  ========================================= */

  const handleAddPatient = () => {
    setEditingPatient(null);
    setShowPatientForm(true);
  };

  /* =========================================
     Edit Patient
  ========================================= */

  const handleEditPatient = (patient) => {
    if (!patient) {
      return;
    }

    setEditingPatient(patient);
    setShowPatientForm(true);
  };

  /* =========================================
     Back To Patient List
  ========================================= */

  const handleBackToPatientList = () => {
    setShowPatientForm(false);
    setEditingPatient(null);
  };

  /* =========================================
     Import Patients
  ========================================= */

  const handleImportPatients = () => {
    console.log("Import patients");
  };

  /* =========================================
     Export Patients
  ========================================= */

  const handleExportPatients = () => {
    console.log("Export patients");
  };

  /* =========================================
     View Patient
  ========================================= */

  const handleViewPatient = (patient) => {
    setSelectedPatient(patient);
  };

  /* =========================================
     Close Patient Profile
  ========================================= */

  const handleClosePatientProfile = () => {
    setSelectedPatient(null);
  };

  /* =========================================
     Deactivate Patient
  ========================================= */

  const handleDeactivatePatient = (patient) => {
    console.log("Deactivate patient:", patient);
  };

  /* =========================================
     Delete Patient
  ========================================= */

  const handleDeletePatient = (patient) => {
    console.log("Delete patient:", patient);
  };

  /* =========================================
     Patient Form Page
  ========================================= */

  if (showPatientForm) {
    return (
      <PatientForm
        patient={editingPatient}
        onBack={handleBackToPatientList}
      />
    );
  }

  /* =========================================
     Patient Management Page
  ========================================= */

  return (
    <div className="patient-management">

      {/* =====================================
          Header
      ===================================== */}

      <PatientManagementHeader
        onAddPatient={handleAddPatient}
        onImportPatients={handleImportPatients}
        onExportPatients={handleExportPatients}
      />

      {/* =====================================
          Stats Cards
      ===================================== */}

      <section className="patient-management-section">
        <PatientStatsCards />
      </section>

      {/* =====================================
          Patient Tabs
      ===================================== */}

      <section className="patient-management-section">
        <PatientTabs
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
      </section>

      {/* =====================================
          Filters
      ===================================== */}

      <section className="patient-management-section">
        <PatientFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onReset={handleResetFilters}
        />
      </section>

      {/* =====================================
          Patient Table
      ===================================== */}

      <section className="patient-management-section patient-table-section">
        <PatientTable
          patients={paginatedData}
          onView={handleViewPatient}
          onEdit={handleEditPatient}
          onDeactivate={handleDeactivatePatient}
          onDelete={handleDeletePatient}
        />
      </section>

      {/* =====================================
          Pagination
      ===================================== */}

      <section className="patient-management-pagination">
        <Pagination
          page={page}
          rowsPerPage={rowsPerPage}
          totalRows={totalRows}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </section>

      {/* =====================================
          Patient Profile Drawer
      ===================================== */}

      {selectedPatient && (
        <PatientProfile
          patient={selectedPatient}
          onClose={handleClosePatientProfile}
          onEdit={handleEditPatient}
        />
      )}

    </div>
  );
};

export default PatientManagement;