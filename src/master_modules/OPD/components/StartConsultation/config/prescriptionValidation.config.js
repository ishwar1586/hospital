
/* =========================================
   PRESCRIPTION VALIDATION CONFIGURATION
========================================= */

// Validation Rules
export const prescriptionValidationConfig = {
  medicine: {
    required: true,
    minItems: 1,
    message: "Please add at least one medicine.",
  },

  medicineFields: {
    name: {
      required: true,
      message: "Medicine name is required.",
    },

    dose: {
      required: true,
      message: "Please enter medicine dose.",
    },

    route: {
      required: true,
      message: "Please select medicine route.",
    },

    frequency: {
      required: true,
      message: "Please select medicine frequency.",
    },

    duration: {
      required: true,
      message: "Please select medicine duration.",
    },

    instruction: {
      required: false,
      maxLength: 250,
      message: "Instructions cannot exceed 250 characters.",
    },
  },

  additionalInstructions: {
    required: false,
    maxLength: 1000,
    message: "Additional instructions cannot exceed 1000 characters.",
  },

  followUp: {
    required: false,

    date: {
      required: false,
      message: "Please select a valid follow-up date.",
    },

    type: {
      required: false,
      message: "Please select a follow-up type.",
    },
  },

  prescription: {
    patientIdRequired: true,
    doctorIdRequired: true,
    consultationIdRequired: true,
  },
};

// Validate individual medicine
export const validatePrescriptionMedicine = (medicine = {}) => {
  const errors = {};

  Object.entries(
    prescriptionValidationConfig.medicineFields
  ).forEach(([field, rules]) => {
    const value = medicine[field];

    if (
      rules.required &&
      (value === undefined ||
        value === null ||
        String(value).trim() === "")
    ) {
      errors[field] = rules.message;
      return;
    }

    if (
      rules.maxLength &&
      value &&
      String(value).length > rules.maxLength
    ) {
      errors[field] = rules.message;
    }
  });

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// Validate complete prescription
export const validatePrescription = (payload = {}) => {
  const errors = {};

  const {
    patientId,
    doctorId,
    consultationId,
    medicines = [],
    additionalInstructions = "",
    followUp = {},
  } = payload;

  const config = prescriptionValidationConfig;

  // Patient validation
  if (config.prescription.patientIdRequired && !patientId) {
    errors.patientId = "Patient information is required.";
  }

  // Doctor validation
  if (config.prescription.doctorIdRequired && !doctorId) {
    errors.doctorId = "Doctor information is required.";
  }

  // Consultation validation
  if (
    config.prescription.consultationIdRequired &&
    !consultationId
  ) {
    errors.consultationId = "Consultation information is required.";
  }

  // Medicine validation
  if (
    !Array.isArray(medicines) ||
    medicines.length < config.medicine.minItems
  ) {
    errors.medicines = config.medicine.message;
  } else {
    const medicineErrors = medicines.map((medicine, index) => {
      const result = validatePrescriptionMedicine(medicine);

      return Object.keys(result.errors).length
        ? {
            medicineId: medicine.id,
            index,
            fields: result.errors,
          }
        : null;
    });

    const invalidMedicines = medicineErrors.filter(Boolean);

    if (invalidMedicines.length > 0) {
      errors.medicineDetails = invalidMedicines;
    }
  }

  // Additional instructions validation
  if (
    additionalInstructions.length >
    config.additionalInstructions.maxLength
  ) {
    errors.additionalInstructions =
      config.additionalInstructions.message;
  }

  // Follow-up date validation
  if (followUp.date) {
    const selectedDate = new Date(`${followUp.date}T00:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (
      Number.isNaN(selectedDate.getTime()) ||
      selectedDate < today
    ) {
      errors.followUpDate =
        "Follow-up date cannot be in the past.";
    }
  }

  // Follow-up type validation
  if (followUp.type && !followUp.date) {
    errors.followUpDate =
      "Please select a follow-up date for the selected follow-up type.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
