export const activityMock = [

    {
        id: 1,

        type: "Stock Created",

        title: "Stock Created",

        description: "Medicine stock was added into inventory.",

        user: "Admin",

        date: "03 Jul 2026",

        time: "09:15 AM",

        referenceNo: "STK-240701",

        details: {

            "Medicine Name": "Cetirizine 10mg Tablet",

            "Medicine Code": "MED0004",

            "Category": "Antihistamine",

            "Batch No": "BT240701",

            "Current Stock": "500 Tablets",

            "Warehouse": "Main Store",

            "Created By": "Admin",

            "Remarks": "Initial stock created."

        }

    },

    {
        id: 2,

        type: "Purchase",

        title: "Purchase Entry",

        description: "500 units received through purchase.",

        user: "Store Manager",

        date: "03 Jul 2026",

        time: "11:20 AM",

        referenceNo: "PUR-240701",

        details: {

            "Supplier": "Medicare Distributors",

            "Invoice No": "INV-240701",

            "GRN No": "GRN-240701",

            "Purchase Qty": "500",

            "Purchase Rate": "₹5.20",

            "Total Amount": "₹2,600",

            "Warehouse": "Main Store",

            "Received By": "Store Manager"

        }

    },

    {
        id: 3,

        type: "Adjustment",

        title: "Stock Adjustment",

        description: "Physical stock adjustment completed.",

        user: "Admin",

        date: "04 Jul 2026",

        time: "10:10 AM",

        referenceNo: "ADJ-240701",

        details: {

            "Previous Stock": "500",

            "Adjusted Stock": "520",

            "Difference": "+20",

            "Reason": "Physical Stock Verification",

            "Approved By": "Admin",

            "Remarks": "Stock count matched after adjustment."

        }

    },

    {
        id: 4,

        type: "Transfer",

        title: "Stock Transfer",

        description: "Medicine transferred successfully.",

        user: "Store Manager",

        date: "05 Jul 2026",

        time: "02:35 PM",

        referenceNo: "TRF-240701",

        details: {

            "From Store": "Main Store",

            "To Store": "ICU Pharmacy",

            "Transferred Qty": "120",

            "Approved By": "Store Manager",

            "Received By": "ICU Pharmacist",

            "Remarks": "Emergency stock transfer."

        }

    },

    {
        id: 5,

        type: "Price Updated",

        title: "Selling Price Updated",

        description: "Medicine price updated.",

        user: "Pharmacy Admin",

        date: "06 Jul 2026",

        time: "04:40 PM",

        referenceNo: "PRC-240701",

        details: {

            "Previous Selling Price": "₹18.00",

            "Updated Selling Price": "₹20.00",

            "MRP": "₹22.00",

            "Reason": "Supplier Price Revision",

            "Updated By": "Pharmacy Admin"

        }

    },

    {
        id: 6,

        type: "Document Uploaded",

        title: "Purchase Invoice Uploaded",

        description: "Purchase invoice uploaded successfully.",

        user: "Admin",

        date: "07 Jul 2026",

        time: "09:45 AM",

        referenceNo: "DOC-240701",

        details: {

            "Document": "Purchase Invoice",

            "File Name": "INV-240701.pdf",

            "Document Size": "2.4 MB",

            "Uploaded By": "Admin",

            "Verification": "Verified"

        }

    },

    {
        id: 7,

        type: "Barcode Printed",

        title: "Barcode Printed",

        description: "Barcode labels generated.",

        user: "Pharmacist",

        date: "08 Jul 2026",

        time: "12:25 PM",

        referenceNo: "BAR-240701",

        details: {

            "Batch No": "BT240701",

            "Barcode Count": "120",

            "Printer": "Zebra ZD421",

            "Printed By": "Pharmacist"

        }

    },

    {
        id: 8,

        type: "Expired",

        title: "Expired Stock Removed",

        description: "Expired stock removed from inventory.",

        user: "Quality Team",

        date: "10 Jul 2026",

        time: "05:15 PM",

        referenceNo: "EXP-240701",

        details: {

            "Batch No": "BT240701",

            "Expired Qty": "30",

            "Expiry Date": "10 Jul 2026",

            "Disposed By": "Quality Team",

            "Disposal Method": "As Per Hospital Policy"

        }

    }

];

export default activityMock;