// =========================================
// RESULT ENTRY TAB CONFIGURATION
// =========================================

const tabs = [

    // =========================================
    // PENDING
    // =========================================

    {
        id: "pending",

        label: "Pending",

        description:
            "Results waiting for entry",

        filter: {
            type: "status",

            values: [
                "pending",
            ],
        },

        variant: "pending",
    },


    // =========================================
    // IN PROGRESS
    // =========================================

    {
        id: "inProgress",

        label: "In Progress",

        description:
            "Results currently being entered",

        filter: {
            type: "status",

            values: [
                "inProgress",
            ],
        },

        variant: "progress",
    },


    // =========================================
    // COMPLETED
    // =========================================

    {
        id: "completed",

        label: "Completed",

        description:
            "Results completed today",

        filter: {
            type: "status",

            values: [
                "completed",
            ],
        },

        variant: "completed",
    },


    // =========================================
    // ALL
    // =========================================

    {
        id: "all",

        label: "All",

        description:
            "All result entry records",

        filter: {
            type: "all",
        },

        variant: "default",
    },

];


export default tabs;