import { useMemo, useState } from "react";

const initialFilters = {
    search: "",
    category: "all",
    sampleType: "all",
    status: "all",
    method: "all",
};

const useTestFilters = (data = []) => {

    const [filters, setFilters] =
        useState(initialFilters);

    const [activeTab, setActiveTab] =
        useState("all");


    /* =================================
       BASE FILTERED DATA
       Search + Dropdown Filters
    ================================= */

    const baseFilteredData = useMemo(() => {

        let result = [...data];


        /* SEARCH */

        if (filters.search.trim()) {

            const searchValue =
                filters.search
                    .trim()
                    .toLowerCase();

            result = result.filter((test) => {

                return (
                    test.testName
                        ?.toLowerCase()
                        .includes(searchValue) ||

                    test.testCode
                        ?.toLowerCase()
                        .includes(searchValue)
                );

            });
        }


        /* CATEGORY */

        if (filters.category !== "all") {

            result = result.filter(
                (test) =>
                    test.category
                        ?.toLowerCase()
                        .replace(/\s+/g, "-") ===
                    filters.category
            );
        }


        /* SAMPLE TYPE */

        if (filters.sampleType !== "all") {

            result = result.filter(
                (test) =>
                    test.sampleType
                        ?.toLowerCase()
                        .replace(/\s+/g, "-") ===
                    filters.sampleType
            );
        }


        /* STATUS */

        if (filters.status !== "all") {

            result = result.filter(
                (test) =>
                    test.status
                        ?.toLowerCase() ===
                    filters.status
            );
        }


        /* METHOD */

        if (filters.method !== "all") {

            result = result.filter(
                (test) =>
                    test.method
                        ?.toLowerCase()
                        .replace(/\s+/g, "-") ===
                    filters.method
            );
        }


        return result;

    }, [data, filters]);


    /* =================================
       TAB COUNTS

       Counts are calculated from
       filtered data BEFORE tab filter.
    ================================= */

    const tabCounts = useMemo(() => {

        const activeCount =
            baseFilteredData.filter(
                (test) =>
                    test.status
                        ?.toLowerCase() ===
                    "active"
            ).length;


        const inactiveCount =
            baseFilteredData.filter(
                (test) =>
                    test.status
                        ?.toLowerCase() ===
                    "inactive"
            ).length;


        const profilesCount =
            baseFilteredData.filter(
                (test) =>
                    Number(test.profiles) > 0
            ).length;


        return {
            all: baseFilteredData.length,

            active: activeCount,

            inactive: inactiveCount,

            profiles: profilesCount,
        };

    }, [baseFilteredData]);


    /* =================================
       FINAL DATA
       Apply Active Tab
    ================================= */

    const filteredData = useMemo(() => {

        let result = [...baseFilteredData];


        switch (activeTab) {

            case "active":

                result = result.filter(
                    (test) =>
                        test.status
                            ?.toLowerCase() ===
                        "active"
                );

                break;


            case "inactive":

                result = result.filter(
                    (test) =>
                        test.status
                            ?.toLowerCase() ===
                        "inactive"
                );

                break;


            case "profiles":

                result = result.filter(
                    (test) =>
                        Number(test.profiles) > 0
                );

                break;


            case "all":

            // default:
            // break;
        }


        return result;

    }, [
        baseFilteredData,
        activeTab,
    ]);


    /* =================================
       UPDATE FILTERS
    ================================= */

    const updateFilters = (
        updatedFilters
    ) => {

        setFilters(updatedFilters);

    };


    /* =================================
       UPDATE TAB
    ================================= */

    const updateTab = (tabId) => {

        setActiveTab(tabId);

    };

    // const resetFilters = () => {
    //     setFilters(initialFilters);
    //     setActiveTab("all");
    // };

    const resetFilters = () => {

        setFilters({
            search: "",
            category: "all",
            sampleType: "all",
            status: "all",
            method: "all",
        });

        setActiveTab("all");
    };

    return {
        filters,
        activeTab,
        filteredData,
        tabCounts,
        updateFilters,
        updateTab,
        resetFilters,
    };


};

export default useTestFilters;