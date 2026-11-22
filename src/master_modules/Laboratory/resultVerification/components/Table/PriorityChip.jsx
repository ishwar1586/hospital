import ErrorOutlineOutlinedIcon
    from "@mui/icons-material/ErrorOutlineOutlined";

import WarningAmberOutlinedIcon
    from "@mui/icons-material/WarningAmberOutlined";

import RemoveOutlinedIcon
    from "@mui/icons-material/RemoveOutlined";

    import "./PriorityChip.css";

// =========================================
// PRIORITY CONFIG
// =========================================

const PRIORITY_CONFIG = {

    normal: {

        label:
            "Normal",

        className:
            "normal",

        icon:
            RemoveOutlinedIcon,

    },


    high: {

        label:
            "High",

        className:
            "high",

        icon:
            WarningAmberOutlinedIcon,

    },


    critical: {

        label:
            "Critical",

        className:
            "critical",

        icon:
            ErrorOutlineOutlinedIcon,

    },

};


// =========================================
// COMPONENT
// =========================================

const PriorityChip = ({
    priority = "normal",
}) => {


    // =========================================
    // NORMALIZE PRIORITY
    // =========================================

    const normalizedPriority = String(
        priority || "normal"
    )
        .trim()
        .replace(/\s+/g, "")
        .toLowerCase();


    // =========================================
    // RESOLVE PRIORITY
    // =========================================

    let priorityKey =
        "normal";


    if (
        normalizedPriority ===
        "high"
    ) {

        priorityKey =
            "high";

    }

    else if (
        normalizedPriority ===
            "critical" ||
        normalizedPriority ===
            "urgent"
    ) {

        priorityKey =
            "critical";

    }


    const config =
        PRIORITY_CONFIG[
            priorityKey
        ];


    const Icon =
        config.icon;


    // =========================================
    // RENDER
    // =========================================

    return (

        <span
            className={`
                result-verification-priority-chip
                result-verification-priority-chip--${config.className}
            `}
        >

            <Icon />

            <span
                className="
                    result-verification-priority-chip__label
                "
            >
                {
                    config.label
                }
            </span>

        </span>

    );

};


export default PriorityChip;