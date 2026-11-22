import React from "react";

const LedgerTableHeader = () => {

    return (

        <thead>

            <tr>

                <th className="ledger-col-date">

                    Date & Time

                </th>

                <th className="ledger-col-reference">

                    Reference No.

                </th>

                <th className="ledger-col-transaction">

                    Transaction

                </th>

                <th className="ledger-col-opening">

                    Opening Qty

                </th>

                <th className="ledger-col-in">

                    IN Qty

                </th>

                <th className="ledger-col-out">

                    OUT Qty

                </th>

                <th className="ledger-col-closing">

                    Closing Qty

                </th>

                <th className="ledger-col-user">

                    Performed By

                </th>

                <th className="ledger-col-remarks">

                    Remarks

                </th>

            </tr>

        </thead>

    );

};

export default LedgerTableHeader;