
// src/master_modules/StaffManagement/config/staffTabs.config.js

export const staffTabsConfig = [
  {
    id: "all-staff",
    label: "All Staff",
    value: "all",
    category: "all",
    countKey: "totalStaff",
    visible: true,
    order: 1,
  },
  {
    id: "doctors",
    label: "Doctors",
    value: "Doctors",
    category: "Doctors",
    countKey: "doctors",
    visible: true,
    order: 2,
  },
  {
    id: "nurses",
    label: "Nurses",
    value: "Nurses",
    category: "Nurses",
    countKey: "nurses",
    visible: true,
    order: 3,
  },
  {
    id: "administrative",
    label: "Administrative",
    value: "Administrative",
    category: "Administrative",
    countKey: "administrative",
    visible: true,
    order: 4,
  },
  {
    id: "support-staff",
    label: "Support Staff",
    value: "Support Staff",
    category: "Support Staff",
    countKey: "supportStaff",
    visible: true,
    order: 5,
  },
  {
    id: "inactive",
    label: "Inactive",
    value: "Inactive",
    category: "status",
    countKey: "inactive",
    visible: true,
    order: 6,
  },
];

export default staffTabsConfig;
