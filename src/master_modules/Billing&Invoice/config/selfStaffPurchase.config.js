const selfStaffPurchaseConfig = {
  page: {
    title: "Self / Staff Purchase",
    subtitle: "Select staff member for pharmacy purchase",
  },

  staffSelection: {
    title: "Select Staff",
    searchPlaceholder: "Search by Staff Name, Employee ID or Mobile",

    searchFields: [
      "staffName",
      "employeeId",
      "mobile",
      "department",
      "designation",
    ],

    columns: [
      {
        id: "employeeId",
        field: "employeeId",
        label: "EMPLOYEE ID",
        type: "text",
        sortable: true,
      },
      {
        id: "staffName",
        field: "staffName",
        label: "STAFF NAME",
        type: "text",
        sortable: true,
      },
      {
        id: "department",
        field: "department",
        label: "DEPARTMENT",
        type: "text",
        sortable: true,
      },
      {
        id: "designation",
        field: "designation",
        label: "DESIGNATION",
        type: "text",
        sortable: true,
      },
      {
        id: "mobile",
        field: "mobile",
        label: "MOBILE",
        type: "text",
        sortable: false,
      },
      {
        id: "status",
        field: "status",
        label: "STATUS",
        type: "status",
        sortable: true,
      },
      {
        id: "action",
        field: "action",
        label: "ACTION",
        type: "action",
        sortable: false,
      },
    ],

    statusOptions: [
      {
        id: "active",
        value: "active",
        label: "Active",
      },
      {
        id: "inactive",
        value: "inactive",
        label: "Inactive",
      },
    ],

    action: {
      selectLabel: "Select",
    },

    pagination: {
      enabled: true,
      defaultPage: 0,
      defaultRowsPerPage: 10,
      rowsPerPageOptions: [10, 25, 50],
    },
  },

  staffDetails: {
    title: "Staff Details",

    fields: [
      {
        id: "employeeId",
        field: "employeeId",
        label: "EMPLOYEE ID",
        type: "text",
        required: true,
        readOnly: true,
      },
      {
        id: "staffName",
        field: "staffName",
        label: "STAFF NAME",
        type: "text",
        required: true,
        readOnly: true,
      },
      {
        id: "department",
        field: "department",
        label: "DEPARTMENT",
        type: "text",
        required: true,
        readOnly: true,
      },
      {
        id: "designation",
        field: "designation",
        label: "DESIGNATION",
        type: "text",
        required: true,
        readOnly: true,
      },
      {
        id: "mobile",
        field: "mobile",
        label: "MOBILE",
        type: "text",
        required: true,
        readOnly: true,
      },
    ],
  },

  staffInformation: {
    title: "Staff Information",

    fields: [
      {
        id: "employeeId",
        field: "employeeId",
        label: "EMPLOYEE ID",
        type: "text",
      },
      {
        id: "staffName",
        field: "staffName",
        label: "STAFF NAME",
        type: "text",
      },
      {
        id: "department",
        field: "department",
        label: "DEPARTMENT",
        type: "text",
      },
      {
        id: "designation",
        field: "designation",
        label: "DESIGNATION",
        type: "text",
      },
      {
        id: "mobile",
        field: "mobile",
        label: "MOBILE",
        type: "text",
      },
    ],
  },

  /*
   * =========================================================
   * FOOTER ACTIONS
   * =========================================================
   *
   * Staff Details ke baad workflow:
   *
   * Staff Selection
   *       ↓
   * Staff Details
   *       ↓
   * Continue to Medicines
   *       ↓
   * Pharmacy Medicines
   *
   */

  footer: {
    backLabel: "Back",
    continueLabel: "Continue to Medicines",
    cancelLabel: "Cancel",
  },
};

export default selfStaffPurchaseConfig;