import React from "react";

const BillingAmountCell = ({
  amount = 0,
  variant = "default",
}) => {
  const formattedAmount = `₹ ${Number(
    amount || 0
  ).toLocaleString("en-IN")}`;

  return (
    <div
      className={`
        billing-amount-cell
        billing-amount-cell--${variant}
      `}
    >
      {formattedAmount}
    </div>
  );
};

export default BillingAmountCell;