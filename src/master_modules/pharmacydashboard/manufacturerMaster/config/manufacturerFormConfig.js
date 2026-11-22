export const manufacturerFormConfig = [
  {
    sectionTitle: "Basic Information",

    fields: [
      {
        name: "manufacturerCode",
        label: "Manufacturer Code",
        type: "text",
        disabled: true,
      },

      {
        name: "manufacturerName",
        label: "Manufacturer Name",
        type: "text",
        required: true,
      },

      {
        name: "contactPerson",
        label: "Contact Person",
        type: "text",
      },
    ],
  },

  {
    sectionTitle: "Contact Information",

    fields: [
      {
        name: "mobile",
        label: "Mobile Number",
        type: "text",
      },

      {
        name: "email",
        label: "Email Address",
        type: "email",
      },
    ],
  },

  {
    sectionTitle: "Legal Information",

    fields: [
      {
        name: "gstNumber",
        label: "GST Number",
        type: "text",
      },

      {
        name: "drugLicenseNo",
        label: "Drug License Number",
        type: "text",
      },
    ],
  },

  {
    sectionTitle: "Location Information",

    fields: [
      {
        name: "city",
        label: "City",
        type: "text",
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

export default manufacturerFormConfig;