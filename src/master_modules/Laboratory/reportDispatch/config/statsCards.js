// =========================================
// REPORT DISPATCH STATS CARDS CONFIG
// =========================================

import AccessTimeOutlinedIcon
    from "@mui/icons-material/AccessTimeOutlined";

import SendOutlinedIcon
    from "@mui/icons-material/SendOutlined";

import CheckCircleOutlineOutlinedIcon
    from "@mui/icons-material/CheckCircleOutlineOutlined";

import ErrorOutlineOutlinedIcon
    from "@mui/icons-material/ErrorOutlineOutlined";

import LocalShippingOutlinedIcon
    from "@mui/icons-material/LocalShippingOutlined";


// =========================================
// STATS CARDS
// =========================================

const statsCards = [

    {
        id:
            "pending-dispatch",

        key:
            "pendingDispatch",

        title:
            "Pending Dispatch",

        subtitle:
            "Awaiting delivery",

        icon:
            AccessTimeOutlinedIcon,

        type:
            "pending",
    },


    {
        id:
            "dispatched-today",

        key:
            "dispatchedToday",

        title:
            "Dispatched Today",

        subtitle:
            "Today",

        icon:
            SendOutlinedIcon,

        type:
            "dispatched",
    },


    {
        id:
            "delivered-today",

        key:
            "deliveredToday",

        title:
            "Delivered Today",

        subtitle:
            "Today",

        icon:
            CheckCircleOutlineOutlinedIcon,

        type:
            "delivered",
    },


    {
        id:
            "failed-today",

        key:
            "failedToday",

        title:
            "Failed Today",

        subtitle:
            "Today",

        icon:
            ErrorOutlineOutlinedIcon,

        type:
            "failed",
    },


    {
        id:
            "total-delivered",

        key:
            "totalDelivered",

        title:
            "Total Delivered",

        subtitle:
            "This month",

        icon:
            LocalShippingOutlinedIcon,

        type:
            "total",
    },


    {
        id:
            "average-tat",

        key:
            "averageTat",

        title:
            "Average TAT",

        subtitle:
            "Verification to dispatch",

        icon:
            AccessTimeOutlinedIcon,

        type:
            "tat",
    },

];


export default statsCards;