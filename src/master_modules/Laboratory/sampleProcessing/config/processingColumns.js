const processingColumns = [

    {
        id: "accessionNo",

        label: "Accession No.",

        key: "accessionNo",

        minWidth: 125,
    },


    {
        id: "patientName",

        label: "Patient Name",

        key: "patientName",

        minWidth: 150,
    },


    {
        id: "sampleType",

        label: "Sample Type",

        key: "sampleType",

        minWidth: 110,
    },


    {
        id: "testProfile",

        label: "Test / Profile",

        key: "testProfile",

        minWidth: 150,
    },


    {
        id: "department",

        label: "Department",

        key: "department",

        minWidth: 125,
    },


    {
        id: "receivedOn",

        label: "Received On",

        key: "receivedOn",

        minWidth: 145,
    },


    {
        id: "status",

        label: "Status",

        key: "status",

        minWidth: 115,

        type: "status",
    },


    {
        id: "priority",

        label: "Priority",

        key: "priority",

        minWidth: 100,

        type: "priority",
    },


    {
        id: "currentStep",

        label: "Current Step",

        key: "currentStep",

        minWidth: 135,
    },


    {
        id: "tatRemaining",

        label: "TAT Remaining",

        key: "tatRemaining",

        minWidth: 125,

        type: "tat",
    },


    {
        id: "actions",

        label: "Actions",

        key: "actions",

        minWidth: 75,

        type: "actions",

        align: "center",

    },

];


export default processingColumns;