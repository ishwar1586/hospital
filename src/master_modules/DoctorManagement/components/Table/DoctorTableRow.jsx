import React from "react";

import DoctorProfileCell
    from "./DoctorProfileCell";

import DoctorDepartmentCell
    from "./DoctorDepartmentCell";

import DoctorQualificationCell
    from "./DoctorQualificationCell";

import DoctorAvailabilityBadge
    from "./DoctorAvailabilityBadge";

import DoctorStatusBadge
    from "./DoctorStatusBadge";

import DoctorActionMenu
    from "./DoctorActionMenu";

import "./DoctorTableRow.css";


// =========================================================
// COMPONENT
// =========================================================

const DoctorTableRow = ({
    doctor,
    index = 0,
    serialNumber = 1,
    columns = [],
    gridTemplateColumns,
    onAction,
    onDoctorSelect,
}) => {


    // =====================================================
    // DOCTOR SELECT
    // =====================================================

    const handleDoctorSelect = () => {

        if (
            typeof onDoctorSelect !==
            "function"
        ) {
            return;
        }


        onDoctorSelect(
            doctor
        );
    };


    // =====================================================
    // KEYBOARD SUPPORT
    // =====================================================

    const handleKeyDown = (
        event
    ) => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            handleDoctorSelect();
        }
    };


    // =====================================================
    // COLUMN CELL
    // =====================================================

    const renderColumnCell = (
        column
    ) => {

        const columnKey =
            column?.key ??
            column?.id;


        // =================================================
        // DOCTOR
        // =================================================

        if (
            columnKey === "doctor"
        ) {

            return (

                <DoctorProfileCell
                    doctor={doctor}
                />

            );
        }


        // =================================================
        // DEPARTMENT
        // =================================================

        if (
            columnKey === "department"
        ) {

            return (

                <DoctorDepartmentCell
                    doctor={doctor}
                />

            );
        }


        // =================================================
        // QUALIFICATION
        // =================================================

        if (
            columnKey ===
            "qualification"
        ) {

            return (

                <DoctorQualificationCell
                    doctor={doctor}
                />

            );
        }


        // =================================================
        // EXPERIENCE
        // =================================================

        if (
            columnKey ===
            "experience"
        ) {

            let experience =
                doctor?.experienceLabel;


            if (
                !experience &&
                doctor?.experience !==
                    undefined &&
                doctor?.experience !==
                    null
            ) {

                experience =
                    `${doctor.experience} Years`;
            }


            return (

                <span
                    className="
                        doctor-table-row__experience
                    "
                >
                    {experience || "—"}
                </span>

            );
        }


        // =================================================
        // CONTACT
        // =================================================

        if (
            columnKey ===
            "contact"
        ) {

            const phone =
                doctor?.phone ??
                "—";


            if (
                phone === "—"
            ) {

                return (

                    <span
                        className="
                            doctor-table-row__contact
                        "
                    >
                        —
                    </span>

                );
            }


            return (

                <a
                    href={`tel:${phone}`}
                    className="
                        doctor-table-row__contact
                    "
                    onClick={(event) =>
                        event.stopPropagation()
                    }
                    onDoubleClick={(event) =>
                        event.stopPropagation()
                    }
                >
                    {phone}
                </a>

            );
        }


        // =================================================
        // AVAILABILITY
        // =================================================

        if (
            columnKey ===
            "availability"
        ) {

            return (

                <DoctorAvailabilityBadge
                    availability={
                        doctor?.availability
                    }
                />

            );
        }


        // =================================================
        // STATUS
        // =================================================

        if (
            columnKey ===
            "status"
        ) {

            return (

                <DoctorStatusBadge
                    status={
                        doctor?.status
                    }
                />

            );
        }


        // =================================================
        // ACTIONS
        // =================================================

        if (
            columnKey ===
            "actions"
        ) {

            return (

                <DoctorActionMenu
                    doctor={doctor}
                    onAction={onAction}
                />

            );
        }


        // =================================================
        // UNKNOWN COLUMN
        // =================================================

        return (

            <span
                className="
                    doctor-table-row__fallback
                "
            >
                —
            </span>

        );
    };


    // =====================================================
    // RENDER
    // =====================================================

    return (

        <div
            className={`
                doctor-table-row

                ${
                    index % 2 === 1
                        ? "doctor-table-row--alternate"
                        : ""
                }
            `}
            style={{
                "--doctor-table-columns":
                    gridTemplateColumns,
            }}
            role="row"
            tabIndex={
                typeof onDoctorSelect ===
                "function"
                    ? 0
                    : undefined
            }
            onClick={
                typeof onDoctorSelect ===
                "function"
                    ? handleDoctorSelect
                    : undefined
            }
            onKeyDown={
                typeof onDoctorSelect ===
                "function"
                    ? handleKeyDown
                    : undefined
            }
        >

            {/* =========================================
                SERIAL NUMBER
            ========================================= */}

            <div
                className="
                    doctor-table-row__cell
                    doctor-table-row__cell--serial
                "
                role="cell"
            >
                {serialNumber}
            </div>


            {/* =========================================
                CONFIG-DRIVEN COLUMNS
            ========================================= */}

            {Array.isArray(columns) &&
                columns.map(
                    (
                        column,
                        columnIndex
                    ) => {

                        const columnKey =
                            column?.key ??
                            column?.id ??
                            `column-${columnIndex}`;


                        return (

                            <div
                                key={columnKey}
                                className={`
                                    doctor-table-row__cell
                                    doctor-table-row__cell--${columnKey}
                                `}
                                role="cell"
                            >

                                {renderColumnCell(
                                    column
                                )}

                            </div>

                        );
                    }
                )}

        </div>
    );
};


export default DoctorTableRow;