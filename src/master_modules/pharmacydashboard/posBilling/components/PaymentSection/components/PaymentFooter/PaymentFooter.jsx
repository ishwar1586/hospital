import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CircularProgress from "@mui/material/CircularProgress";

import "./PaymentFooter.css";

const PaymentFooter = ({

    isPaymentValid = false,

    paymentProcessing = false,

    onCancel = () => {},

    onCompletePayment = () => {},

}) => {

    const handleCancel = () => {

        if (paymentProcessing) {

            return;

        }

        onCancel();

    };

    const handleCompletePayment = () => {

        if (paymentProcessing) {

            return;

        }

        if (!isPaymentValid) {

            return;

        }

        onCompletePayment();

    };

    return (

        <footer className="payment-footer">

            {/* =====================================
                Cancel Button
            ===================================== */}

            <button

                type="button"

                className="payment-footer-btn cancel-btn"

                onClick={handleCancel}

                disabled={paymentProcessing}

            >

                <CloseOutlinedIcon />

                <span>

                    Cancel

                </span>

            </button>

            {/* =====================================
                Complete Payment
            ===================================== */}

            <button

                type="button"

                className="payment-footer-btn complete-btn"

                onClick={handleCompletePayment}

                disabled={

                    !isPaymentValid ||

                    paymentProcessing

                }

            >

                {

                    paymentProcessing

                        ? (

                            <CircularProgress

                                size={18}

                                color="inherit"

                            />

                        )

                        : (

                            <CheckCircleOutlineOutlinedIcon />

                        )

                }

                <span>

                    {

                        paymentProcessing

                            ? "Processing Payment..."

                            : "Complete Payment"

                    }

                </span>

            </button>

        </footer>

    );

};

export default PaymentFooter;