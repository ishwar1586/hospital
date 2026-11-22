import "./LedgerTable.css";

const LedgerTable = ({
    columns = [],
    data = [],
}) => {

    const renderCell = (
        row,
        column
    ) => {

        const value =
            row[column.key];

        if (
            column.key ===
            "debitAmount"
        ) {

            return (
                <span className="debit">
                    {value}
                </span>
            );
        }

        if (
            column.key ===
            "creditAmount"
        ) {

            return (
                <span className="credit">
                    {value}
                </span>
            );
        }

        if (
            column.key ===
            "balanceAmount"
        ) {

            return (
                <span className="balance">
                    {value}
                </span>
            );
        }

        if (
            column.key ===
            "status"
        ) {

            return (
                <span
                    className={`ledger-status ${value?.toLowerCase()}`}
                >
                    {value}
                </span>
            );
        }

        return value;
    };

    return (

        <div className="ledger-table-wrapper">

            <table className="ledger-table">

                <thead>

                    <tr>

                        {columns.map(
                            (column) => (

                                <th
                                    key={
                                        column.key
                                    }
                                >
                                    {
                                        column.label
                                    }
                                </th>
                            )
                        )}

                    </tr>

                </thead>

                <tbody>

                    {data.length >
                    0 ? (

                        data.map(
                            (row) => (

                                <tr
                                    key={
                                        row.id
                                    }
                                >

                                    {columns.map(
                                        (
                                            column
                                        ) => (

                                            <td
                                                key={
                                                    column.key
                                                }
                                            >

                                                {renderCell(
                                                    row,
                                                    column
                                                )}

                                            </td>
                                        )
                                    )}

                                </tr>
                            )
                        )

                    ) : (

                        <tr>

                            <td
                                colSpan={
                                    columns.length
                                }
                                className="empty-row"
                            >

                                No Transactions Found

                            </td>

                        </tr>

                    )}

                </tbody>

            </table>

        </div>
    );
};

export default LedgerTable;