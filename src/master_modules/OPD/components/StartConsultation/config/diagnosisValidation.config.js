
export const diagnosisValidationConfig = {
  provisionalDiagnosis: {
    required: false,
    maxLength: 500,
    message: "Provisional diagnosis cannot exceed 500 characters.",
  },

  finalDiagnosis: {
    required: false,
    maxLength: 500,
    message: "Final diagnosis cannot exceed 500 characters.",
  },

  differentialDiagnosis: {
    required: false,
    maxLength: 500,
    message: "Differential diagnosis cannot exceed 500 characters.",
  },

  clinicalAssessment: {
    required: false,
    maxLength: 2000,
    message: "Clinical assessment cannot exceed 2000 characters.",
  },
};
