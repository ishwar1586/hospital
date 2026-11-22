// export const doctorDashboardMock = {
//   stats: {
//     todayAppointments: 14,
//     completed: 9,
//     pending: 5,
//   },

//   todayAppointments: [
//     {
//       id: "apt_1",
//       patientName: "Rohit Sharma",
//       time: "10:00 AM",
//       status: "Pending",
//     },
//     {
//       id: "apt_2",
//       patientName: "Anita Verma",
//       time: "11:30 AM",
//       status: "Completed",
//     },
//   ],
// };
// export default doctorDashboardMock;
export const doctorDashboardMock ={
stats: {
  appointments: 33,
  surgeries: 3,
  roomVisits: 12,
},
 profile: {
    name: "Dr. Ashton Cox",
    department: "Orthopedics",
    hospital: "Restar Hospital",
    avatar: "/images/doctor.jpg",   // public/images
    patients: 3897,
    limit: 8000,
    surgery: 578,
    consultation: 387,
    appointments: 4257,
  },

  analytics: {
  appointments: {
    scheduled: 28,
    completed: 24,
    cancelled: 4,
  },
  performance: {
    avgConsultation: 18,
    patientsPerDay: 24,
    weekly: [
    { day: "Sun", patients: 19 },
    { day: "Mon", patients: 20 },
    { day: "Tue", patients: 28 },
    { day: "Wed", patients: 24 },
    { day: "Thu", patients: 18 },
    { day: "Fri", patients: 26 },
    { day: "Sat", patients: 22 },
  ],
  },
  revenue: {
  total: 4250,
  breakdown: {
    walkins: 1850,
    followups: 1200,
    online: 1200,
  },
  trend: [
    { day: "Mon", walkins: 100, followups: 200, online: 180 },
    { day: "Tue", walkins: 200, followups: 260, online: 220 },
    { day: "Wed", walkins: 380, followups: 640, online: 310 },
    { day: "Thu", walkins: 120, followups: 310, online: 280 },
    { day: "Fri", walkins: 260, followups: 290, online: 260 },
    { day: "Sat", walkins: 400, followups: 250, online: 230 },
    { day: "Sun", walkins: 370, followups: 230, online: 210 },
  ],
}

},

};

export default doctorDashboardMock;