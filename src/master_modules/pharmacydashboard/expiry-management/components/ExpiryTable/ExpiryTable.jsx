import Pagination from "@/master_shared/components/Pagination/Pagination";

import ExpiryRow from "./ExpiryRow";

import "./ExpiryTable.css";

const ExpiryTable = ({

    data = [],

    page,

    rowsPerPage,

    totalRows,

    onPageChange,

    onRowsPerPageChange,

    onView,

}) => {

    return (

        <div className="expiry-table-card">

            <div className="expiry-table-wrapper">

                <table className="expiry-table">

                    <thead>

                        <tr>

                            <th>#</th>

                            <th>Medicine</th>

                            <th>Batch No</th>

                            <th>Category</th>

                            <th>Manufacturer</th>

                            <th>Expiry Date</th>

                            <th>Days Left</th>

                            <th>Stock</th>

                            <th>Unit</th>

                            <th>Stock Value</th>

                            <th>Status</th>

                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            data.length > 0 ? (

                                data.map((medicine) => (

                                    <ExpiryRow

                                        key={medicine.id}

                                        medicine={medicine}

                                        onView={onView}

                                    />

                                ))

                            ) : (

                                <tr>

                                    <td

                                        colSpan="12"

                                        className="no-data"

                                    >

                                        No expiry medicines found.

                                    </td>

                                </tr>

                            )

                        }

                    </tbody>

                </table>

            </div>

            <Pagination

                page={page}

                rowsPerPage={rowsPerPage}

                totalRows={totalRows}

                onPageChange={onPageChange}

                onRowsPerPageChange={onRowsPerPageChange}

            />

        </div>

    );

};

export default ExpiryTable;