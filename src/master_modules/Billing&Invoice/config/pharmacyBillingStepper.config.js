const pharmacyBillingStepperConfig = {
  steps: [
    {
      id: "patient-details",
      label: "Patient Details",
      enabled: true,
    },
    {
      id: "medicines",
      label: "Medicines",
      enabled: false,
    },
    {
      id: "payment",
      label: "Payment",
      enabled: false,
    },
    {
      id: "review",
      label: "Review",
      enabled: false,
    },
  ],
};

export default pharmacyBillingStepperConfig;