const pharmacyPaymentMock = {
  customer: {
    patientId: "PAT-0001",
    uhid: "UHID123456",
    patientName: "Rohan Kumar",
    age: 32,
    gender: "Male",
    ageGender: "32 / Male",
    mobile: "9876543210",
  },

  bill: {
    billNumber: "PH-BILL-2024-0001",
    billDate: "16 May 2024",
    prescriptionNumber: "RX-2024-0001",
    itemCount: 3,
  },

  summary: {
    subtotal: 450,
    discount: 20,
    taxableAmount: 430,
    tax: 21.5,
    grandTotal: 451.5,
  },

  payment: {
    method: "cash",

    // IMPORTANT:
    // Never keep a fake received amount here.
    // Actual amount must come from user input.
    amountReceived: "",

    transactionId: "",
    cardType: "",
    lastFourDigits: "",
    bankName: "",
    changeAmount: "",

    status: "pending",
  },
};

export default pharmacyPaymentMock;