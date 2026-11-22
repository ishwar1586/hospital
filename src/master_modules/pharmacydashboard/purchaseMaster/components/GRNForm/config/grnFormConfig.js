export const grnFormConfig = {

    purchaseInformation: [

        {

            name: "grnNumber",

            label: "GRN Number",

            type: "text",

            disabled: true,

            required: true,

        },

        {

            name: "grnDate",

            label: "GRN Date",

            type: "date",

            required: true,

        },

        {

            name: "poNumber",

            label: "PO Number",

            type: "select",

            required: true,

        },

        {

            name: "poDate",

            label: "PO Date",

            type: "date",

            disabled: true,

        },

        {

            name: "supplierName",

            label: "Supplier",

            type: "select",

            required: true,

        },

        {

            name: "challanDate",

            label: "Challan Date",

            type: "date",

        },

        {

            name: "transport",

            label: "Transport",

            type: "text",

        },

        {

            name: "vehicleNumber",

            label: "Vehicle No.",

            type: "text",

        },

        {

            name: "warehouse",

            label: "Warehouse / Store",

            type: "select",

            required: true,

        },

        {

            name: "receivedBy",

            label: "Received By",

            type: "select",

            required: true,

        },

        {

            name: "invoiceNumber",

            label: "Invoice No.",

            type: "text",

        },

        {

            name: "invoiceDate",

            label: "Invoice Date",

            type: "date",

        },

        {

            name: "remarks",

            label: "Remarks",

            type: "textarea",

        },

    ],

    otherCharges: [

        {

            name: "freightCharges",

            label: "Freight Charges (₹)",

            type: "number",

        },

        {

            name: "loadingCharges",

            label: "Loading / Unloading (₹)",

            type: "number",

        },

        {

            name: "otherCharges",

            label: "Other Charges (₹)",

            type: "number",

        },

    ],

    notes: [

        {

            name: "internalNotes",

            label: "Internal Notes",

            type: "textarea",

        },

    ],

};


export default grnFormConfig;