import React from "react";

import "./DoctorTableHeader.css";

const DoctorTableHeader = ({
    columns = [],
    gridTemplateColumns,
    onSort,
    sortConfig,
}) => {
    // =========================================================
    // SORT STATE
    // =========================================================

    const getSortDirection = (columnKey) => {
        if (!sortConfig) {
            return null;
        }

        if (sortConfig.key !== columnKey) {
            return null;
        }

        return sortConfig.direction ?? null;
    };

    // =========================================================
    // SORT HANDLER
    // =========================================================

    const handleSort = (column) => {
        if (!column?.sortable || !onSort) {
            return;
        }

        onSort(column.key ?? column.id);
    };

    return (
        <div
            className="doctor-table-header"
            role="row"
            style={{
                "--doctor-table-columns":
                    gridTemplateColumns,
            }}
        >
            {/* =================================================
                SERIAL NUMBER
            ================================================= */}

            <div
                className="
                    doctor-table-header__cell
                    doctor-table-header__cell--serial
                "
                role="columnheader"
            >
                #
            </div>

            {/* =================================================
                CONFIGURED COLUMNS
            ================================================= */}

            {columns.map((column, index) => {
                const key =
                    column?.key ??
                    column?.id ??
                    `column-${index}`;

                const label =
                    column?.label ??
                    column?.title ??
                    key;

                const sortable =
                    Boolean(column?.sortable);

                const sortDirection =
                    getSortDirection(key);

                return (
                    <div
                        key={key}
                        className={`
                            doctor-table-header__cell
                            doctor-table-header__cell--${key}
                        `}
                        role="columnheader"
                        aria-sort={
                            sortDirection === "asc"
                                ? "ascending"
                                : sortDirection === "desc"
                                ? "descending"
                                : "none"
                        }
                    >
                        <button
                            type="button"
                            className={`
                                doctor-table-header__content
                                ${
                                    sortable
                                        ? "doctor-table-header__content--sortable"
                                        : ""
                                }
                            `}
                            onClick={() =>
                                handleSort(column)
                            }
                            disabled={
                                !sortable ||
                                !onSort
                            }
                        >
                            <span>
                                {label}
                            </span>

                            {sortable && (
                                <span
                                    className={`
                                        doctor-table-header__sort
                                        ${
                                            sortDirection
                                                ? `doctor-table-header__sort--${sortDirection}`
                                                : ""
                                        }
                                    `}
                                    aria-hidden="true"
                                >
                                    <span className="doctor-table-header__sort-arrow doctor-table-header__sort-arrow--up" />

                                    <span className="doctor-table-header__sort-arrow doctor-table-header__sort-arrow--down" />
                                </span>
                            )}
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default DoctorTableHeader;