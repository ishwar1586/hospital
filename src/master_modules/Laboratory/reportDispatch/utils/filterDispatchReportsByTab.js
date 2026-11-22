// =========================================
// FILTER DISPATCH REPORTS BY TAB
// =========================================

import {
    REPORT_DISPATCH_TAB,
} from "../config/tabs";

import {
    DISPATCH_STATUS,
} from "./dispatchStatus";


// =========================================
// FILTER BY TAB
// =========================================

const filterDispatchReportsByTab = (
    reports = [],
    activeTab = REPORT_DISPATCH_TAB.ALL
) => {

    // =========================================
    // INVALID DATA
    // =========================================

    if (
        !Array.isArray(
            reports
        )
    ) {
        return [];
    }


    // =========================================
    // ALL TAB
    // =========================================

    if (
        activeTab ===
        REPORT_DISPATCH_TAB.ALL
    ) {
        return reports;
    }


    // =========================================
    // TAB → STATUS
    // =========================================

    const tabStatusMap = {

        [REPORT_DISPATCH_TAB.PENDING]:
            DISPATCH_STATUS.PENDING,

        [REPORT_DISPATCH_TAB.DISPATCHED]:
            DISPATCH_STATUS.DISPATCHED,

        [REPORT_DISPATCH_TAB.DELIVERED]:
            DISPATCH_STATUS.DELIVERED,

        [REPORT_DISPATCH_TAB.FAILED]:
            DISPATCH_STATUS.FAILED,

    };


    const targetStatus =
        tabStatusMap[
            activeTab
        ];


    // =========================================
    // UNKNOWN TAB
    // =========================================

    if (
        !targetStatus
    ) {
        return reports;
    }


    // =========================================
    // FILTER
    // =========================================

    return reports.filter(
        (
            report
        ) =>
            report?.status ===
            targetStatus
    );

};


export default filterDispatchReportsByTab;