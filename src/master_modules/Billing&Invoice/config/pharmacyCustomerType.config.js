import {
  PersonSearchOutlined,
  PersonAddAlt1Outlined,
  GroupsOutlined,
} from "@mui/icons-material";

const pharmacyCustomerTypeConfig = {
  /* =========================================================
     PAGE / HEADER
  ========================================================= */

  page: {
    title: "Select Customer Type",

    subtitle:
      "Choose customer type for pharmacy billing",

    showBackButton: false,

    showCloseButton: true,
  },


  /* =========================================================
     CUSTOMER TYPE GRID
  ========================================================= */

  grid: {
    columns: 3,

    gap: 12,

    responsive: {
      tablet: 2,
      mobile: 1,
    },

    equalHeight: true,
  },


  /* =========================================================
     CUSTOMER TYPE CARD
  ========================================================= */

  card: {
    selectable: true,

    selectionMode: "single",

    showIcon: true,

    showTitle: true,

    showDescription: true,

    showSelectionIndicator: true,

    hoverEffect: true,

    disabledBehavior: "disabled",
  },


  /* =========================================================
     CUSTOMER TYPE ICONS
  ========================================================= */

  icons: {
    "registered-patient":
      PersonSearchOutlined,

    "walk-in-customer":
      PersonAddAlt1Outlined,

    "self-staff-purchase":
      GroupsOutlined,
  },


  /* =========================================================
     COLOR VARIANTS
  ========================================================= */

  variants: {
    "registered-patient": "green",

    "walk-in-customer": "blue",

    "self-staff-purchase": "purple",
  },


  /* =========================================================
     SELECTION
  ========================================================= */

  selection: {
    allowSelection: true,

    selectionMode: "single",

    /*
     * Screenshot mein Registered Patient
     * initially selected hai.
     */
    defaultSelectedId:
      "registered-patient",

    closeAfterSelection: false,

    emitSelectedCustomerType: true,
  },


  /* =========================================================
     FOOTER
  ========================================================= */

  footer: {
    showCancel: true,

    showNext: true,

    nextButton: {
      label: "Next",

      showArrow: true,

      disabledWithoutSelection: true,
    },

    cancelButton: {
      label: "Cancel",
    },
  },


  /* =========================================================
     RESPONSIVE
  ========================================================= */

  responsive: {
    desktop: {
      minWidth: 900,
    },

    tablet: {
      maxWidth: 899,
    },

    mobile: {
      maxWidth: 600,
    },
  },
};

export default pharmacyCustomerTypeConfig;