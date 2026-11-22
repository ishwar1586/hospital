const getCollectionStats = (
    collections = [],
    referenceDate = "2026-08-12"
) => {

    const totalSamples =
        collections.length;


    const completedSamples =
        collections.filter(
            (collection) =>
                collection.status ===
                "Completed"
        ).length;


    const pendingSamples =
        collections.filter(
            (collection) =>
                collection.status ===
                "Pending"
        ).length;


    const rejectedSamples =
        collections.filter(
            (collection) =>
                collection.status ===
                "Rejected"
        ).length;


    // =========================================
    // REJECTION RATE
    // =========================================

    const rejectionRate =
        totalSamples > 0
            ? (
                (
                    rejectedSamples /
                    totalSamples
                ) * 100
            ).toFixed(1)
            : "0.0";


    // =========================================
    // TODAY'S COLLECTIONS
    // =========================================

    const todaysCollections =
        collections.filter(
            (collection) =>
                collection.collectionDate ===
                referenceDate
        ).length;


    return {

        todaysCollections,

        collectedSamples:
            completedSamples,

        pendingCollection:
            pendingSamples,

        rejectionRate,

        totalSamples,

        rejectedSamples,

    };

};


export default getCollectionStats;