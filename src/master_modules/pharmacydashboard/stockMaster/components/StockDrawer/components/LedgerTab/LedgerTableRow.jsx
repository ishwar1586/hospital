import React from "react";

import TransactionChip from "./TransactionChip";

import "./LedgerTable.css";

const LedgerTableRow = ({

    row,

}) => {

    return (

        <tr className="ledger-row">

            {/* ================================= */}

            <td className="ledger-col-date">

                <div className="ledger-date">

                    <span className="ledger-main-date">

                        {row.date}

                    </span>

                    <span className="ledger-time">

                        {row.time}

                    </span>

                </div>

            </td>

            {/* ================================= */}

            <td className="ledger-col-reference">

                <span className="ledger-reference">

                    {row.referenceNo}

                </span>

            </td>

            {/* ================================= */}

            <td className="ledger-col-transaction">

                <TransactionChip

                    type={row.transactionType}

                />

            </td>

            {/* ================================= */}

            <td className="ledger-col-opening">

                {row.openingQty}

            </td>

            {/* ================================= */}

            <td className="ledger-col-in">

                <span className="ledger-in">

                    +{row.inQty}

                </span>

            </td>

            {/* ================================= */}

            <td className="ledger-col-out">

                <span className="ledger-out">

                    -{row.outQty}

                </span>

            </td>

            {/* ================================= */}

            <td className="ledger-col-closing">

                <strong>

                    {row.closingQty}

                </strong>

            </td>

            {/* ================================= */}

            <td className="ledger-col-user">

                {row.user}

            </td>

            {/* ================================= */}

            <td className="ledger-col-remarks">

                {row.remarks}

            </td>

        </tr>

    );

};

export default LedgerTableRow;