const normalizeValue = (value) => {

    return String(value || "")
        .trim()
        .toLowerCase();

};


const filterCollections = (
    collections = [],
    filters = {},
    activeTab = "all"
) => {

    const {
        search = "",
        collectionDate = "",
        collectionCenter = "all",
        sampleType = "all",
        status = "all",
    } = filters;


    /* =========================================
       NORMALIZED FILTER VALUES
    ========================================= */

    const normalizedSearch =
        normalizeValue(search);


    const normalizedCenter =
        normalizeValue(collectionCenter);


    const normalizedSampleType =
        normalizeValue(sampleType);


    const normalizedStatus =
        normalizeValue(status);


    const normalizedActiveTab =
        normalizeValue(activeTab);


    /* =========================================
       FILTER COLLECTIONS
    ========================================= */

    return collections.filter(
        (collection) => {


            /* =================================
               SEARCH
            ================================= */

            const accessionNo =
                normalizeValue(
                    collection.accessionNo
                );


            const patientName =
                normalizeValue(
                    collection.patient?.name
                );


            const patientUHID =
                normalizeValue(
                    collection.patient?.uhid
                );


            const sampleTypeValue =
                normalizeValue(
                    collection.sampleType
                );


            const matchesSearch =
                !normalizedSearch ||

                accessionNo.includes(
                    normalizedSearch
                ) ||

                patientName.includes(
                    normalizedSearch
                ) ||

                patientUHID.includes(
                    normalizedSearch
                ) ||

                sampleTypeValue.includes(
                    normalizedSearch
                );


            /* =================================
               COLLECTION DATE
            ================================= */

            const matchesDate =
                !collectionDate ||

                collection.collectionDate ===
                    collectionDate;


            /* =================================
               COLLECTION CENTER
            ================================= */

            const collectionCenterValue =
                normalizeValue(
                    collection.collectionCenter
                );


            const centerMap = {

                main:
                    "main laboratory",

                opd:
                    "opd collection center",

                ipd:
                    "ipd collection center",

                emergency:
                    "emergency",

            };


            const expectedCenter =
                centerMap[
                    normalizedCenter
                ];


            const matchesCenter =
                normalizedCenter === "all" ||

                collectionCenterValue ===
                    expectedCenter;


            /* =================================
               SAMPLE TYPE
            ================================= */

            const matchesSampleType =
                normalizedSampleType === "all" ||

                sampleTypeValue ===
                    normalizedSampleType;


            /* =================================
               STATUS FILTER
            ================================= */

            const statusValue =
                normalizeValue(
                    collection.status
                );


            const matchesStatus =
                normalizedStatus === "all" ||

                statusValue ===
                    normalizedStatus;


            /* =================================
               ACTIVE TAB
            ================================= */

            const matchesTab =
                normalizedActiveTab === "all" ||

                statusValue ===
                    normalizedActiveTab;


            /* =================================
               FINAL RESULT
            ================================= */

            return (

                matchesSearch &&

                matchesDate &&

                matchesCenter &&

                matchesSampleType &&

                matchesStatus &&

                matchesTab

            );

        }
    );

};


export default filterCollections;