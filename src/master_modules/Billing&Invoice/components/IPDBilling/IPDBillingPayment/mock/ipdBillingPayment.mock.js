
// =========================================================
// IPD BILLING PAYMENT — MOCK DATA
// File: ipdBillingPayment.mock.js
// =========================================================

export const ipdBillingPaymentMock = {
  id: "INV-IPD-2026-001",
  invoiceId: "INV-IPD-2026-001",
  invoiceNumber: "IPD-INV-2026-001",

  patient: {
    id: "PAT-1001",
    patientId: "PAT-1001",
    uhid: "UHID-2026-1001",
    ipdNo: "IPD-2026-0042",
    name: "Rahul Sharma",
    patientName: "Rahul Sharma",
    age: 45,
    gender: "Male",
    phone: "98XXXXXX42",
    department: "General Medicine",
    doctor: "Dr. Amit Verma",
    ward: "General Ward",
    room: "204",
    bed: "B-02",
    admissionDate: "2026-10-10",
  },

  charges: [
    {
      id: "CHG-001",
      code: "ROOM-001",
      description: "Room Charges",
      category: "Accommodation",
      quantity: 3,
      unit: "Days",
      rate: 2000,
      amount: 6000,
    },
    {
      id: "CHG-002",
      code: "NUR-001",
      description: "Nursing Charges",
      category: "Nursing",
      quantity: 3,
      unit: "Days",
      rate: 500,
      amount: 1500,
    },
    {
      id: "CHG-003",
      code: "DOC-001",
      description: "Doctor Consultation",
      category: "Professional Fees",
      quantity: 2,
      unit: "Visits",
      rate: 1000,
      amount: 2000,
    },
    {
      id: "CHG-004",
      code: "LAB-001",
      description: "Laboratory Investigations",
      category: "Diagnostics",
      quantity: 1,
      unit: "Package",
      rate: 2500,
      amount: 2500,
    },
    {
      id: "CHG-005",
      code: "MED-001",
      description: "Medicines & Consumables",
      category: "Pharmacy",
      quantity: 1,
      unit: "Package",
      rate: 3000,
      amount: 3000,
    },
  ],

  discount: 1000,
  advancePaid: 5000,

  paymentHistory: [],

  currency: "INR",
  status: "pending",
  createdAt: "2026-10-14T10:00:00.000Z",
};

// =========================================================
// SAFE AMOUNT HELPER
// =========================================================

const toAmount = (value) => {
  const amount = Number(value);
  return Number.isFinite(amount) ? Math.max(0, amount) : 0;
};

// =========================================================
// CALCULATE IPD CHARGES
// =========================================================

export const calculateIPDCharges = (charges = []) => {
  return charges.reduce((total, charge) => {
    const quantity = toAmount(charge.quantity);
    const rate = toAmount(charge.rate);

    // Rate × quantity is the source of truth.
    return total + quantity * rate;
  }, 0);
};

// =========================================================
// CALCULATE IPD BILL SUMMARY
// =========================================================

export const calculateIPDBillSummary = (bill = {}) => {
  const charges = Array.isArray(bill.charges)
    ? bill.charges
    : [];

  const totalCharges = calculateIPDCharges(charges);

  const discount = Math.min(
    toAmount(bill.discount),
    totalCharges
  );

  const netCharges = Math.max(
    0,
    totalCharges - discount
  );

  const advancePaid = Math.min(
    toAmount(bill.advancePaid),
    netCharges
  );

  const paymentHistory = Array.isArray(bill.paymentHistory)
    ? bill.paymentHistory
    : [];

  // Pending/failed payments are not counted as collected.
  const previousPayments = paymentHistory.reduce(
    (total, payment) => {
      const isVerified =
        payment.verified === true ||
        payment.status === "success" ||
        payment.status === "verified";

      return isVerified
        ? total + toAmount(payment.amount)
        : total;
    },
    0
  );

  const outstandingAmount = Math.max(
    0,
    netCharges - advancePaid - previousPayments
  );

  return {
    totalCharges,
    discount,
    netCharges,
    advancePaid,
    previousPayments,
    outstandingAmount,
    balanceDue: outstandingAmount,
    currency: bill.currency || "INR",
  };
};

export default ipdBillingPaymentMock;
