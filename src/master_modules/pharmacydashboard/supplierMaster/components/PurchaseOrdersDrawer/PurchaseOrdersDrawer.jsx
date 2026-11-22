import { useMemo, useState } from "react";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";

import Pagination from "@/master_shared/components/Pagination/Pagination";

import { purchaseOrdersMock } from "../../mock/purchaseOrder.mock";

import "./PurchaseOrdersDrawer.css";

const PurchaseOrdersDrawer = ({
    open,
    onClose,
    supplier,
}) => {

    const [search, setSearch] =
        useState("");

    const [page, setPage] =
        useState(0);

    const [rowsPerPage,
        setRowsPerPage] =
        useState(5);

    const filteredOrders =
        useMemo(() => {

            return purchaseOrdersMock.filter(
                (order) =>
                    order.poNumber
                        .toLowerCase()
                        .includes(
                            search.toLowerCase()
                        )
            );

        }, [search]);

    const paginatedOrders =
        filteredOrders.slice(
            page * rowsPerPage,
            page * rowsPerPage +
            rowsPerPage
        );

    const totalPOs =
        purchaseOrdersMock.length;

    const totalAmount =
        purchaseOrdersMock.reduce(
            (sum, item) =>
                sum + item.poAmount,
            0
        );

    const totalReceived =
        purchaseOrdersMock.reduce(
            (sum, item) =>
                sum +
                item.receivedAmount,
            0
        );

    const totalPending =
        purchaseOrdersMock.reduce(
            (sum, item) =>
                sum +
                item.pendingAmount,
            0
        );

    const getStatusClass = (
        status
    ) => {

        switch (status) {

            case "Completed":
                return "completed";

            case "Pending":
                return "pending";

            case "Cancelled":
                return "cancelled";

            case "Partially Received":
                return "partial";

            default:
                return "";
        }
    };

    if (!supplier) return null;

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
        >

            <div className="purchase-orders-drawer">

                <div className="po-header">

                    <div>

                        <h2>
                            Purchase Orders
                        </h2>

                        <p>
                            Supplier :
                            {" "}
                            {supplier.supplierName}
                            {" "}
                            (
                            {supplier.supplierCode}
                            )
                        </p>

                    </div>

                    <IconButton
                        onClick={onClose}
                    >
                        <CloseOutlinedIcon />
                    </IconButton>

                </div>

                <div className="po-summary-grid">

                    <div className="po-summary-card">

                        <span>
                            Total POs
                        </span>

                        <h3>
                            {totalPOs}
                        </h3>

                    </div>

                    <div className="po-summary-card">

                        <span>
                            Total Amount
                        </span>

                        <h3>
                            ₹ {totalAmount.toLocaleString()}
                        </h3>

                    </div>

                    <div className="po-summary-card">

                        <span>
                            Received Amount
                        </span>

                        <h3>
                            ₹ {totalReceived.toLocaleString()}
                        </h3>

                    </div>

                    <div className="po-summary-card">

                        <span>
                            Pending Amount
                        </span>

                        <h3>
                            ₹ {totalPending.toLocaleString()}
                        </h3>

                    </div>

                </div>

                <div className="po-toolbar">

                    <div className="search-box">

                        <SearchOutlinedIcon />

                        <input
                            type="text"
                            placeholder="Search PO Number..."
                            value={search}
                            onChange={(e) =>
                                setSearch(
                                    e.target.value
                                )
                            }
                        />

                    </div>

                    <button
                        className="filter-btn"
                    >
                        <FilterListOutlinedIcon />

                        Filter

                    </button>

                </div>

                <div className="po-list">

                    {paginatedOrders.map(
                        (order) => (

                            <div
                                key={order.id}
                                className="po-card"
                            >

                                <div className="po-card-top">

                                    <div>

                                        <span className="po-label">
                                            PO Number
                                        </span>

                                        <h4>
                                            {
                                                order.poNumber
                                            }
                                        </h4>

                                    </div>

                                    <div>

                                        <span
                                            className={`status-chip ${getStatusClass(
                                                order.status
                                            )}`}
                                        >
                                            {
                                                order.status
                                            }
                                        </span>

                                    </div>

                                </div>

                                <div className="po-date">

                                    PO Date

                                    <strong>
                                        {
                                            order.poDate
                                        }
                                    </strong>

                                </div>

                                <div className="po-amount-grid">

                                    <div>
                                        <span>
                                            PO Amount
                                        </span>

                                        <strong>
                                            ₹ {order.poAmount.toLocaleString()}
                                        </strong>
                                    </div>

                                    <div>
                                        <span>
                                            Received Amount
                                        </span>

                                        <strong>
                                            ₹ {order.receivedAmount.toLocaleString()}
                                        </strong>
                                    </div>

                                    <div>
                                        <span>
                                            Pending Amount
                                        </span>

                                        <strong>
                                            ₹ {order.pendingAmount.toLocaleString()}
                                        </strong>
                                    </div>

                                </div>

                                <div className="po-footer">

                                    <button
                                        className="view-details-btn"
                                    >
                                        View Details
                                    </button>

                                </div>

                            </div>
                        )
                    )}

                </div>

                <Pagination
                    page={page}
                    rowsPerPage={
                        rowsPerPage
                    }
                    totalRows={
                        filteredOrders.length
                    }
                    onPageChange={(
                        event,
                        newPage
                    ) =>
                        setPage(newPage)
                    }
                    onRowsPerPageChange={(
                        event
                    ) => {

                        setRowsPerPage(
                            parseInt(
                                event.target.value,
                                10
                            )
                        );

                        setPage(0);
                    }}
                />

            </div>

        </Drawer>
    );
};

export default PurchaseOrdersDrawer;