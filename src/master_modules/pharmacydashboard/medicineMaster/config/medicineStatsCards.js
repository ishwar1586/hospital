import LocalPharmacyOutlinedIcon from "@mui/icons-material/LocalPharmacyOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";

export const medicineStatsCards = [
  {
    key: "totalMedicines",
    title: "Total Medicines",
    icon: LocalPharmacyOutlinedIcon,
  },
  {
    key: "lowStock",
    title: "Low Stock",
    icon: Inventory2OutlinedIcon,
  },
  {
    key: "expired",
    title: "Expired Medicines",
    icon: WarningAmberOutlinedIcon,
  },
  {
    key: "categories",
    title: "Categories",
    icon: CategoryOutlinedIcon,
  },
  {
    key: "companies",
    title: "Companies",
    icon: BusinessOutlinedIcon,
  },
];

export default medicineStatsCards;