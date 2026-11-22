// src/master_modules/RadiologyManagement/config/radiologyTabs.config.js

export const radiologyTabsConfig = {
  ariaLabel: "Filter radiology orders by status",

  defaultTab: "all",

  tabs: [
    {
      id: "all",
      label: "All Orders",
    },
    {
      id: "pending",
      label: "Pending",
    },
    {
      id: "in-progress",
      label: "In Progress",
    },
    {
      id: "completed",
      label: "Completed",
    },
    {
      id: "cancelled",
      label: "Cancelled",
    },
  ],
};

export default radiologyTabsConfig;