// src/master_modules/pharmacydashboard/configs/pharmacyAnalytics.config.js

export const pharmacyAnalyticsConfig = {
  totalSales: {
    title: "Total Sales",
    showReport: true,
    currency: "$",
  },

  visitors: {
    title: "Store Visitors",
    filter: "Weekly",
    legends: [
      { key: "physical", label: "Physically", color: "#10b981" },
      { key: "online", label: "Online", color: "#ef4444" },
    ],
  },
};

export default pharmacyAnalyticsConfig;