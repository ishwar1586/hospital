const pharmacyCustomerTypeMock = [
  {
    id: "registered-patient",
    value: "registered-patient",

    title: "Registered Patient",

    description:
      "Search existing patient by UHID, name or mobile",

    enabled: true,
  },

  {
    id: "walk-in-customer",
    value: "walk-in-customer",

    title: "Walk-in Customer",

    description:
      "Create bill for new customer without registration",

    enabled: true,
  },

  {
    id: "self-staff-purchase",
    value: "self-staff-purchase",

    title: "Self / Staff Purchase",

    description:
      "For hospital staff, doctors or internal use",

    enabled: true,
  },
];

export default pharmacyCustomerTypeMock;