export const stockFormConfig = {

    /* =====================================================
       BASIC INFORMATION
    ===================================================== */

    basicInformation: [

        {
            name: "medicineName",
            label: "Medicine Name",
            type: "text",
            required: true,
            placeholder: "Enter medicine name",
        },

        {
            name: "medicineCode",
            label: "Medicine Code",
            type: "text",
            required: true,
            placeholder: "Auto / Manual",
        },

        {
            name: "genericName",
            label: "Generic Name",
            type: "text",
            placeholder: "Enter generic name",
        },

        {
            name: "category",
            label: "Category",
            type: "select",

            options: [

                "Tablet",

                "Capsule",

                "Injection",

                "Syrup",

                "Cream",

                "Drops",

                "Ointment",

                "Consumable",

            ],

        },

        {
            name: "unit",
            label: "Unit",
            type: "select",

            options: [

                "Tablet",

                "Bottle",

                "Strip",

                "Piece",

                "Vial",

                "Tube",

            ],

        },

        {
            name: "hsnCode",
            label: "HSN Code",
            type: "text",
        },

    ],

    /* =====================================================
       PRICING
    ===================================================== */

    pricingInformation: [

        {
            name: "purchaseRate",
            label: "Purchase Rate",
            type: "number",
        },

        {
            name: "sellingPrice",
            label: "Selling Price",
            type: "number",
        },

        {
            name: "mrp",
            label: "MRP",
            type: "number",
        },

        {
            name: "gst",
            label: "GST (%)",
            type: "number",
        },

        {
            name: "discount",
            label: "Discount (%)",
            type: "number",
        },

    ],

    /* =====================================================
       STOCK
    ===================================================== */

    stockInformation: [

        {
            name: "currentStock",
            label: "Current Stock",
            type: "number",
        },

        {
            name: "minimumStock",
            label: "Minimum Stock",
            type: "number",
        },

        {
            name: "maximumStock",
            label: "Maximum Stock",
            type: "number",
        },

        {
            name: "reorderLevel",
            label: "Reorder Level",
            type: "number",
        },

        {
            name: "warehouse",
            label: "Warehouse",
            type: "select",

            options: [

                "Main Store",

                "Emergency Store",

                "ICU Store",

                "OT Store",

            ],

        },

        {
            name: "rackNo",
            label: "Rack Number",
            type: "text",
        },

    ],

    /* =====================================================
       SUPPLIER
    ===================================================== */

    supplierInformation: [

        {
            name: "supplier",
            label: "Supplier",
            type: "select",

            options: [

                "ABC Pharma",

                "Sun Pharma",

                "Cipla",

                "Mankind",

            ],

        },

        {
            name: "manufacturer",
            label: "Manufacturer",
            type: "select",

            options: [

                "Dr. Reddy",

                "Sun Pharma",

                "Cipla",

                "Abbott",

            ],

        },

    ],

    /* =====================================================
       BATCH
    ===================================================== */

    batchInformation: [

        {
            name: "batchNo",
            label: "Batch Number",
            type: "text",
        },

        {
            name: "expiryDate",
            label: "Expiry Date",
            type: "date",
        },

        {
            name: "manufacturingDate",
            label: "Manufacturing Date",
            type: "date",
        },

        {
            name: "barcode",
            label: "Barcode",
            type: "text",
        },

    ],

};



export default stockFormConfig;