
// src/master_modules/OPD/components/StartConsultation/config/labRadiology.config.js

export const labRadiologyConfig = {
  page: {
    title: "Lab / Radiology",
    searchPlaceholder: "Search test (e.g. CBC, LFT, X-Ray, USG)...",
    searchButtonLabel: "Search",
  },

  testSelection: {
    title: "Available Tests",
    columns: [
      {
        key: "selection",
        label: "",
        type: "checkbox",
        width: "10%",
      },
      {
        key: "name",
        label: "Test Name",
        type: "text",
        width: "55%",
      },
      {
        key: "category",
        label: "Category",
        type: "category",
        width: "35%",
      },
    ],
    emptyMessage: "No tests found.",
    loadingMessage: "Loading tests...",
  },

    selectedTests: {
    title: "Selected Tests",
    emptyMessage: "No tests selected yet.",
    removeLabel: "Remove test",
    countLabel: "tests selected",

    typeLabels: {
      lab: "Lab",
      radiology: "Radiology",
    },
  },

  clinicalNote: {
    label: "Clinical Note",
    optionalLabel: "(Optional)",
    placeholder:
      "Add any specific instructions for the lab/radiology team...",
    maxLength: 500,
    showCharacterCount: true,
  },

  notifications: {
    testAdded: "Test added successfully.",
    testRemoved: "Test removed successfully.",
    duplicateTest: "This test is already selected.",
    noTestsSelected: "Please select at least one test.",
    saveSuccess: "Lab / Radiology order saved successfully.",
    saveError: "Unable to save Lab / Radiology order.",
  },
};
