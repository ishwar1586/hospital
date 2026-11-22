// import { useState, useRef, useEffect } from "react";
// import { FiFilter, FiRefreshCw, FiDownload } from "react-icons/fi";

// const TableToolbar = ({
//   title,
//   search,
//   setSearch,
//   columns,
//   visibleColumns,
//   setVisibleColumns,
//   data,
//   onRefresh,
// }) => {
//   const [open, setOpen] = useState(false);
//   const wrapperRef = useRef(null);

//   // 🔥 click outside close
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () =>
//       document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // 🔥 toggle column
//   const toggleColumn = (key) => {
//     setVisibleColumns((prev) =>
//       prev.includes(key)
//         ? prev.filter((c) => c !== key)
//         : [...prev, key]
//     );
//   };

//   // 🔥 CSV download
//   const handleDownload = () => {
//     const cols = columns.filter((c) =>
//       visibleColumns.includes(c.key)
//     );

//     const header = cols.map((c) => c.label).join(",");
//     const rows = data.map((row) =>
//       cols.map((c) => row[c.key]).join(",")
//     );

//     const csv = [header, ...rows].join("\n");

//     const blob = new Blob([csv], { type: "text/csv" });
//     const url = URL.createObjectURL(blob);

//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "table-data.csv";
//     a.click();
//   };

//   return (
//     <div className="table-top">

//       {/* 🔹 Title */}
//       <h3 className="table-title">{title}</h3>

//       {/* 🔹 Search */}
//       <input
//         className="search-input"
//         placeholder="Search..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {/* 🔹 Right Icons */}
//       <div className="toolbar-icons">

//         {/* 🔥 Filter + Dropdown */}
//         <div className="icon-wrapper" ref={wrapperRef}>
//           <div className="icon filter" onClick={() => setOpen(!open)}>
//             <FiFilter />
//           </div>

//           {open && (
//             <div className="dropdown">

//               <div className="dropdown-header">
//                 Show/Hide Column
//               </div>

//               <div className="dropdown-list">
//                 {columns.map((col) => (
//                   <label key={col.key} className="dropdown-item">
//                     <input
//                       type="checkbox"
//                       checked={visibleColumns.includes(col.key)}
//                       onChange={() => toggleColumn(col.key)}
//                     />
//                     <span>{col.label}</span>
//                   </label>
//                 ))}
//               </div>

//             </div>
//           )}
//         </div>

//         {/* 🔄 Refresh */}
//         <div className="icon refress" onClick={onRefresh}>
//           <FiRefreshCw />
//         </div>

//         {/* ⬇️ Download */}
//         <div className="icon download" onClick={handleDownload}>
//           <FiDownload />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default TableToolbar;


import { useState, useRef, useEffect } from "react";
import { FiFilter, FiRefreshCw, FiDownload } from "react-icons/fi";

const TableToolbar = ({
  title,
  search,
  setSearch,
  columns,
  visibleColumns,
  setVisibleColumns,
  data,
  onRefresh,
}) => {
  const [open, setOpen] = useState(false);
  const [filterText, setFilterText] = useState("");
  const wrapperRef = useRef(null);

  // 🔥 click outside
  useEffect(() => {
    const handler = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // 🔥 toggle
  const toggleColumn = (key) => {
    setVisibleColumns((prev) =>
      prev.includes(key)
        ? prev.filter((c) => c !== key)
        : [...prev, key]
    );
  };

  // 🔥 select all
  const selectAll = () => {
    setVisibleColumns(columns.map((c) => c.key));
  };

  const clearAll = () => {
    setVisibleColumns([]);
  };

  // 🔥 search filter
  const filteredCols = columns.filter((c) =>
    c.label.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="table-top">

      <h3>{title}</h3>

      <input
        className="search-input"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="toolbar-icons">

        {/* 🔥 DROPDOWN */}
        <div className="icon-wrapper" ref={wrapperRef}>
          <div className="icon" onClick={() => setOpen(!open)}>
            <FiFilter />
          </div>

          {open && (
            <div className="dropdown premium">

              {/* HEADER */}
              <div className="dropdown-header">
                <span>Show/Hide Columns</span>

                <div className="dropdown-actions">
                  <button onClick={selectAll}>All</button>
                  <button onClick={clearAll}>None</button>
                </div>
              </div>

              {/* SEARCH */}
              <input
                className="dropdown-search"
                placeholder="Search column..."
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
              />

              {/* LIST */}
              <div className="dropdown-list">
                {filteredCols.map((col) => (
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

            </div>
          )}
        </div>

        <div className="icon" onClick={onRefresh}>
          <FiRefreshCw />
        </div>

        <div className="icon">
          <FiDownload />
        </div>

      </div>
    </div>
  );
};

export default TableToolbar;