// src/features/IPDManagement/mock/ipd.mock.js

/**
 * ============================================================
 * IPD MANAGEMENT MOCK DATA
 * ============================================================
 *
 * Temporary frontend data until backend/API integration.
 *
 * IMPORTANT:
 * - No UI JSX data should be hardcoded.
 * - Components should consume this mock through services/hooks.
 * - Keep the structure API-friendly so backend integration later
 *   does not require changing the UI architecture.
 * ============================================================
 */


/* ============================================================
 * IPD DASHBOARD STATS
 * ============================================================
 */

export const ipdStatsMock = {
  totalAdmitted: 72,
  totalAdmittedTrend: 5,

  occupiedBeds: 68,
  occupancyPercentage: 85,

  availableBeds: 12,
  availabilityPercentage: 15,

  todayAdmissions: 8,
  todayAdmissionsTrend: 2,

  todayDischarges: 6,
  todayDischargesTrend: 1,
};


/* ============================================================
 * WARDS
 * ============================================================
 */

export const ipdWardsMock = [
  {
    id: "ward-001",
    name: "General Ward",
    code: "GW",
    type: "general",
    totalBeds: 20,
  },

  {
    id: "ward-002",
    name: "Private Room",
    code: "PR",
    type: "private",
    totalBeds: 10,
  },

  {
    id: "ward-003",
    name: "ICU",
    code: "ICU",
    type: "critical-care",
    totalBeds: 12,
  },

  {
    id: "ward-004",
    name: "Maternity Ward",
    code: "MW",
    type: "maternity",
    totalBeds: 15,
  },

  {
    id: "ward-005",
    name: "Surgical Ward",
    code: "SW",
    type: "surgical",
    totalBeds: 15,
  },

  {
    id: "ward-006",
    name: "Medical Ward",
    code: "MDW",
    type: "medical",
    totalBeds: 15,
  },

  {
    id: "ward-007",
    name: "HDW",
    code: "HDW",
    type: "high-dependency",
    totalBeds: 10,
  },

  {
    id: "ward-008",
    name: "Gynecology Ward",
    code: "GYW",
    type: "gynecology",
    totalBeds: 12,
  },

  {
    id: "ward-009",
    name: "Isolation Ward",
    code: "IW",
    type: "isolation",
    totalBeds: 8,
  },
];


/* ============================================================
 * ROOMS
 * ============================================================
 */

export const ipdRoomsMock = [
  {
    id: "room-001",
    roomNumber: "Room-1",
    wardId: "ward-001",
    roomType: "shared",
  },

  {
    id: "room-002",
    roomNumber: "Room-2",
    wardId: "ward-001",
    roomType: "shared",
  },

  {
    id: "room-003",
    roomNumber: "Room-3",
    wardId: "ward-002",
    roomType: "private",
  },

  {
    id: "room-004",
    roomNumber: "Room-ICU",
    wardId: "ward-003",
    roomType: "icu",
  },

  {
    id: "room-005",
    roomNumber: "Room-5",
    wardId: "ward-004",
    roomType: "shared",
  },

  {
    id: "room-006",
    roomNumber: "Room-6",
    wardId: "ward-006",
    roomType: "shared",
  },

  {
    id: "room-007",
    roomNumber: "Room-HD",
    wardId: "ward-007",
    roomType: "hdw",
  },

  {
    id: "room-008",
    roomNumber: "Room-7",
    wardId: "ward-008",
    roomType: "shared",
  },

  {
    id: "room-009",
    roomNumber: "Room-8",
    wardId: "ward-001",
    roomType: "shared",
  },

  {
    id: "room-010",
    roomNumber: "Room-ISO",
    wardId: "ward-009",
    roomType: "isolation",
  },
];


/* ============================================================
 * DOCTORS
 * ============================================================
 */

export const ipdDoctorsMock = [
  {
    id: "doctor-001",
    name: "Dr. Rajesh Sharma",
    department: "General Medicine",
    specialization: "Internal Medicine",
  },

  {
    id: "doctor-002",
    name: "Dr. Neha Kapoor",
    department: "Gynecology",
    specialization: "Gynecology",
  },

  {
    id: "doctor-003",
    name: "Dr. Vikram Patel",
    department: "Critical Care",
    specialization: "Critical Care Medicine",
  },

  {
    id: "doctor-004",
    name: "Dr. Pooja Mehta",
    department: "Obstetrics",
    specialization: "Obstetrics",
  },

  {
    id: "doctor-005",
    name: "Dr. Suresh Nair",
    department: "Surgery",
    specialization: "General Surgery",
  },

  {
    id: "doctor-006",
    name: "Dr. Anil Verma",
    department: "General Medicine",
    specialization: "Internal Medicine",
  },

  {
    id: "doctor-007",
    name: "Dr. Meera Iyer",
    department: "Infectious Disease",
    specialization: "Infectious Diseases",
  },
];


/* ============================================================
 * STATUS OPTIONS
 * ============================================================
 */

export const ipdStatusesMock = [
  {
    id: "admitted",
    label: "Admitted",
    value: "admitted",
  },

  {
    id: "critical",
    label: "Critical",
    value: "critical",
  },

  {
    id: "under-observation",
    label: "Under Observation",
    value: "underObservation",
  },

  {
    id: "pre-discharge",
    label: "Pre-Discharge",
    value: "preDischarge",
  },

  {
    id: "discharged",
    label: "Discharged",
    value: "discharged",
  },

  {
    id: "transferred",
    label: "Transferred",
    value: "transferred",
  },

  {
    id: "cancelled",
    label: "Cancelled",
    value: "cancelled",
  },
];


/* ============================================================
 * ADMITTED PATIENTS
 * ============================================================
 *
 * Structure intentionally keeps related information nested.
 * This makes the data easy to map to future API responses.
 * ============================================================
 */

export const ipdPatientsMock = [
  {
    id: "ipd-000123",

    ipdNumber: "IPD000123",

    patient: {
      id: "patient-001",
      name: "Rohan Singh",
      uhid: "UHID123456",
      initials: "RS",
      age: 45,
      gender: "Male",
    },

    bedAllocation: {
      wardId: "ward-001",
      wardName: "General Ward",
      roomId: "room-001",
      roomNumber: "Room-1",
      bedNumber: "Bed-1",
    },

    doctor: {
      id: "doctor-001",
      name: "Dr. Rajesh Sharma",
      department: "General Medicine",
    },

    admissionDate: "2024-05-12",
    admissionTime: "10:30 AM",

    status: "admitted",

    payer: {
      type: "self",
      name: "Self",
    },
  },

  {
    id: "ipd-000124",

    ipdNumber: "IPD000124",

    patient: {
      id: "patient-002",
      name: "Priya Gupta",
      uhid: "UHID123457",
      initials: "PG",
      age: 32,
      gender: "Female",
    },

    bedAllocation: {
      wardId: "ward-002",
      wardName: "Private Room",
      roomId: "room-003",
      roomNumber: "Room-3",
      bedNumber: "Bed-1",
    },

    doctor: {
      id: "doctor-002",
      name: "Dr. Neha Kapoor",
      department: "Gynecology",
    },

    admissionDate: "2024-05-13",
    admissionTime: "02:15 PM",

    status: "admitted",

    payer: {
      type: "insurance",
      name: "Health Insurance",
    },
  },

  {
    id: "ipd-000125",

    ipdNumber: "IPD000125",

    patient: {
      id: "patient-003",
      name: "Amit Kumar",
      uhid: "UHID123458",
      initials: "AK",
      age: 60,
      gender: "Male",
    },

    bedAllocation: {
      wardId: "ward-003",
      wardName: "ICU",
      roomId: "room-004",
      roomNumber: "Room-ICU",
      bedNumber: "Bed-2",
    },

    doctor: {
      id: "doctor-003",
      name: "Dr. Vikram Patel",
      department: "Critical Care",
    },

    admissionDate: "2024-05-14",
    admissionTime: "08:40 AM",

    status: "critical",

    payer: {
      type: "insurance",
      name: "Health Insurance",
    },
  },

  {
    id: "ipd-000126",

    ipdNumber: "IPD000126",

    patient: {
      id: "patient-004",
      name: "Sneha Sharma",
      uhid: "UHID123459",
      initials: "SS",
      age: 28,
      gender: "Female",
    },

    bedAllocation: {
      wardId: "ward-004",
      wardName: "Maternity Ward",
      roomId: "room-005",
      roomNumber: "Room-5",
      bedNumber: "Bed-3",
    },

    doctor: {
      id: "doctor-004",
      name: "Dr. Pooja Mehta",
      department: "Obstetrics",
    },

    admissionDate: "2024-05-14",
    admissionTime: "11:20 AM",

    status: "admitted",

    payer: {
      type: "self",
      name: "Self",
    },
  },

  {
    id: "ipd-000127",

    ipdNumber: "IPD000127",

    patient: {
      id: "patient-005",
      name: "Deepak Kumar",
      uhid: "UHID123460",
      initials: "DK",
      age: 52,
      gender: "Male",
    },

    bedAllocation: {
      wardId: "ward-005",
      wardName: "Surgical Ward",
      roomId: "room-002",
      roomNumber: "Room-2",
      bedNumber: "Bed-4",
    },

    doctor: {
      id: "doctor-005",
      name: "Dr. Suresh Nair",
      department: "Surgery",
    },

    admissionDate: "2024-05-15",
    admissionTime: "09:10 AM",

    status: "underObservation",

    payer: {
      type: "insurance",
      name: "Health Insurance",
    },
  },

  {
    id: "ipd-000128",

    ipdNumber: "IPD000128",

    patient: {
      id: "patient-006",
      name: "Anjali Singh",
      uhid: "UHID123461",
      initials: "AS",
      age: 40,
      gender: "Female",
    },

    bedAllocation: {
      wardId: "ward-006",
      wardName: "Medical Ward",
      roomId: "room-006",
      roomNumber: "Room-6",
      bedNumber: "Bed-1",
    },

    doctor: {
      id: "doctor-001",
      name: "Dr. Rajesh Sharma",
      department: "General Medicine",
    },

    admissionDate: "2024-05-15",
    admissionTime: "01:25 PM",

    status: "admitted",

    payer: {
      type: "self",
      name: "Self",
    },
  },

  {
    id: "ipd-000129",

    ipdNumber: "IPD000129",

    patient: {
      id: "patient-007",
      name: "Manoj Patel",
      uhid: "UHID123462",
      initials: "MP",
      age: 55,
      gender: "Male",
    },

    bedAllocation: {
      wardId: "ward-007",
      wardName: "HDW",
      roomId: "room-007",
      roomNumber: "Room-HD",
      bedNumber: "Bed-2",
    },

    doctor: {
      id: "doctor-006",
      name: "Dr. Anil Verma",
      department: "General Medicine",
    },

    admissionDate: "2024-05-16",
    admissionTime: "07:50 AM",

    status: "admitted",

    payer: {
      type: "insurance",
      name: "Health Insurance",
    },
  },

  {
    id: "ipd-000130",

    ipdNumber: "IPD000130",

    patient: {
      id: "patient-008",
      name: "Kavita Tiwari",
      uhid: "UHID123463",
      initials: "KT",
      age: 36,
      gender: "Female",
    },

    bedAllocation: {
      wardId: "ward-008",
      wardName: "Gynecology Ward",
      roomId: "room-008",
      roomNumber: "Room-7",
      bedNumber: "Bed-1",
    },

    doctor: {
      id: "doctor-002",
      name: "Dr. Neha Kapoor",
      department: "Gynecology",
    },

    admissionDate: "2024-05-16",
    admissionTime: "10:05 AM",

    status: "preDischarge",

    payer: {
      type: "self",
      name: "Self",
    },
  },

  {
    id: "ipd-000131",

    ipdNumber: "IPD000131",

    patient: {
      id: "patient-009",
      name: "Suresh Lal",
      uhid: "UHID123464",
      initials: "SL",
      age: 70,
      gender: "Male",
    },

    bedAllocation: {
      wardId: "ward-001",
      wardName: "General Ward",
      roomId: "room-009",
      roomNumber: "Room-8",
      bedNumber: "Bed-3",
    },

    doctor: {
      id: "doctor-001",
      name: "Dr. Rajesh Sharma",
      department: "General Medicine",
    },

    admissionDate: "2024-05-16",
    admissionTime: "11:40 AM",

    status: "admitted",

    payer: {
      type: "self",
      name: "Self",
    },
  },

  {
    id: "ipd-000132",

    ipdNumber: "IPD000132",

    patient: {
      id: "patient-010",
      name: "Nisha Patel",
      uhid: "UHID123465",
      initials: "NP",
      age: 25,
      gender: "Female",
    },

    bedAllocation: {
      wardId: "ward-009",
      wardName: "Isolation Ward",
      roomId: "room-010",
      roomNumber: "Room-ISO",
      bedNumber: "Bed-1",
    },

    doctor: {
      id: "doctor-007",
      name: "Dr. Meera Iyer",
      department: "Infectious Disease",
    },

    admissionDate: "2024-05-16",
    admissionTime: "12:20 PM",

    status: "admitted",

    payer: {
      type: "insurance",
      name: "Health Insurance",
    },
  },
];


/* ============================================================
 * BED DATA
 * ============================================================
 */

export const ipdBedsMock = [
  {
    id: "bed-001",
    bedNumber: "Bed-1",
    roomId: "room-001",
    roomNumber: "Room-1",
    wardId: "ward-001",
    wardName: "General Ward",
    status: "occupied",
    patientId: "patient-001",
    ipdNumber: "IPD000123",
  },

  {
    id: "bed-002",
    bedNumber: "Bed-2",
    roomId: "room-001",
    roomNumber: "Room-1",
    wardId: "ward-001",
    wardName: "General Ward",
    status: "available",
    patientId: null,
    ipdNumber: null,
  },

  {
    id: "bed-003",
    bedNumber: "Bed-3",
    roomId: "room-002",
    roomNumber: "Room-2",
    wardId: "ward-001",
    wardName: "General Ward",
    status: "available",
    patientId: null,
    ipdNumber: null,
  },

  {
    id: "bed-004",
    bedNumber: "Bed-4",
    roomId: "room-002",
    roomNumber: "Room-2",
    wardId: "ward-001",
    wardName: "General Ward",
    status: "occupied",
    patientId: "patient-005",
    ipdNumber: "IPD000127",
  },

  {
    id: "bed-005",
    bedNumber: "Bed-1",
    roomId: "room-003",
    roomNumber: "Room-3",
    wardId: "ward-002",
    wardName: "Private Room",
    status: "occupied",
    patientId: "patient-002",
    ipdNumber: "IPD000124",
  },

  {
    id: "bed-006",
    bedNumber: "Bed-2",
    roomId: "room-003",
    roomNumber: "Room-3",
    wardId: "ward-002",
    wardName: "Private Room",
    status: "available",
    patientId: null,
    ipdNumber: null,
  },

  {
    id: "bed-007",
    bedNumber: "Bed-1",
    roomId: "room-004",
    roomNumber: "Room-ICU",
    wardId: "ward-003",
    wardName: "ICU",
    status: "occupied",
    patientId: "patient-003",
    ipdNumber: "IPD000125",
  },

  {
    id: "bed-008",
    bedNumber: "Bed-2",
    roomId: "room-004",
    roomNumber: "Room-ICU",
    wardId: "ward-003",
    wardName: "ICU",
    status: "available",
    patientId: null,
    ipdNumber: null,
  },

  {
    id: "bed-009",
    bedNumber: "Bed-3",
    roomId: "room-004",
    roomNumber: "Room-ICU",
    wardId: "ward-003",
    wardName: "ICU",
    status: "maintenance",
    patientId: null,
    ipdNumber: null,
  },

  {
    id: "bed-010",
    bedNumber: "Bed-3",
    roomId: "room-005",
    roomNumber: "Room-5",
    wardId: "ward-004",
    wardName: "Maternity Ward",
    status: "occupied",
    patientId: "patient-004",
    ipdNumber: "IPD000126",
  },

  {
    id: "bed-011",
    bedNumber: "Bed-1",
    roomId: "room-006",
    roomNumber: "Room-6",
    wardId: "ward-006",
    wardName: "Medical Ward",
    status: "occupied",
    patientId: "patient-006",
    ipdNumber: "IPD000128",
  },

  {
    id: "bed-012",
    bedNumber: "Bed-2",
    roomId: "room-007",
    roomNumber: "Room-HD",
    wardId: "ward-007",
    wardName: "HDW",
    status: "occupied",
    patientId: "patient-007",
    ipdNumber: "IPD000129",
  },

  {
    id: "bed-013",
    bedNumber: "Bed-1",
    roomId: "room-008",
    roomNumber: "Room-7",
    wardId: "ward-008",
    wardName: "Gynecology Ward",
    status: "occupied",
    patientId: "patient-008",
    ipdNumber: "IPD000130",
  },

  {
    id: "bed-014",
    bedNumber: "Bed-3",
    roomId: "room-009",
    roomNumber: "Room-8",
    wardId: "ward-001",
    wardName: "General Ward",
    status: "occupied",
    patientId: "patient-009",
    ipdNumber: "IPD000131",
  },

  {
    id: "bed-015",
    bedNumber: "Bed-1",
    roomId: "room-010",
    roomNumber: "Room-ISO",
    wardId: "ward-009",
    wardName: "Isolation Ward",
    status: "occupied",
    patientId: "patient-010",
    ipdNumber: "IPD000132",
  },
];


/* ============================================================
 * DISCHARGED PATIENTS
 * ============================================================
 */

export const ipdDischargedPatientsMock = [
  {
    id: "discharge-001",
    ipdNumber: "IPD000118",

    patient: {
      id: "patient-011",
      name: "Rajiv Kumar",
      uhid: "UHID123451",
      initials: "RK",
      age: 48,
      gender: "Male",
    },

    doctor: {
      id: "doctor-006",
      name: "Dr. Anil Verma",
      department: "General Medicine",
    },

    wardName: "General Ward",

    admissionDate: "2024-05-08",
    dischargeDate: "2024-05-16",

    dischargeStatus: "discharged",

    dischargeType: "Normal Discharge",
  },

  {
    id: "discharge-002",
    ipdNumber: "IPD000119",

    patient: {
      id: "patient-012",
      name: "Pooja Singh",
      uhid: "UHID123452",
      initials: "PS",
      age: 35,
      gender: "Female",
    },

    doctor: {
      id: "doctor-004",
      name: "Dr. Pooja Mehta",
      department: "Obstetrics",
    },

    wardName: "Maternity Ward",

    admissionDate: "2024-05-10",
    dischargeDate: "2024-05-16",

    dischargeStatus: "discharged",

    dischargeType: "Normal Discharge",
  },
];


/* ============================================================
 * TRANSFER HISTORY
 * ============================================================
 */

export const ipdTransferHistoryMock = [
  {
    id: "transfer-001",

    ipdNumber: "IPD000121",

    patient: {
      id: "patient-013",
      name: "Mohit Sharma",
      uhid: "UHID123453",
      initials: "MS",
    },

    from: {
      wardId: "ward-001",
      wardName: "General Ward",
      roomNumber: "Room-2",
      bedNumber: "Bed-2",
    },

    to: {
      wardId: "ward-003",
      wardName: "ICU",
      roomNumber: "Room-ICU",
      bedNumber: "Bed-1",
    },

    transferredBy: "Dr. Vikram Patel",

    transferDate: "2024-05-15",
    transferTime: "04:30 PM",

    reason: "Patient condition required intensive monitoring.",

    status: "completed",
  },

  {
    id: "transfer-002",

    ipdNumber: "IPD000122",

    patient: {
      id: "patient-014",
      name: "Sunita Verma",
      uhid: "UHID123454",
      initials: "SV",
    },

    from: {
      wardId: "ward-003",
      wardName: "ICU",
      roomNumber: "Room-ICU",
      bedNumber: "Bed-3",
    },

    to: {
      wardId: "ward-001",
      wardName: "General Ward",
      roomNumber: "Room-1",
      bedNumber: "Bed-3",
    },

    transferredBy: "Dr. Rajesh Sharma",

    transferDate: "2024-05-16",
    transferTime: "11:00 AM",

    reason: "Patient condition stabilized.",

    status: "completed",
  },
];


/* ============================================================
 * IPD REPORT DATA
 * ============================================================
 */

export const ipdReportsMock = {
  admissionSummary: {
    totalAdmissions: 48,
    todayAdmissions: 8,
    weeklyAdmissions: 31,
    monthlyAdmissions: 48,
  },

  dischargeSummary: {
    totalDischarges: 39,
    todayDischarges: 6,
    weeklyDischarges: 25,
    monthlyDischarges: 39,
  },

  bedSummary: {
    totalBeds: 80,
    occupiedBeds: 68,
    availableBeds: 12,
    reservedBeds: 0,
    maintenanceBeds: 1,
  },

  wardOccupancy: [
    {
      wardId: "ward-001",
      wardName: "General Ward",
      totalBeds: 20,
      occupiedBeds: 17,
      availableBeds: 3,
      occupancyPercentage: 85,
    },

    {
      wardId: "ward-002",
      wardName: "Private Room",
      totalBeds: 10,
      occupiedBeds: 7,
      availableBeds: 3,
      occupancyPercentage: 70,
    },

    {
      wardId: "ward-003",
      wardName: "ICU",
      totalBeds: 12,
      occupiedBeds: 10,
      availableBeds: 2,
      occupancyPercentage: 83,
    },

    {
      wardId: "ward-004",
      wardName: "Maternity Ward",
      totalBeds: 15,
      occupiedBeds: 12,
      availableBeds: 3,
      occupancyPercentage: 80,
    },
  ],
};


/* ============================================================
 * EXPORT ALL IPD MOCK DATA
 * ============================================================
 *
 * Useful when the service wants a single mock source.
 * ============================================================
 */

export const ipdMockData = {
  stats: ipdStatsMock,

  wards: ipdWardsMock,

  rooms: ipdRoomsMock,

  doctors: ipdDoctorsMock,

  statuses: ipdStatusesMock,

  patients: ipdPatientsMock,

  beds: ipdBedsMock,

  dischargedPatients: ipdDischargedPatientsMock,

  transferHistory: ipdTransferHistoryMock,

  reports: ipdReportsMock,
};