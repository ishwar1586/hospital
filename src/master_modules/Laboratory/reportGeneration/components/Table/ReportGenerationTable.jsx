import { useMemo } from "react";

import reportGenerationColumns
    from "../../config/reportGenerationColumns";

import ReportGenerationTableRow
    from "./ReportGenerationTableRow";

import "./ReportGenerationTable.css";


const ReportGenerationTable = ({
    reports = [],

    onPreview,
    onGenerate,
    onDownload,
    onPrint,
    onEmail,
    onRetry,
}) => {

    const reportList = useMemo(
        () => {

            if (
                !Array.isArray(
                    reports
                )
            ) {
                return [];
            }

            return reports;

        },
        [reports]
    );


    if (
        reportList.length === 0
    ) {

        return (

            <section
                className="
                    report-generation-table
                "
            >

                <div
                    className="
                        report-generation-table__empty
                    "
                >

                    <div
                        className="
                            report-generation-table__empty-icon
                        "
                    >
                        —
                    </div>


                    <h3
                        className="
                            report-generation-table__empty-title
                        "
                    >
                        No reports found
                    </h3>


                    <p
                        className="
                            report-generation-table__empty-description
                        "
                    >
                        No reports match the
                        current filters.
                    </p>

                </div>

            </section>

        );

    }


    return (

        <section
            className="
                report-generation-table
            "
        >

            <div
                className="
                    report-generation-table__scroll
                "
            >

                <table
                    className="
                        report-generation-table__element
                    "
                >

                    <thead
                        className="
                            report-generation-table__head
                        "
                    >

                        <tr
                            className="
                                report-generation-table__head-row
                            "
                        >

                            {reportGenerationColumns.map(
                                (column) => (

                                    <th
                                        key={
                                            column.id
                                        }

                                        className={`
                                            report-generation-table__head-cell
                                            report-generation-table__head-cell--${column.align || "left"}
                                        `}

                                        style={{
                                            width:
                                                column.width,

                                            minWidth:
                                                column.width,
                                        }}
                                    >

                                        {
                                            column.label
                                        }

                                    </th>

                                )
                            )}

                        </tr>

                    </thead>


                    <tbody
                        className="
                            report-generation-table__body
                        "
                    >

                        {reportList.map(
                            (report) => (

                                <ReportGenerationTableRow

                                    key={
                                        report.id
                                    }

                                    report={
                                        report
                                    }

                                    columns={
                                        reportGenerationColumns
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

                            )
                        )}

                    </tbody>

                </table>

            </div>

        </section>

    );

};


export default ReportGenerationTable;