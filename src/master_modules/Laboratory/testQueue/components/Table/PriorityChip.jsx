import FlagOutlinedIcon
    from "@mui/icons-material/FlagOutlined";


const PriorityChip = ({
    priority = "Normal",
}) => {


    // =========================================
    // PRIORITY CONFIG
    // =========================================

    const priorityConfig = {

        Urgent: {
            label: "Urgent",

            className:
                "urgent",
        },


        High: {
            label: "High",

            className:
                "high",
        },


        Medium: {
            label: "Medium",

            className:
                "medium",
        },


        Normal: {
            label: "Normal",

            className:
                "normal",
        },


        Low: {
            label: "Low",

            className:
                "low",
        },

    };


    // =========================================
    // CURRENT CONFIG
    // =========================================

    const currentConfig =
        priorityConfig[
            priority
        ] ||
        priorityConfig.Normal;


    return (

        <span
            className={`
                test-queue-priority-chip
                test-queue-priority-chip--${currentConfig.className}
            `}
        >

            <FlagOutlinedIcon />

            <span>
                {
                    currentConfig.label
                }
            </span>

        </span>

    );

};


export default PriorityChip;