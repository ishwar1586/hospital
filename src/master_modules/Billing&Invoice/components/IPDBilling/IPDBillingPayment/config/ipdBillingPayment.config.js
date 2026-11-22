
// =========================================================
// IPD BILLING PAYMENT — CONFIGURATION
// File: ipdBillingPayment.config.js
// =========================================================

export const ipdBillingPaymentConfig = {
  page: {
    title: "Billing & Payment",
    subtitle:
      "Review IPD charges, collect payment, and manage the outstanding balance.",
    currentStep: 3,
    totalSteps: 4,
    currency: "INR",
    locale: "en-IN",
  },

  patientBanner: {
    enabled: true,
    showUHID: true,
    showIPDNumber: true,
    showDepartment: true,
    showDoctor: true,
    showWard: true,
    showRoom: true,
    showBed: true,
    showAdmissionDate: true,
  },

  paymentMethods: [
    {
      id: "cash",
      label: "Cash",
      description: "Collect payment in cash",
      icon: "payments",
      enabled: true,
      requiresReference: false,
      requiresVerification: true,
    },
    {
      id: "upi",
      label: "UPI",
      description: "Pay using UPI",
      icon: "qr-code-2",
      enabled: true,
      requiresReference: true,
      requiresVerification: true,
    },
    {
      id: "card",
      label: "Debit / Credit Card",
      description: "Payment through an authorized card terminal",
      icon: "credit-card",
      enabled: true,
      requiresReference: true,
      requiresVerification: true,
    },
    {
      id: "bank-transfer",
      label: "Bank Transfer",
      description: "NEFT, RTGS, IMPS or net banking",
      icon: "account-balance",
      enabled: true,
      requiresReference: true,
      requiresVerification: true,
    },
  ],

  cardTypes: [
    {
      id: "debit",
      label: "Debit Card",
      enabled: true,
    },
    {
      id: "credit",
      label: "Credit Card",
      enabled: true,
    },
  ],

  transferModes: [
    {
      id: "neft",
      label: "NEFT",
      enabled: true,
    },
    {
      id: "rtgs",
      label: "RTGS",
      enabled: true,
    },
    {
      id: "imps",
      label: "IMPS",
      enabled: true,
    },
    {
      id: "net-banking",
      label: "Net Banking",
      enabled: true,
    },
  ],

  paymentStatuses: [
    {
      id: "unverified",
      label: "Not Verified",
      description: "Payment has not been verified.",
    },
    {
      id: "pending",
      label: "Pending Verification",
      description: "Awaiting confirmation from the payment provider.",
    },
    {
      id: "success",
      label: "Payment Successful",
      description: "Payment has been verified.",
    },
    {
      id: "failed",
      label: "Payment Failed",
      description: "Payment could not be completed or verified.",
    },
  ],

  billSummary: {
    showTotalCharges: true,
    showDiscount: true,
    showNetCharges: true,
    showAdvancePaid: true,
    showPreviousPayments: true,
    showOutstandingAmount: true,
    showCurrentPayment: true,
    showBalanceAfterPayment: true,
  },

  forms: {
    cash: {
      enabled: true,
      amountRequired: true,
      allowPartialPayment: false,
      showChangeReturned: true,
    },

    upi: {
      enabled: true,
      transactionReferenceRequired: true,
      remarksEnabled: true,
    },

    card: {
      enabled: true,
      cardTypeRequired: true,
      transactionReferenceRequired: true,
      remarksEnabled: true,
      captureCardNumber: false,
      captureCVV: false,
      capturePIN: false,
    },

    bankTransfer: {
      enabled: true,
      transferModeRequired: true,
      transactionReferenceRequired: true,
      remarksEnabled: true,
    },
  },

  actions: {
    back: "Back",
    cancel: "Cancel",
    confirmPayment: "Confirm Payment",
    processing: "Processing...",
    retry: "Retry",
    viewInvoice: "View Invoice",
    next: "Continue to Review",
  },

  behavior: {
    requirePositivePayment: true,
    preventOverpayment: true,
    requireReferenceForNonCash: true,
    verifyBeforeMarkingPaid: true,
    allowDuplicateTransactionReference: false,
    navigateAfterVerifiedPayment: true,
  },
};

export default ipdBillingPaymentConfig;
