/* ==========================================================
   Invoice Number Generator
========================================================== */

const padSequence = (sequence) => {

    return String(sequence).padStart(6, "0");

};

const getToday = () => {

    const today = new Date();

    const year = today.getFullYear();

    const month = String(
        today.getMonth() + 1
    ).padStart(2, "0");

    const date = String(
        today.getDate()
    ).padStart(2, "0");

    return `${year}${month}${date}`;

};

const getSequence = () => {

    const key = "pharmacy_invoice_sequence";

    const stored = localStorage.getItem(key);

    const sequence = stored
        ? Number(stored) + 1
        : 1;

    localStorage.setItem(key, sequence);

    return sequence;

};

const generateInvoiceNumber = () => {

    const today = getToday();

    const sequence = getSequence();

    return `PHR-${today}-${padSequence(sequence)}`;

};

export default generateInvoiceNumber;