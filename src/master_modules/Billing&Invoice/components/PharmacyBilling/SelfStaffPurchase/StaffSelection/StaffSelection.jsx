import React, { useMemo, useState } from "react";
import {
  ArrowBackOutlined,
  ArrowForwardOutlined,
  SearchOutlined,
  PersonOutlineOutlined,
  CheckCircleOutlined,
} from "@mui/icons-material";

import selfStaffPurchaseConfig from "../../../../config/selfStaffPurchase.config";
import selfStaffPurchaseMock from "../../../../mock/selfStaffPurchase.mock";

import "./StaffSelection.css";

const StaffSelection = ({
  config = selfStaffPurchaseConfig,
  mockData = selfStaffPurchaseMock,
  selectedStaff = null,
  onBack,
  onContinue,
  onClose,
}) => {
  const staffSelectionConfig = config?.staffSelection || {};
  const staffList = mockData?.staffList || [];

  const [searchTerm, setSearchTerm] = useState(
    mockData?.filters?.search || ""
  );

  const [statusFilter, setStatusFilter] = useState(
    mockData?.filters?.status || "all"
  );

  const [currentPage, setCurrentPage] = useState(
    mockData?.pagination?.page || 0
  );

  const [rowsPerPage, setRowsPerPage] = useState(
    mockData?.pagination?.rowsPerPage || 10
  );

  const [selectedStaffData, setSelectedStaffData] = useState(
    selectedStaff || mockData?.selectedStaff || null
  );

  /*
   * ---------------------------------------------------------
   * SEARCH + STATUS FILTER
   * ---------------------------------------------------------
   */

  const filteredStaff = useMemo(() => {
    const search = String(searchTerm || "")
      .trim()
      .toLowerCase();

    return staffList.filter((staff) => {
      const matchesSearch =
        !search ||
        staff?.staffName?.toLowerCase().includes(search) ||
        staff?.employeeId?.toLowerCase().includes(search) ||
        staff?.mobile?.toLowerCase().includes(search) ||
        staff?.department?.toLowerCase().includes(search) ||
        staff?.designation?.toLowerCase().includes(search);

      const matchesStatus =
        statusFilter === "all" ||
        String(staff?.status || "").toLowerCase() ===
          String(statusFilter).toLowerCase();

      return matchesSearch && matchesStatus;
    });
  }, [staffList, searchTerm, statusFilter]);

  /*
   * ---------------------------------------------------------
   * PAGINATION
   * ---------------------------------------------------------
   */

  const totalPages = Math.ceil(
    filteredStaff.length / rowsPerPage
  );

  const safePage =
    totalPages > 0
      ? Math.min(currentPage, totalPages - 1)
      : 0;

  const paginatedStaff = useMemo(() => {
    const startIndex = safePage * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    return filteredStaff.slice(startIndex, endIndex);
  }, [filteredStaff, safePage, rowsPerPage]);

  /*
   * ---------------------------------------------------------
   * SEARCH HANDLER
   * ---------------------------------------------------------
   */

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(0);
  };

  /*
   * ---------------------------------------------------------
   * STATUS HANDLER
   * ---------------------------------------------------------
   */

  const handleStatusChange = (event) => {
    setStatusFilter(event.target.value);
    setCurrentPage(0);
  };

  /*
   * ---------------------------------------------------------
   * STAFF SELECT
   * ---------------------------------------------------------
   */

  const handleStaffSelect = (staff) => {
    setSelectedStaffData(staff);
  };

  /*
   * ---------------------------------------------------------
   * CONTINUE
   * ---------------------------------------------------------
   */

  const handleContinue = () => {
    if (!selectedStaffData) {
      return;
    }

    onContinue?.(selectedStaffData);
  };

  /*
   * ---------------------------------------------------------
   * PAGINATION
   * ---------------------------------------------------------
   */

  const handlePreviousPage = () => {
    setCurrentPage((previousPage) =>
      Math.max(previousPage - 1, 0)
    );
  };

  const handleNextPage = () => {
    setCurrentPage((previousPage) =>
      Math.min(
        previousPage + 1,
        Math.max(totalPages - 1, 0)
      )
    );
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(0);
  };

  /*
   * ---------------------------------------------------------
   * STATUS LABEL
   * ---------------------------------------------------------
   */

  const getStatusLabel = (status) => {
    const statusOption = staffSelectionConfig?.statusOptions?.find(
      (option) =>
        String(option?.value).toLowerCase() ===
        String(status).toLowerCase()
    );

    return statusOption?.label || status || "-";
  };

  /*
   * ---------------------------------------------------------
   * COLUMN VALUE
   * ---------------------------------------------------------
   */

  const getColumnValue = (staff, column) => {
    if (!staff || !column) {
      return "-";
    }

    if (column.type === "status") {
      return getStatusLabel(staff?.[column.field]);
    }

    return staff?.[column.field] ?? "-";
  };

  /*
   * ---------------------------------------------------------
   * RENDER
   * ---------------------------------------------------------
   */

  return (
    <section className="staff-selection">
      {/* --------------------------------------------------
          HEADER
      -------------------------------------------------- */}

      <div className="staff-selection__header">
        <div className="staff-selection__header-left">
          <div className="staff-selection__icon">
            <PersonOutlineOutlined />
          </div>

          <div>
            <h2 className="staff-selection__title">
              {staffSelectionConfig?.title ||
                "Select Staff"}
            </h2>

            <p className="staff-selection__subtitle">
              {config?.page?.subtitle ||
                "Select staff member for pharmacy purchase"}
            </p>
          </div>
        </div>

        {selectedStaffData && (
          <div className="staff-selection__selected-badge">
            <CheckCircleOutlined />

            <span>
              {selectedStaffData?.staffName}
            </span>
          </div>
        )}
      </div>

      {/* --------------------------------------------------
          TOOLBAR
      -------------------------------------------------- */}

      <div className="staff-selection__toolbar">
        <div className="staff-selection__search">
          <SearchOutlined className="staff-selection__search-icon" />

          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder={
              staffSelectionConfig?.searchPlaceholder ||
              "Search staff..."
            }
          />
        </div>

        <div className="staff-selection__filter">
          <select
            value={statusFilter}
            onChange={handleStatusChange}
          >
            <option value="all">All Status</option>

            {(
              staffSelectionConfig?.statusOptions || []
            ).map((option) => (
              <option
                key={option?.id || option?.value}
                value={option?.value}
              >
                {option?.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* --------------------------------------------------
          TABLE
      -------------------------------------------------- */}

      <div className="staff-selection__table-wrapper">
        <table className="staff-selection__table">
          <thead>
            <tr>
              {(
                staffSelectionConfig?.columns || []
              ).map((column) => (
                <th key={column?.id}>
                  {column?.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {paginatedStaff.length > 0 ? (
              paginatedStaff.map((staff) => {
                const isSelected =
                  selectedStaffData?.id === staff?.id;

                return (
                  <tr
                    key={staff?.id}
                    className={
                      isSelected
                        ? "staff-selection__row staff-selection__row--selected"
                        : "staff-selection__row"
                    }
                  >
                    {(
                      staffSelectionConfig?.columns || []
                    ).map((column) => {
                      if (
                        column?.type === "action"
                      ) {
                        return (
                          <td
                            key={column?.id}
                            className="staff-selection__action-cell"
                          >
                            <button
                              type="button"
                              className={
                                isSelected
                                  ? "staff-selection__select-btn staff-selection__select-btn--selected"
                                  : "staff-selection__select-btn"
                              }
                              onClick={() =>
                                handleStaffSelect(
                                  staff
                                )
                              }
                            >
                              {isSelected
                                ? "Selected"
                                : staffSelectionConfig
                                    ?.action
                                    ?.selectLabel ||
                                  "Select"}
                            </button>
                          </td>
                        );
                      }

                      if (
                        column?.type === "status"
                      ) {
                        const status =
                          String(
                            staff?.[
                              column?.field
                            ] || ""
                          ).toLowerCase();

                        return (
                          <td key={column?.id}>
                            <span
                              className={`staff-selection__status staff-selection__status--${status}`}
                            >
                              {getColumnValue(
                                staff,
                                column
                              )}
                            </span>
                          </td>
                        );
                      }

                      return (
                        <td key={column?.id}>
                          {getColumnValue(
                            staff,
                            column
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan={
                    staffSelectionConfig?.columns
                      ?.length || 1
                  }
                  className="staff-selection__empty"
                >
                  <PersonOutlineOutlined />

                  <span>
                    No staff members found
                  </span>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* --------------------------------------------------
          PAGINATION
      -------------------------------------------------- */}

      {staffSelectionConfig?.pagination
        ?.enabled && (
        <div className="staff-selection__pagination">
          <div className="staff-selection__pagination-info">
            Showing{" "}
            {filteredStaff.length > 0
              ? safePage * rowsPerPage + 1
              : 0}{" "}
            -{" "}
            {Math.min(
              (safePage + 1) * rowsPerPage,
              filteredStaff.length
            )}{" "}
            of {filteredStaff.length}
          </div>

          <div className="staff-selection__pagination-controls">
            <select
              value={rowsPerPage}
              onChange={handleRowsPerPageChange}
            >
              {(
                staffSelectionConfig?.pagination
                  ?.rowsPerPageOptions || []
              ).map((option) => (
                <option
                  key={option}
                  value={option}
                >
                  {option} / page
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={handlePreviousPage}
              disabled={safePage === 0}
              aria-label="Previous page"
            >
              ‹
            </button>

            <span>
              {totalPages > 0
                ? safePage + 1
                : 0}{" "}
              / {totalPages}
            </span>

            <button
              type="button"
              onClick={handleNextPage}
              disabled={
                totalPages === 0 ||
                safePage >= totalPages - 1
              }
              aria-label="Next page"
            >
              ›
            </button>
          </div>
        </div>
      )}

      {/* --------------------------------------------------
          FOOTER
      -------------------------------------------------- */}

      <div className="staff-selection__footer">
        <button
          type="button"
          className="staff-selection__back-btn"
          onClick={onBack}
        >
          <ArrowBackOutlined />

          <span>
            {config?.footer?.backLabel || "Back"}
          </span>
        </button>

        <div className="staff-selection__footer-right">
          <button
            type="button"
            className="staff-selection__cancel-btn"
            onClick={onClose}
          >
            {config?.footer?.cancelLabel ||
              "Cancel"}
          </button>

          <button
            type="button"
            className="staff-selection__continue-btn"
            disabled={!selectedStaffData}
            onClick={handleContinue}
          >
            <span>
              {config?.footer?.continueLabel ||
                "Continue"}
            </span>

            <ArrowForwardOutlined />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StaffSelection;