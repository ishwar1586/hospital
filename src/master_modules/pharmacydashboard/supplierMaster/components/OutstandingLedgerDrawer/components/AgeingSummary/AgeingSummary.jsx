import "./AgeingSummary.css";

const AgeingSummary = ({
    summaryData = [],
    invoiceData = [],
}) => {

    return (

        <div className="ageing-summary">

            <div className="ageing-cards">

                {summaryData.map(
                    (item) => (

                        <div
                            key={item.id}
                            className="ageing-card"
                        >

                            <span>
                                {item.bucket}
                            </span>

                            <h3>
                                ₹ {item.amount.toLocaleString()}
                            </h3>

                            <p>
                                {item.invoiceCount}
                                {" "}
                                Invoices
                            </p>

                        </div>
                    )
                )}

            </div>

            <div className="ageing-table-wrapper">

                <table className="ageing-table">

                    <thead>

                        <tr>

                            <th>
                                Invoice No
                            </th>

                            <th>
                                Invoice Date
                            </th>

                            <th>
                                Due Date
                            </th>

                            <th>
                                Amount
                            </th>

                            <th>
                                Ageing Bucket
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {invoiceData.map(
                            (row) => (

                                <tr
                                    key={row.id}
                                >

                                    <td>
                                        {row.invoiceNo}
                                    </td>

                                    <td>
                                        {row.invoiceDate}
                                    </td>

                                    <td>
                                        {row.dueDate}
                                    </td>

                                    <td>
                                        {row.amount}
                                    </td>

                                    <td>

                                        <span
                                            className={`bucket-chip ${row.ageingBucket
                                                .replace(
                                                    /\s+/g,
                                                    "-"
                                                )
                                                .replace(
                                                    "+",
                                                    "plus"
                                                )}`}
                                        >

                                            {
                                                row.ageingBucket
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

export default AgeingSummary;