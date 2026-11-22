import React from "react";

import RadiologyStatusBadge from "./RadiologyStatusBadge";
import RadiologyModalityBadge from "./RadiologyModalityBadge";
import RadiologyTableActions from "./RadiologyTableActions";

const formatDate = (value) => {
  if (!value) return "—";

  const date = new Date(`${String(value).slice(0, 10)}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
};

const RadiologyTableRow = ({
  order,
  columns = [],
  onViewDetails,
  onEditOrder,
}) => {
  const getValue = (field) => {
    const fieldMap = {
      patient: order.patientName,
      testName: order.testName ?? order.test,
      orderDate: order.orderDate ?? order.date,
    };

    return fieldMap[field] ?? order[field] ?? "—";
  };

  return (
    <tr className="radiology-table__row">
      {columns.map((column) => {
        const field = column.field ?? column.id;

        if (column.type === "actions" || field === "actions") {
          return (
            <td
              key={column.id ?? field}
              className="radiology-table__cell radiology-table__cell--actions"
            >
              <RadiologyTableActions
                order={order}
                onViewDetails={onViewDetails}
                onEditOrder={onEditOrder}
              />
            </td>
          );
        }

        if (field === "status") {
          return (
            <td key={column.id ?? field} className="radiology-table__cell">
              <RadiologyStatusBadge status={order.status} />
            </td>
          );
        }

        if (field === "modality") {
          return (
            <td key={column.id ?? field} className="radiology-table__cell">
              <RadiologyModalityBadge modality={order.modality} />
            </td>
          );
        }

        if (field === "patient" || field === "patientName") {
          return (
            <td key={column.id ?? field} className="radiology-table__cell">
              <div className="radiology-table__patient">
                <span className="radiology-table__patient-name">
                  {order.patientName ?? "—"}
                </span>
                <span className="radiology-table__patient-id">
                  {order.patientId ?? "—"}
                </span>
              </div>
            </td>
          );
        }

        if (field === "orderDate" || field === "date") {
          return (
            <td key={column.id ?? field} className="radiology-table__cell">
              {formatDate(getValue(field))}
            </td>
          );
        }

        return (
          <td key={column.id ?? field} className="radiology-table__cell">
            {getValue(field)}
          </td>
        );
      })}
    </tr>
  );
};

export default RadiologyTableRow;