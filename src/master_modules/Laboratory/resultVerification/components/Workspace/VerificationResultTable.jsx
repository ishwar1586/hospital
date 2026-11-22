import FactCheckOutlinedIcon
    from "@mui/icons-material/FactCheckOutlined";

import VerificationResultRow
    from "./VerificationResultRow";
import "./VerificationResultTable.css";

// =========================================
// COMPONENT
// =========================================

const VerificationResultTable = ({

    result = {},

    onAction,

}) => {


    // =========================================
    // SAFE RESULT
    // =========================================

    const safeResult =
        result || {};


    // =========================================
    // RESULT ROWS
    // =========================================

    const resultRows =
        Array.isArray(
            safeResult.results
        )
            ? safeResult.results
            : Array.isArray(
                safeResult.testResults
            )
                ? safeResult.testResults
                : [];


    // =========================================
    // EMPTY STATE
    // =========================================

    if (
        resultRows.length ===
        0
    ) {

        return (

            <section
                className="
                    verification-result-table
                "
            >

                <div
                    className="
                        verification-result-table__header
                    "
                >

                    <div>

                        <strong>
                            Verification Results
                        </strong>

                        <span>
                            Laboratory analyte results
                        </span>

                    </div>

                </div>


                <div
                    className="
                        verification-result-table__empty
                    "
                >

                    <FactCheckOutlinedIcon />

                    <strong>
                        No Result Values Available
                    </strong>

                    <span>
                        Result values have not been
                        loaded for this test yet.
                    </span>

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
                verification-result-table
            "
        >

            {/* =================================
                HEADER
            ================================= */}

            <div
                className="
                    verification-result-table__header
                "
            >

                <div>

                    <strong>
                        Verification Results
                    </strong>

                    <span>
                        Review analyte values against
                        their reference ranges.
                    </span>

                </div>


                <div
                    className="
                        verification-result-table__count
                    "
                >

                    {resultRows.length}

                    {" "}

                    {
                        resultRows.length === 1
                            ? "Test"
                            : "Tests"
                    }

                </div>

            </div>


            {/* =================================
                TABLE SCROLL
            ================================= */}

            <div
                className="
                    verification-result-table__scroll
                "
            >

                <table>

                    <thead>

                        <tr>

                            <th>
                                Parameter
                            </th>

                            <th>
                                Result
                            </th>

                            <th>
                                Unit
                            </th>

                            <th>
                                Reference Range
                            </th>

                            <th>
                                Flag
                            </th>

                            <th>
                                Previous
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {resultRows.map(
                            (
                                row,
                                index
                            ) => (

                                <VerificationResultRow

                                    key={
                                        row?.id ||
                                        row?.parameterId ||
                                        `result-row-${index}`
                                    }

                                    row={
                                        row
                                    }

                                    onAction={
                                        onAction
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


export default VerificationResultTable;