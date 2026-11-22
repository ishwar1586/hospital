// =========================================
// REPORT GENERATION FILTER CONFIG
// =========================================

const reportGenerationFilters = [

    // =====================================
    // SEARCH
    // =====================================

    {
        id:
            "search",

        label:
            "Search",

        type:
            "search",

        placeholder:
            "Search patient, UHID, accession no...",

        defaultValue:
            "",

    },


    // =====================================
    // DEPARTMENT
    // =====================================

    {
        id:
            "department",

        label:
            "Department",

        type:
            "select",

        defaultValue:
            "all",

        options: [

            {
                value:
                    "all",

                label:
                    "All Departments",
            },

            {
                value:
                    "hematology",

                label:
                    "Hematology",
            },

            {
                value:
                    "biochemistry",

                label:
                    "Biochemistry",
            },

            {
                value:
                    "microbiology",

                label:
                    "Microbiology",
            },

            {
                value:
                    "pathology",

                label:
                    "Pathology",
            },

            {
                value:
                    "immunology",

                label:
                    "Immunology",
            },

        ],

    },


    // =====================================
    // STATUS
    // =====================================

    {
        id:
            "status",

        label:
            "Status",

        type:
            "select",

        defaultValue:
            "all",

        options: [

            {
                value:
                    "all",

                label:
                    "All Statuses",
            },

            {
                value:
                    "ready",

                label:
                    "Ready",
            },

            {
                value:
                    "generating",

                label:
                    "Generating",
            },

            {
                value:
                    "generated",

                label:
                    "Generated",
            },

            {
                value:
                    "printed",

                label:
                    "Printed",
            },

            {
                value:
                    "emailed",

                label:
                    "Emailed",
            },

            {
                value:
                    "downloaded",

                label:
                    "Downloaded",
            },

            {
                value:
                    "failed",

                label:
                    "Failed",
            },

        ],

    },


    // =====================================
    // REPORT FORMAT
    // =====================================

    {
        id:
            "format",

        label:
            "Report Format",

        type:
            "select",

        defaultValue:
            "all",

        options: [

            {
                value:
                    "all",

                label:
                    "All Formats",
            },

            {
                value:
                    "pdf",

                label:
                    "PDF",
            },

            {
                value:
                    "pdf-compact",

                label:
                    "PDF (Compact)",
            },

        ],

    },


    // =====================================
    // DATE FROM
    // =====================================

    {
        id:
            "dateFrom",

        label:
            "From Date",

        type:
            "date",

        defaultValue:
            "",

    },


    // =====================================
    // DATE TO
    // =====================================

    {
        id:
            "dateTo",

        label:
            "To Date",

        type:
            "date",

        defaultValue:
            "",

    },

];


export default reportGenerationFilters;