export const paymentHistoryMock = [
  {
    id: 1,

    paymentDate: "10 May 2024",

    paymentMode: "NEFT",

    referenceNo: "PAY-24051001",

    amount: 25000,

    receivedBy: "Accounts Team",

    status: "Success",
  },

  {
    id: 2,

    paymentDate: "05 May 2024",

    paymentMode: "RTGS",

    referenceNo: "PAY-24050502",

    amount: 45000,

    receivedBy: "Accounts Team",

    status: "Success",
  },

  {
    id: 3,

    paymentDate: "28 Apr 2024",

    paymentMode: "Cheque",

    referenceNo: "PAY-24042803",

    amount: 18000,

    receivedBy: "Admin",

    status: "Pending",
  },

  {
    id: 4,

    paymentDate: "20 Apr 2024",

    paymentMode: "Cash",

    referenceNo: "PAY-24042004",

    amount: 12000,

    receivedBy: "Cashier",

    status: "Success",
  },
];


export default  paymentHistoryMock;