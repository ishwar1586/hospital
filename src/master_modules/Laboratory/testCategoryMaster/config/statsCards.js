import CategoryOutlinedIcon
    from "@mui/icons-material/CategoryOutlined";

import CheckCircleOutlineOutlinedIcon
    from "@mui/icons-material/CheckCircleOutlineOutlined";

import CancelOutlinedIcon
    from "@mui/icons-material/CancelOutlined";

import ScienceOutlinedIcon
    from "@mui/icons-material/ScienceOutlined";

import DescriptionOutlinedIcon
    from "@mui/icons-material/DescriptionOutlined";


const statsCards = [
    {
        id: "totalCategories",

        title: "Total Categories",

        description: "All test categories",

        icon: CategoryOutlinedIcon,

        variant: "blue",
    },

    {
        id: "activeCategories",

        title: "Active Categories",

        description: "Active test categories",

        icon: CheckCircleOutlineOutlinedIcon,

        variant: "green",
    },

    {
        id: "inactiveCategories",

        title: "Inactive Categories",

        description: "Inactive test categories",

        icon: CancelOutlinedIcon,

        variant: "red",
    },

    {
        id: "totalTests",

        title: "Total Tests",

        description: "Under all categories",

        icon: ScienceOutlinedIcon,

        variant: "blue",
    },

    {
        id: "totalProfiles",

        title: "Total Profiles",

        description: "Linked to categories",

        icon: DescriptionOutlinedIcon,

        variant: "purple",
    },
];

export default statsCards;