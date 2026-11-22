// src/features/IPDManagement/config/transferPatientConfig.js

/**
 * ============================================================
 * TRANSFER PATIENT CONFIGURATION
 * ============================================================
 *
 * This file contains only UI / workflow configuration.
 *
 * Actual patient, ward, room, bed, hospital and doctor data
 * will come from mock data through the service layer.
 *
 * Flow:
 *
 * Config
 *   ↓
 * Hook
 *   ↓
 * Service
 *   ↓
 * Mock / API
 *
 * ============================================================
 */


/* ============================================================
 * PAGE CONFIG
 * ============================================================
 */

export const TRANSFER_PATIENT_PAGE_CONFIG = {
  title: "Transfer Patient",

  subtitle:
    "Transfer patient to another ward, room or hospital with complete details.",

  closeAction: {
    id: "close-transfer-patient",
    action: "CLOSE_TRANSFER_PATIENT",
    label: "Close",
    tooltip: "Close Transfer Patient",
    ariaLabel: "Close Transfer Patient",
  },
};


/* ============================================================
 * STEPPER CONFIG
 * ============================================================
 */

export const TRANSFER_PATIENT_STEPS = [
  {
    id: "patient-details",
    step: 1,
    key: "patientDetails",
    label: "Patient Details",
    shortLabel: "Patient",
  },

  {
    id: "transfer-to",
    step: 2,
    key: "transferTo",
    label: "Transfer To",
    shortLabel: "Transfer To",
  },

  {
    id: "transfer-information",
    step: 3,
    key: "transferInformation",
    label: "Transfer Information",
    shortLabel: "Information",
  },

  {
    id: "review",
    step: 4,
    key: "review",
    label: "Review & Confirm",
    shortLabel: "Review",
  },
];


/* ============================================================
 * TRANSFER TYPE CONFIG
 * ============================================================
 */

export const TRANSFER_PATIENT_TYPES = [
  {
    id: "within-hospital",
    value: "withinHospital",
    label: "Within Hospital",
    description:
      "Transfer patient to another ward, room or bed within the same hospital.",
  },

  {
    id: "another-hospital",
    value: "anotherHospital",
    label: "To Another Hospital",
    description:
      "Transfer patient to a different hospital.",
  },
];


/* ============================================================
 * WITHIN HOSPITAL FIELD CONFIG
 * ============================================================
 */

export const TRANSFER_WITHIN_HOSPITAL_FIELDS = {
  ward: {
    key: "targetWardId",
    label: "Target Ward",
    placeholder: "Select Ward",
    type: "select",
    required: true,
  },

  room: {
    key: "targetRoomId",
    label: "Target Room",
    placeholder: "Select Room",
    type: "select",
    required: true,
  },

  bed: {
    key: "targetBedId",
    label: "Target Bed",
    placeholder: "Select Bed",
    type: "select",
    required: true,
  },
};


/* ============================================================
 * ANOTHER HOSPITAL FIELD CONFIG
 * ============================================================
 */

export const TRANSFER_ANOTHER_HOSPITAL_FIELDS = {
  hospital: {
    key: "receivingHospitalId",
    label: "Search Hospital",
    placeholder: "Select Hospital",
    type: "select-search",
    required: true,
  },

  department: {
    key: "receivingDepartmentId",
    label: "Receiving Department",
    placeholder: "Select Department",
    type: "select",
    required: true,
  },

  doctor: {
    key: "receivingDoctorId",
    label: "Receiving Doctor",
    placeholder: "Select Doctor",
    type: "select",
    required: false,
  },

  transferMode: {
    key: "transferMode",
    label: "Transfer Mode",
    type: "radio",
    required: true,
  },

  expectedDate: {
    key: "expectedDate",
    label: "Expected Date",
    type: "date",
    required: true,
  },

  expectedTime: {
    key: "expectedTime",
    label: "Expected Time",
    type: "time",
    required: true,
  },

  reason: {
    key: "reason",
    label: "Reason for Transfer",
    placeholder: "Enter reason for transfer...",
    type: "textarea",
    required: true,
    maxLength: 300,
  },
};


/* ============================================================
 * TRANSFER INFORMATION CONFIG
 * ============================================================
 */

export const TRANSFER_INFORMATION_FIELDS = {
  reason: {
    key: "reason",
    label: "Reason for Transfer",
    placeholder: "Select Reason",
    type: "select",
    required: true,
  },

  transferDate: {
    key: "transferDate",
    label: "Transfer Date",
    type: "date",
    required: true,
  },

  transferTime: {
    key: "transferTime",
    label: "Transfer Time",
    type: "time",
    required: true,
  },

  requestedBy: {
    key: "requestedBy",
    label: "Requested By",
    placeholder: "Select Requesting Doctor",
    type: "select",
    required: true,
  },

  remarks: {
    key: "remarks",
    label: "Remarks / Notes",
    placeholder:
      "Enter reason or additional notes for transfer...",
    type: "textarea",
    required: false,
    maxLength: 300,
  },
};


/* ============================================================
 * TRANSFER MODE CONFIG
 * ============================================================
 */

export const TRANSFER_MODES = [
  {
    id: "ambulance-hospital",
    value: "ambulanceHospital",
    label: "Ambulance (Hospital)",
  },

  {
    id: "private-ambulance",
    value: "privateAmbulance",
    label: "Private Ambulance",
  },

  {
    id: "patients-own-vehicle",
    value: "patientsOwnVehicle",
    label: "Patient's Own Vehicle",
  },

  {
    id: "other",
    value: "other",
    label: "Other",
  },
];


/* ============================================================
 * PATIENT DETAILS CONFIG
 * ============================================================
 *
 * These keys tell the UI which patient properties should be
 * displayed.
 *
 * No patient values are hardcoded here.
 * ============================================================
 */

export const TRANSFER_PATIENT_DETAILS_CONFIG = [
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
    id: "phone",
    key: "phone",
    label: "Phone",
    type: "text",
  },

  {
    id: "address",
    key: "address",
    label: "Address",
    type: "text",
  },

  {
    id: "current-ward",
    key: "ward",
    label: "Current Ward",
    type: "text",
  },

  {
    id: "current-room",
    key: "room",
    label: "Room / Bed",
    type: "text",
  },

  {
    id: "attending-doctor",
    key: "doctor",
    label: "Attending Doctor",
    type: "text",
  },

  {
    id: "department",
    key: "department",
    label: "Department",
    type: "text",
  },

  {
    id: "admission-date",
    key: "admissionDate",
    label: "Admission Date",
    type: "date",
  },
];


/* ============================================================
 * VALIDATION CONFIG
 * ============================================================
 */

export const TRANSFER_PATIENT_VALIDATION_CONFIG = {
  transferType: {
    required: true,
  },

  withinHospital: {
    targetWardId: {
      required: true,
    },

    targetRoomId: {
      required: true,
    },

    targetBedId: {
      required: true,
    },
  },

  anotherHospital: {
    receivingHospitalId: {
      required: true,
    },

    receivingDepartmentId: {
      required: true,
    },

    receivingDoctorId: {
      required: false,
    },

    transferMode: {
      required: true,
    },

    expectedDate: {
      required: true,
    },

    expectedTime: {
      required: true,
    },

    reason: {
      required: true,
    },
  },

  transferInformation: {
    reason: {
      required: true,
    },

    transferDate: {
      required: true,
    },

    transferTime: {
      required: true,
    },

    requestedBy: {
      required: true,
    },

    remarks: {
      required: false,
    },
  },
};


/* ============================================================
 * BUTTON CONFIG
 * ============================================================
 */

export const TRANSFER_PATIENT_BUTTON_CONFIG = {
  cancel: {
    id: "cancel-transfer",
    action: "CANCEL_TRANSFER",
    label: "Cancel",
    variant: "outlined",
  },

  back: {
    id: "back-transfer",
    action: "BACK_TRANSFER",
    label: "Back",
    variant: "outlined",
  },

  next: {
    id: "next-transfer",
    action: "NEXT_TRANSFER",
    label: "Next",
    variant: "contained",
  },

  confirm: {
    id: "confirm-transfer",
    action: "CONFIRM_TRANSFER",
    label: "Confirm Transfer",
    variant: "contained",
  },
};


/* ============================================================
 * REVIEW CONFIG
 * ============================================================
 */

export const TRANSFER_PATIENT_REVIEW_CONFIG = {
  patientDetails: {
    id: "patient-details",
    title: "Patient Details",
  },

  currentLocation: {
    id: "current-location",
    title: "Current Location",
  },

  destination: {
    id: "destination",
    title: "Transfer Destination",
  },

  transferInformation: {
    id: "transfer-information",
    title: "Transfer Information",
  },

  transport: {
    id: "transport",
    title: "Transfer Mode",
  },
};


/* ============================================================
 * DEFAULT TRANSFER FORM STATE
 * ============================================================
 */

export const DEFAULT_TRANSFER_PATIENT_FORM = {
  transferType: "withinHospital",

  targetWardId: "",
  targetRoomId: "",
  targetBedId: "",

  receivingHospitalId: "",
  receivingDepartmentId: "",
  receivingDoctorId: "",

  transferMode: "",
  expectedDate: "",
  expectedTime: "",

  reason: "",
  transferDate: "",
  transferTime: "",

  requestedBy: "",
  remarks: "",
};