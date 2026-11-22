
export const departmentDetailsConfig = {
  section: {
    title: "Department Details",
  },

  fields: [
    {
      id: "departmentName",
      name: "departmentName",
      label: "Department Name",
      type: "text",
      placeholder: "e.g. Cardiology",
      required: true,
      maxLength: 100,
      gridColumn: "half",
    },
    {
      id: "departmentCode",
      name: "departmentCode",
      label: "Department Code",
      type: "text",
      placeholder: "e.g. CAR-01",
      required: true,
      maxLength: 20,
      gridColumn: "half",
    },
    {
      id: "departmentType",
      name: "departmentType",
      label: "Department Type",
      type: "select",
      placeholder: "Select Type",
      required: true,
      optionsKey: "departmentTypes",
      gridColumn: "half",
    },
    {
      id: "description",
      name: "description",
      label: "Description (Optional)",
      type: "textarea",
      placeholder: "Brief description about the department...",
      required: false,
      maxLength: 250,
      rows: 3,
      gridColumn: "full",
    },
  ],
};
