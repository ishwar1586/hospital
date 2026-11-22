import React from "react";
import KeyboardArrowDownOutlined from "@mui/icons-material/KeyboardArrowDownOutlined";

const BillingPaymentStatusFilter = ({
  config = {},
  options = [],
  value = "all",
  onChange,
}) => {
  return (
    <div className="billing-filter-field">
      <label className="billing-filter-field__label">
        {config.label}
      </label>

      <div className="billing-filter-select">
        <select
          value={value}
          onChange={(event) => onChange?.(event.target.value)}
          aria-label={config.label}
          className="billing-filter-select__control"
        >
          {options.map((option) => (
            <option
              key={option.id}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>

        <KeyboardArrowDownOutlined className="billing-filter-select__icon" />
      </div>
    </div>
  );
};

export default BillingPaymentStatusFilter;