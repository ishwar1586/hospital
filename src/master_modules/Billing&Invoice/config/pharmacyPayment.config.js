import {
  ArrowBackOutlined,
  ArrowForwardOutlined,
  CloseOutlined,
  PaymentsOutlined,
  AccountBalanceOutlined,
  CreditCardOutlined,
  CurrencyRupeeOutlined,
  ReceiptLongOutlined,
  LocalAtmOutlined,
  SmartphoneOutlined,
  CheckCircleOutlined,
} from "@mui/icons-material";

const pharmacyPaymentConfig = {
  page: {
    title: "Pharmacy Payment",
    subtitle:
      "Review bill amount and complete payment",

    showBackButton: true,
    showCloseButton: true,

    icons: {
      page: PaymentsOutlined,
      back: ArrowBackOutlined,
      close: CloseOutlined,
    },
  },

  customer: {
    enabled: true,

    title: "Customer Information",

    subtitle:
      "Patient details for this pharmacy bill",

    icon: AccountBalanceOutlined,

    fields: [
      {
        id: "uhid",
        label: "UHID",
        field: "uhid",
        fallback: "-",
      },
      {
        id: "patientName",
        label: "Patient Name",
        field: "patientName",
        fallback: "-",
      },
      {
        id: "ageGender",
        label: "Age / Gender",
        field: "ageGender",
        fallback: "-",
      },
      {
        id: "mobile",
        label: "Mobile",
        field: "mobile",
        fallback: "-",
      },
    ],
  },

  bill: {
    enabled: true,

    title: "Bill Information",

    subtitle:
      "Pharmacy bill details",

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
      },
      {
        id: "itemCount",
        label: "Items",
        field: "itemCount",
        fallback: "0",
      },
    ],
  },

  summary: {
    enabled: true,

    title: "Payment Summary",

    subtitle:
      "Final amount payable",

    icon: CurrencyRupeeOutlined,

    currency: "₹",

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

  paymentMethods: {
    enabled: true,

    title: "Select Payment Method",

    subtitle:
      "Choose how the patient wants to pay",

    icon: PaymentsOutlined,

    selectionMode: "single",

    required: true,

    defaultMethod: "cash",

    methods: [
      {
        id: "cash",
        value: "cash",
        title: "Cash",
        description:
          "Pay the bill using cash",
        icon: LocalAtmOutlined,
        enabled: true,
        variant: "green",
      },

      {
        id: "upi",
        value: "upi",
        title: "UPI",
        description:
          "Pay using UPI / QR code",
        icon: SmartphoneOutlined,
        enabled: true,
        variant: "blue",
      },

      {
        id: "card",
        value: "card",
        title: "Card",
        description:
          "Credit or debit card payment",
        icon: CreditCardOutlined,
        enabled: true,
        variant: "purple",
      },

      {
        id: "bank",
        value: "bank",
        title: "Bank Transfer",
        description:
          "Payment through bank transfer",
        icon: AccountBalanceOutlined,
        enabled: true,
        variant: "orange",
      },
    ],
  },

  cashPayment: {
    enabled: true,

    fields: {
      amountReceived: {
        enabled: true,
        id: "amountReceived",
        label: "Amount Received",
        placeholder:
          "Enter amount received",
        type: "number",
        required: true,
      },

      changeAmount: {
        enabled: true,
        id: "changeAmount",
        label: "Change to Return",
        readonly: true,
        type: "currency",
      },
    },

    validation: {
      minimumAmount: "grandTotal",
      allowPartialPayment: false,
      allowOverPayment: true,
    },
  },

  upiPayment: {
    enabled: true,

    title: "UPI Payment",

    subtitle:
      "Scan QR code or complete payment through UPI",

    qr: {
      enabled: true,

      title: "Scan & Pay",

      description:
        "Scan the QR code using any UPI application",

      placeholder: "UPI QR Code",
    },

    fields: {
      transactionId: {
        enabled: true,
        id: "transactionId",
        label: "Transaction ID",
        placeholder:
          "Enter UPI transaction ID",
        required: true,
      },
    },
  },

  cardPayment: {
    enabled: true,

    title: "Card Payment",

    subtitle:
      "Enter card transaction details",

    fields: {
      transactionId: {
        enabled: true,
        id: "transactionId",
        label: "Transaction ID",
        placeholder:
          "Enter card transaction ID",
        required: true,
      },

      cardType: {
        enabled: true,
        id: "cardType",
        label: "Card Type",

        options: [
          {
            id: "debit",
            label: "Debit Card",
            value: "debit",
          },
          {
            id: "credit",
            label: "Credit Card",
            value: "credit",
          },
        ],

        required: true,
      },

      lastFourDigits: {
        enabled: true,
        id: "lastFourDigits",
        label: "Last 4 Digits",
        placeholder: "XXXX",
        maxLength: 4,
        required: false,
      },
    },
  },

  bankPayment: {
    enabled: true,

    title: "Bank Transfer",

    subtitle:
      "Enter bank transfer details",

    fields: {
      transactionId: {
        enabled: true,
        id: "transactionId",
        label: "Transaction ID / UTR",
        placeholder:
          "Enter transaction ID or UTR",
        required: true,
      },

      bankName: {
        enabled: true,
        id: "bankName",
        label: "Bank Name",
        placeholder:
          "Enter bank name",
        required: true,
      },
    },
  },

  status: {
    enabled: true,

    success: {
      enabled: true,
      title: "Payment Successful",
      message:
        "Payment has been successfully recorded.",
      icon: CheckCircleOutlined,
    },

    pending: {
      enabled: true,
      title: "Payment Pending",
      message:
        "Payment is pending confirmation.",
    },

    failed: {
      enabled: true,
      title: "Payment Failed",
      message:
        "Unable to complete the payment. Please try again.",
    },
  },

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

    continue: {
      enabled: true,
      label: "Continue to Review",
      icon: ArrowForwardOutlined,
      disabledWithoutPayment: true,
    },
  },

  billing: {
    currency: "INR",
    currencySymbol: "₹",

    decimalPlaces: 2,

    allowPartialPayment: false,

    allowOverPayment: true,

    requirePaymentMethod: true,

    requireTransactionIdForDigitalPayment: true,

    requireAmountReceivedForCash: true,
  },

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

export default pharmacyPaymentConfig;