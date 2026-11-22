const processingFilters = [

    {
        id: "search",

        type: "search",

        label: "Search",

        placeholder:
            "Search accession no. or barcode...",
    },


    {
        id: "processingDate",

        type: "date",

        label: "Processing Date",
    },


    {
        id: "department",

        type: "select",

        label: "Department",

        options: [

            {
                value: "all",
                label: "All Departments",
            },

            {
                value: "Hematology",
                label: "Hematology",
            },

            {
                value: "Biochemistry",
                label: "Biochemistry",
            },

            {
                value: "Microbiology",
                label: "Microbiology",
            },

            {
                value: "Clinical Pathology",
                label: "Clinical Pathology",
            },

        ],

    },


    {
        id: "sampleType",

        type: "select",

        label: "Sample Type",

        options: [

            {
                value: "all",
                label: "All Sample Types",
            },

            {
                value: "Blood",
                label: "Blood",
            },

            {
                value: "Serum",
                label: "Serum",
            },

            {
                value: "Plasma",
                label: "Plasma",
            },

            {
                value: "Urine",
                label: "Urine",
            },

            {
                value: "Swab",
                label: "Swab",
            },

        ],

    },


    {
        id: "status",

        type: "select",

        label: "Processing Status",

        options: [

            {
                value: "all",
                label: "All Status",
            },

            {
                value: "Received",
                label: "Received",
            },

            {
                value: "In Processing",
                label: "In Processing",
            },

            {
                value: "Processed",
                label: "Processed",
            },

            {
                value: "On Hold",
                label: "On Hold",
            },

            {
                value: "Rejected",
                label: "Rejected",
            },

        ],

    },

];


export default processingFilters;