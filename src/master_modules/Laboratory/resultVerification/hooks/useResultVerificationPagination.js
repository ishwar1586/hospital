import {
    useMemo,
    useState,
} from "react";


// =========================================
// HOOK
// =========================================

const useResultVerificationPagination = (
    data = []
) => {

    // =========================================
    // PAGE
    // =========================================

    const [
        page,
        setPage,
    ] = useState(1);


    // =========================================
    // ROWS PER PAGE
    // =========================================

    const [
        rowsPerPage,
        setRowsPerPage,
    ] = useState(10);


    // =========================================
    // SAFE DATA
    // =========================================

    const safeData =
        Array.isArray(data)
            ? data
            : [];


    // =========================================
    // TOTAL ROWS
    // =========================================

    const totalRows =
        safeData.length;


    // =========================================
    // TOTAL PAGES
    // =========================================

    const totalPages =
        Math.max(
            1,
            Math.ceil(
                totalRows /
                rowsPerPage
            )
        );


    // =========================================
    // KEEP PAGE VALID
    // =========================================

    const safePage =
        Math.min(
            Math.max(
                page,
                1
            ),
            totalPages
        );


    // =========================================
    // PAGINATED DATA
    // =========================================

    const paginatedData =
        useMemo(() => {

            const startIndex =
                (
                    safePage -
                    1
                ) *
                rowsPerPage;


            const endIndex =
                startIndex +
                rowsPerPage;


            return safeData.slice(
                startIndex,
                endIndex
            );

        }, [

            safeData,

            safePage,

            rowsPerPage,

        ]);


    // =========================================
    // PAGE CHANGE
    // =========================================

    const handlePageChange = (
        _event,
        newPage
    ) => {

        const nextPage =
            Number(
                newPage
            );


        if (
            !Number.isFinite(
                nextPage
            )
        ) {

            return;

        }


        setPage(
            Math.min(
                Math.max(
                    nextPage,
                    1
                ),
                totalPages
            )
        );

    };


    // =========================================
    // ROWS PER PAGE CHANGE
    // =========================================

    const handleRowsPerPageChange = (
        event
    ) => {

        const nextRowsPerPage =
            Number(
                event?.target?.value
            );


        if (
            !Number.isFinite(
                nextRowsPerPage
            ) ||
            nextRowsPerPage <= 0
        ) {

            return;

        }


        setRowsPerPage(
            nextRowsPerPage
        );


        // New page size ke baad
        // first page par jaana hai.

        setPage(
            1
        );

    };


    // =========================================
    // RESET PAGINATION
    // =========================================

    const resetPagination = () => {

        setPage(
            1
        );

    };


    // =========================================
    // RETURN
    // =========================================

    return {

        page:
            safePage,

        rowsPerPage,

        totalRows,

        totalPages,

        paginatedData,

        onPageChange:
            handlePageChange,

        onRowsPerPageChange:
            handleRowsPerPageChange,

        resetPagination,

    };

};


export default useResultVerificationPagination;