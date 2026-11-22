
import React from "react";
import RoomAllotmentActions from "./RoomAllotmentActions";

const RoomAllotmentTableRow = ({ row, columns, onAction }) => {
  const formatDate = (date) => {
    if (!date) return "—";

    return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const renderCell = (column) => {
    switch (column.id) {
      case "patient":
        return (
          <div className="room-allotment-table__patient">
            <span className="room-allotment-table__patient-name">
              {row.patientName}
            </span>
            <span className="room-allotment-table__patient-uhid">
              {row.uhid}
            </span>
          </div>
        );

      case "allotmentDate":
        return formatDate(row[column.field]);

      case "status":
        return (
          <span
            className={`room-allotment-table__status room-allotment-table__status--${row.status}`}
          >
            {row.status}
          </span>
        );

      case "actions":
        return (
          <RoomAllotmentActions
            row={row}
            onAction={onAction}
          />
        );

      default:
        return row[column.field] || "—";
    }
  };

  return (
    <tr className="room-allotment-table__row">
      {columns.map((column) => (
        <td
          key={column.id}
          style={{ textAlign: column.align || "left" }}
        >
          {renderCell(column)}
        </td>
      ))}
    </tr>
  );
};

export default RoomAllotmentTableRow;
