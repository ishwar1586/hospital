export const billingCartMock = [
    {
        id: 1,
        medicineId: "MED-0001",
        medicineCode: "PCM650",
        medicineName: "Paracetamol 650 mg",
        genericName: "Paracetamol",
        manufacturer: "Cipla",
        category: "Tablet",

        batchNo: "PCM24001",
        expiryDate: "09/2027",

        mrp: 40,
        sellingPrice: 35,

        quantity: 1,
        stock: 120,

        discountPercent: 5,
        discountAmount: 1.75,

        // gstPercent: 12,
        // gstAmount: 3.99,

        lineTotal: 37.24,

        isExpired: false,
        isNearExpiry: false,
        isOutOfStock: false,

        scheduleType: "OTC"
    },

    {
        id: 2,
        medicineId: "MED-0002",
        medicineCode: "AZ500",
        medicineName: "Azithromycin 500 mg",
        genericName: "Azithromycin",
        manufacturer: "Sun Pharma",
        category: "Tablet",

        batchNo: "AZ24014",
        expiryDate: "04/2027",

        mrp: 120,
        sellingPrice: 110,

        quantity: 2,
        stock: 40,

        discountPercent: 10,
        discountAmount: 22,

        // gstPercent: 12,
        // gstAmount: 23.76,

        // lineTotal: 221.76,

        isExpired: false,
        isNearExpiry: false,
        isOutOfStock: false,

        scheduleType: "RX"
    },

    {
        id: 3,
        medicineId: "MED-0003",
        medicineCode: "AMX625",
        medicineName: "Amoxyclav 625",
        genericName: "Amoxicillin + Clavulanic Acid",
        manufacturer: "Mankind",
        category: "Tablet",

        batchNo: "AMX310",
        expiryDate: "01/2027",

        mrp: 225,
        sellingPrice: 210,

        quantity: 1,
        stock: 8,

        discountPercent: 5,
        discountAmount: 10.5,

        // gstPercent: 12,
        // gstAmount: 23.94,

        // lineTotal: 223.44,

        isExpired: false,
        isNearExpiry: true,
        isOutOfStock: false,

        scheduleType: "RX"
    },

    {
        id: 4,
        medicineId: "MED-0004",
        medicineCode: "DOL650",
        medicineName: "Dolo 650",
        genericName: "Paracetamol",
        manufacturer: "Micro Labs",
        category: "Tablet",

        batchNo: "DL24011",
        expiryDate: "12/2028",

        mrp: 38,
        sellingPrice: 34,

        quantity: 3,
        stock: 250,

        discountPercent: 0,
        discountAmount: 0,

        // gstPercent: 12,
        // gstAmount: 12.24,

        // lineTotal: 114.24,

        isExpired: false,
        isNearExpiry: false,
        isOutOfStock: false,

        scheduleType: "OTC"
    },

    {
        id: 5,
        medicineId: "MED-0005",
        medicineCode: "ORS001",
        medicineName: "ORS Powder",
        genericName: "ORS",
        manufacturer: "Dr. Morepen",
        category: "Powder",

        batchNo: "ORS990",
        expiryDate: "08/2026",

        mrp: 25,
        sellingPrice: 22,

        quantity: 2,
        stock: 0,

        discountPercent: 0,
        discountAmount: 0,

        // gstPercent: 5,
        // gstAmount: 2.20,

        // lineTotal: 46.20,

        isExpired: false,
        isNearExpiry: false,
        isOutOfStock: true,

        scheduleType: "OTC"
    }
];


export default billingCartMock;