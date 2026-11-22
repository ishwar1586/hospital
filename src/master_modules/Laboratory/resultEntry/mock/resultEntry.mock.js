// =========================================
// RESULT ENTRY MOCK DATA
// =========================================

const resultEntryData = [

    // =========================================
    // 001
    // =========================================

    {
        id: "RE-001",

        accessionNo:
            "ACC-20260815-001",

        patientName:
            "Rahul Sharma",

        age: 42,

        gender:
            "Male",

        patientId:
            "UHID-100245",

        uhid:
            "UHID-100245",

        sampleType:
            "EDTA Blood",

        collectedOn:
            "16 Aug 2026, 09:10 AM",

        receivedOn:
            "16 Aug 2026, 09:25 AM",

        testName:
            "Complete Blood Count",

        testProfile:
            "Complete Blood Count",

        department:
            "Hematology",

        analyzer:
            "Sysmex XN-1000",

        priority:
            "High",

        tat:
            "42 min",

        tatStatus:
            "normal",

        resultStatus:
            "Pending",

        status:
            "Pending",

        // =====================================
        // TEST RESULTS
        // =====================================

        results: [

            {
                id:
                    "cbc-hb",

                testName:
                    "Hemoglobin (Hb)",

                testCode:
                    "CBC-HB",

                result:
                    "",

                unit:
                    "g/dL",

                referenceRange:
                    "13.0 - 17.0",

                flag:
                    "",

                status:
                    "Pending",
            },


            {
                id:
                    "cbc-rbc",

                testName:
                    "Total RBC Count",

                testCode:
                    "CBC-RBC",

                result:
                    "",

                unit:
                    "million/cumm",

                referenceRange:
                    "4.5 - 5.5",

                flag:
                    "",

                status:
                    "Pending",
            },


            {
                id:
                    "cbc-wbc",

                testName:
                    "Total WBC Count",

                testCode:
                    "CBC-WBC",

                result:
                    "",

                unit:
                    "cells/cumm",

                referenceRange:
                    "4000 - 11000",

                flag:
                    "",

                status:
                    "Pending",
            },


            {
                id:
                    "cbc-platelet",

                testName:
                    "Platelet Count",

                testCode:
                    "CBC-PLT",

                result:
                    "",

                unit:
                    "lakh/cumm",

                referenceRange:
                    "1.5 - 4.0",

                flag:
                    "",

                status:
                    "Pending",
            },


            {
                id:
                    "cbc-esr",

                testName:
                    "ESR (1st Hour)",

                testCode:
                    "CBC-ESR",

                result:
                    "",

                unit:
                    "mm/hr",

                referenceRange:
                    "0 - 15",

                flag:
                    "",

                status:
                    "Pending",
            },


            {
                id:
                    "cbc-crp",

                testName:
                    "C-Reactive Protein (CRP)",

                testCode:
                    "CBC-CRP",

                result:
                    "",

                unit:
                    "mg/L",

                referenceRange:
                    "< 6.0",

                flag:
                    "",

                status:
                    "Pending",
            },

        ],

        // =====================================
        // PREVIOUS RESULTS
        // =====================================

        previousResults: [],

        // =====================================
        // REMARKS
        // =====================================

        remarks: "",

        // =====================================
        // VERIFICATION HISTORY
        // =====================================

        verificationHistory: [],

    },


    // =========================================
    // 002
    // =========================================

    {
        id: "RE-002",

        accessionNo:
            "ACC-20260815-002",

        patientName:
            "Priya Verma",

        age: 35,

        gender:
            "Female",

        patientId:
            "UHID-100246",

        uhid:
            "UHID-100246",

        sampleType:
            "Serum",

        collectedOn:
            "16 Aug 2026, 09:20 AM",

        receivedOn:
            "16 Aug 2026, 09:35 AM",

        testName:
            "Liver Function Test",

        testProfile:
            "LFT",

        department:
            "Biochemistry",

        analyzer:
            "Cobas c 311",

        priority:
            "High",

        tat:
            "1h 15m",

        tatStatus:
            "normal",

        resultStatus:
            "Pending",

        status:
            "Pending",

        results: [

            {
                id:
                    "lft-bilirubin-total",

                testName:
                    "Total Bilirubin",

                testCode:
                    "LFT-TB",

                result:
                    "",

                unit:
                    "mg/dL",

                referenceRange:
                    "0.2 - 1.2",

                flag:
                    "",

                status:
                    "Pending",
            },


            {
                id:
                    "lft-bilirubin-direct",

                testName:
                    "Direct Bilirubin",

                testCode:
                    "LFT-DB",

                result:
                    "",

                unit:
                    "mg/dL",

                referenceRange:
                    "0.0 - 0.3",

                flag:
                    "",

                status:
                    "Pending",
            },


            {
                id:
                    "lft-alt",

                testName:
                    "ALT (SGPT)",

                testCode:
                    "LFT-ALT",

                result:
                    "",

                unit:
                    "U/L",

                referenceRange:
                    "7 - 56",

                flag:
                    "",

                status:
                    "Pending",
            },


            {
                id:
                    "lft-ast",

                testName:
                    "AST (SGOT)",

                testCode:
                    "LFT-AST",

                result:
                    "",

                unit:
                    "U/L",

                referenceRange:
                    "10 - 40",

                flag:
                    "",

                status:
                    "Pending",
            },

        ],

        previousResults: [],

        remarks: "",

        verificationHistory: [],

    },


    // =========================================
    // 003
    // =========================================

    {
        id: "RE-003",

        accessionNo:
            "ACC-20260815-003",

        patientName:
            "Amit Kumar",

        age: 51,

        gender:
            "Male",

        patientId:
            "UHID-100247",

        uhid:
            "UHID-100247",

        sampleType:
            "Plasma",

        collectedOn:
            "16 Aug 2026, 09:35 AM",

        receivedOn:
            "16 Aug 2026, 09:50 AM",

        testName:
            "D-Dimer",

        testProfile:
            "D-Dimer",

        department:
            "Biochemistry",

        analyzer:
            "Cobas c 311",

        priority:
            "Urgent",

        tat:
            "28 min",

        tatStatus:
            "critical",

        resultStatus:
            "In Progress",

        status:
            "In Progress",

        results: [

            {
                id:
                    "ddimer-result",

                testName:
                    "D-Dimer",

                testCode:
                    "DDIMER",

                result:
                    "",

                unit:
                    "mg/L FEU",

                referenceRange:
                    "0.00 - 0.50",

                flag:
                    "",

                status:
                    "In Progress",
            },

        ],

        previousResults: [],

        remarks: "",

        verificationHistory: [],

    },


    // =========================================
    // 004
    // =========================================

    {
        id: "RE-004",

        accessionNo:
            "ACC-20260815-004",

        patientName:
            "Sneha Gupta",

        age: 28,

        gender:
            "Female",

        patientId:
            "UHID-100248",

        uhid:
            "UHID-100248",

        sampleType:
            "Serum",

        collectedOn:
            "16 Aug 2026, 09:40 AM",

        receivedOn:
            "16 Aug 2026, 09:55 AM",

        testName:
            "Renal Function Test",

        testProfile:
            "RFT",

        department:
            "Biochemistry",

        analyzer:
            "Cobas c 311",

        priority:
            "Normal",

        tat:
            "1h 30m",

        tatStatus:
            "normal",

        resultStatus:
            "Pending",

        status:
            "Pending",

        results: [

            {
                id:
                    "rft-urea",

                testName:
                    "Blood Urea",

                testCode:
                    "RFT-UREA",

                result:
                    "",

                unit:
                    "mg/dL",

                referenceRange:
                    "15 - 45",

                flag:
                    "",

                status:
                    "Pending",
            },


            {
                id:
                    "rft-creatinine",

                testName:
                    "Creatinine",

                testCode:
                    "RFT-CREA",

                result:
                    "",

                unit:
                    "mg/dL",

                referenceRange:
                    "0.6 - 1.2",

                flag:
                    "",

                status:
                    "Pending",
            },

        ],

        previousResults: [],

        remarks: "",

        verificationHistory: [],

    },


    // =========================================
    // 005
    // =========================================

    {
        id: "RE-005",

        accessionNo:
            "ACC-20260815-005",

        patientName:
            "Ramesh Yadav",

        age: 60,

        gender:
            "Male",

        patientId:
            "UHID-100249",

        uhid:
            "UHID-100249",

        sampleType:
            "Plasma",

        collectedOn:
            "16 Aug 2026, 10:00 AM",

        receivedOn:
            "16 Aug 2026, 10:15 AM",

        testName:
            "D-Dimer",

        testProfile:
            "D-Dimer",

        department:
            "Clinical Pathology",

        analyzer:
            "Sysmex CS-2500",

        priority:
            "High",

        tat:
            "3h 10m",

        tatStatus:
            "warning",

        resultStatus:
            "Pending",

        status:
            "Pending",

        results: [

            {
                id:
                    "ddimer-005",

                testName:
                    "D-Dimer",

                testCode:
                    "DDIMER",

                result:
                    "",

                unit:
                    "mg/L FEU",

                referenceRange:
                    "0.00 - 0.50",

                flag:
                    "",

                status:
                    "Pending",
            },

        ],

        previousResults: [],

        remarks: "",

        verificationHistory: [],

    },


    // =========================================
    // 006
    // =========================================

    {
        id: "RE-006",

        accessionNo:
            "ACC-20260815-006",

        patientName:
            "Pooja Mehta",

        age: 32,

        gender:
            "Female",

        patientId:
            "UHID-100250",

        uhid:
            "UHID-100250",

        sampleType:
            "Urine",

        collectedOn:
            "16 Aug 2026, 10:10 AM",

        receivedOn:
            "16 Aug 2026, 10:25 AM",

        testName:
            "Urine Routine Examination",

        testProfile:
            "R/E",

        department:
            "Clinical Pathology",

        analyzer:
            "Urinalysis Section",

        priority:
            "High",

        tat:
            "4h 05m",

        tatStatus:
            "warning",

        resultStatus:
            "Pending",

        status:
            "Pending",

        results: [

            {
                id:
                    "urine-color",

                testName:
                    "Color",

                testCode:
                    "UR-COLOR",

                result:
                    "",

                unit:
                    "",

                referenceRange:
                    "Pale Yellow",

                flag:
                    "",

                status:
                    "Pending",
            },


            {
                id:
                    "urine-appearance",

                testName:
                    "Appearance",

                testCode:
                    "UR-APP",

                result:
                    "",

                unit:
                    "",

                referenceRange:
                    "Clear",

                flag:
                    "",

                status:
                    "Pending",
            },


            {
                id:
                    "urine-protein",

                testName:
                    "Protein",

                testCode:
                    "UR-PRO",

                result:
                    "",

                unit:
                    "mg/dL",

                referenceRange:
                    "Negative",

                flag:
                    "",

                status:
                    "Pending",
            },

        ],

        previousResults: [],

        remarks: "",

        verificationHistory: [],

    },


    // =========================================
    // 007
    // =========================================

    {
        id: "RE-007",

        accessionNo:
            "ACC-20260815-007",

        patientName:
            "Sanjay Verma",

        age: 45,

        gender:
            "Male",

        patientId:
            "UHID-100251",

        uhid:
            "UHID-100251",

        sampleType:
            "Whole Blood",

        collectedOn:
            "16 Aug 2026, 10:20 AM",

        receivedOn:
            "16 Aug 2026, 10:35 AM",

        testName:
            "HbA1c",

        testProfile:
            "HbA1c",

        department:
            "Biochemistry",

        analyzer:
            "Bio-Rad D-10",

        priority:
            "High",

        tat:
            "1h 30m",

        tatStatus:
            "normal",

        resultStatus:
            "In Progress",

        status:
            "In Progress",

        results: [

            {
                id:
                    "hba1c-result",

                testName:
                    "HbA1c",

                testCode:
                    "HBA1C",

                result:
                    "",

                unit:
                    "%",

                referenceRange:
                    "4.0 - 5.6",

                flag:
                    "",

                status:
                    "In Progress",
            },

        ],

        previousResults: [],

        remarks: "",

        verificationHistory: [],

    },


    // =========================================
    // 008
    // =========================================

    {
        id: "RE-008",

        accessionNo:
            "ACC-20260815-008",

        patientName:
            "Anjali Singh",

        age: 29,

        gender:
            "Female",

        patientId:
            "UHID-100252",

        uhid:
            "UHID-100252",

        sampleType:
            "Stool",

        collectedOn:
            "16 Aug 2026, 10:30 AM",

        receivedOn:
            "16 Aug 2026, 10:45 AM",

        testName:
            "Stool Routine Examination",

        testProfile:
            "Stool R/E",

        department:
            "Microbiology",

        analyzer:
            "Microbiology Section",

        priority:
            "Normal",

        tat:
            "2h 20m",

        tatStatus:
            "normal",

        resultStatus:
            "Pending",

        status:
            "Pending",

        results: [

            {
                id:
                    "stool-color",

                testName:
                    "Color",

                testCode:
                    "ST-COLOR",

                result:
                    "",

                unit:
                    "",

                referenceRange:
                    "Brown",

                flag:
                    "",

                status:
                    "Pending",
            },


            {
                id:
                    "stool-occult",

                testName:
                    "Occult Blood",

                testCode:
                    "ST-OB",

                result:
                    "",

                unit:
                    "",

                referenceRange:
                    "Negative",

                flag:
                    "",

                status:
                    "Pending",
            },

        ],

        previousResults: [],

        remarks: "",

        verificationHistory: [],

    },


    // =========================================
    // 009
    // =========================================

    {
        id: "RE-009",

        accessionNo:
            "ACC-20260815-009",

        patientName:
            "Mohit Sharma",

        age: 50,

        gender:
            "Male",

        patientId:
            "UHID-100253",

        uhid:
            "UHID-100253",

        sampleType:
            "Serum",

        collectedOn:
            "16 Aug 2026, 10:40 AM",

        receivedOn:
            "16 Aug 2026, 10:55 AM",

        testName:
            "Lipid Profile",

        testProfile:
            "Lipid Profile",

        department:
            "Biochemistry",

        analyzer:
            "Cobas c 311",

        priority:
            "Normal",

        tat:
            "3h 00m",

        tatStatus:
            "normal",

        resultStatus:
            "Pending",

        status:
            "Pending",

        results: [

            {
                id:
                    "lipid-total",

                testName:
                    "Total Cholesterol",

                testCode:
                    "LIP-TC",

                result:
                    "",

                unit:
                    "mg/dL",

                referenceRange:
                    "< 200",

                flag:
                    "",

                status:
                    "Pending",
            },


            {
                id:
                    "lipid-triglycerides",

                testName:
                    "Triglycerides",

                testCode:
                    "LIP-TG",

                result:
                    "",

                unit:
                    "mg/dL",

                referenceRange:
                    "< 150",

                flag:
                    "",

                status:
                    "Pending",
            },


            {
                id:
                    "lipid-hdl",

                testName:
                    "HDL Cholesterol",

                testCode:
                    "LIP-HDL",

                result:
                    "",

                unit:
                    "mg/dL",

                referenceRange:
                    "> 40",

                flag:
                    "",

                status:
                    "Pending",
            },


            {
                id:
                    "lipid-ldl",

                testName:
                    "LDL Cholesterol",

                testCode:
                    "LIP-LDL",

                result:
                    "",

                unit:
                    "mg/dL",

                referenceRange:
                    "< 100",

                flag:
                    "",

                status:
                    "Pending",
            },

        ],

        previousResults: [],

        remarks: "",

        verificationHistory: [],

    },


    // =========================================
    // 010
    // =========================================

    {
        id: "RE-010",

        accessionNo:
            "ACC-20260815-010",

        patientName:
            "Kavita Rani",

        age: 37,

        gender:
            "Female",

        patientId:
            "UHID-100254",

        uhid:
            "UHID-100254",

        sampleType:
            "Serum",

        collectedOn:
            "16 Aug 2026, 10:50 AM",

        receivedOn:
            "16 Aug 2026, 11:05 AM",

        testName:
            "Thyroid Profile",

        testProfile:
            "Thyroid Profile",

        department:
            "Biochemistry",

        analyzer:
            "Cobas e 411",

        priority:
            "Normal",

        tat:
            "3h 30m",

        tatStatus:
            "normal",

        resultStatus:
            "Pending",

        status:
            "Pending",

        results: [

            {
                id:
                    "thyroid-tsh",

                testName:
                    "TSH",

                testCode:
                    "THY-TSH",

                result:
                    "",

                unit:
                    "µIU/mL",

                referenceRange:
                    "0.4 - 4.0",

                flag:
                    "",

                status:
                    "Pending",
            },


            {
                id:
                    "thyroid-t3",

                testName:
                    "Total T3",

                testCode:
                    "THY-T3",

                result:
                    "",

                unit:
                    "ng/dL",

                referenceRange:
                    "80 - 200",

                flag:
                    "",

                status:
                    "Pending",
            },


            {
                id:
                    "thyroid-t4",

                testName:
                    "Total T4",

                testCode:
                    "THY-T4",

                result:
                    "",

                unit:
                    "µg/dL",

                referenceRange:
                    "5.0 - 12.0",

                flag:
                    "",

                status:
                    "Pending",
            },

        ],

        previousResults: [],

        remarks: "",

        verificationHistory: [],

    },


];


// =========================================
// EXPORT
// =========================================

export default resultEntryData;