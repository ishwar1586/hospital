
import React from "react";
import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
} from "@mui/material";

import { staffColumnsConfig } from "../../config/staffColumns.config";

const StaffTableHeader = ({ sortConfig, onSort }) => {
  const columns = [...staffColumnsConfig]
    .filter((column) => column.visible !== false)
    .sort((a, b) => a.order - b.order);

  return (
    <TableHead className="staff-table__head">
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.id}
            align={column.align || "left"}
            style={{
              width: column.width,
              minWidth: column.minWidth,
            }}
          >
            {column.sortable ? (
              <TableSortLabel
                active={sortConfig.key === column.field}
                direction={
                  sortConfig.key === column.field
                    ? sortConfig.direction
                    : "asc"
                }
                onClick={() => onSort(column.field)}
              >
                {column.label}
              </TableSortLabel>
            ) : (
              column.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default StaffTableHeader;
