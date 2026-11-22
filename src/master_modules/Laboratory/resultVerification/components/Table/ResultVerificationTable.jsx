import ResultVerificationTableRow
    from "./ResultVerificationTableRow";

import "./ResultVerificationTable.css";


// =========================================
// COMPONENT
// =========================================

const ResultVerificationTable = ({

    data = [],

    columns = [],

    onAction,

    isLoading = false,

}) => {


    // =========================================
    // SAFE DATA
    // =========================================

    const safeData =
        Array.isArray(
            data
        )
            ? data
            : [];


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
    // ACTION
    // =========================================

    const handleAction = (
        actionId,
        rowData
    ) => {

        if (
            typeof onAction !==
            "function"
        ) {

            return;

        }


        onAction(
            actionId,
            rowData
        );

    };


    // =========================================
    // LOADING STATE
    // =========================================

    if (
        isLoading
    ) {

        return (

            <section
                className="
                    result-verification-table
                "
            >

                <div
                    className="
                        result-verification-table__loading
                    "
                >

                    <span
                        className="
                            result-verification-table__spinner
                        "
                    />

                    <span>
                        Loading verification worklist...
                    </span>

                </div>

            </section>

        );

    }


    // =========================================
    // EMPTY STATE
    // =========================================

    if (
        safeData.length === 0
    ) {

        return (

            <section
                className="
                    result-verification-table
                "
            >

                <div
                    className="
                        result-verification-table__empty
                    "
                >

                    <div
                        className="
                            result-verification-table__empty-icon
                        "
                    >
                        ✓
                    </div>

                    <strong>
                        No Results Found
                    </strong>

                    <span>
                        There are no laboratory results
                        matching the current verification
                        filters.
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
                result-verification-table
            "
        >

            <div
                className="
                    result-verification-table__scroll
                "
            >

                <table>

                    {/* =================================
                        TABLE HEADER
                    ================================= */}

                    <thead>

                        <tr>

                            {safeColumns.map(
                                (
                                    column,
                                    index
                                ) => (

                                    <th

                                        key={
                                            column.id ||
                                            column.key ||
                                            index
                                        }

                                        className={
                                            column.headerClassName ||
                                            ""
                                        }

                                        style={{
                                            width:
                                                column.width ||
                                                undefined,

                                            minWidth:
                                                column.minWidth ||
                                                undefined,
                                        }}

                                    >

                                        {
                                            column.label ||
                                            column.header ||
                                            ""
                                        }

                                    </th>

                                )
                            )}

                        </tr>

                    </thead>


                    {/* =================================
                        TABLE BODY
                    ================================= */}

                    <tbody>

                        {safeData.map(
                            (
                                row,
                                index
                            ) => (

                                <ResultVerificationTableRow

                                    key={
                                        row.id ||
                                        row.accessionNo ||
                                        row.uhid ||
                                        index
                                    }

                                    data={
                                        row
                                    }

                                    columns={
                                        safeColumns
                                    }

                                    rowIndex={
                                        index
                                    }

                                    onAction={
                                        handleAction
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


export default ResultVerificationTable;