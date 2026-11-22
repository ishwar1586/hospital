import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./../styles/stockMaster.css";

import StockHeaderActions from "../components/StockHeaderActions/StockHeaderActions";
import StockStatsCards from "../components/StockStatsCards/StockStatsCards";
import StockFilters from "../components/StockFilters/StockFilters";

import { stockStats } from "../mock/stockStats.mock";

import StockTabs from "../components/StockTabs/StockTabs";

import { stockTabs } from "../config/stockTabs";


import StockTable from "../components/StockTable/StockTable";

import { stockMasterMock }
    from "../mock/stockMaster.mock";

import StockDrawer from "../components/StockDrawer/StockDrawer";

import AdjustmentDrawer
    from "../components/StockAdjustment/components/AdjustmentDrawer/AdjustmentDrawer";

import TransferDrawer
    from "../components/StockTransfer/components/TransferDrawer";

import BarcodeDrawer
    from "../components/StockBarcode/components/BarcodeDrawer";

const StockMaster = () => {

    const navigate = useNavigate();

    /* =========================================
       Filters
    ========================================= */

    const [filters, setFilters] = useState({

        search: "",

        category: "",

        supplier: "",

        status: "",

        stockStatus: "",

        expiryDate: "",

    });



    /* =========================================
   Tabs
========================================= */

    const [activeTab, setActiveTab] = useState("all");


    /* =========================================
   Drawer
========================================= */

    const [drawerOpen, setDrawerOpen] = useState(false);

    const [selectedStock, setSelectedStock] = useState(null);


    const handleCloseDrawer = () => {

        setDrawerOpen(false);

        setSelectedStock(null);

    };


    /* =========================================
   Stock Adjustment Drawer
========================================= */

    const [

        adjustmentOpen,

        setAdjustmentOpen,

    ] = useState(false);

    const [

        adjustmentStock,

        setAdjustmentStock,

    ] = useState(null);



    const handleCloseAdjustment = () => {

        setAdjustmentOpen(false);

        setAdjustmentStock(null);

    };


    /* =========================================
       Transfer Drawer
    ========================================= */

    const [

        transferOpen,

        setTransferOpen,

    ] = useState(false);

    const [

        transferStock,

        setTransferStock,

    ] = useState(null);


    const handleCloseTransfer = () => {

        setTransferOpen(false);

        setTransferStock(null);

    };

    /* =========================================
       Barcode Drawer
    ========================================= */

    const [

        barcodeOpen,

        setBarcodeOpen,

    ] = useState(false);

    const [

        barcodeStock,

        setBarcodeStock,

    ] = useState(null);


    const handleCloseBarcode = () => {

        setBarcodeOpen(false);

        setBarcodeStock(null);

    };

    /* =========================================
       Table
    ========================================= */

    const [tableData] =
        useState(stockMasterMock);

    /* =========================================
       Pagination
    ========================================= */




    const filteredData =
        tableData;


    const finalData =
        filteredData;



    // const handleTableAction = (

    //     action,

    //     row

    // ) => {

    //     switch (action) {

    //         case "view":

    //             console.log(row);

    //             break;

    //         case "edit":

    //             console.log(row);

    //             break;

    //         default:

    //             console.log(action, row);

    //     }

    // };


    const handleTableAction = (action, row) => {

        switch (action) {

            case "view":

                setSelectedStock(row);

                setDrawerOpen(true);

                break;

            case "edit":

                navigate(`/module/stockmaster/edit/${row.id}`);

                break;

            case "batchHistory":

                console.log("Batch History", row);

                break;

            case "stockLedger":

                console.log("Stock Ledger", row);

                break;

            // case "adjustStock":

            //     console.log("Adjust Stock", row);

            //     break;

            case "adjustStock":

                setAdjustmentStock(row);

                setAdjustmentOpen(true);

                break;

            case "transferStock":

                setTransferStock(row);

                setTransferOpen(true);

                break;

            case "printBarcode":

                setBarcodeStock(row);

                setBarcodeOpen(true);

                break;

            case "printLabel":

                console.log("Print Label", row);

                break;

            default:

                break;

        }

    };

    return (

        <div className="stock-master">

            {/* ================================= */}
            {/* Header */}
            {/* ================================= */}

            <StockHeaderActions

                onAdd={() =>
                    navigate("/module/stockmaster/add")
                }

                onExport={() =>
                    console.log("Export Excel")
                }

                onColumns={() =>
                    console.log("Column Visibility")
                }

            />

            {/* ================================= */}
            {/* Stats */}
            {/* ================================= */}

            <section className="stock-stats-section">

                <StockStatsCards

                    statsData={stockStats}

                />

            </section>

            {/* ================================= */}
            {/* Filters */}
            {/* ================================= */}

            <section className="stock-filter-section">

                <StockFilters

                    filters={filters}

                    setFilters={setFilters}

                // onReset={handleResetFilters}

                />


            </section>

            {/* ================================= */}
            {/* Stock Tabs */}
            {/* ================================= */}

            <section className="stock-tabs-section">

                <StockTabs

                    tabs={stockTabs}

                    activeTab={activeTab}

                    onTabChange={setActiveTab}

                />

            </section>



            {/* ================================= */}

            <section className="stock-table-section">

                <StockTable

                    data={finalData}

                    onAction={handleTableAction}

                />

            </section>

            {/* =========================================
    Stock Drawer
========================================= */}

            {/* <StockDrawer

                open={drawerOpen}

                onClose={handleCloseDrawer}

                stock={selectedStock}

            /> */}


            <StockDrawer

                open={drawerOpen}

                onClose={handleCloseDrawer}

                stock={selectedStock}

                onEdit={(stock) => {

                    navigate(

                        `/module/pharmacy/stockmaster/edit/${stock.id}`

                    );

                }}

                onPrint={(stock) => {

                    console.log(

                        "Print",

                        stock

                    );

                }}

            />


            <AdjustmentDrawer

                open={adjustmentOpen}

                onClose={handleCloseAdjustment}

                stock={adjustmentStock}

                onSave={(payload) => {

                    console.log(

                        "Adjustment Saved",

                        payload

                    );

                    handleCloseAdjustment();

                }}

            />

            <TransferDrawer

                open={transferOpen}

                onClose={handleCloseTransfer}

                stock={transferStock}

                onSave={(payload) => {

                    console.log(

                        "Transfer Saved",

                        payload

                    );

                    handleCloseTransfer();

                }}

            />

            <BarcodeDrawer

                open={barcodeOpen}

                onClose={handleCloseBarcode}

                stock={barcodeStock}

                onPrint={(payload) => {

                    console.log(

                        "Print Barcode",

                        payload

                    );

                    handleCloseBarcode();

                }}

            />

        </div>

    );

};

export default StockMaster;