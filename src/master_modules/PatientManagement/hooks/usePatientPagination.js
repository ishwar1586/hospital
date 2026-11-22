import { useEffect, useMemo, useState } from "react";

const usePatientPagination = (data = []) => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const totalRows = data.length;

  const totalPages = Math.max(
    1,
    Math.ceil(totalRows / rowsPerPage)
  );

  /* =========================================
     Paginated Data
  ========================================= */

  const paginatedData = useMemo(() => {
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    return data.slice(startIndex, endIndex);
  }, [data, page, rowsPerPage]);


  /* =========================================
     Keep Current Page Valid
  ========================================= */

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);


  /* =========================================
     Page Change
  ========================================= */

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };


  /* =========================================
     Rows Per Page Change
  ========================================= */

  const handleRowsPerPageChange = (event) => {
    const newRowsPerPage = parseInt(
      event.target.value,
      10
    );

    setRowsPerPage(newRowsPerPage);
    setPage(1);
  };


  /* =========================================
     Reset Pagination
  ========================================= */

  const resetPagination = () => {
    setPage(1);
  };


  return {
    page,
    rowsPerPage,
    totalRows,
    totalPages,
    paginatedData,

    handlePageChange,
    handleRowsPerPageChange,

    resetPagination,
  };
};

export default usePatientPagination;