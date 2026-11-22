import { useState } from "react";

import "./StockTable.css";

import Pagination from "@/master_shared/components/Pagination/Pagination";

import StockTableHeader from "./StockTableHeader";
import StockTableRow from "./StockTableRow";

const StockTable = ({

    data = [],

    onAction,

}) => {

    const [page, setPage] =
        useState(0);

    const [rowsPerPage,
        setRowsPerPage] =
        useState(10);

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

    const paginatedData =
        data.slice(

            page * rowsPerPage,

            page * rowsPerPage +

            rowsPerPage

        );

    return (

        <div className="stock-table-card">

            {/* ======================= */}

            <div className="stock-table-wrapper">

                <table className="stock-table">

                    <StockTableHeader />

                    <tbody>

                        {

                            paginatedData.map((row) => (

                                <StockTableRow

                                    key={row.id}

                                    row={row}

                                    onAction={onAction}

                                />

                            ))

                        }

                    </tbody>

                </table>

            </div>

            {/* ======================= */}

            <Pagination

                page={page}

                rowsPerPage={rowsPerPage}

                totalRows={data.length}

                onPageChange={handlePageChange}

                onRowsPerPageChange={
                    handleRowsPerPageChange
                }

            />

        </div>

    );

};

export default StockTable;