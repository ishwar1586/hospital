// const admissions = [
//   {
//     id: 1,
//     ipdNo: "IPD2026001",
//     uhid: "UHID10001",
//     patientName: "Rohan Sharma",
//     age: 45,
//     gender: "Male",
//     doctor: "Dr. Amit Kumar",
//     department: "Medicine",
//     ward: "General Ward",
//     room: "G-101",
//     bed: "B-01",
//     admissionDate: "2026-06-10",
//     status: "Admitted",
//     payerType: "Cash"
//   },
//   {
//     id: 2,
//     ipdNo: "IPD2026002",
//     uhid: "UHID10002",
//     patientName: "Neha Verma",
//     age: 32,
//     gender: "Female",
//     doctor: "Dr. Priya Singh",
//     department: "Gynecology",
//     ward: "Private Ward",
//     room: "P-201",
//     bed: "B-02",
//     admissionDate: "2026-06-09",
//     status: "Admitted",
//     payerType: "Insurance"
//   },
//   {
//     id: 3,
//     ipdNo: "IPD2026003",
//     uhid: "UHID10003",
//     patientName: "Amit Yadav",
//     age: 56,
//     gender: "Male",
//     doctor: "Dr. Rajesh Gupta",
//     department: "Cardiology",
//     ward: "ICU",
//     room: "ICU-01",
//     bed: "B-03",
//     admissionDate: "2026-06-08",
//     status: "Critical",
//     payerType: "Cash"
//   },
//   {
//     id: 4,
//     ipdNo: "IPD2026004",
//     uhid: "UHID10004",
//     patientName: "Pooja Sharma",
//     age: 28,
//     gender: "Female",
//     doctor: "Dr. Priya Singh",
//     department: "Gynecology",
//     ward: "Private Ward",
//     room: "P-202",
//     bed: "B-01",
//     admissionDate: "2026-06-07",
//     status: "Pending Discharge",
//     payerType: "Insurance"
//   },
//   {
//     id: 5,
//     ipdNo: "IPD2026005",
//     uhid: "UHID10005",
//     patientName: "Rahul Kumar",
//     age: 39,
//     gender: "Male",
//     doctor: "Dr. Amit Kumar",
//     department: "Medicine",
//     ward: "General Ward",
//     room: "G-102",
//     bed: "B-02",
//     admissionDate: "2026-06-06",
//     status: "Admitted",
//     payerType: "Cash"
//   },
//   {
//     id: 6,
//     ipdNo: "IPD2026006",
//     uhid: "UHID10006",
//     patientName: "Anjali Gupta",
//     age: 47,
//     gender: "Female",
//     doctor: "Dr. Sandeep Mehta",
//     department: "Neurology",
//     ward: "ICU",
//     room: "ICU-02",
//     bed: "B-01",
//     admissionDate: "2026-06-05",
//     status: "Critical",
//     payerType: "Insurance"
//   },
//   {
//     id: 7,
//     ipdNo: "IPD2026007",
//     uhid: "UHID10007",
//     patientName: "Vikas Singh",
//     age: 51,
//     gender: "Male",
//     doctor: "Dr. Rajesh Gupta",
//     department: "Cardiology",
//     ward: "CCU",
//     room: "CCU-01",
//     bed: "B-02",
//     admissionDate: "2026-06-04",
//     status: "Transferred",
//     payerType: "Cash"
//   },
//   {
//     id: 8,
//     ipdNo: "IPD2026008",
//     uhid: "UHID10008",
//     patientName: "Kiran Devi",
//     age: 62,
//     gender: "Female",
//     doctor: "Dr. Amit Kumar",
//     department: "Medicine",
//     ward: "General Ward",
//     room: "G-103",
//     bed: "B-03",
//     admissionDate: "2026-06-03",
//     status: "Admitted",
//     payerType: "Cash"
//   },
//   {
//     id: 9,
//     ipdNo: "IPD2026009",
//     uhid: "UHID10009",
//     patientName: "Mohit Sharma",
//     age: 30,
//     gender: "Male",
//     doctor: "Dr. Priya Singh",
//     department: "Orthopedics",
//     ward: "Private Ward",
//     room: "P-203",
//     bed: "B-01",
//     admissionDate: "2026-06-02",
//     status: "Pending Discharge",
//     payerType: "Insurance"
//   },
//   {
//     id: 10,
//     ipdNo: "IPD2026010",
//     uhid: "UHID10010",
//     patientName: "Sunita Verma",
//     age: 44,
//     gender: "Female",
//     doctor: "Dr. Sandeep Mehta",
//     department: "Neurology",
//     ward: "ICU",
//     room: "ICU-03",
//     bed: "B-02",
//     admissionDate: "2026-06-01",
//     status: "Critical",
//     payerType: "Cash"
//   },
//   {
//     id: 11,
//     ipdNo: "IPD2026011",
//     uhid: "UHID10011",
//     patientName: "Deepak Kumar",
//     age: 35,
//     gender: "Male",
//     doctor: "Dr. Amit Kumar",
//     department: "Medicine",
//     ward: "General Ward",
//     room: "G-104",
//     bed: "B-01",
//     admissionDate: "2026-05-31",
//     status: "Admitted",
//     payerType: "Cash"
//   },
//   {
//     id: 12,
//     ipdNo: "IPD2026012",
//     uhid: "UHID10012",
//     patientName: "Sneha Gupta",
//     age: 29,
//     gender: "Female",
//     doctor: "Dr. Priya Singh",
//     department: "Gynecology",
//     ward: "Private Ward",
//     room: "P-204",
//     bed: "B-03",
//     admissionDate: "2026-05-30",
//     status: "Transferred",
//     payerType: "Insurance"
//   },
//   {
//     id: 13,
//     ipdNo: "IPD2026013",
//     uhid: "UHID10013",
//     patientName: "Arjun Yadav",
//     age: 60,
//     gender: "Male",
//     doctor: "Dr. Rajesh Gupta",
//     department: "Cardiology",
//     ward: "CCU",
//     room: "CCU-02",
//     bed: "B-01",
//     admissionDate: "2026-05-29",
//     status: "Admitted",
//     payerType: "Cash"
//   },
//   {
//     id: 14,
//     ipdNo: "IPD2026014",
//     uhid: "UHID10014",
//     patientName: "Meena Sharma",
//     age: 48,
//     gender: "Female",
//     doctor: "Dr. Sandeep Mehta",
//     department: "Neurology",
//     ward: "ICU",
//     room: "ICU-04",
//     bed: "B-01",
//     admissionDate: "2026-05-28",
//     status: "Pending Discharge",
//     payerType: "Insurance"
//   },
//   {
//     id: 15,
//     ipdNo: "IPD2026015",
//     uhid: "UHID10015",
//     patientName: "Rakesh Verma",
//     age: 54,
//     gender: "Male",
//     doctor: "Dr. Amit Kumar",
//     department: "Medicine",
//     ward: "General Ward",
//     room: "G-105",
//     bed: "B-02",
//     admissionDate: "2026-05-27",
//     status: "Admitted",
//     payerType: "Cash"
//   }
// ];

// export default admissions;






const admissions = [
  {
    id: 1,
    ipdNo: "IPD2026001",
    uhid: "UHID10001",
    patientName: "Rohan Sharma",
    age: 45,
    gender: "Male",
    doctor: "Dr. Amit Kumar",
    department: "Medicine",
    ward: "General Ward",
    room: "G-101",
    bed: "B-01",
    admissionDate: "2026-06-10",
    status: "Admitted",
    payerType: "Cash",

    diagnosis: "Hypertension",
    treatmentSummary:
      "Managed with antihypertensive medications and regular blood pressure monitoring.",
    advice:
      "Low salt diet, regular exercise, continue medications and follow up after 7 days.",
    remarks:
      "Patient clinically stable and responding well to treatment.",
  },

  {
    id: 2,
    ipdNo: "IPD2026002",
    uhid: "UHID10002",
    patientName: "Neha Verma",
    age: 32,
    gender: "Female",
    doctor: "Dr. Priya Singh",
    department: "Gynecology",
    ward: "Private Ward",
    room: "P-201",
    bed: "B-02",
    admissionDate: "2026-06-09",
    status: "Admitted",
    payerType: "Insurance",

    diagnosis: "Ovarian Cyst",
    treatmentSummary:
      "Patient evaluated and managed conservatively with medication and observation.",
    advice:
      "Gynecology follow-up after 10 days. Avoid heavy physical activity.",
    remarks:
      "Patient condition improving satisfactorily.",
  },

  {
    id: 3,
    ipdNo: "IPD2026003",
    uhid: "UHID10003",
    patientName: "Amit Yadav",
    age: 56,
    gender: "Male",
    doctor: "Dr. Rajesh Gupta",
    department: "Cardiology",
    ward: "ICU",
    room: "ICU-01",
    bed: "B-03",
    admissionDate: "2026-06-08",
    status: "Critical",
    payerType: "Cash",

    diagnosis: "Acute Myocardial Infarction",
    treatmentSummary:
      "Patient admitted to ICU for intensive cardiac monitoring and emergency cardiac care.",
    advice:
      "Strict cardiac follow-up, medication compliance and lifestyle modification.",
    remarks:
      "Patient remains under close observation.",
  },

  {
    id: 4,
    ipdNo: "IPD2026004",
    uhid: "UHID10004",
    patientName: "Pooja Sharma",
    age: 28,
    gender: "Female",
    doctor: "Dr. Priya Singh",
    department: "Gynecology",
    ward: "Private Ward",
    room: "P-202",
    bed: "B-01",
    admissionDate: "2026-06-07",
    status: "Pending Discharge",
    payerType: "Insurance",

    diagnosis: "Post Delivery Care",
    treatmentSummary:
      "Routine postpartum monitoring completed successfully with stable vitals.",
    advice:
      "Adequate rest, proper nutrition and follow-up visit after one week.",
    remarks:
      "Fit for discharge after final evaluation.",
  },

  {
    id: 5,
    ipdNo: "IPD2026005",
    uhid: "UHID10005",
    patientName: "Rahul Kumar",
    age: 39,
    gender: "Male",
    doctor: "Dr. Amit Kumar",
    department: "Medicine",
    ward: "General Ward",
    room: "G-102",
    bed: "B-02",
    admissionDate: "2026-06-06",
    status: "Admitted",
    payerType: "Cash",

    diagnosis: "Dengue Fever",
    treatmentSummary:
      "Managed with IV fluids, platelet monitoring and symptomatic treatment.",
    advice:
      "Maintain hydration, avoid strenuous activity and repeat CBC after discharge.",
    remarks:
      "Platelet count improving gradually.",
  },

    {
    id: 6,
    ipdNo: "IPD2026006",
    uhid: "UHID10006",
    patientName: "Anjali Gupta",
    age: 47,
    gender: "Female",
    doctor: "Dr. Sandeep Mehta",
    department: "Neurology",
    ward: "ICU",
    room: "ICU-02",
    bed: "B-01",
    admissionDate: "2026-06-05",
    status: "Critical",
    payerType: "Insurance",

    diagnosis: "Stroke",
    treatmentSummary:
      "Neurological assessment completed and intensive monitoring initiated in ICU.",
    advice:
      "Regular rehabilitation sessions and neurological follow-up required.",
    remarks:
      "Condition guarded but stable.",
  },

  {
    id: 7,
    ipdNo: "IPD2026007",
    uhid: "UHID10007",
    patientName: "Vikas Singh",
    age: 51,
    gender: "Male",
    doctor: "Dr. Rajesh Gupta",
    department: "Cardiology",
    ward: "CCU",
    room: "CCU-01",
    bed: "B-02",
    admissionDate: "2026-06-04",
    status: "Transferred",
    payerType: "Cash",

    diagnosis: "Cardiac Arrhythmia",
    treatmentSummary:
      "Cardiac rhythm stabilized through medication and monitoring.",
    advice:
      "Continue cardiac medications and avoid excessive physical stress.",
    remarks:
      "Successfully transferred to CCU.",
  },

  {
    id: 8,
    ipdNo: "IPD2026008",
    uhid: "UHID10008",
    patientName: "Kiran Devi",
    age: 62,
    gender: "Female",
    doctor: "Dr. Amit Kumar",
    department: "Medicine",
    ward: "General Ward",
    room: "G-103",
    bed: "B-03",
    admissionDate: "2026-06-03",
    status: "Admitted",
    payerType: "Cash",

    diagnosis: "Type 2 Diabetes Mellitus",
    treatmentSummary:
      "Blood sugar levels managed with insulin and dietary modifications.",
    advice:
      "Maintain diabetic diet and monitor blood glucose regularly.",
    remarks:
      "Responding well to treatment.",
  },

  {
    id: 9,
    ipdNo: "IPD2026009",
    uhid: "UHID10009",
    patientName: "Mohit Sharma",
    age: 30,
    gender: "Male",
    doctor: "Dr. Priya Singh",
    department: "Orthopedics",
    ward: "Private Ward",
    room: "P-203",
    bed: "B-01",
    admissionDate: "2026-06-02",
    status: "Pending Discharge",
    payerType: "Insurance",

    diagnosis: "Tibia Fracture",
    treatmentSummary:
      "Casting completed successfully and pain managed with medication.",
    advice:
      "Avoid weight bearing and return for review after two weeks.",
    remarks:
      "Discharge planned after final orthopedic review.",
  },

  {
    id: 10,
    ipdNo: "IPD2026010",
    uhid: "UHID10010",
    patientName: "Sunita Verma",
    age: 44,
    gender: "Female",
    doctor: "Dr. Sandeep Mehta",
    department: "Neurology",
    ward: "ICU",
    room: "ICU-03",
    bed: "B-02",
    admissionDate: "2026-06-01",
    status: "Critical",
    payerType: "Cash",

    diagnosis: "Seizure Disorder",
    treatmentSummary:
      "Anti-epileptic treatment initiated and neurological monitoring continued.",
    advice:
      "Regular neurology consultation and strict medication adherence.",
    remarks:
      "Requires continued observation.",
  },

    {
    id: 11,
    ipdNo: "IPD2026011",
    uhid: "UHID10011",
    patientName: "Deepak Kumar",
    age: 35,
    gender: "Male",
    doctor: "Dr. Amit Kumar",
    department: "Medicine",
    ward: "General Ward",
    room: "G-104",
    bed: "B-01",
    admissionDate: "2026-05-31",
    status: "Admitted",
    payerType: "Cash",

    diagnosis: "Typhoid Fever",
    treatmentSummary:
      "Patient treated with antibiotics, hydration therapy and routine monitoring.",
    advice:
      "Complete medication course and maintain proper hygiene.",
    remarks:
      "Recovering steadily.",
  },

  {
    id: 12,
    ipdNo: "IPD2026012",
    uhid: "UHID10012",
    patientName: "Sneha Gupta",
    age: 29,
    gender: "Female",
    doctor: "Dr. Priya Singh",
    department: "Gynecology",
    ward: "Private Ward",
    room: "P-204",
    bed: "B-03",
    admissionDate: "2026-05-30",
    status: "Transferred",
    payerType: "Insurance",

    diagnosis: "Pelvic Infection",
    treatmentSummary:
      "IV antibiotic therapy administered with close observation.",
    advice:
      "Continue medicines and attend scheduled follow-up visits.",
    remarks:
      "Shifted to private ward after improvement.",
  },

  {
    id: 13,
    ipdNo: "IPD2026013",
    uhid: "UHID10013",
    patientName: "Arjun Yadav",
    age: 60,
    gender: "Male",
    doctor: "Dr. Rajesh Gupta",
    department: "Cardiology",
    ward: "CCU",
    room: "CCU-02",
    bed: "B-01",
    admissionDate: "2026-05-29",
    status: "Admitted",
    payerType: "Cash",

    diagnosis: "Congestive Heart Failure",
    treatmentSummary:
      "Managed with cardiac medications, fluid restriction and monitoring.",
    advice:
      "Strict cardiac diet and regular cardiology follow-up.",
    remarks:
      "Condition stable with ongoing treatment.",
  },

  {
    id: 14,
    ipdNo: "IPD2026014",
    uhid: "UHID10014",
    patientName: "Meena Sharma",
    age: 48,
    gender: "Female",
    doctor: "Dr. Sandeep Mehta",
    department: "Neurology",
    ward: "ICU",
    room: "ICU-04",
    bed: "B-01",
    admissionDate: "2026-05-28",
    status: "Pending Discharge",
    payerType: "Insurance",

    diagnosis: "Migraine Disorder",
    treatmentSummary:
      "Symptoms controlled successfully with medication and observation.",
    advice:
      "Avoid known triggers, maintain sleep schedule and continue medicines.",
    remarks:
      "Ready for discharge after final review.",
  },

  {
    id: 15,
    ipdNo: "IPD2026015",
    uhid: "UHID10015",
    patientName: "Rakesh Verma",
    age: 54,
    gender: "Male",
    doctor: "Dr. Amit Kumar",
    department: "Medicine",
    ward: "General Ward",
    room: "G-105",
    bed: "B-02",
    admissionDate: "2026-05-27",
    status: "Admitted",
    payerType: "Cash",

    diagnosis: "Chronic Kidney Disease",
    treatmentSummary:
      "Renal function monitored regularly with supportive treatment.",
    advice:
      "Follow renal diet and attend nephrology consultations regularly.",
    remarks:
      "Condition stable and under control.",
  },
];

export default admissions;