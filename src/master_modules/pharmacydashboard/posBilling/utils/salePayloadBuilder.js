/* ==========================================================
   Sale Payload Builder
========================================================== */

import generateInvoiceNumber from "./invoiceNumberGenerator";

import calculateDiscount from "@/master_modules/pharmacydashboard/posBilling/components/BillingCartSection/utils/calculateDiscount.js";
import calculateGST from "@/master_modules/pharmacydashboard/posBilling/components/BillingCartSection/utils/calculateGST.js";
import calculateLineTotal from "@/master_modules/pharmacydashboard/posBilling/components/BillingCartSection/utils/calculateLineTotal.js";

/* ==========================================================
   Constants
========================================================== */

const GST_SLABS = [0, 5, 12, 18, 28];

const DEFAULT_CURRENCY = "INR";

const DEFAULT_STATUS = "COMPLETED";

const DEFAULT_PAYMENT_STATUS = "PAID";

const DEFAULT_SOURCE = "PHARMACY_POS";

/* ==========================================================
   Helpers
========================================================== */

const round = (value = 0) =>
    Number(Number(value).toFixed(2));

const safeNumber = (value = 0) =>
    Number(value || 0);

const formatDateTime = () => {

    const now = new Date();

    return {

        invoiceDate: now.toISOString(),

        invoiceTime: now.toLocaleTimeString("en-IN", {
            hour12: false,
        }),

    };

};

const createEmptyGSTGroup = () => ({

    taxableAmount: 0,

    gstAmount: 0,

    totalAmount: 0,

});

/* ==========================================================
   GST Summary Object
========================================================== */

const createGSTSummary = () => {

    const summary = {};

    GST_SLABS.forEach((rate) => {

        summary[rate] = createEmptyGSTGroup();

    });

    return summary;

};

/* ==========================================================
   Build Medicine Payload
========================================================== */

const buildMedicinePayload = (cartItems = []) => {

    return cartItems.map((item) => {

        const quantity = safeNumber(item.quantity);

        const mrp = safeNumber(item.mrp);

        const sellingPrice = safeNumber(item.sellingPrice);

        const discount = round(
            calculateDiscount(item)
        );

        const gstAmount = round(
            calculateGST(item)
        );

        const totalAmount = round(
            calculateLineTotal(item)
        );

        const taxableAmount = round(
            totalAmount - gstAmount
        );

        return {

            medicineId: item.id,

            medicineCode: item.medicineCode,

            medicineName: item.medicineName,

            genericName: item.genericName,

            manufacturer: item.manufacturer,

            batchNo:
                item.selectedBatch?.batchNo,

            expiryDate:
                item.selectedBatch?.expiryDate,

            hsnCode:
                item.hsnCode,

            gstPercent:
                safeNumber(item.gst),

            quantity,

            unit:
                item.unit,

            mrp,

            sellingPrice,

            discount,

            taxableAmount,

            gstAmount,

            totalAmount,

        };

    });

};

/* ==========================================================
   GST Group Builder
========================================================== */

const buildGSTGrouping = (medicines = []) => {

    const summary = createGSTSummary();

    medicines.forEach((medicine) => {

        const gst =
            safeNumber(
                medicine.gstPercent
            );

        if (!summary[gst]) {

            summary[gst] =
                createEmptyGSTGroup();

        }

        summary[gst].taxableAmount +=
            safeNumber(
                medicine.taxableAmount
            );

        summary[gst].gstAmount +=
            safeNumber(
                medicine.gstAmount
            );

        summary[gst].totalAmount +=
            safeNumber(
                medicine.totalAmount
            );

    });

    Object.keys(summary).forEach((gst) => {

        summary[gst].taxableAmount =
            round(
                summary[gst].taxableAmount
            );

        summary[gst].gstAmount =
            round(
                summary[gst].gstAmount
            );

        summary[gst].totalAmount =
            round(
                summary[gst].totalAmount
            );

    });

    return summary;

};

/* ==========================================================
   Tax Summary Builder
========================================================== */

const buildTaxSummary = (gstSummary) => {

    let taxableAmount = 0;

    let gstAmount = 0;

    let grandTotal = 0;

    Object.values(gstSummary).forEach((item) => {

        taxableAmount +=
            safeNumber(
                item.taxableAmount
            );

        gstAmount +=
            safeNumber(
                item.gstAmount
            );

        grandTotal +=
            safeNumber(
                item.totalAmount
            );

    });

    return {

        taxableAmount:
            round(taxableAmount),

        gstAmount:
            round(gstAmount),

        grandTotal:
            round(grandTotal),

    };

};


/* ==========================================================
   Customer Payload Builder
========================================================== */

const buildCustomerPayload = (customer = {}) => {

    return {

        patientId:
            customer.patientId || "",

        uhid:
            customer.uhid || "",

        patientName:
            customer.patientName || "",

        age:
            customer.age || "",

        gender:
            customer.gender || "",

        mobile:
            customer.mobile || "",

        address:
            customer.address || "",

        doctor:
            customer.doctor || "",

        department:
            customer.department || "",

        visitType:
            customer.visitType || "",

    };

};


/* ==========================================================
   Payment Payload Builder
========================================================== */

const buildPaymentPayload = (

    paymentMethod = "",

    paymentDetails = {}

) => {

    return {

        paymentMethod,

        receivedAmount:

            paymentDetails.receivedAmount || 0,

        balanceAmount:

            paymentDetails.balanceAmount || 0,

        cardType:

            paymentDetails.cardType || "",

        bankName:

            paymentDetails.bankName || "",

        lastFourDigits:

            paymentDetails.lastFourDigits || "",

        approvalCode:

            paymentDetails.approvalCode || "",

        upiApp:

            paymentDetails.upiApp || "",

        transactionId:

            paymentDetails.transactionId || "",

        referenceNumber:

            paymentDetails.referenceNumber || "",

        remarks:

            paymentDetails.remarks || "",

    };

};


/* ==========================================================
   Hospital Payload Builder
========================================================== */

const buildHospitalPayload = (

    hospital = {}

) => {

    return {

        hospitalId:

            hospital.id || "",

        hospitalName:

            hospital.name || "",

        hospitalCode:

            hospital.code || "",

        gstNumber:

            hospital.gstNumber || "",

        address:

            hospital.address || "",

    };

};


/* ==========================================================
   Branch Payload Builder
========================================================== */

const buildBranchPayload = (

    branch = {}

) => {

    return {

        branchId:

            branch.id || "",

        branchName:

            branch.name || "",

        branchCode:

            branch.code || "",

        city:

            branch.city || "",

        state:

            branch.state || "",

    };

};


/* ==========================================================
   User Payload Builder
========================================================== */

const buildUserPayload = (

    user = {}

) => {

    return {

        userId:

            user.id || "",

        employeeId:

            user.employeeId || "",

        employeeName:

            user.name || "",

        designation:

            user.designation || "",

        role:

            user.role || "",

    };

};


/* ==========================================================
   Billing Summary Builder
========================================================== */

const buildBillingSummary = (

    billingSummary = {},

    taxSummary = {}

) => {

    return {

        subTotal:

            round(
                billingSummary.subTotal ??
                taxSummary.taxableAmount
            ),

        totalDiscount:

            round(
                billingSummary.discount ?? 0
            ),

        taxableAmount:

            round(
                taxSummary.taxableAmount
            ),

        totalGST:

            round(
                taxSummary.gstAmount
            ),

        roundOff:

            round(
                billingSummary.roundOff ?? 0
            ),

        grandTotal:

            round(
                billingSummary.grandTotal ??
                taxSummary.grandTotal
            ),

        currency:

            DEFAULT_CURRENCY,

    };

};


/* ==========================================================
   Audit Payload Builder
========================================================== */

const buildAuditPayload = (

    user = {}

) => {

    const now = new Date();

    return {

        createdBy:

            user.id || "",

        createdByName:

            user.name || "",

        createdAt:

            now.toISOString(),

        updatedBy:

            null,

        updatedAt:

            null,

        cancelledBy:

            null,

        cancelledAt:

            null,

        cancellationReason:

            "",

    };

};


/* ==========================================================
   Invoice Meta Builder
========================================================== */

const buildInvoiceMeta = () => {

    const invoiceNumber =
        generateInvoiceNumber();

    const {

        invoiceDate,

        invoiceTime,

    } = formatDateTime();

    return {

        invoiceNumber,

        invoiceDate,

        invoiceTime,

        financialYear:

            getFinancialYear(),

        source:

            DEFAULT_SOURCE,

    };

};


const getFinancialYear = () => {

    const today = new Date();

    const year =
        today.getFullYear();

    const month =
        today.getMonth() + 1;

    if (month >= 4) {

        return `${year}-${year + 1}`;

    }

    return `${year - 1}-${year}`;

};


/* ==========================================================
   Status Payload Builder
========================================================== */

const buildStatusPayload = () => {

    return {

        saleStatus:

            DEFAULT_STATUS,

        paymentStatus:

            DEFAULT_PAYMENT_STATUS,

        invoiceStatus:

            "GENERATED",

        stockStatus:

            "UPDATED",

        syncStatus:

            "PENDING",

    };

};


/* ==========================================================
   Build Sale Payload
========================================================== */

const buildSalePayload = ({

    customer = {},

    cartItems = [],

    billingSummary = {},

    paymentMethod = "",

    paymentDetails = {},

    user = {},

    branch = {},

    hospital = {},

}) => {

    /* ==============================================
       Invoice
    ============================================== */

    const invoiceMeta =
        buildInvoiceMeta();

    /* ==============================================
       Customer
    ============================================== */

    const customerPayload =
        buildCustomerPayload(
            customer
        );

    /* ==============================================
       Medicines
    ============================================== */

    const medicines =
        buildMedicinePayload(
            cartItems
        );

    /* ==============================================
       GST Summary
    ============================================== */

    const gstSummary =
        buildGSTGrouping(
            medicines
        );

    /* ==============================================
       Tax Summary
    ============================================== */

    const taxSummary =
        buildTaxSummary(
            gstSummary
        );

    /* ==============================================
       Billing Summary
    ============================================== */

    const billing =
        buildBillingSummary(

            billingSummary,

            taxSummary

        );

    /* ==============================================
       Payment
    ============================================== */

    const payment =
        buildPaymentPayload(

            paymentMethod,

            paymentDetails

        );

    /* ==============================================
       User
    ============================================== */

    const createdBy =
        buildUserPayload(user);

    /* ==============================================
       Branch
    ============================================== */

    const branchPayload =
        buildBranchPayload(branch);

    /* ==============================================
       Hospital
    ============================================== */

    const hospitalPayload =
        buildHospitalPayload(
            hospital
        );

    /* ==============================================
       Audit
    ============================================== */

    const audit =
        buildAuditPayload(
            user
        );

    /* ==============================================
       Status
    ============================================== */

    const status =
        buildStatusPayload();

    /* ==============================================
       Final Payload
    ============================================== */

    return {

        invoice: invoiceMeta,

        customer: customerPayload,

        medicines,

        gstSummary,

        taxSummary,

        billing,

        payment,

        hospital: hospitalPayload,

        branch: branchPayload,

        createdBy,

        audit,

        status,

    };

};

export default buildSalePayload;