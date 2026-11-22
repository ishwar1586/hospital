export const transferReasons = [

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

];

export const warehouseOptions = [

    "Main Store",

    "Emergency Store",

    "ICU Store",

    "OT Store",

    "Ward Store",

    "Pharmacy Counter",

];

export const transferMock = {

    transferNo: "TRF-20260705001",

    transferDate: "05 Jul 2026",

    transferredBy: "Admin",

    medicineId: "",

    medicineCode: "",

    medicineName: "",

    batchNo: "",

    expiryDate: "",

    fromWarehouse: "Main Store",

    toWarehouse: "",

    currentStock: 0,

    availableStock: 0,

    transferQty: "",

    remainingStock: 0,

    reason: "",

    remarks: "",

};

export default transferMock;