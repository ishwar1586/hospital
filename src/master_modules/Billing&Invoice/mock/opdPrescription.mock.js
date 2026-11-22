const opdPrescriptionMock = {
  id: "RX-2024-0001",

  patientId: "PAT-0001",

  patientName: "Rohan Kumar",

  uhid: "UHID123456",

  prescriptionDate: "16 May 2024",

  doctor: {
    id: "DOC-0001",
    name: "Dr. Amit Sharma",
    speciality: "General Medicine",
    registrationNumber: "UPMC-2024-00125",
  },

  diagnosis: "Acute fever with common cold",

  medicines: [
    {
      id: "MED-0001",
      medicineName: "Paracetamol 500mg",
      dosage: "500 mg",
      frequency: "1-0-1",
      duration: "5 Days",
      instructions: "After food",
    },

    {
      id: "MED-0002",
      medicineName: "Cetirizine 10mg",
      dosage: "10 mg",
      frequency: "0-0-1",
      duration: "5 Days",
      instructions: "At bedtime",
    },

    {
      id: "MED-0003",
      medicineName: "Azithromycin 500mg",
      dosage: "500 mg",
      frequency: "1-0-0",
      duration: "3 Days",
      instructions: "Before food",
    },
  ],
};

export default opdPrescriptionMock;