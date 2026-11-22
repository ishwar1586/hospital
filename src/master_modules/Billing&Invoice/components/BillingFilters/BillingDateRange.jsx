import React from "react";
import CalendarTodayOutlined from "@mui/icons-material/CalendarTodayOutlined";

const BillingDateRange = ({
  config = {},
  value = {},
  onChange,
}) => {
  const {
    label = "",
    placeholder = "",
  } = config;

  const handleStartDateChange = (event) => {
    onChange?.({
      ...value,
      startDate: event.target.value,
    });
  };

  const handleEndDateChange = (event) => {
    onChange?.({
      ...value,
      endDate: event.target.value,
    });
  };

  return (
    <div className="billing-filter-field billing-filter-field--date">
      <label className="billing-filter-field__label">
        {label}
      </label>

      <div className="billing-filter-date">
        <CalendarTodayOutlined className="billing-filter-date__icon" />

        <input
          type="date"
          value={value?.startDate || ""}
          onChange={handleStartDateChange}
          aria-label={`${label} start date`}
          className="billing-filter-date__input"
        />

        <span className="billing-filter-date__separator">
          →
        </span>

        <input
          type="date"
          value={value?.endDate || ""}
          onChange={handleEndDateChange}
          aria-label={`${label} end date`}
          className="billing-filter-date__input"
        />
      </div>
    </div>
  );
};

export default BillingDateRange;