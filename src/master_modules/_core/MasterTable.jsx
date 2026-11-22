// import "@/master_assets/styles/masterTable.css";

// const MasterTable = ({ columns, data, actions }) => {
//   return (
//     <div className="master-table-wrapper">
//       <table className="master-table">
//         <thead>
//           <tr>
//             {columns.map((col) => (
//               <th key={col.key}>{col.label}</th>
//             ))}
//             {actions && <th>Actions</th>}
//           </tr>
//         </thead>

//         <tbody>
//           {data.map((row) => (
//             <tr key={row.id}>
//               {columns.map((col) => (
//                 <td key={col.key}>
//                   {col.render
//                     ? col.render(row[col.key], row)
//                     : row[col.key]}
//                 </td>
//               ))}

//               {actions && (
//                 <td className="table-actions">
//                   {actions.map((Action, i) => (
//                     <Action key={i} row={row} />
//                   ))}
//                 </td>
//               )}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MasterTable;




// import { useState, useMemo } from "react";
// import "@/master_assets/styles/masterTable.css";
// const MasterTable = ({ columns, data, actions }) => {
//   const [search, setSearch] = useState("");
//   const [page, setPage] = useState(1);
//   const rowsPerPage = 5;

//   // 🔍 SEARCH
//   const filteredData = useMemo(() => {
//     return data.filter((row) =>
//       columns.some((col) =>
//         String(row[col.key] || "")
//           .toLowerCase()
//           .includes(search.toLowerCase())
//       )
//     );
//   }, [search, data, columns]);

//   // 📄 PAGINATION
//   const totalPages = Math.ceil(filteredData.length / rowsPerPage);

//   const paginatedData = filteredData.slice(
//     (page - 1) * rowsPerPage,
//     page * rowsPerPage
//   );

//   // 📥 EXPORT CSV
//   const handleExport = () => {
//     const csv = [
//       columns.map((col) => col.label).join(","),
//       ...filteredData.map((row) =>
//         columns.map((col) => row[col.key]).join(",")
//       ),
//     ].join("\n");

//     const blob = new Blob([csv], { type: "text/csv" });
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.download = "table-data.csv";
//     link.click();
//   };

//   return (
//     <div className="master-table-wrapper">

//       {/* 🔝 TOP BAR */}
//       <div className="table-topbar">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={search}
//           onChange={(e) => {
//             setSearch(e.target.value);
//             setPage(1); // reset page
//           }}
//         />

//         <button onClick={handleExport}>Download</button>
//       </div>

//       {/* 📊 TABLE */}
//       <table className="master-table">
//         <thead>
//           <tr>
//             {columns.map((col) => (
//               <th key={col.key}>{col.label}</th>
//             ))}
//             {actions && <th>Actions</th>}
//           </tr>
//         </thead>

//         <tbody>
//           {paginatedData.map((row) => (
//             <tr key={row.id}>
//               {columns.map((col) => (
//                 <td key={col.key}>
//                   {col.render
//                     ? col.render(row[col.key], row)
//                     : row[col.key]}
//                 </td>
//               ))}

//               {actions && (
//                 <td className="table-actions">
//                   {actions.map((Action, i) => (
//                     <Action key={i} row={row} />
//                   ))}
//                 </td>
//               )}
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* 📄 PAGINATION UI */}
//       <div className="pagination">
//         <button onClick={() => setPage(page - 1)} disabled={page === 1}>
//           Prev
//         </button>

//         <span>
//           {page} / {totalPages || 1}
//         </span>

//         <button
//           onClick={() => setPage(page + 1)}
//           disabled={page === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MasterTable;



import { useState, useMemo } from "react";
import { useDebounce } from "@/master_modules/_core/TableEngine/DeBounceHook";
import "@/master_assets/styles/masterTable.css";

const MasterTable = ({
  columns,
  data,
  actions,
  totalData = 0,
  serverMode = false,
  onFetchData,
}) => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [page, setPage] = useState(1);
  const [sortConfig, setSortConfig] = useState(null);

  const debouncedSearch = useDebounce(search, 500);
  const rowsPerPage = 5;

  // 🔥 SERVER SIDE CALL
  if (serverMode && onFetchData) {
    onFetchData({
      page,
      search: debouncedSearch,
      filter: statusFilter,
      sort: sortConfig,
    });
  }

  // 🔍 FILTER + SEARCH
  const filteredData = useMemo(() => {
    let temp = [...data];

    if (debouncedSearch) {
      temp = temp.filter((row) =>
        columns.some((col) =>
          String(row[col.key] || "")
            .toLowerCase()
            .includes(debouncedSearch.toLowerCase())
        )
      );
    }

    if (statusFilter) {
      temp = temp.filter((row) => row.status === statusFilter);
    }

    return temp;
  }, [debouncedSearch, statusFilter, data, columns]);

  // 🔃 SORTING
  const sortedData = useMemo(() => {
    if (!sortConfig) return filteredData;

    const { key, direction } = sortConfig;

    return [...filteredData].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortConfig]);

  // 📄 PAGINATION
  const finalData = serverMode
    ? data
    : sortedData.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const totalPages = serverMode
    ? Math.ceil(totalData / rowsPerPage)
    : Math.ceil(sortedData.length / rowsPerPage);

  // 🔄 SORT CLICK
  const handleSort = (key) => {
    let direction = "asc";

    if (sortConfig?.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    setSortConfig({ key, direction });
  };

  return (
    <div className="master-table-wrapper">

      {/* 🔝 TOPBAR */}
      <div className="table-topbar">
        <input
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />

        {/* 🔥 FILTER */}
        <select onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="In Progress">In Progress</option>
        </select>

        <button>Download</button>
      </div>

      {/* 📊 TABLE */}
      <table className="master-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} onClick={() => handleSort(col.key)}>
                {col.label} 🔃
              </th>
            ))}
            {actions && <th>Actions</th>}
          </tr>
        </thead>

        <tbody>
          {finalData.map((row) => (
            <tr key={row.id}>
              {columns.map((col) => (
                <td key={col.key}>
                  {col.render
                    ? col.render(row[col.key], row)
                    : row[col.key]}
                </td>
              ))}

              {actions && (
                <td className="table-actions">
                  {actions.map((Action, i) => (
                    <Action key={i} row={row} />
                  ))}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* 📄 PAGINATION */}
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </button>

        <span>{page} / {totalPages || 1}</span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MasterTable;
