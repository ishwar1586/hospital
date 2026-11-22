import {
    Inventory2Outlined,
    CurrencyRupeeOutlined,
    WarningAmberOutlined,
    CancelOutlined,
    EventBusyOutlined,
    AccountBalanceWalletOutlined,
} from "@mui/icons-material";

export const stockStats = [

    {
        id: 1,

        title: "Total Items",

        value: "1,248",

        subTitle: "+12 this month",

        icon: Inventory2Outlined,

        iconColor: "#2563EB",

        bgColor: "#EFF6FF",
    },

    {
        id: 2,

        title: "Total Stock Value",

        value: "₹ 58,74,320.00",

        subTitle: "+8.4% this month",

        icon: CurrencyRupeeOutlined,

        iconColor: "#16A34A",

        bgColor: "#ECFDF5",
    },

    {
        id: 3,

        title: "Low Stock Items",

        value: "24",

        subTitle: "View Details",

        icon: WarningAmberOutlined,

        iconColor: "#EA580C",

        bgColor: "#FFF7ED",
    },

    {
        id: 4,

        title: "Out of Stock Items",

        value: "7",

        subTitle: "View Details",

        icon: CancelOutlined,

        iconColor: "#DC2626",

        bgColor: "#FEF2F2",
    },

    {
        id: 5,

        title: "Expiring Soon",

        value: "35",

        subTitle: "Within 30 Days",

        icon: EventBusyOutlined,

        iconColor: "#9333EA",

        bgColor: "#FAF5FF",
    },

    {
        id: 6,

        title: "Near Expiry Value",

        value: "₹ 2,45,760.00",

        subTitle: "View Details",

        icon: AccountBalanceWalletOutlined,

        iconColor: "#2563EB",

        bgColor: "#EFF6FF",
    },

];

export default stockStats;