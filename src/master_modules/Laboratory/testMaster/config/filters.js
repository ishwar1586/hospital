const testFilters = [
    {
        id: "search",
        type: "search",
        label: "Search Test",
        placeholder: "Search by test name or code...",
    },

    {
        id: "category",
        type: "select",
        label: "Test Category",
        placeholder: "All Categories",

        options: [
            {
                value: "all",
                label: "All Categories",
            },
            {
                value: "hematology",
                label: "Hematology",
            },
            {
                value: "biochemistry",
                label: "Biochemistry",
            },
            {
                value: "immunology",
                label: "Immunology",
            },
            {
                value: "microbiology",
                label: "Microbiology",
            },
        ],
    },

    {
        id: "sampleType",
        type: "select",
        label: "Sample Type",
        placeholder: "All Sample Types",

        options: [
            {
                value: "all",
                label: "All Sample Types",
            },
            {
                value: "whole-blood",
                label: "Whole Blood",
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
        ],
    },

    {
        id: "status",
        type: "select",
        label: "Status",
        placeholder: "All Status",

        options: [
            {
                value: "all",
                label: "All Status",
            },
            {
                value: "active",
                label: "Active",
            },
            {
                value: "inactive",
                label: "Inactive",
            },
        ],
    },

    {
        id: "method",
        type: "select",
        label: "Method",
        placeholder: "All Methods",

        options: [
            {
                value: "all",
                label: "All Methods",
            },
            {
                value: "automated",
                label: "Automated",
            },
            {
                value: "ifcc",
                label: "IFCC",
            },
            {
                value: "clia",
                label: "CLIA",
            },
            {
                value: "jaf-kinetic",
                label: "Jaffe Kinetic",
            },
        ],
    },
];

export default testFilters;