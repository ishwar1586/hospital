import { useState } from "react";

import "./LedgerTable.css";

import Pagination from "@/master_shared/components/Pagination/Pagination";

import LedgerTableHeader from "./LedgerTableHeader";
import LedgerTableRow from "./LedgerTableRow";

const LedgerTable = ({

    data = [],

}) => {

    const [page, setPage] = useState(0);

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

        <div className="ledger-table-card">

            {/* ================================= */}

            <div className="ledger-table-wrapper">

                <table className="ledger-table">

                    <LedgerTableHeader />

                    <tbody>

                        {

                            paginatedData.map(

                                (row) => (

                                    <LedgerTableRow

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

export default LedgerTable;