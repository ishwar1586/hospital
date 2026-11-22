import ScienceOutlinedIcon
    from "@mui/icons-material/ScienceOutlined";

import FlagOutlinedIcon
    from "@mui/icons-material/FlagOutlined";

import AccessTimeOutlinedIcon
    from "@mui/icons-material/AccessTimeOutlined";

import BiotechOutlinedIcon
    from "@mui/icons-material/BiotechOutlined";

import WarningAmberOutlinedIcon
    from "@mui/icons-material/WarningAmberOutlined";

import CheckCircleOutlineOutlinedIcon
    from "@mui/icons-material/CheckCircleOutlineOutlined";


const statsCards = [

    {
        id: "totalInQueue",

        title: "Total in Queue",

        value: 152,

        subtitle: "All pending tests",

        icon: ScienceOutlinedIcon,

        variant: "blue",

        trend: null,
    },


    {
        id: "highPriority",

        title: "High Priority",

        value: 28,

        subtitle: "18.4% of total",

        icon: FlagOutlinedIcon,

        variant: "orange",

        trend: null,
    },


    {
        id: "dueInOneHour",

        title: "Due in 1 Hour",

        value: 36,

        subtitle: "23.7% of total",

        icon: AccessTimeOutlinedIcon,

        variant: "purple",

        trend: null,
    },


    {
        id: "inProgress",

        title: "In Progress",

        value: 64,

        subtitle: "42.1% of total",

        icon: BiotechOutlinedIcon,

        variant: "green",

        trend: null,
    },


    {
        id: "overdue",

        title: "Overdue",

        value: 24,

        subtitle: "15.8% of total",

        icon: WarningAmberOutlinedIcon,

        variant: "red",

        trend: null,
    },


    {
        id: "completedToday",

        title: "Completed Today",

        value: 210,

        subtitle: "Till now",

        icon: CheckCircleOutlineOutlinedIcon,

        variant: "blue",

        trend: null,
    },

];


export default statsCards;