// =========================================
// REPORT PREVIEW TOOLBAR
// =========================================

import CloseOutlinedIcon
    from "@mui/icons-material/CloseOutlined";

import ZoomOutOutlinedIcon
    from "@mui/icons-material/ZoomOutOutlined";

import ZoomInOutlinedIcon
    from "@mui/icons-material/ZoomInOutlined";

import RestartAltOutlinedIcon
    from "@mui/icons-material/RestartAltOutlined";

import PrintOutlinedIcon
    from "@mui/icons-material/PrintOutlined";

import DownloadOutlinedIcon
    from "@mui/icons-material/DownloadOutlined";

import EmailOutlinedIcon
    from "@mui/icons-material/EmailOutlined";

import "./ReportPreviewToolbar.css";


// =========================================
// REPORT PREVIEW TOOLBAR
// =========================================

const ReportPreviewToolbar = ({
    report = null,

    reportFormat = "PDF",

    onClose,

    onPrint,

    onDownload,

    onEmail,

}) => {

    // =========================================
    // ZOOM
    // =========================================

    const handleZoomOut = () => {

        window.dispatchEvent(
            new CustomEvent(
                "report-preview:zoom-out"
            )
        );

    };


    const handleZoomIn = () => {

        window.dispatchEvent(
            new CustomEvent(
                "report-preview:zoom-in"
            )
        );

    };


    const handleResetZoom = () => {

        window.dispatchEvent(
            new CustomEvent(
                "report-preview:zoom-reset"
            )
        );

    };


    // =========================================
    // ACTION HANDLER
    // =========================================

    const executeAction = (
        callback
    ) => {

        if (
            typeof callback !==
            "function"
        ) {
            return;
        }


        callback(
            report
        );

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <div
            className="
                report-preview-toolbar
            "
        >

            {/* =================================
                LEFT
            ================================= */}

            <div
                className="
                    report-preview-toolbar__left
                "
            >

                <div
                    className="
                        report-preview-toolbar__title
                    "
                >

                    <strong>
                        Report Preview
                    </strong>


                    <span>
                        {
                            reportFormat
                        }
                    </span>

                </div>

            </div>


            {/* =================================
                CENTER
            ================================= */}

            <div
                className="
                    report-preview-toolbar__center
                "
            >

                {/* =============================
                    ZOOM OUT
                ============================= */}

                <button
                    type="button"

                    className="
                        report-preview-toolbar__icon-btn
                    "

                    onClick={
                        handleZoomOut
                    }

                    title="
                        Zoom out
                    "

                    aria-label="
                        Zoom out
                    "
                >

                    <ZoomOutOutlinedIcon />

                </button>


                {/* =============================
                    ZOOM VALUE
                ============================= */}

                <span
                    className="
                        report-preview-toolbar__zoom-value
                    "
                >
                    100%
                </span>


                {/* =============================
                    ZOOM IN
                ============================= */}

                <button
                    type="button"

                    className="
                        report-preview-toolbar__icon-btn
                    "

                    onClick={
                        handleZoomIn
                    }

                    title="
                        Zoom in
                    "

                    aria-label="
                        Zoom in
                    "
                >

                    <ZoomInOutlinedIcon />

                </button>


                {/* =============================
                    RESET ZOOM
                ============================= */}

                <button
                    type="button"

                    className="
                        report-preview-toolbar__icon-btn
                    "

                    onClick={
                        handleResetZoom
                    }

                    title="
                        Reset zoom
                    "

                    aria-label="
                        Reset zoom
                    "
                >

                    <RestartAltOutlinedIcon />

                </button>

            </div>


            {/* =================================
                RIGHT
            ================================= */}

            <div
                className="
                    report-preview-toolbar__right
                "
            >

                {/* =============================
                    PRINT
                ============================= */}

                <button
                    type="button"

                    className="
                        report-preview-toolbar__action
                    "

                    onClick={() =>
                        executeAction(
                            onPrint
                        )
                    }

                    title="
                        Print report
                    "
                >

                    <PrintOutlinedIcon />

                    <span>
                        Print
                    </span>

                </button>


                {/* =============================
                    DOWNLOAD
                ============================= */}

                <button
                    type="button"

                    className="
                        report-preview-toolbar__action
                    "

                    onClick={() =>
                        executeAction(
                            onDownload
                        )
                    }

                    title="
                        Download report
                    "
                >

                    <DownloadOutlinedIcon />

                    <span>
                        Download
                    </span>

                </button>


                {/* =============================
                    EMAIL
                ============================= */}

                <button
                    type="button"

                    className="
                        report-preview-toolbar__action
                    "

                    onClick={() =>
                        executeAction(
                            onEmail
                        )
                    }

                    title="
                        Email report
                    "
                >

                    <EmailOutlinedIcon />

                    <span>
                        Email
                    </span>

                </button>


                {/* =============================
                    CLOSE
                ============================= */}

                <button
                    type="button"

                    className="
                        report-preview-toolbar__close
                    "

                    onClick={
                        onClose
                    }

                    title="
                        Close preview
                    "

                    aria-label="
                        Close preview
                    "
                >

                    <CloseOutlinedIcon />

                </button>

            </div>

        </div>

    );

};


export default ReportPreviewToolbar;