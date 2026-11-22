import PriorityHighOutlinedIcon
    from "@mui/icons-material/PriorityHighOutlined";

import KeyboardArrowUpOutlinedIcon
    from "@mui/icons-material/KeyboardArrowUpOutlined";

import RemoveOutlinedIcon
    from "@mui/icons-material/RemoveOutlined";

import KeyboardArrowDownOutlinedIcon
    from "@mui/icons-material/KeyboardArrowDownOutlined";

import "./PriorityChip.css";


const PriorityChip = ({
    priority = "Normal",
}) => {


    // =========================================
    // NORMALIZE
    // =========================================

    const normalizedPriority =
        String(
            priority || "Normal"
        )
            .trim()
            .toLowerCase();


    // =========================================
    // CONFIG
    // =========================================

    const priorityConfig = {

        urgent: {
            label: "Urgent",
            icon:
                PriorityHighOutlinedIcon,
        },

        high: {
            label: "High",
            icon:
                KeyboardArrowUpOutlinedIcon,
        },

        medium: {
            label: "Medium",
            icon:
                RemoveOutlinedIcon,
        },

        normal: {
            label: "Normal",
            icon:
                KeyboardArrowDownOutlinedIcon,
        },

        low: {
            label: "Low",
            icon:
                KeyboardArrowDownOutlinedIcon,
        },

    };


    // =========================================
    // CURRENT CONFIG
    // =========================================

    const current =
        priorityConfig[
            normalizedPriority
        ] ||
        priorityConfig.normal;


    const Icon =
        current.icon;


    // =========================================
    // RENDER
    // =========================================

    return (

        <span
            className={`
                result-entry-priority-chip
                result-entry-priority-chip--${normalizedPriority}
            `}
        >

            <Icon />

            <span>
                {
                    current.label
                }
            </span>

        </span>

    );

};


export default PriorityChip;