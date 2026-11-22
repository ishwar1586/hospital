import {
    useMemo,
    useState,
} from "react";


// =========================================
// WORKSPACE COMPONENTS
// =========================================

import PatientResultHeader
    from "@/master_modules/Laboratory/resultVerification/components/Workspace/PatientResultHeader.jsx";

import VerificationSummary
    from "./VerificationSummary";

import VerificationResultTable
    from "./VerificationResultTable";

import VerificationActions
    from "./VerificationActions";


// =========================================
// UTILS
// =========================================

import {
    canVerifyResult,
    canRejectResult,
    canStartReview,
    normalizeVerificationStatus,
} from "../../utils/verificationRules";


// =========================================
// STYLES
// =========================================

import "./ResultVerificationWorkspace.css";


// =========================================
// COMPONENT
// =========================================

const ResultVerificationWorkspace = ({

    result = null,

    onClose,

    onVerify,

    onReject,

    onToast,

}) => {


    // =========================================
    // REVIEW STATE
    // =========================================

    const [
        isReviewing,
        setIsReviewing,
    ] = useState(false);


    // =========================================
    // PROCESSING STATES
    // =========================================

    const [
        isVerifying,
        setIsVerifying,
    ] = useState(false);


    const [
        isRejecting,
        setIsRejecting,
    ] = useState(false);


    // =========================================
    // SAFE RESULT
    // =========================================

    const safeResult =
        result || null;


    // =========================================
    // NO RESULT
    // =========================================

    if (
        !safeResult
    ) {

        return (

            <section
                className="
                    result-verification-workspace
                    result-verification-workspace--empty
                "
            >

                <div
                    className="
                        result-verification-workspace__empty
                    "
                >

                    <div
                        className="
                            result-verification-workspace__empty-icon
                        "
                    >
                        !
                    </div>


                    <strong>
                        No Result Selected
                    </strong>


                    <span>
                        Select a laboratory result
                        from the verification worklist
                        to open the verification workspace.
                    </span>


                    {typeof onClose ===
                        "function" && (

                        <button
                            type="button"
                            onClick={
                                onClose
                            }
                        >
                            Back to Worklist
                        </button>

                    )}

                </div>

            </section>

        );

    }


    // =========================================
    // CURRENT STATUS
    // =========================================

    const currentStatus =
        normalizeVerificationStatus(

            safeResult?.verificationStatus ||
            safeResult?.status ||
            "pending"

        );


    // =========================================
    // VALIDATION
    // =========================================

    const verificationValidation =
        useMemo(() => {

            const validation =
                canVerifyResult(
                    safeResult
                );


            return {

                canVerify:
                    Boolean(
                        validation?.canVerify
                    ),

                message:
                    validation?.message ||
                    validation?.reason ||
                    "This result cannot be verified.",

            };

        }, [
            safeResult,
        ]);


    // =========================================
    // REJECTION VALIDATION
    // =========================================

    const rejectionValidation =
        useMemo(() => {

            const validation =
                canRejectResult(
                    safeResult
                );


            return {

                canReject:
                    Boolean(
                        validation?.canReject
                    ),

                message:
                    validation?.message ||
                    validation?.reason ||
                    "This result cannot be rejected.",

            };

        }, [
            safeResult,
        ]);


    // =========================================
    // REVIEW VALIDATION
    // =========================================

    const reviewValidation =
        useMemo(() => {

            const validation =
                canStartReview(
                    safeResult
                );


            return {

                canStart:
                    Boolean(
                        validation?.canStart
                    ),

                message:
                    validation?.message ||
                    validation?.reason ||
                    "This result cannot be moved to review.",

            };

        }, [
            safeResult,
        ]);


    // =========================================
    // TOAST HELPER
    // =========================================

    const showWorkspaceToast = ({
        type = "info",
        title = "Information",
        message = "",
        duration = 3500,
    }) => {

        if (
            typeof onToast !==
            "function"
        ) {

            return;

        }


        onToast({

            type,

            title,

            message,

            duration,

        });

    };


    // =========================================
    // START REVIEW
    // =========================================

    const handleStartReview = () => {

        // Already under review
        if (
            currentStatus ===
            "underReview"
        ) {

            showWorkspaceToast({

                type:
                    "info",

                title:
                    "Already Under Review",

                message:
                    "This result is already being reviewed.",

                duration:
                    3000,

            });

            return;

        }


        // Validation
        if (
            !reviewValidation.canStart
        ) {

            showWorkspaceToast({

                type:
                    "warning",

                title:
                    "Review Not Available",

                message:
                    reviewValidation.message,

                duration:
                    3500,

            });

            return;

        }


        // Local UI state
        setIsReviewing(
            true
        );


        // Toast
        showWorkspaceToast({

            type:
                "info",

            title:
                "Review Started",

            message:
                "This laboratory result is now under review.",

            duration:
                3000,

        });

    };


    // =========================================
    // VERIFY RESULT
    // =========================================

    const handleVerify = async () => {

        // Prevent double click
        if (
            isVerifying
        ) {

            return;

        }


        // Already verified
        if (
            currentStatus ===
            "verified"
        ) {

            showWorkspaceToast({

                type:
                    "info",

                title:
                    "Already Verified",

                message:
                    "This laboratory result has already been verified.",

                duration:
                    3000,

            });

            return;

        }


        // Rejected result
        if (
            currentStatus ===
            "rejected"
        ) {

            showWorkspaceToast({

                type:
                    "warning",

                title:
                    "Verification Not Allowed",

                message:
                    "A rejected result cannot be verified.",

                duration:
                    3500,

            });

            return;

        }


        // Rule validation
        if (
            !verificationValidation.canVerify
        ) {

            showWorkspaceToast({

                type:
                    "warning",

                title:
                    "Verification Not Allowed",

                message:
                    verificationValidation.message,

                duration:
                    4000,

            });

            return;

        }


        // Start processing
        setIsVerifying(
            true
        );


        try {

            // =================================
            // PARENT / BACKEND CALLBACK
            // =================================

            if (
                typeof onVerify ===
                "function"
            ) {

                await onVerify(
                    safeResult
                );

            }


            // =================================
            // SUCCESS TOAST
            // =================================

            showWorkspaceToast({

                type:
                    "success",

                title:
                    "Result Verified",

                message:
                    "Laboratory result has been verified successfully.",

                duration:
                    3500,

            });

        } catch (
            error
        ) {

            console.error(
                "Verification failed:",
                error
            );


            showWorkspaceToast({

                type:
                    "error",

                title:
                    "Verification Failed",

                message:
                    "Unable to verify this result. Please try again.",

                duration:
                    4000,

            });

        } finally {

            setIsVerifying(
                false
            );

        }

    };


    // =========================================
    // REJECT RESULT
    // =========================================

    const handleReject = async () => {

        // Prevent double click
        if (
            isRejecting
        ) {

            return;

        }


        // Already rejected
        if (
            currentStatus ===
            "rejected"
        ) {

            showWorkspaceToast({

                type:
                    "info",

                title:
                    "Already Rejected",

                message:
                    "This laboratory result has already been rejected.",

                duration:
                    3000,

            });

            return;

        }


        // Already verified
        if (
            currentStatus ===
            "verified"
        ) {

            showWorkspaceToast({

                type:
                    "warning",

                title:
                    "Rejection Not Allowed",

                message:
                    "A verified result cannot be rejected.",

                duration:
                    3500,

            });

            return;

        }


        // Rule validation
        if (
            !rejectionValidation.canReject
        ) {

            showWorkspaceToast({

                type:
                    "warning",

                title:
                    "Rejection Not Allowed",

                message:
                    rejectionValidation.message,

                duration:
                    4000,

            });

            return;

        }


        /*
         * =====================================
         * IMPORTANT
         * =====================================
         *
         * RejectResultModal abhi bana nahi hai.
         *
         * Isliye abhi hum direct rejection API
         * call nahi kar rahe.
         *
         * Jab RejectResultModal banega:
         *
         * Reject Result
         *       ↓
         * RejectResultModal
         *       ↓
         * Rejection Reason
         *       ↓
         * handleRejectConfirm()
         *
         * =====================================
         */


        showWorkspaceToast({

            type:
                "warning",

            title:
                "Rejection Reason Required",

            message:
                "The rejection dialog will be available after the Reject Result modal is added.",

            duration:
                4000,

        });

    };


    // =========================================
    // PREVIOUS RESULTS
    // =========================================

    const handlePreviousResults = () => {

        /*
         * Modal abhi create nahi hua hai.
         * Isliye temporary informational toast.
         */

        showWorkspaceToast({

            type:
                "info",

            title:
                "Previous Results",

            message:
                "Previous result history will be available here.",

            duration:
                3000,

        });

    };


    // =========================================
    // VERIFICATION HISTORY
    // =========================================

    const handleHistory = () => {

        /*
         * Modal abhi create nahi hua hai.
         * Isliye temporary informational toast.
         */

        showWorkspaceToast({

            type:
                "info",

            title:
                "Verification History",

            message:
                "Verification history will be available here.",

            duration:
                3000,

        });

    };


    // =========================================
    // TABLE ACTION
    // =========================================

    const handleResultAction = (
        action,
        rowData
    ) => {

        switch (
            action
        ) {


            // =================================
            // PREVIOUS RESULTS
            // =================================

            case "viewPrevious":

            case "previousResults":

                handlePreviousResults();

                break;


            // =================================
            // HISTORY
            // =================================

            case "history":

            case "verificationHistory":

                handleHistory();

                break;


            // =================================
            // VERIFY
            // =================================

            case "verify":

            case "verifyResult":

                handleVerify();

                break;


            // =================================
            // REJECT
            // =================================

            case "reject":

            case "rejectResult":

                handleReject();

                break;


            // =================================
            // UNKNOWN ACTION
            // =================================

            default:

                console.log(
                    "Verification workspace action:",
                    action,
                    rowData
                );

                break;

        }

    };


    // =========================================
    // FINAL REVIEWING STATE
    // =========================================
    //
    // Agar backend/mock data mein already
    // underReview hai to header ko bhi review
    // state milni chahiye.
    //
    // =========================================

    const effectiveReviewing =
        isReviewing ||
        currentStatus ===
            "underReview";


    // =========================================
    // RENDER
    // =========================================

    return (

        <section
            className="
                result-verification-workspace
            "
        >


            {/* =================================
                PATIENT RESULT HEADER
            ================================= */}

            <PatientResultHeader

                result={
                    safeResult
                }

                status={
                    currentStatus
                }

                isReviewing={
                    effectiveReviewing
                }

                onClose={
                    onClose
                }

                onStartReview={
                    handleStartReview
                }

                canStartReview={
                    reviewValidation.canStart
                }

            />


            {/* =================================
                VERIFICATION SUMMARY
            ================================= */}

            <VerificationSummary

                result={
                    safeResult
                }

                verificationValidation={
                    verificationValidation
                }

                rejectionValidation={
                    rejectionValidation
                }

            />


            {/* =================================
                VERIFICATION RESULT TABLE
            ================================= */}

            <VerificationResultTable

                result={
                    safeResult
                }

                onAction={
                    handleResultAction
                }

            />


            {/* =================================
                VERIFICATION ACTIONS
            ================================= */}

            <VerificationActions

                result={
                    safeResult
                }

                verificationValidation={
                    verificationValidation
                }

                rejectionValidation={
                    rejectionValidation
                }

                isReviewing={
                    effectiveReviewing
                }

                isProcessing={
                    isVerifying ||
                    isRejecting
                }

                onVerify={
                    handleVerify
                }

                onReject={
                    handleReject
                }

                onViewHistory={
                    handleHistory
                }

                onViewPreviousResults={
                    handlePreviousResults
                }

                onToast={
                    showWorkspaceToast
                }

            />

        </section>

    );

};


export default ResultVerificationWorkspace;