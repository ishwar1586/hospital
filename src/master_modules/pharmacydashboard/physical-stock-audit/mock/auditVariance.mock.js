const auditVarianceMock = [

    {
        id: 1,
        medicine: "Paracetamol 650 mg",
        batch: "PCM24001",
        expiry: "08/2028",
        systemQty: 250,
        physicalQty: 248,
        difference: -2,
        status: "Short",
    },

    {
        id: 2,
        medicine: "Azithromycin 500 mg",
        batch: "AZ50012",
        expiry: "02/2028",
        systemQty: 120,
        physicalQty: 124,
        difference: +4,
        status: "Excess",
    },

    {
        id: 3,
        medicine: "Vitamin C Tablets",
        batch: "VC2208",
        expiry: "11/2027",
        systemQty: 320,
        physicalQty: 320,
        difference: 0,
        status: "Matched",
    },

];

export default auditVarianceMock;