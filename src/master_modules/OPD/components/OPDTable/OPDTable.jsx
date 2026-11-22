
import React, { useEffect, useMemo, useState } from "react";
import "./OPDTable.css";

import OPDTableHeader from "./OPDTableHeader";
import OPDTableRow from "./OPDTableRow";

import Pagination from "@/master_shared/components/Pagination/Pagination.jsx";

import {
  opdTableColumnsConfig,
  opdTableSettings,
} from "../../config/opdTableColumns.config";

import { opdTableMock } from "../../mock/opdTable.mock";

const normalize = (value) =>
  String(value ?? "").trim().toLowerCase();

const OPDTable = ({
  data,
  columns = opdTableColumnsConfig,
  title = opdTableSettings.title,
  subtitle = opdTableSettings.subtitle,
  selectedDepartmentId = "all",
  filters = {},
  onPatientSelect,
  onPatientAction,
}) => {
  // Empty array se bhi fallback mock records use honge.
  const sourceData =
    Array.isArray(data) && data.length > 0 ? data : opdTableMock;

  const safeFilters = {
    appointmentDate: "",
    doctorId: "all",
    visitType: "all",
    status: "all",
    search: "",
    ...filters,
  };

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(
    opdTableSettings.defaultRowsPerPage || 10
  );

  const filteredData = useMemo(() => {
    const searchTerm = normalize(safeFilters.search);
    const departmentId = normalize(selectedDepartmentId || "all");

    return sourceData.filter((patient) => {
      if (!patient) return false;

      const matchesDepartment =
        !departmentId ||
        departmentId === "all" ||
        normalize(patient.departmentId) === departmentId;

      const matchesDate =
        !safeFilters.appointmentDate ||
        patient.appointmentDate === safeFilters.appointmentDate;

      const doctorId = normalize(safeFilters.doctorId);
      const matchesDoctor =
        !doctorId ||
        doctorId === "all" ||
        normalize(patient.doctorId) === doctorId;

      const visitType = normalize(safeFilters.visitType);
      const matchesVisitType =
        !visitType ||
        visitType === "all" ||
        normalize(patient.visitType) === visitType;

      const status = normalize(safeFilters.status);
      const matchesStatus =
        !status ||
        status === "all" ||
        normalize(patient.status) === status;

      const searchableText = [
        patient.patientName,
        patient.uhid,
        patient.mobile,
        patient.tokenNo,
        patient.doctor,
        patient.department,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !searchTerm || searchableText.includes(searchTerm);

      return (
        matchesDepartment &&
        matchesDate &&
        matchesDoctor &&
        matchesVisitType &&
        matchesStatus &&
        matchesSearch
      );
    });
  }, [
    sourceData,
    selectedDepartmentId,
    safeFilters.appointmentDate,
    safeFilters.doctorId,
    safeFilters.visitType,
    safeFilters.status,
    safeFilters.search,
  ]);

  const totalRows = filteredData.length;
  const totalPages = Math.max(1, Math.ceil(totalRows / rowsPerPage));
  const safePage = Math.min(page, totalPages);

  useEffect(() => {
    setPage(1);
  }, [
    selectedDepartmentId,
    safeFilters.appointmentDate,
    safeFilters.doctorId,
    safeFilters.visitType,
    safeFilters.status,
    safeFilters.search,
  ]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const paginatedData = useMemo(() => {
    const startIndex = (safePage - 1) * rowsPerPage;
    return filteredData.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredData, safePage, rowsPerPage]);

  const handlePageChange = (_event, nextPage) => {
    setPage(Math.max(1, Number(nextPage) || 1));
  };

  const handleRowsPerPageChange = (event) => {
    const nextRowsPerPage = Number(event.target.value);

    if (!Number.isFinite(nextRowsPerPage) || nextRowsPerPage <= 0) {
      return;
    }

    setRowsPerPage(nextRowsPerPage);
    setPage(1);
  };

  return (
    <section className="opd-table-section">
      <div className="opd-table-section__header">
        <div className="opd-table-section__heading">
          <h2 className="opd-table-section__title">{title}</h2>

          {subtitle && (
            <p className="opd-table-section__subtitle">{subtitle}</p>
          )}
        </div>

        <span className="opd-table-section__count">
          {totalRows} {totalRows === 1 ? "patient" : "patients"}
        </span>
      </div>

      <div className="opd-table__scroll-container">
        <table className="opd-table">
          <OPDTableHeader columns={columns} />

          <tbody className="opd-table__body">
            {paginatedData.length > 0 ? (
              paginatedData.map((patient) => (
                <OPDTableRow
                  key={patient.id}
                  patient={patient}
                  columns={columns}
                  onPatientSelect={onPatientSelect}
                  onPatientAction={onPatientAction}
                />
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="opd-table__empty-cell"
                >
                  <div className="opd-table__empty-state">
                    <h3>{opdTableSettings.emptyTitle}</h3>
                    <p>{opdTableSettings.emptyDescription}</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="opd-table__pagination">
        <Pagination
          page={safePage}
          rowsPerPage={rowsPerPage}
          totalRows={totalRows}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </div>
    </section>
  );
};

export default OPDTable;
