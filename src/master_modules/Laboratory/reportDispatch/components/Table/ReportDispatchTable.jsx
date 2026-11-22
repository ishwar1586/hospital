// =========================================
// REPORT DISPATCH TABLE
// =========================================

import ReportDispatchTableRow
    from "./ReportDispatchTableRow";

import "./ReportDispatchTable.css";


// =========================================
// REPORT DISPATCH TABLE
// =========================================

const ReportDispatchTable = ({
    reports = [],

    columns = [],

    onView,
    onDispatch,
    onHistory,
}) => {

    // =========================================
    // SAFE DATA
    // =========================================

    const safeReports =
        Array.isArray(
            reports
        )
            ? reports
            : [];


    const safeColumns =
        Array.isArray(
            columns
        )
            ? columns
            : [];


    // =========================================
    // EMPTY STATE
    // =========================================

    if (
        safeReports.length === 0
    ) {

        return (

            <section
                className="
                    report-dispatch-table
                "
            >

                <div
                    className="
                        report-dispatch-table__container
                    "
                >

                    <div
                        className="
                            report-dispatch-table__empty
                        "
                    >

                        <div
                            className="
                                report-dispatch-table__empty-icon
                            "
                        >
                            📄
                        </div>


                        <strong>
                            No dispatch reports found
                        </strong>


                        <span>
                            There are no reports matching
                            the current filters.
                        </span>

                    </div>

                </div>

            </section>

        );

    }


    // =========================================
    // RENDER
    // =========================================

    return (

        <section
            className="
                report-dispatch-table
            "
        >

            <div
                className="
                    report-dispatch-table__container
                "
            >

                <div
                    className="
                        report-dispatch-table__scroll
                    "
                >

                    <table
                        className="
                            report-dispatch-table__table
                        "
                    >

                        {/* =========================
                            TABLE HEADER
                        ========================= */}

                        <thead
                            className="
                                report-dispatch-table__head
                            "
                        >

                            <tr>

                                {safeColumns.map(
                                    (
                                        column
                                    ) => {

                                        if (
                                            !column ||
                                            !column.key
                                        ) {
                                            return null;
                                        }


                                        return (

                                            <th
                                                key={
                                                    column.key
                                                }

                                                className={`
                                                    report-dispatch-table__header-cell
                                                    ${
                                                        column.className ||
                                                        ""
                                                    }
                                                `}
                                            >

                                                {
                                                    column.label
                                                }

                                            </th>

                                        );

                                    }
                                )}

                            </tr>

                        </thead>


                        {/* =========================
                            TABLE BODY
                        ========================= */}

                        <tbody
                            className="
                                report-dispatch-table__body
                            "
                        >

                            {safeReports.map(
                                (
                                    report
                                ) => (

                                    <ReportDispatchTableRow

                                        key={
                                            report.id
                                        }

                                        report={
                                            report
                                        }

                                        columns={
                                            safeColumns
                                        }

                                        onView={
                                            onView
                                        }

                                        onDispatch={
                                            onDispatch
                                        }

                                        onHistory={
                                            onHistory
                                        }

                                    />

                                )
                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </section>

    );

};


export default ReportDispatchTable;