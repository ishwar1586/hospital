// src/master_modules/RadiologyManagement/config/radiologyForm.config.js

export const radiologyFormConfig = {
  title: "New Radiology Order",
  subtitle:
    "Create an imaging request and provide the clinical information required by the radiology team.",

  sections: {
    patient: {
      title: "Patient Information",
      description: "Search for and select the patient for this order.",
    },
    study: {
      title: "Imaging Study",
      description: "Select the required modality and imaging procedure.",
    },
    clinical: {
      title: "Clinical Information",
      description: "Provide the clinical indication and relevant notes.",
    },
    priority: {
      title: "Order Priority",
      description: "Set urgency and the requested schedule.",
    },
  },

  fields: {
    patientSearch: {
      label: "Search Patient",
      placeholder: "Search by patient name, ID or phone number",
    },
    patientId: {
      label: "Patient ID",
    },
    patientName: {
      label: "Patient Name",
    },
    age: {
      label: "Age",
    },
    gender: {
      label: "Gender",
    },
    phone: {
      label: "Phone Number",
    },
    modality: {
      label: "Modality",
      placeholder: "Select modality",
    },
    test: {
      label: "Imaging Study",
      placeholder: "Select imaging study",
    },
    bodyPart: {
      label: "Body Part",
      placeholder: "Select body part",
    },
    contrast: {
      label: "Contrast",
      placeholder: "Select contrast requirement",
    },
    orderingDoctor: {
      label: "Ordering Doctor",
      placeholder: "Select ordering doctor",
    },
    clinicalIndication: {
      label: "Clinical Indication",
      placeholder: "Describe the reason for this imaging study",
    },
    relevantHistory: {
      label: "Relevant Clinical History",
      placeholder: "Enter symptoms, relevant history or previous findings",
    },
    priority: {
      label: "Priority",
    },
    requestedDate: {
      label: "Requested Date",
    },
    requestedTime: {
      label: "Requested Time",
    },
    notes: {
      label: "Additional Instructions",
      placeholder: "Enter any additional instructions for the radiology team",
    },
  },

  options: {
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
  },

  buttons: {
    cancel: "Cancel",
    saveDraft: "Save Draft",
    submit: "Place Order",
    submitting: "Submitting...",
  },

  validationMessages: {
    patient: "Please select a patient.",
    modality: "Please select a modality.",
    test: "Please select an imaging study.",
    doctor: "Please select an ordering doctor.",
    clinicalIndication: "Clinical indication is required.",
    priority: "Please select an order priority.",
    requestedDate: "Please select a valid requested date.",
    requestedTime: "Please select a valid requested time.",
    submitFailed: "The order could not be saved. Please try again.",
  },
};


export default radiologyFormConfig;