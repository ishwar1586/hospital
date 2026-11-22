import admissions from "../mock/admission.mock";

export const getAdmissions = async () => {
  return Promise.resolve({
    success: true,
    data: admissions
  });
};