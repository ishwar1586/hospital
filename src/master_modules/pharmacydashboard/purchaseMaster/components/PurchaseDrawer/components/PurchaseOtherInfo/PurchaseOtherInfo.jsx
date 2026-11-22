import "./PurchaseOtherInfo.css";

const PurchaseOtherInfo = ({
    purchase,
}) => {

    return (

        <div className="purchase-other-info">

            <h3>
                Other Information
            </h3>

            <div className="info-row">

                <span>
                    Expected Delivery Date
                </span>

                <strong>
                    {
                        purchase.expectedDeliveryDate
                    }
                </strong>

            </div>

            <div className="info-row">

                <span>
                    Payment Terms
                </span>

                <strong>
                    {
                        purchase.paymentTerms
                    }
                </strong>

            </div>

            <div className="info-row">

                <span>
                    Transport
                </span>

                <strong>
                    {
                        purchase.transport
                    }
                </strong>

            </div>

            <div className="info-row">

                <span>
                    Freight Terms
                </span>

                <strong>
                    {
                        purchase.freightTerms
                    }
                </strong>

            </div>

            <div className="info-row remarks">

                <span>
                    Remarks
                </span>

                <p>
                    {
                        purchase.remarks
                    }
                </p>

            </div>

        </div>

    );
};

export default PurchaseOtherInfo;