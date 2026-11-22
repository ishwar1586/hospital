
export const UI_CONFIG = {
  ADMIN: {
    header: {
      title: "Admin Dashboard",
    },
    sidebar: [
      { label: "Dashboard", path: "/admin/dashboard" },
      { label: "Doctors", path: "/admin/doctors" },
      { label: "Patients", path: "/admin/patients" },
      { label: "Appointments", path: "/admin/appointments" },
    ],
  },

  DOCTOR: {
    header: {
      title: "Doctor Panel",
    },
    sidebar: [
      { label: "Dashboard", path: "/doctor/dashboard" },
      { label: "My Appointments", path: "/doctor/appointments" },
      { label: "Patients", path: "/doctor/patients" },
    ],
  },

  RECEPTIONIST: {
    header: {
      title: "Receptionist Panel",
    },
    sidebar: [
      { label: "Dashboard", path: "/receptionist/dashboard" },
      { label: "Patient Registration", path: "/receptionist/patients" },
      { label: "Appointments", path: "/receptionist/appointments" },
    ],
  },
};
