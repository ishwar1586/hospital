import Inventory2OutlinedIcon
    from "@mui/icons-material/Inventory2Outlined";

import AutorenewOutlinedIcon
    from "@mui/icons-material/AutorenewOutlined";

import CheckCircleOutlineOutlinedIcon
    from "@mui/icons-material/CheckCircleOutlineOutlined";

import PauseCircleOutlineOutlinedIcon
    from "@mui/icons-material/PauseCircleOutlineOutlined";

import CancelOutlinedIcon
    from "@mui/icons-material/CancelOutlined";

import AccessTimeOutlinedIcon
    from "@mui/icons-material/AccessTimeOutlined";


const statsCards = [

    {
        id: "receivedSamples",

        title: "Received Samples",

        icon:
            Inventory2OutlinedIcon,

        trendType: "up",

        trendLabel: "vs yesterday",
    },


    {
        id: "inProcessing",

        title: "In Processing",

        icon:
            AutorenewOutlinedIcon,

        trendType: "up",

        trendLabel: "vs yesterday",
    },


    {
        id: "processed",

        title: "Processed",

        icon:
            CheckCircleOutlineOutlinedIcon,

        trendType: "up",

        trendLabel: "vs yesterday",
    },


    {
        id: "onHold",

        title: "On Hold",

        icon:
            PauseCircleOutlineOutlinedIcon,

        trendType: "down",

        trendLabel: "vs yesterday",
    },


    {
        id: "rejected",

        title: "Rejected",

        icon:
            CancelOutlinedIcon,

        trendType: "down",

        trendLabel: "vs yesterday",
    },


    {
        id: "tatCompliance",

        title: "TAT Compliance",

        icon:
            AccessTimeOutlinedIcon,

        trendType: "up",

        trendLabel: "vs yesterday",
    },

];


export default statsCards;