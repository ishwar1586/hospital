import {
    useMemo,
    useState,
} from "react";

import "../styles/testCategoryMaster.css";

import TestCategoryMasterHeader
    from "../components/Header/TestCategoryMasterHeader";

import CategoryStatsCards
    from "../components/StatsCards/CategoryStatsCards";

import CategoryFilters
    from "../components/Filters/CategoryFilters";

import CategoryTabs
    from "../components/Tabs/CategoryTabs";

import CategoryTable
    from "../components/Table/CategoryTable";

import testCategoryMasterMockData
    from "../mock/testCategoryMaster.mock";

import getCategoryStats
    from "../utils/categoryStats";

import filterCategories
    from "../utils/filterCategories";

import Pagination
    from "@/master_shared/components/Pagination/Pagination";

import ViewCategoryModal
    from "../components/modals/ViewCategoryModal";
import AddCategoryModal
    from "../components/modals/AddCategoryModal";
import EditCategoryModal
    from "../components/modals/EditCategoryModal";
import DeleteConfirmModal
    from "@/master_shared/components/common/DeleteConfirmModal/DeleteConfirmModal";
import ToastNotification
    from "@/master_shared/components/common/ToastNotification/ToastNotification";

const TestCategoryMaster = () => {

    // toast notification state

    const [toast, setToast] = useState({
        open: false,
        type: "success",
        title: "",
        message: "",
    });

    const showToast = ({
        type = "success",
        title,
        message,
    }) => {

        setToast({
            open: true,
            type,
            title,
            message,
        });

    };

    const handleToastClose = () => {

        setToast((previous) => ({
            ...previous,
            open: false,
        }));

    };

    // toast notification state

    const [isDeleteModalOpen, setIsDeleteModalOpen] =
        useState(false);

    const [categoryToDelete, setCategoryToDelete] =
        useState(null);



    const handleDeleteCategory = () => {

        if (!categoryToDelete) {
            return;
        }


        console.log(
            "Delete Category:",
            categoryToDelete
        );


        const deletedCategoryName =
            categoryToDelete.categoryName;


        // Close delete modal
        setIsDeleteModalOpen(false);

        setCategoryToDelete(null);


        // Show success toast
        showToast({
            type: "success",

            title: "Category Deleted",

            message:
                `${deletedCategoryName} has been deleted successfully.`,
        });

    };

    // =========================================
    // FILTER STATE
    // =========================================

    const [filters, setFilters] = useState({
        search: "",
        status: "all",
        department: "all",
        authorization: "all",
    });


    const [selectedCategory, setSelectedCategory] =
        useState(null);

    const [isViewModalOpen, setIsViewModalOpen] =
        useState(false);

    const [isEditModalOpen, setIsEditModalOpen] =
        useState(false);

    const [isAddModalOpen, setIsAddModalOpen] =
        useState(false);
    // =========================================
    // ACTIVE TAB
    // =========================================

    const [activeTab, setActiveTab] =
        useState("all");


    // =========================================
    // PAGINATION STATE
    // =========================================

    const [page, setPage] =
        useState(1);

    const [rowsPerPage, setRowsPerPage] =
        useState(10);


    // =========================================
    // REFRESH KEY
    // =========================================

    const [refreshKey, setRefreshKey] =
        useState(0);


    // =========================================
    // STATS
    // =========================================

    const stats = useMemo(() => {

        return getCategoryStats(
            testCategoryMasterMockData
        );

    }, [refreshKey]);


    // =========================================
    // TAB COUNTS
    // =========================================

    const tabCounts = {
        all: stats.totalCategories,

        active: stats.activeCategories,

        inactive: stats.inactiveCategories,
    };


    // =========================================
    // FILTERED CATEGORIES
    // =========================================

    const filteredCategories = useMemo(() => {

        return filterCategories(
            testCategoryMasterMockData,
            filters,
            activeTab
        );

    }, [
        filters,
        activeTab,
        refreshKey,
    ]);


    // =========================================
    // PAGINATED DATA
    // =========================================

    const paginatedCategories = useMemo(() => {

        const startIndex =
            (page - 1) * rowsPerPage;

        const endIndex =
            startIndex + rowsPerPage;

        return filteredCategories.slice(
            startIndex,
            endIndex
        );

    }, [
        filteredCategories,
        page,
        rowsPerPage,
    ]);


    // =========================================
    // FILTER CHANGE
    // =========================================

    const handleFilterChange = (
        updatedFilters
    ) => {

        setFilters(updatedFilters);

        // Filter change ke baad
        // first page par wapas jao.
        setPage(1);

    };


    // =========================================
    // TAB CHANGE
    // =========================================

    const handleTabChange = (
        tabId
    ) => {

        setActiveTab(tabId);

        // Tab change ke baad
        // first page par wapas jao.
        setPage(1);

    };


    // =========================================
    // PAGE CHANGE
    // =========================================

    const handlePageChange = (
        event,
        newPage
    ) => {

        setPage(newPage);

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
        // first page par wapas jao.
        setPage(1);

    };


    // =========================================
    // REFRESH
    // =========================================

    const handleRefresh = () => {

        // Reset filters
        setFilters({
            search: "",
            status: "all",
            department: "all",
            authorization: "all",
        });


        // Reset tab
        setActiveTab("all");


        // Reset pagination
        setPage(1);

        setRowsPerPage(10);


        // Force recalculation / refresh
        setRefreshKey(
            (previous) => previous + 1
        );

    };


    // =========================================
    // HEADER ACTIONS
    // =========================================

    const handleHeaderAction = (
        actionId
    ) => {

        switch (actionId) {

            // ---------------------------------
            // REFRESH
            // ---------------------------------

            case "refresh":

                handleRefresh();

                break;


            // ---------------------------------
            // EXPORT
            // ---------------------------------

            case "exportCategories":

                console.log(
                    "Export Categories clicked"
                );

                break;


            // ---------------------------------
            // ADD CATEGORY
            // ---------------------------------

            case "addCategory":

                setIsAddModalOpen(true);

                break;


            // ---------------------------------
            // IMPORT
            // ---------------------------------

            case "importCategories":

                console.log(
                    "Import Categories clicked"
                );

                break;


            default:

                break;
        }

    };


    const handleAddCategory = (
        categoryPayload
    ) => {

        console.log(
            "New Category Payload:",
            categoryPayload
        );

        setIsAddModalOpen(false);
    };

    // =========================================
    // TABLE ACTIONS
    // =========================================

    const handleCategoryAction = (
        action,
        category
    ) => {

        switch (action) {

            // ---------------------------------
            // VIEW
            // ---------------------------------

            case "view":

                setSelectedCategory(category);

                setIsViewModalOpen(true);

                break;


            // ---------------------------------
            // EDIT
            // ---------------------------------

            case "edit":

                setSelectedCategory(category);

                setIsEditModalOpen(true);

                break;


            // ---------------------------------
            // DELETE
            // ---------------------------------

            case "delete":

                setCategoryToDelete(category);

                setIsDeleteModalOpen(true);

                break;


            default:

                break;
        }

    };

    const handleEditCategory = (
        updatedCategory
    ) => {

        console.log(
            "Updated Category:",
            updatedCategory
        );

        setIsEditModalOpen(false);

        setSelectedCategory(null);
    };

    // =========================================
    // RENDER
    // =========================================

    return (

        <div className="test-category-master-page">

            {/* =================================
                HEADER
            ================================= */}

            <TestCategoryMasterHeader
                onAction={
                    handleHeaderAction
                }
            />


            {/* =================================
                STATS CARDS
            ================================= */}

            <CategoryStatsCards
                stats={stats}
            />


            {/* =================================
                FILTERS
            ================================= */}

            <CategoryFilters
                filters={filters}
                onFilterChange={
                    handleFilterChange
                }
            />


            {/* =================================
                TABS
            ================================= */}

            <CategoryTabs
                activeTab={activeTab}
                onTabChange={
                    handleTabChange
                }
                counts={tabCounts}
            />


            {/* =================================
                TABLE
            ================================= */}

            <CategoryTable
                key={refreshKey}
                data={paginatedCategories}
                onAction={
                    handleCategoryAction
                }
            />


            {/* =================================
                PAGINATION
            ================================= */}

            <Pagination
                page={page}
                rowsPerPage={rowsPerPage}
                totalRows={
                    filteredCategories.length
                }
                onPageChange={
                    handlePageChange
                }
                onRowsPerPageChange={
                    handleRowsPerPageChange
                }
            />

            <ViewCategoryModal
                open={isViewModalOpen}
                category={selectedCategory}
                onClose={() => {
                    setIsViewModalOpen(false);
                    setSelectedCategory(null);
                }}
            />

            <AddCategoryModal
                open={isAddModalOpen}
                onClose={() =>
                    setIsAddModalOpen(false)
                }
                onSubmit={handleAddCategory}
            />

            <EditCategoryModal
                open={isEditModalOpen}
                category={selectedCategory}
                onClose={() => {
                    setIsEditModalOpen(false);
                    setSelectedCategory(null);
                }}
                onSubmit={handleEditCategory}
            />


            <DeleteConfirmModal
                open={isDeleteModalOpen}
                title="Delete Category"
                message="Are you sure you want to delete this laboratory test category?"
                itemLabel="Category"
                itemName={
                    categoryToDelete?.categoryName
                }
                confirmText="Delete Category"
                cancelText="Cancel"
                onClose={() => {
                    setIsDeleteModalOpen(false);
                    setCategoryToDelete(null);
                }}
                onConfirm={
                    handleDeleteCategory
                }
            />

            <ToastNotification
                open={toast.open}
                type={toast.type}
                title={toast.title}
                message={toast.message}
                duration={4000}
                onClose={handleToastClose}
            />

        </div>

    );
};


export default TestCategoryMaster;