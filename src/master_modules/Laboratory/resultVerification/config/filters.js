// =========================================
// RESULT VERIFICATION FILTER CONFIG
// =========================================

const filters = {

    // =====================================
    // DEFAULT FILTER VALUES
    // =====================================

    defaultValues: {

        search:
            "",

        department:
            "all",

        analyzer:
            "all",

        testName:
            "all",

        verificationStatus:
            "all",

        priority:
            "all",

    },


    // =====================================
    // DEPARTMENTS
    // =====================================

    departments: [

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
                "clinical-pathology",

            label:
                "Clinical Pathology",

        },

        {
            value:
                "microbiology",

            label:
                "Microbiology",

        },

        {
            value:
                "immunology",

            label:
                "Immunology",

        },

    ],


    // =====================================
    // ANALYZERS
    // =====================================

    analyzers: [

        {
            value:
                "sysmex-xn-1000",

            label:
                "Sysmex XN-1000",

        },

        {
            value:
                "cobas-c-311",

            label:
                "Cobas c 311",

        },

        {
            value:
                "cobas-e-411",

            label:
                "Cobas e 411",

        },

        {
            value:
                "mindray-bs-240",

            label:
                "Mindray BS-240",

        },

        {
            value:
                "beckman-au480",

            label:
                "Beckman AU480",

        },

    ],


    // =====================================
    // TESTS
    // =====================================

    testNames: [

        {
            value:
                "cbc",

            label:
                "Complete Blood Count",

        },

        {
            value:
                "lft",

            label:
                "Liver Function Test",

        },

        {
            value:
                "kft",

            label:
                "Kidney Function Test",

        },

        {
            value:
                "lipid-profile",

            label:
                "Lipid Profile",

        },

        {
            value:
                "hba1c",

            label:
                "HbA1c",

        },

        {
            value:
                "thyroid-profile",

            label:
                "Thyroid Profile",

        },

        {
            value:
                "urine-routine",

            label:
                "Urine Routine",

        },

    ],


    // =====================================
    // VERIFICATION STATUS
    // =====================================

    verificationStatuses: [

        {
            value:
                "pending",

            label:
                "Pending Verification",

        },

        {
            value:
                "underReview",

            label:
                "Under Review",

        },

        {
            value:
                "verified",

            label:
                "Verified",

        },

        {
            value:
                "rejected",

            label:
                "Rejected",

        },

    ],


    // =====================================
    // PRIORITY
    // =====================================

    priorities: [

        {
            value:
                "normal",

            label:
                "Normal",

        },

        {
            value:
                "high",

            label:
                "High",

        },

        {
            value:
                "critical",

            label:
                "Critical",

        },

    ],

};


export default filters;