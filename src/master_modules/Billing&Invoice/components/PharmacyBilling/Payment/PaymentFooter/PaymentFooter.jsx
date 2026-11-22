import React from "react";

import pharmacyPaymentConfig from "@/master_modules/Billing&Invoice/config/pharmacyPayment.config";

import "./PaymentFooter.css";

const PaymentFooter = ({
  paymentMethod = "",
  paymentData = {},
  amountPayable = 0,
  onCancel,
  onBack,
  onContinue,
  config = pharmacyPaymentConfig?.footer,
  billingConfig = pharmacyPaymentConfig?.billing,
}) => {
  const footerConfig = config || {};
  const rules = billingConfig || {};

  const hasPaymentMethod =
    Boolean(paymentMethod);

  const amountReceived =
    Number(
      paymentData?.amountReceived
    ) || 0;

  const payableAmount =
    Number(amountPayable) || 0;

  const isCashPayment =
    paymentMethod === "cash";

  const isDigitalPayment =
    paymentMethod === "upi" ||
    paymentMethod === "card" ||
    paymentMethod === "bank";

  const hasTransactionId =
    Boolean(
      paymentData?.transactionId?.trim?.()
    );

  const hasRequiredCashAmount =
    amountReceived >= payableAmount;

  const isPaymentValid = (() => {
    if (!hasPaymentMethod) {
      return false;
    }

    if (
      isCashPayment &&
      rules?.requireAmountReceivedForCash
    ) {
      return hasRequiredCashAmount;
    }

    if (
      isDigitalPayment &&
      rules?.requireTransactionIdForDigitalPayment
    ) {
      return hasTransactionId;
    }

    return true;
  })();

  const continueDisabled =
    footerConfig?.continue
      ?.disabledWithoutPayment
      ? !isPaymentValid
      : false;

  const CancelIcon =
    footerConfig?.cancel?.icon;

  const BackIcon =
    footerConfig?.back?.icon;

  const ContinueIcon =
    footerConfig?.continue?.icon;

  const handleCancel = () => {
    if (typeof onCancel === "function") {
      onCancel();
    }
  };

  const handleBack = () => {
    if (typeof onBack === "function") {
      onBack();
    }
  };

  const handleContinue = () => {
    if (continueDisabled) {
      return;
    }

    if (
      typeof onContinue === "function"
    ) {
      onContinue({
        paymentMethod,
        paymentData,
        amountPayable: payableAmount,
      });
    }
  };

  if (!footerConfig?.enabled) {
    return null;
  }

  return (
    <footer className="payment-footer">
      <div className="payment-footer__left">
        {footerConfig?.cancel
          ?.enabled && (
          <button
            type="button"
            className="payment-footer__cancel"
            onClick={handleCancel}
          >
            {CancelIcon && (
              <CancelIcon />
            )}

            <span>
              {footerConfig?.cancel
                ?.label || ""}
            </span>
          </button>
        )}
      </div>

      <div className="payment-footer__right">
        {footerConfig?.back
          ?.enabled && (
          <button
            type="button"
            className="payment-footer__back"
            onClick={handleBack}
          >
            {BackIcon && <BackIcon />}

            <span>
              {footerConfig?.back
                ?.label || ""}
            </span>
          </button>
        )}

        {footerConfig?.continue
          ?.enabled && (
          <button
            type="button"
            className="payment-footer__continue"
            disabled={continueDisabled}
            onClick={handleContinue}
          >
            <span>
              {footerConfig?.continue
                ?.label || ""}
            </span>

            {ContinueIcon && (
              <ContinueIcon />
            )}
          </button>
        )}
      </div>
    </footer>
  );
};

export default PaymentFooter;