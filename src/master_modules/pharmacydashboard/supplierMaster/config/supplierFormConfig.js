export const supplierFormConfig = [
  {
    sectionTitle: "Basic Information",

    fields: [
      {
        name: "supplierCode",
        label: "Supplier Code",
        type: "text",
        disabled: true,
      },

      {
        name: "supplierName",
        label: "Supplier Name",
        type: "text",
        required: true,
      },

      {
        name: "supplierType",
        label: "Supplier Type",
        type: "select",

        options: [
          {
            label: "Wholesaler",
            value: "Wholesaler",
          },

          {
            label: "Distributor",
            value: "Distributor",
          },

          {
            label: "Manufacturer",
            value: "Manufacturer",
          },
        ],
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

  {
    sectionTitle: "Contact Information",

    fields: [
      {
        name: "contactPerson",
        label: "Contact Person",
        type: "text",
      },

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

      {
        name: "website",
        label: "Website",
        type: "text",
      },
    ],
  },

  {
    sectionTitle: "Address Information",

    fields: [
      {
        name: "address",
        label: "Address",
        type: "textarea",
      },

      {
        name: "city",
        label: "City",
        type: "text",
      },

      {
        name: "state",
        label: "State",
        type: "text",
      },

      {
        name: "pincode",
        label: "Pincode",
        type: "text",
      },
    ],
  },

  {
    sectionTitle: "Tax Information",

    fields: [
      {
        name: "gstNumber",
        label: "GST Number",
        type: "text",
      },

      {
        name: "panNumber",
        label: "PAN Number",
        type: "text",
      },

      {
        name: "drugLicense",
        label: "Drug License No",
        type: "text",
      },
    ],
  },

  {
    sectionTitle: "Bank Information",

    fields: [
      {
        name: "bankName",
        label: "Bank Name",
        type: "text",
      },

      {
        name: "accountNumber",
        label: "Account Number",
        type: "text",
      },

      {
        name: "ifscCode",
        label: "IFSC Code",
        type: "text",
      },

      {
        name: "upiId",
        label: "UPI ID",
        type: "text",
      },
    ],
  },
];

export default supplierFormConfig;