
export const consultationFormConfig = {
  title: "Consultation Notes",
  description:
    "Record patient complaints, clinical history and examination findings.",

  sections: [
    {
      id: "consultation-notes",
      title: "Consultation Notes",
      description: "Patient complaints and medical history",
    },
    {
      id: "patient-vitals",
      title: "Patient Vitals",
      description: "Record the patient's vital measurements",
    },
  ],

  fields: {
    presentIllness: {
      title: "History of Present Illness",
      description:
        "Record the history and progression of the current illness.",
      label: "Present Illness",
      placeholder:
        "Describe the patient's current illness, onset, duration and progression...",
      hint:
        "Include onset, duration, location, severity and associated symptoms.",
    },

    pastHistory: {
      title: "Past Medical History",
      description:
        "Record the patient's relevant previous medical history.",
      label: "Previous Medical History",
      placeholder:
        "Enter previous illnesses, medical conditions, surgeries or other relevant history...",
      hint:
        "Include previous diagnoses, surgeries, hospitalizations and relevant medical events.",
    },

    familyHistory: {
      title: "Family Medical History",
      description:
        "Record relevant medical conditions in the patient's family.",
      label: "Family History",
      placeholder: "Enter relevant family medical history...",
      hint:
        "Include family relationship, medical condition and any relevant details.",
    },

    personalSocialHistory: {
      title: "Personal & Social History",
      description:
        "Record the patient's lifestyle and social habits.",
      label: "Personal & Social History",
      placeholder:
        "Enter smoking, alcohol, tobacco, occupation, dietary habits and other relevant details...",
      hint:
        "Record relevant habits, duration, frequency and occupational details.",
    },

    examinationFindings: {
      title: "Clinical Examination",
      description:
        "Record general and systemic examination findings.",

      fields: {
        generalCondition: {
          label: "General Condition",
          placeholder: "Select condition",
        },

        consciousnessLevel: {
          label: "Consciousness Level",
          placeholder: "Select level",
        },

        cardiovascular: {
          label: "Cardiovascular System",
          placeholder: "Enter cardiovascular findings...",
        },

        respiratory: {
          label: "Respiratory System",
          placeholder: "Enter respiratory findings...",
        },

        abdomen: {
          label: "Abdominal Examination",
          placeholder: "Enter abdominal findings...",
        },

        centralNervousSystem: {
          label: "Central Nervous System",
          placeholder: "Enter CNS findings...",
        },

        otherSystemicFindings: {
          label: "Other Systemic Findings",
          placeholder: "Enter additional examination findings...",
        },
      },
    },

    vitals: {
      title: "Patient Vitals",
      description:
        "Record the patient's vital measurements.",

      fields: {
        bloodPressure: {
          label: "Blood Pressure",
          placeholder: "e.g. 120/80",
          unit: "mmHg",
        },

        pulse: {
          label: "Pulse Rate",
          placeholder: "Enter pulse",
          unit: "bpm",
        },

        temperature: {
          label: "Temperature",
          placeholder: "Enter temperature",
          unit: "°C",
        },

        respiratoryRate: {
          label: "Respiratory Rate",
          placeholder: "Enter respiratory rate",
          unit: "breaths/min",
        },

        spo2: {
          label: "Oxygen Saturation",
          placeholder: "Enter SpO₂",
          unit: "%",
        },

        height: {
          label: "Height",
          placeholder: "Enter height",
          unit: "cm",
        },

        weight: {
          label: "Weight",
          placeholder: "Enter weight",
          unit: "kg",
        },

        bmi: {
          label: "Body Mass Index",
          placeholder: "Auto calculated",
          unit: "kg/m²",
          readOnly: true,
        },
      },
    },
  },
};

export const generalConditionOptions = [
  { label: "Select condition", value: "" },
  { label: "Good", value: "good" },
  { label: "Fair", value: "fair" },
  { label: "Poor", value: "poor" },
  { label: "Critical", value: "critical" },
];

export const consciousnessOptions = [
  { label: "Select level", value: "" },
  { label: "Alert", value: "alert" },
  { label: "Drowsy", value: "drowsy" },
  { label: "Confused", value: "confused" },
  { label: "Unconscious", value: "unconscious" },
];
