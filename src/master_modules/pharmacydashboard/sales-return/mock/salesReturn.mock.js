const salesReturnMock = [
    {
        id: 1,
        returnNumber: "SRN-20260001",
        invoiceNumber: "INV-20261001",
        patientName: "Ritesh Singh",
        uhid: "UHID000101",
        billDate: "28-Jul-2026",
        returnDate: "29-Jul-2026",
        refundAmount: 425.00,
        status: "Completed",
        paymentMode: "Cash",
        createdBy: "Admin",

        customer: {
            mobile: "9876543210",
            age: 24,
            gender: "Male",
            doctor: "Dr. Amit Sharma"
        },

        medicines: [
            {
                medicineName: "Paracetamol 650",
                batch: "PCM2401",
                soldQty: 5,
                returnedQty: 2,
                returnQty: 2,
                mrp: 35,
                rate: 30,
                gst: 12,
                amount: 60,
                reason: "Wrong Medicine"
            },
            {
                medicineName: "Azithromycin 500",
                batch: "AZT1105",
                soldQty: 2,
                returnedQty: 1,
                returnQty: 1,
                mrp: 120,
                rate: 110,
                gst: 5,
                amount: 110,
                reason: "Doctor Cancelled"
            },{
                medicineName: "Aziycin 500",
                batch: "AZT1105",
                soldQty: 2,
                returnedQty: 1,
                returnQty: 1,
                mrp: 120,
                rate: 110,
                gst: 5,
                amount: 110,
                reason: "Doctor Cancelled"
            },{
                medicineName: "Acin 500",
                batch: "AZT1105",
                soldQty: 2,
                returnedQty: 1,
                returnQty: 1,
                mrp: 120,
                rate: 110,
                gst: 5,
                amount: 110,
                reason: "Doctor Cancelled"
            },{
                medicineName: "cin 500",
                batch: "AZT1105",
                soldQty: 2,
                returnedQty: 1,
                returnQty: 1,
                mrp: 120,
                rate: 110,
                gst: 5,
                amount: 110,
                reason: "Doctor Cancelled"
            }
        ],

        summary: {
            subTotal: 170,
            discount: 10,
            gst: 15,
            refund: 175
        }
    },

    {
        id: 2,
        returnNumber: "SRN-20260002",
        invoiceNumber: "INV-20261002",
        patientName: "Rahul Verma",
        uhid: "UHID000102",
        billDate: "29-Jul-2026",
        returnDate: "29-Jul-2026",
        refundAmount: 980.00,
        status: "Pending",
        paymentMode: "UPI",
        createdBy: "Reception",

        customer: {
            mobile: "9123456780",
            age: 37,
            gender: "Male",
            doctor: "Dr. Vivek Singh"
        },

        medicines: [
            {
                medicineName: "Pantoprazole 40",
                batch: "PAN4512",
                soldQty: 10,
                returnedQty: 0,
                returnQty: 3,
                mrp: 120,
                rate: 110,
                gst: 12,
                amount: 330,
                reason: "Customer Request"
            }
        ],

        summary: {
            subTotal: 330,
            discount: 20,
            gst: 37,
            refund: 347
        }
    },

    {
        id: 3,
        returnNumber: "SRN-20260003",
        invoiceNumber: "INV-20261003",
        patientName: "Priya Gupta",
        uhid: "UHID000103",
        billDate: "27-Jul-2026",
        returnDate: "29-Jul-2026",
        refundAmount: 250,
        status: "Cancelled",
        paymentMode: "Card",
        createdBy: "Admin",

        customer: {
            mobile: "9988776655",
            age: 30,
            gender: "Female",
            doctor: "Dr. Neha Gupta"
        },

        medicines: [
            {
                medicineName: "Vitamin C",
                batch: "VTC445",
                soldQty: 3,
                returnedQty: 1,
                returnQty: 1,
                mrp: 90,
                rate: 80,
                gst: 5,
                amount: 80,
                reason: "Damaged Medicine"
            }
        ],

        summary: {
            subTotal: 80,
            discount: 0,
            gst: 4,
            refund: 84
        }
    }
];

export default salesReturnMock;