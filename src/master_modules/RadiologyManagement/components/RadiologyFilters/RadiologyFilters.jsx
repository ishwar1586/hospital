// src/master_modules/RadiologyManagement/components/RadiologyFilters/RadiologyFilters.jsx

import React from "react";
import { RotateCcw  } from "lucide-react";

import "./RadiologyFilters.css";

import { radiologyFiltersConfig } from "../../config/radiologyFilters.config";

const RadiologyFilters = ({
  config = radiologyFiltersConfig,
  filters,
  onFilterChange,
  onReset,
}) => {
  if (!config || !filters || typeof onFilterChange !== "function") {
    return null;
  }

  const handleSearchChange = (event) => {
    onFilterChange("search", event.target.value);
  };

  const handleModalityChange = (event) => {
    onFilterChange("modality", event.target.value);
  };

  const handleStatusChange = (event) => {
    onFilterChange("status", event.target.value);
  };

  const handleDateChange = (event) => {
    onFilterChange("date", event.target.value);
  };

  const handleReset = () => {
    if (typeof onReset === "function") {
      onReset();
    }
  };

  return (
    <section
      className="radiology-filters"
      aria-label="Filter radiology orders"
    >
      <div className="radiology-filters__search">
     

        <input
          type="search"
          className="radiology-filters__search-input"
          aria-label={config.search.ariaLabel}
          placeholder={config.search.placeholder}
          value={filters.search}
          onChange={handleSearchChange}
        />
      </div>

      <div className="radiology-filters__controls">
        <div className="radiology-filters__field">
          <label
            className="radiology-filters__label"
            htmlFor="radiology-modality-filter"
          >
            {config.modality.label}
          </label>

          <select
            id="radiology-modality-filter"
            className="radiology-filters__select"
            value={filters.modality}
            onChange={handleModalityChange}
          >
            {config.modality.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="radiology-filters__field">
          <label
            className="radiology-filters__label"
            htmlFor="radiology-status-filter"
          >
            {config.status.label}
          </label>

          <select
            id="radiology-status-filter"
            className="radiology-filters__select"
            value={filters.status}
            onChange={handleStatusChange}
          >
            {config.status.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="radiology-filters__field radiology-filters__date-field">
          <label
            className="radiology-filters__label"
            htmlFor="radiology-date-filter"
          >
            {config.date.label}
          </label>

          <div className="radiology-filters__date-wrapper">
            {/* <CalendarDays
              size={10}
              className="radiology-filters__date-icon"
              aria-hidden="true"
            /> */}

            <input
              id="radiology-date-filter"
              type="date"
              className="radiology-filters__date-input"
              aria-label={config.date.ariaLabel}
              value={filters.date}
              onChange={handleDateChange}
            />
          </div>
        </div>

        <button
          type="button"
          className="radiology-filters__reset"
          onClick={handleReset}
          disabled={typeof onReset !== "function"}
        >
          {/* <RotateCcw size={8} aria-hidden="true" /> */}
          <span>{config.resetButton.label}</span>
        </button>
      </div>
    </section>
  );
};

export default RadiologyFilters;