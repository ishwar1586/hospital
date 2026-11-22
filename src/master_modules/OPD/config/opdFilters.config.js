
export const opdFiltersConfig = {
  labels: {
    appointmentDate: "Appointment date",
    doctor: "Doctor",
    visitType: "Visit type",
    status: "Appointment status",
    search: "Search patients",
  },

  placeholders: {
    doctor: "All Doctors",
    visitType: "All Visit Types",
    status: "All Status",
    search: "Search by name, UHID, mobile, token no...",
  },

  buttons: {
    search: "Search",
    clear: "Clear",
  },

  visitTypes: [
    { value: "all", label: "All Visit Types" },
    { value: "appointment", label: "Appointment" },
    { value: "walk-in", label: "Walk-in" },
  ],

  statuses: [
    { value: "all", label: "All Status" },
    { value: "scheduled", label: "Scheduled" },
    { value: "waiting", label: "Waiting" },
    { value: "checked-in", label: "Checked In" },
    { value: "in-consultation", label: "In Consultation" },
    { value: "consulted", label: "Consulted" },
    { value: "no-show", label: "No Show" },
    { value: "cancelled", label: "Cancelled" },
  ],
};



export default opdFiltersConfig;