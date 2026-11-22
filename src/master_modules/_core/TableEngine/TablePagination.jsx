// const TablePagination = ({
//   page,
//   totalPages,
//   limit,
//   setPage,
//   setLimit,
// }) => {
//   return (
//     <div className="pagination-wrapper">

//       <div>
//         <p>Items per page:</p>
//         <select
//           value={limit}
//           onChange={(e) =>
//             setLimit(Number(e.target.value))
//           }
//         >
//           <option>5</option>
//           <option>10</option>
//           <option>20</option>
//         </select>
//       </div>

//       <div className="pagination">
//         <button disabled={page === 1} onClick={() => setPage(page - 1)}>
//           Prev
//         </button>

//         {[...Array(totalPages)].map((_, i) => (
//           <button
//             key={i}
//             className={page === i + 1 ? "active" : ""}
//             onClick={() => setPage(i + 1)}
//           >
//             {i + 1}
//           </button>
//         ))}

//         <button
//           disabled={page === totalPages}
//           onClick={() => setPage(page + 1)}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TablePagination;



const TablePagination = ({
  page,
  totalPages,
  limit,
  setPage,
  setLimit,
}) => {

  // 🔥 SMART PAGE LOGIC (max 3 buttons)
  const getPages = () => {
    if (totalPages <= 3) {
      return [...Array(totalPages)].map((_, i) => i + 1);
    }

    if (page <= 2) return [1, 2, 3];

    if (page >= totalPages - 1) {
      return [totalPages - 2, totalPages - 1, totalPages];
    }

    return [page - 1, page, page + 1];
  };

  return (
    <div className="pagination-wrapper">

      {/* LEFT */}
      <div className="rows-control">
        <span>Items per page:</span>

        <select
          value={limit}
          onChange={(e) => {
            setLimit(Number(e.target.value));
            setPage(1); // 🔥 reset page
          }}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>

      {/* RIGHT */}
      <div className="pagination">

        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>

        {/* 🔥 SMART BUTTONS */}
        {getPages().map((p) => (
          <button
            key={p}
            className={page === p ? "active" : ""}
            onClick={() => setPage(p)}
          >
            {p}
          </button>
        ))}

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>

      </div>
    </div>
  );
};

export default TablePagination;