import React, { useEffect, useMemo, useState } from "react";

import CustomerTypeHeader from "./CustomerTypeHeader";
import CustomerTypeGrid from "./CustomerTypeGrid";
import CustomerTypeFooter from "./CustomerTypeFooter";

import pharmacyCustomerTypeConfig from "../../../config/pharmacyCustomerType.config";
import pharmacyCustomerTypeMock from "../../../mock/pharmacyCustomerType.mock";

import "./CustomerTypeSelection.css";

const PharmacyBilling = ({
  config = pharmacyCustomerTypeConfig,
  customerTypes = pharmacyCustomerTypeMock,
  initialCustomerType = null,
  onClose,
  onCancel,
  onNext,
}) => {
  /* =====================================================
     DEFAULT CUSTOMER TYPE
     ===================================================== */

  const defaultCustomerType = useMemo(() => {
    if (initialCustomerType) {
      return initialCustomerType;
    }

    const defaultSelectedId =
      config?.selection?.defaultSelectedId;

    if (!defaultSelectedId) {
      return null;
    }

    return (
      customerTypes.find(
        (customerType) =>
          customerType?.id === defaultSelectedId
      ) || null
    );
  }, [
    initialCustomerType,
    config?.selection?.defaultSelectedId,
    customerTypes,
  ]);


  /* =====================================================
     STATE
     ===================================================== */

  const [selectedCustomerType, setSelectedCustomerType] =
    useState(defaultCustomerType);


  /* =====================================================
     SYNC INITIAL SELECTION
     ===================================================== */

  useEffect(() => {
    setSelectedCustomerType(defaultCustomerType);
  }, [defaultCustomerType]);


  /* =====================================================
     CUSTOMER TYPE SELECT
     ===================================================== */

  const handleCustomerTypeSelect = (customerType) => {
    if (!customerType) {
      return;
    }

    if (customerType.enabled === false) {
      return;
    }

    if (
      config?.selection?.allowSelection === false
    ) {
      return;
    }

    setSelectedCustomerType(customerType);

    if (
      config?.selection?.emitSelectedCustomerType !==
      false
    ) {
      // Selection is intentionally handled locally.
      // Parent receives final selection on Next.
    }
  };


  /* =====================================================
     CANCEL / CLOSE
     ===================================================== */

  const handleCancel = () => {
    if (typeof onCancel === "function") {
      onCancel();
      return;
    }

    if (typeof onClose === "function") {
      onClose();
    }
  };


  /* =====================================================
     NEXT
     ===================================================== */

  const handleNext = (customerType) => {
    const selectedType =
      customerType || selectedCustomerType;

    if (!selectedType) {
      return;
    }

    if (selectedType.enabled === false) {
      return;
    }

    if (typeof onNext === "function") {
      onNext(selectedType);
    }
  };


  /* =====================================================
     CLOSE
     ===================================================== */

  const handleClose = () => {
    if (typeof onClose === "function") {
      onClose();
      return;
    }

    if (typeof onCancel === "function") {
      onCancel();
    }
  };


  /* =====================================================
     RENDER
     ===================================================== */

  return (
    <section
      className="customer-type-selection"
      aria-label="Pharmacy billing customer type selection"
    >

      {/* =================================================
          HEADER
      ================================================= */}

      <CustomerTypeHeader
        config={config}
        onClose={handleClose}
      />


      {/* =================================================
          CUSTOMER TYPE GRID
      ================================================= */}

      <CustomerTypeGrid
        customerTypes={customerTypes}
        config={config}
        selectedCustomerType={selectedCustomerType}
        onCustomerTypeSelect={
          handleCustomerTypeSelect
        }
      />


      {/* =================================================
          FOOTER
      ================================================= */}

      <CustomerTypeFooter
        config={config}
        selectedCustomerType={selectedCustomerType}
        onCancel={handleCancel}
        onNext={handleNext}
      />

    </section>
  );
};

export default PharmacyBilling;