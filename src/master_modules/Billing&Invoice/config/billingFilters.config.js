const billingFiltersConfig = {
  search: {
    id: "billing-search",
    placeholder: "Search by bill no., patient name or UHID...",
    ariaLabel: "Search bills",
  },

  filters: [
    {
      id: "date-range",
      type: "date-range",
      label: "Date Range",
      placeholder: "Select date range",
    },

    {
      id: "department",
      type: "select",
      label: "Department",
      placeholder: "All Departments",
      optionsSource: "departments",
    },

    {
      id: "patient-type",
      type: "select",
      label: "Patient Type",
      placeholder: "All Patient Types",
      optionsSource: "patientTypes",
    },

    {
      id: "payment-status",
      type: "select",
      label: "Payment Status",
      placeholder: "All Payment Status",
      optionsSource: "paymentStatuses",
    },
  ],

  actions: {
    showReset: true,
  },
};

export default billingFiltersConfig;