
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";

export const staffDetailsConfig = {
  title: "Staff Details",
  subtitle: "View complete staff member information",

  profile: {
    name: {
      label: "Staff Name",
      fields: ["name", "firstName", "lastName"],
    },
    designation: {
      label: "Designation",
      fields: ["designation", "designationName"],
    },
    employeeId: {
      label: "Employee ID",
      fields: ["employeeId", "id"],
    },
    status: {
      label: "Employment Status",
      fields: ["employmentStatus", "status"],
    },
    category: {
      label: "Staff Category",
      field: "staffCategory",
    },
  },

  sections: [
    {
      id: "personal",
      title: "Personal Information",
      icon: PersonOutlinedIcon,
      fields: [
        { name: "firstName", label: "First Name" },
        { name: "lastName", label: "Last Name" },
        { name: "gender", label: "Gender" },
        { name: "dateOfBirth", label: "Date of Birth", format: "date" },
        { name: "bloodGroup", label: "Blood Group" },
        { name: "maritalStatus", label: "Marital Status" },
        { name: "nationality", label: "Nationality" },
      ],
    },
    {
      id: "contact",
      title: "Contact Information",
      icon: ContactPhoneOutlinedIcon,
      fields: [
        { name: "email", label: "Email Address", source: "contact.email" },
        { name: "phone", label: "Mobile Number", source: "contact.phone" },
        { name: "emergencyContactName", label: "Emergency Contact Name" },
        { name: "emergencyContactPhone", label: "Emergency Contact Number" },
        { name: "address", label: "Address" },
        { name: "city", label: "City" },
        { name: "state", label: "State" },
        { name: "postalCode", label: "Postal Code" },
        { name: "country", label: "Country" },
      ],
    },
    {
      id: "professional",
      title: "Professional Details",
      icon: WorkOutlineOutlinedIcon,
      fields: [
        { name: "employeeId", label: "Employee ID" },
        { name: "staffCategory", label: "Staff Category" },
        { name: "department", label: "Department", alternatives: ["departmentName"] },
        { name: "designation", label: "Designation", alternatives: ["designationName"] },
        { name: "employmentType", label: "Employment Type" },
        { name: "joiningDate", label: "Joining Date", format: "date" },
        { name: "reportingManager", label: "Reporting Manager" },
        { name: "workLocation", label: "Work Location" },
        { name: "employmentStatus", label: "Employment Status", alternatives: ["status"] },
      ],
    },
    {
      id: "qualifications",
      title: "Qualifications",
      icon: SchoolOutlinedIcon,
      fields: [
        { name: "highestQualification", label: "Highest Qualification" },
        { name: "specialization", label: "Specialization" },
        { name: "institution", label: "Institution / University" },
        { name: "passingYear", label: "Passing Year" },
        { name: "experienceYears", label: "Total Experience", suffix: "years" },
        { name: "licenseNumber", label: "Professional License" },
        { name: "certifications", label: "Certifications" },
      ],
    },
    {
      id: "account",
      title: "Account Details",
      icon: ManageAccountsOutlinedIcon,
      fields: [
        { name: "username", label: "Username" },
        { name: "role", label: "System Role" },
        { name: "accountStatus", label: "Account Status" },
        {
          name: "sendWelcomeEmail",
          label: "Account Invitation",
          format: "invitation",
        },
      ],
    },
  ],
};

export default staffDetailsConfig;
