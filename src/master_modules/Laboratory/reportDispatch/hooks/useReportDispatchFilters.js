// =========================================
// REPORT DISPATCH FILTERS HOOK
// =========================================

import {
    useCallback,
    useState,
} from "react";


// =========================================
// DEFAULT FILTERS
// =========================================

const DEFAULT_REPORT_DISPATCH_FILTERS = {

    search:
        "",

    status:
        "",

    dispatchMode:
        "",

    department:
        "",

    fromDate:
        "",

    toDate:
        "",

};


// =========================================
// USE REPORT DISPATCH FILTERS
// =========================================

const useReportDispatchFilters = () => {

    // =========================================
    // FILTER STATE
    // =========================================

    const [
        filters,
        setFilters,
    ] = useState(
        DEFAULT_REPORT_DISPATCH_FILTERS
    );


    // =========================================
    // UPDATE SINGLE FILTER
    // =========================================

    const handleFilterChange = useCallback(
        (
            key,
            value
        ) => {

            if (
                !key
            ) {
                return;
            }


            setFilters(
                (
                    previousFilters
                ) => ({

                    ...previousFilters,

                    [key]:
                        value,

                })
            );

        },
        []
    );


    // =========================================
    // CLEAR ALL FILTERS
    // =========================================

    const clearFilters = useCallback(
        () => {

            setFilters(
                DEFAULT_REPORT_DISPATCH_FILTERS
            );

        },
        []
    );


    // =========================================
    // SET FILTERS
    // =========================================
    //
    // Useful later when:
    //
    // - Saved filters are loaded
    // - URL filters are restored
    // - Backend preferences are applied
    //
    // =========================================

    const setReportDispatchFilters =
        useCallback(
            (
                nextFilters
            ) => {

                if (
                    !nextFilters ||
                    typeof nextFilters !==
                    "object"
                ) {
                    return;
                }


                setFilters(
                    (
                        previousFilters
                    ) => ({

                        ...previousFilters,

                        ...nextFilters,

                    })
                );

            },
            []
        );


    // =========================================
    // HAS ACTIVE FILTERS
    // =========================================

    const hasActiveFilters =
        Object.values(
            filters
        ).some(
            (
                value
            ) =>
                value !==
                "" &&
                value !==
                null &&
                value !==
                undefined
        );


    // =========================================
    // RETURN
    // =========================================

    return {

        filters,

        setFilters:
            setReportDispatchFilters,

        onFilterChange:
            handleFilterChange,

        clearFilters,

        hasActiveFilters,

    };

};


export default useReportDispatchFilters;