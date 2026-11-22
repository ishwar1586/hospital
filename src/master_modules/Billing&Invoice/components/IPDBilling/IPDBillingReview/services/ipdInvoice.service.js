
/* =========================================================
   IPD INVOICE SERVICE
   File: ipdInvoice.service.js
   Purpose: Invoice validation, demo generation and API calls
   ========================================================= */

// true  = frontend demo mode; backend URL not required
// false = generate/fetch invoices using the real backend
const DEMO_INVOICE_MODE = true;

const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || ""
).trim().replace(/\/+$/, "");

const INVOICE_ENDPOINT = "/api/ipd/invoices";

/* ---------------------------------------------------------
   Request headers
--------------------------------------------------------- */

const getRequestHeaders = () => ({
  "Content-Type": "application/json",
});

/* ---------------------------------------------------------
   Response helpers
--------------------------------------------------------- */

const parseResponse = async (response) => {
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return response.json();
  }

  return response.text();
};

const createApiError = (message, status) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

const getErrorMessage = (result, fallback) => {
  if (result && typeof result === "object") {
    return result.message || result.error || fallback;
  }

  return typeof result === "string" && result.trim()
    ? result
    : fallback;
};

/* ---------------------------------------------------------
   General helpers
--------------------------------------------------------- */

const toAmount = (value) => {
  const amount = Number(value);

  return Number.isFinite(amount) && amount >= 0
    ? amount
    : 0;
};

const getPatientId = (patient = {}) =>
  patient.id ||
  patient.patientId ||
  patient.uhid ||
  patient.UHID ||
  patient.ipdNo ||
  patient.admissionNo ||
  null;

const getCharges = (payload = {}) =>
  Array.isArray(payload.charges)
    ? payload.charges
    : Array.isArray(payload.bill?.charges)
      ? payload.bill.charges
      : [];

/* ---------------------------------------------------------
   Validate invoice payload
--------------------------------------------------------- */

export const validateIPDInvoicePayload = (payload) => {
  const errors = [];

  if (!payload || typeof payload !== "object") {
    return ["Invoice data is required."];
  }

  const patient = payload.patient || {};
  const bill = payload.bill || {};
  const summary = payload.summary || bill.summary || {};

  if (!getPatientId(patient)) {
    errors.push(
      "Patient ID, UHID or IPD number is required."
    );
  }

  const charges = getCharges(payload);

  if (charges.length === 0) {
    errors.push("At least one bill charge is required.");
  }

  const totalValue =
    bill.totalBillAmount ??
    bill.totalAmount ??
    bill.netBillAmount ??
    summary.grandTotal ??
    summary.totalAmount ??
    summary.netCharges ??
    summary.totalCharges ??
    payload.totalAmount;

  const totalAmount = Number(totalValue);

  if (
    totalValue === undefined ||
    totalValue === null ||
    totalValue === "" ||
    !Number.isFinite(totalAmount) ||
    totalAmount < 0
  ) {
    errors.push("A valid total bill amount is required.");
  }

  return errors;
};

/* ---------------------------------------------------------
   Demo invoice generation
   This does not persist data or verify real payments.
--------------------------------------------------------- */

const generateDemoInvoice = (payload) => {
  const patient = payload.patient || {};
  const bill = payload.bill || {};
  const summary = payload.summary || bill.summary || {};
  const charges = getCharges(payload);

  const invoiceNumber =
    bill.invoiceNumber ||
    bill.invoiceId ||
    bill.billNumber ||
    payload.invoiceNumber ||
    `IPD-INV-${Date.now()}`;

  const invoice = {
    invoiceId: invoiceNumber,
    invoiceNumber,
    invoiceDate: new Date().toISOString(),
    status: "generated",
    demoMode: true,
    patient: { ...patient },
    admission: {
      ...(payload.admission || {}),
      ...(patient.admission || {}),
    },
    bill: { ...bill },
    charges: charges.map((charge) => ({ ...charge })),
    summary: { ...summary },
    payment: payload.payment || null,
    payments: Array.isArray(payload.payments)
      ? payload.payments
      : payload.payment
        ? [payload.payment]
        : [],
  };

  return {
    success: true,
    demoMode: true,
    message: "Demo invoice generated successfully.",
    invoice,
  };
};

/* ---------------------------------------------------------
   Generate IPD invoice
--------------------------------------------------------- */

export const generateIPDInvoice = async (payload) => {
  const validationErrors = validateIPDInvoicePayload(payload);

  if (validationErrors.length > 0) {
    const error = new Error(validationErrors.join(" "));
    error.validationErrors = validationErrors;
    throw error;
  }

  // Local frontend demo: API URL is not needed.
  if (DEMO_INVOICE_MODE) {
    return generateDemoInvoice(payload);
  }

  // Real backend mode.
  if (!API_BASE_URL) {
    throw new Error(
      "API base URL is not configured. Set VITE_API_BASE_URL in your .env file."
    );
  }

  let response;

  try {
    response = await fetch(
      `${API_BASE_URL}${INVOICE_ENDPOINT}`,
      {
        method: "POST",
        headers: getRequestHeaders(),
        body: JSON.stringify(payload),
      }
    );
  } catch {
    throw new Error(
      "Unable to connect to the invoice server. Check your backend URL and server status."
    );
  }

  const result = await parseResponse(response);

  if (!response.ok) {
    throw createApiError(
      getErrorMessage(
        result,
        "Unable to generate the IPD invoice."
      ),
      response.status
    );
  }

  if (!result || typeof result !== "object") {
    throw new Error(
      "The invoice API did not return a valid JSON response."
    );
  }

  return result;
};

/* ---------------------------------------------------------
   Get existing invoice by ID
--------------------------------------------------------- */

export const getIPDInvoiceById = async (invoiceId) => {
  if (!invoiceId || !String(invoiceId).trim()) {
    throw new Error("Invoice ID is required.");
  }

  const normalizedId = String(invoiceId).trim();

  if (DEMO_INVOICE_MODE) {
    throw new Error(
      "Demo mode does not persist invoices. Generate the invoice again from Review & Confirm."
    );
  }

  if (!API_BASE_URL) {
    throw new Error(
      "API base URL is not configured. Set VITE_API_BASE_URL in your .env file."
    );
  }

  let response;

  try {
    response = await fetch(
      `${API_BASE_URL}${INVOICE_ENDPOINT}/${encodeURIComponent(normalizedId)}`,
      {
        method: "GET",
        headers: getRequestHeaders(),
      }
    );
  } catch {
    throw new Error(
      "Unable to connect to the invoice server."
    );
  }

  const result = await parseResponse(response);

  if (!response.ok) {
    throw createApiError(
      getErrorMessage(
        result,
        "Unable to fetch the IPD invoice."
      ),
      response.status
    );
  }

  if (!result || typeof result !== "object") {
    throw new Error(
      "The invoice API did not return a valid JSON response."
    );
  }

  return result;
};

/* ---------------------------------------------------------
   Default export
--------------------------------------------------------- */

const ipdInvoiceService = {
  generateIPDInvoice,
  getIPDInvoiceById,
  validateIPDInvoicePayload,
};

export default ipdInvoiceService;
