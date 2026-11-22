// src/features/IPDManagement/config/ipdConfig.js

/**
 * ============================================================
 * IPD MANAGEMENT CONFIGURATION
 * ============================================================
 *
 * This file contains UI and behavior configuration only.
 *
 * Dynamic data should NOT be placed here.
 * Dynamic data will come from:
 *
 * mock/ipd.mock.js
 *
 * Later:
 * services/ipdService.js -> API
 * ============================================================
 */

/* ============================================================
 * PAGE CONFIGURATION
 * ============================================================
 */

export const IPD_PAGE_CONFIG = {
  title: "IPD Management",

  subtitle:
    "Manage inpatient admissions, bed allotment, treatment, and discharge",

  headerActions: [
    {
      id: "bed-view",
      label: "Bed View",
      type: "button",
      action: "BED_VIEW",
      icon: "bed",
      variant: "outlined",
    },
    {
      id: "admit-patient",
      label: "Admit Patient",
      type: "button",
      action: "ADMIT_PATIENT",
      icon: "admit",
      variant: "outlined",
    },
    {
      id: "transfer-patient",
      label: "Transfer Patient",
      type: "button",
      action: "TRANSFER_PATIENT",
      icon: "transfer",
      variant: "outlined",
    },
    {
      id: "discharge-patient",
      label: "Discharge Patient",
      type: "button",
      action: "DISCHARGE_PATIENT",
      icon: "discharge",
      variant: "outlined",
    },
  ],
};


/* ============================================================
 * STATS CARD CONFIGURATION
 * ============================================================
 *
 * Values are NOT stored here.
 *
 * Only configuration is stored:
 * - id
 * - label
 * - icon
 * - valueKey
 * - trendKey
 * - trendType
 *
 * Actual values will come from mock/API data.
 * ============================================================
 */

export const IPD_STATS_CONFIG = [
  {
    id: "total-admitted",
    label: "Total Admitted",
    valueKey: "totalAdmitted",
    icon: "bed",
    iconVariant: "primary",
    trendKey: "totalAdmittedTrend",
    trendType: "positive",
    trendSuffix: "from yesterday",
  },

  {
    id: "occupied-beds",
    label: "Occupied Beds",
    valueKey: "occupiedBeds",
    icon: "bed",
    iconVariant: "success",
    secondaryValueKey: "occupancyPercentage",
    secondarySuffix: "occupancy",
  },

  {
    id: "available-beds",
    label: "Available Beds",
    valueKey: "availableBeds",
    icon: "bed",
    iconVariant: "primary",
    secondaryValueKey: "availabilityPercentage",
    secondarySuffix: "available",
  },

  {
    id: "today-admissions",
    label: "Today Admissions",
    valueKey: "todayAdmissions",
    icon: "admission",
    iconVariant: "warning",
    trendKey: "todayAdmissionsTrend",
    trendType: "positive",
    trendSuffix: "from yesterday",
  },

  {
    id: "today-discharges",
    label: "Today Discharges",
    valueKey: "todayDischarges",
    icon: "discharge",
    iconVariant: "danger",
    trendKey: "todayDischargesTrend",
    trendType: "positive",
    trendSuffix: "from yesterday",
  },
];


/* ============================================================
 * FILTER CONFIGURATION
 * ============================================================
 *
 * Filter values/options will come from mock/API.
 *
 * This config only describes what filters exist.
 * ============================================================
 */

export const IPD_FILTER_CONFIG = [
  {
    id: "search",
    type: "search",
    name: "search",
    label: "Search",
    placeholder: "Search by patient name, IPD no., UHID, doctor...",
    width: "search",
  },

  {
    id: "ward",
    type: "select",
    name: "ward",
    label: "Ward",
    placeholder: "All Wards",
    optionSource: "wards",
    width: "standard",
  },

  {
    id: "room",
    type: "select",
    name: "room",
    label: "Room",
    placeholder: "All Rooms",
    optionSource: "rooms",
    width: "standard",
  },

  {
    id: "status",
    type: "select",
    name: "status",
    label: "Status",
    placeholder: "All Status",
    optionSource: "statuses",
    width: "standard",
  },

  {
    id: "doctor",
    type: "select",
    name: "doctor",
    label: "Doctor",
    placeholder: "All Doctors",
    optionSource: "doctors",
    width: "standard",
  },

  {
    id: "admissionDate",
    type: "date",
    name: "admissionDate",
    label: "Admission Date",
    placeholder: "Select Date",
    width: "date",
  },
];


/* ============================================================
 * FILTER DEFAULT VALUES
 * ============================================================
 */

export const IPD_FILTER_DEFAULTS = {
  search: "",
  ward: "",
  room: "",
  status: "",
  doctor: "",
  admissionDate: null,
};


/* ============================================================
 * TAB CONFIGURATION
 * ============================================================
 */

export const IPD_TABS_CONFIG = [
  {
    id: "admitted-patients",
    label: "Admitted Patients",
    value: "admitted",
  },

  {
    id: "discharged-patients",
    label: "Discharged Patients",
    value: "discharged",
  },

  {
    id: "transfer-history",
    label: "Transfer History",
    value: "transfers",
  },

  {
    id: "bed-management",
    label: "Bed Management",
    value: "beds",
  },

  {
    id: "ipd-reports",
    label: "IPD Reports",
    value: "reports",
  },
];


/* ============================================================
 * ADMITTED PATIENT TABLE CONFIGURATION
 * ============================================================
 *
 * Column labels and data keys are configuration-driven.
 * ============================================================
 */

export const IPD_ADMITTED_TABLE_COLUMNS = [
  {
    id: "ipdNumber",
    label: "IPD No.",
    field: "ipdNumber",
    type: "text",
    sortable: true,
  },

  {
    id: "patientDetails",
    label: "Patient Details",
    field: "patient",
    type: "patient",
    sortable: false,
  },

  {
    id: "ageGender",
    label: "Age / Gender",
    field: "ageGender",
    type: "ageGender",
    sortable: false,
  },

  {
    id: "wardRoomBed",
    label: "Ward / Room / Bed",
    field: "bedAllocation",
    type: "wardRoomBed",
    sortable: false,
  },

  {
    id: "admittingDoctor",
    label: "Admitting Doctor",
    field: "doctor",
    type: "doctor",
    sortable: false,
  },

  {
    id: "admissionDate",
    label: "Admission Date",
    field: "admissionDate",
    type: "dateTime",
    sortable: true,
  },

  {
    id: "status",
    label: "Status",
    field: "status",
    type: "status",
    sortable: true,
  },

  {
    id: "actions",
    label: "Actions",
    field: "actions",
    type: "actions",
    sortable: false,
  },
];


/* ============================================================
 * PATIENT TABLE ACTION CONFIGURATION
 * ============================================================
 */

export const IPD_ACTION_CONFIG = [
  {
    id: "view-profile",
    label: "View Profile",
    action: "VIEW_PROFILE",
    icon: "view",
    visible: true,
  },

  {
    id: "edit-admission",
    label: "Edit Admission",
    action: "EDIT_ADMISSION",
    icon: "edit",
    visible: true,
  },

  {
    id: "transfer-patient",
    label: "Transfer Patient",
    action: "TRANSFER_PATIENT",
    icon: "transfer",
    visible: true,
  },

  {
    id: "discharge-patient",
    label: "Discharge Patient",
    action: "DISCHARGE_PATIENT",
    icon: "discharge",
    visible: true,
  },

  {
    id: "cancel-admission",
    label: "Cancel Admission",
    action: "CANCEL_ADMISSION",
    icon: "cancel",
    visible: true,
  },
];


/* ============================================================
 * STATUS CONFIGURATION
 * ============================================================
 *
 * Status styling is also configuration-driven.
 * No status-specific CSS logic will be scattered across JSX.
 * ============================================================
 */

export const IPD_STATUS_CONFIG = {
  admitted: {
    label: "Admitted",
    variant: "success",
  },

  critical: {
    label: "Critical",
    variant: "danger",
  },

  underObservation: {
    label: "Under Observation",
    variant: "info",
  },

  preDischarge: {
    label: "Pre-Discharge",
    variant: "warning",
  },

  discharged: {
    label: "Discharged",
    variant: "neutral",
  },

  transferred: {
    label: "Transferred",
    variant: "info",
  },

  cancelled: {
    label: "Cancelled",
    variant: "danger",
  },
};


/* ============================================================
 * BED STATUS CONFIGURATION
 * ============================================================
 */

export const IPD_BED_STATUS_CONFIG = {
  available: {
    label: "Available",
    variant: "success",
  },

  occupied: {
    label: "Occupied",
    variant: "primary",
  },

  reserved: {
    label: "Reserved",
    variant: "warning",
  },

  maintenance: {
    label: "Maintenance",
    variant: "danger",
  },

  blocked: {
    label: "Blocked",
    variant: "neutral",
  },
};


/* ============================================================
 * PAGINATION CONFIGURATION
 * ============================================================
 */

export const IPD_PAGINATION_CONFIG = {
  defaultPage: 0,

  defaultRowsPerPage: 10,

  rowsPerPageOptions: [5, 10, 25, 50],
};


/* ============================================================
 * BED MANAGEMENT CONFIGURATION
 * ============================================================
 */

export const IPD_BED_MANAGEMENT_CONFIG = {
  viewModes: [
    {
      id: "grid",
      label: "Grid View",
      value: "grid",
    },

    {
      id: "list",
      label: "List View",
      value: "list",
    },
  ],

  defaultViewMode: "grid",
};


/* ============================================================
 * DATE / DISPLAY CONFIGURATION
 * ============================================================
 */

export const IPD_DISPLAY_CONFIG = {
  dateFormat: "DD MMM YYYY",

  timeFormat: "hh:mm A",

  patientInitialsMaxLength: 2,
};


/* ============================================================
 * ACTION TYPES
 * ============================================================
 *
 * Centralized action names prevent random strings throughout
 * components/hooks.
 * ============================================================
 */

export const IPD_ACTIONS = {
  BED_VIEW: "BED_VIEW",

  ADMIT_PATIENT: "ADMIT_PATIENT",

  TRANSFER_PATIENT: "TRANSFER_PATIENT",

  DISCHARGE_PATIENT: "DISCHARGE_PATIENT",

  VIEW_PROFILE: "VIEW_PROFILE",

  EDIT_ADMISSION: "EDIT_ADMISSION",

  CANCEL_ADMISSION: "CANCEL_ADMISSION",

  CLEAR_FILTERS: "CLEAR_FILTERS",

  SEARCH: "SEARCH",
};


/* ============================================================
 * TAB VALUES
 * ============================================================
 */

export const IPD_TAB_VALUES = {
  ADMITTED: "admitted",

  DISCHARGED: "discharged",

  TRANSFERS: "transfers",

  BEDS: "beds",

  REPORTS: "reports",
};



/* ============================================================
 * BED VIEW CONFIGURATION
 * ============================================================
 *
 * Bed View ka complete UI configuration.
 *
 * Dynamic data yahan nahi rahega.
 * Dynamic data:
 *
 * mock/bedView.mock.js
 *
 * Future:
 * services/ipdService.js -> API
 *
 * ============================================================
 */

export const BED_VIEW_CONFIG = {
  /* ==========================================================
   * PAGE
   * ========================================================== */

  page: {
    title: "Bed View",

    subtitle:
      "Real-time view of bed occupancy across all wards and rooms",
  },

  /* ==========================================================
   * WARD TABS
   * ========================================================== */

  wardTabs: {
    allValue: "all",

    tabs: [
      {
        id: "all-wards",
        label: "All Wards",
        value: "all",
      },
    ],
  },

  /* ==========================================================
   * FILTERS
   * ========================================================== */

  filters: [
    {
      id: "search",
      type: "search",
      name: "search",
      placeholder:
        "Search bed, patient, UHID...",
      width: "search",
    },

    {
      id: "status",
      type: "select",
      name: "status",
      label: "Status",
      placeholder: "All Status",
      optionSource: "bedStatuses",
      width: "status",
    },
  ],

  /* ==========================================================
   * STATS
   * ========================================================== */

  stats: [
    {
      id: "total-beds",
      label: "Total Beds",
      valueKey: "totalBeds",
      icon: "bed",
      iconVariant: "primary",
      descriptionKey: "totalBedsDescription",
    },

    {
      id: "occupied-beds",
      label: "Occupied Beds",
      valueKey: "occupiedBeds",
      icon: "bed",
      iconVariant: "success",
      secondaryValueKey: "occupancyPercentage",
      secondarySuffix: "occupancy",
    },

    {
      id: "available-beds",
      label: "Available Beds",
      valueKey: "availableBeds",
      icon: "bed",
      iconVariant: "primary",
      secondaryValueKey: "availabilityPercentage",
      secondarySuffix: "available",
    },

    {
      id: "reserved-beds",
      label: "Reserved Beds",
      valueKey: "reservedBeds",
      icon: "reserved",
      iconVariant: "warning",
      descriptionKey: "reservedBedsDescription",
    },

    {
      id: "maintenance-beds",
      label: "Maintenance",
      valueKey: "maintenanceBeds",
      icon: "maintenance",
      iconVariant: "danger",
      descriptionKey: "maintenanceBedsDescription",
    },
  ],

  /* ==========================================================
   * WARD SECTION
   * ========================================================== */

  wardSection: {
    defaultExpanded: true,

    showSummary: true,

    showCollapseAction: true,

    summaryItems: [
      {
        id: "total-beds",
        label: "Total Beds",
        valueKey: "totalBeds",
      },

      {
        id: "occupied-beds",
        label: "Occupied",
        valueKey: "occupiedBeds",
      },

      {
        id: "available-beds",
        label: "Available",
        valueKey: "availableBeds",
      },

      {
        id: "reserved-beds",
        label: "Reserved",
        valueKey: "reservedBeds",
      },
    ],
  },

  /* ==========================================================
   * ROOM
   * ========================================================== */

  room: {
    showRoomNumber: true,

    showBedCount: true,

    bedCountSuffix: "Beds",
  },

  /* ==========================================================
   * BED CARD
   * ========================================================== */

  bed: {
    showBedNumber: true,

    showPatientName: true,

    showIPDNumber: true,

    showStatus: true,

    showStatusIcon: true,

    patientNameKey: "patient.name",

    ipdNumberKey: "ipdNumber",
  },

  /* ==========================================================
   * EXPAND / COLLAPSE
   * ========================================================== */

  expansion: {
    wardDefaultExpanded: true,

    roomDefaultExpanded: true,
  },

  /* ==========================================================
   * DISPLAY
   * ========================================================== */

  display: {
    wardNameKey: "wardName",

    roomNumberKey: "roomNumber",

    bedNumberKey: "bedNumber",

    statusKey: "status",
  },
};