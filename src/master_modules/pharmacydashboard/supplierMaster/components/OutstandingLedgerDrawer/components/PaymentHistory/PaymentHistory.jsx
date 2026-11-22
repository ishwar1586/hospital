import "./PaymentHistory.css";

const PaymentHistory = ({
    data = [],
}) => {

    return (

        <div className="payment-history">

            <div className="payment-summary">

                <div className="summary-box">

                    <span>
                        Total Payments
                    </span>

                    <h3>
                        {data.length}
                    </h3>

                </div>

                <div className="summary-box">

                    <span>
                        Total Amount
                    </span>

                    <h3>

                        ₹ {
                            data
                                .reduce(
                                    (
                                        total,
                                        item
                                    ) =>
                                        total +
                                        item.amount,
                                    0
                                )
                                .toLocaleString()
                        }

                    </h3>

                </div>

            </div>

            <div className="payment-table-wrapper">

                <table className="payment-table">

                    <thead>

                        <tr>

                            <th>
                                Payment Date
                            </th>

                            <th>
                                Payment Mode
                            </th>

                            <th>
                                Reference No
                            </th>

                            <th>
                                Amount
                            </th>

                            <th>
                                Received By
                            </th>

                            <th>
                                Status
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {data.map(
                            (row) => (

                                <tr
                                    key={row.id}
                                >

                                    <td>
                                        {
                                            row.paymentDate
                                        }
                                    </td>

                                    <td>
                                        {
                                            row.paymentMode
                                        }
                                    </td>

                                    <td>
                                        {
                                            row.referenceNo
                                        }
                                    </td>

                                    <td>
                                        ₹ {
                                            row.amount.toLocaleString()
                                        }
                                    </td>

                                    <td>
                                        {
                                            row.receivedBy
                                        }
                                    </td>

                                    <td>

                                        <span
                                            className={`payment-status ${row.status.toLowerCase()}`}
                                        >

                                            {
                                                row.status
                                            }

                                        </span>

                                    </td>

                                </tr>
                            )
                        )}

                    </tbody>

                </table>

            </div>

        </div>

    );
};

export default PaymentHistory;