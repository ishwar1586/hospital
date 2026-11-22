import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./../styles/supplierMaster.css";

import { supplierMock } from "../mock/supplier.mock";
import { supplierStats } from "../mock/supplierStats.mock";

import SupplierHeaderActions from "../components/SupplierHeaderActions/SupplierHeaderActions";
import SupplierStatsCards from "../components/SupplierStatsCards/SupplierStatsCards";
import SupplierFilters from "../components/SupplierFilters/SupplierFilters";
import SupplierTable from "../components/SupplierTable/SupplierTable";
import SupplierDrawer from "../components/SupplierDrawer/SupplierDrawer";
// import DeleteSupplierModal from "../components/DeleteSupplierModal/DeleteSupplierModal";
// import PurchaseHistoryDrawer from "../components/SupplierPurchaseHistory/SupplierPurchaseHistory";
import PurchaseOrdersDrawer from "../components/PurchaseOrdersDrawer/PurchaseOrdersDrawer";
import OutstandingLedgerDrawer from "../components/OutstandingLedgerDrawer/OutstandingLedgerDrawer";

import Pagination from "@/master_shared/components/Pagination/Pagination";

const SupplierMaster = () => {

    const navigate = useNavigate();

    // delete
    // const [
    //     deleteModalOpen,
    //     setDeleteModalOpen
    // ] = useState(false);


    // const handleDeleteSupplier =
    //     (supplier) => {

    //         console.log(
    //             "Delete Supplier",
    //             supplier
    //         );

    //         setDeleteModalOpen(false);

    //         setSelectedSupplier(null);
    //     };

    // delete


    // outstandingledger

    const [
        outstandingLedgerOpen,
        setOutstandingLedgerOpen
    ] = useState(false);


    const handleCloseLedger =
        () => {

            setOutstandingLedgerOpen(false);

            setSelectedSupplier(null);
        };
    // outstandingledger

    // purchase history

    const [
        purchaseHistoryOpen,
        setPurchaseHistoryOpen
    ] = useState(false);

    const handleClosePurchaseHistory =
        () => {

            setPurchaseHistoryOpen(false);

            setSelectedSupplier(null);
        };
    // purchase history

    // view
    const [selectedSupplier,
        setSelectedSupplier] =
        useState(null);

    const [isDrawerOpen,
        setIsDrawerOpen] =
        useState(false);

    const handleViewSupplier = (
        supplier
    ) => {

        setSelectedSupplier(
            supplier
        );

        setIsDrawerOpen(true);
    };

    const handleCloseDrawer = () => {

        setIsDrawerOpen(false);

        setSelectedSupplier(null);
    };

    // view

    const [page, setPage] = useState(0);

    const [rowsPerPage, setRowsPerPage] =
        useState(5);

    const [filters, setFilters] =
        useState({
            search: "",
            city: "",
            status: "",
            supplierType: "",
        });

    const data =
        supplierMock.slice(
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
        <div className="supplier-master">

            <SupplierHeaderActions

                onImport={() => {
                    console.log(
                        "Import Supplier"
                    );
                }}

                onExport={() => {
                    console.log(
                        "Export Supplier"
                    );
                }}

                onAdd={() => {
                    navigate(
                        "/module/suppliermaster/add"
                    );
                }}

            />

            <SupplierStatsCards
                statsData={supplierStats}
            />

            <SupplierFilters
                filters={filters}
                setFilters={setFilters}
            />

            <SupplierTable
                data={data}
                onAction={(action, row) => {

                    switch (action) {

                        case "view":
                            handleViewSupplier(row);
                            break;

                        case "edit":
                            navigate(
                                `/module/suppliermaster/edit/${row.id}`
                            );
                            break;

                        case "history":

                            setSelectedSupplier(row);

                            setPurchaseHistoryOpen(true);

                            break;

                        case "ledger":

                            setSelectedSupplier(row);

                            setOutstandingLedgerOpen(true);

                            break;

                        case "print":
                            console.log(
                                "Print Supplier",
                                row
                            );
                            break;

                        case "delete":
                            console.log(
                                "Delete Supplier",
                                row
                            );
                            break;


                        // case "delete":

                        //     setSelectedSupplier(row);

                        //     setDeleteModalOpen(true);

                        //     break;

                        default:
                            break;
                    }

                }}
            />

            <Pagination
                page={page}
                rowsPerPage={
                    rowsPerPage
                }
                totalRows={
                    supplierMock.length
                }
                onPageChange={
                    handlePageChange
                }
                onRowsPerPageChange={
                    handleRowsPerPageChange
                }
            />

            <SupplierDrawer
                open={isDrawerOpen}
                onClose={handleCloseDrawer}
                supplier={selectedSupplier}
            />

            {/* <PurchaseHistoryDrawer
                open={purchaseHistoryOpen}
                onClose={
                    handleClosePurchaseHistory
                }
                supplier={selectedSupplier}
            /> */}

            <PurchaseOrdersDrawer
                open={purchaseHistoryOpen}
                onClose={
                    handleClosePurchaseHistory
                }
                supplier={selectedSupplier}
            />

            <OutstandingLedgerDrawer
                open={
                    outstandingLedgerOpen
                }
                onClose={
                    handleCloseLedger
                }
                supplier={
                    selectedSupplier
                }
            />

            {/* <DeleteSupplierModal
                open={deleteModalOpen}
                onClose={() =>
                    setDeleteModalOpen(false)
                }
                supplier={selectedSupplier}
                onConfirm={
                    handleDeleteSupplier
                }
            /> */}

        </div>
    );
};

export default SupplierMaster;