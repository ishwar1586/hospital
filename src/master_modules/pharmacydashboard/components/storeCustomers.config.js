import {
  ShoppingBag,
  Users,
  Box,
  Layers,
} from "lucide-react";

export const dashboardConfig = {
  stats: [
    {
      key: "sales",
      label: "Sales",
      icon: ShoppingBag,
      color: "#10b981",
    },
    {
      key: "customers",
      label: "Customers",
      icon: Users,
      color: "#06b6d4",
    },
    {
      key: "products",
      label: "Products",
      icon: Box,
      color: "#f43f5e",
    },
    {
      key: "categories",
      label: "Categories",
      icon: Layers,
      color: "#8b5cf6",
    },
  ],
};

export default dashboardConfig;