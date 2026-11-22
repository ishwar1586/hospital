// src/features/Billing&Invoice/components/PharmacyBilling/RegisteredPatient/PatientSelection/PatientTable.jsx

import React from "react";
import PatientTableRow from "./PatientTableRow";

const PatientTable = ({
  patients = [],
  config = {},
  page = 1,
  rowsPerPage = 5,
  loading = false,
  onSelect,
}) => {
  const tableConfig = config?.table || {};

  const columns = Array.isArray(tableConfig?.columns)
    ? tableConfig.columns.filter(
        (column) => column?.visible !== false
      )
    : [];

  const visiblePatients = Array.isArray(patients)
    ? patients
    : [];

  const getSerialNumber = (index) => {
    return (page - 1) * rowsPerPage + index + 1;
  };

  const renderLoadingState = () => {
    const columnCount = columns.length || 1;

    return (
      <tbody>
        <tr className="patient-table__state-row">
          <td
            colSpan={columnCount}
            className="patient-table__state-cell"
          >
            <div className="patient-table__loading">
              <span className="patient-table__loading-spinner" />
              <span>
                {tableConfig?.loadingMessage ||
                  "Loading patients..."}
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    );
  };

  const renderEmptyState = () => {
    const columnCount = columns.length || 1;

    return (
      <tbody>
        <tr className="patient-table__state-row">
          <td
            colSpan={columnCount}
            className="patient-table__state-cell"
          >
            <div className="patient-table__empty">
              <span className="patient-table__empty-title">
                {tableConfig?.emptyMessage ||
                  "No patients found"}
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    );
  };

  return (
    <div className="patient-table-wrapper">
      <div className="patient-table-scroll">
        <table className="patient-table">
          <thead className="patient-table__head">
            <tr className="patient-table__header-row">
              {columns.map((column) => {
                const {
                  id,
                  field,
                  label,
                  align = "left",
                  width,
                  sortable = false,
                } = column;

                return (
                  <th
                    key={id || field}
                    className={`
                      patient-table__header-cell
                      patient-table__header-cell--${field}
                      patient-table__header-cell--align-${align}
                      ${sortable
                        ? "patient-table__header-cell--sortable"
                        : ""}
                    `}
                    style={{
                      width: width
                        ? `${width}px`
                        : undefined,
                      minWidth: width
                        ? `${width}px`
                        : undefined,
                    }}
                    scope="col"
                  >
                    {label}
                  </th>
                );
              })}
            </tr>
          </thead>

          {loading
            ? renderLoadingState()
            : visiblePatients.length === 0
            ? renderEmptyState()
            : (
              <tbody className="patient-table__body">
                {visiblePatients.map(
                  (patient, index) => (
                    <PatientTableRow
                      key={
                        patient?.id ||
                        patient?.uhid ||
                        index
                      }
                      patient={patient}
                      columns={columns}
                      serialNumber={getSerialNumber(index)}
                      tableConfig={tableConfig}
                      onSelect={onSelect}
                    />
                  )
                )}
              </tbody>
            )}
        </table>
      </div>
    </div>
  );
};

export default PatientTable;