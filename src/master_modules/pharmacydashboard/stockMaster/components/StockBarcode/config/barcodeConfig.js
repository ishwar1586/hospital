export const barcodeConfig = [

    {

        name: "barcodeType",

        label: "Barcode Type",

        type: "select",

        required: true,

        options: [

            "Code 128",

            "Code 39",

            "EAN-13",

        ],

    },

    {

        name: "labelSize",

        label: "Label Size",

        type: "select",

        required: true,

        options: [

            "Small",

            "Medium",

            "Large",

        ],

    },

    {

        name: "copies",

        label: "Print Copies",

        type: "number",

        min: 1,

        max: 500,

        required: true,

    },

    {

        name: "showPrice",

        label: "Show Price",

        type: "checkbox",

    },

    {

        name: "showBatch",

        label: "Show Batch",

        type: "checkbox",

    },

    {

        name: "showExpiry",

        label: "Show Expiry",

        type: "checkbox",

    },

];

export default barcodeConfig;