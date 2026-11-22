import "./BillTotalsCard.css";

const formatAmount = (amount = 0) =>
    `₹${Number(amount).toFixed(2)}`;

const BillTotalsCard = ({

    billingSummary = {},

    cartItems = [],

}) => {

    const {

        subTotal = 0,

        discount = 0,

        gst = 0,

        roundOff = 0,

        grandTotal = 0,

    } = billingSummary;

    const taxableAmount = subTotal - discount;

    const totalQuantity = cartItems.reduce(

        (total, item) => total + item.quantity,

        0

    );

    return (

        <div className="bill-totals-card">

            <div className="bill-card-header">

                <h3>

                    Billing Summary

                </h3>

            </div>

            <div className="bill-stats">

                <div className="bill-stat-box">

                    <span>

                        Items

                    </span>

                    <strong>

                        {cartItems.length}

                    </strong>

                </div>

                <div className="bill-stat-box">

                    <span>

                        Quantity

                    </span>

                    <strong>

                        {totalQuantity}

                    </strong>

                </div>

            </div>

            <div className="bill-summary-list">

                <div className="bill-row">

                    <span>

                        Sub Total

                    </span>

                    <strong>

                        {formatAmount(subTotal)}

                    </strong>

                </div>

                <div className="bill-row">

                    <span>

                        Discount

                    </span>

                    <strong className="discount-text">

                        - {formatAmount(discount)}

                    </strong>

                </div>

                <div className="bill-row">

                    <span>

                        Taxable Amount

                    </span>

                    <strong>

                        {formatAmount(taxableAmount)}

                    </strong>

                </div>

                <div className="bill-row">

                    <span>

                        GST

                    </span>

                    <strong>

                        + {formatAmount(gst)}

                    </strong>

                </div>

                <div className="bill-row">

                    <span>

                        Round Off

                    </span>

                    <strong>

                        {formatAmount(roundOff)}

                    </strong>

                </div>

            </div>

            <div className="grand-total-box">

                <span>

                    Grand Total

                </span>

                <h2>

                    {formatAmount(grandTotal)}

                </h2>

            </div>

        </div>

    );

};

export default BillTotalsCard;