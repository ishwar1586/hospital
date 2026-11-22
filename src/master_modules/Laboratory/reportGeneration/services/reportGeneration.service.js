// =========================================
// REPORT GENERATION SERVICE
// =========================================

import reportGenerationMockData
    from "../mock/reportGeneration.mock";


// =========================================
// INTERNAL DATA STORE
// =========================================
/*
 * Mock environment ke liye local copy.
 *
 * Direct mock array ko mutate nahi karenge.
 */

let reportData = [
    ...reportGenerationMockData,
];


// =========================================
// SMALL ASYNC DELAY
// =========================================
/*
 * Backend API ka behavior simulate karne ke liye.
 *
 * Real API aane par iski zarurat nahi rahegi.
 */

const simulateDelay = (
    duration = 300
) => {

    return new Promise(
        (resolve) => {

            setTimeout(
                resolve,
                duration
            );

        }
    );

};


// =========================================
// GET ALL REPORTS
// =========================================

const getReports = async () => {

    await simulateDelay();


    return [
        ...reportData,
    ];

};


// =========================================
// GET REPORT BY ID
// =========================================

const getReportById = async (
    reportId
) => {

    await simulateDelay();


    if (!reportId) {
        return null;
    }


    const report =
        reportData.find(
            (item) =>
                item.id ===
                reportId
        );


    return report || null;

};


// =========================================
// UPDATE REPORT
// =========================================

const updateReport = async (
    reportId,
    updates = {}
) => {

    await simulateDelay();


    if (
        !reportId ||
        !updates ||
        typeof updates !==
            "object"
    ) {
        return null;
    }


    const reportIndex =
        reportData.findIndex(
            (item) =>
                item.id ===
                reportId
        );


    if (
        reportIndex === -1
    ) {
        return null;
    }


    reportData[
        reportIndex
    ] = {

        ...reportData[
            reportIndex
        ],

        ...updates,

    };


    return {
        ...reportData[
            reportIndex
        ],
    };

};


// =========================================
// UPDATE MULTIPLE REPORTS
// =========================================

const updateReports = async (
    reportIds = [],
    updates = {}
) => {

    await simulateDelay();


    if (
        !Array.isArray(
            reportIds
        ) ||
        reportIds.length === 0
    ) {
        return [];
    }


    if (
        !updates ||
        typeof updates !==
            "object"
    ) {
        return [];
    }


    const updatedReports = [];


    reportData =
        reportData.map(
            (report) => {

                if (
                    !reportIds.includes(
                        report.id
                    )
                ) {
                    return report;
                }


                const updatedReport = {

                    ...report,

                    ...updates,

                };


                updatedReports.push(
                    updatedReport
                );


                return updatedReport;

            }
        );


    return updatedReports;

};


// =========================================
// GENERATE REPORT
// =========================================

const generateReport = async (
    reportId
) => {

    await simulateDelay(
        700
    );


    if (!reportId) {
        return null;
    }


    const report =
        reportData.find(
            (item) =>
                item.id ===
                reportId
        );


    if (!report) {
        return null;
    }


    const generatedReport = {

        ...report,

        status:
            "generated",

        generatedOn:
            new Date().toLocaleString(
                "en-IN",
                {
                    day:
                        "2-digit",

                    month:
                        "short",

                    year:
                        "numeric",

                    hour:
                        "2-digit",

                    minute:
                        "2-digit",

                }
            ),

        reportFileName:
            `${report.id}.pdf`,

    };


    reportData =
        reportData.map(
            (item) =>
                item.id ===
                reportId
                    ? generatedReport
                    : item
        );


    return {
        ...generatedReport,
    };

};


// =========================================
// GENERATE MULTIPLE REPORTS
// =========================================

const generateReports = async (
    reportIds = []
) => {

    await simulateDelay(
        700
    );


    if (
        !Array.isArray(
            reportIds
        ) ||
        reportIds.length === 0
    ) {
        return [];
    }


    const generatedOn =
        new Date().toLocaleString(
            "en-IN",
            {
                day:
                    "2-digit",

                month:
                    "short",

                year:
                    "numeric",

                hour:
                    "2-digit",

                minute:
                    "2-digit",

            }
        );


    const generatedReports = [];


    reportData =
        reportData.map(
            (report) => {

                if (
                    !reportIds.includes(
                        report.id
                    )
                ) {
                    return report;
                }


                const generatedReport = {

                    ...report,

                    status:
                        "generated",

                    generatedOn,

                    reportFileName:
                        `${report.id}.pdf`,

                };


                generatedReports.push(
                    generatedReport
                );


                return generatedReport;

            }
        );


    return generatedReports;

};


// =========================================
// MARK AS PRINTED
// =========================================

const markAsPrinted = async (
    reportId
) => {

    await simulateDelay(
        400
    );


    if (!reportId) {
        return null;
    }


    return updateReport(
        reportId,
        {
            status:
                "printed",

            printedOn:
                new Date().toLocaleString(
                    "en-IN",
                    {
                        day:
                            "2-digit",

                        month:
                            "short",

                        year:
                            "numeric",

                        hour:
                            "2-digit",

                        minute:
                            "2-digit",

                    }
                ),
        }
    );

};


// =========================================
// MARK AS EMAILED
// =========================================

const markAsEmailed = async (
    reportId
) => {

    await simulateDelay(
        400
    );


    if (!reportId) {
        return null;
    }


    return updateReport(
        reportId,
        {
            status:
                "emailed",

            emailedOn:
                new Date().toLocaleString(
                    "en-IN",
                    {
                        day:
                            "2-digit",

                        month:
                            "short",

                        year:
                            "numeric",

                        hour:
                            "2-digit",

                        minute:
                            "2-digit",

                    }
                ),
        }
    );

};


// =========================================
// MARK AS DOWNLOADED
// =========================================

const markAsDownloaded = async (
    reportId
) => {

    await simulateDelay(
        300
    );


    if (!reportId) {
        return null;
    }


    return updateReport(
        reportId,
        {
            status:
                "downloaded",

            downloadedOn:
                new Date().toLocaleString(
                    "en-IN",
                    {
                        day:
                            "2-digit",

                        month:
                            "short",

                        year:
                            "numeric",

                        hour:
                            "2-digit",

                        minute:
                            "2-digit",

                    }
                ),
        }
    );

};


// =========================================
// RESET MOCK DATA
// =========================================

const resetMockData = async () => {

    await simulateDelay();


    reportData = [
        ...reportGenerationMockData,
    ];


    return [
        ...reportData,
    ];

};


// =========================================
// SERVICE EXPORT
// =========================================

const reportGenerationService = {

    getReports,

    getReportById,

    updateReport,

    updateReports,

    generateReport,

    generateReports,

    markAsPrinted,

    markAsEmailed,

    markAsDownloaded,

    resetMockData,

};


export default reportGenerationService;