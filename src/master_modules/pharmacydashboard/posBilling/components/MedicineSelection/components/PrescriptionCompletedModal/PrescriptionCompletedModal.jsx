import "./PrescriptionCompletedModal.css";

/* ===========================================================
MUI
=========================================================== */

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

/* ===========================================================
Icons
=========================================================== */

import {
    CheckCircleRounded,
    LocalPharmacyRounded,
    ShoppingCartCheckoutRounded,
    CloseRounded,
} from "@mui/icons-material";

/* ===========================================================
Component
=========================================================== */

const PrescriptionCompletedModal = ({

    open = false,

    totalMedicines = 0,

    addedMedicines = 0,

    onClose,

    onGoToBilling,

}) => {

    return (

        <Dialog

            open={open}

            onClose={onClose}

            maxWidth="sm"

            fullWidth

        >

            <DialogContent className="prescription-completed-modal">

                {/* ==========================================
                    Close Button
                ========================================== */}

                <button

                    type="button"

                    className="pcm-close-btn"

                    onClick={onClose}

                >

                    <CloseRounded />

                </button>

                {/* ==========================================
                    Success Icon
                ========================================== */}

                <div className="pcm-icon-wrapper">

                    <div className="pcm-icon">

                        <CheckCircleRounded />

                    </div>

                </div>

                {/* ==========================================
                    Heading
                ========================================== */}

                <h2>

                    Prescription Completed

                </h2>

                <p>

                    All prescribed medicines have been successfully
                    added to the billing cart.

                </p>

                {/* ==========================================
                    Summary
                ========================================== */}

                <div className="pcm-summary">

                    <div className="pcm-card">

                        <LocalPharmacyRounded />

                        <span>

                            Prescribed

                        </span>

                        <strong>

                            {totalMedicines}

                        </strong>

                    </div>

                    <div className="pcm-card">

                        <ShoppingCartCheckoutRounded />

                        <span>

                            Added

                        </span>

                        <strong>

                            {addedMedicines}

                        </strong>

                    </div>

                    <div className="pcm-card success">

                        <CheckCircleRounded />

                        <span>

                            Pending

                        </span>

                        <strong>

                            {

                                totalMedicines -

                                addedMedicines

                            }

                        </strong>

                    </div>

                </div>

                {/* ==========================================
                    Footer
                ========================================== */}

                <div className="pcm-footer">

                    <button

                        type="button"

                        className="pcm-secondary-btn"

                        onClick={onClose}

                    >

                        Review Medicines

                    </button>

                    <button

                        type="button"

                        className="pcm-primary-btn"

                        onClick={onGoToBilling}

                    >

                        Go To Billing

                    </button>

                </div>

            </DialogContent>

        </Dialog>

    );

};

export default PrescriptionCompletedModal;