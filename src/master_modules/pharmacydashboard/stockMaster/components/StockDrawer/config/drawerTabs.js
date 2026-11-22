import {
    InfoOutlined,
    HistoryOutlined,
    Inventory2Outlined,
    DescriptionOutlined,
    TimelineOutlined,
} from "@mui/icons-material";

export const drawerTabs = [

    {
        id: "information",
        label: "Information",
        icon: InfoOutlined,
    },

    {
        id: "ledger",
        label: "Stock Ledger",
        icon: HistoryOutlined,
    },

    {
        id: "batch",
        label: "Batch History",
        icon: Inventory2Outlined,
    },

    {
        id: "documents",
        label: "Documents",
        icon: DescriptionOutlined,
    },

    {
        id: "activity",
        label: "Activity",
        icon: TimelineOutlined,
    },

];

export default drawerTabs;