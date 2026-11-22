import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";

export const purchaseStats = [
  {
    title: "Total POs",
    value: "232",
    subtitle: "This Month",
    icon: ShoppingCartOutlinedIcon,
  },

  {
    title: "Total PO Value",
    value: "₹ 1,45,78,320",
    subtitle: "This Month",
    icon: CurrencyRupeeOutlinedIcon,
  },

  {
    title: "Total GRNs",
    value: "198",
    subtitle: "This Month",
    icon: InventoryOutlinedIcon,
  },

  {
    title: "Total Bills",
    value: "176",
    subtitle: "This Month",
    icon: ReceiptLongOutlinedIcon,
  },

  {
    title: "Pending POs",
    value: "34",
    subtitle: "This Month",
    icon: PendingActionsOutlinedIcon,
  },
];


export default purchaseStats;