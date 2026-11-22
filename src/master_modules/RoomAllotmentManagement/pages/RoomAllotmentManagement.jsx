
import React, { useState } from "react";

import RoomAllotmentHeader from "../components/RoomAllotmentHeader/RoomAllotmentHeader";
import RoomAllotmentStats from "../components/RoomAllotmentStats/RoomAllotmentStats";
import RoomAllotmentTabs from "../components/RoomAllotmentTabs/RoomAllotmentTabs";
import RoomAllotmentFilters from "../components/RoomAllotmentFilters/RoomAllotmentFilters";
import RoomAllotmentTable from "../components/RoomAllotmentTable/RoomAllotmentTable";

import AddWard from "../components/AddWard/AddWard";
import AddRoom from "../components/AddRoom/AddRoom";
import AddBed from "../components/AddBed/AddBed";

import Pagination from "@/master_shared/components/Pagination/Pagination.jsx";

import { roomAllotmentStatsMock } from "../mock/roomAllotmentStats.mock";
import { roomAllotmentOptionsMock } from "../mock/roomAllotmentOptions.mock";
import { initialRoomAllotmentFilters } from "../mock/roomAllotmentFilters.mock";
import { roomAllotmentMock } from "../mock/roomAllotment.mock";

import { roomAllotmentColumnsConfig } from "../config/roomAllotmentColumns.config";

import "../styles/RoomAllotmentManagement.css";

const RoomAllotmentManagement = () => {

  // =========================================
  // ACTIVE VIEW
  // =========================================

  const [activeView, setActiveView] = useState("list");

  // =========================================
  // ACTIVE TAB
  // =========================================

  const [activeTab, setActiveTab] = useState("room-allotment");

  // =========================================
  // FILTERS
  // =========================================

  const [filters, setFilters] = useState({
    ...initialRoomAllotmentFilters,
  });

  // =========================================
  // TABLE DATA
  // =========================================

  const [tableData] = useState(roomAllotmentMock);

  // =========================================
  // SORTING
  // =========================================

  const [sortConfig, setSortConfig] = useState({
    field: "allotmentDate",
    direction: "desc",
  });

  // =========================================
  // PAGINATION
  // =========================================

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // =========================================
  // HEADER ACTIONS
  // =========================================

  const handleHeaderAction = (actionId) => {
    switch (actionId) {
      case "add-ward":
        setActiveView("add-ward");
        break;

      case "add-room":
        setActiveView("add-room");
        break;

      case "add-bed":
        setActiveView("add-bed");
        break;

      default:
        break;
    }
  };

  // =========================================
  // BACK TO ROOM ALLOTMENT LIST
  // =========================================

  const handleBackToList = () => {
    setActiveView("list");
  };

  // =========================================
  // TAB CHANGE
  // =========================================

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  // =========================================
  // FILTER CHANGE
  // =========================================

  const handleFilterChange = (field, value) => {
    setFilters((previous) => ({
      ...previous,
      [field]: value,
    }));

    setPage(1);
  };

  // =========================================
  // FILTER DATA
  // =========================================

  const filteredData = tableData.filter((item) => {
    const searchValue = (filters.search || "").trim().toLowerCase();

    const matchesWard =
      !filters.wardId || item.wardId === filters.wardId;

    const matchesRoomType =
      !filters.roomType ||
      item.roomType.toLowerCase().replace(/\s+/g, "-") ===
        filters.roomType;

    const matchesRoom =
      !filters.roomId || item.roomId === filters.roomId;

    const matchesStatus =
      !filters.bedStatus || item.status === filters.bedStatus;

    const searchableText = [
      item.patientName,
      item.uhid,
      item.ipdNo,
      item.ward,
      item.roomNo,
      item.bedNo,
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch =
      !searchValue || searchableText.includes(searchValue);

    return (
      matchesWard &&
      matchesRoomType &&
      matchesRoom &&
      matchesStatus &&
      matchesSearch
    );
  });

  // =========================================
  // SORTING DATA
  // =========================================

  const sortedData = [...filteredData].sort((a, b) => {
    const first = a[sortConfig.field] ?? "";
    const second = b[sortConfig.field] ?? "";

    const comparison = String(first).localeCompare(
      String(second),
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

  const handleSort = (field) => {
    setSortConfig((previous) => ({
      field,
      direction:
        previous.field === field && previous.direction === "asc"
          ? "desc"
          : "asc",
    }));

    setPage(1);
  };

  // =========================================
  // PAGINATION DATA
  // =========================================

  const paginatedData = sortedData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handlePageChange = (_, nextPage) => {
    setPage(nextPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(Number(event.target.value));
    setPage(1);
  };

  // =========================================
  // REFRESH
  // =========================================

  const handleRefresh = () => {
    setFilters({ ...initialRoomAllotmentFilters });

    setSortConfig({
      field: "allotmentDate",
      direction: "desc",
    });

    setPage(1);
  };

  // =========================================
  // CSV DOWNLOAD
  // =========================================

  const handleDownload = () => {
    const headers = [
      "Patient Name",
      "UHID",
      "IPD Number",
      "Ward",
      "Room Number",
      "Bed Number",
      "Room Type",
      "Allotment Date",
      "Bed Status",
    ];

    const rows = filteredData.map((item) => [
      item.patientName,
      item.uhid,
      item.ipdNo,
      item.ward,
      item.roomNo,
      item.bedNo,
      item.roomType,
      item.allotmentDate,
      item.status,
    ]);

    const escapeCSV = (value) =>
      `"${String(value ?? "").replace(/"/g, '""')}"`;

    const csvContent = [headers, ...rows]
      .map((row) => row.map(escapeCSV).join(","))
      .join("\r\n");

    const blob = new Blob(["\uFEFF" + csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "room-allotment-report.csv";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  // =========================================
  // TABLE ACTIONS
  // =========================================

  const handleTableAction = (actionId, row) => {
    switch (actionId) {
      case "view":
        console.log("View Allotment:", row);
        break;

      case "edit":
        console.log("Edit Allotment:", row);
        break;

      case "release":
        console.log("Release Bed:", row);
        break;

      default:
        break;
    }
  };

  // =========================================
  // ADD WARD VIEW
  // =========================================

  if (activeView === "add-ward") {
    return <AddWard onBack={handleBackToList} />;
  }

  // =========================================
  // ADD ROOM VIEW
  // =========================================

  if (activeView === "add-room") {
    return <AddRoom onBack={handleBackToList} />;
  }

  // =========================================
  // ADD BED VIEW
  // =========================================

  if (activeView === "add-bed") {
    return <AddBed onBack={handleBackToList} />;
  }

  // =========================================
  // ROOM ALLOTMENT DASHBOARD
  // =========================================

  return (
    <main className="room-allotment-page">

      {/* HEADER */}
      <section className="room-allotment-page__header">
        <RoomAllotmentHeader
          onAction={handleHeaderAction}
        />
      </section>

      {/* STATS */}
      <section className="room-allotment-page__stats">
        <RoomAllotmentStats
          stats={roomAllotmentStatsMock}
        />
      </section>

      {/* TABS */}
      <section className="room-allotment-page__tabs">
        <RoomAllotmentTabs
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
      </section>

      {/* ROOM ALLOTMENT TAB */}
      {activeTab === "room-allotment" && (
        <>
          {/* FILTERS */}
          <section className="room-allotment-page__filters">
            <RoomAllotmentFilters
              filters={filters}
              options={roomAllotmentOptionsMock}
              onFilterChange={handleFilterChange}
              onRefresh={handleRefresh}
              onDownload={handleDownload}
            />
          </section>

          {/* TABLE + PAGINATION */}
          <section className="room-allotment-page__table">

            <RoomAllotmentTable
              data={paginatedData}
              columns={roomAllotmentColumnsConfig}
              sortConfig={sortConfig}
              onSort={handleSort}
              onAction={handleTableAction}
            />

            <Pagination
              page={page}
              rowsPerPage={rowsPerPage}
              totalRows={filteredData.length}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
            />

          </section>
        </>
      )}

    </main>
  );
};

export default RoomAllotmentManagement;
