import {
  BedOutlined,
  MedicalServicesOutlined,
  ScienceOutlined,
  LocalPharmacyOutlined,
  BiotechOutlined,
  HealingOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";

export const ipdChargesConfig = {
  header: {
    eyebrow: "IPD BILLING",
    title: "IPD Charges",
    description:
      "Review inpatient services and add charges before final billing.",
    backLabel: "Back",
    cancelLabel: "Cancel",
  },

  // stepper: [
  //   { id: "patient-details", label: "Patient Details" },
  //   { id: "ipd-charges", label: "IPD Charges" },
  //   { id: "billing-payment", label: "Billing & Payment" },
  // ],

  summaryCards: [
    { key: "totalCharges", label: "Total Charges", tone: "blue" },
    { key: "discount", label: "Total Discount", tone: "orange" },
    { key: "advancePaid", label: "Advance Paid", tone: "purple" },
    { key: "netPayable", label: "Net Payable", tone: "green" },
  ],

  categories: [
    { value: "All", label: "All Charges", icon: MedicalServicesOutlined },
    { value: "Room", label: "Room & Bed", icon: BedOutlined },
    { value: "Nursing", label: "Nursing", icon: HealingOutlined },
    { value: "Doctor", label: "Doctor Visits", icon: MedicalServicesOutlined },
    { value: "Procedure", label: "Procedures", icon: BiotechOutlined },
    { value: "Pharmacy", label: "Pharmacy", icon: LocalPharmacyOutlined },
    { value: "Laboratory", label: "Laboratory", icon: ScienceOutlined },
    { value: "Other", label: "Other Services", icon: MoreHorizOutlined },
  ],

  table: {
    title: "Charge Details",
    description: "All recorded services for this admission",
    searchPlaceholder: "Search service, code or category...",
    addButton: "Add Charge",
    emptyTitle: "No charges found",
    emptyDescription: "Add a charge or change your search filters.",
    columns: [
      { key: "serviceDate", label: "Date" },
      { key: "code", label: "Service Code" },
      { key: "serviceName", label: "Service / Description" },
      { key: "category", label: "Category" },
      { key: "quantity", label: "Qty", align: "right" },
      { key: "rate", label: "Rate", align: "right", format: "currency" },
      { key: "discount", label: "Discount", align: "right", format: "currency" },
      { key: "amount", label: "Amount", align: "right", format: "currency" },
    ],
  },

  form: {
    title: "Add IPD Charge",
    description: "Enter the service and billing details.",
    fields: [
      {
        name: "serviceDate",
        label: "Service Date",
        type: "date",
        required: true,
      },
      {
        name: "category",
        label: "Charge Category",
        type: "select",
        required: true,
      },
      {
        name: "code",
        label: "Service Code",
        type: "text",
        placeholder: "e.g. RM-001",
        required: true,
      },
      {
        name: "serviceName",
        label: "Service Name",
        type: "text",
        placeholder: "Enter service or description",
        required: true,
      },
      {
        name: "quantity",
        label: "Quantity",
        type: "number",
        min: 1,
        required: true,
      },
      {
        name: "rate",
        label: "Rate (₹)",
        type: "number",
        min: 0,
        required: true,
      },
      {
        name: "discount",
        label: "Discount (₹)",
        type: "number",
        min: 0,
        required: true,
      },
      {
        name: "notes",
        label: "Notes",
        type: "text",
        placeholder: "Optional notes",
        required: false,
      },
    ],
    cancelLabel: "Cancel",
    saveLabel: "Add Charge",
  },

  footer: {
    backLabel: "Back to Patient Details",
    continueLabel: "Continue to Billing & Payment",
    stepLabel: "Step 2 of 3",
  },

  messages: {
    invalidCharge: "Please enter valid charge details.",
    invalidDiscount: "Discount cannot exceed the charge subtotal.",
  },

  currency: "INR",
  locale: "en-IN",
  pageSize: 5,
};