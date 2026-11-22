// src/master_modules/RadiologyManagement/config/radiologyFilters.config.js

export const radiologyFiltersConfig = {
  search: {
    label: "Search Orders",
    placeholder: "Search patient name, patient ID or order ID...",
    ariaLabel: "Search radiology orders",
  },

  modality: {
    label: "Modality",
    placeholder: "All Modalities",
    options: [
      { label: "All Modalities", value: "all" },
      { label: "X-Ray", value: "X-Ray" },
      { label: "CT Scan", value: "CT Scan" },
      { label: "MRI", value: "MRI" },
      { label: "Ultrasound", value: "Ultrasound" },
      { label: "Mammography", value: "Mammography" },
    ],
  },

  status: {
    label: "Status",
    placeholder: "All Statuses",
    options: [
      { label: "All Statuses", value: "all" },
      { label: "Pending", value: "Pending" },
      { label: "In Progress", value: "In Progress" },
      { label: "Completed", value: "Completed" },
      { label: "Cancelled", value: "Cancelled" },
    ],
  },

  date: {
    label: "Order Date",
    placeholder: "Select date",
    ariaLabel: "Filter by order date",
  },

  resetButton: {
    label: "Reset Filters",
  },
};

export default radiologyFiltersConfig;