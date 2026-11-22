// =========================================
// RESULT VERIFICATION MOCK DATA
// =========================================
//
// Purpose:
// Result Verification Worklist + Workspace
//
// This mock contains:
// 1. Worklist-level result metadata
// 2. Verification status
// 3. Priority
// 4. Patient information
// 5. Sample information
// 6. Test information
// 7. Verification metadata
// 8. Actual analyte/test results
//
// Backend integration ke time isi structure ko
// API response se replace kiya ja sakta hai.
// =========================================


// =========================================
// TEST RESULT TEMPLATES
// =========================================

const testResultTemplates = {


    // =========================================
    // CBC
    // =========================================

    CBC: [

        {
            id: "CBC-HB",

            parameterName:
                "Hemoglobin (Hb)",

            code:
                "CBC-HB",

            result:
                "13.8",

            unit:
                "g/dL",

            referenceRange:
                "13.0 - 17.0",

            flag:
                "normal",

            previousResult:
                "13.5",

        },


        {
            id: "CBC-RBC",

            parameterName:
                "Total RBC Count",

            code:
                "CBC-RBC",

            result:
                "5.1",

            unit:
                "million/cumm",

            referenceRange:
                "4.5 - 5.5",

            flag:
                "normal",

            previousResult:
                "5.0",

        },


        {
            id: "CBC-WBC",

            parameterName:
                "Total WBC Count",

            code:
                "CBC-WBC",

            result:
                "7200",

            unit:
                "cells/cumm",

            referenceRange:
                "4000 - 11000",

            flag:
                "normal",

            previousResult:
                "6800",

        },


        {
            id: "CBC-PLT",

            parameterName:
                "Platelet Count",

            code:
                "CBC-PLT",

            result:
                "2.8",

            unit:
                "lakh/cumm",

            referenceRange:
                "1.5 - 4.0",

            flag:
                "normal",

            previousResult:
                "2.7",

        },


        {
            id: "CBC-ESR",

            parameterName:
                "ESR (1st Hour)",

            code:
                "CBC-ESR",

            result:
                "12",

            unit:
                "mm/hr",

            referenceRange:
                "0 - 15",

            flag:
                "normal",

            previousResult:
                "10",

        },


        {
            id: "CBC-CRP",

            parameterName:
                "C-Reactive Protein (CRP)",

            code:
                "CBC-CRP",

            result:
                "4.2",

            unit:
                "mg/L",

            referenceRange:
                "< 6.0",

            flag:
                "normal",

            previousResult:
                "3.8",

        },

    ],


    // =========================================
    // LFT
    // =========================================

    LFT: [

        {
            id: "LFT-TB",

            parameterName:
                "Total Bilirubin",

            code:
                "LFT-TB",

            result:
                "1.8",

            unit:
                "mg/dL",

            referenceRange:
                "0.2 - 1.2",

            flag:
                "high",

            previousResult:
                "1.0",

        },


        {
            id: "LFT-DB",

            parameterName:
                "Direct Bilirubin",

            code:
                "LFT-DB",

            result:
                "0.4",

            unit:
                "mg/dL",

            referenceRange:
                "0.0 - 0.3",

            flag:
                "high",

            previousResult:
                "0.2",

        },


        {
            id: "LFT-ALT",

            parameterName:
                "ALT (SGPT)",

            code:
                "LFT-ALT",

            result:
                "42",

            unit:
                "U/L",

            referenceRange:
                "7 - 56",

            flag:
                "normal",

            previousResult:
                "39",

        },


        {
            id: "LFT-AST",

            parameterName:
                "AST (SGOT)",

            code:
                "LFT-AST",

            result:
                "31",

            unit:
                "U/L",

            referenceRange:
                "10 - 40",

            flag:
                "normal",

            previousResult:
                "30",

        },


        {
            id: "LFT-ALP",

            parameterName:
                "Alkaline Phosphatase",

            code:
                "LFT-ALP",

            result:
                "118",

            unit:
                "U/L",

            referenceRange:
                "44 - 147",

            flag:
                "normal",

            previousResult:
                "112",

        },


        {
            id: "LFT-TP",

            parameterName:
                "Total Protein",

            code:
                "LFT-TP",

            result:
                "7.1",

            unit:
                "g/dL",

            referenceRange:
                "6.0 - 8.3",

            flag:
                "normal",

            previousResult:
                "7.0",

        },

    ],


    // =========================================
    // KFT
    // =========================================

    KFT: [

        {
            id: "KFT-CREA",

            parameterName:
                "Creatinine",

            code:
                "KFT-CREA",

            result:
                "4.8",

            unit:
                "mg/dL",

            referenceRange:
                "0.7 - 1.3",

            flag:
                "critical",

            previousResult:
                "1.2",

        },


        {
            id: "KFT-UREA",

            parameterName:
                "Blood Urea",

            code:
                "KFT-UREA",

            result:
                "86",

            unit:
                "mg/dL",

            referenceRange:
                "15 - 45",

            flag:
                "high",

            previousResult:
                "42",

        },


        {
            id: "KFT-URIC",

            parameterName:
                "Uric Acid",

            code:
                "KFT-URIC",

            result:
                "6.2",

            unit:
                "mg/dL",

            referenceRange:
                "3.5 - 7.2",

            flag:
                "normal",

            previousResult:
                "5.9",

        },


        {
            id: "KFT-SODIUM",

            parameterName:
                "Sodium",

            code:
                "KFT-NA",

            result:
                "139",

            unit:
                "mmol/L",

            referenceRange:
                "135 - 145",

            flag:
                "normal",

            previousResult:
                "140",

        },


        {
            id: "KFT-POTASSIUM",

            parameterName:
                "Potassium",

            code:
                "KFT-K",

            result:
                "5.8",

            unit:
                "mmol/L",

            referenceRange:
                "3.5 - 5.1",

            flag:
                "high",

            previousResult:
                "4.7",

        },

    ],


    // =========================================
    // HBA1C
    // =========================================

    HBA1C: [

        {
            id: "HBA1C-01",

            parameterName:
                "HbA1c",

            code:
                "HBA1C",

            result:
                "6.8",

            unit:
                "%",

            referenceRange:
                "4.0 - 5.6",

            flag:
                "high",

            previousResult:
                "6.4",

        },


        {
            id: "HBA1C-02",

            parameterName:
                "Estimated Average Glucose",

            code:
                "EAG",

            result:
                "148",

            unit:
                "mg/dL",

            referenceRange:
                "70 - 126",

            flag:
                "high",

            previousResult:
                "137",

        },

    ],


    // =========================================
    // LIPID PROFILE
    // =========================================

    LIPID: [

        {
            id: "LIPID-TC",

            parameterName:
                "Total Cholesterol",

            code:
                "LIPID-TC",

            result:
                "218",

            unit:
                "mg/dL",

            referenceRange:
                "< 200",

            flag:
                "high",

            previousResult:
                "194",

        },


        {
            id: "LIPID-LDL",

            parameterName:
                "LDL Cholesterol",

            code:
                "LIPID-LDL",

            result:
                "142",

            unit:
                "mg/dL",

            referenceRange:
                "< 100",

            flag:
                "high",

            previousResult:
                "121",

        },


        {
            id: "LIPID-HDL",

            parameterName:
                "HDL Cholesterol",

            code:
                "LIPID-HDL",

            result:
                "48",

            unit:
                "mg/dL",

            referenceRange:
                "> 40",

            flag:
                "normal",

            previousResult:
                "46",

        },


        {
            id: "LIPID-TG",

            parameterName:
                "Triglycerides",

            code:
                "LIPID-TG",

            result:
                "168",

            unit:
                "mg/dL",

            referenceRange:
                "< 150",

            flag:
                "high",

            previousResult:
                "142",

        },

    ],


    // =========================================
    // THYROID PROFILE
    // =========================================

    THYROID: [

        {
            id: "THYROID-TSH",

            parameterName:
                "TSH",

            code:
                "TSH",

            result:
                "3.2",

            unit:
                "µIU/mL",

            referenceRange:
                "0.4 - 4.0",

            flag:
                "normal",

            previousResult:
                "3.0",

        },


        {
            id: "THYROID-T3",

            parameterName:
                "Total T3",

            code:
                "T3",

            result:
                "1.24",

            unit:
                "ng/mL",

            referenceRange:
                "0.8 - 2.0",

            flag:
                "normal",

            previousResult:
                "1.18",

        },


        {
            id: "THYROID-T4",

            parameterName:
                "Total T4",

            code:
                "T4",

            result:
                "8.4",

            unit:
                "µg/dL",

            referenceRange:
                "5.0 - 12.0",

            flag:
                "normal",

            previousResult:
                "8.1",

        },

    ],


    // =========================================
    // URINE ROUTINE
    // =========================================

    URINE: [

        {
            id: "URINE-PH",

            parameterName:
                "Urine pH",

            code:
                "UR-PH",

            result:
                "6.0",

            unit:
                "",

            referenceRange:
                "4.5 - 8.0",

            flag:
                "normal",

            previousResult:
                "6.0",

        },


        {
            id: "URINE-PROTEIN",

            parameterName:
                "Protein",

            code:
                "UR-PRO",

            result:
                "Negative",

            unit:
                "",

            referenceRange:
                "Negative",

            flag:
                "normal",

            previousResult:
                "Negative",

        },


        {
            id: "URINE-GLUCOSE",

            parameterName:
                "Glucose",

            code:
                "UR-GLU",

            result:
                "Negative",

            unit:
                "",

            referenceRange:
                "Negative",

            flag:
                "normal",

            previousResult:
                "Negative",

        },


        {
            id: "URINE-RBC",

            parameterName:
                "RBC",

            code:
                "UR-RBC",

            result:
                "1-2",

            unit:
                "/HPF",

            referenceRange:
                "0 - 2",

            flag:
                "normal",

            previousResult:
                "1-2",

        },


        {
            id: "URINE-WBC",

            parameterName:
                "WBC",

            code:
                "UR-WBC",

            result:
                "2-3",

            unit:
                "/HPF",

            referenceRange:
                "0 - 5",

            flag:
                "normal",

            previousResult:
                "2-3",

        },

    ],

};


// =========================================
// RESULT VERIFICATION WORKLIST
// =========================================

const resultVerificationData = [

    // =========================================
    // 01
    // =========================================

    {
        id:
            "RV-0001",

        accessionNo:
            "ACC-2026-0001",

        patientName:
            "Rahul Sharma",

        uhid:
            "UHID-10231",

        age:
            42,

        gender:
            "Male",

        ageGender:
            "42 / Male",

        testName:
            "Complete Blood Count",

        testCode:
            "CBC",

        department:
            "Hematology",

        analyzer:
            "sysmex-xn-1000",

        doctorName:
            "Dr. Ankit Verma",

        receivedAt:
            "16 Aug 2026, 09:15 AM",

        resultDate:
            "16 Aug 2026",

        verificationStatus:
            "pending",

        priority:
            "normal",

        sampleType:
            "EDTA Blood",

        enteredBy:
            "Lab Technician",

        verifiedBy:
            null,

        remarks:
            "",

        critical:
            false,
    },


    // =========================================
    // 02
    // =========================================

    {
        id:
            "RV-0002",

        accessionNo:
            "ACC-2026-0002",

        patientName:
            "Priya Singh",

        uhid:
            "UHID-10232",

        age:
            35,

        gender:
            "Female",

        ageGender:
            "35 / Female",

        testName:
            "Liver Function Test",

        testCode:
            "LFT",

        department:
            "Biochemistry",

        analyzer:
            "cobas-c-311",

        doctorName:
            "Dr. Neha Gupta",

        receivedAt:
            "16 Aug 2026, 09:28 AM",

        resultDate:
            "16 Aug 2026",

        verificationStatus:
            "underReview",

        priority:
            "high",

        sampleType:
            "Serum",

        enteredBy:
            "Lab Technician",

        verifiedBy:
            null,

        remarks:
            "Elevated enzyme values require review.",

        critical:
            false,
    },


    // =========================================
    // 03
    // =========================================

    {
        id:
            "RV-0003",

        accessionNo:
            "ACC-2026-0003",

        patientName:
            "Amit Kumar",

        uhid:
            "UHID-10233",

        age:
            58,

        gender:
            "Male",

        ageGender:
            "58 / Male",

        testName:
            "Kidney Function Test",

        testCode:
            "KFT",

        department:
            "Biochemistry",

        analyzer:
            "mindray-bs-240",

        doctorName:
            "Dr. Rajiv Mishra",

        receivedAt:
            "16 Aug 2026, 09:42 AM",

        resultDate:
            "16 Aug 2026",

        verificationStatus:
            "pending",

        priority:
            "critical",

        sampleType:
            "Serum",

        enteredBy:
            "Lab Technician",

        verifiedBy:
            null,

        remarks:
            "Creatinine value requires immediate attention.",

        critical:
            true,
    },


    // =========================================
    // 04
    // =========================================

    {
        id:
            "RV-0004",

        accessionNo:
            "ACC-2026-0004",

        patientName:
            "Neha Gupta",

        uhid:
            "UHID-10234",

        age:
            29,

        gender:
            "Female",

        ageGender:
            "29 / Female",

        testName:
            "HbA1c",

        testCode:
            "HBA1C",

        department:
            "Biochemistry",

        analyzer:
            "cobas-c-311",

        doctorName:
            "Dr. Saurabh Singh",

        receivedAt:
            "16 Aug 2026, 10:05 AM",

        resultDate:
            "16 Aug 2026",

        verificationStatus:
            "verified",

        priority:
            "normal",

        sampleType:
            "Whole Blood",

        enteredBy:
            "Lab Technician",

        verifiedBy:
            "Dr. Meera Joshi",

        verifiedAt:
            "16 Aug 2026, 11:20 AM",

        remarks:
            "Verified successfully.",

        critical:
            false,
    },


    // =========================================
    // 05
    // =========================================

    {
        id:
            "RV-0005",

        accessionNo:
            "ACC-2026-0005",

        patientName:
            "Vikas Yadav",

        uhid:
            "UHID-10235",

        age:
            47,

        gender:
            "Male",

        ageGender:
            "47 / Male",

        testName:
            "Lipid Profile",

        testCode:
            "LIPID",

        department:
            "Biochemistry",

        analyzer:
            "beckman-au480",

        doctorName:
            "Dr. Ankit Verma",

        receivedAt:
            "16 Aug 2026, 10:18 AM",

        resultDate:
            "16 Aug 2026",

        verificationStatus:
            "rejected",

        priority:
            "high",

        sampleType:
            "Serum",

        enteredBy:
            "Lab Technician",

        verifiedBy:
            "Dr. Meera Joshi",

        remarks:
            "Result requires correction and re-entry.",

        critical:
            false,
    },


    // =========================================
    // 06
    // =========================================

    {
        id:
            "RV-0006",

        accessionNo:
            "ACC-2026-0006",

        patientName:
            "Pooja Verma",

        uhid:
            "UHID-10236",

        age:
            31,

        gender:
            "Female",

        ageGender:
            "31 / Female",

        testName:
            "Thyroid Profile",

        testCode:
            "THYROID",

        department:
            "Immunology",

        analyzer:
            "cobas-e-411",

        doctorName:
            "Dr. Neha Gupta",

        receivedAt:
            "16 Aug 2026, 10:35 AM",

        resultDate:
            "16 Aug 2026",

        verificationStatus:
            "underReview",

        priority:
            "normal",

        sampleType:
            "Serum",

        enteredBy:
            "Lab Technician",

        verifiedBy:
            null,

        remarks:
            "",

        critical:
            false,
    },


    // =========================================
    // 07
    // =========================================

    {
        id:
            "RV-0007",

        accessionNo:
            "ACC-2026-0007",

        patientName:
            "Sandeep Singh",

        uhid:
            "UHID-10237",

        age:
            63,

        gender:
            "Male",

        ageGender:
            "63 / Male",

        testName:
            "Complete Blood Count",

        testCode:
            "CBC",

        department:
            "Hematology",

        analyzer:
            "sysmex-xn-1000",

        doctorName:
            "Dr. Rajiv Mishra",

        receivedAt:
            "16 Aug 2026, 10:52 AM",

        resultDate:
            "16 Aug 2026",

        verificationStatus:
            "pending",

        priority:
            "high",

        sampleType:
            "EDTA Blood",

        enteredBy:
            "Lab Technician",

        verifiedBy:
            null,

        remarks:
            "Low hemoglobin observed.",

        critical:
            false,
    },


    // =========================================
    // 08
    // =========================================

    {
        id:
            "RV-0008",

        accessionNo:
            "ACC-2026-0008",

        patientName:
            "Anjali Singh",

        uhid:
            "UHID-10238",

        age:
            26,

        gender:
            "Female",

        ageGender:
            "26 / Female",

        testName:
            "Urine Routine",

        testCode:
            "URINE",

        department:
            "Clinical Pathology",

        analyzer:
            "mindray-bs-240",

        doctorName:
            "Dr. Saurabh Singh",

        receivedAt:
            "16 Aug 2026, 11:10 AM",

        resultDate:
            "16 Aug 2026",

        verificationStatus:
            "verified",

        priority:
            "normal",

        sampleType:
            "Urine",

        enteredBy:
            "Lab Technician",

        verifiedBy:
            "Dr. Meera Joshi",

        verifiedAt:
            "16 Aug 2026, 12:05 PM",

        remarks:
            "Verified successfully.",

        critical:
            false,
    },


    // =========================================
    // 09
    // =========================================

    {
        id:
            "RV-0009",

        accessionNo:
            "ACC-2026-0009",

        patientName:
            "Rohit Tiwari",

        uhid:
            "UHID-10239",

        age:
            51,

        gender:
            "Male",

        ageGender:
            "51 / Male",

        testName:
            "Liver Function Test",

        testCode:
            "LFT",

        department:
            "Biochemistry",

        analyzer:
            "cobas-c-311",

        doctorName:
            "Dr. Ankit Verma",

        receivedAt:
            "16 Aug 2026, 11:24 AM",

        resultDate:
            "16 Aug 2026",

        verificationStatus:
            "pending",

        priority:
            "critical",

        sampleType:
            "Serum",

        enteredBy:
            "Lab Technician",

        verifiedBy:
            null,

        remarks:
            "Critical bilirubin value.",

        critical:
            true,
    },


    // =========================================
    // 10
    // =========================================

    {
        id:
            "RV-0010",

        accessionNo:
            "ACC-2026-0010",

        patientName:
            "Kavita Mishra",

        uhid:
            "UHID-10240",

        age:
            44,

        gender:
            "Female",

        ageGender:
            "44 / Female",

        testName:
            "Kidney Function Test",

        testCode:
            "KFT",

        department:
            "Biochemistry",

        analyzer:
            "beckman-au480",

        doctorName:
            "Dr. Rajiv Mishra",

        receivedAt:
            "16 Aug 2026, 11:40 AM",

        resultDate:
            "16 Aug 2026",

        verificationStatus:
            "verified",

        priority:
            "high",

        sampleType:
            "Serum",

        enteredBy:
            "Lab Technician",

        verifiedBy:
            "Dr. Meera Joshi",

        verifiedAt:
            "16 Aug 2026, 01:00 PM",

        remarks:
            "Verified after review.",

        critical:
            false,
    },


    // =========================================
    // 11
    // =========================================

    {
        id:
            "RV-0011",

        accessionNo:
            "ACC-2026-0011",

        patientName:
            "Manish Patel",

        uhid:
            "UHID-10241",

        age:
            39,

        gender:
            "Male",

        ageGender:
            "39 / Male",

        testName:
            "HbA1c",

        testCode:
            "HBA1C",

        department:
            "Biochemistry",

        analyzer:
            "cobas-c-311",

        doctorName:
            "Dr. Neha Gupta",

        receivedAt:
            "16 Aug 2026, 12:02 PM",

        resultDate:
            "16 Aug 2026",

        verificationStatus:
            "underReview",

        priority:
            "high",

        sampleType:
            "Whole Blood",

        enteredBy:
            "Lab Technician",

        verifiedBy:
            null,

        remarks:
            "Borderline elevated value.",

        critical:
            false,
    },


    // =========================================
    // 12
    // =========================================

    {
        id:
            "RV-0012",

        accessionNo:
            "ACC-2026-0012",

        patientName:
            "Shweta Pandey",

        uhid:
            "UHID-10242",

        age:
            33,

        gender:
            "Female",

        ageGender:
            "33 / Female",

        testName:
            "Thyroid Profile",

        testCode:
            "THYROID",

        department:
            "Immunology",

        analyzer:
            "cobas-e-411",

        doctorName:
            "Dr. Saurabh Singh",

        receivedAt:
            "16 Aug 2026, 12:20 PM",

        resultDate:
            "16 Aug 2026",

        verificationStatus:
            "pending",

        priority:
            "normal",

        sampleType:
            "Serum",

        enteredBy:
            "Lab Technician",

        verifiedBy:
            null,

        remarks:
            "",

        critical:
            false,
    },


    // =========================================
    // 13
    // =========================================

    {
        id:
            "RV-0013",

        accessionNo:
            "ACC-2026-0013",

        patientName:
            "Deepak Chauhan",

        uhid:
            "UHID-10243",

        age:
            55,

        gender:
            "Male",

        ageGender:
            "55 / Male",

        testName:
            "Complete Blood Count",

        testCode:
            "CBC",

        department:
            "Hematology",

        analyzer:
            "sysmex-xn-1000",

        doctorName:
            "Dr. Ankit Verma",

        receivedAt:
            "16 Aug 2026, 12:38 PM",

        resultDate:
            "16 Aug 2026",

        verificationStatus:
            "verified",

        priority:
            "normal",

        sampleType:
            "EDTA Blood",

        enteredBy:
            "Lab Technician",

        verifiedBy:
            "Dr. Meera Joshi",

        verifiedAt:
            "16 Aug 2026, 02:10 PM",

        remarks:
            "Verified successfully.",

        critical:
            false,
    },


    // =========================================
    // 14
    // =========================================

    {
        id:
            "RV-0014",

        accessionNo:
            "ACC-2026-0014",

        patientName:
            "Nisha Agarwal",

        uhid:
            "UHID-10244",

        age:
            28,

        gender:
            "Female",

        ageGender:
            "28 / Female",

        testName:
            "Urine Routine",

        testCode:
            "URINE",

        department:
            "Clinical Pathology",

        analyzer:
            "mindray-bs-240",

        doctorName:
            "Dr. Neha Gupta",

        receivedAt:
            "16 Aug 2026, 01:05 PM",

        resultDate:
            "16 Aug 2026",

        verificationStatus:
            "underReview",

        priority:
            "normal",

        sampleType:
            "Urine",

        enteredBy:
            "Lab Technician",

        verifiedBy:
            null,

        remarks:
            "",

        critical:
            false,
    },


    // =========================================
    // 15
    // =========================================

    {
        id:
            "RV-0015",

        accessionNo:
            "ACC-2026-0015",

        patientName:
            "Arun Kumar",

        uhid:
            "UHID-10245",

        age:
            67,

        gender:
            "Male",

        ageGender:
            "67 / Male",

        testName:
            "Lipid Profile",

        testCode:
            "LIPID",

        department:
            "Biochemistry",

        analyzer:
            "beckman-au480",

        doctorName:
            "Dr. Rajiv Mishra",

        receivedAt:
            "16 Aug 2026, 01:25 PM",

        resultDate:
            "16 Aug 2026",

        verificationStatus:
            "rejected",

        priority:
            "high",

        sampleType:
            "Serum",

        enteredBy:
            "Lab Technician",

        verifiedBy:
            "Dr. Meera Joshi",

        remarks:
            "Repeat testing requested.",

        critical:
            false,
    },

];


// =========================================
// ATTACH ACTUAL TEST RESULTS
// =========================================
//
// Har worklist record ko uske testCode ke
// according result parameters milenge.
//
// Example:
//
// testCode: "CBC"
//       ↓
// testResultTemplates.CBC
//
// testCode: "KFT"
//       ↓
// testResultTemplates.KFT
//
// =========================================

const resultVerificationDataWithResults =
    resultVerificationData.map(

        (
            item
        ) => {

            const template =
                testResultTemplates[
                    item.testCode
                ] || [];


            // New array create kar rahe hain
            // taaki original template mutate
            // na ho.

            const results =
                template.map(
                    (
                        resultItem
                    ) => ({

                        ...resultItem,

                    })
                );


            return {

                ...item,

                results,

                // Workspace ke liye
                // convenient aliases.

                resultCount:
                    results.length,

                hasResults:
                    results.length > 0,

            };

        }

    );


// =========================================
// EXPORT
// =========================================

export default
    resultVerificationDataWithResults;