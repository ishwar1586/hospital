import queueColumns
    from "../../config/queueColumns";

import TestQueueTableRow
    from "./TestQueueTableRow";

import "./TestQueueTable.css";


const TestQueueTable = ({
    data = [],
    onAction,
}) => {


    // =========================================
    // SAFE DATA
    // =========================================

    const tableData =
        Array.isArray(data)
            ? data
            : [];


    // =========================================
    // EMPTY DATA
    // =========================================

    const hasData =
        tableData.length > 0;


    // =========================================
    // SAFE COLUMNS
    // =========================================

    const columns =
        Array.isArray(queueColumns)
            ? queueColumns
            : [];


    // =========================================
    // RENDER
    // =========================================

    return (

        <section className="test-queue-table-card">


            {/* =================================
                TABLE WRAPPER
            ================================= */}

            <div className="test-queue-table-wrapper">

                <table className="test-queue-table">


                    {/* =================================
                        TABLE HEADER
                    ================================= */}

                    <thead>

                        <tr>

                            {columns.map(
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
                                                test-queue-table__header-cell
                                                test-queue-table__header-cell--${
                                                    column.align ||
                                                    "left"
                                                }
                                            `}
                                        >

                                            <div className="test-queue-table__header-content">

                                                {/* =========================
                                                    HEADER ICON
                                                ========================= */}

                                                {Icon && (

                                                    <Icon />

                                                )}


                                                {/* =========================
                                                    HEADER LABEL
                                                ========================= */}

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
                                (
                                    item,
                                    index
                                ) => (

                                    <TestQueueTableRow

                                        key={
                                            item.id ||
                                            item.accessionNo ||
                                            index
                                        }

                                        data={
                                            item
                                        }

                                        columns={
                                            columns
                                        }

                                        onAction={
                                            onAction
                                        }

                                    />

                                )
                            )

                        ) : (

                            <tr>

                                <td
                                    colSpan={
                                        columns.length ||
                                        1
                                    }
                                    className="
                                        test-queue-table__empty
                                    "
                                >

                                    <div className="test-queue-table__empty-content">

                                        <span>
                                            No test queue records found.
                                        </span>

                                        <small>
                                            Try changing your filters or search criteria.
                                        </small>

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


export default TestQueueTable;