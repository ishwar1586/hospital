import {
    useCallback,
    useMemo,
    useState,
} from "react";


const useAppointmentPagination = (
    data = []
) => {

    // =========================================
    // Pagination State
    // =========================================

    const [
        page,
        setPage,
    ] = useState(1);


    const [
        rowsPerPage,
        setRowsPerPage,
    ] = useState(5);


    // =========================================
    // Total Rows
    // =========================================

    const totalRows = data.length;


    // =========================================
    // Paginated Data
    // =========================================

    const paginatedData = useMemo(() => {

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
    // Page Change
    // =========================================

    const handlePageChange = useCallback(
        (
            event,
            newPage
        ) => {

            setPage(
                newPage
            );

        },
        []
    );


    // =========================================
    // Rows Per Page Change
    // =========================================

    const handleRowsPerPageChange =
        useCallback(
            (event) => {

                const newRowsPerPage =
                    parseInt(
                        event.target.value,
                        10
                    );

                setRowsPerPage(
                    newRowsPerPage
                );

                // Always return to
                // first page.
                setPage(1);

            },
            []
        );


    // =========================================
    // Reset Pagination
    // =========================================

    const resetPagination =
        useCallback(() => {

            setPage(1);

        }, []);


    // =========================================
    // Return
    // =========================================

    return {

        page,

        rowsPerPage,

        totalRows,

        paginatedData,

        handlePageChange,

        handleRowsPerPageChange,

        resetPagination,

    };

};


export default useAppointmentPagination;