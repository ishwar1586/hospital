
/* =========================================
   PRESCRIPTION CONFIGURATION
========================================= */

// Medicine Route Options
export const prescriptionRouteOptions = [
  { label: "Oral", value: "oral" },
  { label: "Intravenous (IV)", value: "iv" },
  { label: "Intramuscular (IM)", value: "im" },
  { label: "Subcutaneous (SC)", value: "sc" },
  { label: "Topical", value: "topical" },
  { label: "Inhalation", value: "inhalation" },
  { label: "Sublingual", value: "sublingual" },
  { label: "Rectal", value: "rectal" },
  { label: "Ophthalmic", value: "ophthalmic" },
  { label: "Otic", value: "otic" },
];

// Medicine Frequency Options
export const prescriptionFrequencyOptions = [
  { label: "Once Daily (OD)", value: "od" },
  { label: "Twice Daily (BD)", value: "bd" },
  { label: "Three Times Daily (TDS)", value: "tds" },
  { label: "Four Times Daily (QID)", value: "qid" },
  { label: "Every 4 Hours", value: "every-4-hours" },
  { label: "Every 6 Hours", value: "every-6-hours" },
  { label: "Every 8 Hours", value: "every-8-hours" },
  { label: "Every 12 Hours", value: "every-12-hours" },
  { label: "At Bedtime (HS)", value: "hs" },
  { label: "As Required (SOS)", value: "sos" },
  { label: "Before Meals (AC)", value: "ac" },
  { label: "After Meals (PC)", value: "pc" },
];

// Medicine Duration Options
export const prescriptionDurationOptions = [
  { label: "1 Day", value: "1-day" },
  { label: "3 Days", value: "3-days" },
  { label: "5 Days", value: "5-days" },
  { label: "7 Days", value: "7-days" },
  { label: "10 Days", value: "10-days" },
  { label: "14 Days", value: "14-days" },
  { label: "21 Days", value: "21-days" },
  { label: "30 Days", value: "30-days" },
  { label: "60 Days", value: "60-days" },
  { label: "90 Days", value: "90-days" },
];

// Follow-up Type Options
export const prescriptionFollowUpTypes = [
  { label: "Routine Follow-up", value: "routine" },
  { label: "Review Visit", value: "review" },
  { label: "Report Review", value: "report-review" },
  { label: "As Required", value: "as-required" },
];

// Prescription Tab Configuration
export const prescriptionConfig = {
  title: "Prescription",
  subtitle: "Search medicines and create patient prescription",

  search: {
    placeholder: "Search medicine by name, code or manufacturer...",
    buttonLabel: "Search Medicine",
    previousPrescriptionLabel: "Load Previous Prescription",
  },

  medicineList: {
    title: "Selected Medicines",
    columns: [
      { key: "serialNumber", label: "#", width: "50px" },
      { key: "medicine", label: "Medicine / Composition" },
      { key: "dose", label: "Dose" },
      { key: "route", label: "Route" },
      { key: "frequency", label: "Frequency" },
      { key: "duration", label: "Duration" },
      { key: "instruction", label: "Instructions" },
      { key: "action", label: "Action", width: "80px" },
    ],
  },

  additionalInstructions: {
    title: "Additional Instructions",
    placeholder:
      "Add special instructions for the patient...",
    maxLength: 1000,
  },

  followUp: {
    title: "Follow-up",
    dateLabel: "Follow-up Date",
    typeLabel: "Follow-up Type",
  },

  actions: {
    save: "Save Prescription",
    print: "Print",
    download: "Download",
    sendToPharmacy: "Send to Pharmacy",
  },
};

// Medicine Form Field Configuration
export const prescriptionMedicineFields = [
  {
    name: "dose",
    label: "Dose",
    type: "text",
    placeholder: "e.g. 1 tablet",
    required: true,
  },
  {
    name: "route",
    label: "Route",
    type: "select",
    options: prescriptionRouteOptions,
    required: true,
  },
  {
    name: "frequency",
    label: "Frequency",
    type: "select",
    options: prescriptionFrequencyOptions,
    required: true,
  },
  {
    name: "duration",
    label: "Duration",
    type: "select",
    options: prescriptionDurationOptions,
    required: true,
  },
  {
    name: "instruction",
    label: "Instructions",
    type: "text",
    placeholder: "e.g. After meals",
    required: false,
  },
];
