import React from "react";

import PatientDetailsCell from "./PatientDetailsCell";
import DoctorCell from "./DoctorCell";
import WardRoomBedCell from "./WardRoomBedCell";
import AdmissionDateCell from "./AdmissionDateCell";
import IPDStatusBadge from "./IPDStatusBadge";
import IPDActionMenu from "./IPDActionMenu";

import "./IPDTableRow.css";

const IPDTableRow = ({
  patient,
  columns = [],
  actionHandlers = {},
}) => {
  if (!patient) {
    return null;
  }

  const renderCell = (column) => {
    const field = column?.field ?? column?.id;
    const type = column?.type;

    switch (type) {
      case "text": {
        const value = patient?.[field];

        return (
          <span>
            {typeof value === "object"
              ? "—"
              : value ?? "—"}
          </span>
        );
      }

      case "patient":
        return (
          <PatientDetailsCell
            patient={patient?.patient}
          />
        );

      case "ageGender":
        return (
          <div className="ipd-table-row__age-gender">
            <span>
              {patient?.patient?.age ?? "—"} Y
            </span>

            <span>/</span>

            <span>
              {patient?.patient?.gender ?? "—"}
            </span>
          </div>
        );

      case "wardRoomBed":
        return (
          <WardRoomBedCell
            bedAllocation={
              patient?.bedAllocation
            }
          />
        );

      case "doctor":
        return (
          <DoctorCell
            doctor={patient?.doctor}
          />
        );

      case "dateTime":
        return (
          <AdmissionDateCell
            admissionDate={
              patient?.admissionDate
            }
            admissionTime={
              patient?.admissionTime
            }
          />
        );

      case "status":
        return (
          <IPDStatusBadge
            status={patient?.status}
          />
        );

      case "actions":
        return (
          <IPDActionMenu
            patient={patient}
            actionHandlers={actionHandlers}
          />
        );

      default:
        return <span>—</span>;
    }
  };

  return (
    <tr className="ipd-table-row">
      {columns.map((column) => {
        const columnKey =
          column?.id ?? column?.field;

        if (!columnKey) {
          return null;
        }

        return (
          <td
            key={columnKey}
            className={`ipd-table-row__cell ipd-table-row__cell--${columnKey}`}
          >
            {renderCell(column)}
          </td>
        );
      })}
    </tr>
  );
};

export default IPDTableRow;