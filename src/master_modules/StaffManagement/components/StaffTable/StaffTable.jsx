
import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableContainer,
  Typography,
  Skeleton,
  TableRow,
  TableCell,
} from "@mui/material";

import StaffTableHeader from "./StaffTableHeader";
import StaffTableRow from "./StaffTableRow";

import { staffColumnsConfig } from "../../config/staffColumns.config";

// Apne project ke existing reusable Pagination ka path use kar.
import Pagination from "@/master_shared/components/Pagination/Pagination";

import "./StaffTable.css";

const StaffTable = ({
  data = [],
  loading = false,
  error = "",
  onView,
  onEdit,
  onDelete,
}) => {
  // Important: reusable Pagination 1-based page number expect karta hai.
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [sortConfig, setSortConfig] = useState({
    key: "employeeId",
    direction: "asc",
  });

  const columns = useMemo(
    () =>
      [...staffColumnsConfig]
        .filter((column) => column.visible !== false)
        .sort((a, b) => a.order - b.order),
    []
  );

  // Search, category ya filters se dataset badalne par first page par jao.
  useEffect(() => {
    setPage(1);
  }, [data]);

  // Column sorting.
  const sortedData = useMemo(() => {
    const result = [...data];

    if (!sortConfig.key) return result;

    result.sort((a, b) => {
      const firstValue = a?.[sortConfig.key] ?? "";
      const secondValue = b?.[sortConfig.key] ?? "";

      const comparison = String(firstValue).localeCompare(
        String(secondValue),
        undefined,
        {
          numeric: true,
          sensitivity: "base",
        }
      );

      return sortConfig.direction === "asc"
        ? comparison
        : -comparison;
    });

    return result;
  }, [data, sortConfig]);

  const totalRows = sortedData.length;
  const totalPages = Math.max(
    1,
    Math.ceil(totalRows / rowsPerPage)
  );

  // Filtered records kam hone par page valid rakho.
  const safePage = Math.min(page, totalPages);

  const visibleRows = useMemo(() => {
    const startIndex = (safePage - 1) * rowsPerPage;

    return sortedData.slice(
      startIndex,
      startIndex + rowsPerPage
    );
  }, [sortedData, safePage, rowsPerPage]);

  const handleSort = (field) => {
    setSortConfig((previous) => ({
      key: field,
      direction:
        previous.key === field && previous.direction === "asc"
          ? "desc"
          : "asc",
    }));

    setPage(1);
  };

  // Shared Pagination sends: (event, newPage).
  // newPage is already 1-based because your reusable component converts it.
  const handlePageChange = (_event, newPage) => {
    setPage(newPage);
  };

  // MUI TablePagination sends the change event.
  const handleRowsPerPageChange = (event) => {
    const nextRowsPerPage = Number(event.target.value);

    if (
      Number.isFinite(nextRowsPerPage) &&
      nextRowsPerPage > 0
    ) {
      setRowsPerPage(nextRowsPerPage);
      setPage(1);
    }
  };

  const handleAction = (action, staffMember) => {
    switch (action) {
      case "VIEW_STAFF":
        onView?.(staffMember);
        break;

      case "EDIT_STAFF":
        onEdit?.(staffMember);
        break;

      case "DELETE_STAFF":
        onDelete?.(staffMember);
        break;

      default:
        console.warn(`Unknown staff action: ${action}`);
    }
  };

  return (
    <Paper elevation={0} className="staff-table">
      {error && (
        <Box className="staff-table__error" role="alert">
          {error}
        </Box>
      )}

      <TableContainer className="staff-table__container">
        <Table
          stickyHeader
          aria-label="Staff directory"
          className="staff-table__table"
        >
          <StaffTableHeader
            sortConfig={sortConfig}
            onSort={handleSort}
          />

          <TableBody>
            {loading ? (
              Array.from({ length: 5 }, (_, index) => (
                <TableRow key={`staff-loading-${index}`}>
                  {columns.map((column) => (
                    <TableCell key={column.id}>
                      <Skeleton
                        variant="text"
                        width="80%"
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : visibleRows.length > 0 ? (
              visibleRows.map((staffMember) => (
                <StaffTableRow
                  key={
                    staffMember.id || staffMember.employeeId
                  }
                  staff={staffMember}
                  columns={columns}
                  onAction={handleAction}
                />
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length}>
                  <Box className="staff-table__empty">
                    <Typography className="staff-table__empty-title">
                      No staff records found
                    </Typography>

                    <Typography className="staff-table__empty-description">
                      Try changing your search or filters.
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Existing reusable pagination — no new config */}
      <Box className="staff-table__pagination">
        <Pagination
          page={safePage}
          rowsPerPage={rowsPerPage}
          totalRows={totalRows}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </Box>
    </Paper>
  );
};

export default StaffTable;
