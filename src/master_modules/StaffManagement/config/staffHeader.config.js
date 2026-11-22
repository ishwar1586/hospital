
// src/master_modules/StaffManagement/config/staffHeader.config.js

export const staffHeaderConfig = {
  title: "Staff Management",

  subtitle:
    "Manage hospital staff, departments, designations and employment details",

  breadcrumb: [
    {
      id: "dashboard",
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      id: "staff-management",
      label: "Staff Management",
      path: "/staff-management",
    },
  ],

  primaryAction: {
    id: "add-staff",
    label: "Add Staff",
    icon: "person-add",
    variant: "primary",
    visible: true,
    disabled: false,
    action: "ADD_STAFF",
  },

  permissions: {
    required: "staff.create",
  },

  layout: {
    showBreadcrumb: false,
    showSubtitle: true,
    showPrimaryAction: true,
  },
};

export default staffHeaderConfig;
