import React from "react";

import "./StockTableRow.css";

import StatusChip from "../StockTable/StatusChip";
import ActionMenu from "../StockTable/ActionMenu";

const StockTableRow = ({

    row,

    onAction,

}) => {

    const formatCurrency = (value) => {

        return `₹ ${Number(value || 0).toLocaleString(
            "en-IN",
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            }
        )}`;

    };

    return (

        <tr className="stock-table-row">

            <td className="col-code">

                {row.medicineCode}

            </td>

            <td className="col-name">

                <div className="medicine-info">

                    <span className="medicine-name">

                        {row.medicineName}

                    </span>

                </div>

            </td>

            <td className="col-hsn">

                {row.hsnCode}

            </td>

            <td className="col-category">

                <span className="category-badge">

                    {row.category}

                </span>

            </td>

            <td className="col-supplier">

                {row.supplier}

            </td>

            <td className="col-manufacturer">

                {row.manufacturer}

            </td>

            <td className="col-batch">

                {row.batchNo}

            </td>

            <td className="col-expiry">

                {row.expiryDate}

            </td>

            <td className="col-mrp">

                {formatCurrency(row.mrp)}

            </td>

            <td className="col-purchase">

                {formatCurrency(row.purchaseRate)}

            </td>

            <td className="col-selling">

                {formatCurrency(row.sellingPrice)}

            </td>

            <td className="col-current">

                {row.currentStock}

            </td>

            <td className="col-reserved">

                {row.reservedQty}

            </td>

            <td className="col-available">

                {row.availableQty}

            </td>

            <td className="col-reorder">

                {row.reorderLevel}

            </td>

            <td className="col-unit">

                {row.unit}

            </td>

            <td className="col-value">

                {formatCurrency(row.stockValue)}

            </td>

            <td className="col-location">

                {row.location}

            </td>

            <td className="col-status">

                <StatusChip

                    status={row.status}

                />

            </td>

            <td className="col-action">

                <ActionMenu

                    row={row}

                    onAction={onAction}

                />

            </td>

        </tr>

    );

};

export default StockTableRow;