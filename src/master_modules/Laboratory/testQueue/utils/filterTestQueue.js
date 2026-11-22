// =========================================
// FILTER TEST QUEUE
// =========================================

const filterTestQueue = (
    data = [],
    filters = {},
    activeTab = "all"
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

        priority = "all",

        tatStatus = "all",

        status = "all",

    } = filters;


    // =========================================
    // SEARCH VALUE
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

                    item.accessionNo,

                    item.patientId,

                    item.testName,

                    item.testCode,

                ];


                const matchesSearch =
                    searchableValues.some(
                        (value) => {

                            return String(
                                value || ""
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
            // PRIORITY
            // =====================================

            if (
                priority !== "all" &&
                item.priority !== priority
            ) {

                return false;

            }


            // =====================================
            // TAT STATUS
            // =====================================

            if (
                tatStatus !== "all" &&
                item.tatStatus !== tatStatus
            ) {

                return false;

            }


            // =====================================
            // QUEUE STATUS
            // =====================================

            if (
                status !== "all" &&
                item.status !== status
            ) {

                return false;

            }


            // =====================================
            // ACTIVE TAB
            // =====================================

            switch (activeTab) {


                // =================================
                // ALL
                // =================================

                case "all":

                    return true;


                // =================================
                // HIGH PRIORITY
                // =================================

                case "highPriority":

                    return (
                        item.priority === "High" ||
                        item.priority === "Urgent"
                    );


                // =================================
                // DUE IN ONE HOUR
                // =================================

                case "dueInOneHour":

                    return (
                        item.tatStatus === "warning" ||
                        item.tatStatus === "critical"
                    );


                // =================================
                // IN PROGRESS
                // =================================

                case "inProgress":

                    return (
                        item.status === "In Progress"
                    );


                // =================================
                // OVERDUE
                // =================================

                case "overdue":

                    return (
                        item.tatStatus === "overdue"
                    );


                // =================================
                // UNKNOWN TAB
                // =================================

                default:

                    return true;

            }

        }
    );

};


export default filterTestQueue;