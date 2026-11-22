const prescriptionUploadConfig = {
  enabled: true,

  title: "Upload Prescription",

  subtitle:
    "Upload a prescription image or PDF",

  dropzone: {
    enabled: true,

    title: "Upload Prescription",

    text:
      "Drag & drop your prescription here or click to browse",

    allowedText:
      "PDF, JPG or PNG • Maximum 5 MB",
  },

  file: {
    allowedTypes: [
      "application/pdf",
      "image/jpeg",
      "image/png",
    ],

    maxFileSize: 5 * 1024 * 1024,

    maxFileSizeLabel: "5 MB",

    allowedExtensions: [
      ".pdf",
      ".jpg",
      ".jpeg",
      ".png",
    ],
  },

  buttons: {
    browse: {
      enabled: true,
      label: "Browse File",
    },

    preview: {
      enabled: true,
      label: "Preview Prescription",
    },

    remove: {
      enabled: true,
      label: "Remove Prescription",
    },
  },

  states: {
    empty: {
      title: "No Prescription Uploaded",
      message:
        "Upload a valid prescription to continue.",
    },

    invalidType: {
      title: "Invalid File",
      message:
        "Please upload a PDF, JPG or PNG file.",
    },

    fileTooLarge: {
      title: "File Too Large",
      message:
        "Prescription file size must not exceed 5 MB.",
    },
  },

  preview: {
    enabled: true,

    openInNewTab: true,

    imagePreview: true,

    pdfPreview: true,
  },

  responsive: {
    desktop: {
      minWidth: 1200,
    },

    tablet: {
      minWidth: 768,
      maxWidth: 1199,
    },

    mobile: {
      maxWidth: 767,
    },
  },
};

export default prescriptionUploadConfig;