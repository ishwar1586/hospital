// =========================================
// REPORT DISPATCH FILTER CONFIG
// =========================================


// =========================================
// FILTERS
// =========================================

const filters = [

    // =====================================
    // DISPATCH STATUS
    // =====================================

    {
        key:
            "status",

        type:
            "select",

        label:
            "Status",

        placeholder:
            "All Status",

        options: [

            {
                value:
                    "Pending",

                label:
                    "Pending",
            },


            {
                value:
                    "Dispatched",

                label:
                    "Dispatched",
            },


            {
                value:
                    "Delivered",

                label:
                    "Delivered",
            },


            {
                value:
                    "Failed",

                label:
                    "Failed",
            },

        ],
    },


    // =====================================
    // DISPATCH MODE
    // =====================================

    {
        key:
            "dispatchMode",

        type:
            "select",

        label:
            "Dispatch Mode",

        placeholder:
            "All Modes",

        options: [

            {
                value:
                    "Print",

                label:
                    "Print",
            },


            {
                value:
                    "Email",

                label:
                    "Email",
            },


            {
                value:
                    "SMS",

                label:
                    "SMS",
            },


            {
                value:
                    "WhatsApp",

                label:
                    "WhatsApp",
            },


            {
                value:
                    "Download",

                label:
                    "Download",
            },

        ],
    },


    // =====================================
    // DEPARTMENT
    // =====================================

    {
        key:
            "department",

        type:
            "select",

        label:
            "Department",

        placeholder:
            "All Departments",

        options: [

            {
                value:
                    "Biochemistry",

                label:
                    "Biochemistry",
            },


            {
                value:
                    "Hematology",

                label:
                    "Hematology",
            },


            {
                value:
                    "Pathology",

                label:
                    "Pathology",
            },


            {
                value:
                    "Microbiology",

                label:
                    "Microbiology",
            },


            {
                value:
                    "Immunology",

                label:
                    "Immunology",
            },

        ],
    },


    // =====================================
    // FROM DATE
    // =====================================

    {
        key:
            "fromDate",

        type:
            "date",

        label:
            "From Date",
    },


    // =====================================
    // TO DATE
    // =====================================

    {
        key:
            "toDate",

        type:
            "date",

        label:
            "To Date",
    },

];


export default filters;