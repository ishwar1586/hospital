// export const medicineFormConfig = [
//   {
//     name: "medicineCode",
//     label: "Medicine Code",
//     type: "text",
//     disabled: true,
//   },

//   {
//     name: "medicineName",
//     label: "Medicine Name",
//     type: "text",
//   },

//   {
//     name: "saltComposition",
//     label: "Salt Composition",
//     type: "text",
//   },

//   {
//     name: "category",
//     label: "Category",
//     type: "text",
//   },

//   {
//     name: "company",
//     label: "Company",
//     type: "text",
//   },

//   {
//     name: "unit",
//     label: "Unit",
//     type: "text",
//   },

//   {
//     name: "mrp",
//     label: "MRP",
//     type: "number",
//   },

//   {
//     name: "salePrice",
//     label: "Sale Price",
//     type: "number",
//   },

//   {
//     name: "stock",
//     label: "Stock",
//     type: "number",
//   },
// ];


// export default medicineFormConfig;




export const medicineFormConfig = [
  {
    sectionTitle: "Medicine Information",

    fields: [
      {
        name: "medicineCode",
        label: "Medicine Code",
        type: "text",
        placeholder: "Auto generated",
        disabled: true,
        required: true,
      },

      {
        name: "barcode",
        label: "Barcode",
        type: "text",
        placeholder: "Enter barcode",
      },

      {
        name: "medicineName",
        label: "Medicine Name",
        type: "text",
        placeholder: "Enter medicine name",
        required: true,
      },

      {
        name: "category",
        label: "Category",
        type: "select",
        placeholder: "Select category",
        required: true,
        options: [],
      },

      {
        name: "manufacturer",
        label: "Manufacturer",
        type: "select",
        placeholder: "Select manufacturer",
        required: true,
        options: [],
      },

      {
        name: "unit",
        label: "Unit",
        type: "select",
        placeholder: "Select unit",
        required: true,
        options: [],
      },

      {
        name: "hsnCode",
        label: "HSN Code",
        type: "text",
        placeholder: "Enter HSN code",
      },

      {
        name: "description",
        label: "Description",
        type: "textarea",
        placeholder: "Enter medicine description",
      },
    ],
  },

  {
    sectionTitle: "Pricing & Stock Information",

    fields: [
      {
        name: "purchasePrice",
        label: "Purchase Price (₹)",
        type: "number",
        placeholder: "0.00",
      },

      {
        name: "salePrice",
        label: "Sale Price (₹)",
        type: "number",
        placeholder: "0.00",
        required: true,
      },

      {
        name: "mrp",
        label: "MRP (₹)",
        type: "number",
        placeholder: "0.00",
        required: true,
      },

      {
        name: "gst",
        label: "GST (%)",
        type: "number",
        placeholder: "12",
      },

      {
        name: "batchTracking",
        label: "Batch Tracking",
        type: "checkbox",
      },

      {
        name: "expiryTracking",
        label: "Expiry Tracking",
        type: "checkbox",
      },

      {
        name: "reorderLevel",
        label: "Reorder Level",
        type: "number",
        placeholder: "Enter reorder level",
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

export default medicineFormConfig;