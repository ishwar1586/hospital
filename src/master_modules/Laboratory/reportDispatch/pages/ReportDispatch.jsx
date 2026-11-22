// =========================================
// REPORT DISPATCH PAGE
// =========================================

import {
    useMemo,
    useState,
} from "react";


// =========================================
// HEADER
// =========================================

import ReportDispatchHeader
    from "../components/Header/ReportDispatchHeader";


// =========================================
// STATS CARDS
// =========================================

import ReportDispatchStatsCards
    from "../components/StatsCards/ReportDispatchStatsCards";


// =========================================
// FILTERS
// =========================================

import ReportDispatchFilters
    from "../components/Filters/ReportDispatchFilters";


// =========================================
// TABS
// =========================================

import ReportDispatchTabs
    from "../components/Tabs/ReportDispatchTabs";


// =========================================
// TABLE
// =========================================

import ReportDispatchTable
    from "../components/Table/ReportDispatchTable";


// =========================================
// TEMPLATES MODAL
// =========================================

import ReportTemplatesModal
    from "../components/Modals/ReportTemplatesModal";


// =========================================
// PAGINATION
// =========================================

import Pagination
    from "@/master_shared/components/Pagination/Pagination";


// =========================================
// FILTER CONFIG
// =========================================

import reportDispatchFilterConfig
    from "../config/filters";


// =========================================
// TAB CONFIG
// =========================================

import reportDispatchTabs, {
    REPORT_DISPATCH_TAB,
} from "../config/tabs";


// =========================================
// TABLE COLUMN CONFIG
// =========================================

import reportDispatchColumns
    from "../config/reportDispatchColumns";


// =========================================
// MOCK DATA
// =========================================

import {
    reportDispatchTemplates,
    reportDispatchMockData,
} from "../mock/reportDispatch.mock";


// =========================================
// FILTER HOOK
// =========================================

import useReportDispatchFilters
    from "../hooks/useReportDispatchFilters";


// =========================================
// FILTER UTILITY
// =========================================

import filterDispatchReports
    from "../utils/filterDispatchReports";


// =========================================
// TAB FILTER UTILITY
// =========================================

import filterDispatchReportsByTab
    from "../utils/filterDispatchReportsByTab";


// =========================================
// PAGE STYLES
// =========================================

import "../styles/report-dispatch.css";


// =========================================
// REPORT DISPATCH
// =========================================

const ReportDispatch = () => {


    // =========================================
    // REFRESH STATE
    // =========================================

    const [
        isRefreshing,
        setIsRefreshing,
    ] = useState(false);


    // =========================================
    // TEMPLATE MODAL
    // =========================================

    const [
        isTemplatesOpen,
        setIsTemplatesOpen,
    ] = useState(false);


    // =========================================
    // SELECTED TEMPLATE
    // =========================================

    const [
        selectedTemplate,
        setSelectedTemplate,
    ] = useState(null);


    // =========================================
    // ACTIVE TAB
    // =========================================

    const [
        activeTab,
        setActiveTab,
    ] = useState(
        REPORT_DISPATCH_TAB.ALL
    );


    // =========================================
    // FILTER STATE
    // =========================================

    const {
        filters,

        onFilterChange,

        clearFilters,

    } =
        useReportDispatchFilters();


    // =========================================
    // PAGINATION STATE
    // =========================================

    const [
        page,
        setPage,
    ] = useState(1);


    const [
        rowsPerPage,
        setRowsPerPage,
    ] = useState(10);


    // =========================================
    // FILTER REPORTS
    // =========================================

    const filteredReports =
        useMemo(
            () => {

                return filterDispatchReports(
                    reportDispatchMockData,
                    filters
                );

            },
            [
                filters,
            ]
        );


    // =========================================
    // TAB FILTER
    // =========================================

    const visibleReports =
        useMemo(
            () => {

                return filterDispatchReportsByTab(
                    filteredReports,
                    activeTab
                );

            },
            [
                filteredReports,
                activeTab,
            ]
        );


    // =========================================
    // PAGINATED REPORTS
    // =========================================

    const paginatedReports =
        useMemo(
            () => {

                const startIndex =
                    (
                        page - 1
                    ) *
                    rowsPerPage;


                const endIndex =
                    startIndex +
                    rowsPerPage;


                return visibleReports.slice(
                    startIndex,
                    endIndex
                );

            },
            [
                visibleReports,
                page,
                rowsPerPage,
            ]
        );


    // =========================================
    // TAB COUNTS
    // =========================================
    //
    // Counts are calculated from the
    // filter result, not hardcoded.
    //
    // =========================================

    const tabsWithCounts =
        useMemo(
            () => {

                return reportDispatchTabs.map(
                    (
                        tab
                    ) => {

                        const tabReports =
                            filterDispatchReportsByTab(
                                filteredReports,
                                tab.key
                            );


                        return {

                            ...tab,

                            count:
                                tabReports.length,

                        };

                    }
                );

            },
            [
                filteredReports,
            ]
        );


    // =========================================
    // FILTER CHANGE
    // =========================================

    const handleFilterChange = (
        updatedFilters
    ) => {

        onFilterChange(
            updatedFilters
        );


        // Filter change ke baad
        // first page par reset.

        setPage(1);

    };


    // =========================================
    // CLEAR FILTERS
    // =========================================

    const handleClearFilters = () => {

        clearFilters();


        // Filters clear hone ke baad
        // first page par reset.

        setPage(1);

    };


    // =========================================
    // TAB CHANGE
    // =========================================

    const handleTabChange = (
        tab
    ) => {

        setActiveTab(
            tab
        );


        // Tab change ke baad
        // first page par reset.

        setPage(1);

    };


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


        if (
            !newRowsPerPage ||
            newRowsPerPage <= 0
        ) {

            return;

        }


        setRowsPerPage(
            newRowsPerPage
        );


        // Page size change hone par
        // first page par reset.

        setPage(1);

    };


    // =========================================
    // REFRESH
    // =========================================

    const handleRefresh =
        async () => {

            if (
                isRefreshing
            ) {

                return;

            }


            setIsRefreshing(
                true
            );


            try {

                // =================================
                // RESET PAGINATION
                // =================================

                setPage(1);

                setRowsPerPage(10);


                // =================================
                // TEMPORARY REFRESH
                // =================================
                //
                // Backend/API integration ke baad
                // yahan actual service call aayegi.
                //
                // =================================

                await new Promise(
                    (
                        resolve
                    ) => {

                        setTimeout(
                            resolve,
                            1500
                        );

                    }
                );

            }
            catch (
                error
            ) {

                console.error(
                    "Report dispatch refresh failed:",
                    error
                );

            }
            finally {

                setIsRefreshing(
                    false
                );

            }

        };


    // =========================================
    // SETTINGS
    // =========================================

    const handleSettings = () => {

        /*
         * DispatchSettingsModal future mein
         * yahan integrate hoga.
         */

    };


    // =========================================
    // TEMPLATES
    // =========================================

    const handleTemplates = () => {

        if (
            isRefreshing
        ) {

            return;

        }


        setIsTemplatesOpen(
            true
        );

    };


    // =========================================
    // CLOSE TEMPLATES
    // =========================================

    const handleCloseTemplates = () => {

        setIsTemplatesOpen(
            false
        );

    };


    // =========================================
    // SELECT TEMPLATE
    // =========================================

    const handleSelectTemplate = (
        template
    ) => {

        if (
            !template
        ) {

            return;

        }


        setSelectedTemplate(
            template
        );

    };


    // =========================================
    // APPLY TEMPLATE
    // =========================================

    const handleApplyTemplate = () => {

        if (
            !selectedTemplate
        ) {

            return;

        }


        /*
         * Future dispatch workflow:
         *
         * selectedTemplate.id
         *
         * dispatch request ke saath jayega.
         */


        setIsTemplatesOpen(
            false
        );

    };


    // =========================================
    // VIEW REPORT
    // =========================================

    const handleViewReport = (
        report
    ) => {

        console.log(
            "View report:",
            report
        );

    };


    // =========================================
    // DISPATCH REPORT
    // =========================================

    const handleDispatchReport = (
        report
    ) => {

        console.log(
            "Dispatch report:",
            report
        );

    };


    // =========================================
    // DELIVERY HISTORY
    // =========================================

    const handleDeliveryHistory = (
        report
    ) => {

        console.log(
            "Delivery history:",
            report
        );

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <main
            className="
                report-dispatch-page
            "
        >

            {/* =================================
                HEADER
            ================================= */}

            <ReportDispatchHeader

                onSettings={
                    handleSettings
                }

                onTemplates={
                    handleTemplates
                }

                onRefresh={
                    handleRefresh
                }

                isRefreshing={
                    isRefreshing
                }

            />


            {/* =================================
                PAGE CONTENT
            ================================= */}

            <div
                className="
                    report-dispatch-page__content
                "
            >

                {/* =================================
                    STATS
                ================================= */}

                <ReportDispatchStatsCards

                    stats={{

                        reportsToDispatch:
                            filteredReports.length,

                        dispatchedToday:
                            0,

                        deliveredToday:
                            0,

                        failedToday:
                            0,

                        pendingReports:
                            0,

                    }}

                />


                {/* =================================
                    FILTERS
                ================================= */}

                <ReportDispatchFilters

                    filters={
                        filters
                    }

                    filterConfig={
                        reportDispatchFilterConfig
                    }

                    onFilterChange={
                        handleFilterChange
                    }

                    onClearFilters={
                        handleClearFilters
                    }

                />


                {/* =================================
                    TABS
                ================================= */}

                <ReportDispatchTabs

                    tabs={
                        tabsWithCounts
                    }

                    activeTab={
                        activeTab
                    }

                    onTabChange={
                        handleTabChange
                    }

                />


                {/* =================================
                    TABLE
                ================================= */}

                <ReportDispatchTable

                    reports={
                        paginatedReports
                    }

                    columns={
                        reportDispatchColumns
                    }

                    onView={
                        handleViewReport
                    }

                    onDispatch={
                        handleDispatchReport
                    }

                    onHistory={
                        handleDeliveryHistory
                    }

                />


                {/* =================================
                    PAGINATION
                ================================= */}

                <Pagination

                    page={
                        page
                    }

                    rowsPerPage={
                        rowsPerPage
                    }

                    totalRows={
                        visibleReports.length
                    }

                    onPageChange={
                        handlePageChange
                    }

                    onRowsPerPageChange={
                        handleRowsPerPageChange
                    }

                />

            </div>


            {/* =================================
                TEMPLATES MODAL
            ================================= */}

            <ReportTemplatesModal

                isOpen={
                    isTemplatesOpen
                }

                templates={
                    reportDispatchTemplates
                }

                selectedTemplateId={
                    selectedTemplate?.id ||
                    null
                }

                onSelect={
                    handleSelectTemplate
                }

                onClose={
                    handleCloseTemplates
                }

                onApply={
                    handleApplyTemplate
                }

            />

        </main>

    );

};


export default ReportDispatch;