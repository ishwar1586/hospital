export const categoryFormConfig = [
  {
    sectionTitle: "Basic Information",

    fields: [
      {
        name: "categoryCode",
        label: "Category Code",
        type: "text",
        disabled: true,
      },

      {
        name: "categoryName",
        label: "Category Name",
        type: "text",
        required: true,
      },
    ],
  },

  {
    sectionTitle: "Additional Information",

    fields: [
      {
        name: "description",
        label: "Description",
        type: "textarea",
      },

      {
        name: "status",
        label: "Status",
        type: "select",

        options: [
          {
            label: "Active",
            value: "Active",
          },

          {
            label: "Inactive",
            value: "Inactive",
          },
        ],
      },
    ],
  },
];

export default categoryFormConfig;