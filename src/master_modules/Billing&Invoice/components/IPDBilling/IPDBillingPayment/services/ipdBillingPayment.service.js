
import {
  ipdBillingPaymentMock,
  calculateIPDBillSummary,
} from "../mock/ipdBillingPayment.mock";

/**
 * IPD Billing Payment Service
 * Frontend demo mode only.
 * Real payment verification must happen on a trusted backend.
 */

const DEMO_PAYMENT_MODE = true;
const billStore = new Map();

/* -------------------- Helpers -------------------- */

const toAmount = (value) => {
  const amount = Number(value);
  return Number.isFinite(amount) ? Math.max(0, amount) : 0;
};

const clone = (value) => {
  if (typeof structuredClone === "function") {
    return structuredClone(value);
  }

  return JSON.parse(JSON.stringify(value ?? {}));
};

const getBillKey = (invoiceId) => {
  if (
    invoiceId === undefined ||
    invoiceId === null ||
    String(invoiceId).trim() === ""
  ) {
    throw new Error("A valid invoice ID is required.");
  }

  return String(invoiceId).trim();
};

const getPatientId = (patient) =>
  patient?.id ||
  patient?.patientId ||
  patient?.uhid ||
  patient?.ipdNo ||
  null;

const resolveInvoiceId = (invoiceId, patient, bill) =>
  invoiceId ||
  bill?.invoiceId ||
  bill?.invoiceNumber ||
  bill?.id ||
  patient?.invoiceId ||
  patient?.ipdNo ||
  patient?.uhid ||
  patient?.id ||
  patient?.patientId;

/* -------------------- Create Initial Bill -------------------- */

const createInitialBill = (invoiceId, patient, suppliedBill) => {
  const mock = clone(ipdBillingPaymentMock || {});
  const source = suppliedBill
    ? clone(suppliedBill)
    : mock;

  return {
    ...source,
    id: source.id || invoiceId,
    invoiceId: source.invoiceId || invoiceId,

    patient: {
      ...(source.patient || mock.patient || {}),
      ...(patient || {}),
    },

    charges: Array.isArray(source.charges)
      ? source.charges
      : Array.isArray(mock.charges)
        ? mock.charges
        : [],

    paymentHistory: Array.isArray(source.paymentHistory)
      ? source.paymentHistory
      : [],

    advancePaid: toAmount(
      source.advancePaid ?? mock.advancePaid
    ),
  };
};

/* -------------------- Get Bill -------------------- */

export const getBill = async (
  invoiceId,
  patient,
  suppliedBill
) => {
  const resolvedId = resolveInvoiceId(
    invoiceId,
    patient,
    suppliedBill
  );

  const key = getBillKey(resolvedId);

  if (!billStore.has(key)) {
    billStore.set(
      key,
      createInitialBill(key, patient, suppliedBill)
    );
  } else {
    const existingBill = billStore.get(key);

    billStore.set(key, {
      ...existingBill,
      ...(suppliedBill || {}),

      id: suppliedBill?.id || existingBill.id || key,
      invoiceId: key,

      patient: {
        ...(existingBill.patient || {}),
        ...(suppliedBill?.patient || {}),
        ...(patient || {}),
      },

      charges: Array.isArray(suppliedBill?.charges)
        ? suppliedBill.charges
        : existingBill.charges || [],

      paymentHistory: Array.isArray(
        existingBill.paymentHistory
      )
        ? existingBill.paymentHistory
        : [],
    });
  }

  return clone(billStore.get(key));
};

/* -------------------- Calculate Bill Summary -------------------- */

export const calculateBillSummary = (bill) => {
  if (!bill) {
    return {
      totalCharges: 0,
      discount: 0,
      netCharges: 0,
      advancePaid: 0,
      previousPayments: 0,
      outstandingAmount: 0,
      balanceDue: 0,
    };
  }

  const summary = calculateIPDBillSummary(bill) || {};

  const outstandingAmount = toAmount(
    summary.outstandingAmount ??
      summary.balanceDue ??
      summary.balance ??
      0
  );

  return {
    ...summary,
    outstandingAmount,
    balanceDue: outstandingAmount,
  };
};

/* -------------------- Record Payment -------------------- */

export const recordPayment = async ({
  invoiceId,
  patientId,
  patient,
  bill: suppliedBill,
  amount,
  method,
  transactionReference = "",
  remarks = "",
  cardType,
  transferMode,
  amountReceived,
}) => {
  const resolvedId = resolveInvoiceId(
    invoiceId,
    patient,
    suppliedBill
  );

  const key = getBillKey(resolvedId);

  /*
   * Important:
   * Register the bill supplied by the payment page.
   * This prevents a missing in-memory bill from causing
   * "Bill not found" when the IDs match.
   */
  if (!billStore.has(key) || suppliedBill) {
    await getBill(key, patient, suppliedBill);
  }

  const currentBill = billStore.get(key);

  if (!currentBill) {
    throw new Error(
      `Bill not found for invoice "${key}". Please reload the bill.`
    );
  }

  const allowedMethods = [
    "cash",
    "upi",
    "card",
    "bank-transfer",
  ];

  if (!allowedMethods.includes(method)) {
    throw new Error("Please select a valid payment method.");
  }

  const paymentAmount = toAmount(amount);

  if (paymentAmount <= 0) {
    throw new Error(
      "Payment amount must be greater than zero."
    );
  }

  const summary = calculateBillSummary(currentBill);
  const outstandingAmount = toAmount(
    summary.outstandingAmount
  );

  if (outstandingAmount <= 0) {
    throw new Error(
      "This bill has no outstanding balance."
    );
  }

  if (paymentAmount > outstandingAmount) {
    throw new Error(
      "Payment amount exceeds the outstanding balance."
    );
  }

  if (
    method !== "cash" &&
    !String(transactionReference).trim()
  ) {
    throw new Error(
      "Please enter the transaction reference number."
    );
  }

  const receivedAmount = toAmount(amountReceived);

  if (
    method === "cash" &&
    receivedAmount < paymentAmount
  ) {
    throw new Error(
      "Cash received is less than the payment amount."
    );
  }

  const payment = {
    paymentId: `PAY-${Date.now()}-${Math.random()
      .toString(36)
      .slice(2, 7)}`,

    invoiceId: key,

    patientId:
      patientId || getPatientId(currentBill.patient),

    amount: paymentAmount,
    method,

    transactionReference:
      String(transactionReference).trim() || null,

    remarks: String(remarks || "").trim(),

    cardType:
      method === "card" ? cardType || null : null,

    transferMode:
      method === "bank-transfer"
        ? transferMode || null
        : null,

    amountReceived:
      method === "cash" ? receivedAmount : null,

    changeReturned:
      method === "cash"
        ? Math.max(0, receivedAmount - paymentAmount)
        : 0,

    status: DEMO_PAYMENT_MODE ? "success" : "pending",

    verified: false,
    demoMode: DEMO_PAYMENT_MODE,
    createdAt: new Date().toISOString(),
  };

  const updatedBill = {
    ...currentBill,

    paymentHistory: [
      ...(currentBill.paymentHistory || []),
      payment,
    ],
  };

  billStore.set(key, updatedBill);

  return {
    ...clone(payment),

    updatedBill: clone(updatedBill),

    message: DEMO_PAYMENT_MODE
      ? "Demo payment recorded successfully. No real transaction was processed."
      : "Payment recorded and awaiting trusted backend verification.",
  };
};

/* -------------------- Verify Payment -------------------- */

export const verifyPayment = async (paymentId) => {
  if (!paymentId) {
    throw new Error("A valid payment ID is required.");
  }

  throw new Error(
    "Payment verification is not configured. Verify through the trusted backend or payment gateway."
  );
};

/* -------------------- Get Payment History -------------------- */

export const getPaymentHistory = async (invoiceId) => {
  const key = getBillKey(invoiceId);
  const bill = billStore.get(key);

  if (!bill) {
    throw new Error(
      "Bill not found. Please reload the bill."
    );
  }

  return clone(bill.paymentHistory || []);
};

/* -------------------- Reset Demo Bill -------------------- */

export const resetBill = async (invoiceId) => {
  const key = getBillKey(invoiceId);

  billStore.delete(key);

  return getBill(key);
};
