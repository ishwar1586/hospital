const categoryFilters = [
    {
        id: "search",
        type: "search",
        label: "Search Category",
        placeholder: "Search by category name or code...",
    },

    {
        id: "status",
        type: "select",
        label: "Status",
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
        id: "department",
        type: "select",
        label: "Department",
        options: [
            {
                value: "all",
                label: "All Departments",
            },
            {
                value: "pathology",
                label: "Pathology",
            },
            {
                value: "microbiology",
                label: "Microbiology",
            },
            {
                value: "histopathology",
                label: "Histopathology",
            },
        ],
    },

    {
        id: "authorization",
        type: "select",
        label: "Auto Authorization",
        options: [
            {
                value: "all",
                label: "All",
            },
            {
                value: "yes",
                label: "Yes",
            },
            {
                value: "no",
                label: "No",
            },
        ],
    },
];

export default categoryFilters;