import resultEntryColumns
    from "../../config/resultEntryColumns";

import ResultEntryTableRow
    from "./ResultEntryTableRow";

import "./ResultEntryTable.css";


const ResultEntryTable = ({
    data = [],
    onAction,
}) => {


    // =========================================
    // DATA SAFETY
    // =========================================

    const tableData =
        Array.isArray(data)
            ? data
            : [];


    const hasData =
        tableData.length > 0;


    // =========================================
    // ACTION HANDLER
    // =========================================

    const handleAction = (
        action,
        rowData
    ) => {

        if (
            typeof onAction ===
            "function"
        ) {

            onAction(
                action,
                rowData
            );

        }

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <section
            className="
                result-entry-table-card
            "
        >

            {/* =================================
                TABLE HEADER / SUMMARY
            ================================= */}

            <div
                className="
                    result-entry-table-card__header
                "
            >

                <div
                    className="
                        result-entry-table-card__title
                    "
                >

                    <span>
                        Result Entry Worklist
                    </span>

                    <span
                        className="
                            result-entry-table-card__count
                        "
                    >

                        {
                            tableData.length
                        }

                    </span>

                </div>


                <div
                    className="
                        result-entry-table-card__subtitle
                    "
                >

                    Enter, review and manage
                    laboratory results

                </div>

            </div>


            {/* =================================
                TABLE WRAPPER
            ================================= */}

            <div
                className="
                    result-entry-table-wrapper
                "
            >

                <table
                    className="
                        result-entry-table
                    "
                >


                    {/* =================================
                        TABLE HEAD
                    ================================= */}

                    <thead>

                        <tr>

                            {resultEntryColumns.map(
                                (column) => {

                                    const Icon =
                                        column.icon;


                                    return (

                                        <th

                                            key={
                                                column.id
                                            }

                                            style={{
                                                width:
                                                    column.width,
                                            }}

                                            className={`
                                                result-entry-table__header-cell
                                                result-entry-table__header-cell--${
                                                    column.align ||
                                                    "left"
                                                }
                                            `}

                                        >

                                            <div
                                                className="
                                                    result-entry-table__header-content
                                                "
                                            >

                                                {Icon && (

                                                    <Icon />

                                                )}


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

                            tableData.map(
                                (item) => (

                                    <ResultEntryTableRow

                                        key={
                                            item.id
                                        }

                                        data={
                                            item
                                        }

                                        columns={
                                            resultEntryColumns
                                        }

                                        onAction={
                                            handleAction
                                        }

                                    />

                                )
                            )

                        ) : (

                            <tr>

                                <td

                                    colSpan={
                                        resultEntryColumns.length
                                    }

                                    className="
                                        result-entry-table__empty
                                    "

                                >

                                    <div
                                        className="
                                            result-entry-table__empty-content
                                        "
                                    >

                                        <div
                                            className="
                                                result-entry-table__empty-title
                                            "
                                        >

                                            No result records found

                                        </div>


                                        <div
                                            className="
                                                result-entry-table__empty-message
                                            "
                                        >

                                            Try changing your
                                            filters or search
                                            criteria.

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


export default ResultEntryTable;