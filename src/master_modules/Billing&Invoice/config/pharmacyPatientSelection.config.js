import {
  SearchOutlined,
  CloseOutlined,
  PersonSearchOutlined,
  CheckOutlined,
} from "@mui/icons-material";

const pharmacyPatientSelectionConfig = {
  /* =========================================================
     PAGE
     ========================================================= */

  page: {
    title: "Select Patient",
    subtitle: "",
    showCloseButton: true,

    closeButton: {
      label: "Close",
      ariaLabel: "Close patient selection",
      icon: CloseOutlined,
    },
  },


  /* =========================================================
     SEARCH
     ========================================================= */

  search: {
    enabled: true,

    placeholder: "Search by UHID, name or mobile",

    defaultValue: "",

    minSearchLength: 1,

    searchOnEnter: true,

    debounceDelay: 300,

    button: {
      enabled: true,
      label: "Search",
      icon: SearchOutlined,
      showIcon: true,
    },

    searchableFields: [
      "uhid",
      "patientName",
      "mobile",
    ],
  },


  /* =========================================================
     PATIENT TABLE
     ========================================================= */

  table: {
    enabled: true,

    stickyHeader: true,

    showSerialNumber: true,

    emptyMessage: "No patients found",

    loadingMessage: "Loading patients...",

    columns: [
      {
        id: "serialNumber",
        label: "#",
        field: "serialNumber",
        type: "serial",
        visible: true,
        sortable: false,
        align: "center",
        width: 50,
      },

      {
        id: "uhid",
        label: "UHID",
        field: "uhid",
        type: "text",
        visible: true,
        sortable: true,
        align: "left",
        width: 120,
      },

      {
        id: "patientName",
        label: "Patient Name",
        field: "patientName",
        type: "text",
        visible: true,
        sortable: true,
        align: "left",
        width: 150,
      },

      {
        id: "ageGender",
        label: "Age / Gender",
        field: "ageGender",
        type: "text",
        visible: true,
        sortable: false,
        align: "left",
        width: 120,
      },

      {
        id: "mobile",
        label: "Mobile",
        field: "mobile",
        type: "text",
        visible: true,
        sortable: false,
        align: "left",
        width: 130,
      },

      {
        id: "lastVisit",
        label: "Last Visit",
        field: "lastVisit",
        type: "date",
        visible: true,
        sortable: true,
        align: "left",
        width: 120,
      },

      {
        id: "action",
        label: "Action",
        field: "action",
        type: "action",
        visible: true,
        sortable: false,
        align: "center",
        width: 100,
      },
    ],

    row: {
      hoverEffect: true,
      clickable: false,
      selectable: false,
    },

    action: {
      id: "select-patient",
      label: "Select",
      icon: CheckOutlined,
      showIcon: false,
      variant: "outlined",
      color: "primary",
      ariaLabel: "Select patient",
    },
  },


  /* =========================================================
     PATIENT SELECTION
     ========================================================= */

  selection: {
    enabled: true,

    mode: "single",

    closeAfterSelection: false,

    emitSelectedPatient: true,

    requireSelection: true,
  },


  /* =========================================================
     PAGINATION
     ========================================================= */

  pagination: {
    enabled: true,

    defaultPage: 1,

    defaultRowsPerPage: 5,

    rowsPerPageOptions: [
      5,
      10,
      25,
      50,
    ],

    showFirstButton: true,

    showLastButton: true,
  },


  /* =========================================================
     STATES
     ========================================================= */

  states: {
    loading: {
      enabled: true,
    },

    empty: {
      enabled: true,
      message: "No patients found",
    },

    error: {
      enabled: true,
      message: "Unable to load patients. Please try again.",
    },
  },


  /* =========================================================
     ICONS
     ========================================================= */

  icons: {
    page: PersonSearchOutlined,
    search: SearchOutlined,
    close: CloseOutlined,
    select: CheckOutlined,
  },


  /* =========================================================
     RESPONSIVE
     ========================================================= */

  responsive: {
    desktop: {
      minWidth: 1200,
    },

    tablet: {
      minWidth: 768,
      maxWidth: 1199,
    },

    mobile: {
      maxWidth: 767,
    },
  },
};

export default pharmacyPatientSelectionConfig;