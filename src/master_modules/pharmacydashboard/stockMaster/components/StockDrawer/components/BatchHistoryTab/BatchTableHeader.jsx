import React from "react";

const BatchTableHeader = () => {

    return (

        <thead>

            <tr>

                <th className="batch-col-no">

                    Batch No.

                </th>

                <th className="batch-col-medicine">

                    Medicine

                </th>

                <th className="batch-col-supplier">

                    Supplier

                </th>

                <th className="batch-col-invoice">

                    Purchase Invoice

                </th>

                <th className="batch-col-mfg">

                    MFG Date

                </th>

                <th className="batch-col-expiry">

                    Expiry Date

                </th>

                <th className="batch-col-purchase">

                    Purchase Qty

                </th>

                <th className="batch-col-available">

                    Available Qty

                </th>

                <th className="batch-col-mrp">

                    MRP

                </th>

                <th className="batch-col-rate">

                    Purchase Rate

                </th>

                <th className="batch-col-status">

                    Status

                </th>

            </tr>

        </thead>

    );

};

export default BatchTableHeader;