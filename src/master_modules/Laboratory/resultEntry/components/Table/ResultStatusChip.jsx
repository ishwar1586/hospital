import HourglassEmptyOutlinedIcon
    from "@mui/icons-material/HourglassEmptyOutlined";

import AutorenewOutlinedIcon
    from "@mui/icons-material/AutorenewOutlined";

import CheckCircleOutlineOutlinedIcon
    from "@mui/icons-material/CheckCircleOutlineOutlined";

import VerifiedOutlinedIcon
    from "@mui/icons-material/VerifiedOutlined";

import PriorityHighOutlinedIcon
    from "@mui/icons-material/PriorityHighOutlined";

import CancelOutlinedIcon
    from "@mui/icons-material/CancelOutlined";

import "./ResultStatusChip.css";


const ResultStatusChip = ({
    status = "pending",
    critical = false,
}) => {


    // =========================================
    // NORMALIZE STATUS
    // =========================================

    const normalizedStatus =
        String(
            status || "pending"
        )
            .trim()
            .toLowerCase();


    // =========================================
    // CRITICAL OVERRIDE
    // =========================================
    /*
     * A result can technically be
     * "In Progress" while the test/result
     * itself is marked critical.
     *
     * So critical gets visual priority.
     */

    const effectiveStatus =
        critical
            ? "critical"
            : normalizedStatus;


    // =========================================
    // STATUS CONFIG
    // =========================================

    const statusConfig = {

        pending: {

            label: "Pending",

            icon:
                HourglassEmptyOutlinedIcon,

        },


        inprogress: {

            label: "In Progress",

            icon:
                AutorenewOutlinedIcon,

        },


        completed: {

            label: "Completed",

            icon:
                CheckCircleOutlineOutlinedIcon,

        },


        verified: {

            label: "Verified",

            icon:
                VerifiedOutlinedIcon,

        },


        critical: {

            label: "Critical",

            icon:
                PriorityHighOutlinedIcon,

        },


        rejected: {

            label: "Rejected",

            icon:
                CancelOutlinedIcon,

        },

    };


    // =========================================
    // CURRENT CONFIG
    // =========================================

    const current =
        statusConfig[
            effectiveStatus
        ] ||
        statusConfig.pending;


    const Icon =
        current.icon;


    // =========================================
    // RENDER
    // =========================================

    return (

        <span
            className={`
                result-entry-status-chip
                result-entry-status-chip--${effectiveStatus}
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


export default ResultStatusChip;