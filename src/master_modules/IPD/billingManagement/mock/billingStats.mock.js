import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";

export const billingStats = [
  {
    title: "Total Bill Generated",
    value: "1,248",
    change: "+12.5%",
    description: "from yesterday",
    icon: ReceiptLongOutlinedIcon,
    type: "blue",
  },

  {
    title: "Total Collections",
    value: "₹18,75,430",
    change: "+8.6%",
    description: "from yesterday",
    icon: AccountBalanceWalletOutlinedIcon,
    type: "green",
  },

  {
    title: "Pending Bills",
    value: "312",
    change: "-3.4%",
    description: "from yesterday",
    icon: PendingActionsOutlinedIcon,
    type: "orange",
  },

  {
    title: "Pending Amount",
    value: "₹7,45,670",
    change: "-6.2%",
    description: "from yesterday",
    icon: CurrencyRupeeOutlinedIcon,
    type: "purple",
  },

  {
    title: "Average Bill Value",
    value: "₹15,042",
    change: "+4.7%",
    description: "from yesterday",
    icon: BarChartOutlinedIcon,
    type: "cyan",
  },
];