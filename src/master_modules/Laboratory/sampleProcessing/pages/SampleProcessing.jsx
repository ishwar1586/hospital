import {
    useMemo,
    useState,
} from "react";


// =========================================
// PAGE STYLES
// =========================================

import "../styles/sampleProcessing.css";


// =========================================
// HEADER
// =========================================

import SampleProcessingHeader
    from "../components/Header/SampleProcessingHeader";


// =========================================
// STATS CARDS
// =========================================

import ProcessingStatsCards
    from "../components/StatsCards/ProcessingStatsCards";

import statsCards
    from "../config/statsCards";


// =========================================
// FILTERS
// =========================================

import ProcessingFilters
    from "../components/Filters/ProcessingFilters";


// =========================================
// TABS
// =========================================

import ProcessingTabs
    from "../components/Tabs/ProcessingTabs";


// =========================================
// TABLE
// =========================================

import ProcessingTable
    from "../components/Table/ProcessingTable";


// =========================================
// PAGINATION
// =========================================

import Pagination
    from "@/master_shared/components/Pagination/Pagination";


// =========================================
// MOCK DATA
// =========================================

import {
    sampleProcessingStatsMock,
    sampleProcessingData,
} from "../mock/sampleProcessing.mock";


// =========================================
// UTILS
// =========================================

import filterProcessing
    from "../utils/filterProcessing";


// =========================================
// HOOKS
// =========================================

import useProcessingPagination
    from "../hooks/useProcessingPagination";



import ViewProcessingModal
    from "../components/Modals/ViewProcessingModal";

import EditProcessingModal
    from "../components/Modals/EditProcessingModal";

import DeleteConfirmModal
    from "@/master_shared/components/common/DeleteConfirmModal/DeleteConfirmModal";

import ToastNotification
    from "@/master_shared/components/common/ToastNotification/ToastNotification";

import AddProcessingModal
    from "../components/Modals/AddProcessingModal";


// =========================================
// COMPONENT
// =========================================

const SampleProcessing = () => {


    const [
        selectedProcessing,
        setSelectedProcessing,
    ] = useState(null);

    const [
        isViewModalOpen,
        setIsViewModalOpen,
    ] = useState(false);

    const [
        isEditModalOpen,
        setIsEditModalOpen,
    ] = useState(false);

    const [
        isAddModalOpen,
        setIsAddModalOpen,
    ] = useState(false);

    const [
        isAdding,
        setIsAdding,
    ] = useState(false);


    const handleAddProcessing = (
        newProcessing
    ) => {

        setIsAdding(
            true
        );


        /*
         * Backend aane ke baad:
         *
         * await createSampleProcessing(
         *     newProcessing
         * );
         *
         */


        console.log(
            "New Processing:",
            newProcessing
        );


        setTimeout(() => {

            setIsAdding(
                false
            );

            setIsAddModalOpen(
                false
            );


            setToast({

                open: true,

                type: "success",

                title: "Added Successfully",

                message:
                    `${newProcessing.accessionNo} has been added successfully.`,

            });


            resetPagination();

        }, 700);

    };


    const handleEditSave = (
        updatedProcessing
    ) => {

        console.log(
            "Updated Processing:",
            updatedProcessing
        );

        setIsEditModalOpen(
            false
        );

        setSelectedProcessing(
            null
        );

    };


    const [
        isDeleteModalOpen,
        setIsDeleteModalOpen,
    ] = useState(false);


    const [
        deleteTarget,
        setDeleteTarget,
    ] = useState(null);


    const [
        isDeleting,
        setIsDeleting,
    ] = useState(false);


    const [
        toast,
        setToast,
    ] = useState({

        open: false,

        type: "success",

        title: "",

        message: "",

    });

    const handleDeleteRequest = (
        processing
    ) => {

        setDeleteTarget(
            processing
        );

        setIsDeleteModalOpen(
            true
        );

    };

    const handleDeleteConfirm = () => {

        if (!deleteTarget) {
            return;
        }


        setIsDeleting(
            true
        );


        /*
         * Backend aane ke baad:
         *
         * await deleteSampleProcessing(
         *     deleteTarget.id
         * );
         *
         */


        setTimeout(() => {

            setIsDeleting(
                false
            );


            setIsDeleteModalOpen(
                false
            );


            setToast({

                open: true,

                type: "success",

                title: "Deleted Successfully",

                message:
                    `${deleteTarget.accessionNo} has been deleted successfully.`,

            });


            setDeleteTarget(
                null
            );


            resetPagination();

        }, 700);

    };

    // =========================================
    // REFRESH STATE
    // =========================================

    const [
        isRefreshing,
        setIsRefreshing,
    ] = useState(false);


    // =========================================
    // FILTER STATE
    // =========================================

    const [
        filters,
        setFilters,
    ] = useState({

        search: "",

        processingDate: "",

        department: "all",

        sampleType: "all",

        status: "all",

    });


    // =========================================
    // ACTIVE TAB
    // =========================================

    const [
        activeTab,
        setActiveTab,
    ] = useState("all");


    // =========================================
    // PROCESSING STATS
    // =========================================

    const processingStats = useMemo(() => {

        return statsCards.map(
            (card) => ({

                ...card,

                value:
                    sampleProcessingStatsMock[
                        card.id
                    ]?.value ?? 0,

                trend:
                    sampleProcessingStatsMock[
                        card.id
                    ]?.trend ?? 0,

            })
        );

    }, []);


    // =========================================
    // TAB COUNTS
    // =========================================

    const tabCounts = useMemo(() => {

        return {

            all:
                sampleProcessingData.length,


            inProcessing:
                sampleProcessingData.filter(
                    (item) =>
                        item.status ===
                        "In Processing"
                ).length,


            processed:
                sampleProcessingData.filter(
                    (item) =>
                        item.status ===
                        "Processed"
                ).length,


            onHold:
                sampleProcessingData.filter(
                    (item) =>
                        item.status ===
                        "On Hold"
                ).length,


            rejected:
                sampleProcessingData.filter(
                    (item) =>
                        item.status ===
                        "Rejected"
                ).length,

        };

    }, []);


    // =========================================
    // FILTER + TAB DATA
    // =========================================

    const filteredProcessing = useMemo(() => {

        return filterProcessing(
            sampleProcessingData,
            filters,
            activeTab
        );

    }, [
        filters,
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

        handlePageChange,

        handleRowsPerPageChange,

        resetPagination,

    } = useProcessingPagination(
        filteredProcessing,
        10
    );


    // =========================================
    // FILTER CHANGE
    // =========================================

    const handleFilterChange = (
        updatedFilters
    ) => {

        setFilters(
            updatedFilters
        );


        // New filtered result
        // should always start
        // from first page.

        resetPagination();

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


        // Every tab has its
        // own result set.

        resetPagination();

    };


    // =========================================
    // REFRESH
    // =========================================

    const handleRefresh = () => {

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

            search: "",

            processingDate: "",

            department: "all",

            sampleType: "all",

            status: "all",

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

        resetPagination();


        /*
         * =====================================
         * BACKEND INTEGRATION - FUTURE
         * =====================================
         *
         * Backend aane ke baad yahan API call
         * hogi.
         *
         * Example:
         *
         * await getSampleProcessingData();
         *
         * Uske baad API response state me
         * store kiya jayega.
         *
         */


        // =====================================
        // FRONTEND MOCK REFRESH
        // =====================================

        setTimeout(() => {

            setIsRefreshing(
                false
            );

        }, 800);

    };


    // =========================================
    // HEADER ACTIONS
    // =========================================

    const handleHeaderAction = (
        actionId
    ) => {

        switch (actionId) {


            // =================================
            // REFRESH
            // =================================

            case "refresh":

                handleRefresh();

                break;


            // =================================
            // PRINT LABELS
            // =================================

            case "printLabels":

                console.log(
                    "Print Labels clicked"
                );

                break;


            // =================================
            // BULK SCAN
            // =================================

            case "bulkScan":

                console.log(
                    "Bulk Scan clicked"
                );

                break;


            // =================================
            // NEW SAMPLE PROCESSING
            // =================================

            case "newSampleProcessing":

                setIsAddModalOpen(
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

    const handleProcessingAction = (
        action,
        processing
    ) => {

        switch (action) {


            // =================================
            // VIEW
            // =================================

            case "view":

                setSelectedProcessing(
                    processing
                );

                setIsViewModalOpen(
                    true
                );

                break;


            // =================================
            // EDIT
            // =================================

            case "edit":

                setSelectedProcessing(
                    processing
                );

                setIsEditModalOpen(
                    true
                );

                break;

            // =================================
            // DELETE
            // =================================
            case "delete":

                handleDeleteRequest(
                    processing
                );

                break;


            // =================================
            // DEFAULT
            // =================================

            default:

                console.warn(
                    `Unknown processing action: ${action}`
                );

                break;

        }

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <div className="sample-processing-page">


            {/* =================================
                HEADER
            ================================= */}

            <SampleProcessingHeader
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

            <ProcessingStatsCards
                stats={
                    processingStats
                }
            />


            {/* =================================
                FILTERS
            ================================= */}

            <ProcessingFilters
                filters={
                    filters
                }

                onFilterChange={
                    handleFilterChange
                }
            />


            {/* =================================
                TABS
            ================================= */}

            <ProcessingTabs
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

            <ProcessingTable
                data={
                    paginatedData
                }

                onAction={
                    handleProcessingAction
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


            <ViewProcessingModal
                open={
                    isViewModalOpen
                }

                processing={
                    selectedProcessing
                }

                onClose={() => {

                    setIsViewModalOpen(
                        false
                    );

                    setSelectedProcessing(
                        null
                    );

                }}
            />

            <EditProcessingModal
                open={
                    isEditModalOpen
                }

                processing={
                    selectedProcessing
                }

                onClose={() => {

                    setIsEditModalOpen(
                        false
                    );

                    setSelectedProcessing(
                        null
                    );

                }}

                onSave={
                    handleEditSave
                }
            />

            <DeleteConfirmModal
                open={
                    isDeleteModalOpen
                }

                title="Delete Sample Processing"

                message="Are you sure you want to delete this sample processing record?"

                itemName={
                    deleteTarget?.accessionNo || ""
                }

                itemLabel="Accession No."

                confirmText="Delete"

                cancelText="Cancel"

                loading={
                    isDeleting
                }

                onClose={() => {

                    if (isDeleting) {
                        return;
                    }

                    setIsDeleteModalOpen(
                        false
                    );

                    setDeleteTarget(
                        null
                    );

                }}

                onConfirm={
                    handleDeleteConfirm
                }
            />

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

                duration={4000}

                onClose={() => {

                    setToast(
                        (previous) => ({

                            ...previous,

                            open: false,

                        })
                    );

                }}
            />

            <AddProcessingModal
                open={
                    isAddModalOpen
                }

                loading={
                    isAdding
                }

                onClose={() => {

                    if (isAdding) {
                        return;
                    }

                    setIsAddModalOpen(
                        false
                    );

                }}

                onSave={
                    handleAddProcessing
                }
            />
        </div>

    );

};


export default SampleProcessing;