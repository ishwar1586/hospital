
// src/master_modules/RadiologyManagement/mock/radiologyFormOptions.mock.js

export const radiologyFormOptionsMock = {
  modalities: [
    { value: "x-ray", label: "X-Ray" },
    { value: "ct", label: "CT Scan" },
    { value: "mri", label: "MRI" },
    { value: "ultrasound", label: "Ultrasound" },
    { value: "mammography", label: "Mammography" },
  ],

  gender: [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ],

  contrast: [
    { value: "not-required", label: "Not Required" },
    { value: "with-contrast", label: "With Contrast" },
    { value: "without-contrast", label: "Without Contrast" },
    { value: "to-be-decided", label: "To Be Decided" },
  ],

  priority: [
    {
      value: "routine",
      label: "Routine",
      description: "Standard scheduling",
    },
    {
      value: "urgent",
      label: "Urgent",
      description: "Requires prompt clinical review",
    },
    {
      value: "stat",
      label: "STAT",
      description: "Immediate priority per clinical protocol",
    },
  ],
};



export default radiologyFormOptionsMock;
