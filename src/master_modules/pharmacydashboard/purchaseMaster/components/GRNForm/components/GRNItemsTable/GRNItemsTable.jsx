import { useState } from "react";

import {
    Add,
    QrCodeScanner,
    UploadFile,
} from "@mui/icons-material";

import "./GRNItemsTable.css";

import Pagination from "@/master_shared/components/Pagination/Pagination";

import GRNTableRow from "@/master_modules/pharmacydashboard/purchaseMaster/components/GRNForm/components/GRNItemsTable/GRNTableRow";

const GRNItemsTable = ({
    items = [],
    setItems,
}) => {

    const [page, setPage] = useState(0);

    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handlePageChange = (
        event,
        newPage
    ) => {

        setPage(newPage);

    };

    const handleRowsPerPageChange = (
        event
    ) => {

        setRowsPerPage(
            parseInt(
                event.target.value,
                10
            )
        );

        setPage(0);

    };

    const visibleRows =
        items.slice(
            page * rowsPerPage,
            page * rowsPerPage +
            rowsPerPage
        );

    const totalQty =
        items.reduce(
            (sum, row) =>
                sum +
                Number(
                    row.receivedQty || 0
                ),
            0
        );

    const totalAmount =
        items.reduce(
            (sum, row) =>
                sum +
                Number(
                    row.amount || 0
                ),
            0
        );

    return (

        <section className="grn-items-card">

            {/* Header */}

            <div className="grn-items-header">

                <div>

                    <h2>

                        Received Items

                    </h2>

                    <p>

                        Receive medicines against Purchase Order

                    </p>

                </div>

                <div className="grn-toolbar">

                    <button className="primary-btn">

                        <Add />

                        Add Item

                    </button>

                    <button className="outline-btn">

                        <QrCodeScanner />

                        Scan Barcode

                    </button>

                    <button className="outline-btn">

                        <UploadFile />

                        Import Excel

                    </button>

                </div>

            </div>

            {/* Table */}

            <div className="grn-table-wrapper">

                <table className="grn-table">

                    <thead>

                        <tr>

                            <th>#</th>

                            <th>Medicine</th>

                            <th>Batch No.</th>

                            <th>Expiry Date</th>

                            <th>HSN</th>

                            <th>Unit</th>

                            <th>PO Qty</th>

                            <th>Received Qty</th>

                            <th>Rate (₹)</th>

                            <th>Disc %</th>

                            <th>GST %</th>

                            <th>Amount (₹)</th>

                            <th></th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            visibleRows.map(

                                (
                                    item,
                                    index
                                ) => (

                                    <GRNTableRow

                                        key={item.id}

                                        index={
                                            page *
                                            rowsPerPage +
                                            index +
                                            1
                                        }

                                        item={item}

                                        items={items}

                                        setItems={
                                            setItems
                                        }

                                    />

                                )

                            )

                        }

                    </tbody>

                </table>

            </div>

            {/* Footer */}

            <div className="grn-items-footer">

                <div className="footer-summary">

                    <span>

                        <strong>

                            Total Items :

                        </strong>

                        {" "}
                        {items.length}

                    </span>

                    <span>

                        <strong>

                            Total Qty :

                        </strong>

                        {" "}
                        {totalQty}

                    </span>

                    <span>

                        <strong>

                            Total Amount :

                        </strong>

                        {" "}
                        ₹{" "}
                        {totalAmount.toLocaleString(
                            "en-IN"
                        )}

                    </span>

                </div>

            </div>

            {/* Pagination */}

            <Pagination

                page={page}

                rowsPerPage={rowsPerPage}

                totalRows={items.length}

                onPageChange={handlePageChange}

                onRowsPerPageChange={
                    handleRowsPerPageChange
                }

            />

        </section>

    );

};

export default GRNItemsTable;