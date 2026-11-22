const collectionFilters = [

    {
        id: "search",

        label: "Search Patient / Accession No.",

        type: "search",

        placeholder:
            "Search patient or accession no.",
    },


    {
        id: "collectionDate",

        label: "Collection Date",

        type: "date",

    },


    {
        id: "collectionCenter",

        label: "Collection Center",

        type: "select",

        options: [

            {
                value: "all",
                label: "All Centers",
            },

            {
                value: "main",
                label: "Main Laboratory",
            },

            {
                value: "opd",
                label: "OPD Collection Center",
            },

            {
                value: "ipd",
                label: "IPD Collection Center",
            },

            {
                value: "emergency",
                label: "Emergency",
            },

        ],
    },


    {
        id: "sampleType",

        label: "Sample Type",

        type: "select",

        options: [

            {
                value: "all",
                label: "All Sample Types",
            },

            {
                value: "blood",
                label: "Blood",
            },

            {
                value: "serum",
                label: "Serum",
            },

            {
                value: "plasma",
                label: "Plasma",
            },

            {
                value: "urine",
                label: "Urine",
            },

            {
                value: "stool",
                label: "Stool",
            },

            {
                value: "swab",
                label: "Swab",
            },

        ],
    },


    {
        id: "status",

        label: "Status",

        type: "select",

        options: [

            {
                value: "all",
                label: "All Status",
            },

            {
                value: "completed",
                label: "Completed",
            },

            {
                value: "pending",
                label: "Pending",
            },

            {
                value: "rejected",
                label: "Rejected",
            },

            {
                value: "onHold",
                label: "On Hold",
            },

        ],
    },

];


export default collectionFilters;