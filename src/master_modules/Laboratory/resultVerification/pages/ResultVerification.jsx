import {
    useMemo,
    useState,
} from "react";


// =========================================
// COMPONENTS
// =========================================

import ResultVerificationHeader
    from "../components/Header/ResultVerificationHeader";

import ResultVerificationStatsCards
    from "../components/StatsCards/ResultVerificationStatsCards";

import ResultVerificationFilters
    from "../components/Filters/ResultVerificationFilters";

import ResultVerificationTabs
    from "../components/Tabs/ResultVerificationTabs";

import ResultVerificationTable
    from "../components/Table/ResultVerificationTable";

import ResultVerificationWorkspace
    from "../components/Workspace/ResultVerificationWorkspace";


// =========================================
// TOAST
// =========================================

import ToastNotification
    from "@/master_shared/components/common/ToastNotification/ToastNotification";


// =========================================
// REUSABLE COMPONENT
// =========================================

import Pagination
    from "@/master_shared/components/Pagination/Pagination";


// =========================================
// CONFIG
// =========================================

import statsCards
    from "../config/statsCards";

import filters
    from "../config/filters";

import tabs
    from "../config/tabs";

import resultVerificationColumns
    from "../config/resultVerificationColumns";


// =========================================
// MOCK
// =========================================

import resultVerificationData
    from "../mock/resultVerification.mock";


// =========================================
// UTILS
// =========================================

import filterResultVerification
    from "../utils/filterResultVerification";

import getResultVerificationStats
    from "../utils/getResultVerificationStats";


// =========================================
// HOOKS
// =========================================

import useResultVerificationPagination
    from "../hooks/useResultVerificationPagination";


// =========================================
// STYLES
// =========================================

import "../styles/resultVerification.css";


// =========================================
// COMPONENT
// =========================================

const ResultVerification = () => {


    // =========================================
    // REFRESH STATE
    // =========================================

    const [
        isRefreshing,
        setIsRefreshing,
    ] = useState(false);


    // =========================================
    // LOADING STATE
    // =========================================

    const [
        isLoading,
        setIsLoading,
    ] = useState(false);


    // =========================================
    // ACTIVE TAB
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
    ] = useState(
        filters.defaultValues
    );


    // =========================================
    // SELECTED RESULT
    // =========================================

    const [
        selectedResult,
        setSelectedResult,
    ] = useState(null);


    // =========================================
    // WORKSPACE STATE
    // =========================================

    const [
        isWorkspaceOpen,
        setIsWorkspaceOpen,
    ] = useState(false);


    // =========================================
    // TOAST STATE
    // =========================================

    const [
        toast,
        setToast,
    ] = useState({

        open:
            false,

        type:
            "success",

        title:
            "",

        message:
            "",

        duration:
            4000,

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

            open:
                true,

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
            (
                previousToast
            ) => ({

                ...previousToast,

                open:
                    false,

            })
        );

    };


    // =========================================
    // STATS
    // =========================================

    const verificationStats =
        useMemo(() => {

            return getResultVerificationStats(
                resultVerificationData
            );

        }, []);


    // =========================================
    // DYNAMIC STATS CARDS
    // =========================================

    const dynamicStatsCards =
        useMemo(() => {

            return statsCards.map(
                (
                    card
                ) => ({

                    ...card,

                    value:
                        verificationStats[
                            card.filterId
                        ] || 0,

                })
            );

        }, [
            verificationStats,
        ]);


    // =========================================
    // DYNAMIC TABS
    // =========================================

    const dynamicTabs =
        useMemo(() => {

            return tabs.map(
                (
                    tab
                ) => {

                    let count = 0;


                    switch (
                        tab.id
                    ) {

                        case "pending":

                            count =
                                verificationStats
                                    .pending;

                            break;


                        case "underReview":

                            count =
                                verificationStats
                                    .underReview;

                            break;


                        case "critical":

                            count =
                                verificationStats
                                    .critical;

                            break;


                        case "verified":

                            count =
                                verificationStats
                                    .verified;

                            break;


                        case "rejected":

                            count =
                                verificationStats
                                    .rejected;

                            break;


                        default:

                            count =
                                0;

                    }


                    return {

                        ...tab,

                        count,

                    };

                }
            );

        }, [
            verificationStats,
        ]);


    // =========================================
    // FILTERED DATA
    // =========================================

    const filteredData =
        useMemo(() => {

            return filterResultVerification(

                resultVerificationData,

                filterValues,

                activeTab

            );

        }, [
            filterValues,
            activeTab,
        ]);


    // =========================================
    // PAGINATION
    // =========================================

    const {

        page,

        rowsPerPage,

        totalRows,

        paginatedData,

        onPageChange,

        onRowsPerPageChange,

        resetPagination,

    } =
        useResultVerificationPagination(
            filteredData
        );


    // =========================================
    // HEADER ACTION
    // =========================================

    const handleHeaderAction = (
        actionId
    ) => {

        switch (
            actionId
        ) {


            // =====================================
            // EXPORT
            // =====================================

            case "exportResults":

                handleExportResults();

                break;


            // =====================================
            // PRINT
            // =====================================

            case "printWorklist":

                handlePrintWorklist();

                break;


            // =====================================
            // REFRESH
            // =====================================

            case "refresh":

                handleRefresh();

                break;


            // =====================================
            // DEFAULT
            // =====================================

            default:

                console.warn(
                    "Unknown Result Verification header action:",
                    actionId
                );

        }

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

        setIsLoading(
            true
        );


        /*
         * =====================================
         * BACKEND READY
         * =====================================
         *
         * Later:
         *
         * const response =
         *     await resultVerificationService
         *         .getWorklist();
         *
         * setTableData(
         *     response.data
         * );
         *
         * =====================================
         */


        setTimeout(() => {

            setIsRefreshing(
                false
            );

            setIsLoading(
                false
            );


            showToast({

                type:
                    "success",

                title:
                    "Worklist Refreshed",

                message:
                    "Result verification worklist has been refreshed successfully.",

                duration:
                    3000,

            });

        }, 700);

    };


    // =========================================
    // EXPORT
    // =========================================

    const handleExportResults = () => {

        console.log(
            "Export Result Verification:",
            filteredData
        );


        /*
         * =====================================
         * BACKEND READY
         * =====================================
         *
         * Later:
         *
         * await resultVerificationService
         *     .exportResults(filteredData);
         *
         * =====================================
         */


        showToast({

            type:
                "info",

            title:
                "Export Results",

            message:
                "Result verification export has been initiated.",

            duration:
                3000,

        });

    };


    // =========================================
    // PRINT
    // =========================================

    const handlePrintWorklist = () => {

        console.log(
            "Print Result Verification Worklist"
        );


        /*
         * =====================================
         * BACKEND / PRINT READY
         * =====================================
         *
         * window.print();
         *
         * =====================================
         */


        showToast({

            type:
                "info",

            title:
                "Print Worklist",

            message:
                "Print preview will be available here.",

            duration:
                3000,

        });

    };


    // =========================================
    // FILTER CHANGE
    // =========================================

    const handleFilterChange = (
        filterId,
        value
    ) => {

        setFilterValues(
            (
                previousFilters
            ) => ({

                ...previousFilters,

                [filterId]:
                    value,

            })
        );


        // Filter change ke baad
        // first page par return.

        resetPagination();

    };


    // =========================================
    // RESET FILTERS
    // =========================================

    const handleResetFilters = () => {

        setFilterValues(
            filters.defaultValues
        );


        setActiveTab(
            "pending"
        );


        resetPagination();


        showToast({

            type:
                "success",

            title:
                "Filters Reset",

            message:
                "All result verification filters have been reset.",

            duration:
                2500,

        });

    };


    // =========================================
    // STAT CARD CLICK
    // =========================================

    const handleStatCardClick = (
        filterId
    ) => {

        switch (
            filterId
        ) {


            // =====================================
            // PENDING
            // =====================================

            case "pending":

                setActiveTab(
                    "pending"
                );

                setFilterValues(
                    (
                        previousFilters
                    ) => ({

                        ...previousFilters,

                        verificationStatus:
                            "pending",

                    })
                );

                break;


            // =====================================
            // UNDER REVIEW
            // =====================================

            case "underReview":

                setActiveTab(
                    "underReview"
                );

                setFilterValues(
                    (
                        previousFilters
                    ) => ({

                        ...previousFilters,

                        verificationStatus:
                            "underReview",

                    })
                );

                break;


            // =====================================
            // CRITICAL
            // =====================================

            case "critical":

                setActiveTab(
                    "critical"
                );

                setFilterValues(
                    (
                        previousFilters
                    ) => ({

                        ...previousFilters,

                        priority:
                            "critical",

                    })
                );

                break;


            // =====================================
            // VERIFIED
            // =====================================

            case "verified":

                setActiveTab(
                    "verified"
                );

                setFilterValues(
                    (
                        previousFilters
                    ) => ({

                        ...previousFilters,

                        verificationStatus:
                            "verified",

                    })
                );

                break;


            // =====================================
            // DEFAULT
            // =====================================

            default:

                console.warn(
                    "Unknown stat card filter:",
                    filterId
                );

        }


        resetPagination();

    };


    // =========================================
    // TAB CHANGE
    // =========================================

    const handleTabChange = (
        tabId
    ) => {

        if (
            !tabId
        ) {

            return;

        }


        setActiveTab(
            tabId
        );


        switch (
            tabId
        ) {


            // =====================================
            // PENDING
            // =====================================

            case "pending":

                setFilterValues(
                    (
                        previousFilters
                    ) => ({

                        ...previousFilters,

                        verificationStatus:
                            "pending",

                    })
                );

                break;


            // =====================================
            // UNDER REVIEW
            // =====================================

            case "underReview":

                setFilterValues(
                    (
                        previousFilters
                    ) => ({

                        ...previousFilters,

                        verificationStatus:
                            "underReview",

                    })
                );

                break;


            // =====================================
            // CRITICAL
            // =====================================

            case "critical":

                setFilterValues(
                    (
                        previousFilters
                    ) => ({

                        ...previousFilters,

                        priority:
                            "critical",

                    })
                );

                break;


            // =====================================
            // VERIFIED
            // =====================================

            case "verified":

                setFilterValues(
                    (
                        previousFilters
                    ) => ({

                        ...previousFilters,

                        verificationStatus:
                            "verified",

                    })
                );

                break;


            // =====================================
            // REJECTED
            // =====================================

            case "rejected":

                setFilterValues(
                    (
                        previousFilters
                    ) => ({

                        ...previousFilters,

                        verificationStatus:
                            "rejected",

                    })
                );

                break;


            // =====================================
            // DEFAULT
            // =====================================

            default:

                console.warn(
                    "Unknown verification tab:",
                    tabId
                );

        }


        resetPagination();

    };


    // =========================================
    // OPEN WORKSPACE
    // =========================================

    const openWorkspace = (
        rowData
    ) => {

        if (
            !rowData
        ) {

            showToast({

                type:
                    "error",

                title:
                    "Unable to Open Result",

                message:
                    "No result data was provided.",

                duration:
                    3000,

            });

            return;

        }


        setSelectedResult(
            rowData
        );


        setIsWorkspaceOpen(
            true
        );

    };


    // =========================================
    // CLOSE WORKSPACE
    // =========================================

    const closeWorkspace = () => {

        setIsWorkspaceOpen(
            false
        );


        setSelectedResult(
            null
        );

    };


    // =========================================
    // TABLE ACTION
    // =========================================

    const handleTableAction = (
        action,
        rowData
    ) => {

        if (
            !rowData
        ) {

            showToast({

                type:
                    "error",

                title:
                    "Action Failed",

                message:
                    "Selected result data is not available.",

                duration:
                    3000,

            });

            return;

        }


        console.log(
            "Verification Action:",
            action,
            rowData
        );


        switch (
            action
        ) {


            // =====================================
            // VIEW
            // =====================================

            case "view":

            case "viewDetails":

            case "viewResult":

            case "openWorkspace":

                openWorkspace(
                    rowData
                );

                break;


            // =====================================
            // START REVIEW
            // =====================================

            case "startReview":

            case "review":

            case "verify":

            case "verifyResult":

            case "enterResult":

                openWorkspace(
                    rowData
                );

                break;


            // =====================================
            // PREVIOUS RESULTS
            // =====================================

            case "previousResults":

                showToast({

                    type:
                        "info",

                    title:
                        "Previous Results",

                    message:
                        `Previous results for ${rowData?.accessionNo || "this patient"} will be loaded from the backend.`,

                    duration:
                        3000,

                });

                break;


            // =====================================
            // VERIFICATION HISTORY
            // =====================================

            case "verificationHistory":

            case "history":

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


            // =====================================
            // DEFAULT
            // =====================================

            default:

                console.warn(
                    "Unknown verification table action:",
                    action
                );

                showToast({

                    type:
                        "info",

                    title:
                        "Action Selected",

                    message:
                        `Action "${action}" is not connected yet.`,

                    duration:
                        2500,

                });

        }

    };


    // =========================================
    // VERIFY RESULT
    // =========================================

    const handleVerifyResult = (
        result
    ) => {

        if (
            !result
        ) {

            showToast({

                type:
                    "error",

                title:
                    "Verification Failed",

                message:
                    "Result information is missing.",

                duration:
                    3000,

            });

            return;

        }


        console.log(
            "Verify Result:",
            result
        );


        /*
         * =====================================
         * BACKEND READY
         * =====================================
         *
         * Later:
         *
         * const response =
         *     await resultVerificationService
         *         .verifyResult(
         *             result.id
         *         );
         *
         * =====================================
         */


        showToast({

            type:
                "success",

            title:
                "Result Verified",

            message:
                `${result?.accessionNo || "Laboratory result"} has been verified successfully.`,

            duration:
                3500,

        });


        // Mock mode mein workspace close.

        closeWorkspace();

    };


    // =========================================
    // REJECT RESULT
    // =========================================

    const handleRejectResult = (
        result,
        remarks
    ) => {

        if (
            !result
        ) {

            showToast({

                type:
                    "error",

                title:
                    "Rejection Failed",

                message:
                    "Result information is missing.",

                duration:
                    3000,

            });

            return;

        }


        console.log(
            "Reject Result:",
            result,
            remarks
        );


        /*
         * =====================================
         * BACKEND READY
         * =====================================
         *
         * Later:
         *
         * await resultVerificationService
         *     .rejectResult(
         *         result.id,
         *         remarks
         *     );
         *
         * =====================================
         */


        showToast({

            type:
                "success",

            title:
                "Result Rejected",

            message:
                `${result?.accessionNo || "Laboratory result"} has been rejected successfully.`,

            duration:
                3500,

        });


        // Mock mode mein workspace close.

        closeWorkspace();

    };


    // =========================================
    // WORKSPACE TOAST HANDLER
    // =========================================

    const handleWorkspaceToast = (
        toastData
    ) => {

        if (
            !toastData
        ) {

            return;

        }


        showToast({

            type:
                toastData.type ||
                "info",

            title:
                toastData.title ||
                "Result Verification",

            message:
                toastData.message ||
                "",

            duration:
                toastData.duration ||
                3000,

        });

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <main
            className="
                result-verification-page
            "
        >


            {/* =================================
                HEADER
            ================================= */}

            <ResultVerificationHeader

                onAction={
                    handleHeaderAction
                }

                isRefreshing={
                    isRefreshing
                }

            />


            {/* =================================
                PAGE CONTENT
            ================================= */}

            <section
                className="
                    result-verification-page__content
                "
            >


                {/* =================================
                    WORKSPACE
                ================================= */}

                {isWorkspaceOpen && (

                    <ResultVerificationWorkspace

                        result={
                            selectedResult
                        }

                        onClose={
                            closeWorkspace
                        }

                        onVerify={
                            handleVerifyResult
                        }

                        onReject={
                            handleRejectResult
                        }

                        onToast={
                            handleWorkspaceToast
                        }

                    />

                )}


                {/* =================================
                    WORKLIST
                ================================= */}

                {!isWorkspaceOpen && (

                    <>


                        {/* =============================
                            STATS CARDS
                        ============================= */}

                        <ResultVerificationStatsCards

                            stats={
                                dynamicStatsCards
                            }

                            onCardClick={
                                handleStatCardClick
                            }

                        />


                        {/* =============================
                            FILTERS
                        ============================= */}

                        <ResultVerificationFilters

                            filterValues={
                                filterValues
                            }

                            onFilterChange={
                                handleFilterChange
                            }

                            onReset={
                                handleResetFilters
                            }

                            departments={
                                filters.departments
                            }

                            analyzers={
                                filters.analyzers
                            }

                            testNames={
                                filters.testNames
                            }

                        />


                        {/* =============================
                            TABS
                        ============================= */}

                        <ResultVerificationTabs

                            tabs={
                                dynamicTabs
                            }

                            activeTab={
                                activeTab
                            }

                            onTabChange={
                                handleTabChange
                            }

                        />


                        {/* =============================
                            TABLE
                        ============================= */}

                        <ResultVerificationTable

                            data={
                                paginatedData
                            }

                            columns={
                                resultVerificationColumns
                            }

                            onAction={
                                handleTableAction
                            }

                            isLoading={
                                isLoading
                            }

                        />


                        {/* =============================
                            PAGINATION
                        ============================= */}

                        {totalRows > 0 && (

                            <div
                                className="
                                    result-verification-page__pagination
                                "
                            >

                                <Pagination

                                    page={
                                        page
                                    }

                                    rowsPerPage={
                                        rowsPerPage
                                    }

                                    totalRows={
                                        totalRows
                                    }

                                    onPageChange={
                                        onPageChange
                                    }

                                    onRowsPerPageChange={
                                        onRowsPerPageChange
                                    }

                                />

                            </div>

                        )}

                    </>

                )}


            </section>


            {/* =================================
                GLOBAL TOAST
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


export default ResultVerification;