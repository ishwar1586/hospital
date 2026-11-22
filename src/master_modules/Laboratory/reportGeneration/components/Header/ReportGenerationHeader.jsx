// =========================================
// REPORT GENERATION HEADER
// =========================================

import DescriptionOutlinedIcon
    from "@mui/icons-material/DescriptionOutlined";

import VisibilityOutlinedIcon
    from "@mui/icons-material/VisibilityOutlined";

import RefreshOutlinedIcon
    from "@mui/icons-material/RefreshOutlined";

import DownloadOutlinedIcon
    from "@mui/icons-material/DownloadOutlined";

import ExpandMoreOutlinedIcon
    from "@mui/icons-material/ExpandMoreOutlined";

import "./ReportGenerationHeader.css";


// =========================================
// REPORT GENERATION HEADER
// =========================================

const ReportGenerationHeader = ({
    onTemplates,
    onPreview,
    onRefresh,
    onGenerateDownload,

    isRefreshing = false,
    isGenerating = false,
}) => {

    // =========================================
    // TEMPLATES
    // =========================================

    const handleTemplates = () => {

        if (
            typeof onTemplates !==
            "function"
        ) {
            return;
        }

        onTemplates();

    };


    // =========================================
    // PREVIEW
    // =========================================

    const handlePreview = () => {

        if (
            typeof onPreview !==
            "function"
        ) {
            return;
        }

        onPreview();

    };


    // =========================================
    // REFRESH
    // =========================================

    const handleRefresh = () => {

        if (
            isRefreshing ||
            isGenerating
        ) {
            return;
        }


        if (
            typeof onRefresh !==
            "function"
        ) {
            return;
        }


        onRefresh();

    };


    // =========================================
    // GENERATE + DOWNLOAD
    // =========================================

    const handleGenerateDownload = () => {

        if (
            isGenerating ||
            isRefreshing
        ) {
            return;
        }


        if (
            typeof onGenerateDownload !==
            "function"
        ) {
            return;
        }


        onGenerateDownload();

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <header
            className="
                report-generation-header
            "
        >

            {/* =================================
                HEADER CONTENT
            ================================= */}

            <div
                className="
                    report-generation-header__content
                "
            >

                <div
                    className="
                        report-generation-header__title-group
                    "
                >

                    <h1
                        className="
                            report-generation-header__title
                        "
                    >
                        Report Generation
                    </h1>


                    <p
                        className="
                            report-generation-header__subtitle
                        "
                    >
                        Generate patient reports from
                        verified results
                    </p>

                </div>

            </div>


            {/* =================================
                ACTIONS
            ================================= */}

            <div
                className="
                    report-generation-header__actions
                "
            >

                {/* =============================
                    REPORT TEMPLATES
                ============================= */}

                <button
                    type="button"

                    className="
                        report-generation-header__action
                    "

                    onClick={
                        handleTemplates
                    }

                    disabled={
                        isRefreshing ||
                        isGenerating
                    }

                    title="
                        Manage report templates
                    "
                >

                    <DescriptionOutlinedIcon />

                    <span>
                        Report Templates
                    </span>

                </button>


                {/* =============================
                    PREVIEW
                ============================= */}

                <button
                    type="button"

                    className="
                        report-generation-header__action
                    "

                    onClick={
                        handlePreview
                    }

                    disabled={
                        isRefreshing ||
                        isGenerating
                    }

                    title="
                        Preview report
                    "
                >

                    <VisibilityOutlinedIcon />

                    <span>
                        Preview
                    </span>

                </button>


                {/* =============================
                    REFRESH
                ============================= */}

                <button
                    type="button"

                    className="
                        report-generation-header__action
                        report-generation-header__refresh
                    "

                    onClick={
                        handleRefresh
                    }

                    disabled={
                        isRefreshing ||
                        isGenerating
                    }

                    title="
                        Refresh reports
                    "
                >

                    <RefreshOutlinedIcon
                        className={
                            isRefreshing
                                ? "report-generation-header__refresh-icon--loading"
                                : ""
                        }
                    />

                    <span>
                        {
                            isRefreshing
                                ? "Refreshing..."
                                : "Refresh"
                        }
                    </span>

                </button>


                {/* =============================
                    GENERATE + DOWNLOAD
                ============================= */}

                <button
                    type="button"

                    className="
                        report-generation-header__generate
                    "

                    onClick={
                        handleGenerateDownload
                    }

                    disabled={
                        isGenerating ||
                        isRefreshing
                    }

                    title="
                        Generate and download reports
                    "
                >

                    <DownloadOutlinedIcon />


                    <span>
                        {
                            isGenerating
                                ? "Generating..."
                                : "Generate & Download"
                        }
                    </span>


                    {!isGenerating && (

                        <ExpandMoreOutlinedIcon
                            className="
                                report-generation-header__generate-arrow
                            "
                        />

                    )}

                </button>

            </div>

        </header>

    );

};


export default ReportGenerationHeader;