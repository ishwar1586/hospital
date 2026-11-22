export const pharmacyDashboardMock = {
  pharmacist: {
    name: "Rahul Mehta",
    license: "PH-45879",
    shift: "Morning Shift",
  },

  stats: {
    totalMedicines: 1240,
    lowStock: 24,
    todaySales: 4250,
  },

  analytics: {
    weeklySales: [
      { day: "Mon", value: 400 },
      { day: "Tue", value: 520 },
      { day: "Wed", value: 610 },
      { day: "Thu", value: 450 },
      { day: "Fri", value: 700 },
    ],
  },
};

export default pharmacyDashboardMock;