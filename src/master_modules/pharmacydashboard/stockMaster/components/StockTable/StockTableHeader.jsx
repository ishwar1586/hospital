import React from "react";

const StockTableHeader = () => {

    return (

        <thead>

            <tr>

                <th className="col-code">

                    Medicine Code

                </th>

                <th className="col-name">

                    Medicine Name

                </th>

                <th className="col-hsn">

                    HSN

                </th>

                <th className="col-category">

                    Category

                </th>

                <th className="col-supplier">

                    Supplier

                </th>

                <th className="col-manufacturer">

                    Manufacturer

                </th>

                <th className="col-batch">

                    Batch No.

                </th>

                <th className="col-expiry">

                    Expiry

                </th>

                <th className="col-mrp">

                    MRP

                </th>

                <th className="col-purchase">

                    Purchase

                </th>

                <th className="col-selling">

                    Selling

                </th>

                <th className="col-current">

                    Current

                </th>

                <th className="col-reserved">

                    Reserved

                </th>

                <th className="col-available">

                    Available

                </th>

                <th className="col-reorder">

                    Reorder

                </th>

                <th className="col-unit">

                    Unit

                </th>

                <th className="col-value">

                    Stock Value

                </th>

                <th className="col-location">

                    Location

                </th>

                <th className="col-status">

                    Status

                </th>

                <th className="col-action">

                    Action

                </th>

            </tr>

        </thead>

    );

};

export default StockTableHeader;