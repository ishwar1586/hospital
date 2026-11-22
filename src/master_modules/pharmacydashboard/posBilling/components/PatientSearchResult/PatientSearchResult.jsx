import { useEffect, useState } from "react";

import "./PatientSearchResult.css";

import {
    SearchOffOutlined,
} from "@mui/icons-material";

import PatientTable from "./PatientTable";

import {
    patientSearchResults,
} from "../../mock/patient.mock";

import Pagination from "@/master_shared/components/Pagination/Pagination";

const PatientSearchResult = ({

    customerType,

    searchTerm = "",

    onSelect,

}) => {

    /* ==========================================
       Walk-in
    ========================================== */

    if (customerType === "walkin") {

        return null;

    }

    /* ==========================================
       Filter Patients
    ========================================== */

    const keyword =

        searchTerm

            .trim()

            .toLowerCase();

    const filteredPatients =

        patientSearchResults.filter(

            (patient) => {

                if (!keyword) return true;

                return (

                    patient.patientName

                        ?.toLowerCase()

                        .includes(keyword)

                    ||

                    patient.uhid

                        ?.toLowerCase()

                        .includes(keyword)

                    ||

                    patient.mobile

                        ?.includes(keyword)

                    ||

                    patient.doctor

                        ?.toLowerCase()

                        .includes(keyword)

                    ||

                    patient.department

                        ?.toLowerCase()

                        .includes(keyword)

                    ||

                    patient.patientType

                        ?.toLowerCase()

                        .includes(keyword)

                );

            }

        );


    /* ==========================================
Pagination
========================================== */

    const [page, setPage] = useState(1);

    const [rowsPerPage, setRowsPerPage] =

        useState(10);

    useEffect(() => {

        setPage(1);

    }, [searchTerm]);

    const totalRows =

        filteredPatients.length;

    const startIndex =

        (page - 1) * rowsPerPage;

    const endIndex =

        startIndex + rowsPerPage;

    const paginatedPatients =

        filteredPatients.slice(

            startIndex,

            endIndex

        );

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

            parseInt(event.target.value, 10)

        );

        setPage(1);

    };

    /* ==========================================
       JSX
    ========================================== */

    return (

        <section className="patient-search-result">

            {/* ================================= */}
            {/* Header */}
            {/* ================================= */}

            <div className="patient-search-result-header">

                <div>

                    <h3>

                        Patient Search Results

                    </h3>

                    <p>

                        Select a patient to continue billing.

                    </p>

                </div>

                <span>

                    {

                        filteredPatients.length

                    }

                    {" "}

                    Patient

                    {

                        filteredPatients.length > 1

                            ? "s"

                            : ""

                    }

                </span>

            </div>

            {/* ================================= */}
            {/* Empty */}
            {/* ================================= */}

            {

                filteredPatients.length === 0 ? (

                    <div className="patient-empty">

                        <SearchOffOutlined />

                        <h4>

                            No Patient Found

                        </h4>

                        <p>

                            Try another UHID,

                            Patient Name,

                            Mobile Number,

                            Doctor,

                            or Department.

                        </p>

                    </div>

                ) : (

                    // <PatientTable

                    //     patients={filteredPatients}

                    //     onSelect={onSelect}

                    // />


                    <>

                        <PatientTable

                            patients={paginatedPatients}

                            onSelect={onSelect}

                        />

                        <Pagination

                            page={page}

                            rowsPerPage={rowsPerPage}

                            totalRows={totalRows}

                            onPageChange={handlePageChange}

                            onRowsPerPageChange={

                                handleRowsPerPageChange

                            }

                        />

                    </>

                )

            }

        </section>

    );

};

export default PatientSearchResult;