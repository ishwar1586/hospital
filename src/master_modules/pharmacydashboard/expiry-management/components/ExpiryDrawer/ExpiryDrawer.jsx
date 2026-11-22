import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import {
    CloseRounded,
    WarningAmberRounded,
    Inventory2Rounded,
    PaidRounded,
    AssessmentOutlined,

    PrintOutlined,

    LocalShippingOutlined,

    DeleteOutlineOutlined,
} from "@mui/icons-material";

import ExpiryStatusChip from "../ExpiryStatusChip/ExpiryStatusChip";

import "./ExpiryDrawer.css";

const ExpiryDrawer = ({

    open,

    data,

    onClose,

}) => {

    if (!data) return null;

    return (

        <Drawer

            anchor="right"

            open={open}

            onClose={onClose}

            PaperProps={{

                sx: {

                    width: 580,

                    background: "#f8fafc",

                }

            }}

        >

            <div className="expiry-drawer">

                {/* ============================================
                    Header
                ============================================ */}

                <div className="expiry-drawer-header">

                    <div>

                        <h2>

                            Medicine Details

                        </h2>

                        <div className="drawer-subtitle">

                            <span>

                                Batch :

                                <strong>

                                    {data.batchNo}

                                </strong>

                            </span>

                            <ExpiryStatusChip

                                status={data.status}

                            />

                        </div>

                    </div>

                    <IconButton

                        onClick={onClose}

                    >

                        <CloseRounded />

                    </IconButton>

                </div>

                {/* ============================================
                    Body
                ============================================ */}

                <div className="expiry-drawer-body">

                    {/* ============================================
                        Summary Cards
                    ============================================ */}
{/* 
                    <div className="drawer-summary">

                        <div className="summary-card blue">

                            <Inventory2Rounded />

                            <small>

                                Stock Qty

                            </small>

                            <h3>

                                {data.stockQty}

                            </h3>

                            <span>

                                {data.unit}

                            </span>

                        </div>

                        <div className="summary-card green">

                            <PaidRounded />

                            <small>

                                Stock Value

                            </small>

                            <h3>

                                ₹{data.stockValue.toLocaleString()}

                            </h3>

                        </div>

                        <div className="summary-card red">

                            <WarningAmberRounded />

                            <small>

                                Days Left

                            </small>

                            <h3>

                                {

                                    data.daysLeft < 0

                                        ?

                                        `${Math.abs(data.daysLeft)} Days Ago`

                                        :

                                        `${data.daysLeft} Days`

                                }

                            </h3>

                        </div>

                    </div> */}

                    {/* ============================================
                        Medicine Information
                    ============================================ */}

                    <div className="drawer-section">

                        <div className="drawer-section-title">

                            <div className="title-line" />

                            <h3>

                                Medicine Information

                            </h3>

                        </div>

                        <div className="drawer-grid">

                            <div className="drawer-item">

                                <label>

                                    Medicine Name

                                </label>

                                <span>

                                    {data.medicineName}

                                </span>

                            </div>

                            <div className="drawer-item">

                                <label>

                                    Generic Name

                                </label>

                                <span>

                                    {data.genericName}

                                </span>

                            </div>

                            <div className="drawer-item">

                                <label>

                                    Category

                                </label>

                                <span>

                                    {data.category}

                                </span>

                            </div>

                            <div className="drawer-item">

                                <label>

                                    Manufacturer

                                </label>

                                <span>

                                    {data.manufacturer}

                                </span>

                            </div>

                            <div className="drawer-item">

                                <label>

                                    Supplier

                                </label>

                                <span>

                                    {data.supplier}

                                </span>

                            </div>

                        </div>

                    </div>


                    {/* ============================================
                        Batch Information
                    ============================================ */}

                    <div className="drawer-section">

                        <div className="drawer-section-title">

                            <div className="title-line" />

                            <h3>

                                Batch & Expiry Information

                            </h3>

                        </div>

                        <div className="drawer-grid">

                            <div className="drawer-item">

                                <label>

                                    Batch Number

                                </label>

                                <span>

                                    {data.batchNo}

                                </span>

                            </div>

                            <div className="drawer-item">

                                <label>

                                    Expiry Date

                                </label>

                                <span>

                                    {data.expiryDate}

                                </span>

                            </div>

                            <div className="drawer-item">

                                <label>

                                    Days Left

                                </label>

                                <span
                                    className={
                                        data.daysLeft < 0
                                            ? "text-danger"
                                            : "text-primary"
                                    }
                                >

                                    {

                                        data.daysLeft < 0

                                            ?

                                            `${Math.abs(data.daysLeft)} Days Ago`

                                            :

                                            `${data.daysLeft} Days`

                                    }

                                </span>

                            </div>

                            <div className="drawer-item">

                                <label>

                                    Current Status

                                </label>

                                <ExpiryStatusChip

                                    status={data.status}

                                />

                            </div>

                        </div>

                    </div>

                    {/* ============================================
                        Stock Information
                    ============================================ */}

                    <div className="drawer-section">

                        <div className="drawer-section-title">

                            <div className="title-line" />

                            <h3>

                                Stock Information

                            </h3>

                        </div>

                        <div className="drawer-grid">

                            <div className="drawer-item">

                                <label>

                                    Warehouse

                                </label>

                                <span>

                                    {data.warehouse}

                                </span>

                            </div>

                            <div className="drawer-item">

                                <label>

                                    Current Stock

                                </label>

                                <span>

                                    {data.stockQty} {data.unit}

                                </span>

                            </div>

                            <div className="drawer-item">

                                <label>

                                    Stock Value

                                </label>

                                <span>

                                    ₹{data.stockValue.toLocaleString()}

                                </span>

                            </div>

                            <div className="drawer-item">

                                <label>

                                    Supplier

                                </label>

                                <span>

                                    {data.supplier}

                                </span>

                            </div>

                        </div>

                    </div>

                    {/* ============================================
                        Financial Information
                    ============================================ */}

                    <div className="drawer-section">

                        <div className="drawer-section-title">

                            <div className="title-line" />

                            <h3>

                                Financial Information

                            </h3>

                        </div>

                        <div className="drawer-grid">

                            <div className="drawer-item">

                                <label>

                                    Purchase Price

                                </label>

                                <span>

                                    ₹{data.purchasePrice}

                                </span>

                            </div>

                            <div className="drawer-item">

                                <label>

                                    MRP

                                </label>

                                <span>

                                    ₹{data.mrp}

                                </span>

                            </div>

                            <div className="drawer-item">

                                <label>

                                    Profit Margin

                                </label>

                                <span className="text-success">

                                    ₹{data.mrp - data.purchasePrice}

                                </span>

                            </div>

                            <div className="drawer-item">

                                <label>

                                    Total Stock Value

                                </label>

                                <span>

                                    ₹{data.stockValue.toLocaleString()}

                                </span>

                            </div>

                        </div>

                    </div>


                    {/* ======================================================
                        Quick Actions
                    ====================================================== */}

                    <div className="drawer-section">

                        <div className="drawer-section-title">

                            <div className="title-line" />

                            <h3>

                                Quick Actions

                            </h3>

                        </div>

                        <div className="drawer-actions">

                            <button
                                type="button"
                                className="drawer-action-btn report"
                            >

                                <AssessmentOutlined />

                                <div>

                                    <strong>

                                        Generate Report

                                    </strong>

                                    <small>

                                        Download expiry report

                                    </small>

                                </div>

                            </button>

                            <button
                                type="button"
                                className="drawer-action-btn print"
                            >

                                <PrintOutlined />

                                <div>

                                    <strong>

                                        Print Details

                                    </strong>

                                    <small>

                                        Print medicine information

                                    </small>

                                </div>

                            </button>

                            <button
                                type="button"
                                className="drawer-action-btn supplier"
                            >

                                <LocalShippingOutlined />

                                <div>

                                    <strong>

                                        Return Supplier

                                    </strong>

                                    <small>

                                        Create supplier return

                                    </small>

                                </div>

                            </button>

                            <button
                                type="button"
                                className="drawer-action-btn dispose"
                            >

                                <DeleteOutlineOutlined />

                                <div>

                                    <strong>

                                        Dispose Stock

                                    </strong>

                                    <small>

                                        Mark as disposed

                                    </small>

                                </div>

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </Drawer>

    );

};

export default ExpiryDrawer;