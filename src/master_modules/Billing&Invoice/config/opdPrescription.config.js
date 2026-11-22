import {
  PersonOutlined,
  LocalHospitalOutlined,
  CalendarTodayOutlined,
  MedicalInformationOutlined,
  MedicationOutlined,
} from "@mui/icons-material";

const opdPrescriptionConfig = {
  meta: {
    enabled: true,

    items: [
      {
        id: "patient",
        label: "Patient",
        field: "patientName",
        icon: PersonOutlined,
        fallback: "-",
      },
      {
        id: "uhid",
        label: "UHID",
        field: "uhid",
        icon: LocalHospitalOutlined,
        fallback: "-",
      },
      {
        id: "prescription-date",
        label: "Prescription Date",
        field: "prescriptionDate",
        icon: CalendarTodayOutlined,
        fallback: "-",
      },
    ],
  },

  doctor: {
    enabled: true,

    title: "Doctor Information",

    fields: {
      name: {
        label: "Doctor",
        field: "doctor.name",
        fallback: "-",
      },

      speciality: {
        label: "Speciality",
        field: "doctor.speciality",
        fallback: "-",
      },

      registrationNumber: {
        label: "Registration No.",
        field: "doctor.registrationNumber",
        fallback: "-",
      },
    },

    icon: PersonOutlined,
  },

  diagnosis: {
    enabled: true,

    title: "Diagnosis",

    field: "diagnosis",

    emptyMessage: "No diagnosis recorded",

    icon: MedicalInformationOutlined,
  },

  medicines: {
    enabled: true,

    title: "Prescribed Medicines",

    subtitle: "Medicines prescribed during consultation",

    countLabel: "Medicines",

    emptyTitle: "No medicines prescribed",

    emptyMessage:
      "No medicine has been added to this prescription.",

    icon: MedicationOutlined,

    fields: [
      {
        id: "medicine",
        label: "Medicine",
        field: "medicineName",
      },
      {
        id: "dosage",
        label: "Dosage",
        field: "dosage",
      },
      {
        id: "frequency",
        label: "Frequency",
        field: "frequency",
      },
      {
        id: "duration",
        label: "Duration",
        field: "duration",
      },
      {
        id: "instructions",
        label: "Instructions",
        field: "instructions",
      },
    ],
  },

  layout: {
    metaColumns: 3,

    sectionsGap: 16,

    responsive: {
      tablet: {
        metaColumns: 1,
      },

      mobile: {
        metaColumns: 1,
      },
    },
  },
};

export default opdPrescriptionConfig;