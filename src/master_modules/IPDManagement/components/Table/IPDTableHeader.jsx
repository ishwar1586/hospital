import React from "react";

import "./IPDTableHeader.css";

const IPDTableHeader = ({ columns = [] }) => {
  const safeColumns = Array.isArray(columns)
    ? columns
    : [];

  return (
    <thead className="ipd-table__thead">
      <tr>
        {safeColumns.map((column) => {
          const columnKey =
            column?.id ?? column?.field;

          if (!columnKey) {
            return null;
          }

          return (
            <th
              key={columnKey}
              scope="col"
              className={`ipd-table__th ipd-table__th--${columnKey}`}
            >
              {column?.label ?? ""}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default IPDTableHeader;