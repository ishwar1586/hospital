import { purchaseActions } from "./purchaseActions";


export const purchaseColumns = [

    {
        key: "poNumber",
        label: "PO No",
        width: 180,
    },

    {
        key: "poDate",
        label: "PO Date",
        width: 140,
    },

    {
        key: "supplierName",
        label: "Supplier",
        width: 250,
    },

    {
        key: "poType",
        label: "PO Type",
        width: 130,
    },

    {
        key: "totalAmount",
        label: "Total Amount",
        width: 180,
        type: "currency",
    },

    {
        key: "receivedAmount",
        label: "Received",
        width: 180,
        type: "currency",
    },

    {
        key: "pendingAmount",
        label: "Pending",
        width: 180,
        type: "currency",
    },

    {
        key: "status",
        label: "Status",
        width: 180,
        type: "status",
    },

    {
        key: "expectedDate",
        label: "Expected Date",
        width: 180,
    },
  {
     key: "actions",
     label: "Actions",
     type: "actions",
     actions: purchaseActions,
   },
];


export default purchaseColumns;
