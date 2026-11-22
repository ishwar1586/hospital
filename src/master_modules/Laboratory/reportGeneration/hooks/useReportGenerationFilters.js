// =========================================
// REPORT GENERATION FILTER HOOK
// =========================================

import {
    useCallback,
    useMemo,
    useState,
} from "react";


// =========================================
// INITIAL FILTER STATE
// =========================================

const INITIAL_FILTERS = {
    search: "",
    department: "all",
    status: "all",
    format: "all",
    dateRange: "all",
};


// =========================================
// CUSTOM HOOK
// =========================================

const useReportGenerationFilters = () => {

    // =========================================
    // FILTER STATE
    // =========================================

    const [
        filters,
        setFilters,
    ] = useState(
        INITIAL_FILTERS
    );


    // =========================================
    // UPDATE SINGLE FILTER
    // =========================================

    const updateFilter = useCallback(
        (
            filterId,
            value
        ) => {

            if (
                !filterId
            ) {
                return;
            }


            setFilters(
                (previousFilters) => ({
                    ...previousFilters,

                    [filterId]:
                        value,
                })
            );

        },
        []
    );


    // =========================================
    // RESET FILTERS
    // =========================================

    const resetFilters = useCallback(
        () => {

            setFilters(
                INITIAL_FILTERS
            );

        },
        []
    );


    // =========================================
    // CHECK ACTIVE FILTERS
    // =========================================

    const hasActiveFilters =
        useMemo(
            () => {

                return (
                    filters.search
                        .trim()
                        .length > 0 ||

                    filters.department !==
                        "all" ||

                    filters.status !==
                        "all" ||

                    filters.format !==
                        "all" ||

                    filters.dateRange !==
                        "all"
                );

            },
            [filters]
        );


    // =========================================
    // RETURN
    // =========================================

    return {

        filters,

        updateFilter,

        resetFilters,

        hasActiveFilters,

    };

};


export default useReportGenerationFilters;