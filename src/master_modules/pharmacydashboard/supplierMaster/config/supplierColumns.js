import { supplierActions } from "./supplierActions";

export const supplierColumns = [
  {
    key: "supplierCode",
    label: "Supplier Code",
  },

  {
    key: "supplierName",
    label: "Supplier Name",
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
    key: "city",
    label: "City",
  },

  {
    key: "gstNumber",
    label: "GST Number",
  },

  {
    key: "outstandingAmount",
    label: "Outstanding Amount",
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
    actions: supplierActions,
  },
];

export default supplierColumns;