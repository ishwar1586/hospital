const billingFiltersMock = {
  departments: [
    {
      id: "all",
      label: "All Departments",
      value: "all",
    },
    {
      id: "opd",
      label: "OPD",
      value: "opd",
    },
    {
      id: "ipd",
      label: "IPD",
      value: "ipd",
    },
    {
      id: "pharmacy",
      label: "Pharmacy",
      value: "pharmacy",
    },
    {
      id: "laboratory",
      label: "Laboratory",
      value: "laboratory",
    },
    {
      id: "radiology",
      label: "Radiology",
      value: "radiology",
    },
    {
      id: "operation-theatre",
      label: "Operation Theatre",
      value: "operation-theatre",
    },
  ],

  patientTypes: [
    {
      id: "all",
      label: "All Patient Types",
      value: "all",
    },
    {
      id: "opd",
      label: "OPD Patient",
      value: "opd",
    },
    {
      id: "ipd",
      label: "IPD Patient",
      value: "ipd",
    },
    {
      id: "emergency",
      label: "Emergency",
      value: "emergency",
    },
    {
      id: "day-care",
      label: "Day Care",
      value: "day-care",
    },
  ],

  paymentStatuses: [
    {
      id: "all",
      label: "All Payment Status",
      value: "all",
    },
    {
      id: "paid",
      label: "Paid",
      value: "paid",
    },
    {
      id: "partial",
      label: "Partial",
      value: "partial",
    },
    {
      id: "pending",
      label: "Pending",
      value: "pending",
    },
  ],
};

export default billingFiltersMock;