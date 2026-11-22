export const departmentFiltersConfig = {
  fields: [
    {
      name: "status",
      label: "Status",
      placeholder: "All Status",
      optionKey: "statuses",
    },
    {
      name: "type",
      label: "Department Type",
      placeholder: "All Types",
      optionKey: "departmentTypes",
    },
  ],

  search: {
    name: "search",
    placeholder: "Search department name, code...",
  },

  refresh: {
    label: "Refresh",
    tooltip: "Reset filters and refresh departments",
  },
};