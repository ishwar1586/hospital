import "./TestResultTable.css";


// =========================================
// COMPONENT
// =========================================

const TestResultRow = ({
    data = {},

    columns = [],

    resultValues = {},

    rowIndex = 0,

    onResultChange,
}) => {


    // =========================================
    // RESULT CHANGE
    // =========================================

    const handleResultChange = (
        resultId,
        value
    ) => {

        if (
            typeof onResultChange ===
            "function"
        ) {

            onResultChange(
                resultId,
                value
            );

        }

    };


    // =========================================
    // CELL RENDERER
    // =========================================

    const renderCell = (
        column
    ) => {

        const value =
            column.accessor
                ? data[
                    column.accessor
                ]
                : null;


        // =====================================
        // TEST
        // =====================================

        if (
            column.type ===
            "test"
        ) {

            return (

                <div
                    className="
                        test-result-table__test
                    "
                >

                    <span
                        className="
                            test-result-table__test-name
                        "
                    >

                        {
                            data.testName ||
                            "—"
                        }

                    </span>


                    {data.testCode && (

                        <span
                            className="
                                test-result-table__test-code
                            "
                        >

                            {
                                data.testCode
                            }

                        </span>

                    )}

                </div>

            );

        }


        // =====================================
        // RESULT INPUT
        // =====================================

        if (
            column.type ===
            "resultInput"
        ) {

            const resultId =
                data.id ??
                data.testId ??
                data.testCode ??
                rowIndex;


            const currentValue =
                resultValues[
                    resultId
                ] ??
                data.result ??
                "";


            return (

                <input

                    type="text"

                    className="
                        test-result-table__result-input
                    "

                    value={
                        currentValue
                    }

                    onChange={(
                        event
                    ) =>
                        handleResultChange(
                            resultId,
                            event.target.value
                        )
                    }

                    placeholder={
                        column.placeholder ||
                        "Enter result"
                    }

                    autoComplete="off"

                />

            );

        }


        // =====================================
        // UNIT
        // =====================================

        if (
            column.type ===
            "unit"
        ) {

            return (

                <span
                    className="
                        test-result-table__unit
                    "
                >

                    {
                        value ||
                        "—"
                    }

                </span>

            );

        }


        // =====================================
        // REFERENCE RANGE
        // =====================================

        if (
            column.type ===
            "referenceRange"
        ) {

            return (

                <span
                    className="
                        test-result-table__reference
                    "
                >

                    {
                        value ||
                        "—"
                    }

                </span>

            );

        }


        // =====================================
        // FLAG
        // =====================================

        if (
            column.type ===
            "flag"
        ) {

            if (!value) {

                return (

                    <span
                        className="
                            test-result-table__muted
                        "
                    >

                        —

                    </span>

                );

            }


            const normalizedFlag =
                String(
                    value
                )
                    .trim()
                    .toLowerCase();


            return (

                <span
                    className={`
                        test-result-table__flag
                        test-result-table__flag--${normalizedFlag}
                    `}
                >

                    {
                        value
                    }

                </span>

            );

        }


        // =====================================
        // STATUS
        // =====================================

        if (
            column.type ===
            "status"
        ) {

            const status =
                value ||
                "Pending";


            const normalizedStatus =
                String(
                    status
                )
                    .trim()
                    .toLowerCase()
                    .replace(
                        /\s+/g,
                        "-"
                    );


            return (

                <span
                    className={`
                        test-result-table__status
                        test-result-table__status--${normalizedStatus}
                    `}
                >

                    {
                        status
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
                    test-result-table__text
            "
            >

                {
                    value ??
                    "—"
                }

            </span>

        );

    };


    // =========================================
    // ROW
    // =========================================

    return (

        <tr
            className="
                test-result-table__row
            "
        >

            {columns.map(
                (column) => (

                    <td

                        key={
                            column.id
                        }

                        style={{
                            width:
                                column.width,
                        }}

                        className={`
                            test-result-table__cell
                            test-result-table__cell--${
                                column.align ||
                                "left"
                            }
                        `}
                    >

                        {
                            renderCell(
                                column
                            )
                        }

                    </td>

                )
            )}

        </tr>

    );

};


export default TestResultRow;