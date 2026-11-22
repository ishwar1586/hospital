import {
    DangerousOutlined,
    EventBusyOutlined,
    ScheduleOutlined,
    AccessTimeOutlined,
    Inventory2Outlined,
} from "@mui/icons-material";

const expiryStatsMock = [

    {
        id: 1,
        title: "Expired Items",
        count: 32,
        amount: "₹18,540.00",
        icon: DangerousOutlined,
        color: "#ef4444",
    },

    {
        id: 2,
        title: "Expiring in 0-30 Days",
        count: 56,
        amount: "₹42,750.00",
        icon: EventBusyOutlined,
        color: "#f97316",
    },

    {
        id: 3,
        title: "Expiring in 31-60 Days",
        count: 78,
        amount: "₹61,230.00",
        icon: ScheduleOutlined,
        color: "#f59e0b",
    },

    {
        id: 4,
        title: "Expiring in 61-90 Days",
        count: 38,
        amount: "₹24,760.00",
        icon: AccessTimeOutlined,
        color: "#2563eb",
    },

    {
        id: 5,
        title: "Total Stock Value",
        count: "₹11,42,350",
        amount: "Total Items : 2,458",
        icon: Inventory2Outlined,
        color: "#16a34a",
    },

];

export default expiryStatsMock;