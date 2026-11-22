// =========================================
// RESULT VERIFICATION STATS
// =========================================

const getResultVerificationStats = (
    data = []
) => {

    // =====================================
    // SAFE DATA
    // =====================================

    const safeData =
        Array.isArray(data)
            ? data
            : [];


    // =====================================
    // STATUS COUNTS
    // =====================================

    const pending =
        safeData.filter(
            (item) =>
                item?.verificationStatus ===
                "pending"
        ).length;


    const underReview =
        safeData.filter(
            (item) =>
                item?.verificationStatus ===
                "underReview"
        ).length;


    const verified =
        safeData.filter(
            (item) =>
                item?.verificationStatus ===
                "verified"
        ).length;


    const rejected =
        safeData.filter(
            (item) =>
                item?.verificationStatus ===
                "rejected"
        ).length;


    // =====================================
    // CRITICAL
    // =====================================

    const critical =
        safeData.filter(
            (item) =>
                item?.priority ===
                    "critical" ||
                item?.priority ===
                    "urgent" ||
                item?.critical ===
                    true
        ).length;


    // =====================================
    // TOTAL
    // =====================================

    const total =
        safeData.length;


    // =====================================
    // RETURN
    // =====================================

    return {

        total,

        pending,

        underReview,

        critical,

        verified,

        rejected,

    };

};


export default getResultVerificationStats;