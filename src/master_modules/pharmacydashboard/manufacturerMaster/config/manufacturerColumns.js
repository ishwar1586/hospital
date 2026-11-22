import { manufacturerActions } from "./manufacturerActions";

export const manufacturerColumns = [
  {
    key: "manufacturerCode",
    label: "Code",
  },

  {
    key: "manufacturerName",
    label: "Manufacturer Name",
  },

  {
    key: "contactPerson",
    label: "Contact Person",
  },

  {
    key: "mobile",
    label: "Mobile",
  },

  {
    key: "email",
    label: "Email",
  },

  {
    key: "gstNumber",
    label: "GST Number",
  },

  {
    key: "city",
    label: "City",
  },

  {
    key: "status",
    label: "Status",
    type: "status",
  },

  {
    key: "actions",
    label: "Actions",
    type: "actions",
    actions: manufacturerActions,
  },
];

export default manufacturerColumns;