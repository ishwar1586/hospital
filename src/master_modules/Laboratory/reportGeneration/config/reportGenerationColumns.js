// =========================================
// REPORT GENERATION TABLE COLUMNS
// =========================================

const reportGenerationColumns = [

    // =====================================
    // ACCESSION NO.
    // =====================================

    {
        id:
            "accessionNo",

        label:
            "Accession No.",

        key:
            "accessionNo",

        type:
            "text",

        width:
            "130px",

        align:
            "left",

        sortable:
            true,

    },


    // =====================================
    // PATIENT
    // =====================================

    {
        id:
            "patient",

        label:
            "Patient",

        key:
            "patientName",

        type:
            "patient",

        width:
            "190px",

        align:
            "left",

        sortable:
            true,

    },


    // =====================================
    // UHID
    // =====================================

    {
        id:
            "uhid",

        label:
            "UHID",

        key:
            "uhid",

        type:
            "text",

        width:
            "120px",

        align:
            "left",

        sortable:
            true,

    },


    // =====================================
    // DEPARTMENT
    // =====================================

    {
        id:
            "department",

        label:
            "Department",

        key:
            "department",

        type:
            "text",

        width:
            "140px",

        align:
            "left",

        sortable:
            true,

    },


    // =====================================
    // TESTS
    // =====================================

    {
        id:
            "tests",

        label:
            "Tests",

        key:
            "tests",

        type:
            "tests",

        width:
            "185px",

        align:
            "left",

        sortable:
            false,

    },


    // =====================================
    // VERIFIED ON
    // =====================================

    {
        id:
            "verifiedOn",

        label:
            "Verified On",

        key:
            "verifiedOn",

        type:
            "dateTime",

        width:
            "145px",

        align:
            "left",

        sortable:
            true,

    },


    // =====================================
    // REPORT FORMAT
    // =====================================

    {
        id:
            "reportFormat",

        label:
            "Report Format",

        key:
            "reportFormat",

        type:
            "format",

        width:
            "120px",

        align:
            "center",

        sortable:
            true,

    },


    // =====================================
    // STATUS
    // =====================================

    {
        id:
            "status",

        label:
            "Status",

        key:
            "status",

        type:
            "status",

        width:
            "120px",

        align:
            "center",

        sortable:
            true,

    },


    // =====================================
    // ACTIONS
    // =====================================

    {
        id:
            "actions",

        label:
            "Actions",

        key:
            "actions",

        type:
            "actions",

        width:
            "70px",

        align:
            "center",

        sortable:
            false,

    },

];


export default reportGenerationColumns;