import React from "react";

import "./BatchTable.css";

import BatchStatusChip from "./BatchStatusChip";

const BatchTableRow = ({

    row,

}) => {

    const formatCurrency = (value) => {

        return `₹ ${Number(value).toLocaleString(
            "en-IN",
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            }
        )}`;

    };

    return (

        <tr className="batch-table-row">

            {/* ================================= */}

            <td className="batch-col-no">

                <span className="batch-number">

                    {row.batchNo}

                </span>

            </td>

            {/* ================================= */}

            <td className="batch-col-medicine">

                <div className="batch-medicine">

                    <span className="medicine-name">

                        {row.medicineName}

                    </span>

                </div>

            </td>

            {/* ================================= */}

            <td className="batch-col-supplier">

                {row.supplier}

            </td>

            {/* ================================= */}

            <td className="batch-col-invoice">

                <span className="invoice-number">

                    {row.invoiceNo}

                </span>

            </td>

            {/* ================================= */}

            <td className="batch-col-mfg">

                {row.manufacturingDate}

            </td>

            {/* ================================= */}

            <td className="batch-col-expiry">

                {row.expiryDate}

            </td>

            {/* ================================= */}

            <td className="batch-col-purchase">

                {row.purchaseQty}

            </td>

            {/* ================================= */}

            <td className="batch-col-available">

                <strong>

                    {row.availableQty}

                </strong>

            </td>

            {/* ================================= */}

            <td className="batch-col-mrp">

                {formatCurrency(row.mrp)}

            </td>

            {/* ================================= */}

            <td className="batch-col-rate">

                {formatCurrency(row.purchaseRate)}

            </td>

            {/* ================================= */}

            <td className="batch-col-status">

                <BatchStatusChip

                    status={row.status}

                />

            </td>

        </tr>

    );

};

export default BatchTableRow;