import "./InvoiceFooter.css";

const InvoiceFooter = ({

    hospital = {},

    payment = {},

    createdBy = {},

}) => {

    const {

        employeeName = "",

    } = createdBy;

    const {

        paymentMode = "CASH",

        transactionId = "",

    } = payment;

    return (

        <section className="thermal-footer">

            <div className="thermal-divider" />

            <div className="thermal-footer-content">

                <p>

                    <strong>Served By :</strong> {employeeName}

                </p>

                <p>

                    <strong>Payment :</strong> {paymentMode}

                </p>

                {

                    transactionId && (

                        <p>

                            <strong>Txn ID :</strong> {transactionId}

                        </p>

                    )

                }

                <div className="thermal-divider" />

                <p className="footer-message">

                    *** THANK YOU ***

                </p>

                <p className="footer-message">

                    Get Well Soon

                </p>

                <p className="footer-note">

                    Medicines once sold will not be taken back or exchanged.

                </p>

                <p className="footer-note">

                    Please keep this bill for future reference.

                </p>

                <p className="footer-note">

                    Computer Generated Invoice

                </p>

                <p className="footer-note">

                    No Signature Required

                </p>

            </div>

        </section>

    );

};

export default InvoiceFooter;