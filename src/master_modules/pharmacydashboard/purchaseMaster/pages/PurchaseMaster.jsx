import { useState } from "react";
import { useNavigate }
    from "react-router-dom";
import "./../styles/purchaseMaster.css";

import PurchaseHeaderActions from "../components/PurchaseHeaderActions/PurchaseHeaderActions";
import PurchaseStatsCards from "../components/PurchaseStatsCards/PurchaseStatsCards";
import PurchaseFilters from "../components/PurchaseFilters/PurchaseFilters";
import PurchaseStatusTabs from "../components/PurchaseStatusTabs/PurchaseStatusTabs";
import PurchaseTable from "../components/PurchaseTable/PurchaseTable";

import Pagination from "@/master_shared/components/Pagination/Pagination";

import { purchaseMasterMock } from "../mock/purchaseMaster.mock";
import { purchaseStats } from "../mock/purchaseStats.mock";

import { purchaseTabs } from "../config/purchaseTabs";

import PurchaseDrawer
    from "../components/PurchaseDrawer/PurchaseDrawer";

import {
    purchaseDrawerMock
} from "@/master_modules/pharmacydashboard/purchaseMaster/components/PurchaseDrawer/mock/purchaseDrawer.mock.js";

const PurchaseMaster = () => {

    // view

    const [purchaseDrawerOpen,
        setPurchaseDrawerOpen] =
        useState(false);

    const [selectedPurchase,
        setSelectedPurchase] =
        useState(null);


    const handleClosePurchaseDrawer =
        () => {

            setPurchaseDrawerOpen(false);

            setSelectedPurchase(null);

        };
    // view

    const navigate =
        useNavigate();

    const [page, setPage] =
        useState(0);

    const [rowsPerPage,
        setRowsPerPage] =
        useState(5);

    const [activeTab,
        setActiveTab] =
        useState("all");

    const [filters,
        setFilters] =
        useState({
            search: "",
            fromDate: "",
            toDate: "",
            status: "",
            supplier: "",
            poType: "",
        });

    const data =
        purchaseMasterMock.slice(
            page * rowsPerPage,
            page * rowsPerPage +
            rowsPerPage
        );

    const handlePageChange = (
        event,
        newPage
    ) => {

        setPage(newPage);
    };

    const handleRowsPerPageChange =
        (event) => {

            setRowsPerPage(
                parseInt(
                    event.target.value,
                    10
                )
            );

            setPage(0);
        };

    return (

        <div className="purchase-master">

            {/* Header */}

            <PurchaseHeaderActions

                onImport={() => {
                    console.log(
                        "Import Purchase Order"
                    );
                }}

                onExport={() => {
                    console.log(
                        "Export Purchase Order"
                    );
                }}

                onAdd={() => {

                    navigate(
                        "/module/purchasemaster/add"
                    );

                }}

            />

            {/* Stats */}

            <PurchaseStatsCards
                statsData={purchaseStats}
            />

            {/* Filters */}

            <PurchaseFilters
                filters={filters}
                setFilters={setFilters}
            />

            {/* Status Tabs */}

            <PurchaseStatusTabs
                tabs={purchaseTabs}
                activeTab={activeTab}
                onTabChange={
                    setActiveTab
                }
            />

            {/* Table */}

            <PurchaseTable
                data={data}
                onAction={(
                    action,
                    row
                ) => {

                    switch (
                    action
                    ) {

                        case "view":

                            setSelectedPurchase(
                                purchaseDrawerMock
                            );

                            setPurchaseDrawerOpen(true);

                            break;

                        case "edit":

                            navigate(
                                `/module/purchasemaster/edit/${row.id}`
                            );

                            break;

                        // case "grn":

                        //     navigate(
                        //         `/module/purchasemaster/grn/${row.id}`
                        //     );

                        //     break;

                        case "print":

                            console.log(
                                "Print Purchase Order",
                                row
                            );

                            break;

                        case "clone":

                            console.log(
                                "Clone Purchase Order",
                                row
                            );

                            break;

                        case "cancel":

                            console.log(
                                "Cancel Purchase Order",
                                row
                            );

                            break;

                        case "delete":

                            console.log(
                                "Delete Purchase Order",
                                row
                            );

                            break;

                        default:
                            break;
                    }

                }}
            />

            {/* Pagination */}

            <Pagination
                page={page}
                rowsPerPage={
                    rowsPerPage
                }
                totalRows={
                    purchaseMasterMock.length
                }
                onPageChange={
                    handlePageChange
                }
                onRowsPerPageChange={
                    handleRowsPerPageChange
                }
            />

            <PurchaseDrawer
                open={purchaseDrawerOpen}
                onClose={
                    handleClosePurchaseDrawer
                }
                purchase={selectedPurchase}
            />

        </div>

    );
};

export default PurchaseMaster;