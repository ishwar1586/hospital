
import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { labRadiologyConfig } from "../../../../config/labRadiology.config";

import "./TestSearch.css";

const TestSearch = ({
  value = "",
  onChange,
  onSearch,
  loading = false,
  disabled = false,
}) => {
  const { page } = labRadiologyConfig;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (disabled || loading) return;

    onSearch?.(value.trim());
  };

  const handleChange = (event) => {
    onChange?.(event.target.value);
  };

  return (
    <form className="lab-search" onSubmit={handleSubmit}>
      <div className="lab-search__input-wrapper">
        <SearchOutlinedIcon className="lab-search__icon" />

        <input
          type="search"
          className="lab-search__input"
          placeholder={page.searchPlaceholder}
          value={value}
          onChange={handleChange}
          disabled={disabled || loading}
          aria-label={page.searchPlaceholder}
        />
      </div>

      <button
        type="submit"
        className="lab-search__button"
        disabled={disabled || loading}
      >
        {loading ? (
          <span className="lab-search__loading">
            Searching...
          </span>
        ) : (
          page.searchButtonLabel
        )}
      </button>
    </form>
  );
};

export default TestSearch;
