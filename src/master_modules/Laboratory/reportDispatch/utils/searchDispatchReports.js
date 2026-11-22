// =========================================
// SEARCH DISPATCH REPORTS
// =========================================


// =========================================
// NORMALIZE VALUE
// =========================================

const normalizeValue = (
    value
) => {

    if (
        value === null ||
        value === undefined
    ) {
        return "";
    }


    return String(
        value
    )
        .trim()
        .toLowerCase();

};


// =========================================
// SEARCH DISPATCH REPORTS
// =========================================

const searchDispatchReports = (
    reports = [],
    searchValue = ""
) => {

    // =========================================
    // INVALID REPORT DATA
    // =========================================

    if (
        !Array.isArray(
            reports
        )
    ) {
        return [];
    }


    // =========================================
    // NORMALIZED SEARCH
    // =========================================

    const search =
        normalizeValue(
            searchValue
        );


    // =========================================
    // EMPTY SEARCH
    // =========================================
    //
    // Search empty hai to original
    // reports return karenge.
    //
    // =========================================

    if (
        !search
    ) {
        return reports;
    }


    // =========================================
    // SEARCH
    // =========================================

    return reports.filter(
        (
            report
        ) => {

            // ================================
            // SEARCHABLE FIELDS
            // ================================

            const searchableValues = [

                report?.patientName,

                report?.uhid,

                report?.accessionNo,

                report?.id,

                report?.department,

                report?.reportType,

                report?.dispatchMode,

                report?.status,

                report?.recipient,

            ];


            // ================================
            // MATCH
            // ================================

            return searchableValues.some(
                (
                    value
                ) =>
                    normalizeValue(
                        value
                    ).includes(
                        search
                    )
            );

        }
    );

};


export default searchDispatchReports;