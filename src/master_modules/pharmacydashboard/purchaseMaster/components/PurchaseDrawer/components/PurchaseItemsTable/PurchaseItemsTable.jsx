import { useState } from "react";

import TableEngine from "@/master_shared/components/TableEngine/TableEngine";
import Pagination from "@/master_shared/components/Pagination/Pagination";

import { purchaseItemsColumns } from "@/master_modules/pharmacydashboard/purchaseMaster/components/PurchaseDrawer/components/config/purchaseItemsColumns";

import "./PurchaseItemsTable.css";

const PurchaseItemsTable = ({
    items = [],
}) => {

    const [page,
        setPage] =
        useState(0);

    const [rowsPerPage,
        setRowsPerPage] =
        useState(5);

    const tableData =
        items
            .slice(
                page * rowsPerPage,
                page * rowsPerPage +
                rowsPerPage
            )
            .map(
                (
                    item,
                    index
                ) => ({
                    ...item,

                    serialNo:
                        page *
                        rowsPerPage +
                        index +
                        1,
                })
            );

    return (

        <div className="purchase-items-section">

            <div className="purchase-items-header">

                <h3>

                    Ordered Items
                    {" "}
                    ({items.length})

                </h3>

                <button>

                    View All Items

                </button>

            </div>

            <TableEngine
                columns={
                    purchaseItemsColumns
                }
                data={tableData}
            />

            <Pagination
                page={page}
                rowsPerPage={
                    rowsPerPage
                }
                totalRows={
                    items.length
                }
                onPageChange={(
                    event,
                    newPage
                ) =>
                    setPage(
                        newPage
                    )
                }
                onRowsPerPageChange={(
                    event
                ) => {

                    setRowsPerPage(
                        parseInt(
                            event.target
                                .value,
                            10
                        )
                    );

                    setPage(0);

                }}
            />

            <div className="purchase-items-footer">

                <span>

                    Total Items:
                    {" "}
                    {items.length}

                </span>

                <span>

                    Total Quantity:
                    {" "}

                    {items.reduce(
                        (
                            total,
                            item
                        ) =>
                            total +
                            item.quantity,
                        0
                    )}

                </span>

            </div>

        </div>

    );
};

export default PurchaseItemsTable;