// =========================================
// REPORT GENERATION TABLE ROW
// =========================================

import ReportStatusChip
    from "./ReportStatusChip";

import ReportActionMenu
    from "./ReportActionMenu";


// =========================================
// REPORT GENERATION TABLE ROW
// =========================================

const ReportGenerationTableRow = ({
    report,
    columns = [],

    onPreview,
    onGenerate,
    onDownload,
    onPrint,
    onEmail,
    onRetry,
}) => {

    // =========================================
    // SAFE REPORT
    // =========================================

    const safeReport =
        report &&
        typeof report === "object"
            ? report
            : {};


    // =========================================
    // FORMAT TESTS
    // =========================================

    const renderTests = () => {

        const tests =
            Array.isArray(
                safeReport.tests
            )
                ? safeReport.tests
                : [];


        // =====================================
        // NO TESTS
        // =====================================

        if (
            tests.length === 0
        ) {

            return (

                <span
                    className="
                        report-generation-table-row__muted
                    "
                >
                    —
                </span>

            );

        }


        // =====================================
        // VISIBLE TESTS
        // =====================================

        const visibleTests =
            tests.slice(
                0,
                2
            );


        // =====================================
        // REMAINING COUNT
        // =====================================

        const remainingCount =
            Math.max(
                tests.length -
                visibleTests.length,
                0
            );


        // =====================================
        // RENDER TESTS
        // =====================================

        return (

            <div
                className="
                    report-generation-table-row__tests
                "
            >

                {visibleTests.map(
                    (
                        test,
                        index
                    ) => (

                        <span
                            key={`
                                ${safeReport.id}-test-${index}
                            `}

                            className="
                                report-generation-table-row__test
                            "

                            title={
                                test
                            }
                        >
                            {test}
                        </span>

                    )
                )}


                {remainingCount > 0 && (

                    <span
                        className="
                            report-generation-table-row__test-more
                        "
                    >
                        +{remainingCount}
                    </span>

                )}

            </div>

        );

    };


    // =========================================
    // PATIENT CELL
    // =========================================

    const renderPatient = () => {

        const patientName =
            safeReport.patientName ||
            "Unknown Patient";


        const age =
            safeReport.age;


        const gender =
            safeReport.gender;


        return (

            <div
                className="
                    report-generation-table-row__patient
                "
            >

                <span
                    className="
                        report-generation-table-row__patient-name
                    "

                    title={
                        patientName
                    }
                >
                    {patientName}
                </span>


                {(age !== undefined ||
                    gender) && (

                    <span
                        className="
                            report-generation-table-row__patient-meta
                        "
                    >

                        {age !== undefined &&
                            age !== null
                            ? `${age} yrs`
                            : ""}


                        {age !== undefined &&
                            age !== null &&
                            gender
                            ? " / "
                            : ""}


                        {gender || ""}

                    </span>

                )}

            </div>

        );

    };


    // =========================================
    // CELL RENDERER
    // =========================================

    const renderCell = (
        column
    ) => {

        const {
            type,
            key,
        } = column;


        // =====================================
        // PATIENT
        // =====================================

        if (
            type ===
            "patient"
        ) {

            return (
                renderPatient()
            );

        }


        // =====================================
        // TESTS
        // =====================================

        if (
            type ===
            "tests"
        ) {

            return (
                renderTests()
            );

        }


        // =====================================
        // STATUS
        // =====================================

        if (
            type ===
            "status"
        ) {

            return (

                <ReportStatusChip
                    status={
                        safeReport[
                            key
                        ]
                    }
                />

            );

        }


        // =====================================
        // ACTIONS
        // =====================================

        if (
            type ===
            "actions"
        ) {

            return (

                <ReportActionMenu

                    report={
                        safeReport
                    }

                    onPreview={
                        onPreview
                    }

                    onGenerate={
                        onGenerate
                    }

                    onDownload={
                        onDownload
                    }

                    onPrint={
                        onPrint
                    }

                    onEmail={
                        onEmail
                    }

                    onRetry={
                        onRetry
                    }

                />

            );

        }


        // =====================================
        // DATE / TIME
        // =====================================

        if (
            type ===
            "dateTime"
        ) {

            return (

                <span
                    className="
                        report-generation-table-row__text
                    "
                >
                    {
                        safeReport[
                            key
                        ] || "—"
                    }
                </span>

            );

        }


        // =====================================
        // REPORT FORMAT
        // =====================================

        if (
            type ===
            "format"
        ) {

            return (

                <span
                    className="
                        report-generation-table-row__format
                    "
                >
                    {
                        safeReport[
                            key
                        ] || "—"
                    }
                </span>

            );

        }


        // =====================================
        // DEFAULT
        // =====================================

        return (

            <span
                className="
                    report-generation-table-row__text
                "

                title={
                    safeReport[
                        key
                    ] || ""
                }
            >
                {
                    safeReport[
                        key
                    ] || "—"
                }
            </span>

        );

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <tr
            className="
                report-generation-table-row
            "
        >

            {columns.map(
                (column) => (

                    <td
                        key={
                            column.id
                        }

                        className={`
                            report-generation-table-row__cell
                            report-generation-table-row__cell--${column.align || "left"}
                        `}

                        style={{
                            width:
                                column.width,

                            minWidth:
                                column.width,
                        }}
                    >

                        {renderCell(
                            column
                        )}

                    </td>

                )
            )}

        </tr>

    );

};


export default ReportGenerationTableRow;