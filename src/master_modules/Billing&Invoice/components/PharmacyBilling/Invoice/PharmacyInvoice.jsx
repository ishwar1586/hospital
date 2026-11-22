// src/master_modules/Billing&Invoice/components/PharmacyBilling/Invoice/PharmacyInvoice.jsx

import React, {
  useCallback,
  useMemo,
} from "react";

import {
  CloseOutlined,
  LocalHospitalOutlined,
  PrintOutlined,
  DownloadOutlined,
  AddOutlined,
} from "@mui/icons-material";

import pharmacyInvoiceConfig from "@/master_modules/Billing&Invoice/config/pharmacyInvoice.config";
import pharmacyInvoiceMock from "@/master_modules/Billing&Invoice/mock/pharmacyInvoice.mock";
import selfStaffPurchaseConfig from "@/master_modules/Billing&Invoice/config/selfStaffPurchase.config";

import "./PharmacyInvoice.css";

const PharmacyInvoice = ({
  patient = null,
  customer = null,
  customerType = "registered-patient",
  billingData = null,
  paymentData = null,

  config = pharmacyInvoiceConfig,
  mockData = pharmacyInvoiceMock,

  onPrint,
  onDownload,
  onNewBill,
  onClose,
}) => {
  // =========================================================
  // CONFIG
  // =========================================================

  const invoiceConfig = config || {};
  const invoiceMock = mockData || {};

  const pageConfig =
    invoiceConfig?.page || {};

  const headerConfig =
    invoiceConfig?.header || {};

  const hospitalConfig =
    headerConfig?.hospital || {};

  const invoiceHeaderConfig =
    headerConfig?.invoice || {};

  const patientConfig =
    invoiceConfig?.patient || {};

  const medicinesConfig =
    invoiceConfig?.medicines || {};

  const summaryConfig =
    invoiceConfig?.summary || {};

  const paymentConfig =
    invoiceConfig?.payment || {};

  const footerConfig =
    invoiceConfig?.footer || {};

  const printConfig =
    invoiceConfig?.print || {};

  // =========================================================
  // STAFF CONFIG
  // =========================================================

  const staffConfig =
    selfStaffPurchaseConfig || {};

  const staffDetailsConfig =
    staffConfig?.staffDetails || {};

  const staffFields = Array.isArray(
    staffDetailsConfig?.fields
  )
    ? staffDetailsConfig.fields
    : [];

  // =========================================================
  // SAFE DISPLAY VALUE
  // =========================================================

  const safeDisplayValue = useCallback(
    (value, fallback = "-") => {
      if (
        value === undefined ||
        value === null ||
        value === ""
      ) {
        return fallback;
      }

      if (
        typeof value === "string" ||
        typeof value === "number"
      ) {
        return String(value);
      }

      if (typeof value === "boolean") {
        return value ? "Yes" : "No";
      }

      if (
        typeof value === "object"
      ) {
        return (
          value?.name ??
          value?.label ??
          value?.title ??
          value?.value ??
          value?.displayName ??
          value?.doctorName ??
          value?.departmentName ??
          value?.medicineName ??
          value?.text ??
          fallback
        );
      }

      return fallback;
    },
    []
  );

  // =========================================================
  // SOURCE DATA
  // =========================================================

  const sourceData =
    billingData || {};

  // =========================================================
  // CUSTOMER TYPE
  // =========================================================

  const normalizedCustomerType = String(
    customerType ||
      sourceData?.customerType ||
      "registered-patient"
  )
    .trim()
    .toLowerCase();

  const isWalkInCustomer =
    normalizedCustomerType ===
    "walk-in-customer";

  const isSelfStaffPurchase =
    normalizedCustomerType ===
    "self-staff-purchase";

  const isRegisteredPatient =
    !isWalkInCustomer &&
    !isSelfStaffPurchase;

  // =========================================================
  // PERSON DATA
  //
  // Registered Patient
  // Walk-in Customer
  // Self / Staff Purchase
  // =========================================================

  const patientData = useMemo(() => {
    // -------------------------------------------------------
    // REGISTERED PATIENT
    // -------------------------------------------------------

    const registeredPatient = {
      ...(invoiceMock?.patient || {}),
      ...(sourceData?.patient || {}),
      ...(patient || {}),
    };

    // -------------------------------------------------------
    // WALK-IN CUSTOMER
    // -------------------------------------------------------

    const walkInCustomer = {
      ...(sourceData?.walkInCustomer || {}),
      ...(sourceData?.customer || {}),
      ...(customer || {}),
    };

    // -------------------------------------------------------
    // STAFF
    // -------------------------------------------------------

    const selectedStaff = {
      ...(invoiceMock?.staff || {}),
      ...(sourceData?.staff || {}),
      ...(sourceData?.selectedStaff || {}),
      ...(patient || {}),
    };

    // -------------------------------------------------------
    // WALK-IN
    // -------------------------------------------------------

    if (isWalkInCustomer) {
      return {
        ...walkInCustomer,

        patientName:
          walkInCustomer?.customerName ||
          walkInCustomer?.patientName ||
          walkInCustomer?.name ||
          "-",

        customerName:
          walkInCustomer?.customerName ||
          walkInCustomer?.patientName ||
          walkInCustomer?.name ||
          "-",

        uhid:
          walkInCustomer?.uhid ||
          walkInCustomer?.UHID ||
          "-",

        ageGender:
          walkInCustomer?.ageGender ||
          [
            walkInCustomer?.age,
            walkInCustomer?.gender,
          ]
            .filter(Boolean)
            .join(" / ") ||
          "-",

        mobile:
          walkInCustomer?.mobile ||
          walkInCustomer?.phone ||
          "-",

        address:
          walkInCustomer?.address ||
          walkInCustomer?.customerAddress ||
          "-",
      };
    }

    // -------------------------------------------------------
    // SELF / STAFF PURCHASE
    // -------------------------------------------------------

    if (isSelfStaffPurchase) {
      return {
        ...selectedStaff,

        employeeId:
          selectedStaff?.employeeId ||
          selectedStaff?.empId ||
          "-",

        staffName:
          selectedStaff?.staffName ||
          selectedStaff?.name ||
          selectedStaff?.patientName ||
          "-",

        department:
          selectedStaff?.department ||
          selectedStaff?.departmentName ||
          "-",

        designation:
          selectedStaff?.designation ||
          "-",

        mobile:
          selectedStaff?.mobile ||
          selectedStaff?.phone ||
          "-",

        status:
          selectedStaff?.status ||
          "-",

        address:
          selectedStaff?.address ||
          "-",
      };
    }

    // -------------------------------------------------------
    // REGISTERED PATIENT
    // -------------------------------------------------------

    return registeredPatient;
  }, [
    invoiceMock,
    sourceData,
    patient,
    customer,
    isWalkInCustomer,
    isSelfStaffPurchase,
  ]);

  // =========================================================
  // BILL DATA
  // =========================================================

  const billData = useMemo(() => {
    const mockBill =
      invoiceMock?.bill || {};

    const sourceBill =
      sourceData?.bill || {};

    return {
      ...mockBill,

      ...sourceBill,

      billNumber:
        sourceBill?.billNumber ||
        sourceData?.billNumber ||
        mockBill?.billNumber ||
        "Auto Generated",

      billDate:
        sourceBill?.billDate ||
        sourceData?.billDate ||
        mockBill?.billDate ||
        "-",

      prescriptionNumber:
        sourceBill?.prescriptionNumber ||
        sourceData?.prescriptionNumber ||
        mockBill?.prescriptionNumber ||
        "-",

      doctor:
        sourceBill?.doctor ||
        sourceData?.doctor ||
        mockBill?.doctor ||
        patientData?.doctor ||
        patientData?.doctorName ||
        "-",

      department:
        sourceBill?.department ||
        sourceData?.department ||
        mockBill?.department ||
        patientData?.department ||
        patientData?.departmentName ||
        "-",

      visitType:
        sourceBill?.visitType ||
        sourceData?.visitType ||
        mockBill?.visitType ||
        "Consultation",
    };
  }, [
    invoiceMock,
    sourceData,
    patientData,
  ]);

  // =========================================================
  // MEDICINES
  // =========================================================

  const medicines = useMemo(() => {
    if (
      Array.isArray(
        sourceData?.medicines
      )
    ) {
      return sourceData.medicines;
    }

    if (
      Array.isArray(
        sourceData?.selectedMedicines
      )
    ) {
      return sourceData.selectedMedicines;
    }

    if (
      Array.isArray(
        sourceData?.items
      )
    ) {
      return sourceData.items;
    }

    if (
      Array.isArray(
        invoiceMock?.medicines
      )
    ) {
      return invoiceMock.medicines;
    }

    return [];
  }, [
    sourceData,
    invoiceMock,
  ]);

  // =========================================================
  // NUMBER HELPER
  // =========================================================

  const toNumber = useCallback(
    (value) => {
      const number =
        Number(value);

      return Number.isFinite(number)
        ? number
        : 0;
    },
    []
  );

  // =========================================================
  // MEDICINE QUANTITY
  // =========================================================

  const getMedicineQuantity =
    useCallback(
      (medicine) => {
        return toNumber(
          medicine?.quantity ??
          medicine?.qty ??
          0
        );
      },
      [toNumber]
    );

  // =========================================================
  // MEDICINE RATE
  // =========================================================

  const getMedicineRate =
    useCallback(
      (medicine) => {
        return toNumber(
          medicine?.sellingPrice ??
          medicine?.rate ??
          medicine?.price ??
          medicine?.unitPrice ??
          0
        );
      },
      [toNumber]
    );

  // =========================================================
  // MEDICINE AMOUNT
  // =========================================================

  const getMedicineAmount =
    useCallback(
      (medicine) => {
        if (
          medicine?.amount !==
            undefined &&
          medicine?.amount !==
            null &&
          medicine?.amount !== ""
        ) {
          return toNumber(
            medicine.amount
          );
        }

        return (
          getMedicineQuantity(
            medicine
          ) *
          getMedicineRate(
            medicine
          )
        );
      },
      [
        getMedicineQuantity,
        getMedicineRate,
        toNumber,
      ]
    );

  // =========================================================
  // SUMMARY
  // =========================================================

  const summary = useMemo(() => {
    const sourceSummary =
      sourceData?.summary ||
      sourceData?.billingSummary ||
      {};

    const mockSummary =
      invoiceMock?.summary ||
      {};

    const subtotal =
      toNumber(
        sourceSummary?.subtotal ??
          sourceData?.subtotal ??
          mockSummary?.subtotal ??
          medicines.reduce(
            (total, medicine) =>
              total +
              getMedicineAmount(
                medicine
              ),
            0
          )
      );

    const discount =
      toNumber(
        sourceSummary?.discount ??
          sourceData?.discount ??
          mockSummary?.discount ??
          0
      );

    const taxableAmount =
      toNumber(
        sourceSummary?.taxableAmount ??
          sourceData?.taxableAmount ??
          subtotal - discount
      );

    const tax =
      toNumber(
        sourceSummary?.tax ??
          sourceSummary?.gst ??
          sourceData?.tax ??
          sourceData?.gst ??
          mockSummary?.tax ??
          0
      );

    const roundOff =
      toNumber(
        sourceSummary?.roundOff ??
          sourceData?.roundOff ??
          mockSummary?.roundOff ??
          0
      );

    const grandTotal =
      toNumber(
        sourceSummary?.grandTotal ??
          sourceSummary?.total ??
          sourceData?.grandTotal ??
          sourceData?.total ??
          mockSummary?.grandTotal ??
          taxableAmount +
            tax +
            roundOff
      );

    return {
      subtotal,
      discount,
      taxableAmount,
      tax,
      roundOff,
      grandTotal,
    };
  }, [
    sourceData,
    invoiceMock,
    medicines,
    toNumber,
    getMedicineAmount,
  ]);

  // =========================================================
  // PAYMENT
  // =========================================================

  const payment = useMemo(() => {
    const externalPayment =
      paymentData || {};

    const nestedPayment =
      externalPayment?.paymentData ||
      {};

    const billingPayment =
      sourceData?.payment ||
      {};

    const mockPayment =
      invoiceMock?.payment ||
      {};

    const rawMethod =
      externalPayment?.paymentMethod ??
      externalPayment?.method ??
      nestedPayment?.method ??
      nestedPayment?.paymentMethod ??
      billingPayment?.method ??
      billingPayment?.paymentMethod ??
      mockPayment?.method ??
      "cash";

    const method =
      typeof rawMethod === "object"
        ? (
            rawMethod?.value ||
            rawMethod?.id ||
            rawMethod?.name ||
            "cash"
          )
        : String(rawMethod);

    return {
      ...mockPayment,
      ...billingPayment,
      ...nestedPayment,

      method,

      paymentMethod:
        method,

      amountReceived:
        externalPayment?.amountReceived ??
        nestedPayment?.amountReceived ??
        billingPayment?.amountReceived ??
        mockPayment?.amountReceived ??
        "",

      transactionId:
        externalPayment?.transactionId ??
        nestedPayment?.transactionId ??
        billingPayment?.transactionId ??
        mockPayment?.transactionId ??
        "",

      cardType:
        externalPayment?.cardType ??
        nestedPayment?.cardType ??
        billingPayment?.cardType ??
        mockPayment?.cardType ??
        "",

      lastFourDigits:
        externalPayment?.lastFourDigits ??
        nestedPayment?.lastFourDigits ??
        billingPayment?.lastFourDigits ??
        mockPayment?.lastFourDigits ??
        "",

      bankName:
        externalPayment?.bankName ??
        nestedPayment?.bankName ??
        billingPayment?.bankName ??
        mockPayment?.bankName ??
        "",

      changeAmount:
        externalPayment?.changeAmount ??
        nestedPayment?.changeAmount ??
        billingPayment?.changeAmount ??
        mockPayment?.changeAmount ??
        "",

      status:
        externalPayment?.status ||
        nestedPayment?.status ||
        billingPayment?.status ||
        mockPayment?.status ||
        "paid",
    };
  }, [
    paymentData,
    sourceData,
    invoiceMock,
  ]);

  // =========================================================
  // CURRENCY
  // =========================================================

  const currency =
    invoiceConfig?.billing
      ?.currencySymbol ||
    "₹";

  // =========================================================
  // FORMAT AMOUNT
  // =========================================================

  const formatAmount =
    useCallback(
      (value) => {
        return `${currency}${toNumber(
          value
        ).toFixed(2)}`;
      },
      [
        currency,
        toNumber,
      ]
    );

  // =========================================================
  // NUMBER TO WORDS
  // =========================================================

  const numberToWords =
    useCallback(
      (number) => {
        const ones = [
          "",
          "One",
          "Two",
          "Three",
          "Four",
          "Five",
          "Six",
          "Seven",
          "Eight",
          "Nine",
          "Ten",
          "Eleven",
          "Twelve",
          "Thirteen",
          "Fourteen",
          "Fifteen",
          "Sixteen",
          "Seventeen",
          "Eighteen",
          "Nineteen",
        ];

        const tens = [
          "",
          "",
          "Twenty",
          "Thirty",
          "Forty",
          "Fifty",
          "Sixty",
          "Seventy",
          "Eighty",
          "Ninety",
        ];

        const convert = (value) => {
          if (value < 20) {
            return ones[value];
          }

          if (value < 100) {
            return (
              tens[
                Math.floor(
                  value / 10
                )
              ] +
              (
                value % 10
                  ? ` ${
                      ones[
                        value % 10
                      ]
                    }`
                  : ""
              )
            );
          }

          if (value < 1000) {
            return (
              `${
                ones[
                  Math.floor(
                    value / 100
                  )
                ]
              } Hundred` +
              (
                value % 100
                  ? ` ${convert(
                      value % 100
                    )}`
                  : ""
              )
            );
          }

          if (value < 100000) {
            return (
              `${convert(
                Math.floor(
                  value / 1000
                )
              )} Thousand` +
              (
                value % 1000
                  ? ` ${convert(
                      value % 1000
                    )}`
                  : ""
              )
            );
          }

          if (value < 10000000) {
            return (
              `${convert(
                Math.floor(
                  value / 100000
                )
              )} Lakh` +
              (
                value % 100000
                  ? ` ${convert(
                      value % 100000
                    )}`
                  : ""
              )
            );
          }

          return (
            `${convert(
              Math.floor(
                value / 10000000
              )
            )} Crore` +
            (
              value % 10000000
                ? ` ${convert(
                    value % 10000000
                  )}`
                : ""
            )
          );
        };

        const amount =
          Math.floor(
            toNumber(number)
          );

        const paise =
          Math.round(
            (
              toNumber(number) -
              amount
            ) * 100
          );

        let result =
          amount === 0
            ? "Zero"
            : convert(amount);

        result += " Rupees";

        if (paise > 0) {
          result +=
            ` and ${convert(
              paise
            )} Paisa`;
        }

        return `${result} Only`;
      },
      [toNumber]
    );

  // =========================================================
  // INVOICE DATA
  //
  // IMPORTANT:
  // Staff is preserved separately.
  // Patient is null for staff purchase.
  // =========================================================

  const invoiceData = useMemo(() => {
    return {
      customerType:
        normalizedCustomerType,

      patient:
        isRegisteredPatient
          ? patientData
          : null,

      customer:
        isWalkInCustomer
          ? patientData
          : null,

      walkInCustomer:
        isWalkInCustomer
          ? patientData
          : null,

      staff:
        isSelfStaffPurchase
          ? patientData
          : null,

      staffDetails:
        isSelfStaffPurchase
          ? patientData
          : null,

      bill:
        billData,

      medicines,

      summary,

      payment,
    };
  }, [
    normalizedCustomerType,
    isRegisteredPatient,
    isWalkInCustomer,
    isSelfStaffPurchase,
    patientData,
    billData,
    medicines,
    summary,
    payment,
  ]);

  // =========================================================
  // PRINT
  // =========================================================

  const handlePrint =
    useCallback(() => {
      if (
        typeof onPrint ===
        "function"
      ) {
        onPrint(
          invoiceData
        );
      }

      setTimeout(() => {
        window.print();
      }, 150);
    }, [
      onPrint,
      invoiceData,
    ]);

  // =========================================================
  // DOWNLOAD
  // =========================================================

  const handleDownload =
    useCallback(() => {
      if (
        typeof onDownload ===
        "function"
      ) {
        onDownload(
          invoiceData
        );
      }
    }, [
      onDownload,
      invoiceData,
    ]);

  // =========================================================
  // CLOSE
  // =========================================================

  const handleClose =
    useCallback(() => {
      if (
        typeof onClose ===
        "function"
      ) {
        onClose();
      }
    }, [onClose]);

  // =========================================================
  // NEW BILL
  // =========================================================

  const handleNewBill =
    useCallback(() => {
      if (
        typeof onNewBill ===
        "function"
      ) {
        onNewBill();
      }
    }, [onNewBill]);

  // =========================================================
  // STATIC / DISPLAY DATA
  // =========================================================

  const HospitalIcon =
    LocalHospitalOutlined;

  const hospitalName =
    safeDisplayValue(
      hospitalConfig?.name,
      "MediCare+"
    );

  const hospitalTagline =
    safeDisplayValue(
      hospitalConfig?.tagline,
      "Advanced Healthcare & Pharmacy Services"
    );

  const hospitalAddress =
    safeDisplayValue(
      hospitalConfig?.address,
      "-"
    );

  const hospitalPhone =
    safeDisplayValue(
      hospitalConfig?.phone,
      "-"
    );

  const hospitalEmail =
    safeDisplayValue(
      hospitalConfig?.email,
      "-"
    );

  const hospitalGstin =
    safeDisplayValue(
      hospitalConfig?.gstin,
      "-"
    );

  const invoiceTitle =
    safeDisplayValue(
      invoiceHeaderConfig?.title,
      "PHARMACY INVOICE"
    );

  const invoiceSubtitle =
    safeDisplayValue(
      invoiceHeaderConfig?.subtitle,
      ""
    );

  const doctor =
    safeDisplayValue(
      billData?.doctor,
      "-"
    );

  const department =
    safeDisplayValue(
      billData?.department ||
        (
          isSelfStaffPurchase
            ? patientData?.department
            : ""
        ),
      "-"
    );

  const visitType =
    safeDisplayValue(
      billData?.visitType,
      "Consultation"
    );

  const paymentMethod =
    safeDisplayValue(
      payment?.method,
      "-"
    );

  // =========================================================
  // STAFF DISPLAY HELPERS
  // =========================================================

  const staffName =
    safeDisplayValue(
      patientData?.staffName ||
        patientData?.name,
      "-"
    );

  const employeeId =
    safeDisplayValue(
      patientData?.employeeId ||
        patientData?.empId,
      "-"
    );

  const staffDepartment =
    safeDisplayValue(
      patientData?.department ||
        patientData?.departmentName,
      "-"
    );

  const staffDesignation =
    safeDisplayValue(
      patientData?.designation,
      "-"
    );

  const staffMobile =
    safeDisplayValue(
      patientData?.mobile ||
        patientData?.phone,
      "-"
    );

  const staffStatus =
    safeDisplayValue(
      patientData?.status,
      "-"
    );

  // =========================================================
  // PAGE
  // =========================================================

  if (
    pageConfig?.enabled === false
  ) {
    return null;
  }

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <main className="pharmacy-invoice">

      {/* =====================================================
          TOOLBAR
      ====================================================== */}

      <div className="pharmacy-invoice__toolbar">

        <div className="pharmacy-invoice__toolbar-title">

          <strong>
            {safeDisplayValue(
              pageConfig?.title,
              "Pharmacy Invoice"
            )}
          </strong>

          <span>
            {safeDisplayValue(
              billData?.billNumber,
              "-"
            )}
          </span>

        </div>

        <div className="pharmacy-invoice__toolbar-actions">

          <button
            type="button"
            className="
              pharmacy-invoice__toolbar-button
              pharmacy-invoice__toolbar-button--secondary
            "
            onClick={
              handleNewBill
            }
          >
            <AddOutlined />

            <span>
              New Bill
            </span>
          </button>

          <button
            type="button"
            className="
              pharmacy-invoice__toolbar-button
              pharmacy-invoice__toolbar-button--secondary
            "
            onClick={
              handleDownload
            }
          >
            <DownloadOutlined />

            <span>
              Download
            </span>
          </button>

          <button
            type="button"
            className="
              pharmacy-invoice__toolbar-button
              pharmacy-invoice__toolbar-button--primary
            "
            onClick={
              handlePrint
            }
          >
            <PrintOutlined />

            <span>
              Print Invoice
            </span>
          </button>

          <button
            type="button"
            className="
              pharmacy-invoice__toolbar-close
            "
            onClick={
              handleClose
            }
            aria-label="Close invoice"
          >
            <CloseOutlined />
          </button>

        </div>
      </div>

      {/* =====================================================
          INVOICE PAPER
      ====================================================== */}

      <section className="pharmacy-invoice__paper">

        {/* ===================================================
            HEADER
        ==================================================== */}

        <header className="pharmacy-invoice__header">

          <div className="pharmacy-invoice__hospital">

            <div
              className="
                pharmacy-invoice__hospital-logo
                pharmacy-invoice__hospital-logo--fallback
              "
            >
              <HospitalIcon />
            </div>

            <div
              className="
                pharmacy-invoice__hospital-content
              "
            >

              <h1>
                {hospitalName}
              </h1>

              <h2>
                {hospitalTagline}
              </h2>

              <p>
                {hospitalAddress}
              </p>

              <p>
                Ph: {hospitalPhone}
              </p>

              <p>
                {hospitalEmail}
              </p>

              <p>
                GSTIN: {hospitalGstin}
              </p>

            </div>
          </div>

          <div
            className="
              pharmacy-invoice__header-center
            "
          >

            <h2>
              {invoiceTitle}
            </h2>

            {invoiceSubtitle && (
              <span>
                {invoiceSubtitle}
              </span>
            )}

          </div>

          <div
            className="
              pharmacy-invoice__qr
            "
          >

            {headerConfig?.qrCode ? (
              <img
                src={
                  headerConfig.qrCode
                }
                alt="Invoice QR"
              />
            ) : (
              <div
                className="
                  pharmacy-invoice__qr-placeholder
                "
              >
                QR
              </div>
            )}

          </div>

        </header>

        {/* ===================================================
            BILL META
        ==================================================== */}

        <div
          className="
            pharmacy-invoice__bill-meta
          "
        >

          <div>
            <span>
              {safeDisplayValue(
                invoiceHeaderConfig?.billNumberLabel,
                "Bill No."
              )}
            </span>

            <strong>
              {safeDisplayValue(
                billData?.billNumber,
                "-"
              )}
            </strong>
          </div>

          <div>
            <span>
              {safeDisplayValue(
                invoiceHeaderConfig?.billDateLabel,
                "Date"
              )}
            </span>

            <strong>
              {safeDisplayValue(
                billData?.billDate,
                "-"
              )}
            </strong>
          </div>

          <div>
            <span>
              {safeDisplayValue(
                invoiceHeaderConfig?.prescriptionLabel,
                "Prescription No."
              )}
            </span>

            <strong>
              {isRegisteredPatient
                ? safeDisplayValue(
                    billData?.prescriptionNumber,
                    "-"
                  )
                : "-"}
            </strong>
          </div>

          <div>
            <span>
              Payment
            </span>

            <strong
              className="
                pharmacy-invoice__paid
              "
            >
              {payment?.status ===
              "paid"
                ? "PAID"
                : safeDisplayValue(
                    payment?.status,
                    "PAID"
                  ).toUpperCase()}
            </strong>
          </div>

        </div>

        {/* ===================================================
            CUSTOMER / STAFF / PATIENT DETAILS
        ==================================================== */}

        <section
          className="
            pharmacy-invoice__details
          "
        >

          {/* =================================================
              LEFT COLUMN
          ================================================== */}

          <div
            className="
              pharmacy-invoice__details-column
            "
          >

            {/* ===============================================
                REGISTERED PATIENT
            ================================================ */}

            {isRegisteredPatient && (
              <div
                className="
                  pharmacy-invoice__detail-row
                "
              >
                <span>
                  UHID
                </span>

                <strong>
                  {safeDisplayValue(
                    patientData?.uhid ||
                      patientData?.UHID,
                    "-"
                  )}
                </strong>
              </div>
            )}

            {/* ===============================================
                STAFF
            ================================================ */}

            {isSelfStaffPurchase ? (
              <>
                <div
                  className="
                    pharmacy-invoice__detail-row
                  "
                >
                  <span>
                    Employee ID
                  </span>

                  <strong>
                    {employeeId}
                  </strong>
                </div>

                <div
                  className="
                    pharmacy-invoice__detail-row
                  "
                >
                  <span>
                    Staff Name
                  </span>

                  <strong>
                    {staffName}
                  </strong>
                </div>

                <div
                  className="
                    pharmacy-invoice__detail-row
                  "
                >
                  <span>
                    Department
                  </span>

                  <strong>
                    {staffDepartment}
                  </strong>
                </div>

                <div
                  className="
                    pharmacy-invoice__detail-row
                  "
                >
                  <span>
                    Designation
                  </span>

                  <strong>
                    {staffDesignation}
                  </strong>
                </div>

                <div
                  className="
                    pharmacy-invoice__detail-row
                  "
                >
                  <span>
                    Mobile
                  </span>

                  <strong>
                    {staffMobile}
                  </strong>
                </div>

                {staffStatus !== "-" && (
                  <div
                    className="
                      pharmacy-invoice__detail-row
                    "
                  >
                    <span>
                      Status
                    </span>

                    <strong>
                      {staffStatus}
                    </strong>
                  </div>
                )}
              </>
            ) : (
              <>
                {/* =========================================
                    REGISTERED / WALK-IN NAME
                ========================================== */}

                <div
                  className="
                    pharmacy-invoice__detail-row
                  "
                >
                  <span>
                    {isWalkInCustomer
                      ? "Customer Name"
                      : "Patient Name"}
                  </span>

                  <strong>
                    {safeDisplayValue(
                      patientData?.patientName ||
                        patientData?.customerName ||
                        patientData?.name,
                      "-"
                    )}
                  </strong>
                </div>

                {/* =========================================
                    AGE / GENDER
                ========================================== */}

                <div
                  className="
                    pharmacy-invoice__detail-row
                  "
                >
                  <span>
                    Age / Gender
                  </span>

                  <strong>
                    {safeDisplayValue(
                      patientData?.ageGender ||
                        (
                          patientData?.age !==
                          undefined
                            ? `${patientData.age} Y / ${safeDisplayValue(
                                patientData?.gender,
                                "-"
                              )}`
                            : "-"
                        ),
                      "-"
                    )}
                  </strong>
                </div>

                {/* =========================================
                    MOBILE
                ========================================== */}

                <div
                  className="
                    pharmacy-invoice__detail-row
                  "
                >
                  <span>
                    Mobile
                  </span>

                  <strong>
                    {safeDisplayValue(
                      patientData?.mobile ||
                        patientData?.phone,
                      "-"
                    )}
                  </strong>
                </div>

                {/* =========================================
                    ADDRESS
                ========================================== */}

                <div
                  className="
                    pharmacy-invoice__detail-row
                  "
                >
                  <span>
                    Address
                  </span>

                  <strong>
                    {safeDisplayValue(
                      patientData?.address ||
                        patientData?.patientAddress,
                      "-"
                    )}
                  </strong>
                </div>
              </>
            )}

          </div>

          {/* =================================================
              RIGHT COLUMN
          ================================================== */}

          <div
            className="
              pharmacy-invoice__details-column
            "
          >

            {/* ===============================================
                DOCTOR
            ================================================ */}

            {!isSelfStaffPurchase && (
              <div
                className="
                  pharmacy-invoice__detail-row
                "
              >
                <span>
                  Doctor
                </span>

                <strong>
                  {doctor}
                </strong>
              </div>
            )}

            {/* ===============================================
                DEPARTMENT
            ================================================ */}

            <div
              className="
                pharmacy-invoice__detail-row
              "
            >
              <span>
                Department
              </span>

              <strong>
                {isSelfStaffPurchase
                  ? staffDepartment
                  : department}
              </strong>
            </div>

            {/* ===============================================
                DESIGNATION FOR STAFF
            ================================================ */}

            {isSelfStaffPurchase && (
              <div
                className="
                  pharmacy-invoice__detail-row
                "
              >
                <span>
                  Designation
                </span>

                <strong>
                  {staffDesignation}
                </strong>
              </div>
            )}

            {/* ===============================================
                VISIT TYPE
            ================================================ */}

            {!isSelfStaffPurchase && (
              <div
                className="
                  pharmacy-invoice__detail-row
                "
              >
                <span>
                  Visit Type
                </span>

                <strong>
                  {visitType}
                </strong>
              </div>
            )}

            {/* ===============================================
                PAYMENT MODE
            ================================================ */}

            <div
              className="
                pharmacy-invoice__detail-row
              "
            >
              <span>
                Payment Mode
              </span>

              <strong>
                {paymentMethod ===
                "cash"
                  ? "Cash"
                  : paymentMethod}
              </strong>
            </div>

            {/* ===============================================
                AMOUNT RECEIVED
            ================================================ */}

            <div
              className="
                pharmacy-invoice__detail-row
              "
            >
              <span>
                Amount Received
              </span>

              <strong>
                {payment?.amountReceived
                  ? formatAmount(
                      payment.amountReceived
                    )
                  : formatAmount(
                      summary.grandTotal
                    )}
              </strong>
            </div>

          </div>

        </section>

        {/* ===================================================
            MEDICINES
        ==================================================== */}

        <section
          className="
            pharmacy-invoice__medicines
          "
        >

          <table>

            <thead>
              <tr>

                <th className="col-sr">
                  #
                </th>

                <th>
                  {safeDisplayValue(
                    medicinesConfig?.nameLabel,
                    "Medicine Name"
                  )}
                </th>

                <th>
                  {safeDisplayValue(
                    medicinesConfig?.batchLabel,
                    "Batch No."
                  )}
                </th>

                <th>
                  {safeDisplayValue(
                    medicinesConfig?.expiryLabel,
                    "Expiry"
                  )}
                </th>

                <th className="col-qty">
                  Qty
                </th>

                <th className="col-rate">
                  Rate (₹)
                </th>

                <th className="col-amount">
                  Amount (₹)
                </th>

              </tr>
            </thead>

            <tbody>

              {medicines.map(
                (
                  medicine,
                  index
                ) => {
                  const medicineName =
                    safeDisplayValue(
                      medicine?.medicineName ||
                        medicine?.name ||
                        medicine?.medicine,
                      "-"
                    );

                  const batch =
                    safeDisplayValue(
                      medicine?.batchNumber ||
                        medicine?.batchNo ||
                        medicine?.batch,
                      "-"
                    );

                  const expiry =
                    safeDisplayValue(
                      medicine?.expiryDate ||
                        medicine?.expiry,
                      "-"
                    );

                  const quantity =
                    getMedicineQuantity(
                      medicine
                    );

                  const rate =
                    getMedicineRate(
                      medicine
                    );

                  const amount =
                    getMedicineAmount(
                      medicine
                    );

                  return (
                    <tr
                      key={
                        medicine?.id ||
                        medicine?.medicineId ||
                        index
                      }
                    >

                      <td>
                        {index + 1}
                      </td>

                      <td>
                        <strong>
                          {medicineName}
                        </strong>
                      </td>

                      <td>
                        {batch}
                      </td>

                      <td>
                        {expiry}
                      </td>

                      <td>
                        {quantity}
                      </td>

                      <td>
                        {rate.toFixed(2)}
                      </td>

                      <td className="amount-cell">
                        {amount.toFixed(2)}
                      </td>

                    </tr>
                  );
                }
              )}

            </tbody>

          </table>

        </section>

        {/* ===================================================
            BOTTOM TOTALS
        ==================================================== */}

        <section
          className="
            pharmacy-invoice__bottom
          "
        >

          <div
            className="
              pharmacy-invoice__amount-words
            "
          >

            <span>
              Amount in Words:
            </span>

            <strong>
              {numberToWords(
                summary.grandTotal
              )}
            </strong>

          </div>

          <div
            className="
              pharmacy-invoice__totals
            "
          >

            <div>
              <span>
                Subtotal
              </span>

              <strong>
                {formatAmount(
                  summary.subtotal
                )}
              </strong>
            </div>

            <div>
              <span>
                Discount
              </span>

              <strong>
                {formatAmount(
                  summary.discount
                )}
              </strong>
            </div>

            <div>
              <span>
                Taxable Amount
              </span>

              <strong>
                {formatAmount(
                  summary.taxableAmount
                )}
              </strong>
            </div>

            <div>
              <span>
                GST / Tax
              </span>

              <strong>
                {formatAmount(
                  summary.tax
                )}
              </strong>
            </div>

            <div>
              <span>
                Round Off
              </span>

              <strong>
                {formatAmount(
                  summary.roundOff
                )}
              </strong>
            </div>

            <div
              className="
                pharmacy-invoice__grand-total
              "
            >

              <span>
                Total Amount
              </span>

              <strong>
                {formatAmount(
                  summary.grandTotal
                )}
              </strong>

            </div>

          </div>

        </section>

        {/* ===================================================
            FOOTER
        ==================================================== */}

        <footer
          className="
            pharmacy-invoice__footer
          "
        >

          <div
            className="
              pharmacy-invoice__footer-message
            "
          >

            <strong>
              {safeDisplayValue(
                footerConfig?.thankYou,
                "Thank you for your visit! Get Well Soon!"
              )}
            </strong>

            {footerConfig?.note?.text && (
              <span>
                {safeDisplayValue(
                  footerConfig.note.text,
                  ""
                )}
              </span>
            )}

          </div>

          <div
            className="
              pharmacy-invoice__signature
            "
          >

            <div
              className="
                pharmacy-invoice__signature-line
              "
            />

            <strong>
              {safeDisplayValue(
                footerConfig?.signatureLabel,
                "Authorized Signatory"
              )}
            </strong>

          </div>

        </footer>

      </section>

    </main>
  );
};

export default PharmacyInvoice;