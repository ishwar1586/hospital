export const unitFormConfig = [
  {
    sectionTitle: "Basic Information",

    fields: [
      {
        name: "unitCode",
        label: "Unit Code",
        type: "text",
        disabled: true,
      },

      {
        name: "unitName",
        label: "Unit Name",
        type: "text",
        required: true,
      },

      {
        name: "shortName",
        label: "Short Name",
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

export default unitFormConfig;