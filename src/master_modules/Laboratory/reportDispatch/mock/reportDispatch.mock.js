// =========================================
// REPORT DISPATCH MOCK DATA
// =========================================


// =========================================
// REPORT TEMPLATES
// =========================================

export const reportDispatchTemplates = [

    {
        id:
            "TPL-001",

        name:
            "Standard Laboratory Report",

        description:
            "Standard patient laboratory report",

        format:
            "PDF",
    },


    {
        id:
            "TPL-002",

        name:
            "Detailed Laboratory Report",

        description:
            "Detailed report with complete test information",

        format:
            "PDF",
    },


    {
        id:
            "TPL-003",

        name:
            "Patient Summary Report",

        description:
            "Compact patient-focused laboratory summary",

        format:
            "PDF",
    },


    {
        id:
            "TPL-004",

        name:
            "Corporate Laboratory Report",

        description:
            "Professional report format for corporate patients",

        format:
            "PDF",
    },

];


// =========================================
// REPORT DISPATCH REPORTS
// =========================================
//
// Abhi table baad mein banega.
// Isliye फिलहाल dispatch reports ka
// data yahan structure ke liye rakha hai.
//
// Stats bhi isi data se future mein
// derive kiye jayenge.
//
// =========================================

export const reportDispatchMockData = [

    {
        id:
            "RD-1001",

        accessionNo:
            "ACC-2026-00101",

        patientName:
            "Amit Kumar",

        age:
            42,

        gender:
            "Male",

        uhid:
            "UHID-100245",

        department:
            "Biochemistry",

        reportType:
            "Routine",

        verifiedOn:
            "18 Aug 2026, 09:15 AM",

        dispatchMode:
            "Email",

        status:
            "Pending",

        dispatchTime:
            null,

        recipient:
            "amit.kumar@example.com",

        templateId:
            "TPL-001",
    },


    {
        id:
            "RD-1002",

        accessionNo:
            "ACC-2026-00102",

        patientName:
            "Priya Sharma",

        age:
            35,

        gender:
            "Female",

        uhid:
            "UHID-100246",

        department:
            "Hematology",

        reportType:
            "Routine",

        verifiedOn:
            "18 Aug 2026, 09:32 AM",

        dispatchMode:
            "WhatsApp",

        status:
            "Dispatched",

        dispatchTime:
            "18 Aug 2026, 09:38 AM",

        recipient:
            "+91 XXXXX XXXXX",

        templateId:
            "TPL-002",
    },


    {
        id:
            "RD-1003",

        accessionNo:
            "ACC-2026-00103",

        patientName:
            "Rahul Singh",

        age:
            51,

        gender:
            "Male",

        uhid:
            "UHID-100247",

        department:
            "Pathology",

        reportType:
            "Histopathology",

        verifiedOn:
            "18 Aug 2026, 10:05 AM",

        dispatchMode:
            "Email",

        status:
            "Delivered",

        dispatchTime:
            "18 Aug 2026, 10:11 AM",

        recipient:
            "rahul.singh@example.com",

        templateId:
            "TPL-002",
    },


    {
        id:
            "RD-1004",

        accessionNo:
            "ACC-2026-00104",

        patientName:
            "Neha Verma",

        age:
            29,

        gender:
            "Female",

        uhid:
            "UHID-100248",

        department:
            "Microbiology",

        reportType:
            "Culture",

        verifiedOn:
            "18 Aug 2026, 10:24 AM",

        dispatchMode:
            "SMS",

        status:
            "Failed",

        dispatchTime:
            "18 Aug 2026, 10:27 AM",

        recipient:
            "+91 XXXXX XXXXX",

        templateId:
            "TPL-001",
    },


    {
        id:
            "RD-1005",

        accessionNo:
            "ACC-2026-00105",

        patientName:
            "Sanjay Gupta",

        age:
            47,

        gender:
            "Male",

        uhid:
            "UHID-100249",

        department:
            "Biochemistry",

        reportType:
            "Routine",

        verifiedOn:
            "18 Aug 2026, 10:46 AM",

        dispatchMode:
            "Download",

        status:
            "Delivered",

        dispatchTime:
            "18 Aug 2026, 10:48 AM",

        recipient:
            "Patient Portal",

        templateId:
            "TPL-001",
    },

];


// =========================================
// DEFAULT EXPORT
// =========================================

const reportDispatchMock = {

    templates:
        reportDispatchTemplates,

    reports:
        reportDispatchMockData,

};


export default reportDispatchMock;