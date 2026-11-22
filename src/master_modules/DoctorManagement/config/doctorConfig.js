/**
 * Doctor Management Configuration
 *
 * Central configuration for the Doctor Management module.
 * UI components should consume these values instead of
 * hardcoding labels, statuses, filters, tabs, columns, etc.
 */

// ============================================================
// MODULE CONFIGURATION
// ============================================================

export const DOCTOR_MODULE_CONFIG = {
  moduleName: "Doctor Management",
  entityName: "Doctor",
  entityNamePlural: "Doctors",

  pagination: {
    defaultPage: 1,
    defaultPageSize: 10,
    pageSizeOptions: [10, 20, 30, 50],
  },

  search: {
    placeholder: "Search by name, department, qualification...",
  },
};

// ============================================================
// DOCTOR TABS
// ============================================================

export const DOCTOR_TABS = [
  {
    id: "all",
    label: "All Doctors",
    filter: "all",
  },
  {
    id: "active",
    label: "Active",
    filter: "active",
  },
  {
    id: "on-leave",
    label: "On Leave",
    filter: "on-leave",
  },
  {
    id: "inactive",
    label: "Inactive",
    filter: "inactive",
  },
];

// ============================================================
// DOCTOR STATUS
// ============================================================

export const DOCTOR_STATUSES = {
  ACTIVE: "active",
  INACTIVE: "inactive",
  ON_LEAVE: "on-leave",
};

export const DOCTOR_STATUS_CONFIG = {
  [DOCTOR_STATUSES.ACTIVE]: {
    label: "Active",
    variant: "success",
  },

  [DOCTOR_STATUSES.INACTIVE]: {
    label: "Inactive",
    variant: "neutral",
  },

  [DOCTOR_STATUSES.ON_LEAVE]: {
    label: "On Leave",
    variant: "warning",
  },
};

// ============================================================
// DOCTOR AVAILABILITY
// ============================================================

export const DOCTOR_AVAILABILITY = {
  AVAILABLE: "available",
  IN_CONSULTATION: "in-consultation",
  IN_SURGERY: "in-surgery",
  ON_LEAVE: "on-leave",
  UNAVAILABLE: "unavailable",
};

export const DOCTOR_AVAILABILITY_CONFIG = {
  [DOCTOR_AVAILABILITY.AVAILABLE]: {
    label: "Available",
    variant: "success",
  },

  [DOCTOR_AVAILABILITY.IN_CONSULTATION]: {
    label: "In Consultation",
    variant: "info",
  },

  [DOCTOR_AVAILABILITY.IN_SURGERY]: {
    label: "In Surgery",
    variant: "danger",
  },

  [DOCTOR_AVAILABILITY.ON_LEAVE]: {
    label: "On Leave",
    variant: "warning",
  },

  [DOCTOR_AVAILABILITY.UNAVAILABLE]: {
    label: "Unavailable",
    variant: "neutral",
  },
};

// ============================================================
// DEPARTMENTS
// ============================================================

export const DOCTOR_DEPARTMENTS = [
  {
    id: "all",
    value: "all",
    label: "All Departments",
  },

  {
    id: "general-medicine",
    value: "general-medicine",
    label: "General Medicine",
  },

  {
    id: "pediatrics",
    value: "pediatrics",
    label: "Pediatrics",
  },

  {
    id: "cardiology",
    value: "cardiology",
    label: "Cardiology",
  },

  {
    id: "gynecology",
    value: "gynecology",
    label: "Gynecology",
  },

  {
    id: "orthopedics",
    value: "orthopedics",
    label: "Orthopedics",
  },

  {
    id: "dermatology",
    value: "dermatology",
    label: "Dermatology",
  },

  {
    id: "radiology",
    value: "radiology",
    label: "Radiology",
  },

  {
    id: "pathology",
    value: "pathology",
    label: "Pathology",
  },

  {
    id: "ent",
    value: "ent",
    label: "ENT",
  },

  {
    id: "ophthalmology",
    value: "ophthalmology",
    label: "Ophthalmology",
  },

  {
    id: "neurology",
    value: "neurology",
    label: "Neurology",
  },

  {
    id: "nephrology",
    value: "nephrology",
    label: "Nephrology",
  },
];

// ============================================================
// FILTER CONFIGURATION
// ============================================================

export const DOCTOR_FILTERS = [
  {
    id: "department",
    type: "select",
    label: "Department",
    placeholder: "All Departments",
    options: DOCTOR_DEPARTMENTS,
  },

  {
    id: "status",
    type: "select",
    label: "Status",
    placeholder: "All Status",
    options: [
      {
        id: "all",
        value: "all",
        label: "All Status",
      },

      {
        id: DOCTOR_STATUSES.ACTIVE,
        value: DOCTOR_STATUSES.ACTIVE,
        label: "Active",
      },

      {
        id: DOCTOR_STATUSES.ON_LEAVE,
        value: DOCTOR_STATUSES.ON_LEAVE,
        label: "On Leave",
      },

      {
        id: DOCTOR_STATUSES.INACTIVE,
        value: DOCTOR_STATUSES.INACTIVE,
        label: "Inactive",
      },
    ],
  },

  {
    id: "availability",
    type: "select",
    label: "Availability",
    placeholder: "All",
    options: [
      {
        id: "all",
        value: "all",
        label: "All",
      },

      {
        id: DOCTOR_AVAILABILITY.AVAILABLE,
        value: DOCTOR_AVAILABILITY.AVAILABLE,
        label: "Available",
      },

      {
        id: DOCTOR_AVAILABILITY.IN_CONSULTATION,
        value: DOCTOR_AVAILABILITY.IN_CONSULTATION,
        label: "In Consultation",
      },

      {
        id: DOCTOR_AVAILABILITY.IN_SURGERY,
        value: DOCTOR_AVAILABILITY.IN_SURGERY,
        label: "In Surgery",
      },

      {
        id: DOCTOR_AVAILABILITY.ON_LEAVE,
        value: DOCTOR_AVAILABILITY.ON_LEAVE,
        label: "On Leave",
      },

      {
        id: DOCTOR_AVAILABILITY.UNAVAILABLE,
        value: DOCTOR_AVAILABILITY.UNAVAILABLE,
        label: "Unavailable",
      },
    ],
  },
];

// ============================================================
// TABLE COLUMNS
// ============================================================

export const DOCTOR_TABLE_COLUMNS = [
  {
    id: "doctor",
    key: "doctor",
    label: "Doctor Name",
    sortable: true,
    width: "20%",
  },

  {
    id: "department",
    key: "department",
    label: "Department",
    sortable: true,
    width: "14%",
  },

  {
    id: "qualification",
    key: "qualification",
    label: "Qualification",
    sortable: true,
    width: "17%",
  },

  {
    id: "experience",
    key: "experience",
    label: "Experience",
    sortable: true,
    width: "10%",
  },

  {
    id: "contact",
    key: "contact",
    label: "Contact",
    sortable: false,
    width: "14%",
  },

  {
    id: "availability",
    key: "availability",
    label: "Availability",
    sortable: true,
    width: "12%",
  },

  {
    id: "status",
    key: "status",
    label: "Status",
    sortable: true,
    width: "9%",
  },

  {
    id: "actions",
    key: "actions",
    label: "Actions",
    sortable: false,
    width: "4%",
  },
];

// ============================================================
// DOCTOR ACTIONS
// ============================================================

export const DOCTOR_ACTIONS = {
  VIEW: "view",
  EDIT: "edit",
  SCHEDULE: "schedule",
  BOOK_APPOINTMENT: "book-appointment",
  CHANGE_STATUS: "change-status",
  DELETE: "delete",
};

export const DOCTOR_ACTION_CONFIG = [
  {
    id: DOCTOR_ACTIONS.VIEW,
    label: "View Details",
    action: DOCTOR_ACTIONS.VIEW,
  },

  {
    id: DOCTOR_ACTIONS.EDIT,
    label: "Edit Doctor",
    action: DOCTOR_ACTIONS.EDIT,
  },

  {
    id: DOCTOR_ACTIONS.SCHEDULE,
    label: "View Schedule",
    action: DOCTOR_ACTIONS.SCHEDULE,
  },

  {
    id: DOCTOR_ACTIONS.BOOK_APPOINTMENT,
    label: "Book Appointment",
    action: DOCTOR_ACTIONS.BOOK_APPOINTMENT,
  },

  {
    id: DOCTOR_ACTIONS.CHANGE_STATUS,
    label: "Change Status",
    action: DOCTOR_ACTIONS.CHANGE_STATUS,
  },

  {
    id: DOCTOR_ACTIONS.DELETE,
    label: "Delete Doctor",
    action: DOCTOR_ACTIONS.DELETE,
    destructive: true,
  },
];

// ============================================================
// DOCTOR DETAILS TABS
// ============================================================

export const DOCTOR_DETAILS_TABS = [
  {
    id: "overview",
    label: "Overview",
  },

  {
    id: "schedule",
    label: "Schedule",
  },

  {
    id: "contact",
    label: "Contact",
  },

  {
    id: "documents",
    label: "Documents",
  },
];

// ============================================================
// DOCTOR FORM SECTIONS
// ============================================================

export const DOCTOR_FORM_SECTIONS = [
  {
    id: "basic-information",
    title: "Basic Information",
  },

  {
    id: "professional-information",
    title: "Professional Information",
  },

  {
    id: "contact-information",
    title: "Contact Information",
  },

  {
    id: "schedule",
    title: "Schedule & Availability",
  },

  {
    id: "documents",
    title: "Documents",
  },
];

// ============================================================
// DOCTOR FORM FIELDS
// ============================================================

export const DOCTOR_FORM_FIELDS = {
  BASIC_INFORMATION: [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      required: true,
      placeholder: "Enter first name",
    },

    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      required: true,
      placeholder: "Enter last name",
    },

    {
      name: "gender",
      label: "Gender",
      type: "select",
      required: true,
      placeholder: "Select gender",
      options: [
        {
          value: "male",
          label: "Male",
        },
        {
          value: "female",
          label: "Female",
        },
        {
          value: "other",
          label: "Other",
        },
      ],
    },

    {
      name: "dateOfBirth",
      label: "Date of Birth",
      type: "date",
      required: false,
    },

    {
      name: "profileImage",
      label: "Profile Photo",
      type: "file",
      required: false,
    },
  ],

  PROFESSIONAL_INFORMATION: [
    {
      name: "department",
      label: "Department",
      type: "select",
      required: true,
      placeholder: "Select department",
      options: DOCTOR_DEPARTMENTS.filter(
        (department) => department.value !== "all"
      ),
    },

    {
      name: "qualification",
      label: "Qualification",
      type: "text",
      required: true,
      placeholder: "e.g. MBBS, MD",
    },

    {
      name: "specialization",
      label: "Specialization",
      type: "text",
      required: true,
      placeholder: "Enter specialization",
    },

    {
      name: "experience",
      label: "Experience",
      type: "number",
      required: true,
      placeholder: "Years of experience",
      min: 0,
    },

    {
      name: "registrationNumber",
      label: "Registration No.",
      type: "text",
      required: true,
      placeholder: "Enter registration number",
    },

    {
      name: "consultationFee",
      label: "Consultation Fee",
      type: "number",
      required: true,
      placeholder: "Enter consultation fee",
      min: 0,
    },
  ],

  CONTACT_INFORMATION: [
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      required: true,
      placeholder: "Enter phone number",
    },

    {
      name: "email",
      label: "Email Address",
      type: "email",
      required: true,
      placeholder: "Enter email address",
    },

    {
      name: "address",
      label: "Address",
      type: "textarea",
      required: false,
      placeholder: "Enter address",
    },
  ],
};

// ============================================================
// SCHEDULE CONFIGURATION
// ============================================================

export const DOCTOR_SCHEDULE_DAYS = [
  {
    id: "monday",
    value: "monday",
    label: "Monday",
  },

  {
    id: "tuesday",
    value: "tuesday",
    label: "Tuesday",
  },

  {
    id: "wednesday",
    value: "wednesday",
    label: "Wednesday",
  },

  {
    id: "thursday",
    value: "thursday",
    label: "Thursday",
  },

  {
    id: "friday",
    value: "friday",
    label: "Friday",
  },

  {
    id: "saturday",
    value: "saturday",
    label: "Saturday",
  },

  {
    id: "sunday",
    value: "sunday",
    label: "Sunday",
  },
];

// ============================================================
// DEFAULT FILTER STATE
// ============================================================

export const DEFAULT_DOCTOR_FILTERS = {
  search: "",
  department: "all",
  status: "all",
  availability: "all",
  tab: "all",
};

// ============================================================
// DEFAULT DOCTOR FORM VALUES
// ============================================================

export const DEFAULT_DOCTOR_FORM_VALUES = {
  firstName: "",
  lastName: "",
  gender: "",
  dateOfBirth: "",
  profileImage: "",

  department: "",
  qualification: "",
  specialization: "",
  experience: "",
  registrationNumber: "",
  consultationFee: "",

  phone: "",
  email: "",
  address: "",

  schedule: [],
  documents: [],

  status: DOCTOR_STATUSES.ACTIVE,
  availability: DOCTOR_AVAILABILITY.AVAILABLE,
};

// ============================================================
// STAT CARDS CONFIGURATION
// ============================================================

import {
    GroupsOutlined,
    PersonOutlineOutlined,
    EventBusyOutlined,
    BusinessOutlined,
} from "@mui/icons-material";


// =========================================
// DOCTOR STATS CONFIG
// =========================================

export const DOCTOR_STATS_CONFIG = [

    {
        key: "totalDoctors",

        label: "Total Doctors",

        icon: GroupsOutlined,

        iconVariant: "blue",

        defaultValue: 0,

        description: "Doctors registered in the system",

        trend: {
            type: "up",
            value: "+2 this month",
        },
    },

    {
        key: "activeDoctors",

        label: "Active Doctors",

        icon: PersonOutlineOutlined,

        iconVariant: "green",

        defaultValue: 0,

        description: "91% active",

        trend: {
            type: "up",
            value: "91% active",
        },
    },

    {
        key: "onLeave",

        label: "On Leave",

        icon: EventBusyOutlined,

        iconVariant: "orange",

        defaultValue: 0,

        description: "Currently on leave",

        trend: {
            type: "neutral",
            value: "Currently on leave",
        },
    },

    {
        key: "departments",

        label: "Departments",

        icon: BusinessOutlined,

        iconVariant: "purple",

        defaultValue: 0,

        description: "Medical specialties",

        trend: {
            type: "neutral",
            value: "Medical specialties",
        },
    },

];
// ============================================================
// EXPORT ALL CONFIGURATION
// ============================================================

export default {
  module: DOCTOR_MODULE_CONFIG,
  tabs: DOCTOR_TABS,
  statuses: DOCTOR_STATUSES,
  statusConfig: DOCTOR_STATUS_CONFIG,
  availability: DOCTOR_AVAILABILITY,
  availabilityConfig: DOCTOR_AVAILABILITY_CONFIG,
  departments: DOCTOR_DEPARTMENTS,
  filters: DOCTOR_FILTERS,
  tableColumns: DOCTOR_TABLE_COLUMNS,
  actions: DOCTOR_ACTIONS,
  actionConfig: DOCTOR_ACTION_CONFIG,
  detailsTabs: DOCTOR_DETAILS_TABS,
  formSections: DOCTOR_FORM_SECTIONS,
  formFields: DOCTOR_FORM_FIELDS,
  scheduleDays: DOCTOR_SCHEDULE_DAYS,
  defaultFilters: DEFAULT_DOCTOR_FILTERS,
  defaultFormValues: DEFAULT_DOCTOR_FORM_VALUES,
  stats: DOCTOR_STATS_CONFIG,
};