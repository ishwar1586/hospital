export const createInitialConsultationForm = () => ({
  chiefComplaints: "",
  presentIllness: "",
  pastHistory: "",
  familyHistory: "",
  personalSocialHistory: "",

  examinationFindings: {
    generalCondition: "",
    consciousnessLevel: "",
    otherSystemicFindings: "",
    systemicExamination: {
      cardiovascular: "",
      respiratory: "",
      abdomen: "",
      centralNervousSystem: "",
    },
  },

  vitals: {
    bloodPressure: "",
    pulse: "",
    temperature: "",
    respiratoryRate: "",
    spo2: "",
    height: "",
    weight: "",
    bmi: "",
  },
});