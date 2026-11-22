import { useState } from "react";

import "./BatchTable.css";

import Pagination from "@/master_shared/components/Pagination/Pagination";

import BatchTableHeader from "./BatchTableHeader";
import BatchTableRow from "./BatchTableRow";

const BatchTable = ({

    data = [],

}) => {

    const [page, setPage] =

        useState(0);

    const [rowsPerPage, setRowsPerPage] =

        useState(10);

    /* ================================= */

    const handlePageChange = (

        event,

        newPage

    ) => {

        setPage(newPage);

    };

    /* ================================= */

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

    /* ================================= */

    const paginatedData =

        data.slice(

            page * rowsPerPage,

            page * rowsPerPage +

            rowsPerPage

        );

    return (

        <div className="batch-table-card">

            {/* ================================= */}

            <div className="batch-table-wrapper">

                <table className="batch-table">

                    <BatchTableHeader />

                    <tbody>

                        {

                            paginatedData.map(

                                (row) => (

                                    <BatchTableRow

                                        key={row.id}

                                        row={row}

                                    />

                                )

                            )

                        }

                    </tbody>

                </table>

            </div>

            {/* ================================= */}

            <Pagination

                page={page}

                rowsPerPage={rowsPerPage}

                totalRows={data.length}

                onPageChange={

                    handlePageChange

                }

                onRowsPerPageChange={

                    handleRowsPerPageChange

                }

            />

        </div>

    );

};

export default BatchTable;