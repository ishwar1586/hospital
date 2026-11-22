// src/features/Billing&Invoice/components/PharmacyBilling/RegisteredPatient/PatientSelection/PatientSelection.jsx

import React, { useEffect, useMemo, useState } from "react";

import PatientSelectionHeader from "./PatientSelectionHeader";
import PatientSearch from "./PatientSearch";
import PatientTable from "./PatientTable";

// Existing reusable pagination
import Pagination from "@/master_shared/components/Pagination/Pagination";

import pharmacyPatientSelectionConfig from "../../../../config/pharmacyPatientSelection.config";
import pharmacyPatientMock from "../../../../mock/pharmacyPatient.mock";

import "./PatientSelection.css";

const PatientSelection = ({
  onClose,
  onPatientSelect,
}) => {
  const config = pharmacyPatientSelectionConfig;

  const searchConfig = config?.search || {};
  const paginationConfig = config?.pagination || {};

  const defaultPage =
    paginationConfig?.defaultPage || 1;

  const defaultRowsPerPage =
    paginationConfig?.defaultRowsPerPage || 5;

  const [patients] = useState(
    Array.isArray(pharmacyPatientMock)
      ? pharmacyPatientMock
      : []
  );

  const [searchValue, setSearchValue] = useState(
    searchConfig?.defaultValue || ""
  );

  const [activeSearch, setActiveSearch] = useState(
    searchConfig?.defaultValue || ""
  );

  const [page, setPage] = useState(defaultPage);

  const [rowsPerPage, setRowsPerPage] = useState(
    defaultRowsPerPage
  );

  const [loading] = useState(false);

  /**
   * Search patients
   *
   * Searchable fields are controlled from config.
   */
  const filteredPatients = useMemo(() => {
    const searchableFields =
      Array.isArray(searchConfig?.searchableFields)
        ? searchConfig.searchableFields
        : [];

    const searchTerm =
      activeSearch?.trim().toLowerCase();

    if (!searchTerm) {
      return patients;
    }

    return patients.filter((patient) => {
      return searchableFields.some((field) => {
        const value = patient?.[field];

        if (
          value === null ||
          value === undefined
        ) {
          return false;
        }

        return String(value)
          .toLowerCase()
          .includes(searchTerm);
      });
    });
  }, [
    patients,
    activeSearch,
    searchConfig?.searchableFields,
  ]);

  /**
   * Reset page whenever search result changes.
   */
  useEffect(() => {
    setPage(defaultPage);
  }, [activeSearch, rowsPerPage, defaultPage]);

  /**
   * Client-side pagination
   *
   * Backend integration can later replace this
   * without changing the UI components.
   */
  const paginatedPatients = useMemo(() => {
    const startIndex =
      (page - 1) * rowsPerPage;

    const endIndex =
      startIndex + rowsPerPage;

    return filteredPatients.slice(
      startIndex,
      endIndex
    );
  }, [
    filteredPatients,
    page,
    rowsPerPage,
  ]);

  /**
   * Search input change
   */
  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  /**
   * Search button / Enter
   */
  const handleSearch = (value) => {
    const nextSearch =
      typeof value === "string"
        ? value
        : searchValue;

    setActiveSearch(nextSearch.trim());
    setPage(defaultPage);
  };

  /**
   * Pagination page change
   */
  const handlePageChange = (
    event,
    newPage
  ) => {
    setPage(newPage);
  };

  /**
   * Pagination rows-per-page change
   */
  const handleRowsPerPageChange = (event) => {
    const nextRowsPerPage =
      Number(event?.target?.value) ||
      defaultRowsPerPage;

    setRowsPerPage(nextRowsPerPage);
    setPage(defaultPage);
  };

  /**
   * Patient selection
   */
  const handlePatientSelect = (patient) => {
    if (!patient) {
      return;
    }

    if (
      typeof onPatientSelect === "function"
    ) {
      onPatientSelect(patient);
    }
  };

  /**
   * Close page
   */
  const handleClose = () => {
    if (typeof onClose === "function") {
      onClose();
    }
  };

  return (
    <section className="patient-selection">
      {/* =========================
          Header
      ========================== */}
      <PatientSelectionHeader
        config={config}
        onClose={handleClose}
      />

      {/* =========================
          Search
      ========================== */}
      <div className="patient-selection__search-section">
        <PatientSearch
          config={config}
          value={searchValue}
          onChange={handleSearchChange}
          onSearch={handleSearch}
        />
      </div>

      {/* =========================
          Table
      ========================== */}
      <div className="patient-selection__table-section">
        <PatientTable
          patients={paginatedPatients}
          config={config}
          page={page}
          rowsPerPage={rowsPerPage}
          loading={loading}
          onSelect={handlePatientSelect}
        />
      </div>

      {/* =========================
          Pagination
      ========================== */}
      {paginationConfig?.enabled !== false && (
        <div className="patient-selection__pagination">
          <Pagination
            page={page}
            rowsPerPage={rowsPerPage}
            totalRows={filteredPatients.length}
            onPageChange={handlePageChange}
            onRowsPerPageChange={
              handleRowsPerPageChange
            }
          />
        </div>
      )}
    </section>
  );
};

export default PatientSelection;