// =========================================
// TEST QUEUE MOCK DATA
// =========================================

const testQueueData = [

    {
        id: "TQ-0001",

        accessionNo: "ACC-260814-001",

        patientName: "Rahul Kumar",

        patientId: "P-10241",

        testName: "Complete Blood Count",

        testCode: "CBC",

        sampleType: "Blood",

        department: "Hematology",

        analyzer: "Sysmex XN-1000",

        priority: "High",

        status: "In Progress",

        tat: "00h 42m",

        tatStatus: "normal",

        receivedOn: "14 Aug 2026, 08:15 AM",

        dueOn: "14 Aug 2026, 09:15 AM",

    },


    {
        id: "TQ-0002",

        accessionNo: "ACC-260814-002",

        patientName: "Priya Singh",

        patientId: "P-10242",

        testName: "Liver Function Test",

        testCode: "LFT",

        sampleType: "Serum",

        department: "Biochemistry",

        analyzer: "Cobas c 311",

        priority: "Urgent",

        status: "In Progress",

        tat: "00h 28m",

        tatStatus: "critical",

        receivedOn: "14 Aug 2026, 08:32 AM",

        dueOn: "14 Aug 2026, 09:00 AM",

    },


    {
        id: "TQ-0003",

        accessionNo: "ACC-260814-003",

        patientName: "Amit Verma",

        patientId: "P-10243",

        testName: "HbA1c",

        testCode: "HBA1C",

        sampleType: "Plasma",

        department: "Biochemistry",

        analyzer: "Bio-Rad D-10",

        priority: "Normal",

        status: "Queued",

        tat: "01h 45m",

        tatStatus: "normal",

        receivedOn: "14 Aug 2026, 08:47 AM",

        dueOn: "14 Aug 2026, 10:32 AM",

    },


    {
        id: "TQ-0004",

        accessionNo: "ACC-260814-004",

        patientName: "Neha Gupta",

        patientId: "P-10244",

        testName: "Urine Routine",

        testCode: "URINE-R",

        sampleType: "Urine",

        department: "Clinical Pathology",

        analyzer: "Urinalysis Section",

        priority: "High",

        status: "Queued",

        tat: "00h 55m",

        tatStatus: "warning",

        receivedOn: "14 Aug 2026, 09:05 AM",

        dueOn: "14 Aug 2026, 10:00 AM",

    },


    {
        id: "TQ-0005",

        accessionNo: "ACC-260814-005",

        patientName: "Sanjay Yadav",

        patientId: "P-10245",

        testName: "Lipid Profile",

        testCode: "LIPID",

        sampleType: "Serum",

        department: "Biochemistry",

        analyzer: "Cobas c 311",

        priority: "Urgent",

        status: "In Progress",

        tat: "00h 18m",

        tatStatus: "critical",

        receivedOn: "14 Aug 2026, 09:18 AM",

        dueOn: "14 Aug 2026, 09:36 AM",

    },


    {
        id: "TQ-0006",

        accessionNo: "ACC-260814-006",

        patientName: "Pooja Mishra",

        patientId: "P-10246",

        testName: "Kidney Function Test",

        testCode: "KFT",

        sampleType: "Serum",

        department: "Biochemistry",

        analyzer: "Cobas c 311",

        priority: "Normal",

        status: "Completed",

        tat: "Completed",

        tatStatus: "completed",

        receivedOn: "14 Aug 2026, 09:42 AM",

        dueOn: "14 Aug 2026, 10:42 AM",

    },


    {
        id: "TQ-0007",

        accessionNo: "ACC-260814-007",

        patientName: "Vikas Singh",

        patientId: "P-10247",

        testName: "CBC + ESR",

        testCode: "CBC-ESR",

        sampleType: "Blood",

        department: "Hematology",

        analyzer: "Sysmex XN-1000",

        priority: "Low",

        status: "Queued",

        tat: "02h 20m",

        tatStatus: "normal",

        receivedOn: "14 Aug 2026, 10:05 AM",

        dueOn: "14 Aug 2026, 12:25 PM",

    },


    {
        id: "TQ-0008",

        accessionNo: "ACC-260814-008",

        patientName: "Anjali Sharma",

        patientId: "P-10248",

        testName: "Culture & Sensitivity",

        testCode: "C/S",

        sampleType: "Swab",

        department: "Microbiology",

        analyzer: "Microbiology Section",

        priority: "High",

        status: "In Progress",

        tat: "00h 48m",

        tatStatus: "warning",

        receivedOn: "14 Aug 2026, 10:22 AM",

        dueOn: "14 Aug 2026, 11:10 AM",

    },


    {
        id: "TQ-0009",

        accessionNo: "ACC-260814-009",

        patientName: "Rohit Patel",

        patientId: "P-10249",

        testName: "Thyroid Profile",

        testCode: "THYROID",

        sampleType: "Serum",

        department: "Biochemistry",

        analyzer: "Cobas e 411",

        priority: "Normal",

        status: "Completed",

        tat: "Completed",

        tatStatus: "completed",

        receivedOn: "14 Aug 2026, 10:41 AM",

        dueOn: "14 Aug 2026, 12:00 PM",

    },


    {
        id: "TQ-0010",

        accessionNo: "ACC-260814-010",

        patientName: "Kavita Singh",

        patientId: "P-10250",

        testName: "PT / INR",

        testCode: "PT-INR",

        sampleType: "Plasma",

        department: "Hematology",

        analyzer: "Sysmex CS-2500",

        priority: "High",

        status: "Overdue",

        tat: "Overdue",

        tatStatus: "overdue",

        receivedOn: "14 Aug 2026, 10:55 AM",

        dueOn: "14 Aug 2026, 11:25 AM",

    },


    {
        id: "TQ-0011",

        accessionNo: "ACC-260814-011",

        patientName: "Deepak Kumar",

        patientId: "P-10251",

        testName: "D-Dimer",

        testCode: "DDIMER",

        sampleType: "Plasma",

        department: "Hematology",

        analyzer: "Sysmex CS-2500",

        priority: "Urgent",

        status: "In Progress",

        tat: "00h 12m",

        tatStatus: "critical",

        receivedOn: "14 Aug 2026, 11:18 AM",

        dueOn: "14 Aug 2026, 11:30 AM",

    },


    {
        id: "TQ-0012",

        accessionNo: "ACC-260814-012",

        patientName: "Sneha Verma",

        patientId: "P-10252",

        testName: "Urine Culture",

        testCode: "URINE-C",

        sampleType: "Urine",

        department: "Microbiology",

        analyzer: "Microbiology Section",

        priority: "Normal",

        status: "On Hold",

        tat: "01h 10m",

        tatStatus: "warning",

        receivedOn: "14 Aug 2026, 11:36 AM",

        dueOn: "14 Aug 2026, 12:46 PM",

    },


    {
        id: "TQ-0013",

        accessionNo: "ACC-260814-013",

        patientName: "Manish Gupta",

        patientId: "P-10253",

        testName: "Complete Blood Count",

        testCode: "CBC",

        sampleType: "Blood",

        department: "Hematology",

        analyzer: "Sysmex XN-1000",

        priority: "Normal",

        status: "Queued",

        tat: "01h 55m",

        tatStatus: "normal",

        receivedOn: "14 Aug 2026, 11:52 AM",

        dueOn: "14 Aug 2026, 01:47 PM",

    },


    {
        id: "TQ-0014",

        accessionNo: "ACC-260814-014",

        patientName: "Riya Singh",

        patientId: "P-10254",

        testName: "Vitamin D",

        testCode: "VIT-D",

        sampleType: "Serum",

        department: "Biochemistry",

        analyzer: "Cobas e 411",

        priority: "Low",

        status: "Completed",

        tat: "Completed",

        tatStatus: "completed",

        receivedOn: "14 Aug 2026, 12:14 PM",

        dueOn: "14 Aug 2026, 01:45 PM",

    },


    {
        id: "TQ-0015",

        accessionNo: "ACC-260814-015",

        patientName: "Arjun Tiwari",

        patientId: "P-10255",

        testName: "COVID-19 PCR",

        testCode: "PCR",

        sampleType: "Swab",

        department: "Microbiology",

        analyzer: "PCR Section",

        priority: "High",

        status: "Queued",

        tat: "00h 58m",

        tatStatus: "warning",

        receivedOn: "14 Aug 2026, 12:35 PM",

        dueOn: "14 Aug 2026, 01:33 PM",

    },


    {
        id: "TQ-0016",

        accessionNo: "ACC-260814-016",

        patientName: "Nisha Agarwal",

        patientId: "P-10256",

        testName: "Liver Function Test",

        testCode: "LFT",

        sampleType: "Serum",

        department: "Biochemistry",

        analyzer: "Cobas c 311",

        priority: "Medium",

        status: "Queued",

        tat: "01h 25m",

        tatStatus: "normal",

        receivedOn: "14 Aug 2026, 12:48 PM",

        dueOn: "14 Aug 2026, 02:13 PM",

    },


    {
        id: "TQ-0017",

        accessionNo: "ACC-260814-017",

        patientName: "Mohit Sharma",

        patientId: "P-10257",

        testName: "Troponin-I",

        testCode: "TROP-I",

        sampleType: "Serum",

        department: "Biochemistry",

        analyzer: "Cobas e 411",

        priority: "Urgent",

        status: "In Progress",

        tat: "00h 20m",

        tatStatus: "critical",

        receivedOn: "14 Aug 2026, 01:02 PM",

        dueOn: "14 Aug 2026, 01:22 PM",

    },


    {
        id: "TQ-0018",

        accessionNo: "ACC-260814-018",

        patientName: "Shalini Gupta",

        patientId: "P-10258",

        testName: "Hemoglobin",

        testCode: "HB",

        sampleType: "Blood",

        department: "Hematology",

        analyzer: "Sysmex XN-1000",

        priority: "Normal",

        status: "Queued",

        tat: "02h 05m",

        tatStatus: "normal",

        receivedOn: "14 Aug 2026, 01:18 PM",

        dueOn: "14 Aug 2026, 03:23 PM",

    },


    {
        id: "TQ-0019",

        accessionNo: "ACC-260814-019",

        patientName: "Akash Mishra",

        patientId: "P-10259",

        testName: "Blood Culture",

        testCode: "BC",

        sampleType: "Blood",

        department: "Microbiology",

        analyzer: "Microbiology Section",

        priority: "High",

        status: "On Hold",

        tat: "00h 40m",

        tatStatus: "warning",

        receivedOn: "14 Aug 2026, 01:35 PM",

        dueOn: "14 Aug 2026, 02:15 PM",

    },


    {
        id: "TQ-0020",

        accessionNo: "ACC-260814-020",

        patientName: "Meena Yadav",

        patientId: "P-10260",

        testName: "Kidney Function Test",

        testCode: "KFT",

        sampleType: "Serum",

        department: "Biochemistry",

        analyzer: "Cobas c 311",

        priority: "Medium",

        status: "Queued",

        tat: "01h 15m",

        tatStatus: "normal",

        receivedOn: "14 Aug 2026, 01:52 PM",

        dueOn: "14 Aug 2026, 03:07 PM",

    },



];

// =========================================
// PROCESSING SAMPLES
// =========================================

export const processingSamples = [

    // =========================================
    // SAMPLE 1
    // =========================================

    {
        id: "PROC-001",

        patientName:
            "Rahul Kumar",

        testName:
            "Complete Blood Count",

        accessionNo:
            "ACC-2026-00125",

        sampleType:
            "EDTA Blood",

        department:
            "Hematology",
    },


    // =========================================
    // SAMPLE 2
    // =========================================

    {
        id: "PROC-002",

        patientName:
            "Priya Singh",

        testName:
            "Liver Function Test",

        accessionNo:
            "ACC-2026-00126",

        sampleType:
            "Serum",

        department:
            "Biochemistry",
    },


    // =========================================
    // SAMPLE 3
    // =========================================

    {
        id: "PROC-003",

        patientName:
            "Amit Verma",

        testName:
            "HbA1c",

        accessionNo:
            "ACC-2026-00127",

        sampleType:
            "EDTA Blood",

        department:
            "Biochemistry",
    },

];

export default testQueueData;