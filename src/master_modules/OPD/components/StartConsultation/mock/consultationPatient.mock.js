
export const mapOPDPatientToConsultation = (patient) => {
  if (!patient) return null;

  return {
    id: patient.id,

    patient: {
      id: patient.uhid || patient.id,
      name: patient.patientName || "Unknown Patient",
      photo: patient.photo || patient.profileImage || "",
      age: patient.age ?? "—",
      gender: patient.gender || "—",
      uhid: patient.uhid || "—",
      mobile: patient.mobile || "—",
    },

    appointment: {
      id: patient.appointmentId || patient.id,
      tokenNo: patient.tokenNo || "—",
      departmentId: patient.departmentId || "",
      department: patient.department || "—",
      doctorId: patient.doctorId || "",
      doctor: patient.doctor || "—",
      visitType: patient.visitType || "—",
      appointmentTime: patient.appointmentTime || "—",
      checkInTime: patient.checkInTime || "—",
      waitingTime: patient.waitingTime || "—",
      consultationTime: patient.consultationTime || "—",
      status: patient.status || "—",
      appointmentDate: patient.appointmentDate || "",
    },
  };
};

export default mapOPDPatientToConsultation;
