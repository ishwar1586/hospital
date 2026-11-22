import {
  ArrowBackOutlined,
  ArrowForwardOutlined,
  CloseOutlined,
  MedicationOutlined,
  PersonOutlined,
  SearchOutlined,
  AddOutlined,
  RemoveOutlined,
  DeleteOutlineOutlined,
  ReceiptLongOutlined,
  ShoppingCartOutlined,
  LocalPharmacyOutlined,
  DescriptionOutlined,
  CheckCircleOutlined,
} from "@mui/icons-material";


const pharmacyMedicinesConfig = {

  /* =========================================================
     PAGE
     ========================================================= */

  page: {
    title: "Pharmacy Medicines",
    subtitle:
      "Select medicines, verify quantity and prepare pharmacy bill",

    showBackButton: true,
    showCloseButton: true,

    icons: {
      page: MedicationOutlined,
      back: ArrowBackOutlined,
      close: CloseOutlined,
    },
  },


  /* =========================================================
     CUSTOMER / PATIENT SUMMARY
     ========================================================= */

  customer: {

    enabled: true,

    title: "Customer Information",

    subtitle:
      "Patient details for pharmacy billing",

    icon: PersonOutlined,

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


  /* =========================================================
     PRESCRIPTION
     ========================================================= */

  prescription: {

    enabled: true,

    title: "Prescription Medicines",

    subtitle:
      "Medicines prescribed during the patient's consultation",

    icon: DescriptionOutlined,

    showPrescriptionNumber: true,

    prescriptionNumber: {
      label: "Prescription No.",
      field: "prescriptionNumber",
      fallback: "-",
    },

    medicineFields: [

      {
        id: "medicineName",
        label: "Medicine",
        field: "medicineName",
      },

      {
        id: "dosage",
        label: "Dosage",
        field: "dosage",
      },

      {
        id: "frequency",
        label: "Frequency",
        field: "frequency",
      },

      {
        id: "duration",
        label: "Duration",
        field: "duration",
      },

      {
        id: "instructions",
        label: "Instructions",
        field: "instructions",
      },

    ],

    action: {
      label: "Add",
      selectedLabel: "Added",
      icon: AddOutlined,
      selectedIcon: CheckCircleOutlined,
    },

    emptyState: {
      title: "No Prescription Medicines",
      message:
        "No prescribed medicines are available for this patient.",
    },
  },


  /* =========================================================
     MEDICINE SEARCH
     ========================================================= */

  search: {

    enabled: true,

    title: "Search Medicines",

    subtitle:
      "Search medicine by name, code or manufacturer",

    icon: SearchOutlined,

    placeholder:
      "Search by medicine name, code or manufacturer",

    fields: [
      "medicineName",
      "medicineCode",
      "manufacturer",
    ],

    minSearchLength: 1,

    debounceDelay: 300,

    showClearButton: true,

    button: {
      enabled: true,
      label: "Search",
      icon: SearchOutlined,
    },
  },


  /* =========================================================
     AVAILABLE MEDICINES
     ========================================================= */

  availableMedicines: {

    enabled: true,

    title: "Available Medicines",

    subtitle:
      "Select medicines from pharmacy inventory",

    icon: LocalPharmacyOutlined,

    emptyState: {
      title: "No Medicines Found",
      message:
        "Try searching with another medicine name or code.",
    },

    columns: [

      {
        id: "medicine",
        label: "Medicine",
        field: "medicineName",
        type: "medicine",
        visible: true,
        sortable: true,
        align: "left",
      },

      {
        id: "medicineCode",
        label: "Code",
        field: "medicineCode",
        type: "text",
        visible: true,
        sortable: true,
        align: "left",
      },

      {
        id: "manufacturer",
        label: "Manufacturer",
        field: "manufacturer",
        type: "text",
        visible: true,
        sortable: true,
        align: "left",
      },

      {
        id: "batch",
        label: "Batch",
        field: "batchNumber",
        type: "text",
        visible: true,
        sortable: false,
        align: "left",
      },

      {
        id: "expiry",
        label: "Expiry",
        field: "expiryDate",
        type: "date",
        visible: true,
        sortable: true,
        align: "left",
      },

      {
        id: "stock",
        label: "Stock",
        field: "availableStock",
        type: "stock",
        visible: true,
        sortable: true,
        align: "center",
      },

      {
        id: "unitPrice",
        label: "Unit Price",
        field: "sellingPrice",
        type: "currency",
        visible: true,
        sortable: true,
        align: "right",
      },

      {
        id: "action",
        label: "Action",
        field: "action",
        type: "action",
        visible: true,
        sortable: false,
        align: "center",
      },

    ],

    action: {

      add: {
        enabled: true,
        label: "Add",
        icon: AddOutlined,
        variant: "outlined",
      },

      added: {
        enabled: true,
        label: "Added",
        icon: CheckCircleOutlined,
        variant: "success",
      },

      disabledWhenOutOfStock: true,

    },
  },


  /* =========================================================
     SELECTED MEDICINES
     ========================================================= */

  selectedMedicines: {

    enabled: true,

    title: "Selected Medicines",

    subtitle:
      "Review selected medicines and adjust quantity",

    icon: ShoppingCartOutlined,

    countLabel: "Items",

    emptyState: {
      title: "No Medicines Selected",
      message:
        "Add medicines from the available medicines list.",
    },

    columns: [

      {
        id: "medicine",
        label: "Medicine",
        field: "medicineName",
        type: "medicine",
        visible: true,
      },

      {
        id: "batch",
        label: "Batch",
        field: "batchNumber",
        type: "text",
        visible: true,
      },

      {
        id: "expiry",
        label: "Expiry",
        field: "expiryDate",
        type: "date",
        visible: true,
      },

      {
        id: "unitPrice",
        label: "Unit Price",
        field: "sellingPrice",
        type: "currency",
        visible: true,
      },

      {
        id: "quantity",
        label: "Quantity",
        field: "quantity",
        type: "quantity",
        visible: true,
      },

      {
        id: "discount",
        label: "Discount",
        field: "discount",
        type: "currency",
        visible: true,
      },

      {
        id: "tax",
        label: "Tax",
        field: "tax",
        type: "currency",
        visible: true,
      },

      {
        id: "total",
        label: "Total",
        field: "total",
        type: "currency",
        visible: true,
      },

      {
        id: "action",
        label: "Action",
        field: "action",
        type: "action",
        visible: true,
      },

    ],

    quantity: {

      enabled: true,

      min: 1,

      maxFromStock: true,

      decrease: {
        enabled: true,
        icon: RemoveOutlined,
      },

      increase: {
        enabled: true,
        icon: AddOutlined,
      },

    },

    remove: {

      enabled: true,

      label: "Remove",

      icon: DeleteOutlineOutlined,

    },
  },


  /* =========================================================
     BILL SUMMARY
     ========================================================= */

  summary: {

    enabled: true,

    title: "Bill Summary",

    subtitle:
      "Pharmacy billing calculation",

    icon: ReceiptLongOutlined,

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

      label: "Grand Total",

      field: "grandTotal",

      type: "currency",

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

    continue: {

      enabled: true,

      label: "Continue to Payment",

      icon: ArrowForwardOutlined,

      disabledWithoutMedicine: true,

    },

  },


  /* =========================================================
     BILLING RULES
     ========================================================= */

  billing: {

    currency: "INR",

    currencySymbol: "₹",

    allowDecimalQuantity: false,

    allowNegativeQuantity: false,

    calculateTax: true,

    calculateDiscount: true,

    requireMedicineSelection: true,

    validateStock: true,

    preventExpiredMedicine: true,

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


export default pharmacyMedicinesConfig;