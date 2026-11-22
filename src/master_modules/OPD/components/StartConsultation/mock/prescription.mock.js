
/* =========================================
   PRESCRIPTION MOCK DATA
   OPD MODULE
========================================= */

export const prescriptionMock = [
  {
    id: "PRES-2026-001",
    prescriptionNo: "RX-2026-001",

    patient: {
      id: "PAT001",
      uhid: "UHID-10001",
      name: "Rahul Sharma",
      age: 32,
      gender: "Male",
      phone: "9876543210",
      allergies: [],
    },

    doctor: {
      id: "DOC001",
      name: "Dr. Amit Verma",
      department: "General Medicine",
      registrationNumber: "UPMC-12345",
    },

    consultation: {
      id: "CONS001",
      hospitalName: "City Care Hospital",
      hospitalAddress: "Gorakhpur, Uttar Pradesh",
      hospitalPhone: "0551-2456789",
      date: "2026-10-25",
    },

    medicines: [
      {
        id: "MED001",
        medicineCode: "PCM500",
        name: "Paracetamol",
        genericName: "Paracetamol",
        brandName: "Dolo",
        strength: "500 mg",
        dosageForm: "Tablet",
        composition: "Paracetamol 500 mg",
        manufacturer: "Micro Labs",
        dose: "",
        route: "",
        frequency: "",
        duration: "",
        instruction: "",
      },
    ],

    additionalInstructions:
      "Take adequate rest and maintain hydration.",

    followUp: {
      date: "2026-11-01",
      type: "routine",
    },

    status: "saved",
    pharmacyStatus: "not-sent",

    createdAt: "2026-10-25T10:30:00",
    updatedAt: "2026-10-25T10:30:00",
  },

  {
    id: "PRES-2026-002",
    prescriptionNo: "RX-2026-002",

    patient: {
      id: "PAT002",
      uhid: "UHID-10002",
      name: "Priya Singh",
      age: 28,
      gender: "Female",
      phone: "9876543211",
      allergies: [],
    },

    doctor: {
      id: "DOC002",
      name: "Dr. Neha Gupta",
      department: "General Medicine",
      registrationNumber: "UPMC-67890",
    },

    consultation: {
      id: "CONS002",
      hospitalName: "City Care Hospital",
      hospitalAddress: "Gorakhpur, Uttar Pradesh",
      hospitalPhone: "0551-2456789",
      date: "2026-10-26",
    },

    medicines: [
      {
        id: "MED004",
        medicineCode: "PNT40",
        name: "Pantoprazole",
        genericName: "Pantoprazole",
        brandName: "Pan",
        strength: "40 mg",
        dosageForm: "Tablet",
        composition: "Pantoprazole 40 mg",
        manufacturer: "Alkem Laboratories",
        dose: "",
        route: "",
        frequency: "",
        duration: "",
        instruction: "",
      },
    ],

    additionalInstructions:
      "Follow the doctor's dietary advice.",

    followUp: {
      date: "",
      type: "",
    },

    status: "saved",
    pharmacyStatus: "not-sent",

    createdAt: "2026-10-26T11:15:00",
    updatedAt: "2026-10-26T11:15:00",
  },
];

/* =========================================
   GET ALL PRESCRIPTIONS
========================================= */

export const getAllPrescriptions = () => {
  return prescriptionMock;
};

/* =========================================
   GET PRESCRIPTION BY ID
========================================= */

export const getPrescriptionById = (prescriptionId) => {
  return (
    prescriptionMock.find(
      (prescription) => prescription.id === prescriptionId
    ) || null
  );
};

/* =========================================
   GET PRESCRIPTIONS BY PATIENT ID
========================================= */

export const getPrescriptionsByPatientId = (patientId) => {
  return prescriptionMock.filter(
    (prescription) => prescription.patient.id === patientId
  );
};

/* =========================================
   GET LATEST PRESCRIPTION BY PATIENT
========================================= */

export const getLatestPrescriptionByPatient = (patientId) => {
  const patientPrescriptions =
    getPrescriptionsByPatientId(patientId);

  if (!patientPrescriptions.length) return null;

  return [...patientPrescriptions].sort(
    (a, b) =>
      new Date(b.createdAt) - new Date(a.createdAt)
  )[0];
};

/* =========================================
   GET PRESCRIPTIONS BY STATUS
========================================= */

export const getPrescriptionsByStatus = (status) => {
  return prescriptionMock.filter(
    (prescription) => prescription.status === status
  );
};
