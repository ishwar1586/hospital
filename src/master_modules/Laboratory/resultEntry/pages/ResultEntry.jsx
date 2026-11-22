import {
    useMemo,
    useState,
    useEffect,
} from "react";


// =========================================
// COMPONENTS
// =========================================

import ResultEntryHeader
    from "../components/Header/ResultEntryHeader";

import ResultEntryStatsCards
    from "../components/StatsCards/ResultEntryStatsCards";

import ResultEntryFilters
    from "../components/Filters/ResultEntryFilters";

import ResultEntryTabs
    from "../components/Tabs/ResultEntryTabs";

import ResultEntryTable
    from "../components/Table/ResultEntryTable";

import ResultEntryWorkspace
    from "../components/Workspace/ResultEntryWorkspace";


// =========================================
// TOAST
// =========================================

import ToastNotification
    from "@/master_shared/components/common/ToastNotification/ToastNotification";


// =========================================
// REUSABLE PAGINATION
// =========================================

import Pagination
    from "@/master_shared/components/Pagination/Pagination";


// =========================================
// CONFIG
// =========================================

import statsCards
    from "../config/statsCards";

import tabs
    from "../config/tabs";


// =========================================
// MOCK
// =========================================

import resultEntryData
    from "../mock/resultEntry.mock";


// =========================================
// UTILS
// =========================================

import filterResultEntry
    from "../utils/filterResultEntry";


// =========================================
// STYLES
// =========================================

import "../styles/resultEntry.css";


// =========================================
// DEFAULT FILTERS
// =========================================

const DEFAULT_FILTERS = {

    search: "",

    department: "all",

    analyzer: "all",

    testName: "all",

    resultStatus: "all",

};


// =========================================
// COMPONENT
// =========================================

const ResultEntry = () => {


    // =========================================
    // TABLE DATA
    // =========================================

    const [
        tableData,
        setTableData,
    ] = useState(
        resultEntryData
    );


    // =========================================
    // REFRESH STATE
    // =========================================

    const [
        isRefreshing,
        setIsRefreshing,
    ] = useState(false);


    // =========================================
    // ACTIVE WORKLIST TAB
    // =========================================

    const [
        activeTab,
        setActiveTab,
    ] = useState(
        "pending"
    );


    // =========================================
    // FILTER STATE
    // =========================================

    const [
        filterValues,
        setFilterValues,
    ] = useState({
        ...DEFAULT_FILTERS,
    });


    // =========================================
    // PAGINATION
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
    // SELECTED RESULT
    // =========================================

    const [
        selectedResult,
        setSelectedResult,
    ] = useState(null);


    // =========================================
    // WORKSPACE MODE
    // =========================================

    const [
        workspaceMode,
        setWorkspaceMode,
    ] = useState(
        "enter"
    );


    // =========================================
    // TOAST STATE
    // =========================================

    const [
        toast,
        setToast,
    ] = useState({

        open: false,

        type: "success",

        title: "",

        message: "",

        duration: 4000,

    });


    // =========================================
    // SHOW TOAST
    // =========================================

    const showToast = ({
        type = "success",
        title = "Success",
        message = "",
        duration = 4000,
    }) => {

        setToast({

            open: true,

            type,

            title,

            message,

            duration,

        });

    };


    // =========================================
    // CLOSE TOAST
    // =========================================

    const handleToastClose = () => {

        setToast(
            (previousToast) => ({

                ...previousToast,

                open: false,

            })
        );

    };


    // =========================================
    // NORMALIZE STATUS
    // =========================================

    const normalizeStatus = (
        status
    ) => {

        return String(
            status || ""
        )
            .trim()
            .toLowerCase()
            .replace(
                /[\s_-]+/g,
                ""
            );

    };


    // =========================================
    // TAB COUNTS
    // =========================================

    const tabCounts = useMemo(() => {

        const counts = {

            all:
                tableData.length,

            pending:
                0,

            inProgress:
                0,

            completed:
                0,

        };


        tableData.forEach(
            (item) => {

                const status =
                    normalizeStatus(
                        item.resultStatus ||
                        item.status
                    );


                if (
                    status ===
                    "pending"
                ) {

                    counts.pending += 1;

                }


                if (
                    status ===
                    "inprogress"
                ) {

                    counts.inProgress += 1;

                }


                if (
                    status === "completed" ||
                    status === "verified"
                ) {

                    counts.completed += 1;

                }

            }
        );


        return counts;

    }, [
        tableData,
    ]);


    // =========================================
    // TABS WITH COUNTS
    // =========================================

    const tabsWithCounts = useMemo(() => {

        return tabs.map(
            (tab) => ({

                ...tab,

                count:
                    tabCounts[
                        tab.id
                    ] ?? 0,

            })
        );

    }, [
        tabCounts,
    ]);


    // =========================================
    // FILTER DATA
    // =========================================

    const filteredData = useMemo(() => {

        return filterResultEntry(

            tableData,

            filterValues,

            activeTab

        );

    }, [

        tableData,

        filterValues,

        activeTab,

    ]);


    // =========================================
    // RESET PAGE WHEN FILTER/TAB CHANGES
    // =========================================

    useEffect(() => {

        setPage(1);

    }, [

        activeTab,

        filterValues,

    ]);


    // =========================================
    // KEEP PAGE VALID
    // =========================================

    useEffect(() => {

        const totalPages =
            Math.max(

                1,

                Math.ceil(
                    filteredData.length /
                    rowsPerPage
                )

            );


        if (
            page >
            totalPages
        ) {

            setPage(
                totalPages
            );

        }

    }, [

        filteredData.length,

        rowsPerPage,

        page,

    ]);


    // =========================================
    // PAGINATED DATA
    // =========================================

    const paginatedData = useMemo(() => {

        const startIndex =
            (page - 1) *
            rowsPerPage;


        const endIndex =
            startIndex +
            rowsPerPage;


        return filteredData.slice(

            startIndex,

            endIndex

        );

    }, [

        filteredData,

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
    // ROWS PER PAGE
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


        setPage(1);

    };


    // =========================================
    // FILTER CHANGE
    // =========================================

    const handleFilterChange = (
        filterId,
        value
    ) => {

        setFilterValues(
            (previousFilters) => ({

                ...previousFilters,

                [filterId]:
                    value,

            })
        );

    };


    // =========================================
    // RESET FILTERS
    // =========================================

    const handleResetFilters = () => {

        setFilterValues({

            ...DEFAULT_FILTERS,

        });

        setPage(1);

    };


    // =========================================
    // TAB CHANGE
    // =========================================

    const handleTabChange = (
        tabId
    ) => {

        setActiveTab(
            tabId
        );

        setPage(1);

    };


    // =========================================
    // REFRESH
    // =========================================

    const handleRefresh = () => {

        if (
            isRefreshing
        ) {

            return;

        }


        setIsRefreshing(
            true
        );


        /*
         * BACKEND LATER:
         *
         * const response =
         * await fetchResultEntry();
         *
         * setTableData(
         *     response.data
         * );
         */


        setTimeout(() => {

            setTableData([
                ...resultEntryData,
            ]);


            setPage(1);


            setIsRefreshing(
                false
            );


            showToast({

                type:
                    "success",

                title:
                    "Worklist Refreshed",

                message:
                    "Result worklist has been refreshed successfully.",

                duration:
                    3000,

            });

        }, 800);

    };


    // =========================================
    // OPEN WORKSPACE
    // =========================================

    const openWorkspace = (
        data,
        mode = "enter"
    ) => {

        if (!data) {

            return;

        }


        setSelectedResult(
            data
        );


        setWorkspaceMode(
            mode
        );

    };


    // =========================================
    // CLOSE WORKSPACE
    // =========================================

    const closeWorkspace = () => {

        setSelectedResult(
            null
        );


        setWorkspaceMode(
            "enter"
        );

    };


    // =========================================
    // HEADER ACTION
    // =========================================

    const handleHeaderAction = (
        actionId
    ) => {

        switch (
            actionId
        ) {


            // ================================
            // EXPORT RESULTS
            // ================================

            case "exportResults":

                showToast({

                    type:
                        "info",

                    title:
                        "Export Results",

                    message:
                        "Result export will be connected to the backend.",

                    duration:
                        3000,

                });

                break;


            // ================================
            // PRINT WORKLIST
            // ================================

            case "printWorklist":

                showToast({

                    type:
                        "info",

                    title:
                        "Print Worklist",

                    message:
                        "Print worklist will be connected to the backend.",

                    duration:
                        3000,

                });

                break;


            // ================================
            // REFRESH
            // ================================

            case "refresh":

                handleRefresh();

                break;


            // ================================
            // DEFAULT
            // ================================

            default:

                break;

        }

    };


    // =========================================
    // TABLE ACTION
    // =========================================

    const handleTableAction = (
        action,
        data
    ) => {

        switch (
            action
        ) {


            // ================================
            // ENTER RESULT
            // ================================

            case "enterResult":

                openWorkspace(
                    data,
                    "enter"
                );

                break;


            // ================================
            // VIEW DETAILS
            // ================================

            case "viewDetails":

                showToast({

                    type:
                        "info",

                    title:
                        "View Details",

                    message:
                        `Viewing ${
                            data?.accessionNo ||
                            "selected result"
                        }.`
                        ,

                    duration:
                        2500,

                });

                break;


            // ================================
            // EDIT RESULT
            // ================================

            case "editResult":

                openWorkspace(
                    data,
                    "edit"
                );

                break;


            // ================================
            // PREVIOUS RESULTS
            // ================================

            case "previousResults":

                showToast({

                    type:
                        "info",

                    title:
                        "Previous Results",

                    message:
                        "Previous result history will be loaded from the backend.",

                    duration:
                        3000,

                });

                break;


            // ================================
            // VERIFICATION HISTORY
            // ================================

            case "verificationHistory":

                showToast({

                    type:
                        "info",

                    title:
                        "Verification History",

                    message:
                        "Verification history will be loaded from the backend.",

                    duration:
                        3000,

                });

                break;


            // ================================
            // DEFAULT
            // ================================

            default:

                break;

        }

    };


    // =========================================
    // SAVE DRAFT
    // =========================================

    const handleSaveDraft = (
        resultData
    ) => {

        console.log(
            "Save Draft:",
            resultData
        );


        if (!resultData) {

            showToast({

                type:
                    "error",

                title:
                    "Save Failed",

                message:
                    "Unable to save the result draft.",

                duration:
                    3500,

            });

            return;

        }


        const {
            payload,
            data,
        } = resultData;


        /*
         * BACKEND LATER:
         *
         * await saveResultDraft(
         *     payload
         * );
         */


        if (!data) {

            showToast({

                type:
                    "error",

                title:
                    "Save Failed",

                message:
                    "Patient result data is missing.",

                duration:
                    3500,

            });

            return;

        }


        // =====================================
        // UPDATE MOCK TABLE DATA
        // =====================================

        setTableData(
            (previousData) => {

                return previousData.map(
                    (item) => {

                        if (
                            item.id !==
                            data.id
                        ) {

                            return item;

                        }


                        return {

                            ...item,

                            resultStatus:
                                item.resultStatus ||
                                "Pending",

                            status:
                                item.status ||
                                "Pending",

                            draftSaved:
                                true,

                            lastSavedAt:
                                new Date().toISOString(),

                        };

                    }
                );

            }
        );


        showToast({

            type:
                "success",

            title:
                "Result Saved",

            message:
                "Test results have been saved as draft.",

            duration:
                3000,

        });

    };


    // =========================================
    // VALIDATE RESULT
    // =========================================

    const handleValidateResult = (
        validationData
    ) => {

        console.log(
            "Validation Result:",
            validationData
        );


        // =====================================
        // SAFETY
        // =====================================

        if (
            !validationData
        ) {

            showToast({

                type:
                    "error",

                title:
                    "Validation Failed",

                message:
                    "Unable to validate the entered results.",

                duration:
                    3500,

            });

            return;

        }


        const validation =
            validationData.validation;


        // =====================================
        // VALIDATION ERROR
        // =====================================

        if (
            validation?.hasErrors
        ) {

            const errorCount =
                validation.errors?.length ||
                0;


            showToast({

                type:
                    "error",

                title:
                    "Validation Failed",

                message:
                    `${errorCount} result ${
                        errorCount === 1
                            ? "requires"
                            : "require"
                    } attention before continuing.`,

                duration:
                    4500,

            });


            return;

        }


        // =====================================
        // VALIDATION WARNING
        // =====================================

        if (
            validation?.hasWarnings
        ) {

            const warningCount =
                validation.warnings?.length ||
                0;


            showToast({

                type:
                    "warning",

                title:
                    "Validation Completed with Warnings",

                message:
                    `${warningCount} result ${
                        warningCount === 1
                            ? "is"
                            : "are"
                    } outside the configured reference range.`,

                duration:
                    4500,

            });


            return;

        }


        // =====================================
        // SUCCESS
        // =====================================

        showToast({

            type:
                "success",

            title:
                "Validation Successful",

            message:
                "All entered results passed validation.",

            duration:
                3500,

        });

    };


    // =========================================
    // COMPLETE & SEND
    // =========================================

    const handleCompleteResult = (
        resultData
    ) => {

        console.log(
            "Complete & Send:",
            resultData
        );


        // =====================================
        // SAFETY
        // =====================================

        if (
            !resultData
        ) {

            showToast({

                type:
                    "error",

                title:
                    "Completion Failed",

                message:
                    "Unable to complete the result.",

                duration:
                    3500,

            });

            return;

        }


        const {
            success,
            validation,
            payload,
            data,
        } = resultData;


        // =====================================
        // VALIDATION ERROR
        // =====================================

        if (
            !success ||
            validation?.hasErrors
        ) {

            const errorCount =
                validation?.errors?.length ||
                0;


            showToast({

                type:
                    "error",

                title:
                    "Cannot Complete Result",

                message:
                    `${errorCount || 1} result ${
                        errorCount === 1
                            ? "requires"
                            : "require"
                    } attention before completion.`,

                duration:
                    4500,

            });


            return;

        }


        /*
         * BACKEND LATER:
         *
         * await completeResult(
         *     payload
         * );
         */


        // =====================================
        // UPDATE MOCK DATA
        // =====================================

        if (
            data?.id
        ) {

            setTableData(
                (previousData) => {

                    return previousData.map(
                        (item) => {

                            if (
                                item.id !==
                                data.id
                            ) {

                                return item;

                            }


                            return {

                                ...item,

                                resultStatus:
                                    "Completed",

                                status:
                                    "Completed",

                                completedAt:
                                    new Date().toISOString(),

                                completed:
                                    true,

                            };

                        }
                    );

                }
            );

        }


        // =====================================
        // SUCCESS TOAST
        // =====================================

        showToast({

            type:
                "success",

            title:
                "Result Completed",

            message:
                "Results have been completed and sent successfully.",

            duration:
                4000,

        });


        // =====================================
        // CLOSE WORKSPACE
        // =====================================

        closeWorkspace();

    };


    // =========================================
    // WORKSPACE
    // =========================================

    if (
        selectedResult
    ) {

        return (

            <main
                className="
                    result-entry-page
                    result-entry-page--workspace
                "
            >

                <ResultEntryWorkspace

                    data={
                        selectedResult
                    }

                    mode={
                        workspaceMode
                    }

                    onClose={
                        closeWorkspace
                    }

                    onSaveDraft={
                        handleSaveDraft
                    }

                    onValidate={
                        handleValidateResult
                    }

                    onComplete={
                        handleCompleteResult
                    }

                />


                {/* =================================
                    TOAST
                ================================= */}

                <ToastNotification

                    open={
                        toast.open
                    }

                    type={
                        toast.type
                    }

                    title={
                        toast.title
                    }

                    message={
                        toast.message
                    }

                    duration={
                        toast.duration
                    }

                    onClose={
                        handleToastClose
                    }

                />

            </main>

        );

    }


    // =========================================
    // WORKLIST
    // =========================================

    return (

        <main
            className="
                result-entry-page
            "
        >


            {/* =================================
                HEADER
            ================================= */}

            <ResultEntryHeader

                onAction={
                    handleHeaderAction
                }

                isRefreshing={
                    isRefreshing
                }

            />


            {/* =================================
                STATS CARDS
            ================================= */}

            <ResultEntryStatsCards

                stats={
                    statsCards
                }

            />


            {/* =================================
                FILTERS
            ================================= */}

            <ResultEntryFilters

                filterValues={
                    filterValues
                }

                onFilterChange={
                    handleFilterChange
                }

                onReset={
                    handleResetFilters
                }

            />


            {/* =================================
                TABS
            ================================= */}

            <ResultEntryTabs

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

            <ResultEntryTable

                data={
                    paginatedData
                }

                onAction={
                    handleTableAction
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
                    filteredData.length
                }

                onPageChange={
                    handlePageChange
                }

                onRowsPerPageChange={
                    handleRowsPerPageChange
                }

            />


            {/* =================================
                TOAST
            ================================= */}

            <ToastNotification

                open={
                    toast.open
                }

                type={
                    toast.type
                }

                title={
                    toast.title
                }

                message={
                    toast.message
                }

                duration={
                    toast.duration
                }

                onClose={
                    handleToastClose
                }

            />

        </main>

    );

};


export default ResultEntry;