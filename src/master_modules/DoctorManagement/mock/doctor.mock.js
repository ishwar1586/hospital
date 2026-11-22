import {
  DOCTOR_AVAILABILITY,
  DOCTOR_STATUSES,
} from "../config/doctorConfig";

// ============================================================
// DOCTOR MOCK DATA
// ============================================================

export const DOCTORS_MOCK = [
  {
    id: "DOC001",
    doctorId: "DOC001",

    firstName: "Rajesh",
    lastName: "Sharma",
    name: "Dr. Rajesh Sharma",

    profileImage:
      "https://randomuser.me/api/portraits/men/32.jpg",

    gender: "male",
    dateOfBirth: "1978-05-14",

    department: "general-medicine",
    departmentName: "General Medicine",

    qualification: "MBBS, MD (General Medicine)",

    specialization:
      "Internal Medicine, Preventive Care",

    experience: 15,
    experienceLabel: "15 Years",

    registrationNumber: "UPMC12345",

    consultationFee: 500,

    phone: "+91 9876543210",
    email: "rajesh.sharma@hospital.com",

    address:
      "12 Medical Colony, Civil Lines, Lucknow, Uttar Pradesh",

    availability: DOCTOR_AVAILABILITY.AVAILABLE,
    status: DOCTOR_STATUSES.ACTIVE,

    opdTiming: {
      monday: {
        available: true,
        startTime: "09:00 AM",
        endTime: "05:00 PM",
      },
      tuesday: {
        available: true,
        startTime: "09:00 AM",
        endTime: "05:00 PM",
      },
      wednesday: {
        available: true,
        startTime: "09:00 AM",
        endTime: "05:00 PM",
      },
      thursday: {
        available: true,
        startTime: "09:00 AM",
        endTime: "05:00 PM",
      },
      friday: {
        available: true,
        startTime: "09:00 AM",
        endTime: "05:00 PM",
      },
      saturday: {
        available: true,
        startTime: "09:00 AM",
        endTime: "01:00 PM",
      },
      sunday: {
        available: false,
        startTime: null,
        endTime: null,
      },
    },

    joiningDate: "2011-07-15",

    documents: [
      {
        id: "DOC001-DOC-001",
        name: "MBBS Degree Certificate",
        type: "degree",
        fileName: "rajesh-sharma-mbbs.pdf",
        uploadedAt: "2011-07-20",
        status: "verified",
      },
      {
        id: "DOC001-DOC-002",
        name: "MD Certificate",
        type: "qualification",
        fileName: "rajesh-sharma-md.pdf",
        uploadedAt: "2013-08-12",
        status: "verified",
      },
      {
        id: "DOC001-DOC-003",
        name: "Medical Registration Certificate",
        type: "registration",
        fileName: "rajesh-registration.pdf",
        uploadedAt: "2011-07-22",
        status: "verified",
      },
    ],

    statistics: {
      totalPatients: 1248,
      totalAppointments: 2864,
      completedAppointments: 2712,
      cancelledAppointments: 152,
    },

    createdAt: "2011-07-15T09:00:00",
    updatedAt: "2026-09-01T10:30:00",
  },

  {
    id: "DOC002",
    doctorId: "DOC002",

    firstName: "Priya",
    lastName: "Singh",
    name: "Dr. Priya Singh",

    profileImage:
      "https://randomuser.me/api/portraits/women/44.jpg",

    gender: "female",
    dateOfBirth: "1983-09-21",

    department: "pediatrics",
    departmentName: "Pediatrics",

    qualification: "MBBS, MD (Pediatrics)",

    specialization:
      "Pediatric Medicine, Child Healthcare",

    experience: 10,
    experienceLabel: "10 Years",

    registrationNumber: "UPMC23456",

    consultationFee: 600,

    phone: "+91 9876543211",
    email: "priya.singh@hospital.com",

    address:
      "24 Doctors Enclave, Gomti Nagar, Lucknow, Uttar Pradesh",

    availability: DOCTOR_AVAILABILITY.AVAILABLE,
    status: DOCTOR_STATUSES.ACTIVE,

    opdTiming: {
      monday: {
        available: true,
        startTime: "10:00 AM",
        endTime: "06:00 PM",
      },
      tuesday: {
        available: true,
        startTime: "10:00 AM",
        endTime: "06:00 PM",
      },
      wednesday: {
        available: true,
        startTime: "10:00 AM",
        endTime: "06:00 PM",
      },
      thursday: {
        available: true,
        startTime: "10:00 AM",
        endTime: "06:00 PM",
      },
      friday: {
        available: true,
        startTime: "10:00 AM",
        endTime: "06:00 PM",
      },
      saturday: {
        available: true,
        startTime: "10:00 AM",
        endTime: "02:00 PM",
      },
      sunday: {
        available: false,
        startTime: null,
        endTime: null,
      },
    },

    joiningDate: "2016-06-10",

    documents: [
      {
        id: "DOC002-DOC-001",
        name: "MBBS Degree Certificate",
        type: "degree",
        fileName: "priya-singh-mbbs.pdf",
        uploadedAt: "2016-06-15",
        status: "verified",
      },
      {
        id: "DOC002-DOC-002",
        name: "MD Pediatrics Certificate",
        type: "qualification",
        fileName: "priya-singh-md.pdf",
        uploadedAt: "2017-07-18",
        status: "verified",
      },
    ],

    statistics: {
      totalPatients: 982,
      totalAppointments: 2145,
      completedAppointments: 2048,
      cancelledAppointments: 97,
    },

    createdAt: "2016-06-10T09:00:00",
    updatedAt: "2026-09-02T11:15:00",
  },

  {
    id: "DOC003",
    doctorId: "DOC003",

    firstName: "Amit",
    lastName: "Verma",
    name: "Dr. Amit Verma",

    profileImage:
      "https://randomuser.me/api/portraits/men/41.jpg",

    gender: "male",
    dateOfBirth: "1981-03-17",

    department: "cardiology",
    departmentName: "Cardiology",

    qualification: "MBBS, DM (Cardiology)",

    specialization:
      "Interventional Cardiology, Heart Disease",

    experience: 12,
    experienceLabel: "12 Years",

    registrationNumber: "UPMC34567",

    consultationFee: 900,

    phone: "+91 9876543212",
    email: "amit.verma@hospital.com",

    address:
      "8 Cardiac Care Road, Aliganj, Lucknow, Uttar Pradesh",

    availability: DOCTOR_AVAILABILITY.IN_CONSULTATION,
    status: DOCTOR_STATUSES.ACTIVE,

    opdTiming: {
      monday: {
        available: true,
        startTime: "08:00 AM",
        endTime: "04:00 PM",
      },
      tuesday: {
        available: true,
        startTime: "08:00 AM",
        endTime: "04:00 PM",
      },
      wednesday: {
        available: true,
        startTime: "08:00 AM",
        endTime: "04:00 PM",
      },
      thursday: {
        available: true,
        startTime: "08:00 AM",
        endTime: "04:00 PM",
      },
      friday: {
        available: true,
        startTime: "08:00 AM",
        endTime: "04:00 PM",
      },
      saturday: {
        available: true,
        startTime: "08:00 AM",
        endTime: "12:00 PM",
      },
      sunday: {
        available: false,
        startTime: null,
        endTime: null,
      },
    },

    joiningDate: "2014-04-01",

    documents: [
      {
        id: "DOC003-DOC-001",
        name: "MBBS Degree Certificate",
        type: "degree",
        fileName: "amit-verma-mbbs.pdf",
        uploadedAt: "2014-04-05",
        status: "verified",
      },
      {
        id: "DOC003-DOC-002",
        name: "DM Cardiology Certificate",
        type: "qualification",
        fileName: "amit-verma-dm.pdf",
        uploadedAt: "2015-06-11",
        status: "verified",
      },
      {
        id: "DOC003-DOC-003",
        name: "Medical Registration Certificate",
        type: "registration",
        fileName: "amit-registration.pdf",
        uploadedAt: "2014-04-07",
        status: "verified",
      },
    ],

    statistics: {
      totalPatients: 1105,
      totalAppointments: 2460,
      completedAppointments: 2310,
      cancelledAppointments: 150,
    },

    createdAt: "2014-04-01T09:00:00",
    updatedAt: "2026-09-03T12:00:00",
  },

  {
    id: "DOC004",
    doctorId: "DOC004",

    firstName: "Sneha",
    lastName: "Gupta",
    name: "Dr. Sneha Gupta",

    profileImage:
      "https://randomuser.me/api/portraits/women/68.jpg",

    gender: "female",
    dateOfBirth: "1986-11-09",

    department: "gynecology",
    departmentName: "Gynecology",

    qualification: "MBBS, MS (Obs & Gyn)",

    specialization:
      "Obstetrics, Gynecology, Women's Health",

    experience: 8,
    experienceLabel: "8 Years",

    registrationNumber: "UPMC45678",

    consultationFee: 700,

    phone: "+91 9876543213",
    email: "sneha.gupta@hospital.com",

    address:
      "15 Women's Health Avenue, Hazratganj, Lucknow, Uttar Pradesh",

    availability: DOCTOR_AVAILABILITY.AVAILABLE,
    status: DOCTOR_STATUSES.ACTIVE,

    opdTiming: {
      monday: {
        available: true,
        startTime: "09:00 AM",
        endTime: "04:00 PM",
      },
      tuesday: {
        available: true,
        startTime: "09:00 AM",
        endTime: "04:00 PM",
      },
      wednesday: {
        available: true,
        startTime: "09:00 AM",
        endTime: "04:00 PM",
      },
      thursday: {
        available: true,
        startTime: "09:00 AM",
        endTime: "04:00 PM",
      },
      friday: {
        available: true,
        startTime: "09:00 AM",
        endTime: "04:00 PM",
      },
      saturday: {
        available: true,
        startTime: "09:00 AM",
        endTime: "01:00 PM",
      },
      sunday: {
        available: false,
        startTime: null,
        endTime: null,
      },
    },

    joiningDate: "2018-08-01",

    documents: [
      {
        id: "DOC004-DOC-001",
        name: "MBBS Degree Certificate",
        type: "degree",
        fileName: "sneha-gupta-mbbs.pdf",
        uploadedAt: "2018-08-05",
        status: "verified",
      },
      {
        id: "DOC004-DOC-002",
        name: "MS Certificate",
        type: "qualification",
        fileName: "sneha-gupta-ms.pdf",
        uploadedAt: "2019-07-10",
        status: "verified",
      },
    ],

    statistics: {
      totalPatients: 875,
      totalAppointments: 1940,
      completedAppointments: 1860,
      cancelledAppointments: 80,
    },

    createdAt: "2018-08-01T09:00:00",
    updatedAt: "2026-09-01T09:45:00",
  },

  {
    id: "DOC005",
    doctorId: "DOC005",

    firstName: "Vikram",
    lastName: "Patel",
    name: "Dr. Vikram Patel",

    profileImage:
      "https://randomuser.me/api/portraits/men/52.jpg",

    gender: "male",
    dateOfBirth: "1979-07-28",

    department: "orthopedics",
    departmentName: "Orthopedics",

    qualification: "MBBS, MS (Orthopedics)",

    specialization:
      "Joint Replacement, Sports Injury",

    experience: 14,
    experienceLabel: "14 Years",

    registrationNumber: "UPMC56789",

    consultationFee: 800,

    phone: "+91 9876543214",
    email: "vikram.patel@hospital.com",

    address:
      "32 Bone & Joint Care Centre, Indira Nagar, Lucknow, Uttar Pradesh",

    availability: DOCTOR_AVAILABILITY.IN_SURGERY,
    status: DOCTOR_STATUSES.ACTIVE,

    opdTiming: {
      monday: {
        available: true,
        startTime: "11:00 AM",
        endTime: "06:00 PM",
      },
      tuesday: {
        available: true,
        startTime: "11:00 AM",
        endTime: "06:00 PM",
      },
      wednesday: {
        available: true,
        startTime: "11:00 AM",
        endTime: "06:00 PM",
      },
      thursday: {
        available: true,
        startTime: "11:00 AM",
        endTime: "06:00 PM",
      },
      friday: {
        available: true,
        startTime: "11:00 AM",
        endTime: "06:00 PM",
      },
      saturday: {
        available: true,
        startTime: "11:00 AM",
        endTime: "03:00 PM",
      },
      sunday: {
        available: false,
        startTime: null,
        endTime: null,
      },
    },

    joiningDate: "2012-03-12",

    documents: [
      {
        id: "DOC005-DOC-001",
        name: "MBBS Degree Certificate",
        type: "degree",
        fileName: "vikram-patel-mbbs.pdf",
        uploadedAt: "2012-03-15",
        status: "verified",
      },
      {
        id: "DOC005-DOC-002",
        name: "MS Orthopedics Certificate",
        type: "qualification",
        fileName: "vikram-patel-ms.pdf",
        uploadedAt: "2013-05-18",
        status: "verified",
      },
    ],

    statistics: {
      totalPatients: 1015,
      totalAppointments: 2240,
      completedAppointments: 2110,
      cancelledAppointments: 130,
    },

    createdAt: "2012-03-12T09:00:00",
    updatedAt: "2026-09-04T13:20:00",
  },

  {
    id: "DOC006",
    doctorId: "DOC006",

    firstName: "Neha",
    lastName: "Kapoor",
    name: "Dr. Neha Kapoor",

    profileImage:
      "https://randomuser.me/api/portraits/women/25.jpg",

    gender: "female",
    dateOfBirth: "1984-02-15",

    department: "dermatology",
    departmentName: "Dermatology",

    qualification: "MBBS, MD (Dermatology)",

    specialization:
      "Clinical Dermatology, Cosmetic Dermatology",

    experience: 9,
    experienceLabel: "9 Years",

    registrationNumber: "UPMC67890",

    consultationFee: 650,

    phone: "+91 9876543215",
    email: "neha.kapoor@hospital.com",

    address:
      "18 Skin Care Lane, Gomti Nagar, Lucknow, Uttar Pradesh",

    availability: DOCTOR_AVAILABILITY.AVAILABLE,
    status: DOCTOR_STATUSES.ACTIVE,

    opdTiming: {
      monday: {
        available: true,
        startTime: "10:00 AM",
        endTime: "05:00 PM",
      },
      tuesday: {
        available: true,
        startTime: "10:00 AM",
        endTime: "05:00 PM",
      },
      wednesday: {
        available: true,
        startTime: "10:00 AM",
        endTime: "05:00 PM",
      },
      thursday: {
        available: true,
        startTime: "10:00 AM",
        endTime: "05:00 PM",
      },
      friday: {
        available: true,
        startTime: "10:00 AM",
        endTime: "05:00 PM",
      },
      saturday: {
        available: true,
        startTime: "10:00 AM",
        endTime: "02:00 PM",
      },
      sunday: {
        available: false,
        startTime: null,
        endTime: null,
      },
    },

    joiningDate: "2017-01-16",

    documents: [
      {
        id: "DOC006-DOC-001",
        name: "MBBS Degree Certificate",
        type: "degree",
        fileName: "neha-kapoor-mbbs.pdf",
        uploadedAt: "2017-01-20",
        status: "verified",
      },
      {
        id: "DOC006-DOC-002",
        name: "MD Dermatology Certificate",
        type: "qualification",
        fileName: "neha-kapoor-md.pdf",
        uploadedAt: "2018-06-14",
        status: "verified",
      },
    ],

    statistics: {
      totalPatients: 920,
      totalAppointments: 2080,
      completedAppointments: 1985,
      cancelledAppointments: 95,
    },

    createdAt: "2017-01-16T09:00:00",
    updatedAt: "2026-09-02T10:10:00",
  },

  {
    id: "DOC007",
    doctorId: "DOC007",

    firstName: "Suresh",
    lastName: "Nair",
    name: "Dr. Suresh Nair",

    profileImage:
      "https://randomuser.me/api/portraits/men/67.jpg",

    gender: "male",
    dateOfBirth: "1980-12-04",

    department: "radiology",
    departmentName: "Radiology",

    qualification: "MBBS, MD (Radiology)",

    specialization:
      "Diagnostic Radiology, Imaging",

    experience: 11,
    experienceLabel: "11 Years",

    registrationNumber: "UPMC78901",

    consultationFee: 750,

    phone: "+91 9876543216",
    email: "suresh.nair@hospital.com",

    address:
      "21 Imaging Centre Road, Mahanagar, Lucknow, Uttar Pradesh",

    availability: DOCTOR_AVAILABILITY.AVAILABLE,
    status: DOCTOR_STATUSES.ACTIVE,

    opdTiming: {
      monday: {
        available: true,
        startTime: "08:30 AM",
        endTime: "04:30 PM",
      },
      tuesday: {
        available: true,
        startTime: "08:30 AM",
        endTime: "04:30 PM",
      },
      wednesday: {
        available: true,
        startTime: "08:30 AM",
        endTime: "04:30 PM",
      },
      thursday: {
        available: true,
        startTime: "08:30 AM",
        endTime: "04:30 PM",
      },
      friday: {
        available: true,
        startTime: "08:30 AM",
        endTime: "04:30 PM",
      },
      saturday: {
        available: true,
        startTime: "08:30 AM",
        endTime: "12:30 PM",
      },
      sunday: {
        available: false,
        startTime: null,
        endTime: null,
      },
    },

    joiningDate: "2015-09-07",

    documents: [
      {
        id: "DOC007-DOC-001",
        name: "MBBS Degree Certificate",
        type: "degree",
        fileName: "suresh-nair-mbbs.pdf",
        uploadedAt: "2015-09-10",
        status: "verified",
      },
      {
        id: "DOC007-DOC-002",
        name: "MD Radiology Certificate",
        type: "qualification",
        fileName: "suresh-nair-md.pdf",
        uploadedAt: "2016-07-12",
        status: "verified",
      },
    ],

    statistics: {
      totalPatients: 760,
      totalAppointments: 1760,
      completedAppointments: 1695,
      cancelledAppointments: 65,
    },

    createdAt: "2015-09-07T09:00:00",
    updatedAt: "2026-09-03T09:30:00",
  },

  {
    id: "DOC008",
    doctorId: "DOC008",

    firstName: "Anjali",
    lastName: "Mehta",
    name: "Dr. Anjali Mehta",

    profileImage:
      "https://randomuser.me/api/portraits/women/32.jpg",

    gender: "female",
    dateOfBirth: "1982-06-19",

    department: "pathology",
    departmentName: "Pathology",

    qualification: "MBBS, MD (Pathology)",

    specialization:
      "Clinical Pathology, Histopathology",

    experience: 13,
    experienceLabel: "13 Years",

    registrationNumber: "UPMC89012",

    consultationFee: 550,

    phone: "+91 9876543217",
    email: "anjali.mehta@hospital.com",

    address:
      "10 Diagnostic Block, Aliganj, Lucknow, Uttar Pradesh",

    availability: DOCTOR_AVAILABILITY.ON_LEAVE,
    status: DOCTOR_STATUSES.ACTIVE,

    opdTiming: {
      monday: {
        available: true,
        startTime: "09:00 AM",
        endTime: "05:00 PM",
      },
      tuesday: {
        available: true,
        startTime: "09:00 AM",
        endTime: "05:00 PM",
      },
      wednesday: {
        available: true,
        startTime: "09:00 AM",
        endTime: "05:00 PM",
      },
      thursday: {
        available: true,
        startTime: "09:00 AM",
        endTime: "05:00 PM",
      },
      friday: {
        available: true,
        startTime: "09:00 AM",
        endTime: "05:00 PM",
      },
      saturday: {
        available: true,
        startTime: "09:00 AM",
        endTime: "01:00 PM",
      },
      sunday: {
        available: false,
        startTime: null,
        endTime: null,
      },
    },

    leave: {
      isOnLeave: true,
      from: "2026-09-05",
      to: "2026-09-10",
      reason: "Personal Leave",
    },

    joiningDate: "2013-02-18",

    documents: [
      {
        id: "DOC008-DOC-001",
        name: "MBBS Degree Certificate",
        type: "degree",
        fileName: "anjali-mehta-mbbs.pdf",
        uploadedAt: "2013-02-20",
        status: "verified",
      },
      {
        id: "DOC008-DOC-002",
        name: "MD Pathology Certificate",
        type: "qualification",
        fileName: "anjali-mehta-md.pdf",
        uploadedAt: "2014-06-20",
        status: "verified",
      },
    ],

    statistics: {
      totalPatients: 845,
      totalAppointments: 1910,
      completedAppointments: 1820,
      cancelledAppointments: 90,
    },

    createdAt: "2013-02-18T09:00:00",
    updatedAt: "2026-09-05T08:30:00",
  },

  {
    id: "DOC009",
    doctorId: "DOC009",

    firstName: "Karan",
    lastName: "Malhotra",
    name: "Dr. Karan Malhotra",

    profileImage:
      "https://randomuser.me/api/portraits/men/45.jpg",

    gender: "male",
    dateOfBirth: "1988-01-25",

    department: "ent",
    departmentName: "ENT",

    qualification: "MBBS, MS (ENT)",

    specialization:
      "ENT Surgery, Sinus & Hearing Care",

    experience: 7,
    experienceLabel: "7 Years",

    registrationNumber: "UPMC90123",

    consultationFee: 600,

    phone: "+91 9876543218",
    email: "karan.malhotra@hospital.com",

    address:
      "17 ENT Care Centre, Indira Nagar, Lucknow, Uttar Pradesh",

    availability: DOCTOR_AVAILABILITY.AVAILABLE,
    status: DOCTOR_STATUSES.ACTIVE,

    opdTiming: {
      monday: {
        available: true,
        startTime: "10:00 AM",
        endTime: "06:00 PM",
      },
      tuesday: {
        available: true,
        startTime: "10:00 AM",
        endTime: "06:00 PM",
      },
      wednesday: {
        available: true,
        startTime: "10:00 AM",
        endTime: "06:00 PM",
      },
      thursday: {
        available: true,
        startTime: "10:00 AM",
        endTime: "06:00 PM",
      },
      friday: {
        available: true,
        startTime: "10:00 AM",
        endTime: "06:00 PM",
      },
      saturday: {
        available: true,
        startTime: "10:00 AM",
        endTime: "02:00 PM",
      },
      sunday: {
        available: false,
        startTime: null,
        endTime: null,
      },
    },

    joiningDate: "2019-04-22",

    documents: [
      {
        id: "DOC009-DOC-001",
        name: "MBBS Degree Certificate",
        type: "degree",
        fileName: "karan-malhotra-mbbs.pdf",
        uploadedAt: "2019-04-25",
        status: "verified",
      },
      {
        id: "DOC009-DOC-002",
        name: "MS ENT Certificate",
        type: "qualification",
        fileName: "karan-malhotra-ms.pdf",
        uploadedAt: "2020-06-18",
        status: "verified",
      },
    ],

    statistics: {
      totalPatients: 645,
      totalAppointments: 1490,
      completedAppointments: 1420,
      cancelledAppointments: 70,
    },

    createdAt: "2019-04-22T09:00:00",
    updatedAt: "2026-09-02T14:00:00",
  },

  {
    id: "DOC010",
    doctorId: "DOC010",

    firstName: "Ritu",
    lastName: "Sharma",
    name: "Dr. Ritu Sharma",

    profileImage:
      "https://randomuser.me/api/portraits/women/48.jpg",

    gender: "female",
    dateOfBirth: "1983-08-13",

    department: "ophthalmology",
    departmentName: "Ophthalmology",

    qualification: "MBBS, MS (Ophthalmology)",

    specialization:
      "Cataract Surgery, Glaucoma, Eye Care",

    experience: 10,
    experienceLabel: "10 Years",

    registrationNumber: "UPMC01234",

    consultationFee: 650,

    phone: "+91 9876543219",
    email: "ritu.sharma@hospital.com",

    address:
      "29 Vision Care Road, Hazratganj, Lucknow, Uttar Pradesh",

    availability: DOCTOR_AVAILABILITY.AVAILABLE,
    status: DOCTOR_STATUSES.ACTIVE,

    opdTiming: {
      monday: {
        available: true,
        startTime: "09:30 AM",
        endTime: "05:30 PM",
      },
      tuesday: {
        available: true,
        startTime: "09:30 AM",
        endTime: "05:30 PM",
      },
      wednesday: {
        available: true,
        startTime: "09:30 AM",
        endTime: "05:30 PM",
      },
      thursday: {
        available: true,
        startTime: "09:30 AM",
        endTime: "05:30 PM",
      },
      friday: {
        available: true,
        startTime: "09:30 AM",
        endTime: "05:30 PM",
      },
      saturday: {
        available: true,
        startTime: "09:30 AM",
        endTime: "01:30 PM",
      },
      sunday: {
        available: false,
        startTime: null,
        endTime: null,
      },
    },

    joiningDate: "2016-11-14",

    documents: [
      {
        id: "DOC010-DOC-001",
        name: "MBBS Degree Certificate",
        type: "degree",
        fileName: "ritu-sharma-mbbs.pdf",
        uploadedAt: "2016-11-17",
        status: "verified",
      },
      {
        id: "DOC010-DOC-002",
        name: "MS Ophthalmology Certificate",
        type: "qualification",
        fileName: "ritu-sharma-ms.pdf",
        uploadedAt: "2017-08-21",
        status: "verified",
      },
    ],

    statistics: {
      totalPatients: 890,
      totalAppointments: 2030,
      completedAppointments: 1950,
      cancelledAppointments: 80,
    },

    createdAt: "2016-11-14T09:00:00",
    updatedAt: "2026-09-03T15:20:00",
  },

  {
    id: "DOC011",
    doctorId: "DOC011",

    firstName: "Arjun",
    lastName: "Mehra",
    name: "Dr. Arjun Mehra",

    profileImage:
      "https://randomuser.me/api/portraits/men/71.jpg",

    gender: "male",
    dateOfBirth: "1977-04-08",

    department: "neurology",
    departmentName: "Neurology",

    qualification: "MBBS, MD, DM (Neurology)",

    specialization:
      "Stroke Medicine, Epilepsy, Neurological Disorders",

    experience: 18,
    experienceLabel: "18 Years",

    registrationNumber: "UPMC11223",

    consultationFee: 1000,

    phone: "+91 9876543220",
    email: "arjun.mehra@hospital.com",

    address:
      "5 Neuro Sciences Block, Gomti Nagar, Lucknow, Uttar Pradesh",

    availability: DOCTOR_AVAILABILITY.UNAVAILABLE,
    status: DOCTOR_STATUSES.INACTIVE,

    opdTiming: {
      monday: {
        available: false,
        startTime: null,
        endTime: null,
      },
      tuesday: {
        available: false,
        startTime: null,
        endTime: null,
      },
      wednesday: {
        available: false,
        startTime: null,
        endTime: null,
      },
      thursday: {
        available: false,
        startTime: null,
        endTime: null,
      },
      friday: {
        available: false,
        startTime: null,
        endTime: null,
      },
      saturday: {
        available: false,
        startTime: null,
        endTime: null,
      },
      sunday: {
        available: false,
        startTime: null,
        endTime: null,
      },
    },

    joiningDate: "2008-01-10",

    documents: [
      {
        id: "DOC011-DOC-001",
        name: "MBBS Degree Certificate",
        type: "degree",
        fileName: "arjun-mehra-mbbs.pdf",
        uploadedAt: "2008-01-15",
        status: "verified",
      },
      {
        id: "DOC011-DOC-002",
        name: "DM Neurology Certificate",
        type: "qualification",
        fileName: "arjun-mehra-dm.pdf",
        uploadedAt: "2010-08-20",
        status: "verified",
      },
    ],

    statistics: {
      totalPatients: 1430,
      totalAppointments: 3280,
      completedAppointments: 3100,
      cancelledAppointments: 180,
    },

    createdAt: "2008-01-10T09:00:00",
    updatedAt: "2026-08-20T11:00:00",
  },

  {
    id: "DOC012",
    doctorId: "DOC012",

    firstName: "Pooja",
    lastName: "Agarwal",
    name: "Dr. Pooja Agarwal",

    profileImage:
      "https://randomuser.me/api/portraits/women/56.jpg",

    gender: "female",
    dateOfBirth: "1985-10-30",

    department: "nephrology",
    departmentName: "Nephrology",

    qualification: "MBBS, MD, DM (Nephrology)",

    specialization:
      "Kidney Disease, Dialysis, Renal Care",

    experience: 9,
    experienceLabel: "9 Years",

    registrationNumber: "UPMC22334",

    consultationFee: 850,

    phone: "+91 9876543221",
    email: "pooja.agarwal@hospital.com",

    address:
      "11 Renal Care Block, Mahanagar, Lucknow, Uttar Pradesh",

    availability: DOCTOR_AVAILABILITY.ON_LEAVE,
    status: DOCTOR_STATUSES.ON_LEAVE,

    leave: {
      isOnLeave: true,
      from: "2026-09-04",
      to: "2026-09-12",
      reason: "Medical Leave",
    },

    opdTiming: {
      monday: {
        available: true,
        startTime: "09:00 AM",
        endTime: "03:00 PM",
      },
      tuesday: {
        available: true,
        startTime: "09:00 AM",
        endTime: "03:00 PM",
      },
      wednesday: {
        available: true,
        startTime: "09:00 AM",
        endTime: "03:00 PM",
      },
      thursday: {
        available: true,
        startTime: "09:00 AM",
        endTime: "03:00 PM",
      },
      friday: {
        available: true,
        startTime: "09:00 AM",
        endTime: "03:00 PM",
      },
      saturday: {
        available: true,
        startTime: "09:00 AM",
        endTime: "01:00 PM",
      },
      sunday: {
        available: false,
        startTime: null,
        endTime: null,
      },
    },

    joiningDate: "2017-09-04",

    documents: [
      {
        id: "DOC012-DOC-001",
        name: "MBBS Degree Certificate",
        type: "degree",
        fileName: "pooja-agarwal-mbbs.pdf",
        uploadedAt: "2017-09-08",
        status: "verified",
      },
      {
        id: "DOC012-DOC-002",
        name: "DM Nephrology Certificate",
        type: "qualification",
        fileName: "pooja-agarwal-dm.pdf",
        uploadedAt: "2018-08-12",
        status: "verified",
      },
    ],

    statistics: {
      totalPatients: 710,
      totalAppointments: 1680,
      completedAppointments: 1590,
      cancelledAppointments: 90,
    },

    createdAt: "2017-09-04T09:00:00",
    updatedAt: "2026-09-04T08:45:00",
  },
];

// ============================================================
// DOCTOR STATISTICS MOCK
// ============================================================

export const DOCTOR_STATS_MOCK = {
  totalDoctors: 24,
  activeDoctors: 22,
  onLeave: 2,
  departments: 12,

  trends: {
    totalDoctors: {
      value: 2,
      type: "positive",
      label: "this month",
    },

    activeDoctors: {
      value: 91,
      type: "positive",
      suffix: "%",
      label: "active",
    },

    onLeave: {
      value: 0,
      type: "neutral",
      label: "Currently on leave",
    },

    departments: {
      value: 0,
      type: "neutral",
      label: "Medical specialties",
    },
  },
};

// ============================================================
// DEPARTMENT MOCK DATA
// ============================================================

export const DEPARTMENTS_MOCK = [
  {
    id: "general-medicine",
    name: "General Medicine",
    doctorCount: 3,
    status: "active",
  },

  {
    id: "pediatrics",
    name: "Pediatrics",
    doctorCount: 2,
    status: "active",
  },

  {
    id: "cardiology",
    name: "Cardiology",
    doctorCount: 2,
    status: "active",
  },

  {
    id: "gynecology",
    name: "Gynecology",
    doctorCount: 2,
    status: "active",
  },

  {
    id: "orthopedics",
    name: "Orthopedics",
    doctorCount: 2,
    status: "active",
  },

  {
    id: "dermatology",
    name: "Dermatology",
    doctorCount: 2,
    status: "active",
  },

  {
    id: "radiology",
    name: "Radiology",
    doctorCount: 2,
    status: "active",
  },

  {
    id: "pathology",
    name: "Pathology",
    doctorCount: 2,
    status: "active",
  },

  {
    id: "ent",
    name: "ENT",
    doctorCount: 2,
    status: "active",
  },

  {
    id: "ophthalmology",
    name: "Ophthalmology",
    doctorCount: 2,
    status: "active",
  },

  {
    id: "neurology",
    name: "Neurology",
    doctorCount: 1,
    status: "active",
  },

  {
    id: "nephrology",
    name: "Nephrology",
    doctorCount: 2,
    status: "active",
  },
];

// ============================================================
// MOCK DOCTOR SCHEDULES
// ============================================================

export const DOCTOR_SCHEDULES_MOCK = {
  DOC001: [
    {
      id: "SCH001",
      day: "monday",
      dayLabel: "Monday",
      startTime: "09:00 AM",
      endTime: "05:00 PM",
      status: "available",
    },
    {
      id: "SCH002",
      day: "tuesday",
      dayLabel: "Tuesday",
      startTime: "09:00 AM",
      endTime: "05:00 PM",
      status: "available",
    },
    {
      id: "SCH003",
      day: "wednesday",
      dayLabel: "Wednesday",
      startTime: "09:00 AM",
      endTime: "05:00 PM",
      status: "available",
    },
    {
      id: "SCH004",
      day: "thursday",
      dayLabel: "Thursday",
      startTime: "09:00 AM",
      endTime: "05:00 PM",
      status: "available",
    },
    {
      id: "SCH005",
      day: "friday",
      dayLabel: "Friday",
      startTime: "09:00 AM",
      endTime: "05:00 PM",
      status: "available",
    },
    {
      id: "SCH006",
      day: "saturday",
      dayLabel: "Saturday",
      startTime: "09:00 AM",
      endTime: "01:00 PM",
      status: "available",
    },
    {
      id: "SCH007",
      day: "sunday",
      dayLabel: "Sunday",
      startTime: null,
      endTime: null,
      status: "closed",
    },
  ],
};

// ============================================================
// MOCK ACTIVITY / RECENT EVENTS
// ============================================================

export const DOCTOR_ACTIVITY_MOCK = [
  {
    id: "ACT001",
    doctorId: "DOC001",
    type: "appointment",
    title: "Appointment completed",
    description: "Patient consultation completed",
    timestamp: "2026-09-06T10:30:00",
  },

  {
    id: "ACT002",
    doctorId: "DOC001",
    type: "document",
    title: "Document verified",
    description: "Medical registration certificate verified",
    timestamp: "2026-09-05T14:15:00",
  },

  {
    id: "ACT003",
    doctorId: "DOC001",
    type: "schedule",
    title: "Schedule updated",
    description: "OPD schedule updated for Saturday",
    timestamp: "2026-09-04T11:20:00",
  },
];

// ============================================================
// DEFAULT EXPORT
// ============================================================

export default {
  doctors: DOCTORS_MOCK,
  stats: DOCTOR_STATS_MOCK,
  departments: DEPARTMENTS_MOCK,
  schedules: DOCTOR_SCHEDULES_MOCK,
  activity: DOCTOR_ACTIVITY_MOCK,
};