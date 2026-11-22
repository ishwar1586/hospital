
import React, { useMemo } from "react";
import {
  ArrowBackOutlined,
  AddOutlined,
  DownloadOutlined,
  LocalHospitalOutlined,
  PrintOutlined,
  CloseOutlined,
} from "@mui/icons-material";

import ipdInvoiceConfig from "@/master_modules/Billing&Invoice/components/IPDBilling/IPDInvoice/config/ipdInvoice.config.js";
import ipdInvoiceMock from "@/master_modules/Billing&Invoice/components/IPDBilling/IPDInvoice/mock/ipdInvoice.mock";
import "./IPDInvoice.css";

const firstValue = (...values) =>
  values.find(
    (value) =>
      value !== undefined &&
      value !== null &&
      value !== ""
  );

const asNumber = (value) => {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
};

const display = (value, fallback = "-") => {
  if (value === undefined || value === null || value === "") {
    return fallback;
  }

  if (typeof value === "object") {
    return (
      value.name ||
      value.label ||
      value.title ||
      value.value ||
      value.displayName ||
      fallback
    );
  }

  return String(value);
};

const formatMoney = (value, locale = "en-IN") =>
  asNumber(value).toLocaleString(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const formatDate = (value, locale = "en-IN") => {
  if (!value) return "-";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);

  return date.toLocaleDateString(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const IPDInvoice = ({
  billingData = null,
  patient = null,
  paymentData = null,
  config = ipdInvoiceConfig,
  mockData = ipdInvoiceMock,
  onClose,
  onNewBill,
  onPrint,
  onDownload,
}) => {
  const source = billingData || {};
  const hospital = {
    ...(mockData?.hospital || {}),
    ...(config?.hospital || {}),
    ...(source?.hospital || {}),
  };

  const invoice = useMemo(
    () => ({
      ...(mockData?.invoice || {}),
      ...(source?.invoice || {}),
      invoiceNumber: firstValue(
        source?.invoiceNumber,
        source?.invoice?.invoiceNumber,
        source?.invoice?.billNumber,
        source?.billNumber,
        source?.invoiceId,
        source?.id
      ),
      invoiceDate: firstValue(
        source?.invoiceDate,
        source?.invoice?.invoiceDate,
        source?.invoice?.billDate,
        source?.billDate,
        source?.createdAt
      ),
      status: firstValue(
        paymentData?.status,
        paymentData?.paymentStatus,
        source?.payment?.status,
        source?.paymentStatus,
        source?.status
      ),
    }),
    [source, mockData, paymentData]
  );

  const patientData = useMemo(
    () => ({
      ...(mockData?.patient || {}),
      ...(source?.patient || {}),
      ...(patient || {}),
    }),
    [mockData, source, patient]
  );

  const admission = useMemo(
    () => ({
      ...(source?.admission || {}),
      ...(source?.ipdDetails || {}),
      ...(patientData?.admission || {}),
    }),
    [source, patientData]
  );

  const charges = useMemo(() => {
    const list = firstValue(
      source?.charges,
      source?.chargeItems,
      source?.services,
      source?.items,
      source?.billItems,
      source?.invoice?.charges,
      mockData?.charges
    );

    return Array.isArray(list) ? list : [];
  }, [source, mockData]);

  const payments = useMemo(() => {
    const list = firstValue(
      source?.payments,
      source?.paymentHistory,
      source?.transactions,
      source?.invoice?.payments,
      mockData?.payments
    );

    return Array.isArray(list) ? list : [];
  }, [source, mockData]);

  const summary = useMemo(() => {
    const incoming = {
      ...(source?.summary || {}),
      ...(source?.billingSummary || {}),
      ...(source?.invoice?.summary || {}),
    };

    const subtotalFromCharges = charges.reduce(
      (total, item) => {
        const qty = asNumber(
          firstValue(item?.quantity, item?.qty, 1)
        );
        const rate = asNumber(
          firstValue(item?.rate, item?.unitPrice, item?.price, 0)
        );
        const amount = firstValue(
          item?.amount,
          item?.totalAmount,
          item?.netAmount
        );

        return total + (
          amount !== undefined
            ? asNumber(amount)
            : qty * rate
        );
      },
      0
    );

    const subtotal = asNumber(
      firstValue(
        incoming.subtotal,
        incoming.totalCharges,
        source?.subtotal,
        subtotalFromCharges
      )
    );

    const discount = asNumber(
      firstValue(incoming.discount, source?.discount, 0)
    );

    const tax = asNumber(
      firstValue(
        incoming.tax,
        incoming.gst,
        incoming.taxAmount,
        source?.tax,
        source?.gst,
        0
      )
    );

    const roundOff = asNumber(
      firstValue(incoming.roundOff, source?.roundOff, 0)
    );

    const advancePaid = asNumber(
      firstValue(
        incoming.advancePaid,
        source?.advancePaid,
        admission?.advancePaid,
        patientData?.advancePaid,
        0
      )
    );

    const previousPayments = asNumber(
      firstValue(
        incoming.previousPayments,
        incoming.paidAmount,
        source?.previousPayments,
        payments.reduce(
          (total, item) =>
            total + asNumber(
              firstValue(item?.amount, item?.paidAmount, 0)
            ),
          0
        )
      )
    );

    const total = asNumber(
      firstValue(
        incoming.grandTotal,
        incoming.totalAmount,
        incoming.netAmount,
        source?.grandTotal,
        source?.totalAmount,
        subtotal - discount + tax + roundOff
      )
    );

    const paid = asNumber(
      firstValue(
        incoming.totalPaid,
        source?.totalPaid,
        advancePaid + previousPayments
      )
    );

    const balance = Math.max(
      0,
      asNumber(
        firstValue(
          incoming.balanceDue,
          incoming.outstandingAmount,
          source?.balanceDue,
          source?.outstandingAmount,
          total - paid
        )
      )
    );

    return {
      subtotal,
      discount,
      tax,
      roundOff,
      advancePaid,
      previousPayments,
      total,
      paid,
      balance,
    };
  }, [source, charges, payments, admission, patientData]);

  const locale = config?.page?.locale || "en-IN";
  const currency = config?.page?.currency || "INR";

  const money = (value) =>
    `${currency === "INR" ? "₹" : ""}${formatMoney(value, locale)}`;

  const status = display(invoice.status, "Pending");

  const handlePrint = () => {
    onPrint?.({
      invoice,
      patient: patientData,
      admission,
      charges,
      payments,
      summary,
    });

    window.print();
  };

  const handleDownload = () => {
    onDownload?.({
      invoice,
      patient: patientData,
      admission,
      charges,
      payments,
      summary,
    });

    // Browser print dialog can save the invoice as PDF.
    window.print();
  };

  const patientName = display(
    firstValue(
      patientData.patientName,
      patientData.fullName,
      patientData.name,
      patientData.name?.fullName
    )
  );

  const ageGender = display(
    firstValue(
      patientData.ageGender,
      [
        patientData.age,
        patientData.gender,
      ].filter(Boolean).join(" / ")
    )
  );

  const statusClass = String(status).toLowerCase().includes("paid")
    ? "ipd-invoice__status--success"
    : String(status).toLowerCase().includes("partial")
      ? "ipd-invoice__status--partial"
      : "ipd-invoice__status--pending";

  return (
    <main className="ipd-invoice">
      <header className="ipd-invoice__toolbar">
        <div className="ipd-invoice__toolbar-title">
          <button
            type="button"
            className="ipd-invoice__icon-button"
            onClick={onClose}
            aria-label="Back to billing"
          >
            <ArrowBackOutlined />
          </button>

          <div>
            <strong>{config?.page?.title || "IPD Invoice"}</strong>
            <span>
              {display(invoice.invoiceNumber, "Invoice pending")}
            </span>
          </div>
        </div>

        <div className="ipd-invoice__toolbar-actions">
          <button type="button" onClick={onNewBill}>
            <AddOutlined fontSize="small" />
            {config?.actions?.newBill || "New Bill"}
          </button>

          <button type="button" onClick={handleDownload}>
            <DownloadOutlined fontSize="small" />
            {config?.actions?.download || "Download"}
          </button>

          <button
            type="button"
            className="ipd-invoice__primary-action"
            onClick={handlePrint}
          >
            <PrintOutlined fontSize="small" />
            {config?.actions?.print || "Print Invoice"}
          </button>

          <button
            type="button"
            className="ipd-invoice__icon-button"
            onClick={onClose}
            aria-label="Close invoice"
          >
            <CloseOutlined />
          </button>
        </div>
      </header>

      <article className="ipd-invoice__paper">
        <header className="ipd-invoice__hospital-header">
          <div className="ipd-invoice__hospital">
            {hospital.logo ? (
              <img src={hospital.logo} alt="Hospital logo" />
            ) : (
              <div className="ipd-invoice__logo">
                <LocalHospitalOutlined />
              </div>
            )}

            <div>
              <h1>{display(hospital.name, "Hospital Name")}</h1>
              {hospital.tagline && <p>{hospital.tagline}</p>}
              <span>{display(hospital.address)}</span>
              <span>
                {hospital.phone && `Phone: ${hospital.phone}`}
                {hospital.phone && hospital.email && " | "}
                {hospital.email}
              </span>
              {hospital.gstin && <span>GSTIN: {hospital.gstin}</span>}
            </div>
          </div>

          <div className="ipd-invoice__title">
            <h2>
              {config?.header?.invoiceTitle || "IPD FINAL INVOICE"}
            </h2>
            <p>
              {config?.header?.invoiceSubtitle || "Inpatient Billing Statement"}
            </p>
          </div>
        </header>

        <section className="ipd-invoice__meta">
          <div>
            <span>{config?.labels?.invoiceNumber || "Invoice No."}</span>
            <strong>{display(invoice.invoiceNumber)}</strong>
          </div>
          <div>
            <span>{config?.labels?.invoiceDate || "Invoice Date"}</span>
            <strong>{formatDate(invoice.invoiceDate, locale)}</strong>
          </div>
          <div>
            <span>{config?.labels?.paymentStatus || "Payment"}</span>
            <strong className={statusClass}>{status}</strong>
          </div>
        </section>

        <section className="ipd-invoice__details-grid">
          <div>
            <span>{config?.labels?.uhid || "UHID"}</span>
            <strong>{display(firstValue(patientData.uhid, patientData.UHID))}</strong>
          </div>
          <div>
            <span>{config?.labels?.doctor || "Consultant"}</span>
            <strong>{display(firstValue(admission.doctor, patientData.doctor, patientData.doctorName))}</strong>
          </div>
          <div>
            <span>{config?.labels?.patientName || "Patient Name"}</span>
            <strong>{patientName}</strong>
          </div>
          <div>
            <span>{config?.labels?.department || "Department"}</span>
            <strong>{display(firstValue(admission.department, patientData.department, patientData.departmentName))}</strong>
          </div>
          <div>
            <span>{config?.labels?.ageGender || "Age / Gender"}</span>
            <strong>{ageGender}</strong>
          </div>
          <div>
            <span>{config?.labels?.admissionNumber || "Admission No."}</span>
            <strong>{display(firstValue(admission.ipdNo, admission.admissionNo, patientData.ipdNo))}</strong>
          </div>
          <div>
            <span>{config?.labels?.mobile || "Mobile"}</span>
            <strong>{display(firstValue(patientData.mobile, patientData.phone, patientData.mobileNumber))}</strong>
          </div>
          <div>
            <span>{config?.labels?.ward || "Ward"}</span>
            <strong>{display(firstValue(admission.ward, admission.wardName, patientData.ward))}</strong>
          </div>
          <div>
            <span>{config?.labels?.address || "Address"}</span>
            <strong>{display(patientData.address)}</strong>
          </div>
          <div>
            <span>{config?.labels?.room || "Room / Bed"}</span>
            <strong>
              {[
                firstValue(admission.room, admission.roomNo, patientData.room),
                firstValue(admission.bed, admission.bedNo, patientData.bed),
              ].filter(Boolean).map(display).join(" / ") || "-"}
            </strong>
          </div>
          <div>
            <span>{config?.labels?.admissionDate || "Admission Date"}</span>
            <strong>
              {formatDate(
                firstValue(admission.admissionDate, patientData.admissionDate),
                locale
              )}
            </strong>
          </div>
          <div>
            <span>{config?.labels?.dischargeDate || "Discharge Date"}</span>
            <strong>
              {formatDate(
                firstValue(admission.dischargeDate, patientData.dischargeDate),
                locale
              )}
            </strong>
          </div>
          <div>
            <span>{config?.labels?.payer || "Payer Type"}</span>
            <strong>{display(firstValue(admission.payerType, source.payerType, patientData.payerType))}</strong>
          </div>
        </section>

        <section className="ipd-invoice__charges">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>{config?.labels?.description || "Description"}</th>
                <th>{config?.labels?.category || "Category"}</th>
                <th>{config?.labels?.quantity || "Qty"}</th>
                <th>{config?.labels?.rate || "Rate (₹)"}</th>
                <th>{config?.labels?.amount || "Amount (₹)"}</th>
              </tr>
            </thead>
            <tbody>
              {charges.length ? (
                charges.map((charge, index) => {
                  const quantity = asNumber(
                    firstValue(charge.quantity, charge.qty, 1)
                  );
                  const rate = asNumber(
                    firstValue(charge.rate, charge.unitPrice, charge.price, 0)
                  );
                  const amount = asNumber(
                    firstValue(
                      charge.amount,
                      charge.totalAmount,
                      charge.netAmount,
                      quantity * rate
                    )
                  );

                  return (
                    <tr key={charge.id || charge.chargeId || index}>
                      <td>{index + 1}</td>
                      <td>
                        <strong>
                          {display(firstValue(
                            charge.description,
                            charge.chargeName,
                            charge.serviceName,
                            charge.name,
                            charge.particulars
                          ))}
                        </strong>
                      </td>
                      <td>{display(firstValue(charge.category, charge.department, charge.type))}</td>
                      <td>{quantity}</td>
                      <td>{formatMoney(rate, locale)}</td>
                      <td className="ipd-invoice__amount">
                        {formatMoney(amount, locale)}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={6} className="ipd-invoice__empty">
                    No charge details were supplied for this invoice.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>

        <section className="ipd-invoice__bottom">
          <div className="ipd-invoice__payments">
            <h3>Payment History</h3>
            {payments.length ? (
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Method</th>
                    <th>Reference</th>
                    <th>Amount (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((payment, index) => (
                    <tr key={payment.paymentId || payment.id || index}>
                      <td>{formatDate(payment.createdAt || payment.date, locale)}</td>
                      <td>{display(payment.method || payment.paymentMethod)}</td>
                      <td>{display(payment.transactionReference || payment.reference)}</td>
                      <td className="ipd-invoice__amount">
                        {formatMoney(firstValue(payment.amount, payment.paidAmount, 0), locale)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="ipd-invoice__muted">
                No separate payment transaction history supplied.
              </p>
            )}
          </div>

          <div className="ipd-invoice__totals">
            <div>
              <span>{config?.summary?.subtotal || "Subtotal"}</span>
              <strong>{money(summary.subtotal)}</strong>
            </div>
            <div>
              <span>{config?.summary?.discount || "Discount"}</span>
              <strong>{money(summary.discount)}</strong>
            </div>
            <div>
              <span>{config?.summary?.tax || "GST / Tax"}</span>
              <strong>{money(summary.tax)}</strong>
            </div>
            <div>
              <span>{config?.summary?.roundOff || "Round Off"}</span>
              <strong>{money(summary.roundOff)}</strong>
            </div>
            <div className="ipd-invoice__total-row">
              <span>{config?.summary?.total || "Total Amount"}</span>
              <strong>{money(summary.total)}</strong>
            </div>
            <div>
              <span>{config?.summary?.advance || "Advance Paid"}</span>
              <strong>{money(summary.advancePaid)}</strong>
            </div>
            <div>
              <span>{config?.summary?.previousPayments || "Previous Payments"}</span>
              <strong>{money(summary.previousPayments)}</strong>
            </div>
            <div>
              <span>{config?.summary?.paid || "Total Paid"}</span>
              <strong>{money(summary.paid)}</strong>
            </div>
            <div className="ipd-invoice__balance-row">
              <span>{config?.summary?.balance || "Balance Due"}</span>
              <strong>{money(summary.balance)}</strong>
            </div>
          </div>
        </section>

        <footer className="ipd-invoice__footer">
          <div>
            <strong>
              {config?.footer?.thankYou || "Thank you for choosing our hospital."}
            </strong>
            <p>
              {config?.footer?.note || "Please retain this invoice for your records."}
            </p>
          </div>
          <div className="ipd-invoice__signature">
            <span />
            <strong>
              {config?.footer?.signatureLabel || "Authorized Signatory"}
            </strong>
          </div>
        </footer>
      </article>
    </main>
  );
};

export default IPDInvoice;
