
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INDIAN_PHONE_REGEX = /^[6-9]\d{9}$/;

export const staffValidationConfig = {
  personalInformation: {
    firstName: {
      required: true,
      label: "First Name",
      minLength: 2,
      maxLength: 50,
    },
    lastName: {
      required: true,
      label: "Last Name",
      minLength: 2,
      maxLength: 50,
    },
    gender: {
      required: true,
      label: "Gender",
    },
    dateOfBirth: {
      required: true,
      label: "Date of Birth",
      type: "date",
    },
  },

  contactInformation: {
    email: {
      required: true,
      label: "Email Address",
      type: "email",
    },
    phone: {
      required: true,
      label: "Mobile Number",
      type: "phone",
    },
    emergencyContactName: {
      required: true,
      label: "Emergency Contact Name",
      minLength: 2,
    },
    emergencyContactPhone: {
      required: true,
      label: "Emergency Contact Number",
      type: "phone",
    },
    address: {
      required: true,
      label: "Address",
      minLength: 5,
    },
    city: {
      required: true,
      label: "City",
    },
    state: {
      required: true,
      label: "State",
    },
    postalCode: {
      required: true,
      label: "Postal Code",
      pattern: /^\d{6}$/,
      patternMessage: "Enter a valid 6-digit Indian PIN code.",
    },
    country: {
      required: true,
      label: "Country",
    },
  },

  professionalDetails: {
    employeeId: {
      required: true,
      label: "Employee ID",
    },
    staffCategory: {
      required: true,
      label: "Staff Category",
    },
    departmentId: {
      // required: true,
      label: "Department",
    },
    designationId: {
      // required: true,
      label: "Designation",
    },
    employmentType: {
      required: true,
      label: "Employment Type",
    },
    joiningDate: {
      required: true,
      label: "Joining Date",
      type: "date",
    },
    workLocation: {
      required: true,
      label: "Work Location",
    },
    employmentStatus: {
      required: true,
      label: "Employment Status",
    },
  },

  qualifications: {
    highestQualification: {
      required: true,
      label: "Highest Qualification",
    },
    institution: {
      required: true,
      label: "Institution / University",
    },
    passingYear: {
      required: true,
      label: "Passing Year",
      type: "year",
    },
    experienceYears: {
      required: true,
      label: "Total Experience",
      type: "experience",
    },
  },

  accountSetup: {
    username: {
      required: true,
      label: "Username",
      minLength: 4,
      maxLength: 30,
      pattern: /^[a-zA-Z0-9._-]+$/,
      patternMessage:
        "Username may contain letters, numbers, dots, underscores and hyphens only.",
    },
    role: {
      required: true,
      label: "System Role",
    },
    password: {
      required: true,
      label: "Password",
      minLength: 8,
      maxLength: 128,
      type: "password",
    },
    confirmPassword: {
      required: true,
      label: "Confirm Password",
      type: "confirmPassword",
    },
    accountStatus: {
      required: true,
      label: "Account Status",
    },
  },
};

export const validateStaffField = (
  fieldName,
  value,
  rules = {},
  formData = {}
) => {
  const label = rules.label || fieldName;
  const normalizedValue =
    value === null || value === undefined ? "" : String(value).trim();

  if (rules.required && !normalizedValue) {
    return `${label} is required.`;
  }

  // Optional fields need not pass format checks when empty.
  if (!normalizedValue) {
    return "";
  }

  if (
    rules.minLength &&
    normalizedValue.length < rules.minLength
  ) {
    return `${label} must contain at least ${rules.minLength} characters.`;
  }

  if (
    rules.maxLength &&
    normalizedValue.length > rules.maxLength
  ) {
    return `${label} cannot exceed ${rules.maxLength} characters.`;
  }

  if (rules.type === "email" && !EMAIL_REGEX.test(normalizedValue)) {
    return "Enter a valid email address.";
  }

  if (rules.type === "phone" && !INDIAN_PHONE_REGEX.test(normalizedValue)) {
    return "Enter a valid 10-digit Indian mobile number.";
  }

  if (rules.type === "date") {
    const date = new Date(normalizedValue);

    if (Number.isNaN(date.getTime())) {
      return `Enter a valid ${label.toLowerCase()}.`;
    }

    if (fieldName === "dateOfBirth" && date > new Date()) {
      return "Date of birth cannot be in the future.";
    }

    if (fieldName === "joiningDate" && date > new Date()) {
      // Future joining dates may be valid for planned hires.
      // Remove this condition if future joining dates are allowed.
    }
  }

  if (rules.type === "year") {
    const year = Number(normalizedValue);
    const currentYear = new Date().getFullYear();

    if (
      !Number.isInteger(year) ||
      year < 1950 ||
      year > currentYear
    ) {
      return `Enter a valid passing year between 1950 and ${currentYear}.`;
    }
  }

  if (rules.type === "experience") {
    const years = Number(normalizedValue);

    if (!Number.isFinite(years) || years < 0 || years > 70) {
      return "Experience must be between 0 and 70 years.";
    }
  }

  if (rules.type === "password" && !/(?=.*[A-Za-z])(?=.*\d)/.test(normalizedValue)) {
    return "Password must contain at least one letter and one number.";
  }

  if (
    rules.type === "confirmPassword" &&
    normalizedValue !== String(formData.password || "")
  ) {
    return "Passwords do not match.";
  }

  if (rules.pattern && !rules.pattern.test(normalizedValue)) {
    return rules.patternMessage || `${label} has an invalid format.`;
  }

  return "";
};

export const validateStaffStep = (
  stepKey,
  formData = {},
  validationConfig = staffValidationConfig
) => {
  const rules = validationConfig[stepKey] || {};
  const errors = {};

  Object.entries(rules).forEach(([fieldName, fieldRules]) => {
    const error = validateStaffField(
      fieldName,
      formData[fieldName],
      fieldRules,
      formData
    );

    if (error) {
      errors[fieldName] = error;
    }
  });

  return errors;
};

export const validateStaffForm = (
  formData = {},
  validationConfig = staffValidationConfig
) => {
  const errors = {};

  Object.keys(validationConfig).forEach((stepKey) => {
    Object.assign(
      errors,
      validateStaffStep(stepKey, formData, validationConfig)
    );
  });

  return errors;
};

export default staffValidationConfig;
