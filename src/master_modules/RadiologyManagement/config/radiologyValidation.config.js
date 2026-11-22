// src/master_modules/RadiologyManagement/config/radiologyValidation.config.js

export const radiologyValidationConfig = {
  requiredFields: [
    "patientId",
    "modality",
    "testId",
    "orderingDoctorId",
    "clinicalIndication",
    "priority",
  ],

  maxLengths: {
    clinicalIndication: 500,
    relevantHistory: 2000,
    notes: 1000,
  },

  validate(formData, messages = {}) {
    const errors = {};

    const requiredMessages = {
      patientId: messages.patient ?? "Please select a patient.",
      modality: messages.modality ?? "Please select a modality.",
      testId: messages.test ?? "Please select an imaging study.",
      orderingDoctorId:
        messages.doctor ?? "Please select an ordering doctor.",
      clinicalIndication:
        messages.clinicalIndication ?? "Clinical indication is required.",
      priority: messages.priority ?? "Please select an order priority.",
    };

    this.requiredFields.forEach((field) => {
      const value = formData[field];

      if (value === null || value === undefined || String(value).trim() === "") {
        errors[field] = requiredMessages[field] ?? "This field is required.";
      }
    });

    Object.entries(this.maxLengths).forEach(([field, maxLength]) => {
      const value = formData[field];

      if (value && String(value).length > maxLength) {
        errors[field] = `Maximum ${maxLength} characters allowed.`;
      }
    });

    if (formData.requestedDate) {
      const requestedDate = new Date(`${formData.requestedDate}T00:00:00`);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (
        Number.isNaN(requestedDate.getTime()) ||
        requestedDate < today
      ) {
        errors.requestedDate =
          messages.requestedDate ?? "Select today or a future date.";
      }
    }

    if (
      formData.requestedTime &&
      !/^([01]\d|2[0-3]):[0-5]\d$/.test(formData.requestedTime)
    ) {
      errors.requestedTime =
        messages.requestedTime ?? "Enter a valid time.";
    }

    return errors;
  },
};


export default radiologyValidationConfig;