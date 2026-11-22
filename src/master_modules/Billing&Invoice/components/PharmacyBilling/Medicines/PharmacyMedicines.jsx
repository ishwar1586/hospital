import React, { useState } from "react";

import {
  ArrowBackOutlined,
  ArrowForwardOutlined,
  CloseOutlined,
  MedicationOutlined,
  PersonOutlined,
  SearchOutlined,
  AddOutlined,
  RemoveOutlined,
  DeleteOutlineOutlined,
  ReceiptLongOutlined,
  ShoppingCartOutlined,
  LocalPharmacyOutlined,
  DescriptionOutlined,
  CheckCircleOutlined,
} from "@mui/icons-material";

import pharmacyMedicinesConfig from "@/master_modules/Billing&Invoice/config/pharmacyMedicines.config";
import pharmacyMedicinesMock from "@/master_modules/Billing&Invoice/mock/pharmacyMedicines.mock";
import selfStaffPurchaseConfig from "@/master_modules/Billing&Invoice/config/selfStaffPurchase.config";

import PharmacyBillingStepper from "../RegisteredPatient/PharmacyBillingStepper/PharmacyBillingStepper";

import "./PharmacyMedicines.css";
import "../RegisteredPatient/PharmacyBillingStepper/PharmacyBillingStepper.css";

const PharmacyMedicines = ({
  patient = null,
  customer = null,
  billingData = null,
  customerType = "registered-patient",
  onBack,
  onClose,
  onContinue,
  onStepChange,
}) => {
  /* =========================================================
     CONFIG
  ========================================================= */

  const config = pharmacyMedicinesConfig || {};
  const mock = pharmacyMedicinesMock || {};

  const pageConfig = config?.page || {};
  const customerConfig = config?.customer || {};
  const prescriptionConfig =
    config?.prescription || {};
  const searchConfig = config?.search || {};
  const availableConfig =
    config?.availableMedicines || {};
  const selectedConfig =
    config?.selectedMedicines || {};
  const summaryConfig =
    config?.summary || {};
  const footerConfig =
    config?.footer || {};
  const billingConfig =
    config?.billing || {};

  /* =========================================================
     STAFF CONFIG
     
     Existing selfStaffPurchase config se fields liye ja rahe
     hain. UI hardcoded nahi hai.
  ========================================================= */

  const staffDetailsConfig =
    selfStaffPurchaseConfig?.staffDetails || {};

  const staffFields = Array.isArray(
    staffDetailsConfig?.fields
  )
    ? staffDetailsConfig.fields
    : [];

  /* =========================================================
     CUSTOMER TYPE
  ========================================================= */

  const normalizedCustomerType = String(
    customerType ||
      billingData?.customerType ||
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

  /* =========================================================
     ICONS
  ========================================================= */

  const PageIcon =
    pageConfig?.icons?.page ||
    MedicationOutlined;

  const BackIcon =
    pageConfig?.icons?.back ||
    ArrowBackOutlined;

  const CloseIcon =
    pageConfig?.icons?.close ||
    CloseOutlined;

  const SearchIcon =
    searchConfig?.icon ||
    SearchOutlined;

  const PrescriptionIcon =
    prescriptionConfig?.icon ||
    DescriptionOutlined;

  const AvailableIcon =
    availableConfig?.icon ||
    LocalPharmacyOutlined;

  const SelectedIcon =
    selectedConfig?.icon ||
    ShoppingCartOutlined;

  const SummaryIcon =
    summaryConfig?.icon ||
    ReceiptLongOutlined;

  /* =========================================================
     CUSTOMER / PATIENT / STAFF DATA

     Registered:
       patient
       ↓
       billingData.patient
       ↓
       mock.patient

     Walk-in:
       customer
       ↓
       billingData.walkInCustomer
       ↓
       billingData.customer

     Staff:
       patient
       ↓
       billingData.staff
       ↓
       billingData.patient
  ========================================================= */

  const currentCustomer = isWalkInCustomer
    ? (
        customer ||
        billingData?.walkInCustomer ||
        billingData?.customer ||
        null
      )
    : isSelfStaffPurchase
    ? (
        patient ||
        billingData?.staff ||
        billingData?.patient ||
        null
      )
    : (
        patient ||
        billingData?.patient ||
        mock?.patient ||
        null
      );

  /* =========================================================
     PRESCRIPTION

     Registered Patient:
       SHOW

     Walk-in:
       HIDE

     Self / Staff:
       HIDE
  ========================================================= */

  const prescription = isRegisteredPatient
    ? mock?.prescription || null
    : null;

  const availableMedicines =
    Array.isArray(
      mock?.availableMedicines
    )
      ? mock.availableMedicines
      : [];

  const prescriptionMedicines =
    Array.isArray(
      prescription?.medicines
    )
      ? prescription.medicines
      : [];

  /* =========================================================
     STATE
  ========================================================= */

  const [searchTerm, setSearchTerm] =
    useState("");

  const [searchSubmitted, setSearchSubmitted] =
    useState(false);

  const currentStep = 2;

  const [selectedMedicines, setSelectedMedicines] =
    useState(() => {
      if (
        !Array.isArray(
          mock?.initialSelectedMedicines
        )
      ) {
        return [];
      }

      return mock.initialSelectedMedicines.map(
        (medicine) => {
          const inventoryMedicine =
            availableMedicines.find(
              (item) =>
                item?.id === medicine?.id
            );

          const mergedMedicine = {
            ...(inventoryMedicine || {}),
            ...medicine,
          };

          const minimumQuantity =
            Number(
              selectedConfig?.quantity?.min
            ) || 1;

          const quantity = Math.max(
            Number(
              mergedMedicine?.quantity
            ) || 1,
            minimumQuantity
          );

          return {
            ...mergedMedicine,
            quantity,
            discount:
              Number(
                mergedMedicine?.discount
              ) || 0,
            tax:
              Number(
                mergedMedicine?.tax
              ) || 0,
            total:
              quantity *
              (Number(
                mergedMedicine?.sellingPrice
              ) || 0),
          };
        }
      );
    });

  /* =========================================================
     HELPERS
  ========================================================= */

  const getNestedValue = (
    object,
    path
  ) => {
    if (
      !object ||
      !path
    ) {
      return undefined;
    }

    return String(path)
      .split(".")
      .reduce(
        (value, key) =>
          value?.[key],
        object
      );
  };

  const getFieldValue = (
    object,
    field,
    fallback = "-"
  ) => {
    const value =
      getNestedValue(
        object,
        field
      );

    if (
      value === undefined ||
      value === null ||
      value === ""
    ) {
      return fallback;
    }

    return value;
  };

  const formatCurrency = (
    value
  ) => {
    const amount =
      Number(value) || 0;

    const decimalPlaces =
      Number(
        summaryConfig?.decimalPlaces
      ) >= 0
        ? Number(
            summaryConfig.decimalPlaces
          )
        : 2;

    return `${
      summaryConfig?.currency ||
      "₹"
    }${amount.toFixed(
      decimalPlaces
    )}`;
  };

  /* =========================================================
     MEDICINE VALIDATION
  ========================================================= */

  const isMedicineExpired = (
    medicine
  ) => {
    if (
      !billingConfig?.preventExpiredMedicine ||
      !medicine?.expiryDate
    ) {
      return false;
    }

    const expiryDate =
      new Date(
        medicine.expiryDate
      );

    if (
      Number.isNaN(
        expiryDate.getTime()
      )
    ) {
      return false;
    }

    const today =
      new Date();

    today.setHours(
      0,
      0,
      0,
      0
    );

    expiryDate.setHours(
      0,
      0,
      0,
      0
    );

    return (
      expiryDate < today
    );
  };

  const isOutOfStock = (
    medicine
  ) => {
    if (
      !billingConfig?.validateStock
    ) {
      return false;
    }

    return (
      Number(
        medicine?.availableStock
      ) <= 0
    );
  };

  const isMedicineSelected = (
    medicineId
  ) => {
    return selectedMedicines.some(
      (item) =>
        item?.id === medicineId
    );
  };

  /* =========================================================
     FIND INVENTORY MEDICINE
  ========================================================= */

  const findInventoryMedicine = (
    prescriptionMedicine
  ) => {
    if (
      !prescriptionMedicine
    ) {
      return null;
    }

    const prescriptionId =
      prescriptionMedicine?.id;

    const prescriptionCode =
      prescriptionMedicine?.medicineCode;

    const prescriptionName =
      String(
        prescriptionMedicine
          ?.medicineName || ""
      )
        .trim()
        .toLowerCase();

    return (
      availableMedicines.find(
        (medicine) =>
          prescriptionId &&
          medicine?.id ===
            prescriptionId
      ) ||
      availableMedicines.find(
        (medicine) =>
          prescriptionCode &&
          medicine?.medicineCode ===
            prescriptionCode
      ) ||
      availableMedicines.find(
        (medicine) =>
          prescriptionName &&
          String(
            medicine?.medicineName ||
              ""
          )
            .trim()
            .toLowerCase() ===
            prescriptionName
      ) ||
      null
    );
  };

  /* =========================================================
     CUSTOMER DATA NORMALIZATION

     Same object ko Registered / Walk-in / Staff ke liye
     normalize kiya gaya hai.
  ========================================================= */

  const customerData =
    currentCustomer
      ? {
          ...currentCustomer,

          patientName:
            currentCustomer?.patientName ||
            currentCustomer?.customerName ||
            currentCustomer?.staffName ||
            currentCustomer?.name ||
            "-",

          customerName:
            currentCustomer?.customerName ||
            currentCustomer?.staffName ||
            currentCustomer?.patientName ||
            currentCustomer?.name ||
            "-",

          employeeId:
            currentCustomer?.employeeId ||
            currentCustomer?.empId ||
            "-",

          staffName:
            currentCustomer?.staffName ||
            currentCustomer?.name ||
            currentCustomer?.patientName ||
            "-",

          department:
            currentCustomer?.department ||
            "-",

          designation:
            currentCustomer?.designation ||
            "-",

          uhid:
            currentCustomer?.uhid ||
            currentCustomer?.UHID ||
            "-",

          ageGender:
            currentCustomer?.ageGender ||
            [
              currentCustomer?.age,
              currentCustomer?.gender,
            ]
              .filter(Boolean)
              .join(" / ") ||
            "-",

          mobile:
            currentCustomer?.mobile ||
            currentCustomer?.phone ||
            "-",
        }
      : null;

  /* =========================================================
     CUSTOMER FIELDS

     Staff ke liye:
       selfStaffPurchaseConfig.staffDetails.fields

     Baaki flows ke liye:
       pharmacyMedicinesConfig.customer.fields
  ========================================================= */

  const customerFields =
    isSelfStaffPurchase
      ? staffFields
      : customerConfig?.fields || [];

  /* =========================================================
     PRESCRIPTION DATA
  ========================================================= */

  const filteredPrescriptionMedicines =
    isRegisteredPatient
      ? prescriptionMedicines
      : [];

  /* =========================================================
     SEARCH
  ========================================================= */

  const normalizedSearch =
    searchTerm
      .trim()
      .toLowerCase();

  const searchFields =
    Array.isArray(
      searchConfig?.fields
    )
      ? searchConfig.fields
      : [];

  const filteredAvailableMedicines =
    normalizedSearch
      ? availableMedicines.filter(
          (medicine) =>
            searchFields.some(
              (field) => {
                const value =
                  medicine?.[field];

                return String(
                  value ?? ""
                )
                  .toLowerCase()
                  .includes(
                    normalizedSearch
                  );
              }
            )
        )
      : availableMedicines;

  const visibleAvailableMedicines =
    filteredAvailableMedicines.slice(
      0,
      5
    );

  /* =========================================================
     BILL SUMMARY
  ========================================================= */

  let subtotal = 0;
  let discount = 0;
  let tax = 0;

  selectedMedicines.forEach(
    (medicine) => {
      const quantity =
        Number(
          medicine?.quantity
        ) || 0;

      const unitPrice =
        Number(
          medicine?.sellingPrice
        ) || 0;

      const itemSubtotal =
        quantity *
        unitPrice;

      const itemDiscount =
        billingConfig?.calculateDiscount
          ? Math.max(
              Number(
                medicine?.discount
              ) || 0,
              0
            )
          : 0;

      const taxableAmount =
        Math.max(
          itemSubtotal -
            itemDiscount,
          0
        );

      const gstPercentage =
        billingConfig?.calculateTax
          ? Number(
              medicine?.gstPercentage
            ) || 0
          : 0;

      const itemTax =
        (taxableAmount *
          gstPercentage) /
        100;

      subtotal +=
        itemSubtotal;

      discount +=
        itemDiscount;

      tax += itemTax;
    }
  );

  const taxableAmount =
    Math.max(
      subtotal -
        discount,
      0
    );

  const grandTotal =
    taxableAmount +
    tax;

  const billSummary = {
    subtotal,
    discount,
    taxableAmount,
    tax,
    grandTotal,
  };

  /* =========================================================
     STEPPER
  ========================================================= */

  const handleStepChange = (
    step
  ) => {
    if (!step?.id) {
      return;
    }

    if (
      typeof onStepChange ===
      "function"
    ) {
      onStepChange(step);
    }
  };

  /* =========================================================
     PAGE HANDLERS
  ========================================================= */

  const handleBack = () => {
    if (
      typeof onBack ===
      "function"
    ) {
      onBack();
    }
  };

  const handleClose = () => {
    if (
      typeof onClose ===
      "function"
    ) {
      onClose();
    }
  };

  /* =========================================================
     SEARCH HANDLERS
  ========================================================= */

  const handleSearch = () => {
    setSearchSubmitted(
      true
    );
  };

  const handleSearchKeyDown = (
    event
  ) => {
    if (
      event.key ===
      "Enter"
    ) {
      handleSearch();
    }
  };

  const handleClearSearch =
    () => {
      setSearchTerm("");
      setSearchSubmitted(
        false
      );
    };

  /* =========================================================
     ADD MEDICINE
  ========================================================= */

  const handleAddMedicine = (
    medicine
  ) => {
    if (!medicine?.id) {
      return;
    }

    if (
      billingConfig?.validateStock &&
      Number(
        medicine?.availableStock
      ) <= 0
    ) {
      return;
    }

    if (
      billingConfig?.preventExpiredMedicine &&
      isMedicineExpired(
        medicine
      )
    ) {
      return;
    }

    if (
      isMedicineSelected(
        medicine.id
      )
    ) {
      return;
    }

    const minimumQuantity =
      Number(
        selectedConfig
          ?.quantity?.min
      ) || 1;

    const initialQuantity =
      Math.max(
        minimumQuantity,
        1
      );

    setSelectedMedicines(
      (previous) => [
        ...previous,
        {
          ...medicine,
          quantity:
            initialQuantity,
          discount: 0,
          tax: 0,
          total:
            initialQuantity *
            (Number(
              medicine?.sellingPrice
            ) || 0),
        },
      ]
    );
  };

  /* =========================================================
     ADD PRESCRIPTION MEDICINE
  ========================================================= */

  const handleAddPrescriptionMedicine =
    (
      prescriptionMedicine
    ) => {
      const inventoryMedicine =
        findInventoryMedicine(
          prescriptionMedicine
        );

      if (
        !inventoryMedicine
      ) {
        return;
      }

      handleAddMedicine(
        inventoryMedicine
      );
    };

  /* =========================================================
     INCREASE QUANTITY
  ========================================================= */

  const handleIncreaseQuantity =
    (medicineId) => {
      setSelectedMedicines(
        (previous) =>
          previous.map(
            (medicine) => {
              if (
                medicine?.id !==
                medicineId
              ) {
                return medicine;
              }

              const currentQuantity =
                Number(
                  medicine?.quantity
                ) || 0;

              const stock =
                Number(
                  medicine?.availableStock
                ) || 0;

              const nextQuantity =
                currentQuantity +
                1;

              if (
                billingConfig?.validateStock &&
                nextQuantity >
                  stock
              ) {
                return medicine;
              }

              return {
                ...medicine,
                quantity:
                  nextQuantity,
                total:
                  nextQuantity *
                  (Number(
                    medicine?.sellingPrice
                  ) || 0),
              };
            }
          )
      );
    };

  /* =========================================================
     DECREASE QUANTITY
  ========================================================= */

  const handleDecreaseQuantity =
    (medicineId) => {
      setSelectedMedicines(
        (previous) =>
          previous.map(
            (medicine) => {
              if (
                medicine?.id !==
                medicineId
              ) {
                return medicine;
              }

              const currentQuantity =
                Number(
                  medicine?.quantity
                ) || 0;

              const minimumQuantity =
                Number(
                  selectedConfig
                    ?.quantity?.min
                ) || 1;

              const nextQuantity =
                Math.max(
                  currentQuantity -
                    1,
                  minimumQuantity
                );

              return {
                ...medicine,
                quantity:
                  nextQuantity,
                total:
                  nextQuantity *
                  (Number(
                    medicine?.sellingPrice
                  ) || 0),
              };
            }
          )
      );
    };

  /* =========================================================
     REMOVE MEDICINE
  ========================================================= */

  const handleRemoveMedicine =
    (medicineId) => {
      setSelectedMedicines(
        (previous) =>
          previous.filter(
            (medicine) =>
              medicine?.id !==
              medicineId
          )
      );
    };

  /* =========================================================
     CONTINUE TO PAYMENT

     IMPORTANT:
     Staff:
       staff -> customerData
       patient -> null
       prescription -> null
  ========================================================= */

  const handleContinue = () => {
    if (
      billingConfig?.requireMedicineSelection &&
      selectedMedicines.length ===
        0
    ) {
      return;
    }

    const finalBillingData = {
      customerType:
        normalizedCustomerType,

      patient:
        isWalkInCustomer ||
        isSelfStaffPurchase
          ? null
          : customerData,

      customer:
        isWalkInCustomer
          ? customerData
          : null,

      walkInCustomer:
        isWalkInCustomer
          ? customerData
          : null,

      staff:
        isSelfStaffPurchase
          ? customerData
          : null,

      prescription:
        isRegisteredPatient
          ? prescription
          : null,

      medicines:
        selectedMedicines,

      summary:
        billSummary,
    };

    if (
      typeof onContinue ===
      "function"
    ) {
      onContinue(
        finalBillingData
      );
    }
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <section className="pharmacy-medicines">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="pharmacy-medicines__header">

        <div className="pharmacy-medicines__header-left">

          {pageConfig?.showBackButton && (
            <button
              type="button"
              className="pharmacy-medicines__icon-button"
              onClick={
                handleBack
              }
              aria-label="Back"
            >
              <BackIcon />
            </button>
          )}

          <div className="pharmacy-medicines__header-icon">
            <PageIcon />
          </div>

          <div className="pharmacy-medicines__header-content">

            <h1 className="pharmacy-medicines__title">
              {pageConfig?.title ||
                "Pharmacy Medicines"}
            </h1>

            {pageConfig?.subtitle && (
              <p className="pharmacy-medicines__subtitle">
                {
                  pageConfig.subtitle
                }
              </p>
            )}

          </div>

        </div>

        {pageConfig?.showCloseButton && (
          <button
            type="button"
            className="pharmacy-medicines__close-button"
            onClick={
              handleClose
            }
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        )}

      </header>

      {/* =====================================================
          BILLING STEPPER
      ===================================================== */}

      <div className="pharmacy-medicines__stepper">

        <PharmacyBillingStepper
          currentStep={
            currentStep
          }
          onStepChange={
            handleStepChange
          }
        />

      </div>

      {/* =====================================================
          CUSTOMER INFORMATION

          Existing UI classes preserved.
      ===================================================== */}

      {customerConfig?.enabled &&
        customerData && (

          <section className="pharmacy-medicines__customer">

            <div className="pharmacy-medicines__section-header">

              <div className="pharmacy-medicines__section-heading">

                <div className="pharmacy-medicines__section-icon">
                  {React.createElement(
                    customerConfig?.icon ||
                      PersonOutlined
                  )}
                </div>

                <div>

                  <h2>
                    {isSelfStaffPurchase
                      ? (
                          staffDetailsConfig?.title ||
                          "Staff Details"
                        )
                      : isWalkInCustomer
                      ? (
                          customerConfig?.title ||
                          "Customer Information"
                        )
                      : (
                          customerConfig?.title ||
                          "Patient Information"
                        )}
                  </h2>

                  <p>
                    {isSelfStaffPurchase
                      ? "Selected staff member details"
                      : customerConfig?.subtitle}
                  </p>

                </div>

              </div>

            </div>

            <div className="pharmacy-medicines__customer-grid">

              {customerFields.map(
                (field) => {

                  const dynamicLabel =
                    isSelfStaffPurchase
                      ? field?.label
                      : isWalkInCustomer &&
                        field?.field ===
                          "patientName"
                      ? "CUSTOMER NAME"
                      : field?.label;

                  return (
                    <div
                      key={
                        field?.id
                      }
                      className="pharmacy-medicines__customer-item"
                    >

                      <span>
                        {
                          dynamicLabel
                        }
                      </span>

                      <strong>
                        {getFieldValue(
                          customerData,
                          field?.field,
                          field?.fallback
                        )}
                      </strong>

                    </div>
                  );
                }
              )}

            </div>

          </section>
        )}

      {/* =====================================================
          PRESCRIPTION MEDICINES

          ONLY REGISTERED PATIENT
      ===================================================== */}

      {prescriptionConfig?.enabled &&
        isRegisteredPatient &&
        prescription && (

          <section className="pharmacy-medicines__prescription">

            <div className="pharmacy-medicines__section-header">

              <div className="pharmacy-medicines__section-heading">

                <div className="pharmacy-medicines__section-icon">
                  <PrescriptionIcon />
                </div>

                <div>

                  <h2>
                    {
                      prescriptionConfig.title
                    }
                  </h2>

                  {prescriptionConfig?.subtitle && (
                    <p>
                      {
                        prescriptionConfig.subtitle
                      }
                    </p>
                  )}

                </div>

              </div>

              {prescriptionConfig?.showPrescriptionNumber && (
                <div className="pharmacy-medicines__prescription-number">

                  <span>
                    {
                      prescriptionConfig
                        ?.prescriptionNumber
                        ?.label
                    }
                  </span>

                  <strong>
                    {getFieldValue(
                      prescription,
                      prescriptionConfig
                        ?.prescriptionNumber
                        ?.field,
                      prescription?.id ||
                        "-"
                    )}
                  </strong>

                </div>
              )}

            </div>

            {filteredPrescriptionMedicines.length >
            0 ? (

              <div className="pharmacy-medicines__prescription-list">

                {filteredPrescriptionMedicines.map(
                  (
                    medicine
                  ) => {

                    const inventoryMedicine =
                      findInventoryMedicine(
                        medicine
                      );

                    const added =
                      inventoryMedicine
                        ? isMedicineSelected(
                            inventoryMedicine.id
                          )
                        : false;

                    const expired =
                      inventoryMedicine
                        ? isMedicineExpired(
                            inventoryMedicine
                          )
                        : false;

                    const outOfStock =
                      inventoryMedicine
                        ? isOutOfStock(
                            inventoryMedicine
                          )
                        : false;

                    const AddIcon =
                      added
                        ? (
                            prescriptionConfig
                              ?.action
                              ?.selectedIcon ||
                            CheckCircleOutlined
                          )
                        : (
                            prescriptionConfig
                              ?.action
                              ?.icon ||
                            AddOutlined
                          );

                    return (
                      <div
                        key={
                          medicine?.id ||
                          medicine?.medicineCode ||
                          medicine?.medicineName
                        }
                        className="pharmacy-medicines__prescription-item"
                      >

                        <div className="pharmacy-medicines__prescription-info">

                          <strong>
                            {
                              medicine?.medicineName ||
                              "-"
                            }
                          </strong>

                          <span>
                            {
                              medicine?.medicineCode ||
                              "-"
                            }
                          </span>

                        </div>

                        <div className="pharmacy-medicines__prescription-meta">

                          {medicine?.dosage && (
                            <span>
                              {
                                medicine.dosage
                              }
                            </span>
                          )}

                          {medicine?.frequency && (
                            <span>
                              {
                                medicine.frequency
                              }
                            </span>
                          )}

                          {medicine?.duration && (
                            <span>
                              {
                                medicine.duration
                              }
                            </span>
                          )}

                          {medicine?.quantity && (
                            <span>
                              Qty:{" "}
                              {
                                medicine.quantity
                              }
                            </span>
                          )}

                        </div>

                        <button
                          type="button"
                          className="pharmacy-medicines__prescription-add-button"
                          disabled={
                            added ||
                            expired ||
                            outOfStock ||
                            !inventoryMedicine
                          }
                          onClick={() =>
                            handleAddPrescriptionMedicine(
                              medicine
                            )
                          }
                        >

                          <AddIcon />

                          <span>
                            {added
                              ? (
                                  prescriptionConfig
                                    ?.action
                                    ?.selectedLabel ||
                                  "Added"
                                )
                              : outOfStock
                              ? (
                                  prescriptionConfig
                                    ?.action
                                    ?.outOfStockLabel ||
                                  "Out of Stock"
                                )
                              : expired
                              ? (
                                  prescriptionConfig
                                    ?.action
                                    ?.expiredLabel ||
                                  "Expired"
                                )
                              : !inventoryMedicine
                              ? (
                                  prescriptionConfig
                                    ?.action
                                    ?.unavailableLabel ||
                                  "Unavailable"
                                )
                              : (
                                  prescriptionConfig
                                    ?.action
                                    ?.label ||
                                  "Add"
                                )}
                          </span>

                        </button>

                      </div>
                    );
                  }
                )}

              </div>

            ) : (

              <div className="pharmacy-medicines__empty">

                <strong>
                  {
                    prescriptionConfig
                      ?.emptyState
                      ?.title
                  }
                </strong>

                <span>
                  {
                    prescriptionConfig
                      ?.emptyState
                      ?.message
                  }
                </span>

              </div>
            )}

          </section>
        )}

      {/* =====================================================
          SEARCH
      ===================================================== */}

      {searchConfig?.enabled && (

        <section className="pharmacy-medicines__search">

          <div className="pharmacy-medicines__search-wrapper">

            <SearchIcon />

            <input
              type="text"
              value={
                searchTerm
              }
              placeholder={
                searchConfig?.placeholder ||
                "Search medicine"
              }
              onChange={(
                event
              ) =>
                setSearchTerm(
                  event.target.value
                )
              }
              onKeyDown={
                handleSearchKeyDown
              }
            />

            {searchTerm && (
              <button
                type="button"
                onClick={
                  handleClearSearch
                }
                aria-label="Clear search"
              >
                <CloseOutlined />
              </button>
            )}

            {searchConfig?.button?.enabled && (
              <button
                type="button"
                className="pharmacy-medicines__search-button"
                onClick={
                  handleSearch
                }
              >
                {
                  searchConfig
                    ?.button
                    ?.label
                }
              </button>
            )}

          </div>

          {searchSubmitted &&
            normalizedSearch &&
            filteredAvailableMedicines.length ===
              0 && (
              <div className="pharmacy-medicines__search-empty">
                {
                  searchConfig
                    ?.emptyMessage ||
                  "No medicines found."
                }
              </div>
            )}

        </section>
      )}

      {/* =====================================================
          AVAILABLE MEDICINES
      ===================================================== */}

      {availableConfig?.enabled && (

        <section className="pharmacy-medicines__available">

          <div className="pharmacy-medicines__section-header">

            <div className="pharmacy-medicines__section-heading">

              <div className="pharmacy-medicines__section-icon">
                <AvailableIcon />
              </div>

              <div>

                <h2>
                  {
                    availableConfig?.title
                  }
                </h2>

                {availableConfig?.subtitle && (
                  <p>
                    {
                      availableConfig.subtitle
                    }
                  </p>
                )}

              </div>

            </div>

          </div>

          {visibleAvailableMedicines.length >
          0 ? (

            <div className="pharmacy-medicines__available-table-wrapper">

              <table className="pharmacy-medicines__table">

                <thead>

                  <tr>

                    <th>
                      Medicine
                    </th>

                    <th>
                      Batch
                    </th>

                    <th>
                      Expiry
                    </th>

                    <th>
                      Stock
                    </th>

                    <th>
                      Unit Price
                    </th>

                    <th>
                      Action
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {visibleAvailableMedicines.map(
                    (medicine) => {

                      const selected =
                        isMedicineSelected(
                          medicine?.id
                        );

                      const expired =
                        isMedicineExpired(
                          medicine
                        );

                      const outOfStock =
                        isOutOfStock(
                          medicine
                        );

                      return (
                        <tr
                          key={
                            medicine?.id
                          }
                        >

                          <td>

                            <div className="pharmacy-medicines__medicine-name">

                              <strong>
                                {
                                  medicine?.medicineName
                                }
                              </strong>

                              <span>
                                {
                                  medicine?.medicineCode
                                }
                              </span>

                            </div>

                          </td>

                          <td>
                            {
                              medicine?.batchNumber ||
                              "-"
                            }
                          </td>

                          <td>
                            {
                              medicine?.expiryDate ||
                              "-"
                            }
                          </td>

                          <td>
                            {
                              medicine?.availableStock ??
                              "-"
                            }
                          </td>

                          <td>
                            {formatCurrency(
                              medicine?.sellingPrice
                            )}
                          </td>

                          <td>

                            <button
                              type="button"
                              className="pharmacy-medicines__add-button"
                              disabled={
                                selected ||
                                outOfStock ||
                                expired
                              }
                              onClick={() =>
                                handleAddMedicine(
                                  medicine
                                )
                              }
                            >

                              {selected ? (
                                <>
                                  <CheckCircleOutlined />

                                  <span>
                                    {
                                      availableConfig
                                        ?.action
                                        ?.selectedLabel ||
                                      "Added"
                                    }
                                  </span>
                                </>
                              ) : (
                                <>
                                  <AddOutlined />

                                  <span>
                                    {outOfStock
                                      ? (
                                          availableConfig
                                            ?.action
                                            ?.outOfStockLabel ||
                                          "Out of Stock"
                                        )
                                      : expired
                                      ? (
                                          availableConfig
                                            ?.action
                                            ?.expiredLabel ||
                                          "Expired"
                                        )
                                      : (
                                          availableConfig
                                            ?.action
                                            ?.label ||
                                          "Add"
                                        )}
                                  </span>
                                </>
                              )}

                            </button>

                          </td>

                        </tr>
                      );
                    }
                  )}

                </tbody>

              </table>

            </div>

          ) : (

            <div className="pharmacy-medicines__empty">

              <strong>
                {
                  availableConfig
                    ?.emptyState
                    ?.title
                }
              </strong>

              <span>
                {
                  availableConfig
                    ?.emptyState
                    ?.message
                }
              </span>

            </div>
          )}

        </section>
      )}

      {/* =====================================================
          SELECTED MEDICINES
      ===================================================== */}

      {selectedConfig?.enabled && (

        <section className="pharmacy-medicines__selected">

          <div className="pharmacy-medicines__section-header">

            <div className="pharmacy-medicines__section-heading">

              <div className="pharmacy-medicines__section-icon">
                <SelectedIcon />
              </div>

              <div>

                <h2>
                  {
                    selectedConfig?.title
                  }
                </h2>

                {selectedConfig?.subtitle && (
                  <p>
                    {
                      selectedConfig.subtitle
                    }
                  </p>
                )}

              </div>

            </div>

            <span className="pharmacy-medicines__count">

              {
                selectedMedicines.length
              }{" "}

              {
                selectedConfig?.countLabel ||
                "Items"
              }

            </span>

          </div>

          {selectedMedicines.length >
          0 ? (

            <div className="pharmacy-medicines__selected-table-wrapper">

              <table className="pharmacy-medicines__table pharmacy-medicines__table--selected">

                <thead>

                  <tr>

                    <th>
                      Medicine
                    </th>

                    <th>
                      Batch
                    </th>

                    <th>
                      Expiry
                    </th>

                    <th>
                      Unit Price
                    </th>

                    <th>
                      Quantity
                    </th>

                    <th>
                      Discount
                    </th>

                    <th>
                      Total
                    </th>

                    <th>
                      Action
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {selectedMedicines.map(
                    (medicine) => {

                      const quantity =
                        Number(
                          medicine?.quantity
                        ) || 0;

                      const unitPrice =
                        Number(
                          medicine?.sellingPrice
                        ) || 0;

                      const itemDiscount =
                        Number(
                          medicine?.discount
                        ) || 0;

                      const gstPercentage =
                        billingConfig?.calculateTax
                          ? Number(
                              medicine?.gstPercentage
                            ) || 0
                          : 0;

                      const itemSubtotal =
                        quantity *
                        unitPrice;

                      const taxableItemAmount =
                        Math.max(
                          itemSubtotal -
                            itemDiscount,
                          0
                        );

                      const itemTax =
                        (taxableItemAmount *
                          gstPercentage) /
                        100;

                      const itemTotal =
                        taxableItemAmount +
                        itemTax;

                      return (
                        <tr
                          key={
                            medicine?.id
                          }
                        >

                          <td>

                            <div className="pharmacy-medicines__medicine-name">

                              <strong>
                                {
                                  medicine?.medicineName
                                }
                              </strong>

                              <span>
                                {
                                  medicine?.medicineCode
                                }
                              </span>

                            </div>

                          </td>

                          <td>
                            {
                              medicine?.batchNumber ||
                              "-"
                            }
                          </td>

                          <td>
                            {
                              medicine?.expiryDate ||
                              "-"
                            }
                          </td>

                          <td>
                            {formatCurrency(
                              medicine?.sellingPrice
                            )}
                          </td>

                          <td>

                            <div className="pharmacy-medicines__quantity">

                              <button
                                type="button"
                                onClick={() =>
                                  handleDecreaseQuantity(
                                    medicine?.id
                                  )
                                }
                                disabled={
                                  quantity <=
                                  (
                                    Number(
                                      selectedConfig
                                        ?.quantity
                                        ?.min
                                    ) || 1
                                  )
                                }
                                aria-label="Decrease quantity"
                              >
                                <RemoveOutlined />
                              </button>

                              <span>
                                {
                                  quantity
                                }
                              </span>

                              <button
                                type="button"
                                onClick={() =>
                                  handleIncreaseQuantity(
                                    medicine?.id
                                  )
                                }
                                disabled={
                                  billingConfig?.validateStock &&
                                  quantity >=
                                    Number(
                                      medicine?.availableStock
                                    )
                                }
                                aria-label="Increase quantity"
                              >
                                <AddOutlined />
                              </button>

                            </div>

                          </td>

                          <td>
                            {formatCurrency(
                              itemDiscount
                            )}
                          </td>

                          <td className="pharmacy-medicines__total">
                            {formatCurrency(
                              itemTotal
                            )}
                          </td>

                          <td>

                            <button
                              type="button"
                              className="pharmacy-medicines__remove-button"
                              onClick={() =>
                                handleRemoveMedicine(
                                  medicine?.id
                                )
                              }
                              aria-label="Remove medicine"
                            >
                              <DeleteOutlineOutlined />
                            </button>

                          </td>

                        </tr>
                      );
                    }
                  )}

                </tbody>

              </table>

            </div>

          ) : (

            <div className="pharmacy-medicines__empty">

              <strong>
                {
                  selectedConfig
                    ?.emptyState
                    ?.title
                }
              </strong>

              <span>
                {
                  selectedConfig
                    ?.emptyState
                    ?.message
                }
              </span>

            </div>
          )}

        </section>
      )}

      {/* =====================================================
          SUMMARY
      ===================================================== */}

      {summaryConfig?.enabled && (

        <section className="pharmacy-medicines__summary">

          <div className="pharmacy-medicines__summary-header">

            <div className="pharmacy-medicines__section-heading">

              <div className="pharmacy-medicines__section-icon">
                <SummaryIcon />
              </div>

              <div>

                <h2>
                  {
                    summaryConfig?.title
                  }
                </h2>

                {summaryConfig?.subtitle && (
                  <p>
                    {
                      summaryConfig.subtitle
                    }
                  </p>
                )}

              </div>

            </div>

          </div>

          <div className="pharmacy-medicines__summary-body">

            {(
              summaryConfig?.rows ||
              []
            ).map(
              (row) => (
                <div
                  key={
                    row?.id
                  }
                  className="pharmacy-medicines__summary-row"
                >

                  <span>
                    {
                      row?.label
                    }
                  </span>

                  <strong>
                    {formatCurrency(
                      billSummary?.[
                        row?.field
                      ]
                    )}
                  </strong>

                </div>
              )
            )}

            {summaryConfig
              ?.grandTotal
              ?.enabled && (

              <div className="pharmacy-medicines__summary-grand-total">

                <span>
                  {
                    summaryConfig
                      ?.grandTotal
                      ?.label
                  }
                </span>

                <strong>
                  {formatCurrency(
                    billSummary?.[
                      summaryConfig
                        ?.grandTotal
                        ?.field
                    ]
                  )}
                </strong>

              </div>
            )}

          </div>

        </section>
      )}

      {/* =====================================================
          FOOTER
      ===================================================== */}

      {footerConfig?.enabled && (

        <footer className="pharmacy-medicines__footer">

          <div className="pharmacy-medicines__footer-left">

            {footerConfig?.cancel
              ?.enabled && (

              <button
                type="button"
                className="pharmacy-medicines__cancel-button"
                onClick={
                  handleClose
                }
              >

                {React.createElement(
                  footerConfig
                    ?.cancel
                    ?.icon ||
                    CloseOutlined
                )}

                <span>
                  {
                    footerConfig
                      ?.cancel
                      ?.label
                  }
                </span>

              </button>
            )}

          </div>

          <div className="pharmacy-medicines__footer-right">

            {footerConfig?.back
              ?.enabled && (

              <button
                type="button"
                className="pharmacy-medicines__back-button"
                onClick={
                  handleBack
                }
              >

                {React.createElement(
                  footerConfig
                    ?.back
                    ?.icon ||
                    ArrowBackOutlined
                )}

                <span>
                  {
                    footerConfig
                      ?.back
                      ?.label
                  }
                </span>

              </button>
            )}

            {footerConfig?.continue
              ?.enabled && (

              <button
                type="button"
                className="pharmacy-medicines__continue-button"
                disabled={
                  footerConfig
                    ?.continue
                    ?.disabledWithoutMedicine &&
                  selectedMedicines.length ===
                    0
                }
                onClick={
                  handleContinue
                }
              >

                <span>
                  {
                    footerConfig
                      ?.continue
                      ?.label
                  }
                </span>

                {React.createElement(
                  footerConfig
                    ?.continue
                    ?.icon ||
                    ArrowForwardOutlined
                )}

              </button>
            )}

          </div>

        </footer>
      )}

    </section>
  );
};

export default PharmacyMedicines;