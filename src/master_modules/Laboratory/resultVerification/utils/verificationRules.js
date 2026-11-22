// =========================================
// RESULT VERIFICATION RULES
// =========================================


// =========================================
// STATUS CONSTANTS
// =========================================

export const VERIFICATION_STATUS = {

    PENDING:
        "pending",

    UNDER_REVIEW:
        "underReview",

    VERIFIED:
        "verified",

    REJECTED:
        "rejected",

};


// =========================================
// PRIORITY CONSTANTS
// =========================================

export const RESULT_PRIORITY = {

    NORMAL:
        "normal",

    HIGH:
        "high",

    CRITICAL:
        "critical",

};


// =========================================
// NORMALIZE STATUS
// =========================================

export const normalizeVerificationStatus = (
    status
) => {

    const normalized =
        String(
            status || ""
        )
            .trim()
            .replace(/\s+/g, "")
            .toLowerCase();


    switch (
        normalized
    ) {

        case "pending":

            return (
                VERIFICATION_STATUS.PENDING
            );


        case "underreview":

            return (
                VERIFICATION_STATUS.UNDER_REVIEW
            );


        case "inreview":

            return (
                VERIFICATION_STATUS.UNDER_REVIEW
            );


        case "verified":

            return (
                VERIFICATION_STATUS.VERIFIED
            );


        case "rejected":

            return (
                VERIFICATION_STATUS.REJECTED
            );


        default:

            return (
                VERIFICATION_STATUS.PENDING
            );

    }

};


// =========================================
// NORMALIZE PRIORITY
// =========================================

export const normalizePriority = (
    priority
) => {

    const normalized =
        String(
            priority || ""
        )
            .trim()
            .toLowerCase();


    switch (
        normalized
    ) {

        case "critical":

            return (
                RESULT_PRIORITY.CRITICAL
            );


        case "urgent":

            return (
                RESULT_PRIORITY.CRITICAL
            );


        case "high":

            return (
                RESULT_PRIORITY.HIGH
            );


        case "normal":

            return (
                RESULT_PRIORITY.NORMAL
            );


        default:

            return (
                RESULT_PRIORITY.NORMAL
            );

    }

};


// =========================================
// CHECK CRITICAL RESULT
// =========================================

export const isCriticalResult = (
    result
) => {

    if (
        !result ||
        typeof result !==
        "object"
    ) {

        return false;

    }


    const priority =
        normalizePriority(
            result.priority
        );


    return (
        priority ===
        RESULT_PRIORITY.CRITICAL
        ||
        result.critical ===
        true
    );

};


// =========================================
// CHECK RESULT HAS BASIC DATA
// =========================================

export const hasRequiredResultData = (
    result
) => {

    if (
        !result ||
        typeof result !==
        "object"
    ) {

        return false;

    }


    const requiredFields = [

        "patientName",

        "accessionNo",

        "testName",

    ];


    return requiredFields.every(
        (
            field
        ) => {

            const value =
                result[field];


            return (
                value !==
                    null &&
                value !==
                    undefined &&
                String(
                    value
                ).trim() !==
                    ""
            );

        }
    );

};


// =========================================
// CHECK RESULT IS VERIFIABLE
// =========================================

export const canVerifyResult = (
    result
) => {

    if (
        !hasRequiredResultData(
            result
        )
    ) {

        return {

            canVerify:
                false,

            reason:
                "Required result information is missing.",

        };

    }


    const status =
        normalizeVerificationStatus(
            result.verificationStatus ||
            result.status
        );


    // =====================================
    // ALREADY VERIFIED
    // =====================================

    if (
        status ===
        VERIFICATION_STATUS.VERIFIED
    ) {

        return {

            canVerify:
                false,

            reason:
                "This result has already been verified.",

        };

    }


    // =====================================
    // REJECTED
    // =====================================

    if (
        status ===
        VERIFICATION_STATUS.REJECTED
    ) {

        return {

            canVerify:
                false,

            reason:
                "Rejected results must be corrected before verification.",

        };

    }


    // =====================================
    // CRITICAL RESULT
    // =====================================

    if (
        isCriticalResult(
            result
        )
    ) {

        return {

            canVerify:
                true,

            requiresCriticalReview:
                true,

            reason:
                "Critical result requires additional review.",

        };

    }


    // =====================================
    // NORMAL RESULT
    // =====================================

    return {

        canVerify:
            true,

        requiresCriticalReview:
            false,

        reason:
            "",

    };

};


// =========================================
// CHECK RESULT CAN BE REJECTED
// =========================================

export const canRejectResult = (
    result
) => {

    if (
        !result ||
        typeof result !==
        "object"
    ) {

        return {

            canReject:
                false,

            reason:
                "Result information is unavailable.",

        };

    }


    const status =
        normalizeVerificationStatus(
            result.verificationStatus ||
            result.status
        );


    // =====================================
    // VERIFIED RESULT
    // =====================================

    if (
        status ===
        VERIFICATION_STATUS.VERIFIED
    ) {

        return {

            canReject:
                false,

            reason:
                "A verified result cannot be rejected from the verification worklist.",

        };

    }


    // =====================================
    // ALREADY REJECTED
    // =====================================

    if (
        status ===
        VERIFICATION_STATUS.REJECTED
    ) {

        return {

            canReject:
                false,

            reason:
                "This result is already rejected.",

        };

    }


    // =====================================
    // VALID
    // =====================================

    return {

        canReject:
            true,

        reason:
            "",

    };

};


// =========================================
// CHECK RESULT CAN START REVIEW
// =========================================

export const canStartReview = (
    result
) => {

    if (
        !result ||
        typeof result !==
        "object"
    ) {

        return {

            canStart:
                false,

            reason:
                "Result information is unavailable.",

        };

    }


    const status =
        normalizeVerificationStatus(
            result.verificationStatus ||
            result.status
        );


    // =====================================
    // PENDING
    // =====================================

    if (
        status ===
        VERIFICATION_STATUS.PENDING
    ) {

        return {

            canStart:
                true,

            reason:
                "",

        };

    }


    // =====================================
    // ALREADY UNDER REVIEW
    // =====================================

    if (
        status ===
        VERIFICATION_STATUS.UNDER_REVIEW
    ) {

        return {

            canStart:
                false,

            reason:
                "This result is already under review.",

        };

    }


    // =====================================
    // VERIFIED
    // =====================================

    if (
        status ===
        VERIFICATION_STATUS.VERIFIED
    ) {

        return {

            canStart:
                false,

            reason:
                "This result has already been verified.",

        };

    }


    // =====================================
    // REJECTED
    // =====================================

    return {

        canStart:
            false,

        reason:
            "Rejected results must be corrected before review.",

    };

};


// =========================================
// VERIFY RESULT
// =========================================

export const verifyResult = (
    result
) => {

    const validation =
        canVerifyResult(
            result
        );


    if (
        !validation.canVerify
    ) {

        return {

            success:
                false,

            status:
                normalizeVerificationStatus(
                    result?.verificationStatus
                ),

            message:
                validation.reason,

        };

    }


    return {

        success:
            true,

        status:
            VERIFICATION_STATUS.VERIFIED,

        message:
            "Result is ready for verification.",

        requiresCriticalReview:
            Boolean(
                validation.requiresCriticalReview
            ),

    };

};


// =========================================
// REJECT RESULT
// =========================================

export const rejectResult = (
    result,
    remarks = ""
) => {

    const validation =
        canRejectResult(
            result
        );


    if (
        !validation.canReject
    ) {

        return {

            success:
                false,

            status:
                normalizeVerificationStatus(
                    result?.verificationStatus
                ),

            message:
                validation.reason,

        };

    }


    const cleanRemarks =
        String(
            remarks || ""
        ).trim();


    // =====================================
    // REJECTION REMARK REQUIRED
    // =====================================

    if (
        !cleanRemarks
    ) {

        return {

            success:
                false,

            status:
                VERIFICATION_STATUS.REJECTED,

            message:
                "Rejection remarks are required.",

        };

    }


    return {

        success:
            true,

        status:
            VERIFICATION_STATUS.REJECTED,

        message:
            "Result is ready to be rejected.",

        remarks:
            cleanRemarks,

    };

};


// =========================================
// GET RESULT ACTIONS
// =========================================

export const getResultActions = (
    result
) => {

    const actions = {

        viewDetails:
            true,

        startReview:
            canStartReview(
                result
            ).canStart,

        previousResults:
            true,

        verificationHistory:
            true,

        rejectResult:
            canRejectResult(
                result
            ).canReject,

    };


    return actions;

};


// =========================================
// DEFAULT EXPORT
// =========================================

const verificationRules = {

    VERIFICATION_STATUS,

    RESULT_PRIORITY,

    normalizeVerificationStatus,

    normalizePriority,

    isCriticalResult,

    hasRequiredResultData,

    canVerifyResult,

    canRejectResult,

    canStartReview,

    verifyResult,

    rejectResult,

    getResultActions,

};


export default verificationRules;