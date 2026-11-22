

import { useState } from "react";
import { FiFilter, FiRefreshCw, FiDownload } from "react-icons/fi";
// import {} from "@mui/icons-material";

const TableToolbarMax = ({
  title,
  search,
  setSearch,
  columns,
  visibleColumns,
  setVisibleColumns,
  onRefresh,
  onDownload,
}) => {
  const [open, setOpen] = useState(false);

  const toggleColumn = (key) => {
    setVisibleColumns((prev) =>
      prev.includes(key)
        ? prev.filter((c) => c !== key)
        : [...prev, key]
    );
  };

  return (
    <div className="table-top">

      <h3>{title}</h3>

      <input
        className="search"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="toolbar-icons">

        {/* 🔄 REFRESH */}
        <div className="icon refresh" onClick={onRefresh} title="Refresh">
          <FiRefreshCw />
        </div>

        {/* ⬇ DOWNLOAD */}
        <div className="icon download" onClick={onDownload} title="Download CSV">
          <FiDownload />
        </div>

        {/* 🔽 FILTER */}
        <div className="icon-wrapper">
          <div
            className="icon filter"
            onClick={() => setOpen(!open)}
            title="Show / Hide Columns"
          >
            <FiFilter />
          </div>

          {open && (
            <div className="dropdown">
              {columns.map((col) => (
                <label key={col.key} className="dropdown-item">
                  <input
                    type="checkbox"
                    checked={visibleColumns.includes(col.key)}
                    onChange={() => toggleColumn(col.key)}
                  />
                  <span>{col.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default TableToolbarMax;