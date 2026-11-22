
import React, { useMemo, useState, useEffect } from "react";
import "./DepartmentTable.css";

// Table Components
import DepartmentTableHeader from "./DepartmentTableHeader";
import DepartmentTableRow from "./DepartmentTableRow";

// Config
import { departmentColumnsConfig } from "../../config/departmentColumns.config";

// Mock Data
import { departmentsMock } from "../../mock/departments.mock";

// Reusable Pagination
import Pagination from "@/master_shared/components/Pagination/Pagination.jsx";

const DepartmentTable = ({
  data = departmentsMock,
  filters = {},
  onAction,
}) => {
  // Sorting State
  const [sortConfig, setSortConfig] = useState({
    key: "departmentName",
    direction: "asc",
  });

  // Pagination State (1-based)
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Sorting Handler
  const handleSort = (field) => {
    setSortConfig((previous) => ({
      key: field,
      direction:
        previous.key === field && previous.direction === "asc"
          ? "desc"
          : "asc",
    }));
  };

  // Filter and Sort Departments
  const filteredDepartments = useMemo(() => {
    const departmentList = Array.isArray(data) ? data : [];

    const searchValue = String(filters.search || "")
      .trim()
      .toLowerCase();

    const filteredData = departmentList.filter((department) => {
      const matchesStatus =
        !filters.status ||
        String(department.status || "").toLowerCase() ===
          String(filters.status).toLowerCase();

      const matchesType =
        !filters.type ||
        String(department.type || "").toLowerCase() ===
          String(filters.type).toLowerCase();

      const searchableValues = [
        department.departmentName,
        department.code,
        department.headDoctor,
        department.id,
      ];

      const matchesSearch =
        !searchValue ||
        searchableValues.some((value) =>
          String(value || "").toLowerCase().includes(searchValue)
        );

      return matchesStatus && matchesType && matchesSearch;
    });

    return [...filteredData].sort((first, second) => {
      const firstValue = first[sortConfig.key] ?? "";
      const secondValue = second[sortConfig.key] ?? "";

      let comparison;

      if (
        typeof firstValue === "number" &&
        typeof secondValue === "number"
      ) {
        comparison = firstValue - secondValue;
      } else {
        comparison = String(firstValue).localeCompare(
          String(secondValue),
          undefined,
          {
            numeric: true,
            sensitivity: "base",
          }
        );
      }

      return sortConfig.direction === "asc"
        ? comparison
        : -comparison;
    });
  }, [data, filters, sortConfig]);

  // Reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [filters.status, filters.type, filters.search]);

  // Pagination Handlers
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    const newRowsPerPage = Number(event.target.value);

    setRowsPerPage(newRowsPerPage);
    setPage(1);
  };

  // Pagination Calculations
  const totalDepartments = filteredDepartments.length;

  const startIndex = (page - 1) * rowsPerPage;

  const paginatedDepartments = filteredDepartments.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  // Prevent invalid page when data count decreases
  const totalPages = Math.max(
    1,
    Math.ceil(totalDepartments / rowsPerPage)
  );

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  return (
    <div className="department-table">

      {/* Table Scroll Container */}
      <div className="department-table__scroll">
        <table className="department-table__main">

          {/* Table Header */}
          <DepartmentTableHeader
            columns={departmentColumnsConfig}
            sortConfig={sortConfig}
            onSort={handleSort}
          />

          {/* Table Body */}
          <tbody>
            {paginatedDepartments.length > 0 ? (
              paginatedDepartments.map((department) => (
                <DepartmentTableRow
                  key={department.id}
                  department={department}
                  onAction={onAction}
                />
              ))
            ) : (
              <tr>
                <td
                  colSpan={departmentColumnsConfig.length}
                  className="department-table__empty-cell"
                >
                  <div className="department-table__empty">
                    <span className="department-table__empty-title">
                      No departments found
                    </span>

                    <span className="department-table__empty-description">
                      Try changing your search or filter criteria.
                    </span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>

      {/* Table Footer */}
      <div className="department-table__footer">

        <span className="department-table__result-count">
          Showing{" "}
          <strong>
            {totalDepartments === 0 ? 0 : startIndex + 1}
          </strong>
          {" "}to{" "}
          <strong>
            {Math.min(startIndex + rowsPerPage, totalDepartments)}
          </strong>
          {" "}of{" "}
          <strong>{totalDepartments}</strong>
          {" "}departments
        </span>

        {/* Reusable Pagination */}
        <div className="department-table__pagination">
          <Pagination
            page={page}
            rowsPerPage={rowsPerPage}
            totalRows={totalDepartments}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowsPerPageChange}
          />
        </div>

      </div>
    </div>
  );
};

export default DepartmentTable;
