import DescriptionOutlinedIcon
    from "@mui/icons-material/DescriptionOutlined";

import AutorenewOutlinedIcon
    from "@mui/icons-material/AutorenewOutlined";

import CheckCircleOutlineOutlinedIcon
    from "@mui/icons-material/CheckCircleOutlineOutlined";

import PrintOutlinedIcon
    from "@mui/icons-material/PrintOutlined";

import EmailOutlinedIcon
    from "@mui/icons-material/EmailOutlined";

import DownloadOutlinedIcon
    from "@mui/icons-material/DownloadOutlined";

import ErrorOutlineOutlinedIcon
    from "@mui/icons-material/ErrorOutlineOutlined";

    import "./ReportStatusChip.css"


// =========================================
// STATUS CONFIG
// =========================================

const STATUS_CONFIG = {

    // =====================================
    // READY
    // =====================================

    ready: {

        label:
            "Ready",

        icon:
            DescriptionOutlinedIcon,

        className:
            "ready",

    },


    // =====================================
    // GENERATING
    // =====================================

    generating: {

        label:
            "Generating",

        icon:
            AutorenewOutlinedIcon,

        className:
            "generating",

    },


    // =====================================
    // GENERATED
    // =====================================

    generated: {

        label:
            "Generated",

        icon:
            CheckCircleOutlineOutlinedIcon,

        className:
            "generated",

    },


    // =====================================
    // PRINTED
    // =====================================

    printed: {

        label:
            "Printed",

        icon:
            PrintOutlinedIcon,

        className:
            "printed",

    },


    // =====================================
    // EMAILED
    // =====================================

    emailed: {

        label:
            "Emailed",

        icon:
            EmailOutlinedIcon,

        className:
            "emailed",

    },


    // =====================================
    // DOWNLOADED
    // =====================================

    downloaded: {

        label:
            "Downloaded",

        icon:
            DownloadOutlinedIcon,

        className:
            "downloaded",

    },


    // =====================================
    // FAILED
    // =====================================

    failed: {

        label:
            "Failed",

        icon:
            ErrorOutlineOutlinedIcon,

        className:
            "failed",

    },

};


// =========================================
// FALLBACK STATUS
// =========================================

const FALLBACK_STATUS = {

    label:
        "Unknown",

    icon:
        ErrorOutlineOutlinedIcon,

    className:
        "unknown",

};


// =========================================
// REPORT STATUS CHIP
// =========================================

const ReportStatusChip = ({
    status,
}) => {

    // =========================================
    // NORMALIZE STATUS
    // =========================================

    const normalizedStatus =
        typeof status === "string"
            ? status
                .trim()
                .toLowerCase()
            : "";


    // =========================================
    // GET CONFIG
    // =========================================

    const config =
        STATUS_CONFIG[
            normalizedStatus
        ] ||
        FALLBACK_STATUS;


    // =========================================
    // ICON
    // =========================================

    const Icon =
        config.icon;


    // =========================================
    // RENDER
    // =========================================

    return (

        <span
            className={`
                report-status-chip
                report-status-chip--${config.className}
            `}

            title={
                config.label
            }
        >

            {/* =================================
                ICON
            ================================= */}

            <Icon
                className="
                    report-status-chip__icon
                "
            />


            {/* =================================
                LABEL
            ================================= */}

            <span
                className="
                    report-status-chip__label
                "
            >
                {
                    config.label
                }
            </span>

        </span>

    );

};


export default ReportStatusChip;