
// =========================================================
// IPD BILLING REVIEW CONFIG
// File: ipdBillingReview.config.js
// Purpose: Centralized configuration for Review & Confirm
// =========================================================

export const IPD_BILLING_REVIEW_CONFIG = {
  page: {
    title: "Review & Confirm",
    subtitle: "Review the bill details before generating the invoice.",
  },

  sections: {
    billSummary: {
      id: "bill-summary",
      title: "Bill Summary",
      showPreview: true,
    },

    paymentDetails: {
      id: "payment-details",
      title: "Payment Details",
      showEdit: true,
    },
  },

  billSummary: {
    chargeRows: [
      {
        id: "roomCharges",
        label: "Room Charges",
        sourceKeys: ["roomCharges", "roomChargesAmount"],
      },
      {
        id: "medicines",
        label: "Medicines",
        sourceKeys: ["medicines", "medicineCharges"],
      },
      {
        id: "laboratory",
        label: "Laboratory",
        sourceKeys: ["laboratory", "laboratoryCharges"],
      },
      {
        id: "radiology",
        label: "Radiology",
        sourceKeys: ["radiology", "radiologyCharges"],
      },
      {
        id: "procedures",
        label: "Procedures",
        sourceKeys: ["procedures", "procedureCharges"],
      },
      {
        id: "consultation",
        label: "Consultation",
        sourceKeys: ["consultation", "consultationCharges"],
      },
      {
        id: "otherCharges",
        label: "Other Charges",
        sourceKeys: ["otherCharges", "otherChargesAmount"],
      },
    ],

    totals: {
      subtotal: {
        id: "subtotal",
        label: "Subtotal",
      },

      discount: {
        id: "discount",
        label: "Discount",
      },

      tax: {
        id: "tax",
        label: "Tax (GST)",
      },

      total: {
        id: "totalBillAmount",
        label: "Total Bill Amount",
      },
    },

    currency: "INR",
    locale: "en-IN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  },

  paymentDetails: {
    fields: [
      {
        id: "paymentMethod",
        label: "Payment Method",
      },
      {
        id: "receivedAmount",
        label: "Received Amount",
        type: "currency",
      },
      {
        id: "paymentDate",
        label: "Payment Date",
        type: "date",
      },
      {
        id: "referenceNo",
        label: "Reference No.",
      },
      {
        id: "remarks",
        label: "Remarks",
      },
    ],
  },

  footer: {
    cancel: {
      label: "Cancel",
      action: "cancel",
      variant: "outlined",
    },

    back: {
      label: "Back",
      action: "back",
      variant: "outlined",
    },

    generateInvoice: {
      label: "Generate Invoice",
      loadingLabel: "Generating Invoice...",
      action: "generate-invoice",
      variant: "contained",
    },
  },
};

export default IPD_BILLING_REVIEW_CONFIG;
