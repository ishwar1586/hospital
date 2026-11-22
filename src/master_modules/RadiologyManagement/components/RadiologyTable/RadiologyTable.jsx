// src/master_modules/RadiologyManagement/components/RadiologyTable/RadiologyTable.jsx

import React, { useMemo, useState, useEffect } from "react";
import "./RadiologyTable.css";

import RadiologyTableHeader from "./RadiologyTableHeader";
import RadiologyTableRow from "./RadiologyTableRow";

// Apne reusable Pagination component ke actual path ke according
// neeche wala import path set karna.
import Pagination from "@/master_shared/components/Pagination/Pagination";

import { radiologyColumnsConfig } from "../../config/radiologyColumns.config";
import { radiologyOrdersMock } from "../../mock/radiologyOrders.mock";

const DEFAULT_ROWS_PER_PAGE = 10;

const normalize = (value) => String(value ?? "").trim().toLowerCase();

const RadiologyTable = ({
  orders = radiologyOrdersMock,
  filters = {},
  activeTab = "all",
  columns = radiologyColumnsConfig,
  onViewDetails,
  onEditOrder,
}) => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_ROWS_PER_PAGE);

  const safeOrders = Array.isArray(orders) ? orders : [];
  const safeColumns = Array.isArray(columns)
    ? columns
    : columns?.columns ?? [];

  const filteredOrders = useMemo(() => {
    return safeOrders.filter((order) => {
      const searchTerm = normalize(filters.search);

      const searchableText = [
        order.orderId,
        order.patientId,
        order.patientName,
        order.testName,
        order.test,
        order.doctorName,
      ]
        .map(normalize)
        .join(" ");

      const matchesSearch =
        !searchTerm || searchableText.includes(searchTerm);

      const modality = normalize(order.modality);
      const selectedModality = normalize(filters.modality);

      const matchesModality =
        !selectedModality ||
        selectedModality === "all" ||
        modality === selectedModality;

      const status = normalize(order.status);
      const selectedStatus = normalize(filters.status);

      const matchesStatus =
        !selectedStatus ||
        selectedStatus === "all" ||
        status === selectedStatus;

      const matchesTab =
        activeTab === "all" ||
        status === normalize(activeTab).replaceAll("-", " ");

      const orderDate = String(order.orderDate ?? order.date ?? "").slice(0, 10);
      const matchesDate = !filters.date || orderDate === filters.date;

      return (
        matchesSearch &&
        matchesModality &&
        matchesStatus &&
        matchesTab &&
        matchesDate
      );
    });
  }, [safeOrders, filters, activeTab]);

  useEffect(() => {
    setPage(1);
  }, [
    filters.search,
    filters.modality,
    filters.status,
    filters.date,
    activeTab,
    rowsPerPage,
  ]);

  const totalRows = filteredOrders.length;
  const totalPages = Math.max(1, Math.ceil(totalRows / rowsPerPage));
  const safePage = Math.min(page, totalPages);

  const paginatedOrders = useMemo(() => {
    const startIndex = (safePage - 1) * rowsPerPage;
    return filteredOrders.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredOrders, safePage, rowsPerPage]);

  const handlePageChange = (_event, nextPage) => {
    setPage(nextPage);
  };

  const handleRowsPerPageChange = (event) => {
    const nextRowsPerPage = Number(event.target.value);

    if (Number.isFinite(nextRowsPerPage) && nextRowsPerPage > 0) {
      setRowsPerPage(nextRowsPerPage);
      setPage(1);
    }
  };

  return (
    <section className="radiology-table">
      <div className="radiology-table__top">
        <div>
          <h2 className="radiology-table__title">Radiology Orders</h2>
          <p className="radiology-table__subtitle">
            View and manage imaging requests
          </p>
        </div>

        <span className="radiology-table__total">
          {totalRows} {totalRows === 1 ? "order" : "orders"}
        </span>
      </div>

      <div className="radiology-table__scroll">
        <table className="radiology-table__element">
          <RadiologyTableHeader columns={safeColumns} />

          <tbody>
            {paginatedOrders.length > 0 ? (
              paginatedOrders.map((order, index) => (
                <RadiologyTableRow
                  key={
                    order.id ??
                    order.orderId ??
                    `${order.patientId ?? "patient"}-${index}`
                  }
                  order={order}
                  columns={safeColumns}
                  onViewDetails={onViewDetails}
                  onEditOrder={onEditOrder}
                />
              ))
            ) : (
              <tr>
                <td
                  className="radiology-table__empty"
                  colSpan={Math.max(safeColumns.length, 1)}
                >
                  <strong>No radiology orders found</strong>
                  <span>
                    Try changing your search or filter selections.
                  </span>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="radiology-table__pagination">
        <Pagination
          page={safePage}
          rowsPerPage={rowsPerPage}
          totalRows={totalRows}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </div>
    </section>
  );
};

export default RadiologyTable;