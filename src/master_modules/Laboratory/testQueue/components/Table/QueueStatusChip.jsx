import HourglassEmptyOutlinedIcon
    from "@mui/icons-material/HourglassEmptyOutlined";

import PlayCircleOutlineOutlinedIcon
    from "@mui/icons-material/PlayCircleOutlineOutlined";

import PauseCircleOutlineOutlinedIcon
    from "@mui/icons-material/PauseCircleOutlineOutlined";

import CheckCircleOutlineOutlinedIcon
    from "@mui/icons-material/CheckCircleOutlineOutlined";

import AccessTimeOutlinedIcon
    from "@mui/icons-material/AccessTimeOutlined";


const QueueStatusChip = ({
    status = "Queued",
}) => {


    // =========================================
    // NORMALIZE STATUS
    // =========================================

    const normalizedStatus =
        String(status || "Queued")
            .trim()
            .toLowerCase();


    // =========================================
    // STATUS CONFIG
    // =========================================

    const statusConfig = {

        queued: {

            label: "Queued",

            className: "queued",

            icon:
                <HourglassEmptyOutlinedIcon />,

        },


        "in progress": {

            label: "In Progress",

            className: "in-progress",

            icon:
                <PlayCircleOutlineOutlinedIcon />,

        },


        "on hold": {

            label: "On Hold",

            className: "on-hold",

            icon:
                <PauseCircleOutlineOutlinedIcon />,

        },


        completed: {

            label: "Completed",

            className: "completed",

            icon:
                <CheckCircleOutlineOutlinedIcon />,

        },


        overdue: {

            label: "Overdue",

            className: "overdue",

            icon:
                <AccessTimeOutlinedIcon />,

        },

    };


    // =========================================
    // CURRENT CONFIG
    // =========================================

    const currentConfig =
        statusConfig[
            normalizedStatus
        ] ||
        statusConfig.queued;


    // =========================================
    // RENDER
    // =========================================

    return (

        <span
            className={`
                test-queue-status-chip
                test-queue-status-chip--${currentConfig.className}
            `}
        >

            <span className="test-queue-status-chip__icon">

                {
                    currentConfig.icon
                }

            </span>


            <span className="test-queue-status-chip__label">

                {
                    currentConfig.label
                }

            </span>

        </span>

    );

};


export default QueueStatusChip;