
import React from "react";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const RoomAllotmentTableHeader = ({
  columns,
  sortConfig,
  onSort,
}) => {
  return (
    <thead className="room-allotment-table__head">
      <tr>
        {columns.map((column) => (
          <th
            key={column.id}
            style={{
              minWidth: column.minWidth,
              textAlign: column.align || "left",
            }}
            onClick={() =>
              column.sortable && onSort?.(column.field)
            }
            className={
              column.sortable
                ? "room-allotment-table__sortable"
                : ""
            }
          >
            <span className="room-allotment-table__heading">
              {column.label}

              {column.sortable && (
                <span className="room-allotment-table__sort-icon">
                  {sortConfig.field === column.field ? (
                    sortConfig.direction === "asc" ? (
                      <KeyboardArrowUpOutlinedIcon />
                    ) : (
                      <KeyboardArrowDownOutlinedIcon />
                    )
                  ) : (
                    <KeyboardArrowDownOutlinedIcon />
                  )}
                </span>
              )}
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default RoomAllotmentTableHeader;
