import {
    useMemo,
    useState,
} from "react";


// =========================================
// PAGE STYLES
// =========================================

import "../styles/sampleCollection.css";


// =========================================
// HEADER
// =========================================

import SampleCollectionHeader
    from "../components/Header/SampleCollectionHeader";


// =========================================
// STATS CARDS
// =========================================

import CollectionStatsCards
    from "../components/StatsCards/CollectionStatsCards";


// =========================================
// FILTERS
// =========================================

import CollectionFilters
    from "../components/Filters/CollectionFilters";


// =========================================
// TABS
// =========================================

import CollectionTabs
    from "../components/Tabs/CollectionTabs";


// =========================================
// TABLE
// =========================================

import CollectionTable
    from "../components/Table/CollectionTable";


// =========================================
// REUSABLE PAGINATION
// =========================================

import Pagination
    from "@/master_shared/components/Pagination/Pagination";


// =========================================
// MOCK DATA
// =========================================

import sampleCollectionMock
    from "../mock/sampleCollection.mock";


// =========================================
// UTILS
// =========================================

import filterCollections
    from "../utils/filterCollections";

import getCollectionStats
    from "../utils/collectionStats";


// =========================================
// MODULE MODALS
// =========================================

import ViewCollectionModal
    from "../components/modals/ViewCollectionModal";

import EditCollectionModal
    from "../components/modals/EditCollectionModal";

import AddCollectionModal
    from "../components/modals/AddCollectionModal";


// =========================================
// REUSABLE COMMON COMPONENTS
// =========================================

import DeleteConfirmModal
    from "@/master_shared/components/common/DeleteConfirmModal/DeleteConfirmModal";

import ToastNotification
    from "@/master_shared/components/common/ToastNotification/ToastNotification";


// =========================================
// COMPONENT
// =========================================

const SampleCollection = () => {


    // =========================================
    // SELECTED COLLECTION
    // =========================================

    const [
        selectedCollection,
        setSelectedCollection,
    ] = useState(null);


    // =========================================
    // MODAL STATES
    // =========================================

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
        isDeleteModalOpen,
        setIsDeleteModalOpen,
    ] = useState(false);


    // =========================================
    // DELETE STATE
    // =========================================

    const [
        isDeleting,
        setIsDeleting,
    ] = useState(false);


    // =========================================
    // TOAST STATE
    // =========================================

    const [
        isToastOpen,
        setIsToastOpen,
    ] = useState(false);


    const [
        toast,
        setToast,
    ] = useState({

        type: "success",

        title: "",

        message: "",

        duration: 4000,

    });


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

        collectionDate: "",

        collectionCenter: "all",

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
    // COLLECTION STATS
    // =========================================

    const collectionStats = useMemo(() => {

        return getCollectionStats(
            sampleCollectionMock
        );

    }, []);


    // =========================================
    // TAB COUNTS
    // =========================================

    const tabCounts = useMemo(() => {

        return {

            all:
                sampleCollectionMock.length,

            completed:
                sampleCollectionMock.filter(
                    (collection) =>
                        collection.status ===
                        "Completed"
                ).length,

            pending:
                sampleCollectionMock.filter(
                    (collection) =>
                        collection.status ===
                        "Pending"
                ).length,

            rejected:
                sampleCollectionMock.filter(
                    (collection) =>
                        collection.status ===
                        "Rejected"
                ).length,

            onHold:
                sampleCollectionMock.filter(
                    (collection) =>
                        collection.status ===
                        "On Hold"
                ).length,

        };

    }, []);


    // =========================================
    // FILTER + TAB DATA
    // =========================================

    const filteredCollections = useMemo(() => {

        return filterCollections(

            sampleCollectionMock,

            filters,

            activeTab

        );

    }, [
        filters,
        activeTab,
    ]);


    // =========================================
    // PAGINATED DATA
    // =========================================

    const collectionData = useMemo(() => {

        const startIndex =
            (page - 1) *
            rowsPerPage;


        const endIndex =
            startIndex +
            rowsPerPage;


        return filteredCollections.slice(

            startIndex,

            endIndex

        );

    }, [
        filteredCollections,
        page,
        rowsPerPage,
    ]);


    // =========================================
    // TOTAL FILTERED ROWS
    // =========================================

    const totalRows =
        filteredCollections.length;


    // =========================================
    // REFRESH
    // =========================================

    const handleRefresh = () => {

        // Already refreshing hai
        // to duplicate request nahi karenge

        if (isRefreshing) {
            return;
        }


        setIsRefreshing(true);


        // =========================================
        // RESET UI STATE
        // =========================================

        setFilters({

            search: "",

            collectionDate: "",

            collectionCenter: "all",

            sampleType: "all",

            status: "all",

        });


        setActiveTab(
            "all"
        );


        setPage(
            1
        );


        setRowsPerPage(
            10
        );


        // =========================================
        // MOCK REFRESH DELAY
        // =========================================

        setTimeout(() => {

            setIsRefreshing(
                false
            );

        }, 800);

    };


    // =========================================
    // FILTER CHANGE
    // =========================================

    const handleFilterChange = (
        updatedFilters
    ) => {

        setFilters(
            updatedFilters
        );


        // New filter lagne par
        // first page par reset

        setPage(
            1
        );

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


        // New tab select hone par
        // first page par reset

        setPage(
            1
        );

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
            parseInt(
                event.target.value,
                10
            );


        setRowsPerPage(
            newRowsPerPage
        );


        // Rows per page change hone par
        // first page par reset

        setPage(
            1
        );

    };


    // =========================================
    // VIEW COLLECTION
    // =========================================

    const handleViewCollection = (
        collection
    ) => {

        setSelectedCollection(
            collection
        );


        setIsViewModalOpen(
            true
        );

    };


    // =========================================
    // CLOSE VIEW MODAL
    // =========================================

    const handleCloseViewModal = () => {

        setIsViewModalOpen(
            false
        );


        setSelectedCollection(
            null
        );

    };


    // =========================================
    // EDIT COLLECTION
    // =========================================

    const handleEditCollection = (
        collection
    ) => {

        setSelectedCollection(
            collection
        );


        setIsEditModalOpen(
            true
        );

    };


    // =========================================
    // CLOSE EDIT MODAL
    // =========================================

    const handleCloseEditModal = () => {

        setIsEditModalOpen(
            false
        );


        setSelectedCollection(
            null
        );

    };


    // =========================================
    // SAVE EDITED COLLECTION
    // =========================================

    const handleSaveCollection = (
        updatedCollection
    ) => {

        console.log(
            "Updated Collection:",
            updatedCollection
        );


        setIsEditModalOpen(
            false
        );


        setSelectedCollection(
            null
        );

    };


    // =========================================
    // ADD COLLECTION
    // =========================================

    const handleAddCollection = (
        newCollection
    ) => {

        console.log(
            "New Sample Collection:",
            newCollection
        );


        setIsAddModalOpen(
            false
        );

    };


    // =========================================
    // CLOSE DELETE MODAL
    // =========================================

    const handleCloseDeleteModal = () => {

        if (isDeleting) {
            return;
        }


        setIsDeleteModalOpen(
            false
        );


        setSelectedCollection(
            null
        );

    };


    // =========================================
    // CONFIRM DELETE
    // =========================================

    const handleConfirmDelete = async () => {

        if (
            isDeleting ||
            !selectedCollection
        ) {
            return;
        }


        setIsDeleting(
            true
        );


        try {

            // =====================================
            // BACKEND AANE PAR YAHAN DELETE API
            // CALL HOGI
            // =====================================

            await new Promise(
                (resolve) =>
                    setTimeout(
                        resolve,
                        800
                    )
            );


            // =====================================
            // DELETE SUCCESS
            // =====================================

            setIsDeleteModalOpen(
                false
            );


            setToast({

                type: "success",

                title:
                    "Collection Deleted",

                message:
                    `Sample collection ${selectedCollection.accessionNo} has been deleted successfully.`,

                duration: 4000,

            });


            setIsToastOpen(
                true
            );


            setSelectedCollection(
                null
            );

        } catch (error) {

            console.error(
                "Delete collection failed:",
                error
            );


            setToast({

                type: "error",

                title:
                    "Delete Failed",

                message:
                    "Unable to delete the sample collection. Please try again.",

                duration: 4000,

            });


            setIsToastOpen(
                true
            );

        } finally {

            setIsDeleting(
                false
            );

        }

    };


    // =========================================
    // CLOSE TOAST
    // =========================================

    const handleCloseToast = () => {

        setIsToastOpen(
            false
        );

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
            // PRINT BARCODE
            // =================================

            case "printBarcode":

                console.log(
                    "Print Barcode clicked"
                );

                break;


            // =================================
            // COLLECTION MANUAL
            // =================================

            case "collectionManual":

                console.log(
                    "Collection Manual clicked"
                );

                break;


            // =================================
            // NEW COLLECTION
            // =================================

            case "newSampleCollection":

                setIsAddModalOpen(
                    true
                );

                break;


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

    const handleCollectionAction = (
        action,
        collection
    ) => {

        switch (action) {


            // =================================
            // VIEW
            // =================================

            case "view":

                handleViewCollection(
                    collection
                );

                break;


            // =================================
            // EDIT
            // =================================

            case "edit":

                handleEditCollection(
                    collection
                );

                break;


            // =================================
            // PRINT
            // =================================

            case "print":

                console.log(
                    "Print Barcode:",
                    collection
                );

                break;


            // =================================
            // DELETE
            // =================================

            case "delete":

                setSelectedCollection(
                    collection
                );


                setIsDeleteModalOpen(
                    true
                );

                break;


            // =================================
            // DEFAULT
            // =================================

            default:

                console.warn(
                    `Unknown collection action: ${action}`
                );

                break;

        }

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <div className="sample-collection-page">


            {/* =================================
                PAGE HEADER
            ================================= */}

            <SampleCollectionHeader
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

            <CollectionStatsCards
                stats={
                    collectionStats
                }
            />


            {/* =================================
                FILTERS
            ================================= */}

            <CollectionFilters
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

            <CollectionTabs
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

            <CollectionTable
                data={
                    collectionData
                }

                onAction={
                    handleCollectionAction
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
                VIEW MODAL
            ================================= */}

            <ViewCollectionModal
                open={
                    isViewModalOpen
                }

                collection={
                    selectedCollection
                }

                onClose={
                    handleCloseViewModal
                }
            />


            {/* =================================
                EDIT MODAL
            ================================= */}

            <EditCollectionModal
                open={
                    isEditModalOpen
                }

                collection={
                    selectedCollection
                }

                onClose={
                    handleCloseEditModal
                }

                onSave={
                    handleSaveCollection
                }
            />


            {/* =================================
                ADD MODAL
            ================================= */}

            <AddCollectionModal
                open={
                    isAddModalOpen
                }

                onClose={() =>
                    setIsAddModalOpen(
                        false
                    )
                }

                onSave={
                    handleAddCollection
                }
            />


            {/* =================================
                DELETE CONFIRMATION MODAL
            ================================= */}

            <DeleteConfirmModal
                open={
                    isDeleteModalOpen
                }

                title="Delete Sample Collection?"

                message={
                    "Are you sure you want to delete this sample collection?"
                }

                itemName={
                    selectedCollection?.accessionNo || ""
                }

                itemLabel="Accession No."

                confirmText="Delete Collection"

                cancelText="Cancel"

                loading={
                    isDeleting
                }

                onClose={
                    handleCloseDeleteModal
                }

                onConfirm={
                    handleConfirmDelete
                }
            />


            {/* =================================
                TOAST NOTIFICATION
            ================================= */}

            <ToastNotification
                open={
                    isToastOpen
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
                    handleCloseToast
                }
            />

        </div>

    );

};


export default SampleCollection;