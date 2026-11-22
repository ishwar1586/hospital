export const grnItemsColumns = [

    {
        key: "medicineCode",
        label: "Code",
        width: 120,
    },

    {
        key: "medicineName",
        label: "Medicine",
        width: 260,
    },

    {
        key: "batchNo",
        label: "Batch No",
        width: 150,
        type: "textInput",
    },

    {
        key: "expiryDate",
        label: "Expiry",
        width: 140,
        type: "dateInput",
    },

    {
        key: "hsnCode",
        label: "HSN",
        width: 130,
    },

    {
        key: "unit",
        label: "Unit",
        width: 90,
    },

    {
        key: "poQty",
        label: "PO Qty",
        width: 110,
        type: "number",
    },

    {
        key: "receivedQty",
        label: "Received Qty",
        width: 140,
        type: "numberInput",
    },

    {
        key: "rate",
        label: "Rate",
        width: 120,
        type: "numberInput",
    },

    {
        key: "discount",
        label: "Discount %",
        width: 130,
        type: "numberInput",
    },

    {
        key: "gst",
        label: "GST %",
        width: 110,
        type: "numberInput",
    },

    {
        key: "amount",
        label: "Amount",
        width: 160,
        type: "currency",
    },
    // {
    //     key: "actions",
    //     label: "Actions",
    //     width: 160,
    //     type: "actions",
    // },

];


export default grnItemsColumns;