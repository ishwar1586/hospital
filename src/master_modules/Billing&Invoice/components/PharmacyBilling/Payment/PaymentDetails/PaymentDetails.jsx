import React, { useMemo } from "react";
import pharmacyPaymentConfig from "@/master_modules/Billing&Invoice/config/pharmacyPayment.config";
import "./PaymentDetails.css";

const PaymentDetails = ({
  method = "",
  paymentData = {},
  onChange,
  amountPayable = 0,
  config = pharmacyPaymentConfig,
}) => {
  const paymentMethod = method || "cash";

  const formatCurrency = (value) => {
    const numericValue = Number(value) || 0;

    return `${config?.summary?.currency || "₹"}${numericValue.toFixed(
      config?.summary?.decimalPlaces ?? 2
    )}`;
  };

  /*
   * ----------------------------------------------------
   * SAFE CHANGE HANDLER
   * ----------------------------------------------------
   */

  const handleFieldChange = (field, value) => {
    if (typeof onChange === "function") {
      onChange(field, value);
    }
  };

  /*
   * ----------------------------------------------------
   * CASH
   * ----------------------------------------------------
   */

  const cashConfig = config?.cashPayment || {};

  const amountReceived =
    paymentData?.amountReceived === ""
      ? ""
      : Number(paymentData?.amountReceived) || 0;

  const changeAmount =
    amountReceived === ""
      ? 0
      : Math.max(
          Number(amountReceived) - Number(amountPayable || 0),
          0
        );

  /*
   * ----------------------------------------------------
   * UPI
   * ----------------------------------------------------
   */

  const upiConfig = config?.upiPayment || {};

  /*
   * ----------------------------------------------------
   * CARD
   * ----------------------------------------------------
   */

  const cardConfig = config?.cardPayment || {};

  /*
   * ----------------------------------------------------
   * BANK
   * ----------------------------------------------------
   */

  const bankConfig = config?.bankPayment || {};

  /*
   * ----------------------------------------------------
   * METHOD CONFIG
   * ----------------------------------------------------
   */

  const currentConfig = useMemo(() => {
    switch (paymentMethod) {
      case "cash":
        return cashConfig;

      case "upi":
        return upiConfig;

      case "card":
        return cardConfig;

      case "bank":
        return bankConfig;

      default:
        return {};
    }
  }, [
    paymentMethod,
    cashConfig,
    upiConfig,
    cardConfig,
    bankConfig,
  ]);

  if (!currentConfig?.enabled) {
    return null;
  }

  /*
   * ====================================================
   * CASH PAYMENT
   * ====================================================
   */

  if (paymentMethod === "cash") {
    const amountField =
      cashConfig?.fields?.amountReceived || {};

    const changeField =
      cashConfig?.fields?.changeAmount || {};

    return (
      <section className="payment-details">

        <div className="payment-details__header">
          <div className="payment-details__heading">
            <h2 className="payment-details__title">
              Cash Payment
            </h2>

            <p className="payment-details__subtitle">
              Enter the amount received from the customer.
            </p>
          </div>
        </div>

        <div className="payment-details__body">

          {/* AMOUNT RECEIVED */}

          <div className="payment-details__field">

            <label
              htmlFor="payment-amount-received"
              className="payment-details__label"
            >
              {amountField?.label || "Amount Received"}

              {amountField?.required && (
                <span className="payment-details__required">
                  *
                </span>
              )}
            </label>

            <input
              id="payment-amount-received"
              name="amountReceived"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.01"
              value={
                paymentData?.amountReceived ?? ""
              }
              placeholder={
                amountField?.placeholder ||
                "Enter amount received"
              }
              autoComplete="off"
              onChange={(event) => {
                const value = event.target.value;

                handleFieldChange(
                  "amountReceived",
                  value
                );
              }}
              className="payment-details__input"
            />

          </div>


          {/* CHANGE TO RETURN */}

          <div className="payment-details__field">

            <label
              htmlFor="payment-change-amount"
              className="payment-details__label"
            >
              {changeField?.label ||
                "Change to Return"}
            </label>

            <div
              id="payment-change-amount"
              className="
                payment-details__readonly
                payment-details__readonly--success
              "
            >
              {formatCurrency(changeAmount)}
            </div>

          </div>

        </div>

      </section>
    );
  }

  /*
   * ====================================================
   * UPI PAYMENT
   * ====================================================
   */

  if (paymentMethod === "upi") {

    const transactionField =
      upiConfig?.fields?.transactionId || {};

    return (
      <section className="payment-details">

        <div className="payment-details__header">
          <div>
            <h2 className="payment-details__title">
              {upiConfig?.title || "UPI Payment"}
            </h2>

            <p className="payment-details__subtitle">
              {upiConfig?.subtitle || ""}
            </p>
          </div>
        </div>

        <div className="payment-details__body">

          <div className="payment-details__qr">
            <div className="payment-details__qr-box">
              {upiConfig?.qr?.placeholder ||
                "UPI QR Code"}
            </div>

            <div className="payment-details__qr-content">
              <strong>
                {upiConfig?.qr?.title ||
                  "Scan & Pay"}
              </strong>

              <span>
                {upiConfig?.qr?.description ||
                  "Scan the QR code using any UPI application"}
              </span>
            </div>
          </div>

          <div className="payment-details__field">

            <label
              htmlFor="payment-upi-transaction"
              className="payment-details__label"
            >
              {transactionField?.label ||
                "Transaction ID"}

              {transactionField?.required && (
                <span className="payment-details__required">
                  *
                </span>
              )}
            </label>

            <input
              id="payment-upi-transaction"
              type="text"
              value={
                paymentData?.transactionId ?? ""
              }
              placeholder={
                transactionField?.placeholder ||
                "Enter UPI transaction ID"
              }
              onChange={(event) =>
                handleFieldChange(
                  "transactionId",
                  event.target.value
                )
              }
              className="payment-details__input"
            />

          </div>

        </div>

      </section>
    );
  }

  /*
   * ====================================================
   * CARD PAYMENT
   * ====================================================
   */

  if (paymentMethod === "card") {

    const transactionField =
      cardConfig?.fields?.transactionId || {};

    const cardTypeField =
      cardConfig?.fields?.cardType || {};

    const lastFourField =
      cardConfig?.fields?.lastFourDigits || {};

    return (
      <section className="payment-details">

        <div className="payment-details__header">
          <div>
            <h2 className="payment-details__title">
              {cardConfig?.title || "Card Payment"}
            </h2>

            <p className="payment-details__subtitle">
              {cardConfig?.subtitle || ""}
            </p>
          </div>
        </div>

        <div className="payment-details__body">

          <div className="payment-details__field">

            <label className="payment-details__label">
              {transactionField?.label ||
                "Transaction ID"}

              {transactionField?.required && (
                <span className="payment-details__required">
                  *
                </span>
              )}
            </label>

            <input
              type="text"
              value={
                paymentData?.transactionId ?? ""
              }
              placeholder={
                transactionField?.placeholder ||
                "Enter transaction ID"
              }
              onChange={(event) =>
                handleFieldChange(
                  "transactionId",
                  event.target.value
                )
              }
              className="payment-details__input"
            />

          </div>


          <div className="payment-details__field">

            <label className="payment-details__label">
              {cardTypeField?.label ||
                "Card Type"}

              {cardTypeField?.required && (
                <span className="payment-details__required">
                  *
                </span>
              )}
            </label>

            <select
              value={
                paymentData?.cardType ?? ""
              }
              onChange={(event) =>
                handleFieldChange(
                  "cardType",
                  event.target.value
                )
              }
              className="payment-details__input"
            >
              <option value="">
                Select card type
              </option>

              {(cardTypeField?.options || []).map(
                (option) => (
                  <option
                    key={
                      option?.id ||
                      option?.value
                    }
                    value={option?.value}
                  >
                    {option?.label}
                  </option>
                )
              )}
            </select>

          </div>


          <div className="payment-details__field">

            <label className="payment-details__label">
              {lastFourField?.label ||
                "Last 4 Digits"}
            </label>

            <input
              type="text"
              inputMode="numeric"
              maxLength={
                lastFourField?.maxLength || 4
              }
              value={
                paymentData?.lastFourDigits ?? ""
              }
              placeholder={
                lastFourField?.placeholder ||
                "XXXX"
              }
              onChange={(event) =>
                handleFieldChange(
                  "lastFourDigits",
                  event.target.value.replace(
                    /\D/g,
                    ""
                  )
                )
              }
              className="payment-details__input"
            />

          </div>

        </div>

      </section>
    );
  }

  /*
   * ====================================================
   * BANK PAYMENT
   * ====================================================
   */

  if (paymentMethod === "bank") {

    const transactionField =
      bankConfig?.fields?.transactionId || {};

    const bankNameField =
      bankConfig?.fields?.bankName || {};

    return (
      <section className="payment-details">

        <div className="payment-details__header">
          <div>
            <h2 className="payment-details__title">
              {bankConfig?.title ||
                "Bank Transfer"}
            </h2>

            <p className="payment-details__subtitle">
              {bankConfig?.subtitle || ""}
            </p>
          </div>
        </div>

        <div className="payment-details__body">

          <div className="payment-details__field">

            <label className="payment-details__label">
              {transactionField?.label ||
                "Transaction ID / UTR"}

              {transactionField?.required && (
                <span className="payment-details__required">
                  *
                </span>
              )}
            </label>

            <input
              type="text"
              value={
                paymentData?.transactionId ?? ""
              }
              placeholder={
                transactionField?.placeholder ||
                "Enter transaction ID or UTR"
              }
              onChange={(event) =>
                handleFieldChange(
                  "transactionId",
                  event.target.value
                )
              }
              className="payment-details__input"
            />

          </div>


          <div className="payment-details__field">

            <label className="payment-details__label">
              {bankNameField?.label ||
                "Bank Name"}

              {bankNameField?.required && (
                <span className="payment-details__required">
                  *
                </span>
              )}
            </label>

            <input
              type="text"
              value={
                paymentData?.bankName ?? ""
              }
              placeholder={
                bankNameField?.placeholder ||
                "Enter bank name"
              }
              onChange={(event) =>
                handleFieldChange(
                  "bankName",
                  event.target.value
                )
              }
              className="payment-details__input"
            />

          </div>

        </div>

      </section>
    );
  }

  return null;
};

export default PaymentDetails;