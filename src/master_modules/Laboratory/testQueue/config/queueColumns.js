import ScienceOutlinedIcon
    from "@mui/icons-material/ScienceOutlined";

import PersonOutlineOutlinedIcon
    from "@mui/icons-material/PersonOutlineOutlined";

import BiotechOutlinedIcon
    from "@mui/icons-material/BiotechOutlined";

import BusinessOutlinedIcon
    from "@mui/icons-material/BusinessOutlined";

import FlagOutlinedIcon
    from "@mui/icons-material/FlagOutlined";

import AccessTimeOutlinedIcon
    from "@mui/icons-material/AccessTimeOutlined";

import SettingsOutlinedIcon
    from "@mui/icons-material/SettingsOutlined";


const queueColumns = [

    // =========================================
    // ACCESSION NUMBER
    // =========================================

    {
        id: "accessionNo",

        label: "Accession No.",

        accessor: "accessionNo",

        icon: ScienceOutlinedIcon,

        width: "130px",

        align: "left",

        sortable: true,
    },


    // =========================================
    // PATIENT
    // =========================================

    {
        id: "patientName",

        label: "Patient",

        accessor: "patientName",

        icon: PersonOutlineOutlinedIcon,

        width: "170px",

        align: "left",

        sortable: true,
    },


    // =========================================
    // TEST
    // =========================================

    {
        id: "testName",

        label: "Test",

        accessor: "testName",

        icon: BiotechOutlinedIcon,

        width: "190px",

        align: "left",

        sortable: true,
    },


    // =========================================
    // SAMPLE TYPE
    // =========================================

    {
        id: "sampleType",

        label: "Sample Type",

        accessor: "sampleType",

        width: "110px",

        align: "left",

        sortable: true,
    },


    // =========================================
    // DEPARTMENT
    // =========================================

    {
        id: "department",

        label: "Department",

        accessor: "department",

        icon: BusinessOutlinedIcon,

        width: "150px",

        align: "left",

        sortable: true,
    },


    // =========================================
    // ANALYZER
    // =========================================

    {
        id: "analyzer",

        label: "Analyzer / Section",

        accessor: "analyzer",

        width: "165px",

        align: "left",

        sortable: true,
    },


    // =========================================
    // PRIORITY
    // =========================================

    {
        id: "priority",

        label: "Priority",

        accessor: "priority",

        icon: FlagOutlinedIcon,

        width: "105px",

        align: "center",

        sortable: true,

        type: "priority",
    },


    // =========================================
    // TAT
    // =========================================

    {
        id: "tat",

        label: "TAT",

        accessor: "tat",

        icon: AccessTimeOutlinedIcon,

        width: "105px",

        align: "center",

        sortable: true,

        type: "tat",
    },


    // =========================================
    // TAT STATUS
    // =========================================

    {
        id: "tatStatus",

        label: "TAT Status",

        accessor: "tatStatus",

        width: "115px",

        align: "center",

        sortable: true,

        type: "tatStatus",
    },


    // =========================================
    // QUEUE STATUS
    // =========================================

    {
        id: "status",

        label: "Status",

        accessor: "status",

        width: "125px",

        align: "center",

        sortable: true,

        type: "status",
    },


    // =========================================
    // ACTIONS
    // =========================================

    {
        id: "actions",

        label: "Actions",

        accessor: null,

        icon: SettingsOutlinedIcon,

        width: "80px",

        align: "center",

        sortable: false,

        type: "actions",
    },

];


export default queueColumns;