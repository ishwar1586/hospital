import "./TableEngine.css";

import EmptyState from "./EmptyState";
import LoadingState from "./LoadingState";
import CellRenderer from "./CellRenderer";

const TableEngine = ({
    columns = [],
    data = [],
    loading = false,
    rowKey = "id",
    onAction,
    onCellChange,
}) => {

    if (loading) {
        return <LoadingState />;
    }

    if (!data.length) {
        return <EmptyState />;
    }

    return (
        <div className="table-engine-wrapper">

            <table className="table-engine">

                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column.key}>
                                {column.label}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.map((row) => (
                        <tr key={row[rowKey]}>

                            {columns.map((column) => (
                                <td key={column.key}>
                                    <CellRenderer
                                        value={row[column.key]}
                                        column={column}
                                        row={row}
                                        onAction={onAction}
                                        onCellChange={onCellChange}
                                    />
                                </td>
                            ))}

                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    );
};

export default TableEngine;