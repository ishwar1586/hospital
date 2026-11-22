import {
    useMemo,
    useState,
} from "react";


const useProcessingPagination = (
    data = [],
    initialRowsPerPage = 10
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
    ] = useState(
        initialRowsPerPage
    );


    // =========================================
    // TOTAL ROWS
    // =========================================

    const totalRows =
        data.length;


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
    // CURRENT DATA
    // =========================================

    const paginatedData =
        useMemo(() => {

            const startIndex =
                (page - 1) *
                rowsPerPage;


            const endIndex =
                startIndex +
                rowsPerPage;


            return data.slice(
                startIndex,
                endIndex
            );

        }, [
            data,
            page,
            rowsPerPage,
        ]);


    // =========================================
    // PAGE CHANGE
    // =========================================

    const handlePageChange = (
        event,
        newPage
    ) => {

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


        setRowsPerPage(
            newRowsPerPage
        );


        setPage(
            1
        );

    };


    // =========================================
    // RESET
    // =========================================

    const resetPagination = () => {

        setPage(
            1
        );

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


export default useProcessingPagination;