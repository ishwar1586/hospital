import processingColumns
    from "../../config/processingColumns";

import ProcessingTableRow
    from "./ProcessingTableRow";

import "./ProcessingTable.css";


const ProcessingTable = ({
    data = [],
    onAction,
}) => {

    return (

        <section className="processing-table-card">

            {/* =================================
                TABLE WRAPPER
            ================================= */}

            <div className="processing-table-wrapper">

                <table className="processing-table">

                    {/* =============================
                        HEADER
                    ============================= */}

                    <thead>

                        <tr>

                            {processingColumns.map(
                                (column) => (

                                    <th
                                        key={
                                            column.id
                                        }

                                        style={{
                                            minWidth:
                                                column.minWidth,
                                            textAlign:
                                                column.align ||
                                                "left",
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


                    {/* =============================
                        BODY
                    ============================= */}

                    <tbody>

                        {data.length > 0 ? (

                            data.map(
                                (processing) => (

                                    <ProcessingTableRow
                                        key={
                                            processing.id
                                        }

                                        processing={
                                            processing
                                        }

                                        columns={
                                            processingColumns
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
                                        processingColumns.length
                                    }

                                    className="processing-table__empty"
                                >

                                    No sample processing
                                    records found.

                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>

            </div>

        </section>

    );

};


export default ProcessingTable;