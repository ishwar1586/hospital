export const ledgerMock = [

    {
        id: 1,

        date: "03 Jul 2026",

        time: "09:15 AM",

        referenceNo: "GRN-240701",

        transactionType: "Purchase",

        openingQty: 0,

        inQty: 500,

        outQty: 0,

        closingQty: 500,

        user: "Ritesh Singh",

        remarks: "Purchase from Medicare Distributors",
    },

    {
        id: 2,

        date: "04 Jul 2026",

        time: "11:30 AM",

        referenceNo: "SAL-240702",

        transactionType: "Sale",

        openingQty: 500,

        inQty: 0,

        outQty: 25,

        closingQty: 475,

        user: "Pharmacist",

        remarks: "OPD Patient Billing",
    },

    {
        id: 3,

        date: "05 Jul 2026",

        time: "02:20 PM",

        referenceNo: "TRI-240703",

        transactionType: "Transfer In",

        openingQty: 475,

        inQty: 150,

        outQty: 0,

        closingQty: 625,

        user: "Store Manager",

        remarks: "Received from Emergency Store",
    },

    {
        id: 4,

        date: "06 Jul 2026",

        time: "10:10 AM",

        referenceNo: "TRO-240704",

        transactionType: "Transfer Out",

        openingQty: 625,

        inQty: 0,

        outQty: 75,

        closingQty: 550,

        user: "Store Manager",

        remarks: "Transferred to ICU Store",
    },

    {
        id: 5,

        date: "07 Jul 2026",

        time: "01:45 PM",

        referenceNo: "ADJ-240705",

        transactionType: "Adjustment",

        openingQty: 550,

        inQty: 20,

        outQty: 0,

        closingQty: 570,

        user: "Admin",

        remarks: "Physical Stock Verification",
    },

    {
        id: 6,

        date: "08 Jul 2026",

        time: "03:05 PM",

        referenceNo: "EXP-240706",

        transactionType: "Expired",

        openingQty: 570,

        inQty: 0,

        outQty: 30,

        closingQty: 540,

        user: "Pharmacy Admin",

        remarks: "Expired Stock Removed",
    },

    {
        id: 7,

        date: "09 Jul 2026",

        time: "12:00 PM",

        referenceNo: "RET-240707",

        transactionType: "Sale Return",

        openingQty: 540,

        inQty: 10,

        outQty: 0,

        closingQty: 550,

        user: "Cash Counter",

        remarks: "Returned by Patient",
    },

    {
        id: 8,

        date: "10 Jul 2026",

        time: "04:10 PM",

        referenceNo: "DAM-240708",

        transactionType: "Damage",

        openingQty: 550,

        inQty: 0,

        outQty: 15,

        closingQty: 535,

        user: "Store Manager",

        remarks: "Damaged During Transport",
    },

];



export default ledgerMock;