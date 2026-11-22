import generateInvoiceHTML
from "./generateInvoiceHTML";

export const printInvoice =
(
  patient
) => {

  const printWindow =
    window.open(
      "",
      "_blank"
    );

  printWindow.document.write(
    generateInvoiceHTML(
      patient
    )
  );

  printWindow.document.close();

  printWindow.focus();

  printWindow.print();

};

export const downloadInvoicePDF =
(
  patient
) => {

  const printWindow =
    window.open(
      "",
      "_blank"
    );

  printWindow.document.write(
    generateInvoiceHTML(
      patient
    )
  );

  printWindow.document.close();

  printWindow.focus();

  printWindow.print();

};