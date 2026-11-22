import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowBackOutlined,
  CloseOutlined,
  SearchOutlined,
  PersonSearchOutlined,
  BedOutlined,
  RefreshOutlined,
} from "@mui/icons-material";

import Pagination from "@/master_shared/components/Pagination/Pagination";

import ipdBillingConfig from "@/master_modules/Billing&Invoice/config/ipdBilling.config";
import ipdBillingMock from "@/master_modules/Billing&Invoice/mock/ipdBilling.mock";

import "./IPDPatientSelection.css";

const IPDPatientSelection = ({
  onClose,
  onPatientSelect,
  onBack,
  config = ipdBillingConfig,
  mock = ipdBillingMock,
}) => {
  const searchConfig = config?.search || {};
  const filtersConfig = config?.filters || {};
  const tableConfig = config?.table || {};
  const paginationConfig = config?.pagination || {};

  const patients = useMemo(
    () => (Array.isArray(mock?.patients) ? mock.patients : []),
    [mock?.patients]
  );

  const defaultPage = paginationConfig?.defaultPage ?? 1;
  const defaultRowsPerPage =
    paginationConfig?.defaultRowsPerPage ?? 5;

  const [searchValue, setSearchValue] = useState(
    searchConfig?.defaultValue || ""
  );
  const [activeSearch, setActiveSearch] = useState(
    searchConfig?.defaultValue || ""
  );
  const [selectedWard, setSelectedWard] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [page, setPage] = useState(defaultPage);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);

  const wardOptions = useMemo(() => {
    const wards = [...new Set(
      patients.map((patient) => patient?.ward).filter(Boolean)
    )];

    return wards.map((ward) => ({
      value: ward,
      label: ward,
    }));
  }, [patients]);

  const statusOptions =
    filtersConfig?.status?.options || [];

  const filteredPatients = useMemo(() => {
    const searchableFields = Array.isArray(
      searchConfig?.searchableFields
    )
      ? searchConfig.searchableFields
      : [];

    const term = activeSearch.trim().toLowerCase();

    return patients.filter((patient) => {
      const matchesSearch =
        !term ||
        searchableFields.some((field) =>
          String(patient?.[field] ?? "")
            .toLowerCase()
            .includes(term)
        );

      const matchesWard =
        selectedWard === "all" ||
        patient?.ward === selectedWard;

      const matchesStatus =
        selectedStatus === "all" ||
        String(patient?.status || "").toLowerCase() ===
          selectedStatus.toLowerCase();

      return matchesSearch && matchesWard && matchesStatus;
    });
  }, [
    patients,
    activeSearch,
    selectedWard,
    selectedStatus,
    searchConfig?.searchableFields,
  ]);

  useEffect(() => {
    setPage(defaultPage);
  }, [activeSearch, selectedWard, selectedStatus, rowsPerPage, defaultPage]);

  const paginatedPatients = useMemo(() => {
    const startIndex = (page - 1) * rowsPerPage;
    return filteredPatients.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredPatients, page, rowsPerPage]);

  const handleSearch = () => {
    setActiveSearch(searchValue.trim());
    setPage(defaultPage);
  };

  const handleSearchKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  const handleReset = () => {
    setSearchValue("");
    setActiveSearch("");
    setSelectedWard("all");
    setSelectedStatus("all");
    setPage(defaultPage);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    const value = Number(event?.target?.value);
    if (!Number.isFinite(value) || value <= 0) return;

    setRowsPerPage(value);
    setPage(defaultPage);
  };

  const handlePatientSelect = (patient) => {
    if (!patient) return;
    onPatientSelect?.(patient);
  };

  const handleClose = () => {
    onClose?.();
  };

  const getStatusLabel = (status) => {
    const option = statusOptions.find(
      (item) =>
        String(item?.value).toLowerCase() ===
        String(status).toLowerCase()
    );

    return option?.label ||
      String(status || "Unknown")
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const columns = (tableConfig?.columns || []).filter(
    (column) => column?.visible !== false
  );

  const getCellValue = (patient, column, index) => {
    switch (column?.field) {
      case "serialNumber":
        return (page - 1) * rowsPerPage + index + 1;

      case "ageGender":
        return `${patient?.age ?? "-"} / ${
          patient?.gender === "Male"
            ? "M"
            : patient?.gender === "Female"
            ? "F"
            : patient?.gender || "-"
        }`;

      case "wardRoomBed":
        return [
          patient?.ward,
          patient?.room,
          patient?.bed,
        ]
          .filter(Boolean)
          .join(" / ") || "-";

      default:
        return patient?.[column?.field] ?? "-";
    }
  };

  return (
    <section className="ipd-patient-selection">
      <header className="ipd-patient-selection__header">
        <div className="ipd-patient-selection__heading">
          <div className="ipd-patient-selection__heading-icon">
            <PersonSearchOutlined />
          </div>

          <div>
            <h1 className="ipd-patient-selection__title">
              {config?.page?.title || "IPD Patient Selection"}
            </h1>
            <p className="ipd-patient-selection__subtitle">
              {config?.page?.subtitle ||
                "Select an admitted patient to generate an IPD bill"}
            </p>
          </div>
        </div>

        <div className="ipd-patient-selection__header-actions">
          {onBack && (
            <button
              type="button"
              className="ipd-patient-selection__back-button"
              onClick={onBack}
            >
              <ArrowBackOutlined />
              <span>Back</span>
            </button>
          )}

          {config?.page?.showCloseButton && (
            <button
              type="button"
              className="ipd-patient-selection__close-button"
              onClick={handleClose}
              aria-label={
                config?.page?.closeButton?.ariaLabel ||
                "Close IPD patient selection"
              }
              title={config?.page?.closeButton?.label || "Close"}
            >
              <CloseOutlined />
            </button>
          )}
        </div>
      </header>

      <div className="ipd-patient-selection__summary">
        <div className="ipd-patient-selection__summary-icon">
          <BedOutlined />
        </div>
        <div>
          <span className="ipd-patient-selection__summary-label">
            IPD Patients
          </span>
          <strong className="ipd-patient-selection__summary-value">
            {filteredPatients.length}
          </strong>
        </div>
      </div>

      <div className="ipd-patient-selection__content">
        <div className="ipd-patient-selection__toolbar">
          {searchConfig?.enabled !== false && (
            <div className="ipd-patient-selection__search">
              <SearchOutlined className="ipd-patient-selection__search-icon" />
              <input
                type="search"
                value={searchValue}
                onChange={(event) =>
                  setSearchValue(event.target.value)
                }
                onKeyDown={handleSearchKeyDown}
                placeholder={
                  searchConfig?.placeholder ||
                  "Search IPD patients..."
                }
                aria-label="Search IPD patients"
                autoComplete="off"
              />
            </div>
          )}

          {filtersConfig?.enabled !== false && (
            <>
              {filtersConfig?.ward?.enabled !== false && (
                <select
                  className="ipd-patient-selection__filter"
                  value={selectedWard}
                  onChange={(event) =>
                    setSelectedWard(event.target.value)
                  }
                  aria-label="Filter by ward"
                >
                  <option value="all">
                    {filtersConfig?.ward?.placeholder || "All Wards"}
                  </option>
                  {wardOptions.map((ward) => (
                    <option key={ward.value} value={ward.value}>
                      {ward.label}
                    </option>
                  ))}
                </select>
              )}

              {filtersConfig?.status?.enabled !== false && (
                <select
                  className="ipd-patient-selection__filter"
                  value={selectedStatus}
                  onChange={(event) =>
                    setSelectedStatus(event.target.value)
                  }
                  aria-label="Filter by status"
                >
                  {statusOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              )}
            </>
          )}

          <button
            type="button"
            className="ipd-patient-selection__search-button"
            onClick={handleSearch}
          >
            <SearchOutlined />
            <span>
              {searchConfig?.button?.label || "Search"}
            </span>
          </button>

          <button
            type="button"
            className="ipd-patient-selection__reset-button"
            onClick={handleReset}
            title="Reset search and filters"
            aria-label="Reset search and filters"
          >
            <RefreshOutlined />
          </button>
        </div>

        <div className="ipd-patient-selection__table-heading">
          <div>
            <h2>Admitted Patients</h2>
            <p>Select a patient to continue with IPD billing.</p>
          </div>
          <span className="ipd-patient-selection__result-count">
            {filteredPatients.length} records
          </span>
        </div>

        <div className="ipd-patient-selection__table-wrapper">
          <div className="ipd-patient-selection__table-scroll">
            <table className="ipd-patient-selection__table">
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th
                      key={column.id || column.field}
                      scope="col"
                      style={{
                        width: column.width
                          ? `${column.width}px`
                          : undefined,
                        minWidth: column.width
                          ? `${column.width}px`
                          : undefined,
                        textAlign: column.align || "left",
                      }}
                    >
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {paginatedPatients.length === 0 ? (
                  <tr>
                    <td
                      colSpan={Math.max(columns.length, 1)}
                      className="ipd-patient-selection__empty"
                    >
                      <PersonSearchOutlined />
                      <strong>
                        {tableConfig?.emptyMessage ||
                          "No IPD patients found"}
                      </strong>
                      <span>
                        Try changing your search term or filters.
                      </span>
                    </td>
                  </tr>
                ) : (
                  paginatedPatients.map((patient, index) => (
                    <tr key={patient?.id || patient?.ipdNo}>
                      {columns.map((column) => {
                        const field = column?.field;
                        const value = getCellValue(
                          patient,
                          column,
                          index
                        );

                        if (
                          column?.type === "action" ||
                          field === "action"
                        ) {
                          return (
                            <td
                              key={column.id || field}
                              className="ipd-patient-selection__action-cell"
                            >
                              <button
                                type="button"
                                className="ipd-patient-selection__select-button"
                                onClick={() =>
                                  handlePatientSelect(patient)
                                }
                                aria-label={`Select ${patient?.patientName || "IPD patient"}`}
                              >
                                {tableConfig?.action?.label || "Select"}
                              </button>
                            </td>
                          );
                        }

                        if (field === "status") {
                          const statusClass = String(
                            patient?.status || "unknown"
                          )
                            .toLowerCase()
                            .replace(/[^a-z0-9-]/g, "-");

                          return (
                            <td key={column.id || field}>
                              <span
                                className={`ipd-patient-selection__status ipd-patient-selection__status--${statusClass}`}
                              >
                                <span className="ipd-patient-selection__status-dot" />
                                {getStatusLabel(patient?.status)}
                              </span>
                            </td>
                          );
                        }

                        return (
                          <td
                            key={column.id || field}
                            className={`ipd-patient-selection__cell--${field}`}
                          >
                            {value}
                          </td>
                        );
                      })}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {paginationConfig?.enabled !== false && (
          <div className="ipd-patient-selection__pagination">
            <Pagination
              page={page}
              rowsPerPage={rowsPerPage}
              totalRows={filteredPatients.length}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default IPDPatientSelection;