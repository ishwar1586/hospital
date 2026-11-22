
// =========================================================
// REVIEW PAYMENT DETAILS CONFIG
// File: reviewPaymentDetails.config.js
// Purpose: Configuration for payment details on review page
// =========================================================

export const REVIEW_PAYMENT_DETAILS_CONFIG = {
  section: {
    id: "payment-details",
    title: "Payment Details",
    showHeaderIcon: true,
    showEditButton: true,
  },

  fields: [
    {
      id: "paymentMethod",
      label: "Payment Method",
      type: "text",
      sourceKeys: [
        "paymentMethodLabel",
        "paymentMethodName",
        "paymentMethod",
      ],
      fallback: "—",
      visible: true,
    },

    {
      id: "receivedAmount",
      label: "Received Amount",
      type: "currency",
      sourceKeys: [
        "receivedAmount",
        "amountReceived",
        "amount",
      ],
      fallback: "—",
      highlight: true,
      visible: true,
    },

    {
      id: "paymentDate",
      label: "Payment Date",
      type: "date",
      sourceKeys: [
        "paymentDate",
        "transactionDate",
      ],
      fallback: "—",
      visible: true,
    },

    {
      id: "referenceNo",
      label: "Reference No.",
      type: "text",
      sourceKeys: [
        "referenceNo",
        "referenceNumber",
        "transactionId",
        "transactionReference",
      ],
      fallback: "—",
      visible: true,
    },

    {
      id: "remarks",
      label: "Remarks",
      type: "text",
      sourceKeys: [
        "remarks",
        "notes",
      ],
      fallback: "—",
      visible: true,
    },
  ],

  formatting: {
    locale: "en-IN",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,

    date: {
      locale: "en-IN",
      day: "2-digit",
      month: "short",
      year: "numeric",
    },
  },

  actions: {
    edit: {
      label: "Edit",
      tooltip: "Edit payment details",
      action: "edit-payment",
    },
  },
};

export default REVIEW_PAYMENT_DETAILS_CONFIG;
