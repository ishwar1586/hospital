export const stockColumns = [

    {
        key: "medicineCode",
        label: "Medicine Code",
        width: 150,
        align: "left",
        className: "medicine-code-column",
        headerClassName: "medicine-code-header",
    },

    {
        key: "medicineName",
        label: "Medicine Name",
        width: 280,
        align: "left",
        className: "medicine-name-column",
        headerClassName: "medicine-name-header",
    },

    {
        key: "hsnCode",
        label: "HSN Code",
        width: 130,
        align: "center",
        className: "hsn-column",
        headerClassName: "hsn-header",
    },

    {
        key: "category",
        label: "Category",
        width: 170,
        type: "badge",
        align: "center",
        className: "category-column",
        headerClassName: "category-header",
    },

    {
        key: "supplier",
        label: "Supplier",
        width: 220,
        align: "left",
        className: "supplier-column",
        headerClassName: "supplier-header",
    },

    // {
    //     key: "manufacturer",
    //     label: "Manufacturer",
    //     width: 220,
    //     align: "left",
    //     className: "manufacturer-column",
    //     headerClassName: "manufacturer-header",
    // },

    {
        key: "batchNo",
        label: "Batch No.",
        width: 160,
        align: "center",
        className: "batch-column",
        headerClassName: "batch-header",
    },

    // {
    //     key: "expiryDate",
    //     label: "Expiry Date",
    //     width: 150,
    //     align: "center",
    //     className: "expiry-column",
    //     headerClassName: "expiry-header",
    // },

    // {
    //     key: "mrp",
    //     label: "MRP",
    //     width: 120,
    //     type: "currency",
    //     align: "right",
    //     className: "mrp-column",
    //     headerClassName: "mrp-header",
    // },

    // {
    //     key: "purchaseRate",
    //     label: "Purchase Rate",
    //     width: 150,
    //     type: "currency",
    //     align: "right",
    //     className: "purchase-rate-column",
    //     headerClassName: "purchase-rate-header",
    // },

    // {
    //     key: "sellingPrice",
    //     label: "Selling Price",
    //     width: 150,
    //     type: "currency",
    //     align: "right",
    //     className: "selling-price-column",
    //     headerClassName: "selling-price-header",
    // },

    {
        key: "currentStock",
        label: "Current Stock",
        width: 140,
        align: "center",
        className: "current-stock-column",
        headerClassName: "current-stock-header",
    },

    {
        key: "reservedQty",
        label: "Reserved",
        width: 120,
        align: "center",
        className: "reserved-column",
        headerClassName: "reserved-header",
    },

    {
        key: "availableQty",
        label: "Available",
        width: 120,
        align: "center",
        className: "available-column",
        headerClassName: "available-header",
    },

    {
        key: "reorderLevel",
        label: "Reorder Level",
        width: 150,
        align: "center",
        className: "reorder-column",
        headerClassName: "reorder-header",
    },

    // {
    //     key: "unit",
    //     label: "Unit",
    //     width: 100,
    //     align: "center",
    //     className: "unit-column",
    //     headerClassName: "unit-header",
    // },

    // {
    //     key: "stockValue",
    //     label: "Stock Value",
    //     width: 170,
    //     type: "currency",
    //     align: "right",
    //     className: "stock-value-column",
    //     headerClassName: "stock-value-header",
    // },

    {
        key: "location",
        label: "Location",
        width: 170,
        align: "left",
        className: "location-column",
        headerClassName: "location-header",
    },

    {
        key: "status",
        label: "Status",
        width: 150,
        type: "status",
        align: "center",
        className: "status-column",
        headerClassName: "status-header",
    },

    {
        key: "actions",
        label: "Actions",
        width: 90,
        type: "actions",
        align: "center",
        className: "action-column",
        headerClassName: "action-header",
    },

];

export default stockColumns;