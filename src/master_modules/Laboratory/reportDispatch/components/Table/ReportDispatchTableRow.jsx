// =========================================
// REPORT DISPATCH TABLE ROW
// =========================================

import DispatchModeChip
    from "./DispatchModeChip";

import DispatchStatusChip
    from "./DispatchStatusChip";

import ReportDispatchActionMenu
    from "./ReportDispatchActionMenu";


// =========================================
// REPORT DISPATCH TABLE ROW
// =========================================

const ReportDispatchTableRow = ({
    report = {},

    columns = [],

    onView,
    onDispatch,
    onHistory,
}) => {

    // =========================================
    // SAFE COLUMNS
    // =========================================

    const safeColumns =
        Array.isArray(
            columns
        )
            ? columns
            : [];


    // =========================================
    // CELL VALUE
    // =========================================

    const getCellValue = (
        column
    ) => {

        if (
            !column ||
            !column.key
        ) {
            return null;
        }


        // =====================================
        // CUSTOM RENDERER
        // =====================================

        if (
            typeof column.render ===
            "function"
        ) {

            return column.render(
                report
            );

        }


        // =====================================
        // ACTION COLUMN
        // =====================================

        if (
            column.key ===
            "actions"
        ) {

            return (

                <ReportDispatchActionMenu

                    report={
                        report
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

            );

        }


        // =====================================
        // DISPATCH MODE
        // =====================================

        if (
            column.key ===
            "dispatchMode"
        ) {

            return (

                <DispatchModeChip

                    mode={
                        report.dispatchMode
                    }

                />

            );

        }


        // =====================================
        // STATUS
        // =====================================

        if (
            column.key ===
            "status"
        ) {

            return (

                <DispatchStatusChip

                    status={
                        report.status
                    }

                />

            );

        }


        // =====================================
        // AGE / GENDER
        // =====================================

        if (
            column.key ===
            "ageGender"
        ) {

            const age =
                report.age ??
                "-";


            const gender =
                report.gender ??
                "-";


            return (
                `${age} / ${gender}`
            );

        }


        // =====================================
        // DEFAULT VALUE
        // =====================================

        const value =
            report[
                column.key
            ];


        if (
            value ===
            null ||
            value ===
            undefined ||
            value ===
            ""
        ) {
            return "-";
        }


        return value;

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <tr
            className="
                report-dispatch-table-row
            "
        >

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

                        <td
                            key={
                                column.key
                            }

                            className={`
                                report-dispatch-table-row__cell
                                ${
                                    column.className ||
                                    ""
                                }
                            `}
                        >

                            <div
                                className="
                                    report-dispatch-table-row__cell-content
                                "
                            >

                                {
                                    getCellValue(
                                        column
                                    )
                                }

                            </div>

                        </td>

                    );

                }
            )}

        </tr>

    );

};


export default ReportDispatchTableRow;