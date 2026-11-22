import {
    useMemo,
    useState,
} from "react";


// =========================================
// COMPONENTS
// =========================================

import TestQueueHeader
    from "../components/Header/TestQueueHeader";

import TestQueueStatsCards
    from "../components/StatsCards/TestQueueStatsCards";

import TestQueueFilters
    from "../components/Filters/TestQueueFilters";

import TestQueueTabs
    from "../components/Tabs/TestQueueTabs";

import TestQueueTable
    from "../components/Table/TestQueueTable";

import ViewTestQueueModal
    from "../components/modals/ViewTestQueueModal";

import UpdatePriorityModal
    from "../components/modals/UpdatePriorityModal";

import ReceiveFromProcessingModal
    from "../components/modals/ReceiveFromProcessingModal";

import EditTestQueueModal
    from "../components/modals/EditTestQueueModal";

import StartProcessingModal
    from "../components/modals/StartProcessingModal";

import PutOnHoldModal
    from "../components/modals/PutOnHoldModal";


// =========================================
// PAGINATION
// =========================================

import Pagination
    from "@/master_shared/components/Pagination/Pagination";

import ToastNotification
    from "@/master_shared/components/common/ToastNotification/ToastNotification";

// =========================================
// CONFIG
// =========================================

import statsCards
    from "../config/statsCards";


// =========================================
// MOCK DATA
// =========================================

import testQueueData, {
    processingSamples,
} from "../mock/testQueue.mock";


// =========================================
// UTILS
// =========================================

import filterTestQueue
    from "../utils/filterTestQueue";


// =========================================
// STYLES
// =========================================

import "../styles/testQueue.css";


// =========================================
// DEFAULT FILTERS
// =========================================

const DEFAULT_FILTERS = {

    search: "",

    department: "all",

    analyzer: "all",

    testName: "all",

    priority: "all",

    tatStatus: "all",

    status: "all",

};


// =========================================
// COMPONENT
// =========================================

const TestQueue = () => {

    // =========================================
    // PUT ON HOLD STATE
    // =========================================

    const [
        isPutOnHoldModalOpen,
        setIsPutOnHoldModalOpen,
    ] = useState(false);


    const [
        isPuttingOnHold,
        setIsPuttingOnHold,
    ] = useState(false);

    // =========================================
    // PUT ON HOLD MODAL CLOSE
    // =========================================

    const handlePutOnHoldModalClose = () => {

        if (isPuttingOnHold) {
            return;
        }

        setIsPutOnHoldModalOpen(
            false
        );

        setSelectedQueueItem(
            null
        );

    };

    // =========================================
    // PUT TEST ON HOLD
    // =========================================

    const handlePutOnHold = (
        holdData,
        queueItem
    ) => {

        if (isPuttingOnHold) {
            return;
        }

        if (!queueItem) {
            return;
        }

        setIsPuttingOnHold(
            true
        );


        /*
         * =====================================
         * BACKEND READY
         * =====================================
         *
         * Later:
         *
         * await putTestOnHold(
         *     queueItem.id,
         *     holdData
         * );
         *
         * =====================================
         */

        setTimeout(() => {

            console.log(
                "Test put on hold:",
                {
                    queueItem,
                    holdData,
                }
            );


            // =================================
            // STOP LOADING
            // =================================

            setIsPuttingOnHold(
                false
            );


            // =================================
            // CLOSE MODAL
            // =================================

            setIsPutOnHoldModalOpen(
                false
            );


            setSelectedQueueItem(
                null
            );


            // =================================
            // SUCCESS TOAST
            // =================================

            setToast({

                open: true,

                type: "warning",

                title:
                    "Test Put on Hold",

                message:
                    `${queueItem.testName || "Test"} has been moved to On Hold status.`,

            });

        }, 800);

    };

    // =========================================
    // START PROCESSING STATE
    // =========================================

    const [
        isStartProcessingModalOpen,
        setIsStartProcessingModalOpen,
    ] = useState(false);


    const [
        isStartingProcessing,
        setIsStartingProcessing,
    ] = useState(false);


    // =========================================
    // START PROCESSING MODAL CLOSE
    // =========================================

    const handleStartProcessingModalClose = () => {

        if (
            isStartingProcessing
        ) {

            return;

        }


        setIsStartProcessingModalOpen(
            false
        );

        setSelectedQueueItem(
            null
        );

    };

    // =========================================
    // START PROCESSING
    // =========================================

    const handleStartProcessing = (
        queueItem
    ) => {

        if (
            isStartingProcessing
        ) {

            return;

        }


        if (!queueItem) {

            return;

        }


        setIsStartingProcessing(
            true
        );


        /*
         * =====================================
         * BACKEND READY
         * =====================================
         *
         * Later:
         *
         * await startTestProcessing(
         *     queueItem.id
         * );
         *
         * =====================================
         */


        setTimeout(() => {

            console.log(
                "Test processing started:",
                queueItem
            );


            // =================================
            // STOP LOADING
            // =================================

            setIsStartingProcessing(
                false
            );


            // =================================
            // CLOSE MODAL
            // =================================

            setIsStartProcessingModalOpen(
                false
            );


            setSelectedQueueItem(
                null
            );


            // =================================
            // SUCCESS TOAST
            // =================================

            setToast({

                open: true,

                type: "success",

                title:
                    "Processing Started",

                message:
                    `${queueItem.testName || "Test"} has been moved to In Progress.`,

            });

        }, 800);

    };

    // =========================================
    // EDIT TEST QUEUE STATE
    // =========================================

    const [
        isEditModalOpen,
        setIsEditModalOpen,
    ] = useState(false);


    const [
        isEditingTestQueue,
        setIsEditingTestQueue,
    ] = useState(false);


    // =========================================
    // EDIT MODAL CLOSE
    // =========================================

    const handleEditModalClose = () => {

        if (
            isEditingTestQueue
        ) {

            return;

        }


        setIsEditModalOpen(
            false
        );

        setSelectedQueueItem(
            null
        );

    };

    // =========================================
    // UPDATE TEST QUEUE
    // =========================================

    const handleEditTestQueue = (
        updatedData,
        queueItem
    ) => {

        if (
            isEditingTestQueue
        ) {

            return;

        }


        setIsEditingTestQueue(
            true
        );


        /*
         * =====================================
         * BACKEND READY
         * =====================================
         *
         * Later:
         *
         * await updateTestQueue(
         *     queueItem.id,
         *     updatedData
         * );
         *
         * =====================================
         */


        setTimeout(() => {

            console.log(
                "Test queue updated:",
                {
                    id:
                        queueItem?.id,

                    accessionNo:
                        queueItem?.accessionNo,

                    updatedData,
                }
            );


            // =================================
            // STOP LOADING
            // =================================

            setIsEditingTestQueue(
                false
            );


            // =================================
            // CLOSE MODAL
            // =================================

            setIsEditModalOpen(
                false
            );


            setSelectedQueueItem(
                null
            );


            // =================================
            // SUCCESS TOAST
            // =================================

            setToast({

                open: true,

                type: "success",

                title:
                    "Test Queue Updated",

                message:
                    "Test queue information has been updated successfully.",

            });

        }, 800);

    };

    // =========================================
    // RECEIVE FROM PROCESSING STATE
    // =========================================

    const [
        isReceiveModalOpen,
        setIsReceiveModalOpen,
    ] = useState(false);


    const [
        isReceivingFromProcessing,
        setIsReceivingFromProcessing,
    ] = useState(false);


    // =========================================
    // RECEIVE MODAL CLOSE
    // =========================================

    const handleReceiveModalClose = () => {

        if (
            isReceivingFromProcessing
        ) {

            return;

        }


        setIsReceiveModalOpen(
            false
        );

    };


    // =========================================
    // RECEIVE FROM PROCESSING
    // =========================================

    const handleReceiveFromProcessing = (
        selectedItems
    ) => {

        if (
            isReceivingFromProcessing
        ) {

            return;

        }


        if (
            !Array.isArray(
                selectedItems
            ) ||
            selectedItems.length === 0
        ) {

            return;

        }


        setIsReceivingFromProcessing(
            true
        );


        /*
         * =====================================
         * BACKEND READY
         * =====================================
         *
         * Later:
         *
         * await receiveFromProcessing(
         *     selectedItems
         * );
         *
         * =====================================
         */


        setTimeout(() => {

            console.log(
                "Received from processing:",
                selectedItems
            );


            // ================================
            // STOP LOADING
            // ================================

            setIsReceivingFromProcessing(
                false
            );


            // ================================
            // CLOSE MODAL
            // ================================

            setIsReceiveModalOpen(
                false
            );


            // ================================
            // SUCCESS TOAST
            // ================================

            setToast({

                open: true,

                type: "success",

                title:
                    "Samples Received",

                message:
                    `${selectedItems.length} ${selectedItems.length === 1
                        ? "sample has"
                        : "samples have"
                    } been received from processing.`,

            });

        }, 800);

    };

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

    });

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
    // UPDATE PRIORITY MODAL STATE
    // =========================================

    const [
        isPriorityModalOpen,
        setIsPriorityModalOpen,
    ] = useState(false);


    const [
        isUpdatingPriority,
        setIsUpdatingPriority,
    ] = useState(false);

    // =========================================
    // PRIORITY MODAL CLOSE
    // =========================================

    const handlePriorityModalClose = () => {

        if (isUpdatingPriority) {

            return;

        }


        setIsPriorityModalOpen(
            false
        );

        setSelectedQueueItem(
            null
        );

    };


    // =========================================
    // UPDATE PRIORITY
    // =========================================

    const handlePriorityUpdate = (
        newPriority,
        queueItem
    ) => {

        if (isUpdatingPriority) {

            return;

        }


        setIsUpdatingPriority(
            true
        );


        /*
         * =====================================
         * BACKEND READY
         * =====================================
         *
         * Later:
         *
         * await updateTestQueuePriority(
         *     queueItem.id,
         *     newPriority
         * );
         *
         * =====================================
         */


        setTimeout(() => {

            console.log(
                "Priority updated:",
                {
                    id: queueItem?.id,

                    oldPriority:
                        queueItem?.priority,

                    newPriority,
                }
            );


            // =================================
            // STOP LOADING
            // =================================

            setIsUpdatingPriority(
                false
            );


            // =================================
            // CLOSE MODAL
            // =================================

            setIsPriorityModalOpen(
                false
            );


            setSelectedQueueItem(
                null
            );


            // =================================
            // SUCCESS TOAST
            // =================================

            setToast({

                open: true,

                type: "success",

                title:
                    "Priority Updated",

                message:
                    `Test priority has been updated to ${newPriority}.`,

            });

        }, 800);

    };

    // =========================================
    // VIEW MODAL STATE
    // =========================================

    const [
        isViewModalOpen,
        setIsViewModalOpen,
    ] = useState(false);


    const [
        selectedQueueItem,
        setSelectedQueueItem,
    ] = useState(null);


    // =========================================
    // VIEW MODAL CLOSE
    // =========================================

    const handleViewModalClose = () => {

        setIsViewModalOpen(
            false
        );


        setSelectedQueueItem(
            null
        );

    };


    // =========================================
    // REFRESH STATE
    // =========================================

    const [
        isRefreshing,
        setIsRefreshing,
    ] = useState(false);


    // =========================================
    // ACTIVE TAB
    // =========================================

    const [
        activeTab,
        setActiveTab,
    ] = useState("all");


    // =========================================
    // FILTER STATE
    // =========================================

    const [
        filters,
        setFilters,
    ] = useState(
        DEFAULT_FILTERS
    );


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
    // FILTER + TAB DATA
    // =========================================

    const filteredQueue = useMemo(
        () => {

            return filterTestQueue(
                testQueueData,
                filters,
                activeTab
            );

        },
        [
            filters,
            activeTab,
        ]
    );


    // =========================================
    // TOTAL ROWS
    // =========================================

    const totalRows =
        filteredQueue.length;


    // =========================================
    // PAGINATED DATA
    // =========================================

    const paginatedQueue = useMemo(
        () => {

            const startIndex =
                (page - 1) *
                rowsPerPage;


            const endIndex =
                startIndex +
                rowsPerPage;


            return filteredQueue.slice(
                startIndex,
                endIndex
            );

        },
        [
            filteredQueue,
            page,
            rowsPerPage,
        ]
    );


    // =========================================
    // TAB COUNTS
    // =========================================

    const tabCounts = useMemo(
        () => {

            const total =
                testQueueData.length;


            const highPriority =
                testQueueData.filter(
                    (item) => {

                        return (
                            item.priority ===
                            "High" ||
                            item.priority ===
                            "Urgent"
                        );

                    }
                ).length;


            const dueInOneHour =
                testQueueData.filter(
                    (item) => {

                        return (
                            item.tatStatus ===
                            "warning" ||
                            item.tatStatus ===
                            "critical"
                        );

                    }
                ).length;


            const inProgress =
                testQueueData.filter(
                    (item) => {

                        return (
                            item.status ===
                            "In Progress"
                        );

                    }
                ).length;


            const overdue =
                testQueueData.filter(
                    (item) => {

                        return (
                            item.tatStatus ===
                            "overdue"
                        );

                    }
                ).length;


            return {

                totalInQueue:
                    total,

                highPriority:
                    highPriority,

                dueInOneHour:
                    dueInOneHour,

                inProgress:
                    inProgress,

                overdue:
                    overdue,

            };

        },
        []
    );


    // =========================================
    // STATS CARDS
    // =========================================

    const currentStats = useMemo(
        () => {

            return statsCards.map(
                (card) => {

                    const count =
                        tabCounts[
                        card.id
                        ];


                    if (
                        count ===
                        undefined
                    ) {

                        return card;

                    }


                    return {

                        ...card,

                        value:
                            count,

                    };

                }
            );

        },
        [
            tabCounts,
        ]
    );


    // =========================================
    // FILTER CHANGE
    // =========================================

    const handleFilterChange = (
        filterId,
        value
    ) => {

        setFilters(
            (previousFilters) => ({

                ...previousFilters,

                [filterId]:
                    value,

            })
        );


        // =====================================
        // FILTER CHANGE KE BAAD
        // FIRST PAGE PAR JAO
        // =====================================

        setPage(1);

    };


    // =========================================
    // FILTER RESET
    // =========================================

    const handleFilterReset = () => {

        setFilters({
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


        // New tab ke saath
        // first page par reset

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


        setRowsPerPage(
            newRowsPerPage
        );


        // Rows change hone ke baad
        // first page par reset

        setPage(1);

    };


    // =========================================
    // REFRESH
    // =========================================

    const handleRefresh = () => {

        // Already refreshing?
        // Duplicate click ignore

        if (isRefreshing) {

            return;

        }


        setIsRefreshing(
            true
        );


        // =====================================
        // RESET FILTERS
        // =====================================

        setFilters({
            ...DEFAULT_FILTERS,
        });


        // =====================================
        // RESET TAB
        // =====================================

        setActiveTab(
            "all"
        );


        // =====================================
        // RESET PAGINATION
        // =====================================

        setPage(1);

        setRowsPerPage(10);


        /*
         * =====================================
         * BACKEND READY
         * =====================================
         *
         * Later:
         *
         * await fetchTestQueue();
         *
         * =====================================
         */


        // Mock refresh delay

        setTimeout(() => {

            setIsRefreshing(
                false
            );

        }, 800);

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


            // =================================
            // UPDATE PRIORITY
            // =================================

            case "updatePriority":

                console.log(
                    "Update Priority clicked"
                );

                break;


            // =================================
            // PRINT WORKLIST
            // =================================

            case "printWorklist":

                console.log(
                    "Print Worklist clicked"
                );

                break;


            // =================================
            // REFRESH
            // =================================

            case "refresh":

                handleRefresh();

                break;


            // =================================
            // RECEIVE FROM PROCESSING
            // =================================

            case "receiveFromProcessing":

                setIsReceiveModalOpen(
                    true
                );

                break;


            // =================================
            // DEFAULT
            // =================================

            default:

                console.warn(
                    `Unknown header action: ${actionId}`
                );

                break;

        }

    };


    // =========================================
    // TABLE ACTIONS
    // =========================================

    const handleQueueAction = (
        action,
        queueItem
    ) => {

        switch (
        action
        ) {


            // =================================
            // VIEW
            // =================================

            case "view":

                setSelectedQueueItem(
                    queueItem
                );

                setIsViewModalOpen(
                    true
                );

                break;


            // =================================
            // EDIT
            // =================================

            case "edit":

                setSelectedQueueItem(
                    queueItem
                );

                setIsEditModalOpen(
                    true
                );

                break;


            // =================================
            // UPDATE PRIORITY
            // =================================

            case "updatePriority":

                setSelectedQueueItem(
                    queueItem
                );

                setIsPriorityModalOpen(
                    true
                );

                break;

            // =================================
            // Put On Hold
            // =================================
            case "putOnHold":

                setSelectedQueueItem(
                    queueItem
                );

                setIsPutOnHoldModalOpen(
                    true
                );

                break;
            // =================================
            // START PROCESSING
            // =================================

            case "startProcessing":

                setSelectedQueueItem(
                    queueItem
                );

                setIsStartProcessingModalOpen(
                    true
                );

                break;


            // =================================
            // DEFAULT
            // =================================

            default:

                console.warn(
                    `Unknown queue action: ${action}`
                );

                break;

        }

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <main className="test-queue-page">


            {/* =================================
                HEADER
            ================================= */}

            <TestQueueHeader

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

            <TestQueueStatsCards

                stats={
                    currentStats
                }

            />


            {/* =================================
                FILTERS
            ================================= */}

            <TestQueueFilters

                filterValues={
                    filters
                }

                onFilterChange={
                    handleFilterChange
                }

                onReset={
                    handleFilterReset
                }

            />


            {/* =================================
                TABS
            ================================= */}

            <TestQueueTabs

                activeTab={
                    activeTab
                }

                onTabChange={
                    handleTabChange
                }

                counts={
                    tabCounts
                }

            />


            {/* =================================
                TABLE
            ================================= */}

            <TestQueueTable

                data={
                    paginatedQueue
                }

                onAction={
                    handleQueueAction
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
                    totalRows
                }

                onPageChange={
                    handlePageChange
                }

                onRowsPerPageChange={
                    handleRowsPerPageChange
                }

            />

            {/* =================================
    VIEW TEST QUEUE MODAL
================================= */}

            <ViewTestQueueModal

                open={
                    isViewModalOpen
                }

                data={
                    selectedQueueItem
                }

                onClose={
                    handleViewModalClose
                }

            />


            {/* =================================
    UPDATE PRIORITY MODAL
================================= */}

            <UpdatePriorityModal

                open={
                    isPriorityModalOpen
                }

                data={
                    selectedQueueItem
                }

                loading={
                    isUpdatingPriority
                }

                onClose={
                    handlePriorityModalClose
                }

                onConfirm={
                    handlePriorityUpdate
                }

            />

            {/* =================================
    TOAST NOTIFICATION
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
                    4000
                }

                onClose={
                    handleToastClose
                }

            />


            {/* =================================
    RECEIVE FROM PROCESSING MODAL
================================= */}

            <ReceiveFromProcessingModal

                open={
                    isReceiveModalOpen
                }

                data={
                    processingSamples
                }

                loading={
                    isReceivingFromProcessing
                }

                onClose={
                    handleReceiveModalClose
                }

                onConfirm={
                    handleReceiveFromProcessing
                }

            />

            {/* =================================
    EDIT TEST QUEUE MODAL
================================= */}

            <EditTestQueueModal

                open={
                    isEditModalOpen
                }

                data={
                    selectedQueueItem
                }

                loading={
                    isEditingTestQueue
                }

                onClose={
                    handleEditModalClose
                }

                onConfirm={
                    handleEditTestQueue
                }

            />

            {/* =================================
    START PROCESSING MODAL
================================= */}

            <StartProcessingModal

                open={
                    isStartProcessingModalOpen
                }

                data={
                    selectedQueueItem
                }

                loading={
                    isStartingProcessing
                }

                onClose={
                    handleStartProcessingModalClose
                }

                onConfirm={
                    handleStartProcessing
                }

            />

            {/* =================================
    PUT ON HOLD MODAL
================================= */}

            <PutOnHoldModal

                open={
                    isPutOnHoldModalOpen
                }

                data={
                    selectedQueueItem
                }

                loading={
                    isPuttingOnHold
                }

                onClose={
                    handlePutOnHoldModalClose
                }

                onConfirm={
                    handlePutOnHold
                }

            />


        </main>

    );

};


export default TestQueue;