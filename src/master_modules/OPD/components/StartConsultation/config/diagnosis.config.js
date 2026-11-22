
export const diagnosisConfig = {
  title: "Clinical Diagnosis",
  description: "Record diagnosis and clinical assessment for this consultation.",

  sections: {
    provisionalDiagnosis: {
      id: "provisional-diagnosis",
      title: "Provisional Diagnosis",
      description:
        "Document the provisional diagnosis based on current clinical assessment.",
      placeholder:
        "Enter provisional diagnosis (e.g. Acute gastroenteritis, Viral fever...)",
      maxLength: 500,
      rows: 4,
      required: false,
      icon: "description",
    },

    finalDiagnosis: {
      id: "final-diagnosis",
      title: "Final Diagnosis",
      description:
        "Document the confirmed diagnosis after complete evaluation.",
      placeholder: "Enter final diagnosis...",
      maxLength: 500,
      rows: 4,
      required: false,
      icon: "description",
    },

    differentialDiagnosis: {
      id: "differential-diagnosis",
      title: "Differential Diagnosis",
      description: "Add possible differential diagnoses to consider.",
      placeholder: "Enter differential diagnoses (one per line)...",
      maxLength: 500,
      rows: 4,
      required: false,
      icon: "diagnosis",
    },

    clinicalAssessment: {
      id: "clinical-assessment",
      title: "Clinical Assessment & Plan",
      description:
        "Enter overall clinical assessment and management plan.",
      placeholder: "Enter clinical assessment and plan...",
      maxLength: 2000,
      rows: 4,
      required: false,
      icon: "medical",
    },
  },
};
