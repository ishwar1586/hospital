import HistoryOutlinedIcon
    from "@mui/icons-material/HistoryOutlined";

import ManageSearchOutlinedIcon
    from "@mui/icons-material/ManageSearchOutlined";

import CancelOutlinedIcon
    from "@mui/icons-material/CancelOutlined";

import VerifiedOutlinedIcon
    from "@mui/icons-material/VerifiedOutlined";

import "./VerificationActions.css";


// =========================================
// COMPONENT
// =========================================

const VerificationActions = ({

    result = {},

    onPreviousResults,

    onHistory,

    onReject,

    onVerify,

    onToast,

    isProcessing = false,

}) => {


    // =========================================
    // SAFE DATA
    // =========================================

    const data =
        result || {};


    // =========================================
    // RESULT STATUS
    // =========================================

    const verificationStatus =
        String(
            data?.verificationStatus ||
            data?.status ||
            "pending"
        )
            .trim()
            .toLowerCase();


    // =========================================
    // VERIFIED STATE
    // =========================================

    const isVerified =
        verificationStatus === "verified";


    const isRejected =
        verificationStatus === "rejected";


    // =========================================
    // PREVIOUS RESULTS
    // =========================================

    const handlePreviousResults = () => {

        if (
            typeof onPreviousResults ===
            "function"
        ) {

            onPreviousResults(
                data
            );

        }

    };


    // =========================================
    // HISTORY
    // =========================================

    const handleHistory = () => {

        if (
            typeof onHistory ===
            "function"
        ) {

            onHistory(
                data
            );

        }

    };


    // =========================================
    // REJECT RESULT
    // =========================================

    const handleReject = () => {

        if (
            isProcessing ||
            isRejected
        ) {

            return;

        }


        // =====================================
        // CALLBACK
        // =====================================

        if (
            typeof onReject ===
            "function"
        ) {

            onReject(
                data
            );

            return;

        }


        // =====================================
        // FALLBACK TOAST
        // =====================================

        if (
            typeof onToast ===
            "function"
        ) {

            onToast({

                type:
                    "warning",

                title:
                    "Reject Result",

                message:
                    "Please provide a rejection reason before rejecting this result.",

                duration:
                    3500,

            });

        }

    };


    // =========================================
    // VERIFY RESULT
    // =========================================

    const handleVerify = () => {

        if (
            isProcessing ||
            isVerified
        ) {

            return;

        }


        // =====================================
        // CALLBACK
        // =====================================

        if (
            typeof onVerify ===
            "function"
        ) {

            onVerify(
                data
            );

            return;

        }


        // =====================================
        // FALLBACK TOAST
        // =====================================

        if (
            typeof onToast ===
            "function"
        ) {

            onToast({

                type:
                    "success",

                title:
                    "Result Verified",

                message:
                    "Laboratory result has been verified successfully.",

                duration:
                    3500,

            });

        }

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <footer
            className="
                verification-actions
            "
        >

            {/* =================================
                LEFT
            ================================= */}

            <div
                className="
                    verification-actions__left
                "
            >

                <span
                    className="
                        verification-actions__status-label
                    "
                >
                    Verification Status
                </span>


                <span
                    className={`
                        verification-actions__status
                        verification-actions__status--${verificationStatus}
                    `}
                >

                    {isVerified
                        ? "Verified"
                        : isRejected
                            ? "Rejected"
                            : "Pending"
                    }

                </span>

            </div>


            {/* =================================
                RIGHT
            ================================= */}

            <div
                className="
                    verification-actions__right
            "
            >

                {/* =============================
                    PREVIOUS RESULTS
                ============================= */}

                <button
                    type="button"
                    className="
                        verification-actions__button
                        verification-actions__button--secondary
                    "
                    onClick={
                        handlePreviousResults
                    }
                    disabled={
                        isProcessing
                    }
                >

                    <ManageSearchOutlinedIcon />

                    <span>
                        Previous Results
                    </span>

                </button>


                {/* =============================
                    HISTORY
                ============================= */}

                <button
                    type="button"
                    className="
                        verification-actions__button
                        verification-actions__button--secondary
                    "
                    onClick={
                        handleHistory
                    }
                    disabled={
                        isProcessing
                    }
                >

                    <HistoryOutlinedIcon />

                    <span>
                        History
                    </span>

                </button>


                {/* =============================
                    REJECT
                ============================= */}

                <button
                    type="button"
                    className="
                        verification-actions__button
                        verification-actions__button--reject
                    "
                    onClick={
                        handleReject
                    }
                    disabled={
                        isProcessing ||
                        isRejected ||
                        isVerified
                    }
                >

                    <CancelOutlinedIcon />

                    <span>
                        {isRejected
                            ? "Rejected"
                            : "Reject Result"
                        }
                    </span>

                </button>


                {/* =============================
                    VERIFY
                ============================= */}

                <button
                    type="button"
                    className="
                        verification-actions__button
                        verification-actions__button--verify
                    "
                    onClick={
                        handleVerify
                    }
                    disabled={
                        isProcessing ||
                        isVerified ||
                        isRejected
                    }
                >

                    <VerifiedOutlinedIcon />

                    <span>
                        {isVerified
                            ? "Verified"
                            : "Verify Result"
                        }
                    </span>

                </button>

            </div>

        </footer>

    );

};


export default VerificationActions;