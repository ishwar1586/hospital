import React, { useState } from "react";

import pharmacyPaymentConfig from "@/master_modules/Billing&Invoice/config/pharmacyPayment.config";
import pharmacyPaymentMock from "@/master_modules/Billing&Invoice/mock/pharmacyPayment.mock";
import selfStaffPurchaseConfig from "@/master_modules/Billing&Invoice/config/selfStaffPurchase.config";

import PharmacyBillingStepper from "../RegisteredPatient/PharmacyBillingStepper/PharmacyBillingStepper";

import PaymentHeader from "./PaymentHeader/PaymentHeader";
import PaymentCustomer from "./PaymentCustomer/PaymentCustomer";
import PaymentBillInfo from "./PaymentBillInfo/PaymentBillInfo";
import PaymentSummary from "./PaymentSummary/PaymentSummary";
import PaymentMethod from "./PaymentMethod/PaymentMethod";
import PaymentDetails from "./PaymentDetails/PaymentDetails";
import PaymentFooter from "./PaymentFooter/PaymentFooter";

import "./PharmacyPayment.css";

const PharmacyPayment = ({
  patient = null,

  // Walk-in customer data
  customer = null,

  // registered-patient / walk-in-customer / self-staff-purchase
  customerType = "registered-patient",

  // Complete data received from Medicines
  billingData = null,

  // Existing payment data
  // Used when coming back from Review.
  paymentData: existingPaymentData = null,

  onBack,
  onClose,
  onContinue,
}) => {
  // =========================================================
  // CONFIG / MOCK
  // =========================================================

  const config = pharmacyPaymentConfig || {};
  const paymentMock = pharmacyPaymentMock || {};

  const staffDetailsConfig =
    selfStaffPurchaseConfig?.staffDetails || {};

  const staffFields = Array.isArray(
    staffDetailsConfig?.fields
  )
    ? staffDetailsConfig.fields
    : [];

  // =========================================================
  // CUSTOMER TYPE
  // =========================================================

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

  const isRegisteredPatient =
    !isWalkInCustomer &&
    !isSelfStaffPurchase;

  // =========================================================
  // CUSTOMER SOURCE
  // =========================================================
  //
  // Registered:
  // patient
  //   ↓
  // billingData.patient
  //   ↓
  // mock.customer
  //
  // Walk-in:
  // customer
  //   ↓
  // billingData.walkInCustomer
  //   ↓
  // billingData.customer
  //
  // Self / Staff:
  // billingData.staff
  //   ↓
  // patient
  //   ↓
  // billingData.patient
  //
  // =========================================================

  const currentCustomer = isWalkInCustomer
    ? (
        customer ||
        billingData?.walkInCustomer ||
        billingData?.customer ||
        null
      )
    : isSelfStaffPurchase
    ? (
        billingData?.staff ||
        patient ||
        billingData?.patient ||
        null
      )
    : (
        patient ||
        billingData?.patient ||
        null
      );

  // =========================================================
  // CUSTOMER DATA
  // =========================================================

  const mockCustomer =
    paymentMock?.customer || {};

  const customerSource =
    currentCustomer ||
    (
      isSelfStaffPurchase
        ? {}
        : mockCustomer
    ) ||
    {};

  const customerData = {
    ...mockCustomer,
    ...customerSource,

    // -------------------------------------------------------
    // Common ID
    // -------------------------------------------------------

    patientId:
      customerSource?.patientId ||
      customerSource?.id ||
      mockCustomer?.patientId ||
      null,

    // -------------------------------------------------------
    // UHID
    // -------------------------------------------------------
    //
    // Staff aur Walk-in ke paas UHID generally nahi hota.
    //
    // -------------------------------------------------------

    uhid:
      customerSource?.uhid ||
      customerSource?.UHID ||
      (
        isWalkInCustomer || isSelfStaffPurchase
          ? "-"
          : mockCustomer?.uhid || "-"
      ),

    // -------------------------------------------------------
    // Patient / Customer / Staff Name
    // -------------------------------------------------------

    patientName:
      customerSource?.patientName ||
      customerSource?.customerName ||
      customerSource?.staffName ||
      customerSource?.name ||
      mockCustomer?.patientName ||
      "-",

    customerName:
      customerSource?.customerName ||
      customerSource?.staffName ||
      customerSource?.patientName ||
      customerSource?.name ||
      mockCustomer?.customerName ||
      mockCustomer?.patientName ||
      "-",

    // -------------------------------------------------------
    // Staff-specific fields
    // -------------------------------------------------------

    employeeId:
      customerSource?.employeeId ||
      customerSource?.empId ||
      "-",

    staffName:
      customerSource?.staffName ||
      customerSource?.name ||
      customerSource?.patientName ||
      "-",

    department:
      customerSource?.department ||
      "-",

    designation:
      customerSource?.designation ||
      "-",

    // -------------------------------------------------------
    // Age
    // -------------------------------------------------------

    age:
      customerSource?.age ??
      mockCustomer?.age ??
      null,

    // -------------------------------------------------------
    // Gender
    // -------------------------------------------------------

    gender:
      customerSource?.gender ||
      mockCustomer?.gender ||
      "",

    // -------------------------------------------------------
    // Age / Gender
    // -------------------------------------------------------

    ageGender:
      customerSource?.ageGender ||
      (
        customerSource?.age !== undefined &&
        customerSource?.age !== null &&
        customerSource?.gender
          ? `${customerSource.age} / ${customerSource.gender}`
          : mockCustomer?.ageGender ||
            "-"
      ),

    // -------------------------------------------------------
    // Mobile
    // -------------------------------------------------------

    mobile:
      customerSource?.mobile ||
      customerSource?.phone ||
      mockCustomer?.mobile ||
      "-",
  };

  // =========================================================
  // PAYMENT CUSTOMER CONFIG
  // =========================================================
  //
  // Registered / Walk-in ke liye existing config exactly same.
  //
  // Staff flow ke liye sirf fields replace honge.
  // UI component / CSS / layout same rahega.
  //
  // =========================================================

  const paymentCustomerConfig = isSelfStaffPurchase
    ? {
        ...(
          config?.customer || {}
        ),

        title:
          staffDetailsConfig?.title ||
          "Staff Details",

        fields: staffFields,
      }
    : (
        config?.customer || {}
      );

  // =========================================================
  // BILL DATA
  // =========================================================

  const mockBill =
    paymentMock?.bill || {};

  const medicines =
    Array.isArray(
      billingData?.medicines
    )
      ? billingData.medicines
      : Array.isArray(
          billingData?.selectedMedicines
        )
      ? billingData.selectedMedicines
      : Array.isArray(
          billingData?.items
        )
      ? billingData.items
      : [];

  const billData = {
    ...mockBill,

    billNumber:
      billingData?.billNumber ||
      billingData?.invoiceNumber ||
      mockBill?.billNumber ||
      null,

    billDate:
      billingData?.billDate ||
      billingData?.invoiceDate ||
      mockBill?.billDate ||
      null,

    prescriptionNumber:
      billingData?.prescriptionNumber ||
      billingData?.prescriptionNo ||
      billingData?.prescription?.number ||
      billingData?.prescription?.prescriptionNumber ||
      mockBill?.prescriptionNumber ||
      null,

    itemCount:
      billingData?.itemCount ??
      medicines.length ??
      mockBill?.itemCount ??
      0,
  };

  // =========================================================
  // SUMMARY DATA
  // =========================================================

  const mockSummary =
    paymentMock?.summary || {};

  const medicinesSummary =
    billingData?.summary ||
    billingData?.billingSummary ||
    {};

  const summaryData = {
    ...mockSummary,

    subtotal:
      medicinesSummary?.subtotal ??
      medicinesSummary?.subTotal ??
      billingData?.subtotal ??
      billingData?.subTotal ??
      mockSummary?.subtotal ??
      0,

    discount:
      medicinesSummary?.discount ??
      billingData?.discount ??
      mockSummary?.discount ??
      0,

    taxableAmount:
      medicinesSummary?.taxableAmount ??
      billingData?.taxableAmount ??
      mockSummary?.taxableAmount ??
      0,

    tax:
      medicinesSummary?.tax ??
      medicinesSummary?.gst ??
      billingData?.tax ??
      billingData?.gst ??
      mockSummary?.tax ??
      0,

    grandTotal:
      medicinesSummary?.grandTotal ??
      medicinesSummary?.total ??
      billingData?.grandTotal ??
      billingData?.total ??
      mockSummary?.grandTotal ??
      0,
  };

  // =========================================================
  // PAYMENT DATA NORMALIZATION
  // =========================================================

  const initialPaymentData =
    existingPaymentData?.payment ||
    existingPaymentData ||
    billingData?.payment ||
    {};

  // =========================================================
  // PAYMENT STATE
  // =========================================================

  const defaultPaymentMethod =
    config?.paymentMethods
      ?.defaultMethod ||
    "cash";

  const [paymentMethod, setPaymentMethod] =
    useState(
      initialPaymentData?.method ||
        initialPaymentData?.paymentMethod ||
        defaultPaymentMethod
    );

  const [paymentData, setPaymentData] =
    useState({
      amountReceived:
        initialPaymentData?.amountReceived ??
        "",

      transactionId:
        initialPaymentData?.transactionId ??
        "",

      cardType:
        initialPaymentData?.cardType ??
        "",

      lastFourDigits:
        initialPaymentData?.lastFourDigits ??
        "",

      bankName:
        initialPaymentData?.bankName ??
        "",

      changeAmount:
        initialPaymentData?.changeAmount ??
        "",
    });

  // =========================================================
  // PAYMENT METHOD CHANGE
  // =========================================================

  const handlePaymentMethodChange =
    (method) => {
      const methodValue =
        typeof method === "string"
          ? method
          : method?.value;

      if (!methodValue) {
        return;
      }

      setPaymentMethod(
        methodValue
      );

      setPaymentData(
        (previous) => ({
          ...previous,

          method:
            methodValue,

          // Cash
          amountReceived:
            methodValue === "cash"
              ? previous?.amountReceived ??
                ""
              : "",

          // UPI / Card / Bank etc.
          transactionId:
            methodValue === "cash"
              ? ""
              : previous?.transactionId ??
                "",

          // Card
          cardType:
            methodValue === "card"
              ? previous?.cardType ??
                ""
              : "",

          lastFourDigits:
            methodValue === "card"
              ? previous?.lastFourDigits ??
                ""
              : "",

          // Bank
          bankName:
            methodValue === "bank"
              ? previous?.bankName ??
                ""
              : "",

          // Cash only
          changeAmount:
            methodValue === "cash"
              ? previous?.changeAmount ??
                ""
              : "",
        })
      );
    };

  // =========================================================
  // PAYMENT DETAIL CHANGE
  // =========================================================

  const handlePaymentDataChange =
    (field, value) => {
      setPaymentData(
        (previous) => ({
          ...previous,

          [field]:
            value,
        })
      );
    };

  // =========================================================
  // BACK
  // =========================================================

  const handleBack = () => {
    if (
      typeof onBack ===
      "function"
    ) {
      onBack();
    }
  };

  // =========================================================
  // CLOSE
  // =========================================================

  const handleClose = () => {
    if (
      typeof onClose ===
      "function"
    ) {
      onClose();
    }
  };

  // =========================================================
  // CONTINUE → REVIEW
  // =========================================================

  const handleContinue =
    (data) => {
      // Latest payment method
      const selectedMethod =
        data?.paymentMethod ||
        paymentMethod ||
        defaultPaymentMethod;

      // Local state + footer data
      const enteredPaymentData = {
        ...paymentData,
        ...(data?.paymentData ||
          {}),
      };

      // Final payment object
      const finalPayment = {
        method:
          selectedMethod,

        amountReceived:
          enteredPaymentData?.amountReceived ??
          "",

        transactionId:
          enteredPaymentData?.transactionId ??
          "",

        cardType:
          enteredPaymentData?.cardType ??
          "",

        lastFourDigits:
          enteredPaymentData?.lastFourDigits ??
          "",

        bankName:
          enteredPaymentData?.bankName ??
          "",

        changeAmount:
          enteredPaymentData?.changeAmount ??
          "",
      };

      // =====================================================
      // FINAL BILLING PAYLOAD
      // =====================================================

      const finalPaymentData = {
        ...(billingData || {}),

        customerType:
          normalizedCustomerType,

        // ---------------------------------------------------
        // Registered Patient
        // ---------------------------------------------------

        patient:
          isWalkInCustomer ||
          isSelfStaffPurchase
            ? null
            : (
                billingData?.patient ||
                patient ||
                null
              ),

        // ---------------------------------------------------
        // Walk-in Customer
        // ---------------------------------------------------

        customer:
          isWalkInCustomer
            ? customerData
            : null,

        walkInCustomer:
          isWalkInCustomer
            ? customerData
            : null,

        // ---------------------------------------------------
        // Self / Staff Purchase
        // ---------------------------------------------------

        staff:
          isSelfStaffPurchase
            ? customerData
            : (
                billingData?.staff ||
                null
              ),

        // ---------------------------------------------------
        // Medicines
        // ---------------------------------------------------

        medicines,

        // ---------------------------------------------------
        // Prescription
        // Registered patient only
        // ---------------------------------------------------

        prescription:
          isRegisteredPatient
            ? (
                billingData?.prescription ||
                null
              )
            : null,

        // ---------------------------------------------------
        // Summary
        // ---------------------------------------------------

        summary:
          summaryData,

        // ---------------------------------------------------
        // Payment
        // ---------------------------------------------------

        payment:
          finalPayment,

        // ---------------------------------------------------
        // Amount payable
        // ---------------------------------------------------

        amountPayable:
          Number(
            data?.amountPayable ??
              summaryData?.grandTotal ??
              0
          ),
      };

      if (
        typeof onContinue ===
        "function"
      ) {
        onContinue(
          finalPaymentData
        );
      }
    };

  // =========================================================
  // STEPPER
  // =========================================================

  const handleStepChange =
    (step) => {
      if (!step?.id) {
        return;
      }

      // Payment current controlled step hai.
      // Parent workflow Back/Continue control karega.
    };

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div className="pharmacy-payment">

      <div className="pharmacy-payment__container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <PaymentHeader
          config={config}
          onBack={handleBack}
          onClose={handleClose}
        />

        {/* =====================================================
            STEPPER
        ===================================================== */}

        <div className="pharmacy-payment__stepper">

          <PharmacyBillingStepper
            currentStep={3}
            onStepChange={
              handleStepChange
            }
          />

        </div>

        {/* =====================================================
            CUSTOMER + BILL
        ===================================================== */}

        <div className="pharmacy-payment__top-grid">

          {config?.customer
            ?.enabled !== false && (

            <PaymentCustomer
              customer={
                customerData
              }
              config={
                paymentCustomerConfig
              }
            />

          )}

          {config?.bill
            ?.enabled !== false && (

            <PaymentBillInfo
              bill={billData}
              config={
                config?.bill
              }
            />

          )}

        </div>

        {/* =====================================================
            SUMMARY
        ===================================================== */}

        {config?.summary
          ?.enabled !== false && (

          <div className="pharmacy-payment__section">

            <PaymentSummary
              summary={
                summaryData
              }
              config={
                config?.summary
              }
            />

          </div>

        )}

        {/* =====================================================
            PAYMENT METHOD
        ===================================================== */}

        {config
          ?.paymentMethods
          ?.enabled !== false && (

          <div className="pharmacy-payment__section">

            <PaymentMethod
              value={
                paymentMethod
              }
              onChange={
                handlePaymentMethodChange
              }
              config={
                config?.paymentMethods
              }
            />

          </div>

        )}

        {/* =====================================================
            PAYMENT DETAILS
        ===================================================== */}

        <div className="pharmacy-payment__section">

          <PaymentDetails
            method={
              paymentMethod
            }
            paymentData={
              paymentData
            }
            onChange={
              handlePaymentDataChange
            }
            amountPayable={
              Number(
                summaryData?.grandTotal ||
                  0
              )
            }
            config={
              config
            }
          />

        </div>

        {/* =====================================================
            FOOTER
        ===================================================== */}

        {config?.footer
          ?.enabled !== false && (

          <div className="pharmacy-payment__footer">

            <PaymentFooter
              paymentMethod={
                paymentMethod
              }
              paymentData={
                paymentData
              }
              amountPayable={
                Number(
                  summaryData?.grandTotal ||
                    0
                )
              }
              onCancel={
                handleClose
              }
              onBack={
                handleBack
              }
              onContinue={
                handleContinue
              }
              config={
                config?.footer
              }
              billingConfig={
                config?.billing
              }
            />

          </div>

        )}

      </div>

    </div>
  );
};

export default PharmacyPayment;