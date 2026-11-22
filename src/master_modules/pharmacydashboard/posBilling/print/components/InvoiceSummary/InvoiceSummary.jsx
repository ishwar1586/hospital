import "./InvoiceSummary.css";

const formatCurrency = (value = 0) => {

    return `₹${Number(value || 0).toFixed(2)}`;

};

const InvoiceSummary = ({

    billing = {},

    payment = {},

}) => {

    const {

        totalItems = 0,

        totalQuantity = 0,

        subTotal = 0,

        discountAmount = 0,

        taxableAmount = 0,

        cgstAmount = 0,

        sgstAmount = 0,

        igstAmount = 0,

        roundOff = 0,

        grandTotal = 0,

    } = billing;

    const {

        paymentMode = "CASH",

        paidAmount = 0,

        balanceAmount = 0,

    } = payment;

    return (

        <section className="thermal-summary">

            <h3 className="thermal-section-title">

                BILL SUMMARY

            </h3>

            <div className="thermal-divider" />

            <table className="thermal-summary-table">

                <tbody>

                    <tr>
                        <td>Total Items</td>
                        <td>{totalItems}</td>
                    </tr>

                    <tr>
                        <td>Total Qty</td>
                        <td>{totalQuantity}</td>
                    </tr>

                    <tr>
                        <td>Sub Total</td>
                        <td>{formatCurrency(subTotal)}</td>
                    </tr>

                    <tr>
                        <td>Discount</td>
                        <td>{formatCurrency(discountAmount)}</td>
                    </tr>

                    <tr>
                        <td>Taxable Amount</td>
                        <td>{formatCurrency(taxableAmount)}</td>
                    </tr>

                    <tr>
                        <td>CGST</td>
                        <td>{formatCurrency(cgstAmount)}</td>
                    </tr>

                    <tr>
                        <td>SGST</td>
                        <td>{formatCurrency(sgstAmount)}</td>
                    </tr>

                    {

                        Number(igstAmount) > 0 && (

                            <tr>
                                <td>IGST</td>
                                <td>{formatCurrency(igstAmount)}</td>
                            </tr>

                        )

                    }

                    <tr>
                        <td>Round Off</td>
                        <td>{formatCurrency(roundOff)}</td>
                    </tr>

                </tbody>

            </table>

            <div className="thermal-grand-total">

                <span>GRAND TOTAL</span>

                <span>{formatCurrency(grandTotal)}</span>

            </div>

            <div className="thermal-divider" />

            <table className="thermal-summary-table">

                <tbody>

                    <tr>
                        <td>Payment Mode</td>
                        <td>{paymentMode}</td>
                    </tr>

                    <tr>
                        <td>Paid Amount</td>
                        <td>{formatCurrency(paidAmount)}</td>
                    </tr>

                    <tr>
                        <td>Balance</td>
                        <td>{formatCurrency(balanceAmount)}</td>
                    </tr>

                </tbody>

            </table>

            <div className="thermal-divider" />

        </section>

    );

};

export default InvoiceSummary;