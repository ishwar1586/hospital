import "./PurchaseAmountSummary.css";

const PurchaseAmountSummary = ({
    purchase,
}) => {

    return (

        <div className="amount-summary-card">

            <h3>
                Amount Summary
            </h3>

            <div className="summary-row">

                <span>
                    Sub Total
                </span>

                <strong>
                    ₹ {purchase.subTotal.toLocaleString()}
                </strong>

            </div>

            <div className="summary-row">

                <span>
                    Discount
                </span>

                <strong>
                    ₹ {purchase.discount.toLocaleString()}
                </strong>

            </div>

            <div className="summary-row">

                <span>
                    Taxable Amount
                </span>

                <strong>
                    ₹ {purchase.taxableAmount.toLocaleString()}
                </strong>

            </div>

            <div className="summary-row">

                <span>
                    CGST (6%)
                </span>

                <strong>
                    ₹ {purchase.cgst.toLocaleString()}
                </strong>

            </div>

            <div className="summary-row">

                <span>
                    SGST (6%)
                </span>

                <strong>
                    ₹ {purchase.sgst.toLocaleString()}
                </strong>

            </div>

            <div className="summary-row">

                <span>
                    Round Off
                </span>

                <strong>
                    ₹ {purchase.roundOff.toLocaleString()}
                </strong>

            </div>

            <div className="grand-total">

                <span>
                    Grand Total
                </span>

                <h2>
                    ₹ {purchase.grandTotal.toLocaleString()}
                </h2>

            </div>

        </div>

    );
};

export default PurchaseAmountSummary;