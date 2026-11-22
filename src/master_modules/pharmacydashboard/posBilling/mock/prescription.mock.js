/* ===========================================================
   Prescription Header
=========================================================== */

export const prescriptionInfo = {

    prescriptionId: "RX-20260701001",

    visitNo: "OPD-240701-001",

    patientId: "UHID-100245",

    patientName: "Ritesh Singh",

    patientType: "OPD",

    doctor: "Dr. Rajesh Sharma",

    department: "General Medicine",

    prescriptionDate: "01 Jul 2026",

    visitTime: "11:45 AM",

};

/* ===========================================================
   Prescription Medicines
=========================================================== */

export const prescriptionMedicines = [

    {

        id: 1,

        medicineCode: "PCM650",

        medicineName: "Paracetamol",

        genericName: "Acetaminophen",

        strength: "650 mg",

        dosageForm: "Tablet",

        frequency: "1-1-1",

        duration: "5 Days",

        quantity: 15,

        availableStock: 240,

        batchNo: "PCM24011",

        expiryDate: "12/2027",

        manufacturer: "Cipla",

        mrp: 38,

        gst: 12,

        status: "Available",

    },

    {

        id: 2,

        medicineCode: "AZ500",

        medicineName: "Azithromycin",

        genericName: "Azithromycin",

        strength: "500 mg",

        dosageForm: "Tablet",

        frequency: "1-0-0",

        duration: "3 Days",

        quantity: 3,

        availableStock: 5,

        batchNo: "AZ23091",

        expiryDate: "10/2026",

        manufacturer: "Sun Pharma",

        mrp: 128,

        gst: 12,

        status: "Low Stock",

    },

    {

        id: 3,

        medicineCode: "PNT40",

        medicineName: "Pantoprazole",

        genericName: "Pantoprazole",

        strength: "40 mg",

        dosageForm: "Tablet",

        frequency: "1-0-1",

        duration: "15 Days",

        quantity: 30,

        availableStock: 0,

        batchNo: "PNT111",

        expiryDate: "09/2026",

        manufacturer: "Mankind",

        mrp: 145,

        gst: 12,

        status: "Out Of Stock",

    },

    {

        id: 4,

        medicineCode: "AMX625",

        medicineName: "Amoxicillin + Clavulanic Acid",

        genericName: "Amoxicillin",

        strength: "625 mg",

        dosageForm: "Tablet",

        frequency: "1-0-1",

        duration: "7 Days",

        quantity: 14,

        availableStock: 95,

        batchNo: "AMX450",

        expiryDate: "08/2027",

        manufacturer: "Abbott",

        mrp: 295,

        gst: 12,

        status: "Available",

    },

    {

        id: 5,

        medicineCode: "DOM10",

        medicineName: "Domperidone",

        genericName: "Domperidone",

        strength: "10 mg",

        dosageForm: "Tablet",

        frequency: "SOS",

        duration: "5 Days",

        quantity: 10,

        availableStock: 55,

        batchNo: "DOM887",

        expiryDate: "11/2027",

        manufacturer: "Torrent",

        mrp: 62,

        gst: 12,

        status: "Available",

    },

    {

        id: 6,

        medicineCode: "ORS01",

        medicineName: "ORS Powder",

        genericName: "Oral Rehydration Salt",

        strength: "21.8 gm",

        dosageForm: "Sachet",

        frequency: "As Directed",

        duration: "3 Days",

        quantity: 6,

        availableStock: 18,

        batchNo: "ORS990",

        expiryDate: "05/2027",

        manufacturer: "FDC",

        mrp: 22,

        gst: 5,

        status: "Low Stock",

    },

];

/* ===========================================================
   Default Export
=========================================================== */

const prescriptionMock = {

    ...prescriptionInfo,

    medicines: prescriptionMedicines,

};

export default prescriptionMock;