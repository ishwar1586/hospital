const TablePaginationMax = ({
  page,
  totalPages,
  setPage,
  limit,
  setLimit,
}) => {
  return (
    <div className="pagination-wrapper">

      <div className="rows-control">
        <span>Items per page:</span>

        <select
          value={limit}
          onChange={(e) => {
            setLimit(Number(e.target.value));
            setPage(1);
          }}
        >
          {[5, 10, 20, 50].map((n) => (
            <option key={n}>{n}</option>
          ))}
        </select>
      </div>

      <div className="pagination">

        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>

        <span className="active">{page}</span>

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

export default TablePaginationMax;