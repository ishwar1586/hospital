import {
  LocalHospitalOutlined,
  CloseOutlined,
  PersonOutlined,
  MedicationOutlined,
  PaymentsOutlined,
  ReceiptLongOutlined,
  PrintOutlined,
  DownloadOutlined,
  AddOutlined,
  LocalAtmOutlined,
  SmartphoneOutlined,
  CreditCardOutlined,
  AccountBalanceOutlined,
} from "@mui/icons-material";

/* ============================================================
   PHARMACY INVOICE CONFIG
   ============================================================ */

const pharmacyInvoiceConfig = {
  /* ============================================================
     PAGE
     ============================================================ */

  page: {
    enabled: true,

    title: "Pharmacy Invoice",

    subtitle: "Final pharmacy billing invoice",

    showBackButton: false,

    showCloseButton: true,
  },

  /* ============================================================
     HEADER
     ============================================================ */

  header: {
    enabled: true,

    hospital: {
      name: "ABC Multispeciality Hospital",

      tagline:
        "Advanced Healthcare & Pharmacy Services",

      address:
        "Medical Road, Gorakhpur, Uttar Pradesh - 273001",

      phone: "+91 98765 43210",

      email: "info@abchospital.com",

      gstin: "09ABCDE1234F1Z5",
    },

    invoice: {
      title: "PHARMACY INVOICE",

      subtitle: "Medicine Sales Invoice",

      showCloseButton: true,

      billNumberLabel: "Bill No.",

      billDateLabel: "Bill Date",

      prescriptionLabel: "Prescription No.",

      showStatus: true,

      statusLabel: "PAID",

      statusMessage:
        "Payment successfully received",

      statusVariant: "success",
    },

    icons: {
      hospital: LocalHospitalOutlined,

      close: CloseOutlined,
    },
  },

  /* ============================================================
     PATIENT
     ============================================================ */

  patient: {
    enabled: true,

    title: "Patient Information",

    subtitle: "Registered patient details",

    icon: PersonOutlined,

    showPatientType: true,

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

      {
        id: "doctor",
        label: "Doctor",
        field: "doctor",
        fallback: "-",
      },

      {
        id: "department",
        label: "Department",
        field: "department",
        fallback: "-",
      },
    ],
  },

  /* ============================================================
     MEDICINES
     ============================================================ */

  medicines: {
    enabled: true,

    title: "Medicine Details",

    subtitle:
      "Medicines included in this invoice",

    icon: MedicationOutlined,

    showItemCount: true,

    itemCountLabel: "Items",

    showMedicineCode: true,

    currencySymbol: "₹",

    decimalPlaces: 2,

    emptyMessage:
      "No medicines added to this bill.",

    showFooterNote: true,

    footerNote:
      "Please verify medicine name, quantity and expiry before leaving the pharmacy.",

    columns: [
      {
        id: "serialNumber",
        field: "serialNumber",
        label: "#",
        align: "center",
      },

      {
        id: "medicineName",
        field: "medicineName",
        label: "Medicine",
        align: "left",
      },

      {
        id: "batchNumber",
        field: "batchNumber",
        label: "Batch No.",
        align: "left",
      },

      {
        id: "expiryDate",
        field: "expiryDate",
        label: "Expiry",
        align: "center",
      },

      {
        id: "quantity",
        field: "quantity",
        label: "Qty",
        align: "center",
      },

      {
        id: "sellingPrice",
        field: "sellingPrice",
        label: "Rate",
        align: "right",
      },

      {
        id: "amount",
        field: "amount",
        label: "Amount",
        align: "right",
      },
    ],
  },

  /* ============================================================
     SUMMARY
     ============================================================ */

  summary: {
    enabled: true,

    title: "Bill Summary",

    subtitle:
      "Complete billing calculation",

    icon: ReceiptLongOutlined,

    currencySymbol: "₹",

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

      subtitle:
        "Final amount paid by customer",
    },
  },

  /* ============================================================
     PAYMENT
     ============================================================ */

  payment: {
    enabled: true,

    title: "Payment Information",

    subtitle:
      "Payment details for this invoice",

    icon: PaymentsOutlined,

    currencySymbol: "₹",

    decimalPlaces: 2,

    showStatus: true,

    defaultStatus: "paid",

    statusLabels: {
      paid: "PAID",
      pending: "PENDING",
      failed: "FAILED",
    },

    showPaymentMethod: true,

    paymentMethodLabel: "Payment Method",

    showAmountPayable: true,

    amountPayableLabel: "Amount Payable",

    amountReceivedLabel: "Amount Received",

    showChangeAmount: true,

    changeAmountLabel: "Change Returned",

    transactionIdLabel: "Transaction ID",

    cardTypeLabel: "Card Type",

    lastFourDigitsLabel: "Card",

    bankNameLabel: "Bank Name",

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

  /* ============================================================
     FOOTER
     ============================================================ */

  footer: {
    enabled: true,

    showActions: true,

    note: {
      enabled: true,

      title: "Important Note",

      text:
        "Please retain this invoice for future reference. Medicines once dispensed are subject to hospital pharmacy return policies.",
    },

    terms: {
      enabled: true,

      title: "Terms & Conditions",

      items: [
        {
          id: "term-1",

          text:
            "Please verify medicine name and quantity before leaving the pharmacy.",
        },

        {
          id: "term-2",

          text:
            "Medicines are subject to applicable hospital pharmacy return policies.",
        },

        {
          id: "term-3",

          text:
            "This invoice is system generated and does not require a physical signature.",
        },
      ],
    },

    actions: {
      newBill: {
        enabled: true,
        label: "New Bill",
        icon: AddOutlined,
      },

      download: {
        enabled: true,
        label: "Download",
        icon: DownloadOutlined,
      },

      print: {
        enabled: true,
        label: "Print Invoice",
        icon: PrintOutlined,
      },
    },

    branding: {
      enabled: true,

      text:
        "Powered by Hospital Management System",
    },
  },

  /* ============================================================
     BILLING
     ============================================================ */

  billing: {
    currency: "INR",

    currencySymbol: "₹",

    decimalPlaces: 2,

    invoiceType: "pharmacy",

    paymentStatus: "paid",
  },

  /* ============================================================
     PRINT
     ============================================================ */

  print: {
    enabled: true,

    title: "Pharmacy Invoice",

    pageSize: "A4",

    orientation: "portrait",

    showHospitalHeader: true,

    showFooter: true,

    hideActions: true,
  },

  /* ============================================================
     RESPONSIVE
     ============================================================ */

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

export default pharmacyInvoiceConfig;