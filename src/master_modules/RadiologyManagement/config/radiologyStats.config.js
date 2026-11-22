// src/master_modules/RadiologyManagement/config/radiologyStats.config.js

export const radiologyStatsConfig = {
  section: {
    id: "radiology-stats",
    ariaLabel: "Radiology department statistics",
  },

  layout: {
    columns: 4,
    gap: "16px",
  },

  cards: [
    {
      id: "total-orders",
      label: "Total Orders",
      description: "Total radiology orders",
      icon: "clipboard-list",
      color: "blue",
    },
    {
      id: "pending-studies",
      label: "Pending Studies",
      description: "Awaiting completion",
      icon: "clock",
      color: "orange",
    },
    {
      id: "in-progress",
      label: "In Progress",
      description: "Imaging underway",
      icon: "scan",
      color: "purple",
    },
    {
      id: "reports-ready",
      label: "Reports Ready",
      description: "Reports finalized",
      icon: "file-check",
      color: "green",
    },
  ],
};


export default radiologyStatsConfig;   