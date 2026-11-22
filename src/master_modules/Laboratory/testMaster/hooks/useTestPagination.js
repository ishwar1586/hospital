import { useCallback, useMemo, useState } from "react";

const useTestPagination = (data = []) => {
    const [page, setPage] = useState(1);

    const [rowsPerPage, setRowsPerPage] = useState(10);

    const totalRows = data.length;

    const totalPages = Math.max(
        1,
        Math.ceil(totalRows / rowsPerPage)
    );

    const currentPageData = useMemo(() => {
        const startIndex =
            (page - 1) * rowsPerPage;

        const endIndex =
            startIndex + rowsPerPage;

        return data.slice(
            startIndex,
            endIndex
        );
    }, [
        data,
        page,
        rowsPerPage,
    ]);

    /* =========================
       PAGE CHANGE
    ========================= */

    const handlePageChange = useCallback(
        (event, newPage) => {
            setPage(newPage);
        },
        []
    );

    /* =========================
       ROWS PER PAGE CHANGE
    ========================= */

    const handleRowsPerPageChange = useCallback(
        (event) => {
            const newRowsPerPage =
                parseInt(
                    event.target.value,
                    10
                );

            setRowsPerPage(newRowsPerPage);

            // Always go back to page 1
            setPage(1);
        },
        []
    );

    /* =========================
       RESET PAGE
    ========================= */

    const resetPage = useCallback(() => {
        setPage(1);
    }, []);

    return {
        page,
        rowsPerPage,
        totalRows,
        currentPageData,
        totalPages,

        onPageChange:
            handlePageChange,

        onRowsPerPageChange:
            handleRowsPerPageChange,

        resetPage,
    };
};

export default useTestPagination;