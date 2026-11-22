import React from "react";
import ActionMenu from "./ActionMenu";
const CellRenderer = ({
    value,
    column,
    row,
    onAction,
}) => {

    switch (column.type) {

        case "currency":
            return (
                <span>
                    ₹ {Number(value || 0).toLocaleString()}
                </span>
            );

        case "date":
            return (
                <span>
                    {value
                        ? new Date(value).toLocaleDateString()
                        : "-"}
                </span>
            );

        case "badge":
            return (
                <span className="table-badge">
                    {value}
                </span>
            );

        case "status":
            return (
                <span
                    className={`table-status ${String(value)
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                >
                    {value}
                </span>
            );

        case "actions":
            return (
                <ActionMenu
                    row={row}
                    actions={column.actions}
                    onAction={onAction}
                />
            );

        case "custom":
            return column.render
                ? column.render(row)
                : "-";

        default:
            return value || "-";
    }
};

export default CellRenderer;