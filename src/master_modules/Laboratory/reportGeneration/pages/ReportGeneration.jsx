// =========================================
// REPORT GENERATION PAGE
// =========================================

import {
    useEffect,
    useMemo,
    useState,
} from "react";


// =========================================
// COMPONENTS
// =========================================

import ReportGenerationHeader
    from "../components/Header/ReportGenerationHeader";

import ReportGenerationStatsCards
    from "../components/StatsCards/ReportGenerationStatsCards";

import ReportGenerationFilters
    from "../components/Filters/ReportGenerationFilters";

import ReportGenerationTabs
    from "../components/Tabs/ReportGenerationTabs";

import ReportGenerationTable
    from "../components/Table/ReportGenerationTable";


// =========================================
// PREVIEW
// =========================================

import ReportPreview
    from "../components/Preview/ReportPreview";


// =========================================
// MODALS
// =========================================

import EmailReportModal
    from "../components/Modals/EmailReportModal";

import ReportTemplatesModal
    from "../components/Modals/ReportTemplatesModal";


// =========================================
// REUSABLE PAGINATION
// =========================================

import Pagination
    from "@/master_shared/components/Pagination/Pagination";


// =========================================
// HOOKS
// =========================================

import useReportGenerationFilters
    from "../hooks/useReportGenerationFilters";

import useReportGenerationTabs
    from "../hooks/useReportGenerationTabs";

import useReportGenerationData
    from "../hooks/useReportGenerationData";


// =========================================
// STYLES
// =========================================

import "../styles/report-generation.css";


// =========================================
// REPORT GENERATION
// =========================================

const ReportGeneration = () => {

    // =========================================
    // FILTERS
    // =========================================

    const {
        filters,
        updateFilter,
        resetFilters,
    } =
        useReportGenerationFilters();


    // =========================================
    // TABS
    // =========================================

    const {
        activeTab,
        changeTab,
    } =
        useReportGenerationTabs();


    // =========================================
    // REPORT DATA
    // =========================================

    const {
        reports,
        isLoading,
        isRefreshing,
        error,

        refreshReports,
        generateReport,
        markAsPrinted,
        markAsEmailed,
        markAsDownloaded,

    } =
        useReportGenerationData();


    // =========================================
    // UI STATE
    // =========================================

    const [
        isGenerating,
        setIsGenerating,
    ] = useState(false);


    // =========================================
    // PAGINATION
    // =========================================

    const [
        page,
        setPage,
    ] = useState(1);


    const [
        rowsPerPage,
        setRowsPerPage,
    ] = useState(10);


    // =========================================
    // PREVIEW STATE
    // =========================================

    const [
        previewReport,
        setPreviewReport,
    ] = useState(null);


    const [
        isPreviewOpen,
        setIsPreviewOpen,
    ] = useState(false);


    // =========================================
    // EMAIL STATE
    // =========================================

    const [
        emailReport,
        setEmailReport,
    ] = useState(null);


    const [
        isEmailModalOpen,
        setIsEmailModalOpen,
    ] = useState(false);


    // =========================================
    // TEMPLATE STATE
    // =========================================

    const [
        isTemplatesModalOpen,
        setIsTemplatesModalOpen,
    ] = useState(false);


    const [
        selectedTemplate,
        setSelectedTemplate,
    ] = useState(null);


    // =========================================
    // FILTER REPORTS
    // =========================================

    const filteredReports =
        useMemo(
            () => {

                if (
                    !Array.isArray(
                        reports
                    )
                ) {
                    return [];
                }


                const search =
                    (
                        filters.search ||
                        ""
                    )
                        .trim()
                        .toLowerCase();


                return reports.filter(
                    (report) => {

                        // =====================
                        // SEARCH
                        // =====================

                        if (
                            search
                        ) {

                            const searchableText = [

                                report.patientName,

                                report.uhid,

                                report.accessionNo,

                                report.department,

                                ...(Array.isArray(
                                    report.tests
                                )
                                    ? report.tests
                                    : []),

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


                        // =====================
                        // DEPARTMENT
                        // =====================

                        if (
                            filters.department &&
                            filters.department !==
                                "all"
                        ) {

                            const reportDepartment =
                                (
                                    report.department ||
                                    ""
                                )
                                    .toLowerCase()
                                    .replace(
                                        /\s+/g,
                                        ""
                                    );


                            const selectedDepartment =
                                (
                                    filters.department ||
                                    ""
                                )
                                    .toLowerCase()
                                    .replace(
                                        /\s+/g,
                                        ""
                                    );


                            if (
                                reportDepartment !==
                                selectedDepartment
                            ) {
                                return false;
                            }

                        }


                        // =====================
                        // STATUS
                        // =====================

                        if (
                            filters.status &&
                            filters.status !==
                                "all"
                        ) {

                            if (
                                report.status !==
                                filters.status
                            ) {
                                return false;
                            }

                        }


                        // =====================
                        // REPORT FORMAT
                        // =====================

                        if (
                            filters.format &&
                            filters.format !==
                                "all"
                        ) {

                            const reportFormat =
                                (
                                    report.reportFormat ||
                                    ""
                                )
                                    .trim()
                                    .toLowerCase();


                            if (
                                filters.format ===
                                    "pdf" &&
                                reportFormat !==
                                    "pdf"
                            ) {
                                return false;
                            }


                            if (
                                filters.format ===
                                    "pdf-compact" &&
                                reportFormat !==
                                    "pdf (compact)"
                            ) {
                                return false;
                            }

                        }


                        // =====================
                        // ACTIVE TAB
                        // =====================

                        switch (
                            activeTab
                        ) {

                            case "toGenerate":

                                return (
                                    report.status ===
                                    "ready"
                                );


                            case "generated":

                                return (
                                    report.status ===
                                    "generated"
                                );


                            case "printed":

                                return (
                                    report.status ===
                                    "printed"
                                );


                            case "emailed":

                                return (
                                    report.status ===
                                    "emailed"
                                );


                            default:

                                return true;

                        }

                    }
                );

            },
            [
                reports,
                filters,
                activeTab,
            ]
        );


    // =========================================
    // RESET PAGINATION
    // FILTER / TAB CHANGE
    // =========================================

    useEffect(
        () => {

            setPage(
                1
            );

        },
        [
            filters,
            activeTab,
        ]
    );


    // =========================================
    // TOTAL ROWS
    // =========================================

    const totalRows =
        filteredReports.length;


    // =========================================
    // PAGINATED REPORTS
    // =========================================

    const paginatedReports =
        useMemo(
            () => {

                const startIndex =
                    (
                        page -
                        1
                    ) *
                    rowsPerPage;


                const endIndex =
                    startIndex +
                    rowsPerPage;


                return filteredReports.slice(
                    startIndex,
                    endIndex
                );

            },
            [
                filteredReports,
                page,
                rowsPerPage,
            ]
        );


    // =========================================
    // KEEP PAGE VALID
    // =========================================

    useEffect(
        () => {

            const totalPages =
                Math.max(
                    Math.ceil(
                        totalRows /
                        rowsPerPage
                    ),
                    1
                );


            if (
                page >
                totalPages
            ) {

                setPage(
                    totalPages
                );

            }

        },
        [
            totalRows,
            rowsPerPage,
            page,
        ]
    );


    // =========================================
    // PAGE CHANGE
    // =========================================

    const handlePageChange = (
        event,
        newPage
    ) => {

        setPage(
            newPage
        );

    };


    // =========================================
    // ROWS PER PAGE
    // =========================================

    const handleRowsPerPageChange = (
        event
    ) => {

        const newRowsPerPage =
            Number(
                event.target.value
            );


        if (
            !newRowsPerPage
        ) {
            return;
        }


        setRowsPerPage(
            newRowsPerPage
        );


        setPage(
            1
        );

    };


    // =========================================
    // STATS
    // =========================================

    const stats =
        useMemo(
            () => {

                return {

                    reportsToGenerate:
                        reports.filter(
                            (report) =>
                                report.status ===
                                "ready"
                        ).length,


                    generatedToday:
                        reports.filter(
                            (report) =>
                                report.status ===
                                "generated"
                        ).length,


                    reportsPrinted:
                        reports.filter(
                            (report) =>
                                report.status ===
                                "printed"
                        ).length,


                    reportsEmailed:
                        reports.filter(
                            (report) =>
                                report.status ===
                                "emailed"
                        ).length,


                    reportsDownloaded:
                        reports.filter(
                            (report) =>
                                report.status ===
                                "downloaded"
                        ).length,

                };

            },
            [
                reports,
            ]
        );


    // =========================================
    // TAB COUNTS
    // =========================================

    const tabCounts =
        useMemo(
            () => {

                return {

                    toGenerate:
                        reports.filter(
                            (report) =>
                                report.status ===
                                "ready"
                        ).length,


                    generated:
                        reports.filter(
                            (report) =>
                                report.status ===
                                "generated"
                        ).length,


                    printed:
                        reports.filter(
                            (report) =>
                                report.status ===
                                "printed"
                        ).length,


                    emailed:
                        reports.filter(
                            (report) =>
                                report.status ===
                                "emailed"
                        ).length,

                };

            },
            [
                reports,
            ]
        );


    // =========================================
    // REFRESH
    // =========================================

    const handleRefresh =
        async () => {

            if (
                isRefreshing ||
                isGenerating
            ) {
                return;
            }


            await refreshReports();

        };


    // =========================================
    // HEADER - PREVIEW
    // =========================================

    const handleHeaderPreview =
        () => {

            const report =
                paginatedReports[0];


            if (
                !report?.id
            ) {
                return;
            }


            handleReportPreview(
                report
            );

        };


    // =========================================
    // PREVIEW REPORT
    // =========================================

    const handleReportPreview =
        (
            report
        ) => {

            if (
                !report?.id
            ) {
                return;
            }


            setPreviewReport(
                report
            );


            setIsPreviewOpen(
                true
            );

        };


    // =========================================
    // CLOSE PREVIEW
    // =========================================

    const handleClosePreview =
        () => {

            setIsPreviewOpen(
                false
            );


            setPreviewReport(
                null
            );

        };


    // =========================================
    // GENERATE REPORT
    // =========================================

    const handleReportGenerate =
        async (
            report
        ) => {

            if (
                !report?.id ||
                isGenerating
            ) {
                return;
            }


            setIsGenerating(
                true
            );


            try {

                await generateReport(
                    report.id
                );

            }
            finally {

                setIsGenerating(
                    false
                );

            }

        };


    // =========================================
    // DOWNLOAD REPORT
    // =========================================

    const handleReportDownload =
        async (
            report
        ) => {

            if (
                !report?.id
            ) {
                return;
            }


            await markAsDownloaded(
                report.id
            );

        };


    // =========================================
    // PRINT REPORT
    // =========================================

    const handleReportPrint =
        async (
            report
        ) => {

            if (
                !report?.id
            ) {
                return;
            }


            await markAsPrinted(
                report.id
            );

        };


    // =========================================
    // OPEN EMAIL MODAL
    // =========================================

    const handleReportEmail =
        (
            report
        ) => {

            if (
                !report?.id
            ) {
                return;
            }


            setEmailReport(
                report
            );


            setIsEmailModalOpen(
                true
            );

        };


    // =========================================
    // CLOSE EMAIL MODAL
    // =========================================

    const handleCloseEmailModal =
        () => {

            setIsEmailModalOpen(
                false
            );


            setEmailReport(
                null
            );

        };


    // =========================================
    // SEND EMAIL
    // =========================================

    const handleSendReportEmail =
        async (
            payload
        ) => {

            const reportId =
                payload?.report?.id ||
                emailReport?.id;


            if (
                !reportId
            ) {
                return;
            }


            await markAsEmailed(
                reportId
            );


            handleCloseEmailModal();

        };


    // =========================================
    // RETRY REPORT
    // =========================================

    const handleReportRetry =
        async (
            report
        ) => {

            if (
                !report?.id
            ) {
                return;
            }


            await generateReport(
                report.id
            );

        };


    // =========================================
    // OPEN TEMPLATE MODAL
    // =========================================

    const handleOpenTemplates =
        () => {

            setIsTemplatesModalOpen(
                true
            );

        };


    // =========================================
    // CLOSE TEMPLATE MODAL
    // =========================================

    const handleCloseTemplates =
        () => {

            setIsTemplatesModalOpen(
                false
            );

        };


    // =========================================
    // TEMPLATE SELECT
    // =========================================

    const handleTemplateSelect =
        (
            template
        ) => {

            if (
                !template
            ) {
                return;
            }


            setSelectedTemplate(
                template
            );


            setIsTemplatesModalOpen(
                false
            );

        };


    // =========================================
    // TEMPLATE PREVIEW
    // =========================================

    const handleTemplatePreview =
        (
            template
        ) => {

            if (
                !template
            ) {
                return;
            }


            console.log(
                "Preview template:",
                template
            );

        };


    // =========================================
    // CREATE TEMPLATE
    // =========================================

    const handleCreateTemplate =
        () => {

            console.log(
                "Create template clicked"
            );

        };


    // =========================================
    // RENDER
    // =========================================

    return (

        <main
            className="
                report-generation-page
            "
        >

            {/* =================================
                HEADER
            ================================= */}

            <ReportGenerationHeader

                onTemplates={
                    handleOpenTemplates
                }

                onPreview={
                    handleHeaderPreview
                }

                onRefresh={
                    handleRefresh
                }

                isRefreshing={
                    isRefreshing
                }

                isGenerating={
                    isGenerating
                }

            />


            {/* =================================
                PAGE CONTENT
            ================================= */}

            <div
                className="
                    report-generation-page__content
                "
            >

                {/* =============================
                    STATS
                ============================= */}

                <ReportGenerationStatsCards

                    stats={
                        stats
                    }

                />


                {/* =============================
                    FILTERS
                ============================= */}

                <ReportGenerationFilters

                    values={
                        filters
                    }

                    onChange={
                        updateFilter
                    }

                    onReset={
                        resetFilters
                    }

                />


                {/* =============================
                    TABS
                ============================= */}

                <ReportGenerationTabs

                    activeTab={
                        activeTab
                    }

                    onTabChange={
                        changeTab
                    }

                    counts={
                        tabCounts
                    }

                />


                {/* =============================
                    LOADING
                ============================= */}

                {isLoading && (

                    <div
                        className="
                            report-generation-page__state
                        "
                    >
                        Loading reports...
                    </div>

                )}


                {/* =============================
                    ERROR
                ============================= */}

                {!isLoading &&
                    error && (

                    <div
                        className="
                            report-generation-page__state
                            report-generation-page__state--error
                        "
                    >
                        {error}
                    </div>

                )}


                {/* =============================
                    TABLE
                ============================= */}

                {!isLoading &&
                    !error && (

                    <>

                        <ReportGenerationTable

                            reports={
                                paginatedReports
                            }

                            onPreview={
                                handleReportPreview
                            }

                            onGenerate={
                                handleReportGenerate
                            }

                            onDownload={
                                handleReportDownload
                            }

                            onPrint={
                                handleReportPrint
                            }

                            onEmail={
                                handleReportEmail
                            }

                            onRetry={
                                handleReportRetry
                            }

                        />


                        {/* =============================
                            PAGINATION
                        ============================= */}

                        {totalRows > 0 && (

                            <div
                                className="
                                    report-generation-page__pagination
                                "
                            >

                                <Pagination

                                    page={
                                        page
                                    }

                                    rowsPerPage={
                                        rowsPerPage
                                    }

                                    totalRows={
                                        totalRows
                                    }

                                    onPageChange={
                                        handlePageChange
                                    }

                                    onRowsPerPageChange={
                                        handleRowsPerPageChange
                                    }

                                />

                            </div>

                        )}

                    </>

                )}

            </div>


            {/* =========================================
                REPORT PREVIEW
            ========================================= */}

            {isPreviewOpen && (

                <div
                    className="
                        report-generation-preview-overlay
                    "
                >

                    <div
                        className="
                            report-generation-preview-container
                        "
                    >

                        <ReportPreview

                            report={
                                previewReport
                            }

                            onClose={
                                handleClosePreview
                            }

                            onPrint={
                                handleReportPrint
                            }

                            onDownload={
                                handleReportDownload
                            }

                            onEmail={
                                handleReportEmail
                            }

                        />

                    </div>

                </div>

            )}


            {/* =========================================
                EMAIL REPORT MODAL
            ========================================= */}

            <EmailReportModal

                open={
                    isEmailModalOpen
                }

                report={
                    emailReport
                }

                onClose={
                    handleCloseEmailModal
                }

                onSend={
                    handleSendReportEmail
                }

            />


            {/* =========================================
                REPORT TEMPLATES MODAL
            ========================================= */}

            <ReportTemplatesModal

                open={
                    isTemplatesModalOpen
                }

                selectedTemplateId={
                    selectedTemplate?.id ||
                    ""
                }

                onClose={
                    handleCloseTemplates
                }

                onSelect={
                    handleTemplateSelect
                }

                onPreview={
                    handleTemplatePreview
                }

                onCreateTemplate={
                    handleCreateTemplate
                }

            />

        </main>

    );

};


export default ReportGeneration;