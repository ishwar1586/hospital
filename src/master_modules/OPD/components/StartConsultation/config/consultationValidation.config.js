export const consultationValidationConfig = {
  chiefComplaints: {
    required: true,
    minLength: 3,
    maxLength: 1000,
    message: "Please enter the patient's chief complaints.",
  },

  presentIllness: {
    maxLength: 2000,
  },

  familyHistory: {
    maxLength: 1500,
  },

  personalSocialHistory: {
    maxLength: 1500,
  },

  examinationFindings: {
    generalCondition: {
      allowedValues: ["good", "fair", "poor", "critical"],
    },

    consciousnessLevel: {
      allowedValues: [
        "alert",
        "drowsy",
        "confused",
        "unconscious",
      ],
    },

    otherSystemicFindings: {
      maxLength: 2000,
    },
  },

  vitals: {
    bloodPressure: {
      type: "text",
      maxLength: 20,
    },
    pulse: {
      type: "number",
      min: 20,
      max: 250,
    },
    temperature: {
      type: "number",
      min: 25,
      max: 45,
    },
    respiratoryRate: {
      type: "number",
      min: 1,
      max: 100,
    },
    spo2: {
      type: "number",
      min: 0,
      max: 100,
    },
    height: {
      type: "number",
      min: 1,
      max: 300,
    },
    weight: {
      type: "number",
      min: 1,
      max: 500,
    },
  },
};