
/* =========================================
   MEDICINES MOCK DATA
   OPD PRESCRIPTION MODULE
========================================= */

export const medicinesMock = [
  {
    id: "MED001",
    medicineCode: "PCM500",
    name: "Paracetamol",
    genericName: "Paracetamol",
    brandName: "Dolo",
    strength: "500 mg",
    dosageForm: "Tablet",
    composition: "Paracetamol 500 mg",
    manufacturer: "Micro Labs",
    category: "Analgesic & Antipyretic",
    packSize: "15 Tablets",
    unit: "Tablet",
    available: true,

    dose: "",
    route: "",
    frequency: "",
    duration: "",
    instruction: "",
  },

  {
    id: "MED002",
    medicineCode: "AMX500",
    name: "Amoxicillin",
    genericName: "Amoxicillin",
    brandName: "Mox",
    strength: "500 mg",
    dosageForm: "Capsule",
    composition: "Amoxicillin 500 mg",
    manufacturer: "Sun Pharmaceutical",
    category: "Antibiotic",
    packSize: "10 Capsules",
    unit: "Capsule",
    available: true,

    dose: "",
    route: "",
    frequency: "",
    duration: "",
    instruction: "",
  },

  {
    id: "MED003",
    medicineCode: "CET10",
    name: "Cetirizine",
    genericName: "Cetirizine Hydrochloride",
    brandName: "Cetzine",
    strength: "10 mg",
    dosageForm: "Tablet",
    composition: "Cetirizine Hydrochloride 10 mg",
    manufacturer: "Dr. Reddy's Laboratories",
    category: "Antihistamine",
    packSize: "10 Tablets",
    unit: "Tablet",
    available: true,

    dose: "",
    route: "",
    frequency: "",
    duration: "",
    instruction: "",
  },

  {
    id: "MED004",
    medicineCode: "PNT40",
    name: "Pantoprazole",
    genericName: "Pantoprazole",
    brandName: "Pan",
    strength: "40 mg",
    dosageForm: "Tablet",
    composition: "Pantoprazole 40 mg",
    manufacturer: "Alkem Laboratories",
    category: "Proton Pump Inhibitor",
    packSize: "15 Tablets",
    unit: "Tablet",
    available: true,

    dose: "",
    route: "",
    frequency: "",
    duration: "",
    instruction: "",
  },

  {
    id: "MED005",
    medicineCode: "IBU400",
    name: "Ibuprofen",
    genericName: "Ibuprofen",
    brandName: "Brufen",
    strength: "400 mg",
    dosageForm: "Tablet",
    composition: "Ibuprofen 400 mg",
    manufacturer: "Abbott Healthcare",
    category: "NSAID",
    packSize: "10 Tablets",
    unit: "Tablet",
    available: true,

    dose: "",
    route: "",
    frequency: "",
    duration: "",
    instruction: "",
  },

  {
    id: "MED006",
    medicineCode: "AZI500",
    name: "Azithromycin",
    genericName: "Azithromycin",
    brandName: "Azee",
    strength: "500 mg",
    dosageForm: "Tablet",
    composition: "Azithromycin 500 mg",
    manufacturer: "Cipla",
    category: "Antibiotic",
    packSize: "3 Tablets",
    unit: "Tablet",
    available: true,

    dose: "",
    route: "",
    frequency: "",
    duration: "",
    instruction: "",
  },

  {
    id: "MED007",
    medicineCode: "MET500",
    name: "Metformin",
    genericName: "Metformin Hydrochloride",
    brandName: "Glycomet",
    strength: "500 mg",
    dosageForm: "Tablet",
    composition: "Metformin Hydrochloride 500 mg",
    manufacturer: "USV Private Limited",
    category: "Antidiabetic",
    packSize: "10 Tablets",
    unit: "Tablet",
    available: true,

    dose: "",
    route: "",
    frequency: "",
    duration: "",
    instruction: "",
  },

  {
    id: "MED008",
    medicineCode: "ORS001",
    name: "Oral Rehydration Salts",
    genericName: "ORS",
    brandName: "Electral",
    strength: "21.8 g",
    dosageForm: "Powder",
    composition: "Oral Rehydration Salts",
    manufacturer: "FDC Limited",
    category: "Electrolyte Replacement",
    packSize: "1 Sachet",
    unit: "Sachet",
    available: true,

    dose: "",
    route: "",
    frequency: "",
    duration: "",
    instruction: "",
  },

  {
    id: "MED009",
    medicineCode: "VITD60",
    name: "Cholecalciferol",
    genericName: "Vitamin D3",
    brandName: "Uprise-D3",
    strength: "60000 IU",
    dosageForm: "Capsule",
    composition: "Cholecalciferol 60000 IU",
    manufacturer: "Alkem Laboratories",
    category: "Vitamin Supplement",
    packSize: "4 Capsules",
    unit: "Capsule",
    available: true,

    dose: "",
    route: "",
    frequency: "",
    duration: "",
    instruction: "",
  },

  {
    id: "MED010",
    medicineCode: "OMZ20",
    name: "Omeprazole",
    genericName: "Omeprazole",
    brandName: "Omez",
    strength: "20 mg",
    dosageForm: "Capsule",
    composition: "Omeprazole 20 mg",
    manufacturer: "Dr. Reddy's Laboratories",
    category: "Proton Pump Inhibitor",
    packSize: "10 Capsules",
    unit: "Capsule",
    available: true,

    dose: "",
    route: "",
    frequency: "",
    duration: "",
    instruction: "",
  },
];

/* =========================================
   MEDICINE SEARCH HELPER
========================================= */

export const searchMedicines = (searchTerm = "") => {
  const query = searchTerm.trim().toLowerCase();

  if (!query) return [];

  return medicinesMock.filter((medicine) => {
    return (
      medicine.name.toLowerCase().includes(query) ||
      medicine.genericName.toLowerCase().includes(query) ||
      medicine.brandName.toLowerCase().includes(query) ||
      medicine.medicineCode.toLowerCase().includes(query) ||
      medicine.manufacturer.toLowerCase().includes(query) ||
      medicine.composition.toLowerCase().includes(query)
    );
  });
};

/* =========================================
   GET MEDICINE BY ID
========================================= */

export const getMedicineById = (medicineId) => {
  return (
    medicinesMock.find(
      (medicine) => medicine.id === medicineId
    ) || null
  );
};
