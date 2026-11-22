// src/master_modules/Billing&Invoice/components/PharmacyBilling/PaymentReview/PharmacyReview.jsx

import React from "react";

import PharmacyBillingStepper from "../RegisteredPatient/PharmacyBillingStepper/PharmacyBillingStepper";

import pharmacyReviewConfig from "@/master_modules/Billing&Invoice/config/pharmacyReview.config";
import pharmacyReviewMock from "@/master_modules/Billing&Invoice/mock/pharmacyReview.mock";
import selfStaffPurchaseConfig from "@/master_modules/Billing&Invoice/config/selfStaffPurchase.config";

import "./PharmacyReview.css";

const PharmacyReview = ({
  patient = null,
  customer = null,
  customerType = "registered-patient",
  billingData = null,
  paymentData = null,

  config = pharmacyReviewConfig,
  mockData = pharmacyReviewMock,

  onBack,
  onClose,
  onConfirm,
}) => {
  // ==========================================================
  // CUSTOMER TYPE
  // ==========================================================

  const normalizedCustomerType = String(
    customerType ||
      billingData?.customerType ||
      "registered-patient"
  )
    .trim()
    .toLowerCase();

  const isWalkInCustomer =
    normalizedCustomerType === "walk-in-customer";

  const isSelfStaffPurchase =
    normalizedCustomerType === "self-staff-purchase";

  // ==========================================================
  // SAFE CONFIG
  // ==========================================================

  const pageConfig = config?.page || {};
  const patientConfig = config?.patient || {};
  const customerConfig = config?.customer || {};
  const billConfig = config?.bill || {};
  const medicinesConfig = config?.medicines || {};
  const paymentConfig = config?.payment || {};
  const summaryConfig = config?.summary || {};
  const footerConfig = config?.footer || {};
  const stepperConfig = config?.stepper || {};

  const activeStaffConfig =
    selfStaffPurchaseConfig || {};

  const staffDetailsConfig =
    activeStaffConfig?.staffDetails || {};

  const staffFields = Array.isArray(
    staffDetailsConfig?.fields
  )
    ? staffDetailsConfig.fields
    : [];

  // ==========================================================
  // DATA SOURCE
  //
  // Actual billing data always gets priority.
  // Mock is only a development fallback.
  // ==========================================================

  const sourceData = billingData || {};

  // ==========================================================
  // CUSTOMER / PATIENT / STAFF SOURCE
  //
  // Walk-in must NEVER fall back to registered patient.
  // Staff purchase must NEVER fall back to registered patient
  // when staff data is available.
  // ==========================================================

  const sourcePerson = isWalkInCustomer
    ? (
        customer ||
        billingData?.walkInCustomer ||
        billingData?.customer ||
        null
      )
    : isSelfStaffPurchase
    ? (
        billingData?.staff ||
        billingData?.selectedStaff ||
        patient ||
        null
      )
    : (
        patient ||
        billingData?.patient ||
        null
      );

  const fallbackPerson = isWalkInCustomer
    ? (
        mockData?.customer ||
        mockData?.walkInCustomer ||
        {}
      )
    : isSelfStaffPurchase
    ? (
        mockData?.staff ||
        mockData?.selectedStaff ||
        {}
      )
    : (
        mockData?.patient ||
        {}
      );

  const personData = {
    ...fallbackPerson,
    ...(sourcePerson || {}),
  };

  // ==========================================================
  // PERSON DETAILS
  // ==========================================================

  const personDetails = {
    ...(isWalkInCustomer
      ? (
          mockData?.customerDetails ||
          mockData?.walkInCustomerDetails ||
          {}
        )
      : isSelfStaffPurchase
      ? (
          mockData?.staffDetails ||
          {}
        )
      : (
          mockData?.patientDetails ||
          {}
        )),

    ...(isWalkInCustomer
      ? (
          sourceData?.customerDetails ||
          sourceData?.walkInCustomerDetails ||
          {}
        )
      : isSelfStaffPurchase
      ? (
          sourceData?.staffDetails ||
          {}
        )
      : (
          sourceData?.patientDetails ||
          {}
        )),
  };

  // ==========================================================
  // NORMALIZED PERSON
  // ==========================================================

  const normalizedPerson = {
    ...personData,

    uhid:
      personData?.uhid ||
      personData?.UHID ||
      personDetails?.uhid ||
      personDetails?.UHID ||
      "",

    patientName:
      personData?.patientName ||
      personData?.customerName ||
      personData?.staffName ||
      personData?.name ||
      personDetails?.patientName ||
      personDetails?.customerName ||
      personDetails?.staffName ||
      personDetails?.name ||
      "",

    customerName:
      personData?.customerName ||
      personData?.patientName ||
      personData?.staffName ||
      personData?.name ||
      personDetails?.customerName ||
      personDetails?.patientName ||
      personDetails?.staffName ||
      personDetails?.name ||
      "",

    age:
      personData?.age ??
      personDetails?.age ??
      "",

    gender:
      personData?.gender ||
      personDetails?.gender ||
      "",

    ageGender:
      personData?.ageGender ||
      (
        [
          personData?.age ?? personDetails?.age,
          personData?.gender || personDetails?.gender,
        ]
          .filter(
            (value) =>
              value !== undefined &&
              value !== null &&
              value !== ""
          )
          .join(" / ")
      ) ||
      "",

    mobile:
      personData?.mobile ||
      personData?.phone ||
      personDetails?.mobile ||
      personDetails?.phone ||
      "",

    employeeId:
      personData?.employeeId ||
      personData?.empId ||
      personDetails?.employeeId ||
      personDetails?.empId ||
      "",

    staffName:
      personData?.staffName ||
      personData?.name ||
      personData?.patientName ||
      personDetails?.staffName ||
      personDetails?.name ||
      "",

    department:
      personData?.department ||
      personDetails?.department ||
      "",

    designation:
      personData?.designation ||
      personDetails?.designation ||
      "",
  };

  // ==========================================================
  // BILL DATA
  // ==========================================================

  const billData = {
    ...(mockData?.bill || {}),
    ...(sourceData?.bill || {}),
  };

  const normalizedBill = {
    ...billData,

    billNumber:
      sourceData?.billNumber ||
      billData?.billNumber ||
      "",

    billDate:
      sourceData?.billDate ||
      billData?.billDate ||
      "",

    prescriptionNumber:
      sourceData?.prescriptionNumber ||
      billData?.prescriptionNumber ||
      "",

    itemCount:
      sourceData?.itemCount ??
      billData?.itemCount ??
      0,
  };

  // ==========================================================
  // MEDICINES
  //
  // No useMemo intentionally.
  // Data is small and derived directly.
  // ==========================================================

  const rawMedicines =
    sourceData?.medicines ||
    sourceData?.selectedMedicines ||
    sourceData?.items ||
    mockData?.medicines ||
    [];

  const medicines = Array.isArray(rawMedicines)
    ? rawMedicines
    : [];

  // ==========================================================
  // MEDICINE HELPERS
  // ==========================================================

  const getMedicineName = (medicine) =>
    medicine?.medicineName ||
    medicine?.name ||
    medicine?.medicine ||
    medicine?.drugName ||
    "-";

  const getMedicineQuantity = (medicine) => {
    const quantity =
      medicine?.quantity ??
      medicine?.qty ??
      medicine?.requestedQuantity ??
      0;

    return Number(quantity) || 0;
  };

  const getMedicineRate = (medicine) => {
    const rate =
      medicine?.rate ??
      medicine?.price ??
      medicine?.unitPrice ??
      medicine?.mrp ??
      0;

    return Number(rate) || 0;
  };

  const getMedicineAmount = (medicine) => {
    const explicitAmount =
      medicine?.amount ??
      medicine?.totalAmount;

    if (
      explicitAmount !== undefined &&
      explicitAmount !== null &&
      explicitAmount !== ""
    ) {
      return Number(explicitAmount) || 0;
    }

    return (
      getMedicineQuantity(medicine) *
      getMedicineRate(medicine)
    );
  };

  // ==========================================================
  // SUMMARY DATA
  // ==========================================================

  const summaryData =
    sourceData?.summary ||
    sourceData?.billingSummary ||
    null;

  const medicineSubtotal = medicines.reduce(
    (total, medicine) =>
      total + getMedicineAmount(medicine),
    0
  );

  const summary = {
    ...(mockData?.summary || {}),
    ...(summaryData || {}),
  };

  const subtotal =
    summary?.subtotal ??
    sourceData?.subtotal ??
    medicineSubtotal ??
    0;

  const discount =
    summary?.discount ??
    sourceData?.discount ??
    0;

  const taxableAmount =
    summary?.taxableAmount ??
    sourceData?.taxableAmount ??
    Math.max(
      Number(subtotal) - Number(discount),
      0
    );

  const tax =
    summary?.tax ??
    summary?.gst ??
    sourceData?.tax ??
    sourceData?.gst ??
    0;

  const calculatedGrandTotal =
    Number(taxableAmount) +
    Number(tax);

  const grandTotal =
    summary?.grandTotal ??
    sourceData?.grandTotal ??
    sourceData?.amountPayable ??
    calculatedGrandTotal;

  const normalizedSummary = {
    ...summary,

    subtotal:
      Number(subtotal) || 0,

    discount:
      Number(discount) || 0,

    taxableAmount:
      Number(taxableAmount) || 0,

    tax:
      Number(tax) || 0,

    grandTotal:
      Number(grandTotal) || 0,
  };

  // ==========================================================
  // PAYMENT NORMALIZATION
  //
  // PharmacyPayment sends:
  //
  // {
  //   payment: {
  //     method,
  //     amountReceived,
  //     transactionId,
  //     cardType,
  //     lastFourDigits,
  //     bankName,
  //     changeAmount
  //   },
  //   amountPayable
  // }
  // ==========================================================

  const rawPayment =
    paymentData?.payment ||
    sourceData?.payment ||
    (
      paymentData &&
      !paymentData?.summary &&
      !paymentData?.customer &&
      !paymentData?.patient
        ? paymentData
        : null
    ) ||
    {};

  const payment = {
    ...(mockData?.payment || {}),
    ...rawPayment,
  };

  const paymentMethod =
    payment?.method ||
    payment?.paymentMethod ||
    "";

  const paymentMethodLabel =
    paymentConfig?.methodLabels?.[
      paymentMethod
    ] ||
    paymentMethod ||
    "-";

  // ==========================================================
  // CURRENCY
  // ==========================================================

  const formatCurrency = (value) => {
    const numericValue =
      Number(value) || 0;

    const currency =
      summaryConfig?.currency || "₹";

    const decimalPlaces =
      Number.isInteger(
        summaryConfig?.decimalPlaces
      )
        ? summaryConfig.decimalPlaces
        : 2;

    return `${currency}${numericValue.toFixed(
      decimalPlaces
    )}`;
  };

  // ==========================================================
  // DYNAMIC ICONS
  // ==========================================================

  const PageIcon =
    pageConfig?.icons?.page || null;

  const BackIcon =
    pageConfig?.icons?.back || null;

  const CloseIcon =
    pageConfig?.icons?.close || null;

  const PersonIcon =
    isWalkInCustomer
      ? (
          customerConfig?.icon ||
          patientConfig?.icon ||
          null
        )
      : (
          patientConfig?.icon ||
          null
        );

  const BillIcon =
    billConfig?.icon || null;

  const MedicinesIcon =
    medicinesConfig?.icon || null;

  const PaymentIcon =
    paymentConfig?.icon || null;

  const SummaryIcon =
    summaryConfig?.icon || null;

  const CancelIcon =
    footerConfig?.cancel?.icon || null;

  const FooterBackIcon =
    footerConfig?.back?.icon || null;

  const ConfirmIcon =
    footerConfig?.confirm?.icon || null;

  const PaymentMethodIcon =
    paymentConfig?.methodIcons?.[
      paymentMethod
    ] || null;

  // ==========================================================
  // PERSON SECTION CONFIG
  // ==========================================================

  const activePersonConfig =
    isWalkInCustomer
      ? (
          customerConfig?.enabled !== false &&
          Object.keys(customerConfig).length > 0
            ? customerConfig
            : patientConfig
        )
      : isSelfStaffPurchase
      ? staffDetailsConfig
      : patientConfig;

  const personTitle =
    activePersonConfig?.title ||
    (
      isWalkInCustomer
        ? "Customer Information"
        : isSelfStaffPurchase
        ? "Staff Details"
        : "Patient Information"
    );

  const personSubtitle =
    activePersonConfig?.subtitle ||
    (
      isWalkInCustomer
        ? "Walk-in customer details"
        : isSelfStaffPurchase
        ? "Selected staff member details"
        : "Registered patient details"
    );

  const personFields =
    isSelfStaffPurchase
      ? staffFields
      : Array.isArray(
          activePersonConfig?.fields
        )
      ? activePersonConfig.fields
      : [];

  // ==========================================================
  // PERSON FIELD VISIBILITY
  // ==========================================================

  const shouldShowPersonField = (
    fieldConfig
  ) => {
    if (
      !Array.isArray(
        fieldConfig?.showWhen
      )
    ) {
      return true;
    }

    return fieldConfig.showWhen.includes(
      normalizedCustomerType
    );
  };

  // ==========================================================
  // PERSON FIELD VALUE
  // ==========================================================

  const getPersonFieldValue = (field) => {
    switch (field) {
      case "uhid":
        return (
          isWalkInCustomer ||
          isSelfStaffPurchase
        )
          ? "-"
          : (
              normalizedPerson?.uhid ||
              "-"
            );

      case "patientName":
        return isSelfStaffPurchase
          ? (
              normalizedPerson?.staffName ||
              "-"
            )
          : (
              normalizedPerson?.patientName ||
              "-"
            );

      case "customerName":
        return (
          normalizedPerson?.customerName ||
          normalizedPerson?.patientName ||
          normalizedPerson?.staffName ||
          "-"
        );

      case "staffName":
        return (
          normalizedPerson?.staffName ||
          normalizedPerson?.name ||
          "-"
        );

      case "employeeId":
        return (
          normalizedPerson?.employeeId ||
          "-"
        );

      case "department":
        return (
          normalizedPerson?.department ||
          "-"
        );

      case "designation":
        return (
          normalizedPerson?.designation ||
          "-"
        );

      case "ageGender":
        return (
          normalizedPerson?.ageGender ||
          "-"
        );

      case "age":
        return (
          normalizedPerson?.age ??
          "-"
        );

      case "gender":
        return (
          normalizedPerson?.gender ||
          "-"
        );

      case "mobile":
        return (
          normalizedPerson?.mobile ||
          "-"
        );

      default:
        return (
          normalizedPerson?.[field] ??
          personDetails?.[field] ??
          "-"
        );
    }
  };

  // ==========================================================
  // PERSON FIELD LABEL
  // ==========================================================

  const getPersonFieldLabel = (
    fieldConfig
  ) => {
    if (isWalkInCustomer) {
      return (
        fieldConfig?.customerLabel ||
        fieldConfig?.label ||
        ""
      );
    }

    return fieldConfig?.label || "";
  };

  // ==========================================================
  // BILL FIELD VISIBILITY
  // ==========================================================

  const shouldShowBillField = (
    fieldConfig
  ) => {
    if (
      !Array.isArray(
        fieldConfig?.showWhen
      )
    ) {
      return true;
    }

    return fieldConfig.showWhen.includes(
      normalizedCustomerType
    );
  };

  // ==========================================================
  // BILL FIELD VALUE
  // ==========================================================

  const getBillFieldValue = (field) => {
    switch (field) {
      case "billNumber":
        return (
          normalizedBill?.billNumber ||
          "Auto Generated"
        );

      case "billDate":
        return (
          normalizedBill?.billDate ||
          "-"
        );

      case "prescriptionNumber":
        return (
          isWalkInCustomer ||
          isSelfStaffPurchase
        )
          ? "-"
          : (
              normalizedBill?.prescriptionNumber ||
              "-"
            );

      case "itemCount":
        return (
          normalizedBill?.itemCount ??
          medicines.length
        );

      default:
        return (
          normalizedBill?.[field] ??
          "-"
        );
    }
  };

  // ==========================================================
  // PAYMENT FIELD VALUE
  // ==========================================================

  const getPaymentFieldValue = (
    field
  ) => {
    switch (field) {
      case "paymentMethod":
        return paymentMethodLabel;

      case "amountReceived":
        return payment?.amountReceived;

      case "transactionId":
        return payment?.transactionId;

      case "cardType":
        return payment?.cardType;

      case "lastFourDigits":
        return payment?.lastFourDigits;

      case "bankName":
        return payment?.bankName;

      default:
        return payment?.[field];
    }
  };

  // ==========================================================
  // PAYMENT FIELD VISIBILITY
  // ==========================================================

  const shouldShowPaymentField = (
    fieldConfig
  ) => {
    if (
      !Array.isArray(
        fieldConfig?.showWhen
      )
    ) {
      return true;
    }

    return fieldConfig.showWhen.includes(
      paymentMethod
    );
  };

  // ==========================================================
  // MEDICINE COLUMN VALUE
  // ==========================================================

  const getMedicineColumnValue = (
    medicine,
    column,
    index
  ) => {
    switch (column?.field) {
      case "serialNumber":
        return index + 1;

      case "medicineName":
        return getMedicineName(medicine);

      case "quantity":
        return getMedicineQuantity(
          medicine
        );

      case "rate":
        return formatCurrency(
          getMedicineRate(medicine)
        );

      case "amount":
        return formatCurrency(
          getMedicineAmount(medicine)
        );

      default:
        return (
          medicine?.[column?.field] ??
          "-"
        );
    }
  };

  // ==========================================================
  // FOOTER ACTIONS
  // ==========================================================

  const handleBack = () => {
    if (typeof onBack === "function") {
      onBack();
    }
  };

  const handleClose = () => {
    if (typeof onClose === "function") {
      onClose();
    }
  };

  const handleConfirm = () => {
    const finalReviewData = {
      customerType:
        normalizedCustomerType,

      patient:
        isWalkInCustomer ||
        isSelfStaffPurchase
          ? null
          : normalizedPerson,

      customer:
        isWalkInCustomer
          ? normalizedPerson
          : null,

      walkInCustomer:
        isWalkInCustomer
          ? normalizedPerson
          : null,

      staff:
        isSelfStaffPurchase
          ? normalizedPerson
          : null,

      patientDetails:
        isWalkInCustomer ||
        isSelfStaffPurchase
          ? null
          : personDetails,

      customerDetails:
        isWalkInCustomer
          ? personDetails
          : null,

      staffDetails:
        isSelfStaffPurchase
          ? personDetails
          : null,

      bill:
        normalizedBill,

      medicines,

      summary:
        normalizedSummary,

      payment,

      totalPayable:
        Number(grandTotal) || 0,
    };

    if (
      typeof onConfirm === "function"
    ) {
      onConfirm(finalReviewData);
    }
  };

  // ==========================================================
  // PAGE DISABLED
  // ==========================================================

  if (!pageConfig?.enabled) {
    return null;
  }

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <div className="pharmacy-review">
      <div className="pharmacy-review__container">

        {/* HEADER */}

        <header className="pharmacy-review__header">

          <div className="pharmacy-review__header-left">

            {pageConfig?.showBackButton && (
              <button
                type="button"
                className="pharmacy-review__back-button"
                onClick={handleBack}
                aria-label="Back"
              >
                {BackIcon && <BackIcon />}
              </button>
            )}

            <div className="pharmacy-review__header-icon">
              {PageIcon && <PageIcon />}
            </div>

            <div className="pharmacy-review__header-content">

              <h1 className="pharmacy-review__title">
                {pageConfig?.title || ""}
              </h1>

              {pageConfig?.subtitle && (
                <p className="pharmacy-review__subtitle">
                  {pageConfig.subtitle}
                </p>
              )}

            </div>

          </div>

          {pageConfig?.showCloseButton && (
            <button
              type="button"
              className="pharmacy-review__close-button"
              onClick={handleClose}
              aria-label="Close"
            >
              {CloseIcon && <CloseIcon />}
            </button>
          )}

        </header>

        {/* STEPPER */}

        {stepperConfig?.enabled !== false && (
          <div className="pharmacy-review__stepper">
            <PharmacyBillingStepper
              currentStep={
                stepperConfig?.currentStep || 4
              }
            />
          </div>
        )}

        {/* CONTENT */}

        <main className="pharmacy-review__content">

          {/* PERSON / CUSTOMER / STAFF INFORMATION */}

          {activePersonConfig?.enabled !== false && (
            <section className="pharmacy-review__card">

              <div className="pharmacy-review__card-header">

                <div className="pharmacy-review__card-header-left">

                  <div className="pharmacy-review__section-icon">
                    {PersonIcon && <PersonIcon />}
                  </div>

                  <div>

                    <h2>
                      {personTitle}
                    </h2>

                    {personSubtitle && (
                      <p>
                        {personSubtitle}
                      </p>
                    )}

                  </div>

                </div>

              </div>

              <div className="pharmacy-review__info-grid">

                {personFields
                  .filter(
                    shouldShowPersonField
                  )
                  .map((field) => (
                    <div
                      className="pharmacy-review__info-item"
                      key={
                        field?.id ||
                        field?.field
                      }
                    >

                      <span>
                        {getPersonFieldLabel(
                          field
                        )}
                      </span>

                      <strong>
                        {getPersonFieldValue(
                          field?.field
                        ) ||
                          field?.fallback ||
                          "-"}
                      </strong>

                    </div>
                  ))}

              </div>

            </section>
          )}

          {/* BILL INFORMATION */}

          {billConfig?.enabled !== false && (
            <section className="pharmacy-review__card">

              <div className="pharmacy-review__card-header">

                <div className="pharmacy-review__card-header-left">

                  <div className="pharmacy-review__section-icon">
                    {BillIcon && <BillIcon />}
                  </div>

                  <div>

                    <h2>
                      {billConfig?.title || ""}
                    </h2>

                    {billConfig?.subtitle && (
                      <p>
                        {billConfig.subtitle}
                      </p>
                    )}

                  </div>

                </div>

              </div>

              <div className="pharmacy-review__info-grid">

                {(billConfig?.fields || [])
                  .filter(
                    shouldShowBillField
                  )
                  .map((field) => (
                    <div
                      className="pharmacy-review__info-item"
                      key={
                        field?.id ||
                        field?.field
                      }
                    >

                      <span>
                        {field?.label || ""}
                      </span>

                      <strong>
                        {getBillFieldValue(
                          field?.field
                        ) ||
                          field?.fallback ||
                          "-"}
                      </strong>

                    </div>
                  ))}

              </div>

            </section>
          )}

          {/* MEDICINES */}

          {medicinesConfig?.enabled !== false && (
            <section className="pharmacy-review__card">

              <div className="pharmacy-review__card-header">

                <div className="pharmacy-review__card-header-left">

                  <div className="pharmacy-review__section-icon">
                    {MedicinesIcon && (
                      <MedicinesIcon />
                    )}
                  </div>

                  <div>

                    <h2>
                      {medicinesConfig?.title || ""}
                    </h2>

                    {medicinesConfig?.subtitle && (
                      <p>
                        {medicinesConfig.subtitle}
                      </p>
                    )}

                  </div>

                </div>

                {medicinesConfig?.showItemCount && (
                  <span className="pharmacy-review__count">
                    {medicines.length}{" "}
                    {medicinesConfig?.itemCountLabel ||
                      "Items"}
                  </span>
                )}

              </div>

              {medicines.length > 0 ? (
                <div className="pharmacy-review__medicine-table">

                  <table>

                    <thead>
                      <tr>
                        {(
                          medicinesConfig?.columns ||
                          []
                        ).map((column) => (
                          <th
                            key={column?.id}
                            style={{
                              width:
                                column?.width ||
                                undefined,
                            }}
                          >
                            {column?.label || ""}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>

                      {medicines.map(
                        (medicine, index) => (
                          <tr
                            key={
                              medicine?.id ||
                              medicine?.medicineId ||
                              medicine?.itemId ||
                              index
                            }
                          >

                            {(
                              medicinesConfig?.columns ||
                              []
                            ).map(
                              (column) => (
                                <td
                                  key={
                                    column?.id
                                  }
                                >

                                  {column?.field ===
                                  "medicineName" ? (
                                    <strong>
                                      {getMedicineColumnValue(
                                        medicine,
                                        column,
                                        index
                                      )}
                                    </strong>
                                  ) : (
                                    getMedicineColumnValue(
                                      medicine,
                                      column,
                                      index
                                    )
                                  )}

                                </td>
                              )
                            )}

                          </tr>
                        )
                      )}

                    </tbody>

                  </table>

                </div>
              ) : (
                <div className="pharmacy-review__empty">
                  {medicinesConfig?.emptyMessage ||
                    "No medicine details available."}
                </div>
              )}

            </section>
          )}

          {/* PAYMENT + SUMMARY */}

          <div className="pharmacy-review__bottom-grid">

            {/* PAYMENT */}

            {paymentConfig?.enabled !== false && (
              <section className="pharmacy-review__card pharmacy-review__payment">

                <div className="pharmacy-review__card-header">

                  <div className="pharmacy-review__card-header-left">

                    <div className="pharmacy-review__section-icon">
                      {PaymentIcon && (
                        <PaymentIcon />
                      )}
                    </div>

                    <div>

                      <h2>
                        {paymentConfig?.title || ""}
                      </h2>

                      {paymentConfig?.subtitle && (
                        <p>
                          {paymentConfig.subtitle}
                        </p>
                      )}

                    </div>

                  </div>

                </div>

                <div className="pharmacy-review__payment">

                  {(paymentConfig?.fields || [])
                    .filter(
                      shouldShowPaymentField
                    )
                    .map((field) => {

                      const value =
                        getPaymentFieldValue(
                          field?.field
                        );

                      const displayValue =
                        field?.type === "currency"
                          ? formatCurrency(
                              value
                            )
                          : (
                              value ??
                              (
                                field?.fallback ||
                                "-"
                              )
                            );

                      return (
                        <div
                          className="pharmacy-review__payment-method"
                          key={field?.id}
                        >

                          <span
                            className={
                              field?.field ===
                              "paymentMethod"
                                ? "pharmacy-review__payment-label"
                                : ""
                            }
                          >

                            {field?.field ===
                              "paymentMethod" &&
                              PaymentMethodIcon && (
                                <PaymentMethodIcon />
                              )}

                            {field?.label || ""}

                          </span>

                          <strong>
                            {displayValue}
                          </strong>

                        </div>
                      );
                    })}

                </div>

              </section>
            )}

            {/* SUMMARY */}

            {summaryConfig?.enabled !== false && (
              <section className="pharmacy-review__card">

                <div className="pharmacy-review__card-header">

                  <div className="pharmacy-review__card-header-left">

                    <div className="pharmacy-review__section-icon">
                      {SummaryIcon && (
                        <SummaryIcon />
                      )}
                    </div>

                    <div>

                      <h2>
                        {summaryConfig?.title || ""}
                      </h2>

                      {summaryConfig?.subtitle && (
                        <p>
                          {summaryConfig.subtitle}
                        </p>
                      )}

                    </div>

                  </div>

                </div>

                <div className="pharmacy-review__summary">

                  {(summaryConfig?.rows || []).map(
                    (row) => {

                      const value =
                        normalizedSummary?.[
                          row?.field
                        ] ?? 0;

                      return (
                        <div
                          key={row?.id}
                        >

                          <span>
                            {row?.label || ""}
                          </span>

                          <strong>
                            {row?.type ===
                            "currency"
                              ? formatCurrency(
                                  value
                                )
                              : value}
                          </strong>

                        </div>
                      );
                    }
                  )}

                  {summaryConfig?.grandTotal
                    ?.enabled && (
                    <div className="pharmacy-review__summary-total">

                      <span>
                        {summaryConfig
                          ?.grandTotal
                          ?.label ||
                          "Total Payable"}
                      </span>

                      <strong>
                        {formatCurrency(
                          grandTotal
                        )}
                      </strong>

                    </div>
                  )}

                </div>

              </section>
            )}

          </div>

        </main>

        {/* FOOTER */}

        {footerConfig?.enabled && (
          <footer className="pharmacy-review__footer">

            {/* CANCEL */}

            {footerConfig?.cancel?.enabled && (
              <button
                type="button"
                className="
                  pharmacy-review__footer-button
                  pharmacy-review__footer-button--cancel
                "
                onClick={handleClose}
              >

                {CancelIcon && (
                  <CancelIcon />
                )}

                <span>
                  {footerConfig
                    ?.cancel
                    ?.label ||
                    "Cancel"}
                </span>

              </button>
            )}

            <div className="pharmacy-review__footer-right">

              {/* BACK */}

              {footerConfig?.back?.enabled && (
                <button
                  type="button"
                  className="
                    pharmacy-review__footer-button
                    pharmacy-review__footer-button--back
                  "
                  onClick={handleBack}
                >

                  {FooterBackIcon && (
                    <FooterBackIcon />
                  )}

                  <span>
                    {footerConfig
                      ?.back
                      ?.label ||
                      "Back"}
                  </span>

                </button>
              )}

              {/* CONFIRM */}

              {footerConfig?.confirm?.enabled && (
                <button
                  type="button"
                  className="
                    pharmacy-review__footer-button
                    pharmacy-review__footer-button--confirm
                  "
                  onClick={handleConfirm}
                >

                  <span>
                    {footerConfig
                      ?.confirm
                      ?.label ||
                      "Confirm & Generate Invoice"}
                  </span>

                  {ConfirmIcon && (
                    <ConfirmIcon />
                  )}

                </button>
              )}

            </div>

          </footer>
        )}

      </div>
    </div>
  );
};

export default PharmacyReview;