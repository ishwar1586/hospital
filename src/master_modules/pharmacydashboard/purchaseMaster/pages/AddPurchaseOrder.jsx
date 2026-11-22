import { useNavigate }
from "react-router-dom";

import PurchaseOrderForm
from "../components/PurchaseOrderForm/PurchaseOrderForm";

import "./../styles/addPurchaseOrder.css";

const AddPurchaseOrder = () => {

    const navigate =
        useNavigate();

    return (

        <div className="purchase-page">

            <div className="purchase-page-header">

                <div>

                    <h2>
                        Add Purchase Order
                    </h2>

                    <p>
                        Create a new purchase order
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
                mode="add"
            />

        </div>

    );
};

export default AddPurchaseOrder;