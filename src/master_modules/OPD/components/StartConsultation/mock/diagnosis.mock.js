
export const initialDiagnosisData = {
  provisionalDiagnosis: "",
  finalDiagnosis: "",
  differentialDiagnosis: "",
  clinicalAssessment: "",
};

export const diagnosisMock = {
  patientId: "",
  consultationId: "",
  diagnosis: { ...initialDiagnosisData },
  status: "draft",
};
