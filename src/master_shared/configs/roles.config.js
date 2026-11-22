export const ROLES = Object.freeze({
  SUPER_ADMIN: "SUPER_ADMIN",
  ADMIN: "ADMIN",
  DOCTOR: "DOCTOR",
  NURSE: "NURSE",
  RECEPTIONIST: "RECEPTIONIST",
  BILLING: "BILLING",
  ACCOUNTANT: "ACCOUNTANT",
  LAB_TECH: "LAB_TECH",
  PHARMACIST: "PHARMACIST",
  STORE: "STORE",
  HR: "HR",
});
export const ROLE_LABELS = Object.freeze({
  SUPER_ADMIN: "Super Administrator", ADMIN: "Administrator",
  DOCTOR: "Doctor", NURSE: "Nurse", RECEPTIONIST: "Receptionist",
  BILLING: "Billing Executive", ACCOUNTANT: "Accountant",
  LAB_TECH: "Laboratory Technician", PHARMACIST: "Pharmacist",
  STORE: "Store Manager", HR: "Human Resources",
});
export const ROLE_OPTIONS = Object.entries(ROLE_LABELS).map(([value, label]) => ({ value, label }));
export const hasRole = (user, allowed = []) =>
  Boolean(user && (user.role === ROLES.SUPER_ADMIN || allowed.includes(user.role)));
export default ROLES;
