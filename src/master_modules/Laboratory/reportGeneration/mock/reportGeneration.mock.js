// =========================================
// REPORT GENERATION MOCK DATA
// =========================================

const reportGenerationMockData = [

    // =========================================
    // RECORD 01
    // =========================================

    {
        id:
            "RPT-0001",

        accessionNo:
            "ACC-2026-081801",

        patientId:
            "PAT-1001",

        patientName:
            "Amit Kumar",

        age:
            35,

        gender:
            "Male",

        uhid:
            "UHID-2026-1001",

        department:
            "Biochemistry",

        tests: [
            "Liver Function Test",
            "Kidney Function Test",
        ],

        verifiedOn:
            "18 Aug 2026, 09:42 AM",

        verifiedDate:
            "2026-08-18",

        reportFormat:
            "PDF",

        status:
            "ready",

        generatedOn:
            null,

        printedOn:
            null,

        emailedOn:
            null,

        downloadedOn:
            null,

        priority:
            "normal",

        reportFileName:
            null,

        email:
            "amit.kumar@example.com",
    },


    // =========================================
    // RECORD 02
    // =========================================

    {
        id:
            "RPT-0002",

        accessionNo:
            "ACC-2026-081802",

        patientId:
            "PAT-1002",

        patientName:
            "Priya Sharma",

        age:
            29,

        gender:
            "Female",

        uhid:
            "UHID-2026-1002",

        department:
            "Hematology",

        tests: [
            "Complete Blood Count",
            "ESR",
        ],

        verifiedOn:
            "18 Aug 2026, 10:05 AM",

        verifiedDate:
            "2026-08-18",

        reportFormat:
            "PDF",

        status:
            "generated",

        generatedOn:
            "18 Aug 2026, 10:18 AM",

        printedOn:
            null,

        emailedOn:
            null,

        downloadedOn:
            null,

        priority:
            "normal",

        reportFileName:
            "RPT-0002.pdf",

        email:
            "priya.sharma@example.com",
    },


    // =========================================
    // RECORD 03
    // =========================================

    {
        id:
            "RPT-0003",

        accessionNo:
            "ACC-2026-081803",

        patientId:
            "PAT-1003",

        patientName:
            "Rahul Singh",

        age:
            42,

        gender:
            "Male",

        uhid:
            "UHID-2026-1003",

        department:
            "Pathology",

        tests: [
            "Histopathology",
        ],

        verifiedOn:
            "18 Aug 2026, 10:31 AM",

        verifiedDate:
            "2026-08-18",

        reportFormat:
            "PDF (Compact)",

        status:
            "printed",

        generatedOn:
            "18 Aug 2026, 10:45 AM",

        printedOn:
            "18 Aug 2026, 11:02 AM",

        emailedOn:
            null,

        downloadedOn:
            null,

        priority:
            "high",

        reportFileName:
            "RPT-0003.pdf",

        email:
            "rahul.singh@example.com",
    },


    // =========================================
    // RECORD 04
    // =========================================

    {
        id:
            "RPT-0004",

        accessionNo:
            "ACC-2026-081804",

        patientId:
            "PAT-1004",

        patientName:
            "Neha Verma",

        age:
            31,

        gender:
            "Female",

        uhid:
            "UHID-2026-1004",

        department:
            "Microbiology",

        tests: [
            "Urine Culture",
            "Sensitivity Test",
        ],

        verifiedOn:
            "18 Aug 2026, 11:12 AM",

        verifiedDate:
            "2026-08-18",

        reportFormat:
            "PDF",

        status:
            "emailed",

        generatedOn:
            "18 Aug 2026, 11:25 AM",

        printedOn:
            null,

        emailedOn:
            "18 Aug 2026, 11:37 AM",

        downloadedOn:
            null,

        priority:
            "normal",

        reportFileName:
            "RPT-0004.pdf",

        email:
            "neha.verma@example.com",
    },


    // =========================================
    // RECORD 05
    // =========================================

    {
        id:
            "RPT-0005",

        accessionNo:
            "ACC-2026-081805",

        patientId:
            "PAT-1005",

        patientName:
            "Vikas Yadav",

        age:
            47,

        gender:
            "Male",

        uhid:
            "UHID-2026-1005",

        department:
            "Biochemistry",

        tests: [
            "Lipid Profile",
            "HbA1c",
        ],

        verifiedOn:
            "18 Aug 2026, 11:48 AM",

        verifiedDate:
            "2026-08-18",

        reportFormat:
            "PDF",

        status:
            "downloaded",

        generatedOn:
            "18 Aug 2026, 12:01 PM",

        printedOn:
            null,

        emailedOn:
            null,

        downloadedOn:
            "18 Aug 2026, 12:08 PM",

        priority:
            "normal",

        reportFileName:
            "RPT-0005.pdf",

        email:
            "vikas.yadav@example.com",
    },


    // =========================================
    // RECORD 06
    // =========================================

    {
        id:
            "RPT-0006",

        accessionNo:
            "ACC-2026-081806",

        patientId:
            "PAT-1006",

        patientName:
            "Pooja Gupta",

        age:
            26,

        gender:
            "Female",

        uhid:
            "UHID-2026-1006",

        department:
            "Hematology",

        tests: [
            "Complete Blood Count",
        ],

        verifiedOn:
            "18 Aug 2026, 12:16 PM",

        verifiedDate:
            "2026-08-18",

        reportFormat:
            "PDF",

        status:
            "ready",

        generatedOn:
            null,

        printedOn:
            null,

        emailedOn:
            null,

        downloadedOn:
            null,

        priority:
            "normal",

        reportFileName:
            null,

        email:
            "pooja.gupta@example.com",
    },


    // =========================================
    // RECORD 07
    // =========================================

    {
        id:
            "RPT-0007",

        accessionNo:
            "ACC-2026-081807",

        patientId:
            "PAT-1007",

        patientName:
            "Sandeep Mishra",

        age:
            54,

        gender:
            "Male",

        uhid:
            "UHID-2026-1007",

        department:
            "Pathology",

        tests: [
            "Biopsy Examination",
        ],

        verifiedOn:
            "18 Aug 2026, 12:39 PM",

        verifiedDate:
            "2026-08-18",

        reportFormat:
            "PDF",

        status:
            "generating",

        generatedOn:
            null,

        printedOn:
            null,

        emailedOn:
            null,

        downloadedOn:
            null,

        priority:
            "high",

        reportFileName:
            null,

        email:
            "sandeep.mishra@example.com",
    },


    // =========================================
    // RECORD 08
    // =========================================

    {
        id:
            "RPT-0008",

        accessionNo:
            "ACC-2026-081808",

        patientId:
            "PAT-1008",

        patientName:
            "Anjali Singh",

        age:
            38,

        gender:
            "Female",

        uhid:
            "UHID-2026-1008",

        department:
            "Biochemistry",

        tests: [
            "Thyroid Profile",
        ],

        verifiedOn:
            "18 Aug 2026, 01:04 PM",

        verifiedDate:
            "2026-08-18",

        reportFormat:
            "PDF (Compact)",

        status:
            "generated",

        generatedOn:
            "18 Aug 2026, 01:17 PM",

        printedOn:
            null,

        emailedOn:
            null,

        downloadedOn:
            null,

        priority:
            "normal",

        reportFileName:
            "RPT-0008.pdf",

        email:
            "anjali.singh@example.com",
    },


    // =========================================
    // RECORD 09
    // =========================================

    {
        id:
            "RPT-0009",

        accessionNo:
            "ACC-2026-081809",

        patientId:
            "PAT-1009",

        patientName:
            "Manoj Kumar",

        age:
            61,

        gender:
            "Male",

        uhid:
            "UHID-2026-1009",

        department:
            "Microbiology",

        tests: [
            "Blood Culture",
        ],

        verifiedOn:
            "18 Aug 2026, 01:28 PM",

        verifiedDate:
            "2026-08-18",

        reportFormat:
            "PDF",

        status:
            "failed",

        generatedOn:
            null,

        printedOn:
            null,

        emailedOn:
            null,

        downloadedOn:
            null,

        priority:
            "critical",

        reportFileName:
            null,

        email:
            "manoj.kumar@example.com",

        errorMessage:
            "Report template could not be loaded.",
    },


    // =========================================
    // RECORD 10
    // =========================================

    {
        id:
            "RPT-0010",

        accessionNo:
            "ACC-2026-081810",

        patientId:
            "PAT-1010",

        patientName:
            "Kavita Patel",

        age:
            44,

        gender:
            "Female",

        uhid:
            "UHID-2026-1010",

        department:
            "Hematology",

        tests: [
            "Coagulation Profile",
            "PT / INR",
        ],

        verifiedOn:
            "18 Aug 2026, 01:51 PM",

        verifiedDate:
            "2026-08-18",

        reportFormat:
            "PDF",

        status:
            "generated",

        generatedOn:
            "18 Aug 2026, 02:04 PM",

        printedOn:
            null,

        emailedOn:
            null,

        downloadedOn:
            null,

        priority:
            "normal",

        reportFileName:
            "RPT-0010.pdf",

        email:
            "kavita.patel@example.com",
    },


    // =========================================
    // RECORD 11
    // =========================================

    {
        id:
            "RPT-0011",

        accessionNo:
            "ACC-2026-081811",

        patientId:
            "PAT-1011",

        patientName:
            "Deepak Srivastava",

        age:
            50,

        gender:
            "Male",

        uhid:
            "UHID-2026-1011",

        department:
            "Biochemistry",

        tests: [
            "Renal Function Test",
            "Electrolytes",
        ],

        verifiedOn:
            "18 Aug 2026, 02:19 PM",

        verifiedDate:
            "2026-08-18",

        reportFormat:
            "PDF",

        status:
            "printed",

        generatedOn:
            "18 Aug 2026, 02:31 PM",

        printedOn:
            "18 Aug 2026, 02:46 PM",

        emailedOn:
            null,

        downloadedOn:
            null,

        priority:
            "normal",

        reportFileName:
            "RPT-0011.pdf",

        email:
            "deepak.srivastava@example.com",
    },


    // =========================================
    // RECORD 12
    // =========================================

    {
        id:
            "RPT-0012",

        accessionNo:
            "ACC-2026-081812",

        patientId:
            "PAT-1012",

        patientName:
            "Renu Tiwari",

        age:
            33,

        gender:
            "Female",

        uhid:
            "UHID-2026-1012",

        department:
            "Pathology",

        tests: [
            "Cytology",
        ],

        verifiedOn:
            "18 Aug 2026, 02:43 PM",

        verifiedDate:
            "2026-08-18",

        reportFormat:
            "PDF",

        status:
            "ready",

        generatedOn:
            null,

        printedOn:
            null,

        emailedOn:
            null,

        downloadedOn:
            null,

        priority:
            "normal",

        reportFileName:
            null,

        email:
            "renu.tiwari@example.com",
    },


    // =========================================
    // RECORD 13
    // =========================================

    {
        id:
            "RPT-0013",

        accessionNo:
            "ACC-2026-081813",

        patientId:
            "PAT-1013",

        patientName:
            "Arun Pandey",

        age:
            58,

        gender:
            "Male",

        uhid:
            "UHID-2026-1013",

        department:
            "Microbiology",

        tests: [
            "Sputum Culture",
            "Sensitivity Test",
        ],

        verifiedOn:
            "18 Aug 2026, 03:06 PM",

        verifiedDate:
            "2026-08-18",

        reportFormat:
            "PDF",

        status:
            "emailed",

        generatedOn:
            "18 Aug 2026, 03:18 PM",

        printedOn:
            null,

        emailedOn:
            "18 Aug 2026, 03:32 PM",

        downloadedOn:
            null,

        priority:
            "high",

        reportFileName:
            "RPT-0013.pdf",

        email:
            "arun.pandey@example.com",
    },


    // =========================================
    // RECORD 14
    // =========================================

    {
        id:
            "RPT-0014",

        accessionNo:
            "ACC-2026-081814",

        patientId:
            "PAT-1014",

        patientName:
            "Shweta Mishra",

        age:
            28,

        gender:
            "Female",

        uhid:
            "UHID-2026-1014",

        department:
            "Hematology",

        tests: [
            "CBC",
            "Peripheral Smear",
        ],

        verifiedOn:
            "18 Aug 2026, 03:29 PM",

        verifiedDate:
            "2026-08-18",

        reportFormat:
            "PDF (Compact)",

        status:
            "downloaded",

        generatedOn:
            "18 Aug 2026, 03:41 PM",

        printedOn:
            null,

        emailedOn:
            null,

        downloadedOn:
            "18 Aug 2026, 03:55 PM",

        priority:
            "normal",

        reportFileName:
            "RPT-0014.pdf",

        email:
            "shweta.mishra@example.com",
    },


    // =========================================
    // RECORD 15
    // =========================================

    {
        id:
            "RPT-0015",

        accessionNo:
            "ACC-2026-081815",

        patientId:
            "PAT-1015",

        patientName:
            "Rajesh Verma",

        age:
            46,

        gender:
            "Male",

        uhid:
            "UHID-2026-1015",

        department:
            "Biochemistry",

        tests: [
            "Liver Function Test",
        ],

        verifiedOn:
            "18 Aug 2026, 04:12 PM",

        verifiedDate:
            "2026-08-18",

        reportFormat:
            "PDF",

        status:
            "ready",

        generatedOn:
            null,

        printedOn:
            null,

        emailedOn:
            null,

        downloadedOn:
            null,

        priority:
            "normal",

        reportFileName:
            null,

        email:
            "rajesh.verma@example.com",
    },

];


export default reportGenerationMockData;