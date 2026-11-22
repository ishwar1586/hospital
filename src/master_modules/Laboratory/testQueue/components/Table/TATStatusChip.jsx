import CheckCircleOutlineOutlinedIcon
    from "@mui/icons-material/CheckCircleOutlineOutlined";

import AccessTimeOutlinedIcon
    from "@mui/icons-material/AccessTimeOutlined";

import WarningAmberOutlinedIcon
    from "@mui/icons-material/WarningAmberOutlined";

import ErrorOutlineOutlinedIcon
    from "@mui/icons-material/ErrorOutlineOutlined";


const TATStatusChip = ({
    status = "normal",
}) => {


    // =========================================
    // NORMALIZE STATUS
    // =========================================

    const normalizedStatus =
        String(status || "normal")
            .trim()
            .toLowerCase();


    // =========================================
    // STATUS CONFIG
    // =========================================

    const statusConfig = {

        normal: {

            label: "Normal",

            className: "normal",

            icon:
                <CheckCircleOutlineOutlinedIcon />,

        },


        warning: {

            label: "Warning",

            className: "warning",

            icon:
                <WarningAmberOutlinedIcon />,

        },


        critical: {

            label: "Critical",

            className: "critical",

            icon:
                <ErrorOutlineOutlinedIcon />,

        },


        overdue: {

            label: "Overdue",

            className: "overdue",

            icon:
                <AccessTimeOutlinedIcon />,

        },


        completed: {

            label: "Completed",

            className: "completed",

            icon:
                <CheckCircleOutlineOutlinedIcon />,

        },

    };


    // =========================================
    // CURRENT CONFIG
    // =========================================

    const currentConfig =
        statusConfig[
            normalizedStatus
        ] ||
        statusConfig.normal;


    // =========================================
    // RENDER
    // =========================================

    return (

        <span
            className={`
                test-queue-tat-status-chip
                test-queue-tat-status-chip--${currentConfig.className}
            `}
        >

            <span className="test-queue-tat-status-chip__icon">

                {
                    currentConfig.icon
                }

            </span>


            <span className="test-queue-tat-status-chip__label">

                {
                    currentConfig.label
                }

            </span>

        </span>

    );

};


export default TATStatusChip;