import { useState } from "react";
import TableHeaderMax from "@/master_modules/TableEngineMax/TableHeaderMax";
import TableRowMax from "@/master_modules/TableEngineMax/TableRowMax";
import TableToolbarMax from "@/master_modules/TableEngineMax/TableToolbarMax";
import TablePaginationMax from "@/master_modules/TableEngineMax/TablePaginationMax";
import "@/master_modules/TableEngineMax/tableenginemax.css";

const TableEngineMax = ({ config = {}, data = [] }) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(config.pageSize || 10);

  const [visibleColumns, setVisibleColumns] = useState(
    (config.columns || []).map((c) => c.key)
  );

  // 🔍 FILTER
  const filtered = data.filter((row) => {
    if (!search) return true;
    return (config.searchKeys || []).some((key) =>
      String(row[key] || "")
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  });

  // 📄 PAGINATION
  const totalPages = Math.max(1, Math.ceil(filtered.length / limit));

  const paginatedData = filtered.slice(
    (page - 1) * limit,
    page * limit
  );

  // 🔥 ACTIVE COLUMNS
  const activeCols = config.columns.filter((c) =>
    visibleColumns.includes(c.key)
  );

  // 🔄 REFRESH
  const handleRefresh = () => {
    setSearch("");
    setPage(1);
  };

  // ⬇ DOWNLOAD CSV
  const handleDownload = () => {
    const headers = activeCols.map((c) => c.label);

    const rows = filtered.map((row) =>
      activeCols.map((c) => row[c.key] ?? "")
    );

    const csvContent =
      [headers, ...rows]
        .map((r) => r.join(","))
        .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${config.title || "table-data"}.csv`;
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="table-card">

      {/* 🔥 TOOLBAR */}
      <TableToolbarMax
        title={config.title}
        search={search}
        setSearch={(val) => {
          setSearch(val);
          setPage(1);
        }}
        columns={config.columns}
        visibleColumns={visibleColumns}
        setVisibleColumns={setVisibleColumns}
        onRefresh={handleRefresh}
        onDownload={handleDownload}
      />

      {/* 📊 TABLE */}
      <div className="table-scroll">
        <table className="table-engine">
          <TableHeaderMax columns={activeCols} />

          <tbody>
            {paginatedData.map((row, i) => (
              <TableRowMax
                key={row.id ?? i}
                row={row}
                columns={activeCols}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* 📄 PAGINATION */}
      <TablePaginationMax
        page={page}
        totalPages={totalPages}
        limit={limit}
        setPage={setPage}
        setLimit={(val) => {
          setLimit(val);
          setPage(1);
        }}
      />
    </div>
  );
};

export default TableEngineMax;

