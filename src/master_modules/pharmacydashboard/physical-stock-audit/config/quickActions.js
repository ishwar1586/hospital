import {
    Inventory2Outlined,
    SyncAltOutlined,
    AssessmentOutlined,
    HistoryOutlined,
} from "@mui/icons-material";

const quickActions = [

    {
        id: 1,
        title: "Bulk Stock Update",
        description: "Update stock for multiple items",
        icon: Inventory2Outlined,
        color: "green",
    },

    {
        id: 2,
        title: "Stock Adjustment",
        description: "Adjust stock manually",
        icon: SyncAltOutlined,
        color: "orange",
    },

    {
        id: 3,
        title: "Stock Reports",
        description: "View stock reports",
        icon: AssessmentOutlined,
        color: "blue",
    },

    {
        id: 4,
        title: "Audit History",
        description: "View all audit history",
        icon: HistoryOutlined,
        color: "purple",
    },

];

export default quickActions;