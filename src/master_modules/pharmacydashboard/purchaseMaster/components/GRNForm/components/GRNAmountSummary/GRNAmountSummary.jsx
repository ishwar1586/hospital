import "./GRNAmountSummary.css";

const GRNAmountSummary = ({
    formData,
}) => {

    return (

        <div className="grn-amount-summary">

            <h3>
                Amount Summary
            </h3>

            <div className="summary-row">

                <span>
                    Sub Total
                </span>

                <strong>
                    ₹ {Number(formData.subtotal || 0).toLocaleString("en-IN")}
                </strong>

            </div>

            <div className="summary-row">

                <span>
                    Discount
                </span>

                <strong>
                    ₹ {Number(formData.discount || 0).toLocaleString("en-IN")}
                </strong>

            </div>

            <div className="summary-row">

                <span>
                    Freight Charges
                </span>

                <strong>
                    ₹ {Number(formData.freightCharges || 0).toLocaleString("en-IN")}
                </strong>

            </div>

            <div className="summary-row">

                <span>
                    Loading Charges
                </span>

                <strong>
                    ₹ {Number(formData.loadingCharges || 0).toLocaleString("en-IN")}
                </strong>

            </div>

            <div className="summary-row">

                <span>
                    Other Charges
                </span>

                <strong>
                    ₹ {Number(formData.otherCharges || 0).toLocaleString("en-IN")}
                </strong>

            </div>

            <div className="summary-row">

                <span>
                    Taxable Amount
                </span>

                <strong>
                    ₹ {Number(formData.taxableAmount || 0).toLocaleString("en-IN")}
                </strong>

            </div>

            <div className="summary-row">

                <span>
                    GST Amount
                </span>

                <strong>
                    ₹ {Number(formData.gstAmount || 0).toLocaleString("en-IN")}
                </strong>

            </div>

            <div className="summary-row">

                <span>
                    Round Off
                </span>

                <strong>
                    ₹ {Number(formData.roundOff || 0).toLocaleString("en-IN")}
                </strong>

            </div>

            <div className="summary-total">

                <span>
                    Grand Total
                </span>

                <h2>
                    ₹ {Number(formData.grandTotal || 0).toLocaleString("en-IN")}
                </h2>

            </div>

        </div>

    );

};

export default GRNAmountSummary;