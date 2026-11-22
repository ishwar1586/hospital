// =========================================
// REPORT DISPATCH STATUS
// =========================================


// =========================================
// STATUS VALUES
// =========================================

export const DISPATCH_STATUS = {

    PENDING:
        "Pending",

    DISPATCHED:
        "Dispatched",

    DELIVERED:
        "Delivered",

    FAILED:
        "Failed",

};


// =========================================
// STATUS LIST
// =========================================

export const DISPATCH_STATUS_LIST = [

    DISPATCH_STATUS.PENDING,

    DISPATCH_STATUS.DISPATCHED,

    DISPATCH_STATUS.DELIVERED,

    DISPATCH_STATUS.FAILED,

];


// =========================================
// STATUS VALIDATION
// =========================================

export const isValidDispatchStatus = (
    status
) => {

    return DISPATCH_STATUS_LIST.includes(
        status
    );

};


// =========================================
// STATUS LABEL
// =========================================

export const getDispatchStatusLabel = (
    status
) => {

    switch (
        status
    ) {

        case DISPATCH_STATUS.PENDING:

            return "Pending";


        case DISPATCH_STATUS.DISPATCHED:

            return "Dispatched";


        case DISPATCH_STATUS.DELIVERED:

            return "Delivered";


        case DISPATCH_STATUS.FAILED:

            return "Failed";


        default:

            return "Unknown";

    }

};


// =========================================
// DEFAULT STATUS
// =========================================

export const DEFAULT_DISPATCH_STATUS =
    DISPATCH_STATUS.PENDING;