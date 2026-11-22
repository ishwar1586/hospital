export const BED_VIEW_PAGE_CONFIG = {
  title: "Bed View",

  subtitle: "Monitor ward-wise, room-wise and bed-wise availability",

  backAction: {
    id: "back-to-ipd",
    action: "BACK_TO_IPD",
    label: "Back",
    tooltip: "Back to IPD Management",
    ariaLabel: "Back to IPD Management",
  },
};

export const BED_VIEW_FILTER_CONFIG = {
  search: {
    key: "search",
    label: "Search",
    placeholder: "Search bed, room, patient...",
    type: "search",
  },

  ward: {
    key: "wardId",
    label: "Ward",
    placeholder: "Select Ward",
    type: "select",
  },

  room: {
    key: "roomId",
    label: "Room",
    placeholder: "Select Room",
    type: "select",
  },

  status: {
    key: "status",
    label: "Bed Status",
    placeholder: "Select Status",
    type: "select",
  },
};

export const BED_VIEW_SUMMARY_CONFIG = [
  {
    id: "total-beds",
    key: "totalBeds",
    label: "Total Beds",
    type: "number",
  },
  {
    id: "occupied-beds",
    key: "occupiedBeds",
    label: "Occupied",
    type: "number",
  },
  {
    id: "available-beds",
    key: "availableBeds",
    label: "Available",
    type: "number",
  },
  {
    id: "reserved-beds",
    key: "reservedBeds",
    label: "Reserved",
    type: "number",
  },
  {
    id: "maintenance-beds",
    key: "maintenanceBeds",
    label: "Maintenance",
    type: "number",
  },
  {
    id: "blocked-beds",
    key: "blockedBeds",
    label: "Blocked",
    type: "number",
  },
];

export const BED_VIEW_STATUS_CONFIG = {
  occupied: {
    key: "occupied",
    label: "Occupied",
  },

  available: {
    key: "available",
    label: "Available",
  },

  reserved: {
    key: "reserved",
    label: "Reserved",
  },

  maintenance: {
    key: "maintenance",
    label: "Maintenance",
  },

  blocked: {
    key: "blocked",
    label: "Blocked",
  },
};

export const BED_VIEW_DISPLAY_CONFIG = {
  showSummary: true,
  showFilters: true,
  showWardSections: true,
  showRoomSections: true,
  showBedCards: true,

  bedCard: {
    showBedNumber: true,
    showStatus: true,
    showPatient: true,
    showPatientUHID: true,
    showDoctor: true,
  },
};