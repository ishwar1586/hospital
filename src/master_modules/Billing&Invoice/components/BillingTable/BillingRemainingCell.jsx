import React from "react";

const BillingRemainingCell = ({
  amount = 0,
}) => {
  const numericAmount = Number(amount || 0);
  const isOutstanding = numericAmount > 0;

  const formattedAmount = `₹ ${numericAmount.toLocaleString(
    "en-IN"
  )}`;

  return (
    <div
      className={`
        billing-remaining-cell
        ${
          isOutstanding
            ? "billing-remaining-cell--outstanding"
            : "billing-remaining-cell--cleared"
        }
      `}
    >
      <span className="billing-remaining-cell__amount">
        {formattedAmount}
      </span>

      <span className="billing-remaining-cell__label">
        {isOutstanding
          ? "Outstanding"
          : "Cleared"}
      </span>
    </div>
  );
};

export default BillingRemainingCell;