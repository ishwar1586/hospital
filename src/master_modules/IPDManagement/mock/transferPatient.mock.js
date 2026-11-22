// src/features/IPDManagement/mock/transferPatient.mock.js

/**
 * ============================================================
 * TRANSFER PATIENT MOCK DATA
 * ============================================================
 *
 * Temporary data source for the Transfer Patient workflow.
 *
 * Important:
 *
 * 1. Patient data does NOT live here.
 * 2. Existing IPD wards / rooms / beds are NOT duplicated here.
 * 3. Existing IPD doctors are NOT duplicated here.
 *
 * Existing IPD data will come through:
 *
 * ipdService
 *     ↓
 * ipdMockData
 *
 * This file only contains data that is specific to the
 * Transfer Patient workflow.
 *
 * Current:
 *     Service -> Mock
 *
 * Future:
 *     Service -> Backend API
 *
 * ============================================================
 */


/* ============================================================
 * TRANSFER REASONS
 * ============================================================
 */

export const transferReasons = [
  {
    id: "clinical-requirement",
    value: "clinicalRequirement",
    label: "Clinical Requirement",
  },

  {
    id: "specialist-care",
    value: "specialistCare",
    label: "Specialist Care",
  },

  {
    id: "higher-level-care",
    value: "higherLevelCare",
    label: "Higher Level of Care",
  },

  {
    id: "patient-condition",
    value: "patientCondition",
    label: "Patient Condition",
  },

  {
    id: "bed-availability",
    value: "bedAvailability",
    label: "Bed Availability",
  },

  {
    id: "patient-request",
    value: "patientRequest",
    label: "Patient / Attendant Request",
  },

  {
    id: "hospital-request",
    value: "hospitalRequest",
    label: "Hospital Request",
  },

  {
    id: "other",
    value: "other",
    label: "Other",
  },
];


/* ============================================================
 * RECEIVING HOSPITALS
 * ============================================================
 *
 * This represents hospitals available when the user selects:
 *
 * "To Another Hospital"
 *
 * Actual hospital data will come from API later.
 * ============================================================
 */

export const receivingHospitals = [
  {
    id: "hospital-001",

    name: "Apollo Hospitals",

    code: "APH-LKO",

    city: "Lucknow",

    state: "Uttar Pradesh",

    address:
      "Sector-11, Lucknow, Uttar Pradesh",

    phone: "+91 522 123 4567",

    pincode: "226010",

    departments: [
      {
        id: "dept-001",
        name: "General Medicine",
        code: "GM",
      },

      {
        id: "dept-002",
        name: "Cardiology",
        code: "CARD",
      },

      {
        id: "dept-003",
        name: "Orthopedics",
        code: "ORTHO",
      },

      {
        id: "dept-004",
        name: "Neurology",
        code: "NEURO",
      },

      {
        id: "dept-005",
        name: "General Surgery",
        code: "GS",
      },
    ],

    doctors: [
      {
        id: "doctor-001",
        name: "Dr. Rajesh Sharma",
        departmentId: "dept-001",
        specialization: "General Medicine",
      },

      {
        id: "doctor-002",
        name: "Dr. Ankit Verma",
        departmentId: "dept-002",
        specialization: "Cardiology",
      },

      {
        id: "doctor-003",
        name: "Dr. Neha Singh",
        departmentId: "dept-003",
        specialization: "Orthopedics",
      },

      {
        id: "doctor-004",
        name: "Dr. Amit Srivastava",
        departmentId: "dept-004",
        specialization: "Neurology",
      },
    ],
  },

  {
    id: "hospital-002",

    name: "Medanta Hospital",

    code: "MED-LKO",

    city: "Lucknow",

    state: "Uttar Pradesh",

    address:
      "Gomti Nagar, Lucknow, Uttar Pradesh",

    phone: "+91 522 234 5678",

    pincode: "226010",

    departments: [
      {
        id: "dept-006",
        name: "General Medicine",
        code: "GM",
      },

      {
        id: "dept-007",
        name: "Cardiology",
        code: "CARD",
      },

      {
        id: "dept-008",
        name: "Nephrology",
        code: "NEPHRO",
      },

      {
        id: "dept-009",
        name: "Pulmonology",
        code: "PULMO",
      },
    ],

    doctors: [
      {
        id: "doctor-005",
        name: "Dr. Vivek Gupta",
        departmentId: "dept-006",
        specialization: "General Medicine",
      },

      {
        id: "doctor-006",
        name: "Dr. Priya Kapoor",
        departmentId: "dept-007",
        specialization: "Cardiology",
      },

      {
        id: "doctor-007",
        name: "Dr. Rohit Malhotra",
        departmentId: "dept-008",
        specialization: "Nephrology",
      },

      {
        id: "doctor-008",
        name: "Dr. Shweta Agarwal",
        departmentId: "dept-009",
        specialization: "Pulmonology",
      },
    ],
  },

  {
    id: "hospital-003",

    name: "Max Super Speciality Hospital",

    code: "MAX-LKO",

    city: "Lucknow",

    state: "Uttar Pradesh",

    address:
      "Shaheed Path, Lucknow, Uttar Pradesh",

    phone: "+91 522 345 6789",

    pincode: "226025",

    departments: [
      {
        id: "dept-010",
        name: "General Medicine",
        code: "GM",
      },

      {
        id: "dept-011",
        name: "Cardiology",
        code: "CARD",
      },

      {
        id: "dept-012",
        name: "Critical Care",
        code: "CCU",
      },

      {
        id: "dept-013",
        name: "Neurology",
        code: "NEURO",
      },
    ],

    doctors: [
      {
        id: "doctor-009",
        name: "Dr. Sandeep Mishra",
        departmentId: "dept-010",
        specialization: "General Medicine",
      },

      {
        id: "doctor-010",
        name: "Dr. Karan Mehta",
        departmentId: "dept-011",
        specialization: "Cardiology",
      },

      {
        id: "doctor-011",
        name: "Dr. Nitin Saxena",
        departmentId: "dept-012",
        specialization: "Critical Care",
      },

      {
        id: "doctor-012",
        name: "Dr. Pooja Tiwari",
        departmentId: "dept-013",
        specialization: "Neurology",
      },
    ],
  },
];


/* ============================================================
 * DEFAULT EXPORT
 * ============================================================
 */

export const transferPatientMock = {
  transferReasons,
  receivingHospitals,
};

export default transferPatientMock;