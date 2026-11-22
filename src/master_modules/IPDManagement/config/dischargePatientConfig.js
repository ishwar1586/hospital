// src/features/IPDManagement/config/dischargePatientConfig.js


/* ============================================================
   DISCHARGE PATIENT PAGE CONFIG
   ============================================================ */

export const DISCHARGE_PATIENT_PAGE_CONFIG = {
  title: "Discharge Patient",

  subtitle:
    "Complete discharge process with essential details.",

  closeAction: {
    id: "close-discharge-patient",
    action: "CLOSE_DISCHARGE_PATIENT",
    label: "Close",
    tooltip: "Close Discharge Patient",
    ariaLabel: "Close Discharge Patient",
  },
};


/* ============================================================
   DISCHARGE PATIENT STEPS
   ============================================================ */

export const DISCHARGE_PATIENT_STEPS = [
  {
    id: "patient-details",
    step: 1,
    key: "patientDetails",
    label: "Patient Details",
    shortLabel: "Patient",
  },

  {
    id: "discharge-information",
    step: 2,
    key: "dischargeInformation",
    label: "Discharge Information",
    shortLabel: "Information",
  },

  {
    id: "review",
    step: 3,
    key: "review",
    label: "Review & Confirm",
    shortLabel: "Review",
  },
];


/* ============================================================
   DISCHARGE TYPES
   ============================================================ */

export const DISCHARGE_TYPES = [
  {
    id: "normal-discharge",
    value: "normalDischarge",
    label: "Normal Discharge",
    description:
      "Patient is discharged after completion of treatment.",
  },

  {
    id: "death",
    value: "death",
    label: "Death",
    description:
      "Discharge process for a deceased patient.",
  },
];


/* ============================================================
   DISCHARGE INFORMATION FIELDS
   ============================================================ */

export const DISCHARGE_INFORMATION_FIELDS = {
  dischargeType: {
    key: "dischargeType",
    label: "Discharge Type",
    type: "radio",
    required: true,
  },

  dischargeDate: {
    key: "dischargeDate",
    label: "Discharge Date",
    type: "date",
    required: true,
  },

  dischargeTime: {
    key: "dischargeTime",
    label: "Discharge Time",
    type: "time",
    required: true,
  },

  dischargeDoctor: {
    key: "dischargeDoctorId",
    label: "Discharge Doctor",
    placeholder: "Select Discharge Doctor",
    type: "select",
    required: true,
  },

  dischargeCondition: {
    key: "dischargeCondition",
    label: "Discharge Condition",
    placeholder: "Select Condition",
    type: "select",
    required: true,
  },

  dischargeReason: {
    key: "dischargeReason",
    label: "Discharge Reason / Diagnosis",
    placeholder:
      "Enter discharge reason or diagnosis...",
    type: "textarea",
    required: true,
    maxLength: 300,
  },
};


/* ============================================================
   FOLLOW-UP INSTRUCTION
   ============================================================ */

export const DISCHARGE_INSTRUCTION_FIELDS = {
  followUpInstructions: {
    key: "followUpInstructions",
    label: "Follow-up Instructions",
    placeholder:
      "Enter follow-up instructions...",
    type: "textarea",
    required: false,
    maxLength: 300,
  },
};


/* ============================================================
   DEATH INFORMATION FIELDS
   ============================================================ */

export const DEATH_INFORMATION_FIELDS = {
  deathDate: {
    key: "deathDate",
    label: "Date of Death",
    type: "date",
    required: true,
  },

  deathTime: {
    key: "deathTime",
    label: "Time of Death",
    type: "time",
    required: true,
  },

  attendingDoctor: {
    key: "attendingDoctorId",
    label: "Attending Doctor",
    placeholder: "Select Attending Doctor",
    type: "select",
    required: true,
  },

  causeOfDeath: {
    key: "causeOfDeath",
    label: "Cause of Death",
    placeholder: "Select Cause of Death",
    type: "select",
    required: true,
  },

  deathDetails: {
    key: "deathDetails",
    label: "Death Details / Remarks",
    placeholder:
      "Enter death details or remarks...",
    type: "textarea",
    required: true,
    maxLength: 300,
  },
};


/* ============================================================
   DEATH — ADDITIONAL INFORMATION
   ============================================================ */

export const DEATH_ADDITIONAL_INFORMATION_FIELDS = {
  placeOfDeath: {
    key: "placeOfDeath",
    label: "Place of Death",
    placeholder: "Select Place of Death",
    type: "select",
    required: true,
  },

  informedTo: {
    key: "informedTo",
    label: "Informed To",
    placeholder: "Select Person Informed",
    type: "select",
    required: true,
  },
};


/* ============================================================
   DISCHARGE MODES / CONDITIONS
   ============================================================ */

export const DISCHARGE_CONDITION_CONFIG = {
  stable: {
    value: "stable",
    label: "Stable",
  },

  improved: {
    value: "improved",
    label: "Improved",
  },

  critical: {
    value: "critical",
    label: "Critical",
  },

  unchanged: {
    value: "unchanged",
    label: "Unchanged",
  },
};


/* ============================================================
   DEATH ADDITIONAL INFORMATION SECTION
   ============================================================ */

export const DEATH_ADDITIONAL_INFORMATION_CONFIG = {
  id: "death-additional-information",

  title: "Additional Information",

  description:
    "Additional information required for death discharge.",

  icon: "monitor_heart",
};


/* ============================================================
   REVIEW CONFIG
   ============================================================ */

export const DISCHARGE_PATIENT_REVIEW_CONFIG = {
  patientDetails: {
    id: "patient-details",
    title: "Patient Details",
  },

  dischargeDetails: {
    id: "discharge-details",
    title: "Discharge Details",
  },

  doctorDetails: {
    id: "doctor-details",
    title: "Doctor Details",
  },

  followUp: {
    id: "follow-up",
    title: "Follow-up Instructions",
  },

  deathDetails: {
    id: "death-details",
    title: "Death Details",
  },

  additionalInformation: {
    id: "additional-information",
    title: "Additional Information",
  },
};


/* ============================================================
   PATIENT DETAILS CONFIG
   ============================================================ */

export const DISCHARGE_PATIENT_DETAILS_CONFIG = [
  {
    id: "patient-name",
    key: "name",
    label: "Patient Name",
    type: "text",
  },

  {
    id: "uhid",
    key: "uhid",
    label: "UHID",
    type: "text",
  },

  {
    id: "ipd-number",
    key: "ipdNumber",
    label: "IPD No",
    type: "text",
  },

  {
    id: "age",
    key: "age",
    label: "Age",
    type: "text",
  },

  {
    id: "gender",
    key: "gender",
    label: "Gender",
    type: "text",
  },

  {
    id: "blood-group",
    key: "bloodGroup",
    label: "Blood Group",
    type: "text",
  },

  {
    id: "ward",
    key: "ward",
    label: "Ward",
    type: "text",
  },

  {
    id: "room",
    key: "room",
    label: "Room / Bed",
    type: "text",
  },

  {
    id: "doctor",
    key: "doctor",
    label: "Attending Doctor",
    type: "text",
  },
];


/* ============================================================
   VALIDATION CONFIG
   ============================================================ */

export const DISCHARGE_PATIENT_VALIDATION_CONFIG = {
  dischargeType: {
    required: true,
  },

  normalDischarge: {
    dischargeDate: {
      required: true,
    },

    dischargeTime: {
      required: true,
    },

    dischargeDoctorId: {
      required: true,
    },

    dischargeCondition: {
      required: true,
    },

    dischargeReason: {
      required: true,
    },

    followUpInstructions: {
      required: false,
    },
  },

  death: {
    deathDate: {
      required: true,
    },

    deathTime: {
      required: true,
    },

    attendingDoctorId: {
      required: true,
    },

    causeOfDeath: {
      required: true,
    },

    deathDetails: {
      required: true,
    },

    placeOfDeath: {
      required: true,
    },

    informedTo: {
      required: true,
    },
  },
};


/* ============================================================
   BUTTON CONFIG
   ============================================================ */

export const DISCHARGE_PATIENT_BUTTON_CONFIG = {
  cancel: {
    id: "cancel-discharge",
    action: "CANCEL_DISCHARGE",
    label: "Cancel",
    variant: "outlined",
  },

  back: {
    id: "back-discharge",
    action: "BACK_DISCHARGE",
    label: "Back",
    variant: "outlined",
  },

  next: {
    id: "next-discharge",
    action: "NEXT_DISCHARGE",
    label: "Next",
    variant: "contained",
  },

  confirm: {
    id: "confirm-discharge",
    action: "CONFIRM_DISCHARGE",
    label: "Confirm Discharge",
    variant: "contained",
  },
};


/* ============================================================
   DEFAULT FORM
   ============================================================ */

export const DEFAULT_DISCHARGE_PATIENT_FORM = {
  dischargeType: "normalDischarge",

  dischargeDate: "",
  dischargeTime: "",

  dischargeDoctorId: "",
  dischargeCondition: "",
  dischargeReason: "",

  followUpInstructions: "",

  deathDate: "",
  deathTime: "",

  attendingDoctorId: "",
  causeOfDeath: "",
  deathDetails: "",

  placeOfDeath: "",
  informedTo: "",
};