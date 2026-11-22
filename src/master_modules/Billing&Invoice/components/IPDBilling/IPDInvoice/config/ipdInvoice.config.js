
const ipdInvoiceConfig = {
  page: {
    title: "IPD Invoice",
    currency: "INR",
    locale: "en-IN",
  },

  hospital: {
    name: "",
    tagline: "",
    address: "",
    phone: "",
    email: "",
    gstin: "",
    logo: "",
  },

  header: {
    invoiceTitle: "IPD FINAL INVOICE",
    invoiceSubtitle: "Inpatient Billing Statement",
    showQrPlaceholder: false,
  },

  labels: {
    invoiceNumber: "Invoice No.",
    invoiceDate: "Invoice Date",
    admissionNumber: "Admission No.",
    uhid: "UHID",
    patientName: "Patient Name",
    ageGender: "Age / Gender",
    mobile: "Mobile",
    address: "Address",
    doctor: "Consultant",
    department: "Department",
    ward: "Ward",
    room: "Room",
    bed: "Bed",
    admissionDate: "Admission Date",
    dischargeDate: "Discharge Date",
    payer: "Payer Type",
    paymentStatus: "Payment",
    description: "Description",
    category: "Category",
    quantity: "Qty",
    rate: "Rate (₹)",
    amount: "Amount (₹)",
  },

  summary: {
    subtotal: "Subtotal",
    discount: "Discount",
    advance: "Advance Paid",
    previousPayments: "Previous Payments",
    tax: "GST / Tax",
    roundOff: "Round Off",
    total: "Total Amount",
    paid: "Total Paid",
    balance: "Balance Due",
  },

  footer: {
    thankYou: "Thank you for choosing our hospital.",
    note: "Please retain this invoice for your records.",
    signatureLabel: "Authorized Signatory",
  },

  actions: {
    newBill: "New Bill",
    download: "Download",
    print: "Print Invoice",
    close: "Close",
  },
};

export default ipdInvoiceConfig;
