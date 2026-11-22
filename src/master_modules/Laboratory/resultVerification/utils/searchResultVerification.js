// =========================================
// SEARCH RESULT VERIFICATION
// =========================================

const searchResultVerification = (

    data = [],

    searchTerm = ""

) => {


    // =========================================
    // SAFE DATA
    // =========================================

    if (
        !Array.isArray(data)
    ) {

        return [];

    }


    // =========================================
    // NORMALIZE SEARCH
    // =========================================

    const search =
        String(
            searchTerm || ""
        )
            .trim()
            .toLowerCase();


    // =========================================
    // EMPTY SEARCH
    // =========================================

    if (
        !search
    ) {

        return data;

    }


    // =========================================
    // SEARCH
    // =========================================

    return data.filter(
        (item) => {

            const row =
                item || {};


            // =====================================
            // SEARCHABLE VALUES
            // =====================================

            const searchableValues = [

                row.accessionNo,

                row.patientName,

                row.uhid,

                row.testName,

                row.testCode,

                row.department,

                row.departmentName,

                row.doctorName,

                row.doctor,

                row.analyzer,

                row.sampleType,

                row.enteredBy,

                row.verifiedBy,

                row.verificationStatus,

                row.priority,

                row.remarks,

            ];


            // =====================================
            // SEARCHABLE TEXT
            // =====================================

            const searchableText =
                searchableValues
                    .filter(
                        (
                            value
                        ) =>
                            value !==
                            null &&
                            value !==
                            undefined
                    )
                    .map(
                        (
                            value
                        ) =>
                            String(
                                value
                            )
                    )
                    .join(" ")
                    .toLowerCase();


            // =====================================
            // MATCH
            // =====================================

            return searchableText.includes(
                search
            );

        }
    );

};


export default searchResultVerification;