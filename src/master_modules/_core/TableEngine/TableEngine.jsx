import { useState } from "react";
import TableHeader from "@/master_modules/_core/TableEngine/TableHeader";
import TableRow from "@/master_modules/_core/TableEngine/TableRow";
import TableToolbar from "@/master_modules/_core/TableEngine/TableToolbar";
import TablePagination from "@/master_modules/_core/TableEngine/TablePagination";
import "@/master_modules/_core/TableEngine/TableEngine.css";

const TableEngine = ({ config = {}, data = [] }) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(config.pageSize || 5);


  const [visibleColumns, setVisibleColumns] = useState(
    config.columns.map((c) => c.key)
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

  // 🔄 REFRESH
  const handleRefresh = () => {
    setSearch("");
    setPage(1);
  };

  // 📄 PAGINATION
  const totalPages = Math.max(
    1,
    Math.ceil(filtered.length / limit)
  );

  const paginatedData = filtered.slice(
    (page - 1) * limit,
    page * limit
  );

  // 🔥 visible columns filter
  const activeCols = config.columns.filter((c) =>
    visibleColumns.includes(c.key)
  );

  return (
    <div className="table-card">

      {/* 🔍 TOOLBAR */}
      <TableToolbar
        title={config.title || "Table"}
        search={search}
        setSearch={(val) => {
          setSearch(val);
          setPage(1);
        }}
        columns={config.columns}
        visibleColumns={visibleColumns}
        setVisibleColumns={setVisibleColumns}
        data={filtered}
        onRefresh={handleRefresh}
      />

      {/* 📊 TABLE */}
      <table className="table-engine">
        <TableHeader columns={activeCols} />

        <tbody>
          {paginatedData.map((row) => (
            <TableRow
              key={row.id}
              row={row}
              columns={activeCols}
            />
          ))}
        </tbody>
      </table>

      {/* 📄 PAGINATION */}
      <TablePagination
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

export default TableEngine;

// const TableEngine = ({ config = {}, data = [] }) => {
//   const [search, setSearch] = useState("");
//   const [page, setPage] = useState(1);
//   const [limit, setLimit] = useState(config.pageSize || 5);

//   const [visibleColumns, setVisibleColumns] = useState(
//     (config.columns || []).map((c) => c.key)
//   );

//   // 🔍 FILTER
//   const filtered = (data || []).filter((row) => {
//     if (!search) return true;

//     return (config.searchKeys || []).some((key) =>
//       String(row[key] ?? "")
//         .toLowerCase()
//         .includes(search.toLowerCase())
//     );
//   });

//   // 🔄 REFRESH
//   const handleRefresh = () => {
//     setSearch("");
//     setPage(1);
//   };

//   // 📄 PAGINATION
//   const totalPages = Math.max(
//     1,
//     Math.ceil(filtered.length / limit)
//   );

//   const paginatedData = filtered.slice(
//     (page - 1) * limit,
//     page * limit
//   );

//   // 🔥 UNIVERSAL AUTO WIDTH (no hardcode)
//   const getColumnWidth = (col, rows) => {
//     const labelLen = String(col.label || "").length;

//     const maxContentLen = Math.max(
//       labelLen,
//       ...rows.map((r) => String(r[col.key] ?? "").length)
//     );

//     // px calculation
//     const width = Math.min(Math.max(maxContentLen * 8, 100), 280);

//     return width;
//   };

//   // 🔥 ACTIVE COLUMNS
//   const activeCols = (config.columns || [])
//     .filter((c) => visibleColumns.includes(c.key))
//     .map((col) => ({
//       ...col,
//       width: col.width || getColumnWidth(col, filtered),
//     }));

//   return (
//     <div className="table-card">

//       <TableToolbar
//         title={config.title || "Table"}
//         search={search}
//         setSearch={(val) => {
//           setSearch(val);
//           setPage(1);
//         }}
//         columns={config.columns || []}
//         visibleColumns={visibleColumns}
//         setVisibleColumns={setVisibleColumns}
//         data={filtered}
//         onRefresh={handleRefresh}
//       />

//       {/* 🔥 SCROLL WRAPPER */}
//       <div className="table-scroll">
//         <table className="table-engine">
//           <TableHeader columns={activeCols} />

//           <tbody>
//             {paginatedData.map((row, i) => (
//               <TableRow
//                 key={row.id ?? i}
//                 row={row}
//                 columns={activeCols}
//               />
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <TablePagination
//         page={page}
//         totalPages={totalPages}
//         limit={limit}
//         setPage={setPage}
//         setLimit={(val) => {
//           setLimit(val);
//           setPage(1);
//         }}
//       />
//     </div>
//   );
// };

// export default TableEngine;