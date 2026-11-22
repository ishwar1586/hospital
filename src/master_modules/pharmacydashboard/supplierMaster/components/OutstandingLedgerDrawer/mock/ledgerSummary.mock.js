import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

export const ledgerSummaryMock = [
  {
    key: "creditLimit",
    title: "Total Credit Limit",
    value: "₹ 5,00,000",
    icon: CreditScoreOutlinedIcon,
  },

  {
    key: "outstanding",
    title: "Total Outstanding",
    value: "₹ 2,45,780",
    icon: AccountBalanceWalletOutlinedIcon,
  },

  {
    key: "overdue",
    title: "Overdue Amount",
    value: "₹ 1,25,430",
    icon: WarningAmberOutlinedIcon,
  },

  {
    key: "availableCredit",
    title: "Available Credit",
    value: "₹ 2,54,220",
    icon: ShieldOutlinedIcon,
  },

  {
    key: "purchaseYTD",
    title: "Total Purchases (YTD)",
    value: "₹ 45,78,320",
    icon: ShoppingBagOutlinedIcon,
  },

  {
    key: "paymentYTD",
    title: "Total Payments (YTD)",
    value: "₹ 43,32,540",
    icon: PaymentsOutlinedIcon,
  },

  {
    key: "lastPayment",
    title: "Last Payment Date",
    value: "08 May 2024",
    icon: CalendarMonthOutlinedIcon,
  },

  {
    key: "lastPurchase",
    title: "Last Purchase Date",
    value: "10 May 2024",
    icon: CalendarMonthOutlinedIcon,
  },
];


export default ledgerSummaryMock;