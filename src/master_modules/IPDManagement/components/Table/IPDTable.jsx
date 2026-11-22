import React, { useEffect, useMemo } from "react";

import IPDTableHeader from "./IPDTableHeader";
import IPDTableRow from "./IPDTableRow";

import { IPD_ADMITTED_TABLE_COLUMNS } from "../../config/ipdConfig";
import { ipdPatientsMock } from "../../mock/ipd.mock";

import useIPDPagination from "../../hooks/useIPDPagination";

import Pagination from "@/master_shared/components/Pagination/Pagination";

import "./IPDTable.css";

const IPDTable = ({
  patients = ipdPatientsMock,

  onViewProfile,
  onEditAdmission,
  onTransferPatient,
  onDischargePatient,
  onCancelAdmission,
}) => {
  /* ==========================================================
     TABLE COLUMNS
     ========================================================== */

  const columns = useMemo(() => {
    if (!Array.isArray(IPD_ADMITTED_TABLE_COLUMNS)) {
      return [];
    }

    return IPD_ADMITTED_TABLE_COLUMNS;
  }, []);

  /* ==========================================================
     SAFE TABLE DATA
     ========================================================== */

  const tableData = useMemo(() => {
    if (!Array.isArray(patients)) {
      return [];
    }

    return patients;
  }, [patients]);

  /* ==========================================================
     PAGINATION
     ========================================================== */

  const {
    page,
    rowsPerPage,
    rowsPerPageOptions,
    totalRecords,
    paginatedData,
    handleChangePage,
    handleChangeRowsPerPage,
    resetPage,
  } = useIPDPagination(tableData);

  /*
   * Whenever filtered/table data changes,
   * start pagination again from first page.
   */

  useEffect(() => {
    resetPage();
  }, [tableData, resetPage]);

  /* ==========================================================
     ACTION HANDLERS
     ========================================================== */

  const actionHandlers = useMemo(
    () => ({
      VIEW_PROFILE: onViewProfile,
      EDIT_ADMISSION: onEditAdmission,
      TRANSFER_PATIENT: onTransferPatient,
      DISCHARGE_PATIENT: onDischargePatient,
      CANCEL_ADMISSION: onCancelAdmission,
    }),
    [
      onViewProfile,
      onEditAdmission,
      onTransferPatient,
      onDischargePatient,
      onCancelAdmission,
    ]
  );

  /* ==========================================================
     RENDER
     ========================================================== */

  return (
    <section className="ipd-table">

      {/* ======================================================
          TABLE WRAPPER
         ====================================================== */}

      <div className="ipd-table__wrapper">
        <table className="ipd-table__table">

          {/* ====================================================
              TABLE HEADER
             ==================================================== */}

          <IPDTableHeader columns={columns} />

          {/* ====================================================
              TABLE BODY
             ==================================================== */}

          <tbody className="ipd-table__tbody">
            {paginatedData.length > 0 ? (
              paginatedData.map((patient) => (
                <IPDTableRow
                  key={patient.id}
                  patient={patient}
                  columns={columns}
                  actionHandlers={actionHandlers}
                />
              ))
            ) : (
              <tr className="ipd-table__empty-row">
                <td
                  colSpan={columns.length || 1}
                  className="ipd-table__empty-cell"
                >
                  No admitted patients found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ========================================================
          REUSABLE PAGINATION
         ======================================================== */}

      {totalRecords > 0 && (
        <div className="ipd-table__pagination">
          <Pagination
            page={page}
            rowsPerPage={rowsPerPage}
            totalRows={totalRecords}
            rowsPerPageOptions={rowsPerPageOptions}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      )}
    </section>
  );
};

export default IPDTable;