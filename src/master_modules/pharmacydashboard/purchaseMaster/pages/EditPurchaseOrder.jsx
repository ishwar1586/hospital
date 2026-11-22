import { useNavigate }
from "react-router-dom";

import PurchaseOrderForm
from "../components/PurchaseOrderForm/PurchaseOrderForm";

import "./../styles/editPurchaseOrder.css";

const EditPurchaseOrder = () => {

    const navigate =
        useNavigate();

    const purchaseData = {};

    return (

        <div className="purchase-page">

            <div className="purchase-page-header">

                <div>

                    <h2>
                        Edit Purchase Order
                    </h2>

                    <p>
                        Update purchase order details
                    </p>

                </div>

                <button
                    className="back-btn"
                    onClick={() =>
                        navigate(
                            "/module/purchasemaster"
                        )
                    }
                >

                    ← Back To Purchase Order List

                </button>

            </div>

            <PurchaseOrderForm
                mode="edit"
                initialData={
                    purchaseData
                }
            />

        </div>

    );
};

export default EditPurchaseOrder;