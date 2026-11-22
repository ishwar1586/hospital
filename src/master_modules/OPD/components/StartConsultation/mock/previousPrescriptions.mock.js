
/* =========================================
   PREVIOUS PRESCRIPTIONS MOCK DATA
   OPD MODULE
========================================= */

export const previousPrescriptionsMock = [
  {
    id: "PREV001",
    prescriptionId: "PRES-2026-001",
    prescriptionNo: "RX-2026-001",

    patientId: "PAT001",
    patientUHID: "UHID-10001",

    consultationId: "CONS001",
    doctorId: "DOC001",

    prescriptionDate: "2026-10-25",

    doctor: {
      id: "DOC001",
      name: "Dr. Amit Verma",
      department: "General Medicine",
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
      "Previous consultation instructions.",

    followUp: {
      date: "2026-11-01",
      type: "routine",
    },

    status: "saved",
  },

  {
    id: "PREV002",
    prescriptionId: "PRES-2026-002",
    prescriptionNo: "RX-2026-002",

    patientId: "PAT002",
    patientUHID: "UHID-10002",

    consultationId: "CONS002",
    doctorId: "DOC002",

    prescriptionDate: "2026-10-26",

    doctor: {
      id: "DOC002",
      name: "Dr. Neha Gupta",
      department: "General Medicine",
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
      "Previous consultation instructions.",

    followUp: {
      date: "",
      type: "",
    },

    status: "saved",
  },
];

/* =========================================
   GET PREVIOUS PRESCRIPTIONS BY PATIENT
========================================= */

export const getPreviousPrescriptions = (patientId) => {
  if (!patientId) return [];

  return previousPrescriptionsMock
    .filter(
      (prescription) =>
        prescription.patientId === patientId
    )
    .sort(
      (a, b) =>
        new Date(b.prescriptionDate) -
        new Date(a.prescriptionDate)
    );
};

/* =========================================
   GET LATEST PREVIOUS PRESCRIPTION
========================================= */

export const getLatestPreviousPrescription = (patientId) => {
  const prescriptions =
    getPreviousPrescriptions(patientId);

  return prescriptions.length > 0
    ? prescriptions[0]
    : null;
};

/* =========================================
   GET PREVIOUS PRESCRIPTION BY ID
========================================= */

export const getPreviousPrescriptionById = (
  prescriptionId
) => {
  return (
    previousPrescriptionsMock.find(
      (prescription) =>
        prescription.prescriptionId === prescriptionId ||
        prescription.id === prescriptionId
    ) || null
  );
};

/* =========================================
   CHECK PREVIOUS PRESCRIPTION EXISTS
========================================= */

export const hasPreviousPrescription = (patientId) => {
  return getPreviousPrescriptions(patientId).length > 0;
};
