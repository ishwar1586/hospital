// =========================================
// FILTER RESULT VERIFICATION
// =========================================

const filterResultVerification = (

    data = [],

    filterValues = {},

    activeTab = "pending"

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
    // FILTER VALUES
    // =========================================

    const search =
        String(
            filterValues?.search ||
            ""
        )
            .trim()
            .toLowerCase();


    const department =
        String(
            filterValues?.department ||
            "all"
        )
            .trim()
            .toLowerCase();


    const analyzer =
        String(
            filterValues?.analyzer ||
            "all"
        )
            .trim()
            .toLowerCase();


    const testName =
        String(
            filterValues?.testName ||
            "all"
        )
            .trim()
            .toLowerCase();


    const verificationStatus =
        String(
            filterValues?.verificationStatus ||
            "all"
        )
            .trim()
            .toLowerCase();


    const priority =
        String(
            filterValues?.priority ||
            "all"
        )
            .trim()
            .toLowerCase();


    // =========================================
    // ACTIVE TAB
    // =========================================

    const normalizedTab =
        String(
            activeTab ||
            ""
        )
            .trim()
            .toLowerCase();


    // =========================================
    // FILTER DATA
    // =========================================

    return data.filter(
        (item) => {


            // =====================================
            // SAFE ITEM
            // =====================================

            const row =
                item || {};


            // =====================================
            // SEARCH
            // =====================================

            if (
                search
            ) {

                const searchableText = [

                    row.accessionNo,

                    row.patientName,

                    row.uhid,

                    row.testName,

                    row.testCode,

                    row.department,

                    row.doctorName,

                    row.analyzer,

                ]
                    .filter(
                        Boolean
                    )
                    .join(" ")
                    .toLowerCase();


                if (
                    !searchableText.includes(
                        search
                    )
                ) {

                    return false;

                }

            }


            // =====================================
            // DEPARTMENT
            // =====================================

            if (
                department !==
                "all"
            ) {

                const rowDepartment =
                    String(
                        row.department ||
                        ""
                    )
                        .trim()
                        .toLowerCase();


                if (
                    rowDepartment !==
                    department
                ) {

                    return false;

                }

            }


            // =====================================
            // ANALYZER
            // =====================================

            if (
                analyzer !==
                "all"
            ) {

                const rowAnalyzer =
                    String(
                        row.analyzer ||
                        ""
                    )
                        .trim()
                        .toLowerCase();


                if (
                    rowAnalyzer !==
                    analyzer
                ) {

                    return false;

                }

            }


            // =====================================
            // TEST
            // =====================================

            if (
                testName !==
                "all"
            ) {

                const rowTestCode =
                    String(
                        row.testCode ||
                        ""
                    )
                        .trim()
                        .toLowerCase();


                const rowTestName =
                    String(
                        row.testName ||
                        ""
                    )
                        .trim()
                        .toLowerCase();


                const testMatches =
                    rowTestCode ===
                        testName ||
                    rowTestName ===
                        testName;


                if (
                    !testMatches
                ) {

                    return false;

                }

            }


            // =====================================
            // STATUS FILTER
            // =====================================

            if (
                verificationStatus !==
                "all"
            ) {

                const rowStatus =
                    String(
                        row.verificationStatus ||
                        row.status ||
                        ""
                    )
                        .trim()
                        .toLowerCase();


                if (
                    rowStatus !==
                    verificationStatus
                ) {

                    return false;

                }

            }


            // =====================================
            // PRIORITY FILTER
            // =====================================

            if (
                priority !==
                "all"
            ) {

                const rowPriority =
                    String(
                        row.priority ||
                        "normal"
                    )
                        .trim()
                        .toLowerCase();


                /*
                 * "urgent" ko critical ke
                 * equivalent treat kar rahe hain.
                 */

                const normalizedRowPriority =
                    rowPriority ===
                    "urgent"

                        ? "critical"

                        : rowPriority;


                if (
                    normalizedRowPriority !==
                    priority
                ) {

                    return false;

                }

            }


            // =====================================
            // ACTIVE TAB
            // =====================================

            if (
                normalizedTab &&
                normalizedTab !==
                "all"
            ) {


                // =================================
                // CRITICAL TAB
                // =================================

                if (
                    normalizedTab ===
                    "critical"
                ) {

                    const rowPriority =
                        String(
                            row.priority ||
                            ""
                        )
                            .trim()
                            .toLowerCase();


                    const isCritical =
                        rowPriority ===
                            "critical" ||
                        rowPriority ===
                            "urgent" ||
                        row.critical ===
                            true;


                    if (
                        !isCritical
                    ) {

                        return false;

                    }

                }


                // =================================
                // STATUS BASED TABS
                // =================================

                else {

                    const rowStatus =
                        String(
                            row.verificationStatus ||
                            row.status ||
                            ""
                        )
                            .trim()
                            .toLowerCase();


                    if (
                        rowStatus !==
                        normalizedTab
                    ) {

                        return false;

                    }

                }

            }


            // =====================================
            // MATCH
            // =====================================

            return true;

        }
    );

};


export default filterResultVerification;