import React from "react";

import pharmacyPaymentConfig from "@/master_modules/Billing&Invoice/config/pharmacyPayment.config";

import "./PaymentHeader.css";

const PaymentHeader = ({
  config = pharmacyPaymentConfig,
  onBack,
  onClose,
}) => {
  const pageConfig = config?.page || {};

  const PageIcon = pageConfig?.icons?.page;
  const BackIcon = pageConfig?.icons?.back;
  const CloseIcon = pageConfig?.icons?.close;

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

  return (
    <header className="payment-header">
      <div className="payment-header__left">
        {pageConfig?.showBackButton && (
          <button
            type="button"
            className="payment-header__back-button"
            onClick={handleBack}
            aria-label={
              pageConfig?.title || ""
            }
          >
            {BackIcon && <BackIcon />}
          </button>
        )}

        <div className="payment-header__icon">
          {PageIcon && <PageIcon />}
        </div>

        <div className="payment-header__content">
          <h1 className="payment-header__title">
            {pageConfig?.title || ""}
          </h1>

          {pageConfig?.subtitle && (
            <p className="payment-header__subtitle">
              {pageConfig.subtitle}
            </p>
          )}
        </div>
      </div>

      {pageConfig?.showCloseButton && (
        <button
          type="button"
          className="payment-header__close-button"
          onClick={handleClose}
          aria-label={
            pageConfig?.title || ""
          }
        >
          {CloseIcon && <CloseIcon />}
        </button>
      )}
    </header>
  );
};

export default PaymentHeader;