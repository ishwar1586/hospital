import React, { useMemo } from "react";

import DoctorTableHeader from "./DoctorTableHeader";
import DoctorTableRow from "./DoctorTableRow";

import { DOCTOR_TABLE_COLUMNS } from "../../config/doctorConfig";

import "./DoctorTable.css";

const DoctorTable = ({
    doctors = [],
    loading = false,
    error = null,
    page = 1,
    rowsPerPage = 10,
    onAction,
    onDoctorSelect,
    onSort,
    sortConfig,
}) => {
    // =========================================================
    // TABLE COLUMNS
    // =========================================================

    const columns = useMemo(() => {
        if (Array.isArray(DOCTOR_TABLE_COLUMNS)) {
            return DOCTOR_TABLE_COLUMNS;
        }

        if (
            DOCTOR_TABLE_COLUMNS &&
            typeof DOCTOR_TABLE_COLUMNS === "object"
        ) {
            return Object.values(DOCTOR_TABLE_COLUMNS);
        }

        return [];
    }, []);

    // =========================================================
    // GRID COLUMNS
    // =========================================================
    //
    // Config widths:
    // 20% + 14% + 17% + 10% + 14% + 12% + 9% + 4%
    // = 100%
    //
    // # column is separate 42px.
    // Percentage values are converted to fr so that the
    // remaining width is distributed correctly.
    // =========================================================

    const gridTemplateColumns = useMemo(() => {
        const configuredColumns = columns.map((column) => {
            const width = String(column?.width ?? "").trim();

            if (width.endsWith("%")) {
                const numericWidth = Number.parseFloat(width);

                if (Number.isFinite(numericWidth)) {
                    return `${numericWidth}fr`;
                }
            }

            return "1fr";
        });

        return ["42px", ...configuredColumns].join(" ");
    }, [columns]);

    // =========================================================
    // CURRENT PAGE START INDEX
    // =========================================================

    const startIndex = Math.max(
        0,
        (page - 1) * rowsPerPage
    );

    // =========================================================
    // LOADING STATE
    // =========================================================

    if (loading) {
        return (
            <section className="doctor-table">
                <div
                    className="doctor-table__loading"
                    role="status"
                    aria-live="polite"
                >
                    Loading doctors...
                </div>
            </section>
        );
    }

    // =========================================================
    // ERROR STATE
    // =========================================================

    if (error) {
        return (
            <section className="doctor-table">
                <div
                    className="doctor-table__state doctor-table__state--error"
                    role="alert"
                >
                    {error}
                </div>
            </section>
        );
    }

    // =========================================================
    // EMPTY STATE
    // =========================================================

    if (!doctors.length) {
        return (
            <section className="doctor-table">
                <DoctorTableHeader
                    columns={columns}
                    gridTemplateColumns={gridTemplateColumns}
                    onSort={onSort}
                    sortConfig={sortConfig}
                />

                <div className="doctor-table__empty">
                    <div className="doctor-table__empty-title">
                        No doctors found
                    </div>

                    <div className="doctor-table__empty-text">
                        Try changing the search or filter criteria.
                    </div>
                </div>
            </section>
        );
    }

    // =========================================================
    // TABLE
    // =========================================================

    return (
        <section className="doctor-table">
            <div
                className="doctor-table__inner"
                style={{
                    "--doctor-table-columns":
                        gridTemplateColumns,
                }}
            >
                <DoctorTableHeader
                    columns={columns}
                    gridTemplateColumns={gridTemplateColumns}
                    onSort={onSort}
                    sortConfig={sortConfig}
                />

                <div
                    className="doctor-table__body"
                    role="rowgroup"
                >
                    {doctors.map((doctor, index) => (
                        <DoctorTableRow
                            key={
                                doctor?.id ??
                                doctor?.doctorId ??
                                `doctor-${index}`
                            }
                            doctor={doctor}
                            index={index}
                            serialNumber={startIndex + index + 1}
                            columns={columns}
                            gridTemplateColumns={
                                gridTemplateColumns
                            }
                            onAction={onAction}
                            onDoctorSelect={onDoctorSelect}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DoctorTable;