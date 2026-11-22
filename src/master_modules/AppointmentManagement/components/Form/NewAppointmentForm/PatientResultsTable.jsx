import React from "react";

import "./PatientResultsTable.css";


const PatientResultsTable = ({
    patients = [],
    selectedPatientId,
    onSelectPatient,
}) => {

    // =====================================================
    // Patient Selection
    // =====================================================

    const handlePatientSelect = (
        patient
    ) => {

        if (
            typeof onSelectPatient === "function"
        ) {
            onSelectPatient(
                patient
            );
        }

    };


    // =====================================================
    // Render
    // =====================================================

    return (

        <div className="patient-results-table">

            {/* =============================================
                Table Header
            ============================================= */}

            <div className="patient-results-table__header">

                <div className="patient-results-table__header-cell patient-results-table__header-cell--select">
                    Select
                </div>

                <div className="patient-results-table__header-cell">
                    UHID
                </div>

                <div className="patient-results-table__header-cell">
                    Patient Name
                </div>

                <div className="patient-results-table__header-cell">
                    Age / Gender
                </div>

                <div className="patient-results-table__header-cell">
                    Mobile No.
                </div>

                <div className="patient-results-table__header-cell">
                    Last Visit
                </div>

                <div className="patient-results-table__header-cell">
                    Status
                </div>

            </div>


            {/* =============================================
                Table Body
            ============================================= */}

            <div className="patient-results-table__body">

                {patients.length > 0 ? (

                    patients.map(
                        (patient) => {

                            const isSelected =
                                selectedPatientId ===
                                patient.id;


                            return (

                                <div
                                    key={
                                        patient.id
                                    }
                                    className={`
                                        patient-results-table__row
                                        ${
                                            isSelected
                                                ? "patient-results-table__row--selected"
                                                : ""
                                        }
                                    `}
                                >

                                    {/* =====================
                                        Select
                                    ===================== */}

                                    <div
                                        className="
                                            patient-results-table__cell
                                            patient-results-table__cell--select
                                        "
                                    >

                                        <input
                                            type="radio"
                                            name="selected-patient"
                                            checked={
                                                isSelected
                                            }
                                            onChange={() =>
                                                handlePatientSelect(
                                                    patient
                                                )
                                            }
                                            className="
                                                patient-results-table__radio
                                            "
                                            aria-label={`
                                                Select ${patient.patientName}
                                            `}
                                        />

                                    </div>


                                    {/* =====================
                                        UHID
                                    ===================== */}

                                    <div className="patient-results-table__cell">

                                        <span className="patient-results-table__uhid">
                                            {patient.uhid ||
                                                "—"}
                                        </span>

                                    </div>


                                    {/* =====================
                                        Patient Name
                                    ===================== */}

                                    <div className="patient-results-table__cell">

                                        <span className="patient-results-table__patient-name">
                                            {patient.patientName ||
                                                "—"}
                                        </span>

                                    </div>


                                    {/* =====================
                                        Age / Gender
                                    ===================== */}

                                    <div className="patient-results-table__cell">

                                        <span className="patient-results-table__age-gender">
                                            {patient.age ||
                                                "—"}

                                            {patient.age &&
                                            patient.gender
                                                ? " Y / "
                                                : ""}

                                            {patient.gender ||
                                                ""}
                                        </span>

                                    </div>


                                    {/* =====================
                                        Mobile
                                    ===================== */}

                                    <div className="patient-results-table__cell">

                                        <span className="patient-results-table__mobile">
                                            {patient.mobile ||
                                                "—"}
                                        </span>

                                    </div>


                                    {/* =====================
                                        Last Visit
                                    ===================== */}

                                    <div className="patient-results-table__cell">

                                        <div className="patient-results-table__last-visit">

                                            <span className="patient-results-table__last-visit-date">
                                                {patient.lastVisit ||
                                                    "—"}
                                            </span>


                                            {patient.lastVisitDetails && (

                                                <span className="patient-results-table__last-visit-details">
                                                    {
                                                        patient.lastVisitDetails
                                                    }
                                                </span>

                                            )}

                                        </div>

                                    </div>


                                    {/* =====================
                                        Status
                                    ===================== */}

                                    <div className="patient-results-table__cell">

                                        <span
                                            className={`
                                                patient-results-table__status
                                                patient-results-table__status--${String(
                                                    patient.status ||
                                                        ""
                                                )
                                                    .toLowerCase()
                                                    .replace(
                                                        /\s+/g,
                                                        "-"
                                                    )}
                                            `}
                                        >
                                            {patient.status ||
                                                "—"}
                                        </span>

                                    </div>

                                </div>

                            );

                        }
                    )

                ) : (

                    <div className="patient-results-table__empty">

                        <span className="patient-results-table__empty-title">
                            No patients found
                        </span>

                        <span className="patient-results-table__empty-message">
                            Search for a patient to view matching records.
                        </span>

                    </div>

                )}

            </div>

        </div>

    );

};


export default PatientResultsTable;