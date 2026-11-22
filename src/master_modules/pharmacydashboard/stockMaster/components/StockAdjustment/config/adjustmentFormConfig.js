export const adjustmentFormConfig = [

    {
        name: "physicalStock",

        label: "Physical Stock",

        type: "number",

        placeholder: "Enter physical stock",

        required: true,

        min: 0,
    },

    {
        name: "reason",

        label: "Adjustment Reason",

        type: "select",

        required: true,

        options: [

            "Physical Verification",

            "Damage",

            "Expired",

            "Breakage",

            "Lost",

            "Supplier Return",

            "Patient Return",

            "System Correction",

            "Stock Reconciliation",

            "Other",

        ],
    },

    {
        name: "remarks",

        label: "Remarks",

        type: "textarea",

        placeholder:
            "Enter adjustment remarks...",

        rows: 4,

        maxLength: 300,
    },

];



export default  adjustmentFormConfig;