import "./PaymentSummary.css";

const formatAmount = (amount = 0) => {

    return `₹${Number(amount).toFixed(2)}`;

};

const PaymentSummary = ({

    billingSummary = {},

}) => {

    const {

        subTotal = 0,

        discount = 0,

        gst = 0,

        roundOff = 0,

        grandTotal = 0,

    } = billingSummary;

    const taxableAmount =

        subTotal - discount;

    return (

        <section className="payment-summary">

            <div className="payment-summary-header">

                <h3>

                    Payment Summary

                </h3>

            </div>

            <div className="payment-summary-body">

                <div className="payment-summary-row">

                    <span>

                        Sub Total

                    </span>

                    <strong>

                        {formatAmount(subTotal)}

                    </strong>

                </div>

                <div className="payment-summary-row">

                    <span>

                        Discount

                    </span>

                    <strong className="discount-amount">

                        - {formatAmount(discount)}

                    </strong>

                </div>

                <div className="payment-summary-row">

                    <span>

                        Taxable Amount

                    </span>

                    <strong>

                        {formatAmount(taxableAmount)}

                    </strong>

                </div>

                <div className="payment-summary-row">

                    <span>

                        GST

                    </span>

                    <strong>

                        + {formatAmount(gst)}

                    </strong>

                </div>

                <div className="payment-summary-row">

                    <span>

                        Round Off

                    </span>

                    <strong>

                        {formatAmount(roundOff)}

                    </strong>

                </div>

            </div>

            <div className="payment-grand-total">

                <span>

                    Total Payable

                </span>

                <h2>

                    {formatAmount(grandTotal)}

                </h2>

            </div>

        </section>

    );

};

export default PaymentSummary;