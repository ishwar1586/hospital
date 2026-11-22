
// src/master_modules/StaffManagement/config/staffActions.config.js

export const staffActionsConfig = [
  {
    id: "view",
    label: "View Details",
    icon: "visibility",
    action: "VIEW_STAFF",
    color: "primary",
    visible: true,
    disabled: false,
    requiresConfirmation: false,
    permission: "staff.read",
    order: 1,
  },
  {
    id: "edit",
    label: "Edit Staff",
    icon: "edit",
    action: "EDIT_STAFF",
    color: "default",
    visible: true,
    disabled: false,
    requiresConfirmation: false,
    permission: "staff.update",
    order: 2,
  },
  {
    id: "delete",
    label: "Delete Staff",
    icon: "delete-outline",
    action: "DELETE_STAFF",
    color: "error",
    visible: true,
    disabled: false,
    requiresConfirmation: true,
    permission: "staff.delete",
    order: 3,
  },
];

export default staffActionsConfig;
