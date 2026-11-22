import { useEffect, useState } from "react";

import "../styles/testMaster.css";

import MasterPageHeader
    from "@/master_shared/components/PageHeader/MasterPageHeader";

import TestStatsCards
    from "../components/StatsCards/TestStatsCards";

import TestFilters
    from "../components/Filters/TestFilters";

import TestTabs
    from "../components/Tabs/TestTabs";

import TestTable
    from "../components/Table/TestTable";

import Pagination
    from "@/master_shared/components/Pagination/Pagination";

import headerConfig
    from "../config/headerActions";

import testMasterData
    from "../mock/testMaster.mock";

import useTestFilters
    from "../hooks/useTestFilters";

import useTestPagination
    from "../hooks/useTestPagination";

import ViewTestModal
    from "../components/modals/ViewTestModal";

import AddTestModal
    from "../components/modals/AddTestModal";

import EditTestModal
    from "../components/modals/EditTestModal";

import QuickActions
    from "../components/QuickActions/QuickActions";


const TestMaster = () => {

    const [viewTestOpen, setViewTestOpen] = useState(false);
    const [addTestOpen, setAddTestOpen] = useState(false);

    const [editTestOpen, setEditTestOpen] = useState(false);

    const [selectedTest, setSelectedTest] = useState(null);

    /* =================================
       FILTER + TAB STATE
    ================================= */

    const {
        filters,
        activeTab,
        filteredData,
        tabCounts,
        updateFilters,
        updateTab,
        resetFilters,
    } = useTestFilters(testMasterData);

    /* =================================
       PAGINATION
    ================================= */

    const {
        page,
        rowsPerPage,
        totalRows,
        currentPageData,
        onPageChange,
        onRowsPerPageChange,
        resetPage,
    } = useTestPagination(filteredData);


    /* =================================
       RESET PAGINATION
       WHEN FILTER OR TAB CHANGES
    ================================= */

    useEffect(() => {
        resetPage();
    }, [
        filters,
        activeTab,
        resetPage,
    ]);


    /* =================================
       HEADER ACTION
    ================================= */

    const handleHeaderAction = (actionId) => {

        switch (actionId) {

            case "refresh":

                resetFilters();
                resetPage();

                break;

            case "import":

                console.log(
                    "Import Tests clicked"
                );

                break;

            case "export":

                console.log(
                    "Export clicked"
                );

                break;

            case "addTest":

                setAddTestOpen(true);

                break;



            default:
                break;
        }
    };

    const handleQuickAction = (action) => {

        switch (action) {

            case "addTest":

                setAddTestOpen(true);

                break;

            case "importTests":

                console.log(
                    "Import Tests clicked"
                );

                break;

            case "exportTests":

                console.log(
                    "Export Tests clicked"
                );

                break;

            case "manageCategories":

                console.log(
                    "Manage Categories clicked"
                );

                break;

            default:
                break;
        }
    };


    /* =================================
       FILTER CHANGE
    ================================= */

    const handleFilterChange = (
        updatedFilters
    ) => {

        updateFilters(
            updatedFilters
        );

    };


    /* =================================
       TAB CHANGE
    ================================= */

    const handleTabChange = (
        tabId
    ) => {

        updateTab(tabId);

    };


    /* =================================
       TABLE ACTION
    ================================= */

    const handleTableAction = (action, test) => {

        switch (action) {

            case "view":

                setSelectedTest(test);

                setViewTestOpen(true);

                break;

            case "edit":

                setSelectedTest(test);

                setEditTestOpen(true);

                break;

            case "duplicate":

                console.log(
                    "Duplicate Test:",
                    test
                );

                break;

            case "delete":

                console.log(
                    "Delete Test:",
                    test
                );

                break;

            default:
                break;
        }
    };


    const handleAddTest = (newTest) => {

        console.log(
            "New Test:",
            newTest
        );

        setAddTestOpen(false);
    };


    const handleEditTest = (updatedTest) => {

        console.log(
            "Updated Test:",
            updatedTest
        );

        setEditTestOpen(false);

        setSelectedTest(null);
    };

    return (

        <div className="test-master-page">

            {/* ==========================
                HEADER
            ========================== */}

            <MasterPageHeader
                config={headerConfig}
                onAction={
                    handleHeaderAction
                }
            />


            {/* ==========================
                STATS
            ========================== */}

            <TestStatsCards />


            {/* ==========================
                FILTERS
            ========================== */}



            <TestFilters
                filters={filters}
                onFilterChange={handleFilterChange}
            />


            {/* ==========================
                TABS
            ========================== */}

            <TestTabs
                activeTab={activeTab}
                counts={tabCounts}
                onTabChange={handleTabChange}
            />


            {/* ==========================
                TABLE
            ========================== */}

            <TestTable
                data={currentPageData}
                onAction={
                    handleTableAction
                }
            />


            {/* ==========================
                PAGINATION
            ========================== */}

            <div className="test-master-pagination">

                <Pagination
                    page={page}
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

                <QuickActions
                    onAction={handleQuickAction}
                />

                <ViewTestModal
                    open={viewTestOpen}
                    test={selectedTest}
                    onClose={() => {
                        setViewTestOpen(false);
                        setSelectedTest(null);
                    }}
                />

                <AddTestModal
                    open={addTestOpen}
                    onClose={() => {
                        setAddTestOpen(false);
                    }}
                    onSubmit={handleAddTest}
                />


                <EditTestModal
                    open={editTestOpen}
                    test={selectedTest}
                    onClose={() => {
                        setEditTestOpen(false);
                        setSelectedTest(null);
                    }}
                    onSubmit={handleEditTest}
                />

            </div>

        </div>
    );
};

export default TestMaster;