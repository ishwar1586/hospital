import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const statsCards = [
    {
        id: "total-tests",
        title: "Total Tests",
        value: "1,248",
        description: "All active tests",
        icon: ScienceOutlinedIcon,
        variant: "blue",
    },

    {
        id: "active-tests",
        title: "Active Tests",
        value: "1,132",
        description: "90.7% of total tests",
        icon: CheckCircleOutlineOutlinedIcon,
        variant: "green",
    },

    {
        id: "test-categories",
        title: "Test Categories",
        value: "25",
        description: "Total categories",
        icon: GridViewOutlinedIcon,
        variant: "orange",
    },

    {
        id: "tests-with-profiles",
        title: "Tests with Profiles",
        value: "312",
        description: "Linked to profiles",
        icon: DescriptionOutlinedIcon,
        variant: "purple",
    },

    {
        id: "inactive-tests",
        title: "Inactive Tests",
        value: "116",
        description: "Currently inactive",
        icon: CancelOutlinedIcon,
        variant: "red",
    },
];

export default statsCards;