/* ============================================================
   PHARMACY INVOICE MOCK DATA
   ============================================================ */

const pharmacyInvoiceMock = {
  /* ============================================================
     PATIENT
     ============================================================ */

  patient: {
    patientId: "PAT-0001",

    uhid: "UHID123456",

    patientName: "Rohan Kumar",

    patientType: "Registered Patient",

    age: 32,

    gender: "Male",

    ageGender: "32 / Male",

    mobile: "9876543210",

    doctor: "Dr. Amit Sharma",

    department: "General Medicine",

    address: "Gorakhpur, Uttar Pradesh",
  },

  /* ============================================================
     BILL
     ============================================================ */

  bill: {
    billNumber: "PH-BILL-2026-0001",

    billDate: "08 October 2026",

    prescriptionNumber: "RX-2026-0001",

    invoiceType: "Pharmacy",

    status: "paid",
  },

  /* ============================================================
     MEDICINES
     ============================================================ */

  medicines: [
    {
      id: "MED-001",

      medicineId: "MED-001",

      medicineCode: "PCM-500",

      medicineName: "Paracetamol 500mg",

      batchNumber: "PCM240501",

      expiryDate: "04/2028",

      quantity: 10,

      sellingPrice: 5,

      amount: 50,

      discount: 0,
    },

    {
      id: "MED-002",

      medicineId: "MED-002",

      medicineCode: "AMX-625",

      medicineName: "Amoxicillin 625mg",

      batchNumber: "AMX240312",

      expiryDate: "03/2028",

      quantity: 10,

      sellingPrice: 18,

      amount: 180,

      discount: 0,
    },

    {
      id: "MED-003",

      medicineId: "MED-003",

      medicineCode: "AZI-500",

      medicineName: "Azithromycin 500mg",

      batchNumber: "AZI240225",

      expiryDate: "02/2028",

      quantity: 5,

      sellingPrice: 28,

      amount: 140,

      discount: 0,
    },

    {
      id: "MED-004",

      medicineId: "MED-004",

      medicineCode: "CET-10",

      medicineName: "Cetirizine 10mg",

      batchNumber: "CET240415",

      expiryDate: "04/2028",

      quantity: 10,

      sellingPrice: 4,

      amount: 40,

      discount: 0,
    },

    {
      id: "MED-005",

      medicineId: "MED-005",

      medicineCode: "PANT-40",

      medicineName: "Pantoprazole 40mg",

      batchNumber: "PNT240201",

      expiryDate: "02/2028",

      quantity: 10,

      sellingPrice: 7,

      amount: 70,

      discount: 0,
    },
  ],

  /* ============================================================
     SUMMARY
     ============================================================ */

  summary: {
    subtotal: 480,

    discount: 20,

    taxableAmount: 460,

    tax: 23,

    grandTotal: 483,

    total: 483,
  },

  /* ============================================================
     PAYMENT
     ============================================================ */

  payment: {
    method: "cash",

    paymentMethod: "cash",

    amountReceived: 500,

    transactionId: "",

    cardType: "",

    lastFourDigits: "",

    bankName: "",

    changeAmount: 17,

    status: "paid",
  },

  /* ============================================================
     META
     ============================================================ */

  meta: {
    generatedAt:
      "08 October 2026, 05:30 PM",

    generatedBy:
      "Pharmacy Counter",

    cashier: "Admin User",

    source: "Pharmacy Billing",
  },
};

export default pharmacyInvoiceMock;