
import React from "react";
import OPDStatusChip from "./OPDStatusChip";
import OPDVisitTypeChip from "./OPDVisitTypeChip";
import OPDTableActions from "./OPDTableActions";
import "./OPDTableRow.css";

const OPDTableRow = ({
  patient,
  columns,
  onPatientSelect,
  onPatientAction,
}) => {
  const renderCell = (column) => {
    switch (column.field) {
      case "patientName":
        return (
          <button
            type="button"
            className="opd-table-row__patient-link"
            onClick={() => onPatientSelect?.(patient)}
          >
            {patient.patientName || "—"}
          </button>
        );

      case "ageGender":
        return `${patient.age ?? "—"} / ${patient.gender || "—"}`;

      case "status":
        return <OPDStatusChip status={patient.status} />;

      case "visitType":
        return <OPDVisitTypeChip visitType={patient.visitType} />;

      case "actions":
        return (
          <OPDTableActions
            patient={patient}
            onAction={onPatientAction}
          />
        );

      default:
        return patient[column.field] ?? "—";
    }
  };

  return (
    <tr className="opd-table-row">
      {columns.map((column) => (
        <td
          key={column.id}
          className={
            column.align === "center"
              ? "opd-table-row__cell opd-table-row__cell--center"
              : "opd-table-row__cell"
          }
        >
          {renderCell(column)}
        </td>
      ))}
    </tr>
  );
};

export default OPDTableRow;
