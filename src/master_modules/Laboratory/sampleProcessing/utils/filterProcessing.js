const filterProcessing = (
    data = [],
    filters = {},
    activeTab = "all"
) => {


    // =========================================
    // FILTER VALUES
    // =========================================

    const search =
        String(
            filters.search || ""
        )
            .trim()
            .toLowerCase();


    const processingDate =
        filters.processingDate || "";


    const department =
        filters.department || "all";


    const sampleType =
        filters.sampleType || "all";


    const status =
        filters.status || "all";


    // =========================================
    // FILTER DATA
    // =========================================

    return data.filter(
        (item) => {


            // =====================================
            // SAFE VALUES
            // =====================================

            const accessionNo =
                String(
                    item.accessionNo || ""
                ).toLowerCase();


            const patientName =
                String(
                    item.patientName || ""
                ).toLowerCase();


            const barcode =
                String(
                    item.barcode || ""
                ).toLowerCase();


            const sampleTypeValue =
                String(
                    item.sampleType || ""
                ).toLowerCase();


            const testProfile =
                String(
                    item.testProfile || ""
                ).toLowerCase();


            const departmentValue =
                String(
                    item.department || ""
                ).toLowerCase();


            const itemStatus =
                String(
                    item.status || ""
                );


            // =====================================
            // SEARCH
            // =====================================

            const matchesSearch =
                !search ||

                accessionNo.includes(
                    search
                ) ||

                patientName.includes(
                    search
                ) ||

                barcode.includes(
                    search
                ) ||

                sampleTypeValue.includes(
                    search
                ) ||

                testProfile.includes(
                    search
                ) ||

                departmentValue.includes(
                    search
                );


            if (!matchesSearch) {

                return false;

            }


            // =====================================
            // PROCESSING DATE
            // =====================================

            let matchesProcessingDate =
                true;


            if (processingDate) {

                /*
                 * Preferred backend/mock field:
                 *
                 * item.processingDate
                 *
                 * Example:
                 * "2026-08-14"
                 *
                 * If that field doesn't exist,
                 * receivedOn is used as fallback.
                 */

                if (item.processingDate) {

                    matchesProcessingDate =
                        String(
                            item.processingDate
                        ) ===
                        processingDate;

                } else {

                    /*
                     * Current mock data uses:
                     *
                     * "14 Aug 2026, 08:15 AM"
                     *
                     * Convert YYYY-MM-DD into
                     * a readable date and compare.
                     */

                    const selectedDate =
                        new Date(
                            `${processingDate}T00:00:00`
                        );


                    if (
                        !Number.isNaN(
                            selectedDate.getTime()
                        )
                    ) {

                        const day =
                            String(
                                selectedDate.getDate()
                            ).padStart(
                                2,
                                "0"
                            );


                        const month =
                            selectedDate.toLocaleString(
                                "en-US",
                                {
                                    month: "short",
                                }
                            );


                        const year =
                            selectedDate.getFullYear();


                        const formattedDate =
                            `${day} ${month} ${year}`;


                        matchesProcessingDate =
                            String(
                                item.receivedOn || ""
                            )
                                .toLowerCase()
                                .includes(
                                    formattedDate.toLowerCase()
                                );

                    }

                }

            }


            if (!matchesProcessingDate) {

                return false;

            }


            // =====================================
            // DEPARTMENT
            // =====================================

            const matchesDepartment =
                department === "all" ||

                item.department ===
                department;


            if (!matchesDepartment) {

                return false;

            }


            // =====================================
            // SAMPLE TYPE
            // =====================================

            const matchesSampleType =
                sampleType === "all" ||

                item.sampleType ===
                sampleType;


            if (!matchesSampleType) {

                return false;

            }


            // =====================================
            // STATUS FILTER
            // =====================================

            const matchesStatus =
                status === "all" ||

                itemStatus ===
                status;


            if (!matchesStatus) {

                return false;

            }


            // =====================================
            // TAB FILTER
            // =====================================

            let matchesTab = true;


            switch (activeTab) {


                case "all":

                    matchesTab = true;

                    break;


                case "inProcessing":

                    matchesTab =
                        itemStatus ===
                        "In Processing";

                    break;


                case "processed":

                    matchesTab =
                        itemStatus ===
                        "Processed";

                    break;


                case "onHold":

                    matchesTab =
                        itemStatus ===
                        "On Hold";

                    break;


                case "rejected":

                    matchesTab =
                        itemStatus ===
                        "Rejected";

                    break;


                default:

                    matchesTab = true;

                    break;

            }


            if (!matchesTab) {

                return false;

            }


            // =====================================
            // FINAL MATCH
            // =====================================

            return true;

        }
    );

};


export default filterProcessing;