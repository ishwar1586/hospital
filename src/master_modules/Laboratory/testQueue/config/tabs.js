// =========================================
// TEST QUEUE TAB CONFIGURATION
// =========================================

const tabs = [

    // =========================================
    // ALL
    // =========================================

    {
        id: "all",

        label: "All",

        description:
            "All tests currently in queue",

        filter: {
            type: "all",
        },

        countKey: "totalInQueue",

        variant: "default",
    },


    // =========================================
    // HIGH PRIORITY
    // =========================================

    {
        id: "highPriority",

        label: "High Priority",

        description:
            "High and urgent priority tests",

        filter: {
            type: "priority",

            values: [
                "High",
                "Urgent",
            ],
        },

        countKey: "highPriority",

        variant: "high",
    },


    // =========================================
    // DUE IN 1 HOUR
    // =========================================

    {
        id: "dueInOneHour",

        label: "Due in 1 Hour",

        description:
            "Tests approaching their TAT",

        filter: {
            type: "tat",

            values: [
                "warning",
                "critical",
            ],
        },

        countKey: "dueInOneHour",

        variant: "warning",
    },


    // =========================================
    // IN PROGRESS
    // =========================================

    {
        id: "inProgress",

        label: "In Progress",

        description:
            "Tests currently being processed",

        filter: {
            type: "status",

            values: [
                "In Progress",
            ],
        },

        countKey: "inProgress",

        variant: "progress",
    },


    // =========================================
    // OVERDUE
    // =========================================

    {
        id: "overdue",

        label: "Overdue",

        description:
            "Tests that have exceeded their TAT",

        filter: {
            type: "tatStatus",

            values: [
                "overdue",
            ],
        },

        countKey: "overdue",

        variant: "danger",
    },

];


export default tabs;