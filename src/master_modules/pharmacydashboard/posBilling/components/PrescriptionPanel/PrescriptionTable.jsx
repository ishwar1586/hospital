import "./PrescriptionTable.css";

import Pagination from "@/master_shared/components/Pagination/Pagination";

import PrescriptionRow from "./PrescriptionRow";

const PrescriptionTable = ({

    medicines = [],

    page = 0,

    rowsPerPage = 10,

    totalRows = 0,

    onPageChange,

    onRowsPerPageChange,

    onAdd,

    onView,

}) => {

    return (

        <section className="prescription-table-wrapper">

            {/* ===================================== */}
            {/* Header */}
            {/* ===================================== */}

            <div className="prescription-table-header">

                <div className="col-medicine">

                    Medicine

                </div>

                <div>

                    Strength

                </div>

                <div>

                    Frequency

                </div>

                <div>

                    Days

                </div>

                <div>

                    Qty

                </div>

                <div>

                    Stock

                </div>

                <div>

                    MRP

                </div>

                <div>

                    Status

                </div>

                <div className="col-action">

                    Action

                </div>

            </div>

            {/* ===================================== */}
            {/* Body */}
            {/* ===================================== */}

            <div className="prescription-table-body">

                {

                    medicines.length > 0 ? (

                        medicines.map((medicine) => (

                            <PrescriptionRow

                                key={medicine.id}

                                medicine={medicine}

                                onAdd={onAdd}

                                onView={onView}

                            />

                        ))

                    ) : (

                        <div className="prescription-no-data">

                            No Prescription Medicines Found

                        </div>

                    )

                }

            </div>

            {/* ===================================== */}
            {/* Pagination */}
            {/* ===================================== */}

            <div className="prescription-pagination">

                <Pagination

                    page={page}

                    rowsPerPage={rowsPerPage}

                    totalRows={totalRows}

                    onPageChange={onPageChange}

                    onRowsPerPageChange={

                        onRowsPerPageChange

                    }

                />

            </div>

        </section>

    );

};

export default PrescriptionTable;