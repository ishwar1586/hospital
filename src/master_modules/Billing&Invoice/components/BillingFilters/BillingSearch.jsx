import React from "react";
import SearchOutlined from "@mui/icons-material/SearchOutlined";

const BillingSearch = ({
  config = {},
  value = "",
  onChange,
}) => {
  const {
    placeholder = "",
    ariaLabel = "",
  } = config;

  return (
    <div className="billing-filter-search">
      <SearchOutlined className="billing-filter-search__icon" />

      <input
        type="text"
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        placeholder={placeholder}
        aria-label={ariaLabel}
        className="billing-filter-search__input"
      />
    </div>
  );
};

export default BillingSearch;