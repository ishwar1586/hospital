export const ageingSummaryMock = [
  {
    id: 1,
    bucket: "0-30 Days",
    invoiceCount: 12,
    amount: 45250,
  },

  {
    id: 2,
    bucket: "31-60 Days",
    invoiceCount: 8,
    amount: 28750,
  },

  {
    id: 3,
    bucket: "61-90 Days",
    invoiceCount: 5,
    amount: 18340,
  },

  {
    id: 4,
    bucket: "90+ Days",
    invoiceCount: 3,
    amount: 12780,
  },
];

export const ageingInvoiceMock = [
  {
    id: 1,
    invoiceNo: "INV-240501",
    invoiceDate: "01 May 2024",
    dueDate: "31 May 2024",
    amount: "₹ 12,500",
    ageingBucket: "0-30 Days",
  },

  {
    id: 2,
    invoiceNo: "INV-240487",
    invoiceDate: "15 Apr 2024",
    dueDate: "15 May 2024",
    amount: "₹ 8,750",
    ageingBucket: "31-60 Days",
  },

  {
    id: 3,
    invoiceNo: "INV-240455",
    invoiceDate: "01 Mar 2024",
    dueDate: "31 Mar 2024",
    amount: "₹ 18,340",
    ageingBucket: "61-90 Days",
  },

  {
    id: 4,
    invoiceNo: "INV-240401",
    invoiceDate: "10 Feb 2024",
    dueDate: "10 Mar 2024",
    amount: "₹ 12,780",
    ageingBucket: "90+ Days",
  },
];


export default  ageingSummaryMock;