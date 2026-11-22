import { useEffect, useState } from "react";

import "./PrescriptionPanel.css";

import PrescriptionTable from "./PrescriptionTable";

const PrescriptionPanel = ({

    prescriptionData,

    onAddMedicine,

    onAddAll,

}) => {

    /* ==========================================
       State
    ========================================== */

    const [page, setPage] = useState(1);

    const [rowsPerPage, setRowsPerPage] =

        useState(10);

    const [medicines, setMedicines] =

        useState([]);

    /* ==========================================
       Load Prescription
    ========================================== */

    useEffect(() => {

        if (prescriptionData) {

            setMedicines(

                prescriptionData.medicines || []

            );

        }

        else {

            setMedicines([]);

        }

        setPage(1);

    }, [

        prescriptionData,

    ]);

    /* ==========================================
       Pagination
    ========================================== */

    const totalRows = medicines.length;

    const startIndex =

        (page - 1) * rowsPerPage;

    const endIndex =

        startIndex + rowsPerPage;

    const paginatedMedicines =

        medicines.slice(

            startIndex,

            endIndex

        );

    /* ==========================================
       Pagination Handlers
    ========================================== */

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

        setPage(1);

    };

    /* ==========================================
       Empty
    ========================================== */

    if (!prescriptionData) {

        return (

            <section className="prescription-panel empty">

                <div className="prescription-empty">

                    <h2>

                        Prescription Panel

                    </h2>

                    <p>

                        Select a patient and click

                        <strong>

                            {" "}Load Prescription{" "}

                        </strong>

                        to view prescribed medicines.

                    </p>

                </div>

            </section>

        );

    }

    const {

        patient,

        prescription,

    } = prescriptionData;

    return (

        <section className="prescription-panel">

            {/* ================================= */}
            {/* Header */}
            {/* ================================= */}

            <div className="prescription-header">

                <div>

                    <h2>

                        Doctor Prescription

                    </h2>

                    <p>

                        {

                            prescription.doctor

                        }

                        {" • "}

                        {

                            prescription.department

                        }

                    </p>

                </div>

                <button

                    className="add-all-btn"

                    onClick={() =>

                        onAddAll?.(

                            medicines

                        )

                    }

                >

                    Add All Medicines

                </button>

            </div>

            {/* ================================= */}
            {/* Summary */}
            {/* ================================= */}

            <div className="prescription-summary">

                <div>

                    <span>

                        Patient

                    </span>

                    <strong>

                        {

                            patient.patientName

                        }

                    </strong>

                </div>

                <div>

                    <span>

                        UHID

                    </span>

                    <strong>

                        {

                            patient.uhid

                        }

                    </strong>

                </div>

                <div>

                    <span>

                        Prescription ID

                    </span>

                    <strong>

                        {

                            prescription.prescriptionId

                        }

                    </strong>

                </div>

                <div>

                    <span>

                        Visit No.

                    </span>

                    <strong>

                        {

                            prescription.visitNo

                        }

                    </strong>

                </div>

                <div>

                    <span>

                        Date

                    </span>

                    <strong>

                        {

                            prescription.prescriptionDate

                        }

                    </strong>

                </div>

                <div>

                    <span>

                        Department

                    </span>

                    <strong>

                        {

                            prescription.department

                        }

                    </strong>

                </div>

            </div>

            {/* ================================= */}
            {/* Table */}
            {/* ================================= */}

            <PrescriptionTable

                medicines={

                    paginatedMedicines

                }

                page={page}

                rowsPerPage={

                    rowsPerPage

                }

                totalRows={

                    totalRows

                }

                onPageChange={

                    handlePageChange

                }

                onRowsPerPageChange={

                    handleRowsPerPageChange

                }

                onAdd={

                    onAddMedicine

                }

                onView={(medicine)=>{

                    console.log(

                        medicine

                    );

                }}

            />

        </section>

    );

};

export default PrescriptionPanel;