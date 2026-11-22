import ScienceOutlinedIcon
    from "@mui/icons-material/ScienceOutlined";

import CheckCircleOutlineOutlinedIcon
    from "@mui/icons-material/CheckCircleOutlineOutlined";

import AccessTimeOutlinedIcon
    from "@mui/icons-material/AccessTimeOutlined";

import BiotechOutlinedIcon
    from "@mui/icons-material/BiotechOutlined";

import Inventory2OutlinedIcon
    from "@mui/icons-material/Inventory2Outlined";


const collectionStatsCards = [

    {
        id: "todaysCollections",

        title: "Today's Collections",

        valueKey: "todaysCollections",

        subtitle: "Today's total",

        icon: ScienceOutlinedIcon,

        variant: "blue",
    },


    {
        id: "collectedSamples",

        title: "Collected Samples",

        valueKey: "collectedSamples",

        subtitle: "Successfully collected",

        icon: CheckCircleOutlineOutlinedIcon,

        variant: "green",
    },


    {
        id: "pendingCollection",

        title: "Pending Collection",

        valueKey: "pendingCollection",

        subtitle: "Needs attention",

        icon: AccessTimeOutlinedIcon,

        variant: "orange",
    },


    {
        id: "rejectionRate",

        title: "Rejection Rate",

        valueKey: "rejectionRate",

        suffix: "%",

        subtitle: "Current rejection rate",

        icon: BiotechOutlinedIcon,

        variant: "purple",
    },


    {
        id: "totalSamples",

        title: "Total Samples",

        valueKey: "totalSamples",

        subtitle: "Total registered samples",

        icon: Inventory2OutlinedIcon,

        variant: "blue",
    },

];


export default collectionStatsCards;