// =========================================
// RESULT ENTRY TABLE COLUMN CONFIGURATION
// =========================================

import ScienceOutlinedIcon
    from "@mui/icons-material/ScienceOutlined";

import ConfirmationNumberOutlinedIcon
    from "@mui/icons-material/ConfirmationNumberOutlined";

import PersonOutlineOutlinedIcon
    from "@mui/icons-material/PersonOutlineOutlined";

import AccessTimeOutlinedIcon
    from "@mui/icons-material/AccessTimeOutlined";

import FlagOutlinedIcon
    from "@mui/icons-material/FlagOutlined";

import AssignmentOutlinedIcon
    from "@mui/icons-material/AssignmentOutlined";


// =========================================
// COLUMNS
// =========================================

const resultEntryColumns = [

    // =========================================
    // ACCESSION NO.
    // =========================================

    {
        id: "accessionNo",

        label: "Accession No.",

        accessor: "accessionNo",

        icon:
            ConfirmationNumberOutlinedIcon,

        width: "135px",

        align: "left",

        type: "text",
    },


    // =========================================
    // PATIENT
    // =========================================

    {
        id: "patient",

        label: "Patient",

        accessor: "patientName",

        icon:
            PersonOutlineOutlinedIcon,

        width: "190px",

        align: "left",

        type: "patient",
    },


    // =========================================
    // TEST
    // =========================================

    {
        id: "testName",

        label: "Test",

        accessor: "testName",

        icon:
            ScienceOutlinedIcon,

        width: "205px",

        align: "left",

        type: "test",
    },


    // =========================================
    // SAMPLE TYPE
    // =========================================

    {
        id: "sampleType",

        label: "Sample Type",

        accessor: "sampleType",

        width: "120px",

        align: "left",

        type: "text",
    },


    // =========================================
    // RECEIVED ON
    // =========================================

    {
        id: "receivedAt",

        label: "Received On",

        accessor: "receivedAt",

        icon:
            AccessTimeOutlinedIcon,

        width: "135px",

        align: "left",

        type: "dateTime",
    },


    // =========================================
    // TAT
    // =========================================

    {
        id: "tat",

        label: "TAT",

        accessor: "tat",

        width: "95px",

        align: "center",

        type: "tat",
    },


    // =========================================
    // PRIORITY
    // =========================================

    {
        id: "priority",

        label: "Priority",

        accessor: "priority",

        icon:
            FlagOutlinedIcon,

        width: "105px",

        align: "center",

        type: "priority",
    },


    // =========================================
    // RESULT STATUS
    // =========================================

    {
        id: "resultStatus",

        label: "Result Status",

        accessor: "resultStatus",

        icon:
            AssignmentOutlinedIcon,

        width: "125px",

        align: "center",

        type: "status",
    },


    // =========================================
    // ACTIONS
    // =========================================

    {
        id: "actions",

        label: "Actions",

        width: "75px",

        align: "center",

        type: "actions",
    },

];


export default resultEntryColumns;