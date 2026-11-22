
// src/master_modules/StaffManagement/mock/staffStatuses.mock.js

export const staffStatusesMock = [
  {
    id: "active",
    label: "Active",
    value: "Active",
    color: "success",
    description: "Currently employed and active",
    isActive: true,
    showInFilter: true,
    showInForm: true,
  },
  {
    id: "inactive",
    label: "Inactive",
    value: "Inactive",
    color: "default",
    description: "Currently inactive staff record",
    isActive: true,
    showInFilter: true,
    showInForm: true,
  },
  {
    id: "on-leave",
    label: "On Leave",
    value: "On Leave",
    color: "warning",
    description: "Staff member currently on leave",
    isActive: true,
    showInFilter: true,
    showInForm: true,
  },
];

export default staffStatusesMock;
