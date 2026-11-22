export const patientsDashboardMock = {
  stats: {
    bp: { value: "110/70", change: "+10%" },
    heart: { value: "650", change: "-7%" },
    glucose: { value: "88-75", change: "+12%" },
    count: { value: "9,456/mL", change: "-22%" },
  },

  charts: {
    resting: [69, 72, 75, 74, 72],
    performance: [113, 120, 130, 120, 125, 119, 126],
  },

  medications: [
    { name: "Desmopressin tabs", dose: "1-1-1" },
    { name: "Abciximab injection", dose: "1 Daily" },
    { name: "Kevzara sarilumab", dose: "0-0-1" },
    { name: "Gentamicin topical", dose: "1-0-1" },
    { name: "Paliperidone", dose: "1-1-1" },
    { name: "Amoxicillin tabs", dose: "1-0-1" },
    { name: "Amoxicillin tabs", dose: "1-0-1" },
    { name: "Amoxicillin tabs", dose: "1-0-1" },
    { name: "Amoxicillin tabs", dose: "1-0-1" },
    { name: "Amoxicillin tabs", dose: "1-0-1" },
    { name: "Amoxicillin tabs", dose: "1-0-1" },
    { name: "Amoxicillin tabs", dose: "1-0-1" },
    { name: "Amoxicillin tabs", dose: "1-0-1" },
    { name: "Amoxicillin tabs", dose: "1-0-1" },
    { name: "Amoxicillin tabs", dose: "1-0-1" },
    { name: "Amoxicillin tabs", dose: "1-0-1" },
  ],
};

export default patientsDashboardMock;