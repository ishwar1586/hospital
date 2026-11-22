import React, { useMemo } from "react";

import pharmacyWalkInCustomerConfig from "@/master_modules/Billing&Invoice/config/pharmacyWalkInCustomer.config";

import "./WalkInCustomerInformation.css";

const WalkInCustomerInformation = ({
  customer = null,
  onBack,
  onClose,
  onContinue,
  config = pharmacyWalkInCustomerConfig,
}) => {
  const pageConfig = config?.page || {};
  const formConfig = config?.form || {};
  const customerConfig = config?.customer || {};
  const footerConfig = config?.footer || {};

  const PageIcon = pageConfig?.icons?.page;
  const CustomerTypeIcon =
    pageConfig?.icons?.customerType;

  const customerData = useMemo(() => {
    return {
      ...(customer || {}),
    };
  }, [customer]);

  const fields = useMemo(() => {
    if (!Array.isArray(formConfig?.fields)) {
      return [];
    }

    return formConfig.fields.filter(
      (field) => field?.enabled !== false
    );
  }, [formConfig?.fields]);

  const getFieldValue = (field) => {
    const fieldName = field?.field;

    if (!fieldName) {
      return "-";
    }

    const value =
      customerData?.[fieldName];

    if (
      value === undefined ||
      value === null ||
      String(value).trim() === ""
    ) {
      return "-";
    }

    if (field?.type === "select") {
      const matchedOption =
        field?.options?.find(
          (option) =>
            option?.value === value
        );

      if (matchedOption) {
        return matchedOption?.label || "-";
      }
    }

    return String(value);
  };

  const handleBack = () => {
    if (typeof onBack === "function") {
      onBack(customerData);
    }
  };

  const handleClose = () => {
    if (typeof onClose === "function") {
      onClose();
    }
  };

  const handleContinue = () => {
    if (typeof onContinue === "function") {
      onContinue({
        ...customerData,

        customerType:
          customerData?.customerType ||
          customerConfig?.type ||
          "walk-in-customer",

        customerTypeLabel:
          customerData?.customerTypeLabel ||
          customerConfig?.typeLabel ||
          "Walk-in Customer",
      });
    }
  };

  if (!customerData || Object.keys(customerData).length === 0) {
    return (
      <section className="walk-in-customer-information">
        <div className="walk-in-customer-information__empty">
          <div className="walk-in-customer-information__empty-icon">
            {PageIcon && <PageIcon />}
          </div>

          <h2 className="walk-in-customer-information__empty-title">
            Customer Information Not Available
          </h2>

          <p className="walk-in-customer-information__empty-text">
            Please enter customer details before continuing.
          </p>

          <button
            type="button"
            className="walk-in-customer-information__button walk-in-customer-information__button--primary"
            onClick={handleBack}
          >
            Go Back
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="walk-in-customer-information">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="walk-in-customer-information__header">

        <div className="walk-in-customer-information__header-left">

          <div className="walk-in-customer-information__page-icon">
            {PageIcon && <PageIcon />}
          </div>

          <div className="walk-in-customer-information__heading">

            <h1 className="walk-in-customer-information__title">
              {pageConfig?.title ||
                "Walk-in Customer"}
            </h1>

            {pageConfig?.subtitle && (
              <p className="walk-in-customer-information__subtitle">
                {pageConfig.subtitle}
              </p>
            )}

          </div>

        </div>


        {pageConfig?.showCustomerType && (
          <div className="walk-in-customer-information__customer-type">

            {CustomerTypeIcon && (
              <CustomerTypeIcon />
            )}

            <span>
              {customerData?.customerTypeLabel ||
                pageConfig?.customerTypeLabel ||
                customerConfig?.typeLabel ||
                "Walk-in Customer"}
            </span>

          </div>
        )}

      </div>


      {/* =====================================================
          INFORMATION CARD
      ===================================================== */}

      <div className="walk-in-customer-information__card">

        <div className="walk-in-customer-information__card-header">

          <div className="walk-in-customer-information__card-heading">

            <h2 className="walk-in-customer-information__card-title">
              Customer Information
            </h2>

            <p className="walk-in-customer-information__card-subtitle">
              Please verify the customer details before
              continuing to medicines.
            </p>

          </div>


          <div className="walk-in-customer-information__verified">

            <span className="walk-in-customer-information__verified-dot" />

            <span>
              Details Entered
            </span>

          </div>

        </div>


        {/* ===================================================
            CUSTOMER TYPE SUMMARY
        =================================================== */}

        <div className="walk-in-customer-information__summary">

          <div className="walk-in-customer-information__summary-icon">
            {CustomerTypeIcon && (
              <CustomerTypeIcon />
            )}
          </div>

          <div className="walk-in-customer-information__summary-content">

            <span className="walk-in-customer-information__summary-label">
              Customer Type
            </span>

            <strong className="walk-in-customer-information__summary-value">
              {customerData?.customerTypeLabel ||
                customerConfig?.typeLabel ||
                "Walk-in Customer"}
            </strong>

          </div>

        </div>


        {/* ===================================================
            DETAILS GRID
        =================================================== */}

        <div className="walk-in-customer-information__details">

          {fields.map((field) => {

            const FieldIcon = field?.icon;

            const value =
              getFieldValue(field);

            return (
              <div
                key={
                  field?.id ||
                  field?.field
                }
                className={[
                  "walk-in-customer-information__detail",
                  field?.type === "textarea"
                    ? "walk-in-customer-information__detail--full"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >

                <div className="walk-in-customer-information__detail-icon">
                  {FieldIcon && (
                    <FieldIcon />
                  )}
                </div>

                <div className="walk-in-customer-information__detail-content">

                  <span className="walk-in-customer-information__detail-label">
                    {field?.label || ""}
                  </span>

                  <span
                    className={[
                      "walk-in-customer-information__detail-value",
                      value === "-"
                        ? "walk-in-customer-information__detail-value--empty"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {value}
                  </span>

                </div>

              </div>
            );
          })}

        </div>

      </div>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <div className="walk-in-customer-information__footer">

        <div className="walk-in-customer-information__footer-hint">

          <span className="walk-in-customer-information__hint-icon">
            ✓
          </span>

          <span>
            Verify customer information before proceeding.
          </span>

        </div>


        <div className="walk-in-customer-information__footer-actions">

          {footerConfig?.actions?.cancel?.enabled && (
            <button
              type="button"
              className="walk-in-customer-information__button walk-in-customer-information__button--secondary"
              onClick={handleClose}
            >
              {(() => {
                const CancelIcon =
                  footerConfig?.actions?.cancel?.icon;

                return CancelIcon ? (
                  <CancelIcon />
                ) : null;
              })()}

              <span>
                {footerConfig?.actions?.cancel?.label ||
                  "Cancel"}
              </span>
            </button>
          )}


          {footerConfig?.actions?.back?.enabled && (
            <button
              type="button"
              className="walk-in-customer-information__button walk-in-customer-information__button--secondary"
              onClick={handleBack}
            >
              {(() => {
                const BackIcon =
                  footerConfig?.actions?.back?.icon;

                return BackIcon ? (
                  <BackIcon />
                ) : null;
              })()}

              <span>
                {footerConfig?.actions?.back?.label ||
                  "Back"}
              </span>
            </button>
          )}


          {footerConfig?.actions?.continue?.enabled && (
            <button
              type="button"
              className="walk-in-customer-information__button walk-in-customer-information__button--primary"
              onClick={handleContinue}
            >
              <span>
                Continue to Medicines
              </span>

              {(() => {
                const ContinueIcon =
                  footerConfig?.actions?.continue?.icon;

                return ContinueIcon ? (
                  <ContinueIcon />
                ) : null;
              })()}

            </button>
          )}

        </div>

      </div>

    </section>
  );
};

export default WalkInCustomerInformation;