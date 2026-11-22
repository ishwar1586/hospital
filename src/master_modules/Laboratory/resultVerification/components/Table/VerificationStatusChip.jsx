import CheckCircleOutlineOutlinedIcon
    from "@mui/icons-material/CheckCircleOutlineOutlined";

import HourglassEmptyOutlinedIcon
    from "@mui/icons-material/HourglassEmptyOutlined";

import RateReviewOutlinedIcon
    from "@mui/icons-material/RateReviewOutlined";

import CancelOutlinedIcon
    from "@mui/icons-material/CancelOutlined";

import "./VerificationStatusChip.css";


// =========================================
// STATUS CONFIG
// =========================================

const STATUS_CONFIG = {

    pending: {

        label:
            "Pending Verification",

        className:
            "pending",

        icon:
            HourglassEmptyOutlinedIcon,

    },


    underReview: {

        label:
            "Under Review",

        className:
            "under-review",

        icon:
            RateReviewOutlinedIcon,

    },


    verified: {

        label:
            "Verified",

        className:
            "verified",

        icon:
            CheckCircleOutlineOutlinedIcon,

    },


    rejected: {

        label:
            "Rejected",

        className:
            "rejected",

        icon:
            CancelOutlinedIcon,

    },

};


// =========================================
// COMPONENT
// =========================================

const VerificationStatusChip = ({
    status = "pending",
}) => {


    // =========================================
    // NORMALIZE STATUS
    // =========================================

    const normalizedStatus = String(
        status || "pending"
    )
        .trim()
        .replace(/\s+/g, "")
        .toLowerCase();


    // =========================================
    // RESOLVE CONFIG
    // =========================================

    let statusKey = "pending";


    if (
        normalizedStatus ===
        "pending"
    ) {

        statusKey =
            "pending";

    }

    else if (
        normalizedStatus ===
            "underreview" ||
        normalizedStatus ===
            "inreview"
    ) {

        statusKey =
            "underReview";

    }

    else if (
        normalizedStatus ===
        "verified"
    ) {

        statusKey =
            "verified";

    }

    else if (
        normalizedStatus ===
            "rejected" ||
        normalizedStatus ===
            "reject"
    ) {

        statusKey =
            "rejected";

    }


    const config =
        STATUS_CONFIG[
            statusKey
        ];


    const Icon =
        config.icon;


    // =========================================
    // RENDER
    // =========================================

    return (

        <span
            className={`
                result-verification-status-chip
                result-verification-status-chip--${config.className}
            `}
        >

            <Icon />

            <span
                className="
                    result-verification-status-chip__label
                "
            >
                {
                    config.label
                }
            </span>

        </span>

    );

};


export default VerificationStatusChip;