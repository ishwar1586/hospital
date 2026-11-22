// src/master_modules/Billing&Invoice/mock/pharmacyReview.mock.js

const pharmacyReviewMock = {
  /* =========================================================
     PATIENT
     ========================================================= */

  patient: {
    id: "PAT-0001",

    uhid: "UHID125698",

    patientName: "Rohit Verma",

    age: 45,

    gender: "Male",

    ageGender: "45 / Male",

    mobile: "8765499870",
  },


  /* =========================================================
     PATIENT DETAILS
     ========================================================= */

  patientDetails: {
    patientId: "PAT-0001",

    uhid: "UHID125698",

    patientName: "Rohit Verma",

    age: 45,

    gender: "Male",

    mobile: "8765499870",

    address:
      "Gorakhpur, Uttar Pradesh",

    bloodGroup: "B+",

    emergencyContact:
      "9876543210",
  },


  /* =========================================================
     BILL
     ========================================================= */

  bill: {
    billNumber: "PH-BILL-2024-0001",

    billDate: "16 May 2024",

    prescriptionNumber:
      "RX-2024-0001",

    itemCount: 3,
  },


  /* =========================================================
     MEDICINES
     ========================================================= */

  medicines: [
    {
      id: "MED-001",

      medicineId: "MED-001",

      medicineName:
        "Paracetamol 500mg",

      genericName:
        "Paracetamol",

      quantity: 2,

      rate: 2.50,

      amount: 5.00,
    },

    {
      id: "MED-002",

      medicineId: "MED-002",

      medicineName:
        "Azithromycin 500mg",

      genericName:
        "Azithromycin",

      quantity: 1,

      rate: 5.00,

      amount: 5.00,
    },

    {
      id: "MED-003",

      medicineId: "MED-003",

      medicineName:
        "Pantoprazole 40mg",

      genericName:
        "Pantoprazole",

      quantity: 1,

      rate: 2.75,

      amount: 2.75,
    },
  ],


  /* =========================================================
     SUMMARY
     ========================================================= */

  summary: {
    subtotal: 12.75,

    discount: 0,

    taxableAmount: 12.75,

    tax: 1.53,

    grandTotal: 14.28,
  },


  /* =========================================================
     PAYMENT
     ========================================================= */

  payment: {
    method: "cash",

    paymentMethod: "cash",

    amountReceived: "15",

    changeAmount: 0.72,

    transactionId: "",

    cardType: "",

    lastFourDigits: "",

    bankName: "",

    status: "success",
  },


  /* =========================================================
     BILLING META
     ========================================================= */

  billing: {
    department: "pharmacy",

    customerType:
      "registered-patient",

    currency: "INR",

    currencySymbol: "₹",

    decimalPlaces: 2,
  },


  /* =========================================================
     REVIEW STATUS
     ========================================================= */

  review: {
    status: "ready",

    canConfirm: true,

    isPaymentCompleted: true,
  },
};


export default pharmacyReviewMock;