import {
  PersonOutlineOutlined,
  LocalHospitalOutlined,
  AssignmentOutlined,
  ShieldOutlined,
  PhoneOutlined,
  CalendarMonthOutlined,
  BedOutlined,
  MedicalServicesOutlined,
  CakeOutlined,
  WcOutlined,
  BloodtypeOutlined,
} from "@mui/icons-material";

export const ipdPatientDetailsConfig = {
  header: {
    eyebrow: "IPD BILLING",
    title: "Patient Details",
    description:
      "Verify admission and payer details before adding IPD charges.",
    cancelLabel: "Cancel",
    backLabel: "Back",
  },

  stepper: {
    currentStep: 1,
    steps: [
      {
        id: "patient-details",
        title: "Patient Details",
        subtitle: "Verify patient & admission",
        icon: PersonOutlineOutlined,
      },
      {
        id: "ipd-charges",
        title: "IPD Charges",
        subtitle: "Review service charges",
        icon: AssignmentOutlined,
      },
      {
        id: "billing-payment",
        title: "Billing & Payment",
        subtitle: "Settle final bill",
        icon: ShieldOutlined,
      },
    ],
  },

  patient: {
    defaultName: "Selected Patient",
    defaultStatus: "Admitted",
    banner: {
      admissionDateLabel: "Admission Date",
      uhidLabel: "UHID:",
      ipdNoLabel: "IPD No:",
    },
  },

  emptyState: {
    title: "No patient selected",
    description:
      "Go back and select an admitted patient to continue.",
    buttonLabel: "Select Patient",
  },

  sections: [
    {
      id: "personal-information",
      title: "Personal Information",
      subtitle: "Patient's basic demographic details",
      icon: PersonOutlineOutlined,
      layout: "main",
      fields: [
        {
          key: "patientName",
          label: "Full Name",
          aliases: ["patientName", "name"],
          fallback: "—",
        },
        {
          key: "age",
          label: "Age",
          aliases: ["age"],
          icon: CakeOutlined,
          fallback: "—",
        },
        {
          key: "gender",
          label: "Gender",
          aliases: ["gender"],
          icon: WcOutlined,
          fallback: "—",
        },
        {
          key: "mobile",
          label: "Mobile Number",
          aliases: ["mobile", "phone", "mobileNumber"],
          icon: PhoneOutlined,
          fallback: "—",
        },
        {
          key: "bloodGroup",
          label: "Blood Group",
          aliases: ["bloodGroup"],
          icon: BloodtypeOutlined,
          fallback: "—",
        },
      ],
    },

    {
      id: "admission-information",
      title: "Admission Information",
      subtitle: "Inpatient stay and bed allocation details",
      icon: LocalHospitalOutlined,
      layout: "main",
      fields: [
        {
          key: "ipdNo",
          label: "IPD Number",
          aliases: ["ipdNo", "ipdNumber"],
          fallback: "—",
        },
        {
          key: "admissionDate",
          label: "Admission Date",
          aliases: ["admissionDate", "admittedOn"],
          icon: CalendarMonthOutlined,
          fallback: "—",
        },
        {
          key: "ward",
          label: "Ward",
          aliases: ["ward", "wardName"],
          fallback: "—",
        },
        {
          key: "room",
          label: "Room",
          aliases: ["room", "roomNo"],
          fallback: "—",
        },
        {
          key: "bed",
          label: "Bed",
          aliases: ["bed", "bedNo"],
          icon: BedOutlined,
          fallback: "—",
        },
        {
          key: "department",
          label: "Department",
          aliases: ["department", "departmentName"],
          icon: MedicalServicesOutlined,
          fallback: "—",
        },
      ],
    },

    {
      id: "clinical-information",
      title: "Clinical Information",
      subtitle: "Current treatment and diagnosis summary",
      icon: MedicalServicesOutlined,
      layout: "main",
      fields: [
        {
          key: "diagnosis",
          label: "Provisional Diagnosis",
          aliases: ["diagnosis", "provisionalDiagnosis"],
          fallback: "Not recorded",
        },
        {
          key: "doctor",
          label: "Treating Doctor",
          aliases: ["doctor", "doctorName"],
          fallback: "—",
        },
        {
          key: "department",
          label: "Department",
          aliases: ["department", "departmentName"],
          fallback: "—",
        },
      ],
    },
  ],

  payer: {
    title: "Payer Information",
    subtitle: "Who is responsible for the bill?",
    icon: ShieldOutlined,
    editLabel: "Edit payer",
    typeLabel: "Payer Type",
    referenceLabel: "Policy / Corporate Reference",
    referencePlaceholder: "Enter policy or reference number",
    saveLabel: "Save Payer Details",
    referenceSummaryLabel: "Policy / Reference No.",
    referenceFallback: "Not provided",
    note:
      "Verify insurance eligibility and approval separately before final settlement.",

    options: [
      { label: "Cash / Self Pay", value: "Cash" },
      { label: "Insurance", value: "Insurance" },
      { label: "Corporate", value: "Corporate" },
      { label: "TPA", value: "TPA" },
    ],
  },

  nextCard: {
    icon: AssignmentOutlined,
    title: "Ready for IPD Charges?",
    description:
      "Patient and admission information will be carried forward to the next step.",
    checklist: [
      "Patient selected",
      "Admission details reviewed",
      "Payer type confirmed",
    ],
  },

  footer: {
    backLabel: "Back to Patients",
    stepLabel: "Step 1 of 3",
    continueLabel: "Continue to IPD Charges",
  },
};

export const ipdPatientDetailsIcons = {
  PersonOutlineOutlined,
  LocalHospitalOutlined,
  AssignmentOutlined,
  ShieldOutlined,
  PhoneOutlined,
  CalendarMonthOutlined,
  BedOutlined,
  MedicalServicesOutlined,
  CakeOutlined,
  WcOutlined,
  BloodtypeOutlined,
};