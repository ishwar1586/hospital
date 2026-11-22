import TestResultRow
    from "./TestResultRow";

import "./TestResultTable.css";


// =========================================
// COMPONENT
// =========================================

const TestResultTable = ({
    data = [],

    columns = [],

    resultValues = {},

    onResultChange,
}) => {


    // =========================================
    // DATA SAFETY
    // =========================================

    const safeData =
        Array.isArray(data)
            ? data
            : [];


    const safeColumns =
        Array.isArray(columns)
            ? columns
            : [];


    const hasData =
        safeData.length > 0;


    const hasColumns =
        safeColumns.length > 0;


    // =========================================
    // RESULT CHANGE
    // =========================================

    const handleResultChange = (
        resultId,
        value
    ) => {

        if (
            typeof onResultChange !==
            "function"
        ) {

            return;

        }


        onResultChange(
            resultId,
            value
        );

    };


    // =========================================
    // EMPTY COLUMNS
    // =========================================

    if (!hasColumns) {

        return (

            <section
                className="
                    test-result-table-card
                "
            >

                <div
                    className="
                        test-result-table__empty
                    "
                >

                    <div
                        className="
                            test-result-table__empty-title
                        "
                    >

                        No Result Columns

                    </div>


                    <div
                        className="
                            test-result-table__empty-message
                        "
                    >

                        Result table configuration
                        is not available.

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
                test-result-table-card
            "
        >

            {/* =================================
                TABLE WRAPPER
            ================================= */}

            <div
                className="
                    test-result-table-wrapper
                "
            >

                <table
                    className="
                        test-result-table
                    "
                >

                    {/* =================================
                        TABLE HEADER
                    ================================= */}

                    <thead>

                        <tr>

                            {safeColumns.map(
                                (column) => {

                                    const Icon =
                                        column.icon;


                                    return (

                                        <th

                                            key={
                                                column.id
                                            }

                                            scope="col"

                                            style={{
                                                width:
                                                    column.width,
                                            }}

                                            className={`
                                                test-result-table__header-cell
                                                test-result-table__header-cell--${
                                                    column.align ||
                                                    "left"
                                                }
                                            `}
                                        >

                                            <div
                                                className="
                                                    test-result-table__header-content
                                                "
                                            >

                                                {/* =====================
                                                    HEADER ICON
                                                ===================== */}

                                                {Icon && (

                                                    <Icon />

                                                )}


                                                {/* =====================
                                                    HEADER LABEL
                                                ===================== */}

                                                <span>

                                                    {
                                                        column.label
                                                    }

                                                </span>

                                            </div>

                                        </th>

                                    );

                                }
                            )}

                        </tr>

                    </thead>


                    {/* =================================
                        TABLE BODY
                    ================================= */}

                    <tbody>

                        {hasData ? (

                            safeData.map(
                                (
                                    item,
                                    rowIndex
                                ) => {

                                    const rowKey =
                                        item.id ??
                                        item.testId ??
                                        item.testCode ??
                                        `result-row-${rowIndex}`;


                                    return (

                                        <TestResultRow

                                            key={
                                                rowKey
                                            }

                                            data={
                                                item
                                            }

                                            columns={
                                                safeColumns
                                            }

                                            resultValues={
                                                resultValues
                                            }

                                            rowIndex={
                                                rowIndex
                                            }

                                            onResultChange={
                                                handleResultChange
                                            }

                                        />

                                    );

                                }
                            )

                        ) : (

                            <tr>

                                <td

                                    colSpan={
                                        safeColumns.length
                                    }

                                    className="
                                        test-result-table__empty-cell
                                    "
                                >

                                    <div
                                        className="
                                            test-result-table__empty
                                        "
                                    >

                                        <div
                                            className="
                                                test-result-table__empty-title
                                            "
                                        >

                                            No Test Results

                                        </div>


                                        <div
                                            className="
                                                test-result-table__empty-message
                                            "
                                        >

                                            No test parameters
                                            are available for
                                            this result.

                                        </div>

                                    </div>

                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>

            </div>

        </section>

    );

};


export default TestResultTable;