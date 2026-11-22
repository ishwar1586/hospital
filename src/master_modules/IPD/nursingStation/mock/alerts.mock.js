const alerts = [
  {
    id: 1,
    type: "Critical",
    title: "Critical Patient Alert",
    message:
      "Rahul Sharma BP dropped below threshold.",
    time: "5 mins ago",
  },

  {
    id: 2,
    type: "Warning",
    title: "Medication Due",
    message:
      "Medication pending for Priya Patel.",
    time: "15 mins ago",
  },

  {
    id: 3,
    type: "Info",
    title: "Doctor Round Scheduled",
    message:
      "Dr. Amit Kumar round at 11:00 AM.",
    time: "30 mins ago",
  },

  {
    id: 4,
    type: "Warning",
    title: "Vitals Pending",
    message:
      "Vitals not recorded for 3 patients.",
    time: "45 mins ago",
  },
];

export default alerts;