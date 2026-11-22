// =========================================
// FILTER RESULT ENTRY
// =========================================

const filterResultEntry = (
    data = [],
    filters = {},
    activeTab = "pending"
) => {

    // =========================================
    // SAFETY CHECK
    // =========================================

    if (!Array.isArray(data)) {

        return [];

    }


    // =========================================
    // NORMALIZE FILTERS
    // =========================================

    const {

        search = "",

        department = "all",

        analyzer = "all",

        testName = "all",

        resultStatus = "all",

    } = filters;


    // =========================================
    // NORMALIZE SEARCH
    // =========================================

    const searchValue =
        String(search)
            .trim()
            .toLowerCase();


    // =========================================
    // FILTER DATA
    // =========================================

    return data.filter(
        (item) => {


            // =====================================
            // SEARCH
            // =====================================

            if (searchValue) {

                const searchableValues = [

                    item.patientName,

                    item.patientId,

                    item.accessionNo,

                    item.testName,

                    item.testCode,

                    item.sampleNo,

                    item.doctorName,

                ];


                const matchesSearch =
                    searchableValues.some(
                        (value) => {

                            return String(
                                value ?? ""
                            )
                                .toLowerCase()
                                .includes(
                                    searchValue
                                );

                        }
                    );


                if (!matchesSearch) {

                    return false;

                }

            }


            // =====================================
            // DEPARTMENT
            // =====================================

            if (
                department !== "all" &&
                item.department !== department
            ) {

                return false;

            }


            // =====================================
            // ANALYZER
            // =====================================

            if (
                analyzer !== "all" &&
                item.analyzer !== analyzer
            ) {

                return false;

            }


            // =====================================
            // TEST
            // =====================================

            if (
                testName !== "all" &&
                item.testName !== testName
            ) {

                return false;

            }


            // =====================================
            // RESULT STATUS
            // =====================================

            if (
                resultStatus !== "all"
            ) {

                const itemStatus =
                    String(
                        item.resultStatus ||
                        ""
                    )
                        .trim()
                        .toLowerCase();


                const selectedStatus =
                    String(
                        resultStatus
                    )
                        .trim()
                        .toLowerCase();


                /*
                 * Verified results are considered
                 * completed for the Result Status
                 * filter.
                 */

                if (
                    selectedStatus ===
                    "completed"
                ) {

                    if (
                        itemStatus !==
                            "completed" &&
                        itemStatus !==
                            "verified"
                    ) {

                        return false;

                    }

                } else {

                    if (
                        itemStatus !==
                        selectedStatus
                    ) {

                        return false;

                    }

                }

            }


            // =====================================
            // ACTIVE TAB
            // =====================================

            const itemStatus =
                String(
                    item.resultStatus ||
                    ""
                )
                    .trim()
                    .toLowerCase();


            switch (
                activeTab
            ) {


                // =================================
                // PENDING
                // =================================

                case "pending":

                    return (
                        itemStatus ===
                        "pending"
                    );


                // =================================
                // IN PROGRESS
                // =================================

                case "inProgress":

                    return (
                        itemStatus ===
                        "inprogress"
                    );


                // =================================
                // COMPLETED
                // =================================

                case "completed":

                    return (
                        itemStatus ===
                            "completed" ||
                        itemStatus ===
                            "verified"
                    );


                // =================================
                // ALL
                // =================================

                case "all":

                    return true;


                // =================================
                // DEFAULT
                // =================================

                default:

                    return true;

            }

        }
    );

};


export default filterResultEntry;