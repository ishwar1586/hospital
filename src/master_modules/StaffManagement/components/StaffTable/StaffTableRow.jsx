
import React from "react";
import {
  Avatar,
  Box,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";

import StaffDepartmentBadge from "./StaffDepartmentBadge";
import StaffStatusBadge from "./StaffStatusBadge";
import StaffTableActions from "./StaffTableActions";

const StaffTableRow = ({ staff, columns, onAction }) => {
  const renderCell = (column) => {
    const value = column.field
      ? staff[column.field]
      : undefined;

    switch (column.type) {
      case "avatar":
        return (
          <Avatar
            src={staff.photo || undefined}
            alt={staff.name || "Staff member"}
            className="staff-table__avatar"
          >
            {staff.name
              ?.split(/\s+/)
              .filter(Boolean)
              .slice(0, 2)
              .map((part) => part[0])
              .join("")
              .toUpperCase()}
          </Avatar>
        );

      case "staffName":
        return (
          <Box className="staff-table__name-cell">
            <Typography className="staff-table__name">
              {staff.name || "Unnamed Staff"}
            </Typography>
            <Typography className="staff-table__secondary">
              {staff.gender || "—"}
            </Typography>
          </Box>
        );

      case "departmentBadge":
        return <StaffDepartmentBadge department={value} />;

      case "statusBadge":
        return <StaffStatusBadge status={value} />;

      case "contact":
        return (
          <Box className="staff-table__contact-cell">
            <Typography>{staff.contact?.phone || "—"}</Typography>
            <Typography className="staff-table__secondary">
              {staff.contact?.email || "—"}
            </Typography>
          </Box>
        );

      case "actions":
        return (
          <StaffTableActions
            staff={staff}
            onAction={onAction}
          />
        );

      default:
        return value || "—";
    }
  };

  return (
    <TableRow hover className="staff-table__row">
      {columns.map((column) => (
        <TableCell
          key={column.id}
          align={column.align || "left"}
          style={{
            width: column.width,
            minWidth: column.minWidth,
          }}
        >
          {renderCell(column)}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default StaffTableRow;