
// =========================================================
// IPD BILLING REVIEW MOCK DATA
// File: ipdBillingReview.mock.js
// Purpose: Development data for Review & Confirm page
// =========================================================

export const ipdBillingReviewMock = {
  patient: {
    id: "PAT-1001",
    patientId: "UHID-2026-1001",
    uhid: "UHID-2026-1001",
    patientName: "Rahul Sharma",
    age: 45,
    gender: "Male",
    ipdNo: "IPD-2026-0258",
    ward: "General Ward",
    room: "204",
    bed: "B-12",
  },

  bill: {
    invoiceId: "INV-IPD-2026-0258",
    billNumber: "DRAFT-IPD-0258",
    billDate: "2026-10-15",
    status: "draft",

    subtotal: 15000,
    discount: 1000,
    tax: 0,
    totalBillAmount: 14000,

    advancePaid: 5000,
    receivedAmount: 5000,
    outstandingAmount: 9000,
  },

  charges: [
    {
      id: "roomCharges",
      label: "Room Charges",
      amount: 4500,
    },
    {
      id: "medicines",
      label: "Medicines",
      amount: 2500,
    },
    {
      id: "laboratory",
      label: "Laboratory",
      amount: 1500,
    },
    {
      id: "radiology",
      label: "Radiology",
      amount: 2000,
    },
    {
      id: "procedures",
      label: "Procedures",
      amount: 2500,
    },
    {
      id: "consultation",
      label: "Consultation",
      amount: 1000,
    },
    {
      id: "otherCharges",
      label: "Other Charges",
      amount: 1000,
    },
  ],

  summary: {
    subtotal: 15000,
    discount: 1000,
    tax: 0,
    totalBillAmount: 14000,
    advancePaid: 5000,
    receivedAmount: 5000,
    outstandingAmount: 9000,
  },

  payment: {
    paymentMethod: "cash",
    paymentMethodLabel: "Cash",
    receivedAmount: 5000,
    paymentDate: "2026-10-15",
    referenceNo: "CASH-IPD-0258",
    remarks: "Advance payment received",
    status: "pending",
  },
};

export default ipdBillingReviewMock;
