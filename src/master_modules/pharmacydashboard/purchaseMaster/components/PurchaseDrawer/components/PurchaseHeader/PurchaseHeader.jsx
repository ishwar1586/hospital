import "./PurchaseHeader.css";

const PurchaseHeader = ({
    purchase,
}) => {

    return (

        <div className="purchase-header-card">

            <div>

                <span>
                    PO Number
                </span>

                <h4>
                    {purchase.poNumber}
                </h4>

            </div>

            <div>

                <span>
                    PO Date
                </span>

                <h4>
                    {purchase.poDate}
                </h4>

            </div>

            <div>

                <span>
                    Supplier
                </span>

                <h4>
                    {purchase.supplierName}
                </h4>

            </div>

            <div>

                <span>
                    Status
                </span>

                <div className="po-status">

                    {purchase.status}

                </div>

            </div>

        </div>

    );
};

export default PurchaseHeader;