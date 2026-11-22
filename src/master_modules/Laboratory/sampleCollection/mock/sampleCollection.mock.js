const sampleCollectionMock = [

    {
        id: "SC-001",

        accessionNo: "ACC-202608-0001",

        patient: {
            uhid: "UHID-100245",

            name: "Amit Kumar",

            age: 34,

            gender: "Male",
        },

        sampleType: "Blood",

        collectionCenter: "Main Laboratory",

        collectedBy: "Ritika Sharma",

        collectionDate: "2026-08-12",

        collectionTime: "09:15 AM",

        status: "Completed",
    },


    {
        id: "SC-002",

        accessionNo: "ACC-202608-0002",

        patient: {
            uhid: "UHID-100246",

            name: "Priya Singh",

            age: 28,

            gender: "Female",
        },

        sampleType: "Serum",

        collectionCenter: "OPD Collection Center",

        collectedBy: "Vikram Singh",

        collectionDate: "2026-08-12",

        collectionTime: "09:32 AM",

        status: "Completed",
    },


    {
        id: "SC-003",

        accessionNo: "ACC-202608-0003",

        patient: {
            uhid: "UHID-100247",

            name: "Ramesh Yadav",

            age: 46,

            gender: "Male",
        },

        sampleType: "Plasma",

        collectionCenter: "Main Laboratory",

        collectedBy: "Neha Gupta",

        collectionDate: "2026-08-12",

        collectionTime: "10:05 AM",

        status: "Pending",
    },


    {
        id: "SC-004",

        accessionNo: "ACC-202608-0004",

        patient: {
            uhid: "UHID-100248",

            name: "Sneha Verma",

            age: 31,

            gender: "Female",
        },

        sampleType: "Urine",

        collectionCenter: "IPD Collection Center",

        collectedBy: "Aman Kumar",

        collectionDate: "2026-08-12",

        collectionTime: "10:20 AM",

        status: "Completed",
    },


    {
        id: "SC-005",

        accessionNo: "ACC-202608-0005",

        patient: {
            uhid: "UHID-100249",

            name: "Rahul Mishra",

            age: 52,

            gender: "Male",
        },

        sampleType: "Blood",

        collectionCenter: "Emergency",

        collectedBy: "Ritika Sharma",

        collectionDate: "2026-08-12",

        collectionTime: "10:48 AM",

        status: "Rejected",
    },


    {
        id: "SC-006",

        accessionNo: "ACC-202608-0006",

        patient: {
            uhid: "UHID-100250",

            name: "Anjali Singh",

            age: 25,

            gender: "Female",
        },

        sampleType: "Serum",

        collectionCenter: "Main Laboratory",

        collectedBy: "Neha Gupta",

        collectionDate: "2026-08-12",

        collectionTime: "11:10 AM",

        status: "Completed",
    },


    {
        id: "SC-007",

        accessionNo: "ACC-202608-0007",

        patient: {
            uhid: "UHID-100251",

            name: "Suresh Patel",

            age: 61,

            gender: "Male",
        },

        sampleType: "Plasma",

        collectionCenter: "OPD Collection Center",

        collectedBy: "Vikram Singh",

        collectionDate: "2026-08-12",

        collectionTime: "11:35 AM",

        status: "On Hold",
    },


    {
        id: "SC-008",

        accessionNo: "ACC-202608-0008",

        patient: {
            uhid: "UHID-100252",

            name: "Kavita Sharma",

            age: 39,

            gender: "Female",
        },

        sampleType: "Blood",

        collectionCenter: "Main Laboratory",

        collectedBy: "Aman Kumar",

        collectionDate: "2026-08-12",

        collectionTime: "12:05 PM",

        status: "Completed",
    },


    {
        id: "SC-009",

        accessionNo: "ACC-202608-0009",

        patient: {
            uhid: "UHID-100253",

            name: "Manoj Singh",

            age: 43,

            gender: "Male",
        },

        sampleType: "Urine",

        collectionCenter: "IPD Collection Center",

        collectedBy: "Neha Gupta",

        collectionDate: "2026-08-12",

        collectionTime: "12:30 PM",

        status: "Pending",
    },


    {
        id: "SC-010",

        accessionNo: "ACC-202608-0010",

        patient: {
            uhid: "UHID-100254",

            name: "Pooja Verma",

            age: 29,

            gender: "Female",
        },

        sampleType: "Swab",

        collectionCenter: "Emergency",

        collectedBy: "Ritika Sharma",

        collectionDate: "2026-08-12",

        collectionTime: "01:05 PM",

        status: "Completed",
    },


    {
        id: "SC-011",

        accessionNo: "ACC-202608-0011",

        patient: {
            uhid: "UHID-100255",

            name: "Deepak Kumar",

            age: 37,

            gender: "Male",
        },

        sampleType: "Blood",

        collectionCenter: "Main Laboratory",

        collectedBy: "Vikram Singh",

        collectionDate: "2026-08-12",

        collectionTime: "01:25 PM",

        status: "Pending",
    },


    {
        id: "SC-012",

        accessionNo: "ACC-202608-0012",

        patient: {
            uhid: "UHID-100256",

            name: "Neha Gupta",

            age: 33,

            gender: "Female",
        },

        sampleType: "Serum",

        collectionCenter: "OPD Collection Center",

        collectedBy: "Aman Kumar",

        collectionDate: "2026-08-12",

        collectionTime: "01:50 PM",

        status: "Completed",
    },


    {
        id: "SC-013",

        accessionNo: "ACC-202608-0013",

        patient: {
            uhid: "UHID-100257",

            name: "Arun Tiwari",

            age: 48,

            gender: "Male",
        },

        sampleType: "Plasma",

        collectionCenter: "Main Laboratory",

        collectedBy: "Neha Gupta",

        collectionDate: "2026-08-12",

        collectionTime: "02:15 PM",

        status: "On Hold",
    },


    {
        id: "SC-014",

        accessionNo: "ACC-202608-0014",

        patient: {
            uhid: "UHID-100258",

            name: "Meena Devi",

            age: 56,

            gender: "Female",
        },

        sampleType: "Urine",

        collectionCenter: "IPD Collection Center",

        collectedBy: "Ritika Sharma",

        collectionDate: "2026-08-12",

        collectionTime: "02:40 PM",

        status: "Completed",
    },


    {
        id: "SC-015",

        accessionNo: "ACC-202608-0015",

        patient: {
            uhid: "UHID-100259",

            name: "Rajesh Singh",

            age: 42,

            gender: "Male",
        },

        sampleType: "Blood",

        collectionCenter: "Emergency",

        collectedBy: "Vikram Singh",

        collectionDate: "2026-08-12",

        collectionTime: "03:05 PM",

        status: "Rejected",
    },

];


export default sampleCollectionMock;