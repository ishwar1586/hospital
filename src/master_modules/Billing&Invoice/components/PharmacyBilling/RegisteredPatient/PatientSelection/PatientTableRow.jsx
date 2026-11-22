// src/features/Billing&Invoice/components/PharmacyBilling/RegisteredPatient/PatientSelection/PatientTableRow.jsx

import React from "react";
import PatientAction from "./PatientAction";

const PatientTableRow = ({
  patient = null,
  columns = [],
  serialNumber = 1,
  tableConfig = {},
  onSelect,
}) => {
  if (!patient) {
    return null;
  }

  const getCellValue = (column) => {
    const {
      field,
      type,
    } = column || {};

    if (field === "serialNumber") {
      return serialNumber;
    }

    if (field === "ageGender") {
      const age = patient?.age ?? "-";
      const gender = patient?.gender ?? "-";

      return `${age} / ${gender}`;
    }

    if (type === "date") {
      return patient?.[field] ?? "-";
    }

    return patient?.[field] ?? "-";
  };

  const renderCellContent = (column) => {
    const {
      field,
      type,
    } = column || {};

    if (type === "action" || field === "action") {
      return (
        <PatientAction
          patient={patient}
          config={tableConfig}
          onSelect={onSelect}
        />
      );
    }

    return (
      <span
        className={`patient-table__cell-value patient-table__cell-value--${field}`}
      >
        {getCellValue(column)}
      </span>
    );
  };

  return (
    <tr className="patient-table__row">
      {columns
        .filter((column) => column?.visible !== false)
        .map((column) => {
          const {
            id,
            field,
            align = "left",
            width,
          } = column;

          return (
            <td
              key={id || field}
              className={`
                patient-table__cell
                patient-table__cell--${field}
                patient-table__cell--align-${align}
              `}
              style={{
                width: width ? `${width}px` : undefined,
                minWidth: width ? `${width}px` : undefined,
              }}
            >
              {renderCellContent(column)}
            </td>
          );
        })}
    </tr>
  );
};

export default PatientTableRow;