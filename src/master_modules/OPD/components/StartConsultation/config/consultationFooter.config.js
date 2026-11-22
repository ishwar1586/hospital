
export const consultationFooterConfig = {
  consultation: {
    leftAction: {
      label: "Clear All",
      action: "clear",
      variant: "outline",
      visible: true,
    },

    secondaryAction: {
      label: "Save as Draft",
      action: "save",
      variant: "secondary",
      visible: true,
    },

    primaryAction: {
      label: "Next: Diagnosis",
      action: "next",
      variant: "primary",
      visible: true,
    },
  },

  diagnosis: {
    leftAction: {
      label: "Back",
      action: "back",
      variant: "outline",
      visible: true,
    },

    secondaryAction: {
      label: "Save as Draft",
      action: "save",
      variant: "secondary",
      visible: true,
    },

    primaryAction: {
      label: "Next: Prescription",
      action: "next",
      variant: "primary",
      visible: true,
    },
  },

  prescription: {
    leftAction: {
      label: "Back",
      action: "back",
      variant: "outline",
      visible: true,
    },

    secondaryAction: {
      label: "Save as Draft",
      action: "save",
      variant: "secondary",
      visible: true,
    },

    primaryAction: {
      label: "Next: Lab / Radiology",
      action: "next",
      variant: "primary",
      visible: true,
    },
  },

  "lab-radiology": {
    leftAction: {
      label: "Back",
      action: "back",
      variant: "outline",
      visible: true,
    },

    secondaryAction: {
      label: "Save as Draft",
      action: "save",
      variant: "secondary",
      visible: true,
    },

  //   primaryAction: {
  //     label: "Next: Follow-up",
  //     action: "next",
  //     variant: "primary",
  //     visible: true,
  //   },
  // },

  // "follow-up": {
  //   leftAction: {
  //     label: "Back",
  //     action: "back",
  //     variant: "outline",
  //     visible: true,
  //   },

    // secondaryAction: {
    //   label: "Save as Draft",
    //   action: "save",
    //   variant: "secondary",
    //   visible: true,
    // },

    primaryAction: {
      label: "Next: Documents",
      action: "next",
      variant: "primary",
      visible: true,
    },
  },

  documents: {
    leftAction: {
      label: "Back",
      action: "back",
      variant: "outline",
      visible: true,
    },

    secondaryAction: {
      label: "Save as Draft",
      action: "save",
      variant: "secondary",
      visible: true,
    },

    primaryAction: {
      label: "Complete Consultation",
      action: "complete",
      variant: "primary",
      visible: true,
    },
  },
};

export default consultationFooterConfig;
