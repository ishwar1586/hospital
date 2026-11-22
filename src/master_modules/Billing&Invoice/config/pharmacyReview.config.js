// src/master_modules/Billing&Invoice/config/pharmacyReview.config.js

import {
  ArrowBackOutlined,
  ArrowForwardOutlined,
  CloseOutlined,
  FactCheckOutlined,
  PersonOutlined,
  ReceiptLongOutlined,
  MedicationOutlined,
  PaymentsOutlined,
  CurrencyRupeeOutlined,
  CheckCircleOutlined,
  LocalAtmOutlined,
  SmartphoneOutlined,
  CreditCardOutlined,
  AccountBalanceOutlined,
  PrintOutlined,
} from "@mui/icons-material";

/* =========================================================
   PHARMACY REVIEW CONFIG
========================================================= */

const pharmacyReviewConfig = {
  /* =========================================================
     PAGE
  ========================================================= */

  page: {
    enabled: true,

    title: "Review Pharmacy Bill",

    subtitle:
      "Review all billing details before generating invoice",

    showBackButton: true,

    showCloseButton: true,

    icons: {
      page: FactCheckOutlined,
      back: ArrowBackOutlined,
      close: CloseOutlined,
    },
  },

  /* =========================================================
     STEPPER
  ========================================================= */

  stepper: {
    enabled: true,

    currentStep: 4,

    show: true,
  },

  /* =========================================================
     PATIENT / CUSTOMER INFORMATION
  ========================================================= */

  patient: {
    enabled: true,

    /* -----------------------------------------------
       Registered Patient
    ----------------------------------------------- */

    title: "Patient Information",

    subtitle: "Registered patient details",

    /* -----------------------------------------------
       Walk-in Customer
       PharmacyReview.jsx will use these when
       customerType === "walk-in-customer"
    ----------------------------------------------- */

    customerTitle: "Customer Information",

    customerSubtitle: "Walk-in customer details",

    customerNameLabel: "Customer Name",

    icon: PersonOutlined,

    fields: [
      {
        id: "uhid",

        label: "UHID",

        field: "uhid",

        fallback: "-",

        showWhen: ["registered-patient"],
      },

      {
        id: "patientName",

        label: "Patient Name",

        customerLabel: "Customer Name",

        field: "patientName",

        fallback: "-",

        showWhen: [
          "registered-patient",
          "walk-in-customer",
        ],
      },

      {
        id: "ageGender",

        label: "Age / Gender",

        field: "ageGender",

        fallback: "-",

        showWhen: [
          "registered-patient",
          "walk-in-customer",
        ],
      },

      {
        id: "mobile",

        label: "Mobile",

        field: "mobile",

        fallback: "-",

        showWhen: [
          "registered-patient",
          "walk-in-customer",
        ],
      },
    ],
  },

  /* =========================================================
     BILL INFORMATION
  ========================================================= */

  bill: {
    enabled: true,

    title: "Bill Information",

    subtitle: "Pharmacy billing details",

    icon: ReceiptLongOutlined,

    fields: [
      {
        id: "billNumber",

        label: "Bill No.",

        field: "billNumber",

        fallback: "Auto Generated",
      },

      {
        id: "billDate",

        label: "Bill Date",

        field: "billDate",

        fallback: "-",
      },

      {
        id: "prescriptionNumber",

        label: "Prescription No.",

        field: "prescriptionNumber",

        fallback: "-",

        /*
         * Prescription sirf registered patient
         * ke case mein show hoga.
         */
        showWhen: ["registered-patient"],
      },

      {
        id: "itemCount",

        label: "Items",

        field: "itemCount",

        fallback: "0",
      },
    ],
  },

  /* =========================================================
     MEDICINES
  ========================================================= */

  medicines: {
    enabled: true,

    title: "Medicines",

    subtitle:
      "Selected medicines for this bill",

    icon: MedicationOutlined,

    showItemCount: true,

    itemCountLabel: "Items",

    emptyMessage:
      "No medicine details available.",

    columns: [
      {
        id: "serialNumber",

        label: "#",

        field: "serialNumber",

        type: "number",

        width: "60px",
      },

      {
        id: "medicineName",

        label: "Medicine",

        field: "medicineName",

        type: "text",

        width: "auto",
      },

      {
        id: "quantity",

        label: "Qty",

        field: "quantity",

        type: "number",

        width: "100px",
      },

      {
        id: "rate",

        label: "Rate",

        field: "rate",

        type: "currency",

        width: "130px",
      },

      {
        id: "amount",

        label: "Amount",

        field: "amount",

        type: "currency",

        width: "140px",
      },
    ],
  },

  /* =========================================================
     PAYMENT INFORMATION
  ========================================================= */

  payment: {
    enabled: true,

    title: "Payment Information",

    subtitle:
      "Selected payment method",

    icon: PaymentsOutlined,

    fields: [
      {
        id: "paymentMethod",

        label: "Payment Method",

        field: "paymentMethod",

        fallback: "-",
      },

      {
        id: "amountReceived",

        label: "Amount Received",

        field: "amountReceived",

        type: "currency",

        showWhen: ["cash"],

        fallback: "-",
      },

      {
        id: "transactionId",

        label: "Transaction ID",

        field: "transactionId",

        showWhen: [
          "upi",
          "card",
          "bank",
        ],

        fallback: "-",
      },

      {
        id: "cardType",

        label: "Card Type",

        field: "cardType",

        showWhen: ["card"],

        fallback: "-",
      },

      {
        id: "lastFourDigits",

        label: "Card",

        field: "lastFourDigits",

        showWhen: ["card"],

        fallback: "-",
      },

      {
        id: "bankName",

        label: "Bank Name",

        field: "bankName",

        showWhen: ["bank"],

        fallback: "-",
      },
    ],

    methodLabels: {
      cash: "Cash",

      upi: "UPI",

      card: "Card",

      bank: "Bank Transfer",
    },

    methodIcons: {
      cash: LocalAtmOutlined,

      upi: SmartphoneOutlined,

      card: CreditCardOutlined,

      bank: AccountBalanceOutlined,
    },
  },

  /* =========================================================
     BILL SUMMARY
  ========================================================= */

  summary: {
    enabled: true,

    title: "Bill Summary",

    subtitle:
      "Final payable amount",

    icon: CurrencyRupeeOutlined,

    currency: "₹",

    currencyCode: "INR",

    decimalPlaces: 2,

    rows: [
      {
        id: "subtotal",

        label: "Subtotal",

        field: "subtotal",

        type: "currency",
      },

      {
        id: "discount",

        label: "Discount",

        field: "discount",

        type: "currency",
      },

      {
        id: "taxableAmount",

        label: "Taxable Amount",

        field: "taxableAmount",

        type: "currency",
      },

      {
        id: "tax",

        label: "GST / Tax",

        field: "tax",

        type: "currency",
      },
    ],

    grandTotal: {
      enabled: true,

      label: "Total Payable",

      field: "grandTotal",

      type: "currency",
    },
  },

  /* =========================================================
     PAYMENT STATUS
  ========================================================= */

  paymentStatus: {
    enabled: true,

    success: {
      enabled: true,

      label: "Payment Completed",

      icon: CheckCircleOutlined,
    },
  },

  /* =========================================================
     FOOTER
  ========================================================= */

  footer: {
    enabled: true,

    cancel: {
      enabled: true,

      label: "Cancel",

      icon: CloseOutlined,
    },

    back: {
      enabled: true,

      label: "Back",

      icon: ArrowBackOutlined,
    },

    confirm: {
      enabled: true,

      label: "Confirm & Generate Invoice",

      icon: ArrowForwardOutlined,
    },
  },

  /* =========================================================
     INVOICE
  ========================================================= */

  invoice: {
    enabled: true,

    generateAutomatically: true,

    showAfterConfirmation: true,

    actions: {
      print: {
        enabled: true,

        label: "Print Invoice",

        icon: PrintOutlined,
      },
    },
  },

  /* =========================================================
     RESPONSIVE
  ========================================================= */

  responsive: {
    desktop: {
      minWidth: 1200,
    },

    tablet: {
      minWidth: 768,

      maxWidth: 1199,
    },

    mobile: {
      maxWidth: 767,
    },
  },
};

export default pharmacyReviewConfig;