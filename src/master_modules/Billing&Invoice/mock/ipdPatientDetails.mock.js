export const ipdPatientDetailsMock = {
  patientName: "Rahul Sharma",
  uhid: "UHID-2026-00124",
  ipdNo: "IPD-2026-0045",
  age: 42,
  gender: "Male",
  mobile: "9876543210",
  bloodGroup: "B+",
  admissionDate: "2026-10-12",
  ward: "General Ward",
  room: "G-102",
  bed: "B-04",
  doctor: "Dr. Amit Verma",
  department: "General Medicine",
  diagnosis: "Acute gastroenteritis",
  status: "Admitted",
  payerType: "Insurance",
  payerReference: "POL-2026-1024",
};

// Use this record only for local UI testing.
// In production, pass the selected patient through the patient prop.
export const ipdPatientDetailsMockPayer = {
  payerType: "Cash",
  payerReference: "",
};