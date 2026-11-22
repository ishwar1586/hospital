import PendingActionsOutlinedIcon
    from "@mui/icons-material/PendingActionsOutlined";

import AutorenewOutlinedIcon
    from "@mui/icons-material/AutorenewOutlined";

import TaskAltOutlinedIcon
    from "@mui/icons-material/TaskAltOutlined";

import PriorityHighOutlinedIcon
    from "@mui/icons-material/PriorityHighOutlined";

import AccessTimeOutlinedIcon
    from "@mui/icons-material/AccessTimeOutlined";

import VerifiedOutlinedIcon
    from "@mui/icons-material/VerifiedOutlined";


// =========================================
// RESULT ENTRY STATS CONFIGURATION
// =========================================

const statsCards = [

    // =========================================
    // PENDING RESULTS
    // =========================================

    {
        id: "pendingResults",

        label:
            "Pending Results",

        value:
            18,

        description:
            "Awaiting result entry",

        icon:
            PendingActionsOutlinedIcon,

        variant:
            "pending",

        trend: {

            type:
                "neutral",

            value:
                "Today",

        },

    },


    // =========================================
    // IN PROGRESS
    // =========================================

    {
        id: "inProgress",

        label:
            "In Progress",

        value:
            7,

        description:
            "Currently being entered",

        icon:
            AutorenewOutlinedIcon,

        variant:
            "progress",

        trend: {

            type:
                "neutral",

            value:
                "Active",

        },

    },


    // =========================================
    // COMPLETED TODAY
    // =========================================

    {
        id: "completedToday",

        label:
            "Completed Today",

        value:
            42,

        description:
            "Results completed today",

        icon:
            TaskAltOutlinedIcon,

        variant:
            "completed",

        trend: {

            type:
                "positive",

            value:
                "+12%",

        },

    },


    // =========================================
    // CRITICAL RESULTS
    // =========================================

    {
        id: "criticalResults",

        label:
            "Critical Results",

        value:
            3,

        description:
            "Require immediate attention",

        icon:
            PriorityHighOutlinedIcon,

        variant:
            "critical",

        trend: {

            type:
                "negative",

            value:
                "Action",

        },

    },


    // =========================================
    // AVERAGE TAT
    // =========================================

    {
        id: "averageTat",

        label:
            "Average TAT",

        value:
            "38 min",

        description:
            "Average result entry time",

        icon:
            AccessTimeOutlinedIcon,

        variant:
            "tat",

        trend: {

            type:
                "positive",

            value:
                "-8%",

        },

    },


    // =========================================
    // QUALITY SCORE
    // =========================================

    {
        id: "qualityScore",

        label:
            "Quality Score",

        value:
            "98.6%",

        description:
            "Result accuracy score",

        icon:
            VerifiedOutlinedIcon,

        variant:
            "quality",

        trend: {

            type:
                "positive",

            value:
                "+1.4%",

        },

    },

];


export default statsCards;