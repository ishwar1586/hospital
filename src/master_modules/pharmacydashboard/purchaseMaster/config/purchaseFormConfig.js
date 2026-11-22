export const purchaseOrderFormConfig = {

    supplierInformation: [

        {
            name: "supplier",
            label: "Supplier",
            type: "select",
            required: true,
        },

        {
            name: "supplierInvoiceNo",
            label: "Supplier Invoice No",
            type: "text",
        },

        {
            name: "supplierInvoiceDate",
            label: "Supplier Invoice Date",
            type: "date",
        },

        {
            name: "gstNumber",
            label: "GST Number",
            type: "text",
        },

    ],

    purchaseInformation: [

        {
            name: "poNumber",
            label: "PO Number",
            type: "text",
            disabled: true,
        },

        {
            name: "poDate",
            label: "PO Date",
            type: "date",
        },

        {
            name: "expectedDeliveryDate",
            label: "Expected Delivery Date",
            type: "date",
        },

        {
            name: "poType",
            label: "PO Type",
            type: "select",
            options: [
                "Regular",
                "Urgent",
            ],
        },

    ],

    otherInformation: [

        {
            name: "paymentTerms",
            label: "Payment Terms",
            type: "text",
        },

        {
            name: "transport",
            label: "Transport",
            type: "text",
        },

        {
            name: "freightTerms",
            label: "Freight Terms",
            type: "text",
        },

        {
            name: "remarks",
            label: "Remarks",
            type: "textarea",
        },

    ],

};


export default    purchaseOrderFormConfig;