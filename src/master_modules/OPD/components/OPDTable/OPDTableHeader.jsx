
import React from "react";
import "./OPDTableHeader.css";

const OPDTableHeader = ({ columns = [] }) => {
  return (
    <thead className="opd-table-header">
      <tr>
        {columns.map((column) => (
          <th
            key={column.id}
            scope="col"
            className={
              column.align === "center"
                ? "opd-table-header__cell opd-table-header__cell--center"
                : "opd-table-header__cell"
            }
            style={{ minWidth: column.minWidth }}
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default OPDTableHeader;
