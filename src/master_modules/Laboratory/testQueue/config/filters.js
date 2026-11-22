// =========================================
// TEST QUEUE FILTER CONFIGURATION
// =========================================

const filters = [

    // =========================================
    // SEARCH
    // =========================================

    {
        id: "search",

        type: "search",

        label: "Search",

        placeholder:
            "Search patient, accession no. or test...",

        width: "250px",

        searchableFields: [
            "patientName",
            "accessionNo",
            "patientId",
            "testName",
            "testCode",
        ],
    },


    // =========================================
    // DEPARTMENT
    // =========================================

    {
        id: "department",

        type: "select",

        label: "Department",

        placeholder: "All Departments",

        width: "160px",

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

            {
                value: "Pathology",

                label: "Pathology",
            },

        ],
    },


    // =========================================
    // ANALYZER / SECTION
    // =========================================

    {
        id: "analyzer",

        type: "select",

        label: "Analyzer / Section",

        placeholder: "All Analyzers",

        width: "170px",

        options: [

            {
                value: "all",

                label: "All Analyzers",
            },

            {
                value: "Sysmex XN-1000",

                label: "Sysmex XN-1000",
            },

            {
                value: "Cobas c 311",

                label: "Cobas c 311",
            },

            {
                value: "Cobas e 411",

                label: "Cobas e 411",
            },

            {
                value: "Bio-Rad D-10",

                label: "Bio-Rad D-10",
            },

            {
                value: "Sysmex CS-2500",

                label: "Sysmex CS-2500",
            },

            {
                value: "Microbiology Section",

                label: "Microbiology Section",
            },

            {
                value: "PCR Section",

                label: "PCR Section",
            },

            {
                value: "Urinalysis Section",

                label: "Urinalysis Section",
            },

        ],
    },


    // =========================================
    // TEST
    // =========================================

    {
        id: "testName",

        type: "select",

        label: "Test",

        placeholder: "All Tests",

        width: "160px",

        options: [

            {
                value: "all",

                label: "All Tests",
            },

            {
                value: "Complete Blood Count",

                label: "Complete Blood Count",
            },

            {
                value: "Liver Function Test",

                label: "Liver Function Test",
            },

            {
                value: "Kidney Function Test",

                label: "Kidney Function Test",
            },

            {
                value: "HbA1c",

                label: "HbA1c",
            },

            {
                value: "Lipid Profile",

                label: "Lipid Profile",
            },

            {
                value: "Thyroid Profile",

                label: "Thyroid Profile",
            },

            {
                value: "Urine Routine",

                label: "Urine Routine",
            },

            {
                value: "Urine Culture",

                label: "Urine Culture",
            },

            {
                value: "CBC + ESR",

                label: "CBC + ESR",
            },

            {
                value: "PT / INR",

                label: "PT / INR",
            },

            {
                value: "D-Dimer",

                label: "D-Dimer",
            },

            {
                value: "Culture & Sensitivity",

                label: "Culture & Sensitivity",
            },

            {
                value: "Vitamin D",

                label: "Vitamin D",
            },

            {
                value: "COVID-19 PCR",

                label: "COVID-19 PCR",
            },

            {
                value: "Troponin-I",

                label: "Troponin-I",
            },

            {
                value: "Hemoglobin",

                label: "Hemoglobin",
            },

            {
                value: "Blood Culture",

                label: "Blood Culture",
            },

        ],
    },


    // =========================================
    // PRIORITY
    // =========================================

    {
        id: "priority",

        type: "select",

        label: "Priority",

        placeholder: "All Priorities",

        width: "145px",

        options: [

            {
                value: "all",

                label: "All Priorities",
            },

            {
                value: "Urgent",

                label: "Urgent",
            },

            {
                value: "High",

                label: "High",
            },

            {
                value: "Medium",

                label: "Medium",
            },

            {
                value: "Normal",

                label: "Normal",
            },

            {
                value: "Low",

                label: "Low",
            },

        ],
    },


    // =========================================
    // TAT STATUS
    // =========================================

    {
        id: "tatStatus",

        type: "select",

        label: "TAT Status",

        placeholder: "All TAT Status",

        width: "145px",

        options: [

            {
                value: "all",

                label: "All TAT Status",
            },

            {
                value: "normal",

                label: "Normal",
            },

            {
                value: "warning",

                label: "Warning",
            },

            {
                value: "critical",

                label: "Critical",
            },

            {
                value: "overdue",

                label: "Overdue",
            },

            {
                value: "completed",

                label: "Completed",
            },

        ],
    },


    // =========================================
    // QUEUE STATUS
    // =========================================

    {
        id: "status",

        type: "select",

        label: "Status",

        placeholder: "All Status",

        width: "150px",

        options: [

            {
                value: "all",

                label: "All Status",
            },

            {
                value: "Queued",

                label: "Queued",
            },

            {
                value: "In Progress",

                label: "In Progress",
            },

            {
                value: "On Hold",

                label: "On Hold",
            },

            {
                value: "Completed",

                label: "Completed",
            },

            {
                value: "Overdue",

                label: "Overdue",
            },

        ],
    },

];


export default filters;