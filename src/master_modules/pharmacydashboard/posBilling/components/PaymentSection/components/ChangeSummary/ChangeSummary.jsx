import "./ChangeSummary.css";

const formatAmount = (amount = 0) => {

    return `₹${Number(amount).toFixed(2)}`;

};

const ChangeSummary = ({

    billingSummary = {},

    receivedAmount = "",

    balance = 0,

}) => {

    const grandTotal = Number(

        billingSummary.grandTotal || 0

    );

    const received = Number(

        receivedAmount || 0

    );

    const isExactPayment =

        balance === 0 && received > 0;

    const isChangeReturn =

        balance > 0;

    const isDueAmount =

        balance < 0;

    return (

        <section className="change-summary">

            <div className="change-summary-header">

                <h3>

                    Payment Status

                </h3>

            </div>

            <div className="change-summary-body">

                <div className="summary-row">

                    <span>

                        Total Payable

                    </span>

                    <strong>

                        {formatAmount(grandTotal)}

                    </strong>

                </div>

                <div className="summary-row">

                    <span>

                        Amount Received

                    </span>

                    <strong>

                        {formatAmount(received)}

                    </strong>

                </div>

                {

                    isChangeReturn && (

                        <div className="payment-result success">

                            <span>

                                Change Return

                            </span>

                            <strong>

                                {formatAmount(balance)}

                            </strong>

                        </div>

                    )

                }

                {

                    isDueAmount && (

                        <div className="payment-result danger">

                            <span>

                                Due Amount

                            </span>

                            <strong>

                                {formatAmount(

                                    Math.abs(balance)

                                )}

                            </strong>

                        </div>

                    )

                }

                {

                    isExactPayment && (

                        <div className="payment-result exact">

                            <span>

                                Exact Payment Received

                            </span>

                            <strong>

                                ✓ Completed

                            </strong>

                        </div>

                    )

                }

            </div>

        </section>

    );

};

export default ChangeSummary;