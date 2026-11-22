/* ===========================================================
   Prescription Information
=========================================================== */

export const prescriptionInfo = {

    prescriptionId: "RX-20260701001",

    visitNo: "OPD-240701-001",

    prescriptionDate: "01 Jul 2026",

    visitTime: "11:45 AM",

    doctorId: "DOC-1001",

    doctor: "Dr. Rajesh Sharma",

    department: "General Medicine",

};

/* ===========================================================
   Substitute Medicines
=========================================================== */

export const substituteMedicines = [

    /* =======================================================
       Paracetamol (PCM650)
    ======================================================= */

    {
        id: 101,

        parentMedicineCode: "PCM650",

        parentGeneric: "Acetaminophen",

        type: "recommended",

        hospitalPreferred: true,

        medicineCode: "DOL650",

        medicineName: "Dolo 650",

        genericName: "Acetaminophen",

        strength: "650 mg",

        dosageForm: "Tablet",

        manufacturer: "Micro Labs",

        availableStock: 245,

        batchNo: "DL24021",

        expiryDate: "12/2027",

        mrp: 38,

        sellingPrice: 38,

        gst: 12,

        status: "Available",

    },

    {
        id: 102,

        parentMedicineCode: "PCM650",

        parentGeneric: "Acetaminophen",

        type: "recommended",

        hospitalPreferred: true,

        medicineCode: "CAL650",

        medicineName: "Calpol 650",

        genericName: "Acetaminophen",

        strength: "650 mg",

        dosageForm: "Tablet",

        manufacturer: "GSK",

        availableStock: 182,

        batchNo: "CP24008",

        expiryDate: "09/2027",

        mrp: 36,

        sellingPrice: 36,

        gst: 12,

        status: "Available",

    },

    {
        id: 103,

        parentMedicineCode: "PCM650",

        parentGeneric: "Acetaminophen",

        type: "sameSalt",

        hospitalPreferred: false,

        medicineCode: "PAC650",

        medicineName: "Pacimol 650",

        genericName: "Acetaminophen",

        strength: "650 mg",

        dosageForm: "Tablet",

        manufacturer: "Alkem",

        availableStock: 130,

        batchNo: "PAC65001",

        expiryDate: "05/2027",

        mrp: 34,

        sellingPrice: 34,

        gst: 12,

        status: "Available",

    },

    {
        id: 104,

        parentMedicineCode: "PCM650",

        parentGeneric: "Acetaminophen",

        type: "generic",

        hospitalPreferred: false,

        medicineCode: "GEN650",

        medicineName: "Paracetamol Generic",

        genericName: "Acetaminophen",

        strength: "650 mg",

        dosageForm: "Tablet",

        manufacturer: "Jan Aushadhi",

        availableStock: 400,

        batchNo: "JA65010",

        expiryDate: "03/2028",

        mrp: 22,

        sellingPrice: 22,

        gst: 5,

        status: "Available",

    },

    /* =======================================================
       Azithromycin (AZ500)
    ======================================================= */

    {
        id: 201,

        parentMedicineCode: "AZ500",

        parentGeneric: "Azithromycin",

        type: "recommended",

        hospitalPreferred: true,

        medicineCode: "AZEE500",

        medicineName: "Azee 500",

        genericName: "Azithromycin",

        strength: "500 mg",

        dosageForm: "Tablet",

        manufacturer: "Cipla",

        availableStock: 90,

        batchNo: "AZ50090",

        expiryDate: "10/2027",

        mrp: 118,

        sellingPrice: 118,

        gst: 12,

        status: "Available",

    },

    {
        id: 202,

        parentMedicineCode: "AZ500",

        parentGeneric: "Azithromycin",

        type: "generic",

        hospitalPreferred: false,

        medicineCode: "AZG500",

        medicineName: "Azithromycin Generic",

        genericName: "Azithromycin",

        strength: "500 mg",

        dosageForm: "Tablet",

        manufacturer: "Jan Aushadhi",

        availableStock: 260,

        batchNo: "AZG50011",

        expiryDate: "12/2028",

        mrp: 72,

        sellingPrice: 72,

        gst: 12,

        status: "Available",

    },

    /* =======================================================
       Pantoprazole (PNT40)
    ======================================================= */

    {
        id: 301,

        parentMedicineCode: "PNT40",

        parentGeneric: "Pantoprazole",

        type: "recommended",

        hospitalPreferred: true,

        medicineCode: "PAN40",

        medicineName: "Pantocid 40",

        genericName: "Pantoprazole",

        strength: "40 mg",

        dosageForm: "Tablet",

        manufacturer: "Sun Pharma",

        availableStock: 145,

        batchNo: "PAN4012",

        expiryDate: "08/2027",

        mrp: 148,

        sellingPrice: 148,

        gst: 12,

        status: "Available",

    },

    {
        id: 302,

        parentMedicineCode: "PNT40",

        parentGeneric: "Pantoprazole",

        type: "sameSalt",

        hospitalPreferred: false,

        medicineCode: "PANT40",

        medicineName: "Pantosec 40",

        genericName: "Pantoprazole",

        strength: "40 mg",

        dosageForm: "Tablet",

        manufacturer: "Aristo",

        availableStock: 44,

        batchNo: "PTS4011",

        expiryDate: "07/2027",

        mrp: 140,

        sellingPrice: 140,

        gst: 12,

        status: "Low Stock",

    },

    /* =======================================================
       Amoxicillin (AMX625)
    ======================================================= */

    {
        id: 401,

        parentMedicineCode: "AMX625",

        parentGeneric: "Amoxicillin",

        type: "recommended",

        hospitalPreferred: true,

        medicineCode: "MOX625",

        medicineName: "Moxikind-CV 625",

        genericName: "Amoxicillin",

        strength: "625 mg",

        dosageForm: "Tablet",

        manufacturer: "Mankind",

        availableStock: 85,

        batchNo: "MOX62509",

        expiryDate: "11/2027",

        mrp: 282,

        sellingPrice: 282,

        gst: 12,

        status: "Available",

    },

    {
        id: 402,

        parentMedicineCode: "AMX625",

        parentGeneric: "Amoxicillin",

        type: "sameSalt",

        hospitalPreferred: false,

        medicineCode: "CLV625",

        medicineName: "Clavam 625",

        genericName: "Amoxicillin",

        strength: "625 mg",

        dosageForm: "Tablet",

        manufacturer: "Alkem",

        availableStock: 52,

        batchNo: "CLV62544",

        expiryDate: "09/2027",

        mrp: 276,

        sellingPrice: 276,

        gst: 12,

        status: "Available",

    },

    /* =======================================================
       Domperidone (DOM10)
    ======================================================= */

    {
        id: 501,

        parentMedicineCode: "DOM10",

        parentGeneric: "Domperidone",

        type: "recommended",

        hospitalPreferred: true,

        medicineCode: "DOMPLUS",

        medicineName: "Domstal",

        genericName: "Domperidone",

        strength: "10 mg",

        dosageForm: "Tablet",

        manufacturer: "Torrent",

        availableStock: 95,

        batchNo: "DOM210",

        expiryDate: "10/2027",

        mrp: 60,

        sellingPrice: 60,

        gst: 12,

        status: "Available",

    }

];



/* ===========================================================
   Prescribed Medicines
=========================================================== */

export const prescribedMedicines = [

    {
        id: 1,

        medicineCode: "PCM650",

        medicineName: "Paracetamol",

        genericName: "Acetaminophen",

        dosageForm: "Tablet",

        strength: "650 mg",

        frequency: "1-1-1",

        duration: "5 Days",

        quantity: 15,

        availableStock: 240,

        manufacturer: "Cipla",

        batchNo: "PCM24011",

        expiryDate: "12/2027",

        mrp: 38,

        sellingPrice: 38,

        gst: 12,

        scheduleType: "OTC",

        hospitalPreferred: true,

        substituteAvailable: true,

        status: "Available",
    },

    {
        id: 2,

        medicineCode: "AZ500",

        medicineName: "Azithromycin",

        genericName: "Azithromycin",

        dosageForm: "Tablet",

        strength: "500 mg",

        frequency: "1-0-0",

        duration: "3 Days",

        quantity: 3,

        availableStock: 5,

        manufacturer: "Sun Pharma",

        batchNo: "AZ23091",

        expiryDate: "10/2026",

        mrp: 128,

        sellingPrice: 128,

        gst: 12,

        scheduleType: "H",

        hospitalPreferred: true,

        substituteAvailable: true,

        status: "Low Stock",
    },

    {
        id: 3,

        medicineCode: "PNT40",

        medicineName: "Pantoprazole",

        genericName: "Pantoprazole",

        dosageForm: "Tablet",

        strength: "40 mg",

        frequency: "1-0-1",

        duration: "15 Days",

        quantity: 30,

        availableStock: 0,

        manufacturer: "Mankind",

        batchNo: "PNT111",

        expiryDate: "09/2026",

        mrp: 145,

        sellingPrice: 145,

        gst: 12,

        scheduleType: "H",

        hospitalPreferred: true,

        substituteAvailable: true,

        // status: "Out Of Stock",
        status: "Available",
    },

    {
        id: 4,

        medicineCode: "AMX625",

        medicineName: "Amoxicillin + Clavulanic Acid",

        genericName: "Amoxicillin",

        dosageForm: "Tablet",

        strength: "625 mg",

        frequency: "1-0-1",

        duration: "7 Days",

        quantity: 14,

        availableStock: 95,

        manufacturer: "Abbott",

        batchNo: "AMX450",

        expiryDate: "08/2027",

        mrp: 295,

        sellingPrice: 295,

        gst: 12,

        scheduleType: "H",

        hospitalPreferred: true,

        substituteAvailable: true,

        status: "Available",
    },

    {
        id: 5,

        medicineCode: "DOM10",

        medicineName: "Domperidone",

        genericName: "Domperidone",

        dosageForm: "Tablet",

        strength: "10 mg",

        frequency: "SOS",

        duration: "5 Days",

        quantity: 10,

        availableStock: 62,

        manufacturer: "Torrent",

        batchNo: "DOM887",

        expiryDate: "11/2027",

        mrp: 62,

        sellingPrice: 62,

        gst: 12,

        scheduleType: "H",

        hospitalPreferred: false,

        substituteAvailable: true,

        status: "Available",
    },

    {
        id: 6,

        medicineCode: "ORS01",

        medicineName: "ORS Powder",

        genericName: "Oral Rehydration Salts",

        dosageForm: "Sachet",

        strength: "21.8 gm",

        frequency: "As Directed",

        duration: "3 Days",

        quantity: 6,

        availableStock: 18,

        manufacturer: "FDC",

        batchNo: "ORS990",

        expiryDate: "05/2027",

        mrp: 22,

        sellingPrice: 22,

        gst: 5,

        scheduleType: "OTC",

        hospitalPreferred: false,

        substituteAvailable: false,

        status: "Low Stock",
    },

];



/* ===========================================================
   Default Export
=========================================================== */

export default {

    prescription: prescriptionInfo,

    medicines: prescribedMedicines,

    substitutes: substituteMedicines,

};