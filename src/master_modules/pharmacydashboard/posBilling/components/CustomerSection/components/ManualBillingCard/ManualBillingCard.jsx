import "./ManualBillingCard.css";

/* ===========================================================
Icons
=========================================================== */

import {

    LocalPharmacyOutlined,

    ArrowForwardRounded,

} from "@mui/icons-material";

/* ===========================================================
Component
=========================================================== */

const ManualBillingCard = ({

    onStartBilling,

}) => {

    return (

        <section className="manual-billing-card">

            {/* ==========================================
                Left
            ========================================== */}

            <div className="manual-billing-left">

                <div className="manual-billing-icon">

                    <LocalPharmacyOutlined />

                </div>

                <div className="manual-billing-content">

                    <h3>

                        Walk-in Customer

                    </h3>

                    <p>

                        No digital prescription is required for
                        walk-in customers.

                        Search medicines manually and create
                        a pharmacy bill.

                    </p>

                </div>

            </div>

            {/* ==========================================
                Right
            ========================================== */}

            <button

                type="button"

                className="manual-billing-btn"

                onClick={onStartBilling}

            >

                Start Manual Billing

                <ArrowForwardRounded />

            </button>

        </section>

    );

};

export default ManualBillingCard;