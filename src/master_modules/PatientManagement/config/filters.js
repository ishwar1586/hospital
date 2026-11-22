export const patientFilterOptions = {
  departments: [
    { label: "All Departments", value: "all" },
    { label: "Cardiology", value: "cardiology" },
    { label: "Neurology", value: "neurology" },
    { label: "Orthopedics", value: "orthopedics" },
    { label: "General Medicine", value: "general-medicine" },
    { label: "Pediatrics", value: "pediatrics" },
    { label: "Gynecology", value: "gynecology" },
  ],

  patientTypes: [
    { label: "All Types", value: "all" },
    { label: "OPD", value: "opd" },
    { label: "IPD", value: "ipd" },
    { label: "Emergency", value: "emergency" },
  ],

  genders: [
    { label: "All Genders", value: "all" },
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ],

  ageGroups: [
    { label: "All Age Groups", value: "all" },
    { label: "0 - 12 Years", value: "0-12" },
    { label: "13 - 18 Years", value: "13-18" },
    { label: "19 - 40 Years", value: "19-40" },
    { label: "41 - 60 Years", value: "41-60" },
    { label: "60+ Years", value: "60+" },
  ],

  statuses: [
    { label: "All Status", value: "all" },
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
    { label: "Critical", value: "critical" },
  ],
};


export default patientFilterOptions;