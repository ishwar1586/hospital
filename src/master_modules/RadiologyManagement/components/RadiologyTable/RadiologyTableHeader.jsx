import React from "react";

const RadiologyTableHeader = ({ columns = [] }) => {
  return (
    <thead className="radiology-table__head">
      <tr>
        {columns.map((column) => (
          <th
            key={column.id ?? column.field ?? column.label}
            className="radiology-table__heading"
            scope="col"
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default RadiologyTableHeader;