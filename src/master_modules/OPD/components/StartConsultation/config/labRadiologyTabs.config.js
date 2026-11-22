
// src/master_modules/OPD/components/StartConsultation/config/labRadiologyTabs.config.js

export const labRadiologyTabsConfig = {
  defaultTab: "lab",

  tabs: [
    {
      id: "lab",
      label: "Lab Tests",
      icon: "science",
      dataKey: "labTests",
      enabled: true,
    },
    {
      id: "radiology",
      label: "Radiology Tests",
      icon: "image",
      dataKey: "radiologyTests",
      enabled: true,
    },
  ],
};
