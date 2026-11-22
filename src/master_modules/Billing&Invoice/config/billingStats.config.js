import {
  DescriptionOutlined,
  CurrencyRupeeOutlined,
  ReceiptLongOutlined,
  ScheduleOutlined,
} from "@mui/icons-material";

const billingStatsConfig = [
  {
    id: "total-bills",
    icon: DescriptionOutlined,
    iconVariant: "blue",
    valueType: "number",
    trendType: "positive",
  },

  {
    id: "total-billed-amount",
    icon: CurrencyRupeeOutlined,
    iconVariant: "green",
    valueType: "currency",
    trendType: "positive",
  },

  {
    id: "paid-amount",
    icon: ReceiptLongOutlined,
    iconVariant: "red",
    valueType: "currency",
    trendType: "positive",
  },

  {
    id: "pending-amount",
    icon: ScheduleOutlined,
    iconVariant: "orange",
    valueType: "currency",
    trendType: "negative",
  },
];

export default billingStatsConfig;