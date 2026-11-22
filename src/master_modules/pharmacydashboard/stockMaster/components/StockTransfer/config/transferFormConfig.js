export const transferFormConfig = [

    {
        name: "fromWarehouse",

        label: "From Warehouse",

        type: "text",

        readOnly: true,

        required: true,
    },

    {
        name: "toWarehouse",

        label: "To Warehouse",

        type: "select",

        required: true,

        options: [

            "Main Store",

            "Emergency Store",

            "ICU Store",

            "OT Store",

            "Ward Store",

            "Pharmacy Counter",

        ],
    },

    {
        name: "transferQty",

        label: "Transfer Quantity",

        type: "number",

        placeholder: "Enter transfer quantity",

        required: true,

        min: 1,
    },

    {
        name: "reason",

        label: "Transfer Reason",

        type: "select",

        required: true,

        options: [

            "Inter Warehouse Transfer",

            "Store Replenishment",

            "Department Request",

            "Ward Requirement",

            "Emergency Transfer",

            "Stock Balancing",

            "Pharmacy Refill",

            "ICU Requirement",

            "OT Requirement",

            "Other",

        ],
    },

    {
        name: "remarks",

        label: "Remarks",

        type: "textarea",

        placeholder: "Enter transfer remarks...",

        rows: 4,

        maxLength: 300,
    },

];

export default transferFormConfig;