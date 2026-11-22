import { useNavigate } from "react-router-dom";

import "./../styles/addGRN.css";

import GRNForm
from "../components/GRNForm/GRNForm";

const AddGRN = () => {

    const navigate =
        useNavigate();

    return (

        <div className="add-grn-page">

            {/* Header */}

            <div className="add-grn-header">

                <div className="add-grn-header-left">

                    <h1>

                        Receive Goods (GRN)

                    </h1>

                    <p>

                        Receive purchased medicines against Purchase Order.

                    </p>

                </div>

                <div className="add-grn-header-right">

                    <button
                        className="back-btn"
                        onClick={() =>
                            navigate(
                                "/module/purchasemaster"
                            )
                        }
                    >

                        ← Back To Purchase Orders

                    </button>

                </div>

            </div>

            {/* Form */}

            <GRNForm />

        </div>

    );

};

export default AddGRN;