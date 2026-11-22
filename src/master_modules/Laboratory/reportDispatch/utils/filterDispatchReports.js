// =========================================
// FILTER DISPATCH REPORTS
// =========================================


// =========================================
// NORMALIZE VALUE
// =========================================

const normalizeValue = (
    value
) => {

    if (
        value ===
        null ||
        value ===
        undefined
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
// SEARCH MATCH
// =========================================

const matchesSearch = (
    report,
    searchValue
) => {

    if (
        !searchValue
    ) {
        return true;
    }


    const search =
        normalizeValue(
            searchValue
        );


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

};


// =========================================
// STATUS MATCH
// =========================================

const matchesStatus = (
    report,
    status
) => {

    if (
        !status
    ) {
        return true;
    }


    return (
        normalizeValue(
            report?.status
        ) ===
        normalizeValue(
            status
        )
    );

};


// =========================================
// DISPATCH MODE MATCH
// =========================================

const matchesDispatchMode = (
    report,
    dispatchMode
) => {

    if (
        !dispatchMode
    ) {
        return true;
    }


    return (
        normalizeValue(
            report?.dispatchMode
        ) ===
        normalizeValue(
            dispatchMode
        )
    );

};


// =========================================
// DEPARTMENT MATCH
// =========================================

const matchesDepartment = (
    report,
    department
) => {

    if (
        !department
    ) {
        return true;
    }


    return (
        normalizeValue(
            report?.department
        ) ===
        normalizeValue(
            department
        )
    );

};


// =========================================
// DATE VALUE
// =========================================

const getReportDate = (
    report
) => {

    /*
     * Current mock data mein verifiedOn
     * human-readable format mein hai:
     *
     * "18 Aug 2026, 09:15 AM"
     *
     * Future API mein proper ISO date
     * aana preferable hai.
     *
     * Is utility mein verifiedOn ko
     * primary report date maana gaya hai.
     */

    if (
        report?.verifiedDate
    ) {
        return new Date(
            report.verifiedDate
        );
    }


    if (
        report?.verifiedOn
    ) {
        return new Date(
            report.verifiedOn
        );
    }


    if (
        report?.dispatchTime
    ) {
        return new Date(
            report.dispatchTime
        );
    }


    return null;

};


// =========================================
// FROM DATE MATCH
// =========================================

const matchesFromDate = (
    report,
    fromDate
) => {

    if (
        !fromDate
    ) {
        return true;
    }


    const reportDate =
        getReportDate(
            report
        );


    if (
        !reportDate ||
        Number.isNaN(
            reportDate.getTime()
        )
    ) {
        return false;
    }


    const startDate =
        new Date(
            `${fromDate}T00:00:00`
        );


    return (
        reportDate >=
        startDate
    );

};


// =========================================
// TO DATE MATCH
// =========================================

const matchesToDate = (
    report,
    toDate
) => {

    if (
        !toDate
    ) {
        return true;
    }


    const reportDate =
        getReportDate(
            report
        );


    if (
        !reportDate ||
        Number.isNaN(
            reportDate.getTime()
        )
    ) {
        return false;
    }


    const endDate =
        new Date(
            `${toDate}T23:59:59.999`
        );


    return (
        reportDate <=
        endDate
    );

};


// =========================================
// MAIN FILTER FUNCTION
// =========================================

const filterDispatchReports = (
    reports = [],
    filters = {}
) => {

    if (
        !Array.isArray(
            reports
        )
    ) {
        return [];
    }


    const {

        search =
            "",

        status =
            "",

        dispatchMode =
            "",

        department =
            "",

        fromDate =
            "",

        toDate =
            "",

    } = filters;


    return reports.filter(
        (
            report
        ) => {

            const searchMatch =
                matchesSearch(
                    report,
                    search
                );


            const statusMatch =
                matchesStatus(
                    report,
                    status
                );


            const dispatchModeMatch =
                matchesDispatchMode(
                    report,
                    dispatchMode
                );


            const departmentMatch =
                matchesDepartment(
                    report,
                    department
                );


            const fromDateMatch =
                matchesFromDate(
                    report,
                    fromDate
                );


            const toDateMatch =
                matchesToDate(
                    report,
                    toDate
                );


            return (

                searchMatch &&

                statusMatch &&

                dispatchModeMatch &&

                departmentMatch &&

                fromDateMatch &&

                toDateMatch

            );

        }
    );

};


export default filterDispatchReports;