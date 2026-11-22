const sampleProcessingStatsMock = {

    receivedSamples: {
        value: 96,
        trend: 12.5,
    },

    inProcessing: {
        value: 28,
        trend: 8.4,
    },

    processed: {
        value: 64,
        trend: 10.2,
    },

    onHold: {
        value: 3,
        trend: 1.8,
    },

    rejected: {
        value: 1,
        trend: 0.6,
    },

    tatCompliance: {
        value: "94.2%",
        trend: 3.5,
    },

};


// =========================================
// SAMPLE PROCESSING TABLE DATA
// =========================================

const sampleProcessingData = [

    {
        id: "SP-0001",

        accessionNo: "ACC-260814-001",

        patientName: "Rahul Kumar",

        sampleType: "Blood",

        testProfile: "CBC",

        department: "Hematology",

        receivedOn: "14 Aug 2026, 08:15 AM",

        status: "Received",

        priority: "Normal",

        currentStep: "Sample Verification",

        tatRemaining: "02h 45m",

        tatStatus: "normal",
    },


    {
        id: "SP-0002",

        accessionNo: "ACC-260814-002",

        patientName: "Priya Singh",

        sampleType: "Serum",

        testProfile: "Liver Function Test",

        department: "Biochemistry",

        receivedOn: "14 Aug 2026, 08:32 AM",

        status: "In Processing",

        priority: "High",

        currentStep: "Centrifugation",

        tatRemaining: "01h 20m",

        tatStatus: "warning",
    },


    {
        id: "SP-0003",

        accessionNo: "ACC-260814-003",

        patientName: "Amit Verma",

        sampleType: "Plasma",

        testProfile: "HbA1c",

        department: "Biochemistry",

        receivedOn: "14 Aug 2026, 08:47 AM",

        status: "Processed",

        priority: "Normal",

        currentStep: "Completed",

        tatRemaining: "Completed",

        tatStatus: "completed",
    },


    {
        id: "SP-0004",

        accessionNo: "ACC-260814-004",

        patientName: "Neha Gupta",

        sampleType: "Urine",

        testProfile: "Urine Routine",

        department: "Clinical Pathology",

        receivedOn: "14 Aug 2026, 09:05 AM",

        status: "On Hold",

        priority: "Medium",

        currentStep: "Quality Review",

        tatRemaining: "00h 35m",

        tatStatus: "critical",
    },


    {
        id: "SP-0005",

        accessionNo: "ACC-260814-005",

        patientName: "Sanjay Yadav",

        sampleType: "Blood",

        testProfile: "Lipid Profile",

        department: "Biochemistry",

        receivedOn: "14 Aug 2026, 09:18 AM",

        status: "In Processing",

        priority: "Urgent",

        currentStep: "Analyzer Processing",

        tatRemaining: "00h 50m",

        tatStatus: "critical",
    },


    {
        id: "SP-0006",

        accessionNo: "ACC-260814-006",

        patientName: "Pooja Mishra",

        sampleType: "Serum",

        testProfile: "Kidney Function Test",

        department: "Biochemistry",

        receivedOn: "14 Aug 2026, 09:42 AM",

        status: "Processed",

        priority: "Normal",

        currentStep: "Completed",

        tatRemaining: "Completed",

        tatStatus: "completed",
    },


    {
        id: "SP-0007",

        accessionNo: "ACC-260814-007",

        patientName: "Vikas Singh",

        sampleType: "Blood",

        testProfile: "CBC + ESR",

        department: "Hematology",

        receivedOn: "14 Aug 2026, 10:05 AM",

        status: "Received",

        priority: "Low",

        currentStep: "Sample Verification",

        tatRemaining: "03h 10m",

        tatStatus: "normal",
    },


    {
        id: "SP-0008",

        accessionNo: "ACC-260814-008",

        patientName: "Anjali Sharma",

        sampleType: "Swab",

        testProfile: "Culture & Sensitivity",

        department: "Microbiology",

        receivedOn: "14 Aug 2026, 10:22 AM",

        status: "In Processing",

        priority: "High",

        currentStep: "Sample Preparation",

        tatRemaining: "01h 05m",

        tatStatus: "warning",
    },


    {
        id: "SP-0009",

        accessionNo: "ACC-260814-009",

        patientName: "Rohit Patel",

        sampleType: "Serum",

        testProfile: "Thyroid Profile",

        department: "Biochemistry",

        receivedOn: "14 Aug 2026, 10:41 AM",

        status: "Processed",

        priority: "Normal",

        currentStep: "Completed",

        tatRemaining: "Completed",

        tatStatus: "completed",
    },


    {
        id: "SP-0010",

        accessionNo: "ACC-260814-010",

        patientName: "Kavita Singh",

        sampleType: "Blood",

        testProfile: "PT / INR",

        department: "Hematology",

        receivedOn: "14 Aug 2026, 11:03 AM",

        status: "Rejected",

        priority: "High",

        currentStep: "Recollection Required",

        tatRemaining: "Expired",

        tatStatus: "critical",
    },


    {
        id: "SP-0011",

        accessionNo: "ACC-260814-011",

        patientName: "Deepak Kumar",

        sampleType: "Plasma",

        testProfile: "D-Dimer",

        department: "Hematology",

        receivedOn: "14 Aug 2026, 11:18 AM",

        status: "In Processing",

        priority: "Urgent",

        currentStep: "Analyzer Processing",

        tatRemaining: "00h 42m",

        tatStatus: "critical",
    },


    {
        id: "SP-0012",

        accessionNo: "ACC-260814-012",

        patientName: "Sneha Verma",

        sampleType: "Urine",

        testProfile: "Urine Culture",

        department: "Microbiology",

        receivedOn: "14 Aug 2026, 11:36 AM",

        status: "On Hold",

        priority: "Normal",

        currentStep: "Quality Review",

        tatRemaining: "01h 15m",

        tatStatus: "warning",
    },


    {
        id: "SP-0013",

        accessionNo: "ACC-260814-013",

        patientName: "Manish Gupta",

        sampleType: "Blood",

        testProfile: "CBC",

        department: "Hematology",

        receivedOn: "14 Aug 2026, 11:52 AM",

        status: "Received",

        priority: "Normal",

        currentStep: "Sample Verification",

        tatRemaining: "02h 30m",

        tatStatus: "normal",
    },


    {
        id: "SP-0014",

        accessionNo: "ACC-260814-014",

        patientName: "Riya Singh",

        sampleType: "Serum",

        testProfile: "Vitamin D",

        department: "Biochemistry",

        receivedOn: "14 Aug 2026, 12:14 PM",

        status: "Processed",

        priority: "Low",

        currentStep: "Completed",

        tatRemaining: "Completed",

        tatStatus: "completed",
    },


    {
        id: "SP-0015",

        accessionNo: "ACC-260814-015",

        patientName: "Arjun Tiwari",

        sampleType: "Swab",

        testProfile: "COVID-19 PCR",

        department: "Microbiology",

        receivedOn: "14 Aug 2026, 12:35 PM",

        status: "In Processing",

        priority: "High",

        currentStep: "PCR Processing",

        tatRemaining: "01h 40m",

        tatStatus: "warning",
    },

];


export {
    sampleProcessingStatsMock,
    sampleProcessingData,
};