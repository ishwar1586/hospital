import AccessTimeOutlinedIcon
    from "@mui/icons-material/AccessTimeOutlined";


const TATChip = ({
    tat = "—",
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
            className: "normal",
        },


        warning: {
            className: "warning",
        },


        critical: {
            className: "critical",
        },


        overdue: {
            className: "overdue",
        },


        completed: {
            className: "completed",
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


    return (

        <span
            className={`
                test-queue-tat-chip
                test-queue-tat-chip--${currentConfig.className}
            `}
        >

            <AccessTimeOutlinedIcon />


            <span>
                {tat || "—"}
            </span>

        </span>

    );

};


export default TATChip;