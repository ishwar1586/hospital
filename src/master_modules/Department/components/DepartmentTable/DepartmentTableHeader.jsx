import React from "react";
import "./DepartmentTableHeader.css";

import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import UnfoldMoreOutlinedIcon from "@mui/icons-material/UnfoldMoreOutlined";

const DepartmentTableHeader = ({
  columns = [],
  sortConfig,
  onSort,
}) => {
  const renderSortIcon = (column) => {
    if (!column.sortable) return null;

    if (sortConfig?.key !== column.field) {
      return <UnfoldMoreOutlinedIcon />;
    }

    return sortConfig.direction === "asc" ? (
      <ArrowUpwardOutlinedIcon />
    ) : (
      <ArrowDownwardOutlinedIcon />
    );
  };

  return (
    <thead className="department-table-header">
      <tr>
        {columns.map((column) => (
          <th
            key={column.id}
            className={`department-table-header__cell department-table-header__cell--${column.id}`}
            style={{ minWidth: column.minWidth }}
          >
            {column.sortable ? (
              <button
                type="button"
                className="department-table-header__sort"
                onClick={() => onSort?.(column.field)}
              >
                <span>{column.label}</span>
                <span className="department-table-header__sort-icon">
                  {renderSortIcon(column)}
                </span>
              </button>
            ) : (
              <span>{column.label}</span>
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default DepartmentTableHeader;