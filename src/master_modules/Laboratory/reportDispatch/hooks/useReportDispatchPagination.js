// =========================================
// REPORT DISPATCH PAGINATION HOOK
// =========================================

import {
    useEffect,
    useMemo,
    useState,
} from "react";


// =========================================
// HOOK
// =========================================

const useReportDispatchPagination = ({
    totalRows = 0,

    defaultRowsPerPage = 10,
} = {}) => {

    // =========================================
    // CURRENT PAGE
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
    ] = useState(
        defaultRowsPerPage
    );


    // =========================================
    // TOTAL PAGES
    // =========================================

    const totalPages =
        useMemo(
            () => {

                if (
                    totalRows <= 0 ||
                    rowsPerPage <= 0
                ) {
                    return 0;
                }


                return Math.ceil(
                    totalRows /
                    rowsPerPage
                );

            },
            [
                totalRows,
                rowsPerPage,
            ]
        );


    // =========================================
    // PAGE CHANGE
    // =========================================

    const handlePageChange = (
        event,
        newPage
    ) => {

        if (
            newPage < 1
        ) {
            return;
        }


        if (
            totalPages > 0 &&
            newPage > totalPages
        ) {
            return;
        }


        setPage(
            newPage
        );

    };


    // =========================================
    // ROWS PER PAGE CHANGE
    // =========================================

    const handleRowsPerPageChange = (
        event
    ) => {

        const newRowsPerPage =
            Number(
                event.target.value
            );


        if (
            !newRowsPerPage ||
            newRowsPerPage <= 0
        ) {
            return;
        }


        setRowsPerPage(
            newRowsPerPage
        );


        // New page size ke baad
        // always first page par.
        setPage(1);

    };


    // =========================================
    // RESET PAGE
    // =========================================

    const resetPage = () => {

        setPage(1);

    };


    // =========================================
    // VALIDATE PAGE
    // =========================================

    useEffect(
        () => {

            if (
                totalPages === 0
            ) {

                if (
                    page !== 1
                ) {
                    setPage(1);
                }

                return;

            }


            if (
                page > totalPages
            ) {

                setPage(
                    totalPages
                );

            }

        },
        [
            page,
            totalPages,
        ]
    );


    // =========================================
    // RETURN
    // =========================================

    return {

        page,

        rowsPerPage,

        totalPages,

        handlePageChange,

        handleRowsPerPageChange,

        resetPage,

    };

};


export default useReportDispatchPagination;