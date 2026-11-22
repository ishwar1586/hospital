// =========================================
// REPORT DISPATCH TAB CONFIG
// =========================================


// =========================================
// TAB KEYS
// =========================================

export const REPORT_DISPATCH_TAB = {

    ALL:
        "all",

    PENDING:
        "pending",

    DISPATCHED:
        "dispatched",

    DELIVERED:
        "delivered",

    FAILED:
        "failed",

};


// =========================================
// REPORT DISPATCH TABS
// =========================================

const reportDispatchTabs = [

    // =====================================
    // ALL
    // =====================================

    {
        key:
            REPORT_DISPATCH_TAB.ALL,

        label:
            "All",

        count:
            0,
    },


    // =====================================
    // PENDING
    // =====================================

    {
        key:
            REPORT_DISPATCH_TAB.PENDING,

        label:
            "Pending",

        count:
            0,
    },


    // =====================================
    // DISPATCHED
    // =====================================

    {
        key:
            REPORT_DISPATCH_TAB.DISPATCHED,

        label:
            "Dispatched",

        count:
            0,
    },


    // =====================================
    // DELIVERED
    // =====================================

    {
        key:
            REPORT_DISPATCH_TAB.DELIVERED,

        label:
            "Delivered",

        count:
            0,
    },


    // =====================================
    // FAILED
    // =====================================

    {
        key:
            REPORT_DISPATCH_TAB.FAILED,

        label:
            "Failed",

        count:
            0,
    },

];


export default reportDispatchTabs;