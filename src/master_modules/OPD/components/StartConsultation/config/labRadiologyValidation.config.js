
// src/master_modules/OPD/components/StartConsultation/config/labRadiologyValidation.config.js

export const labRadiologyValidationConfig = {
  minimumTests: 1,

  clinicalNote: {
    required: false,
    maxLength: 500,
  },

  rules: {
    preventDuplicateTests: true,
    requireValidTestId: true,
    requireTestName: true,
    requireTestType: true,
  },

  messages: {
    minimumTests: "Please select at least one test.",
    invalidTest: "Invalid test selected.",
    duplicateTest: "Duplicate tests are not allowed.",
    clinicalNoteLimit:
      "Clinical note cannot exceed 500 characters.",
  },
};

export const validateLabRadiologyOrder = (payload = {}) => {
  const errors = {};

  const tests = Array.isArray(payload.tests) ? payload.tests : [];
  const clinicalNote = payload.clinicalNote || "";

  if (tests.length < labRadiologyValidationConfig.minimumTests) {
    errors.tests = labRadiologyValidationConfig.messages.minimumTests;
  }

  const hasInvalidTest = tests.some(
    (test) =>
      !test.id ||
      !test.name ||
      !["lab", "radiology"].includes(test.type)
  );

  if (hasInvalidTest) {
    errors.invalidTest =
      labRadiologyValidationConfig.messages.invalidTest;
  }

  const testIds = tests.map((test) => test.id);

  if (
    labRadiologyValidationConfig.rules.preventDuplicateTests &&
    new Set(testIds).size !== testIds.length
  ) {
    errors.duplicateTest =
      labRadiologyValidationConfig.messages.duplicateTest;
  }

  if (
    clinicalNote.length >
    labRadiologyValidationConfig.clinicalNote.maxLength
  ) {
    errors.clinicalNote =
      labRadiologyValidationConfig.messages.clinicalNoteLimit;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
