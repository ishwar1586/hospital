
export const opdTableColumnsConfig = [
  { id: "tokenNo", label: "Token No.", field: "tokenNo", minWidth: 105 },
  { id: "uhid", label: "UHID", field: "uhid", minWidth: 125 },
  { id: "patientName", label: "Patient Name", field: "patientName", minWidth: 175 },
  { id: "ageGender", label: "Age / Gender", field: "ageGender", minWidth: 115 },
  { id: "department", label: "Department", field: "department", minWidth: 150 },
  { id: "doctor", label: "Doctor", field: "doctor", minWidth: 170 },
  { id: "appointmentTime", label: "Appointment", field: "appointmentTime", minWidth: 120 },
  { id: "checkInTime", label: "Check-in", field: "checkInTime", minWidth: 110 },
  { id: "status", label: "Status", field: "status", minWidth: 145 },
  { id: "visitType", label: "Visit Type", field: "visitType", minWidth: 115 },
  { id: "actions", label: "Actions", field: "actions", minWidth: 75, align: "center" },
];

export const opdTableSettings = {
  title: "OPD Patient Queue",
  subtitle: "View and manage today's outpatient appointments",
  emptyTitle: "No OPD patients found",
  emptyDescription: "Try changing your department or adjusting your filters.",
  defaultRowsPerPage: 10,
  rowsPerPageOptions: [5, 10, 25, 50],
};


