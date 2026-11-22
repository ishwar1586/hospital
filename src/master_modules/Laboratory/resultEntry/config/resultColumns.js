// =========================================
// RESULT ENTRY TABLE COLUMNS
// =========================================

import ScienceOutlinedIcon
    from "@mui/icons-material/ScienceOutlined";

import EditOutlinedIcon
    from "@mui/icons-material/EditOutlined";

import StraightenOutlinedIcon
    from "@mui/icons-material/StraightenOutlined";

import CompareArrowsOutlinedIcon
    from "@mui/icons-material/CompareArrowsOutlined";

import FlagOutlinedIcon
    from "@mui/icons-material/FlagOutlined";


// =========================================
// COLUMNS
// =========================================

const resultColumns = [

    // =========================================
    // TEST
    // =========================================

    {
        id: "test",

        label: "Test",

        accessor: "testName",

        type: "test",

        width: "24%",

        align: "left",

        icon:
            ScienceOutlinedIcon,
    },


    // =========================================
    // RESULT
    // =========================================

    {
        id: "result",

        label: "Result",

        accessor: "result",

        type: "resultInput",

        width: "16%",

        align: "left",

        placeholder:
            "Enter result",

        icon:
            EditOutlinedIcon,
    },


    // =========================================
    // UNIT
    // =========================================

    {
        id: "unit",

        label: "Unit",

        accessor: "unit",

        type: "unit",

        width: "11%",

        align: "left",

        icon:
            StraightenOutlinedIcon,
    },


    // =========================================
    // REFERENCE RANGE
    // =========================================

    {
        id: "referenceRange",

        label: "Reference Range",

        accessor:
            "referenceRange",

        type:
            "referenceRange",

        width: "19%",

        align: "left",

        icon:
            CompareArrowsOutlinedIcon,
    },


    // =========================================
    // FLAG
    // =========================================

    {
        id: "flag",

        label: "Flag",

        accessor: "flag",

        type: "flag",

        width: "10%",

        align: "center",

        icon:
            FlagOutlinedIcon,
    },


    // =========================================
    // STATUS
    // =========================================

    {
        id: "status",

        label: "Status",

        accessor: "status",

        type: "status",

        width: "20%",

        align: "center",
    },

];


export default resultColumns;