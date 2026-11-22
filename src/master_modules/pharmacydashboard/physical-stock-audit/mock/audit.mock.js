const auditMock = [

    {

        id: 1,

        auditNo: "AUD/2026/08/001",

        auditType: "Full Audit",

        store: "Main Pharmacy",

        auditDate: "04 Aug 2026",

        auditor: "Ritesh Singh",

        status: "Completed",

        itemsScanned: 1248,

        totalItems: 1248,

        varianceItems: 8,

        accuracy: 98.72,

        systemValue: 1245680,

        physicalValue: 1234250,

        varianceValue: 11430,

        startTime: "04 Aug 2026, 09:15 AM",

        completedTime: "04 Aug 2026, 01:45 PM",

        duration: "4h 30m",

    },

    {

        id: 2,

        auditNo: "AUD/2026/08/002",

        auditType: "Category Audit",

        store: "Branch Store A",

        auditDate: "03 Aug 2026",

        auditor: "John Doe",

        status: "Completed",

        itemsScanned: 562,

        totalItems: 562,

        varianceItems: 3,

        accuracy: 99.47,

        systemValue: 456200,

        physicalValue: 455860,

        varianceValue: 340,

        startTime: "03 Aug 2026, 10:00 AM",

        completedTime: "03 Aug 2026, 12:10 PM",

        duration: "2h 10m",

    },

    {

        id: 3,

        auditNo: "AUD/2026/08/003",

        auditType: "Full Audit",

        store: "Branch Store B",

        auditDate: "02 Aug 2026",

        auditor: "Mike Smith",

        status: "In Progress",

        itemsScanned: 720,

        totalItems: 1120,

        varianceItems: 0,

        accuracy: 64.29,

        systemValue: 864000,

        physicalValue: 0,

        varianceValue: 0,

        startTime: "02 Aug 2026, 09:30 AM",

        completedTime: "-",

        duration: "-",

    },

    {

        id: 4,

        auditNo: "AUD/2026/08/004",

        auditType: "Expiring Audit",

        store: "Main Pharmacy",

        auditDate: "01 Aug 2026",

        auditor: "Pharmacist",

        status: "Completed",

        itemsScanned: 318,

        totalItems: 318,

        varianceItems: 12,

        accuracy: 96.23,

        systemValue: 312450,

        physicalValue: 301220,

        varianceValue: 11230,

        startTime: "01 Aug 2026, 08:30 AM",

        completedTime: "01 Aug 2026, 11:00 AM",

        duration: "2h 30m",

    },

    {

        id: 5,

        auditNo: "AUD/2026/08/005",

        auditType: "High Value Audit",

        store: "Main Pharmacy",

        auditDate: "31 Jul 2026",

        auditor: "Sarah Wilson",

        status: "Variance Found",

        itemsScanned: 156,

        totalItems: 156,

        varianceItems: 15,

        accuracy: 90.38,

        systemValue: 1150000,

        physicalValue: 1095000,

        varianceValue: 55000,

        startTime: "31 Jul 2026, 09:00 AM",

        completedTime: "31 Jul 2026, 10:40 AM",

        duration: "1h 40m",

    },

];

export default auditMock;