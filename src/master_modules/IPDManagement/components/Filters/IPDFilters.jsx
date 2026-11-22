import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

import { IPD_FILTER_CONFIG } from "../../config/ipdConfig";
import useIPDFilters from "../../hooks/useIPDFilters";

import "./IPDFilters.css";

const getSafeOptions = (options) => {
  return Array.isArray(options) ? options : [];
};

const getOptionLabel = (option) => {
  if (typeof option === "string") {
    return option;
  }

  return (
    option?.label ??
    option?.name ??
    option?.title ??
    option?.wardName ??
    option?.roomNumber ??
    option?.roomName ??
    option?.doctorName ??
    option?.displayName ??
    option?.value ??
    option?.id ??
    ""
  );
};

const getOptionValue = (option) => {
  if (typeof option === "string") {
    return option;
  }

  return (
    option?.value ??
    option?.id ??
    option?.wardId ??
    option?.roomId ??
    option?.doctorId ??
    option?.status ??
    option?.wardName ??
    option?.roomNumber ??
    option?.doctorName ??
    ""
  );
};

const IPDFilters = ({ onFilterApplied }) => {
  const {
    filters,
    filterOptions,
    optionsLoading,
    updateFilter,
    updateSearch,
    clearFilters,
  } = useIPDFilters();

  const handleSearchChange = (event) => {
    updateSearch(event.target.value);
  };

  const handleFilterChange = (name, value) => {
    updateFilter(name, value);
  };

  const handleClearFilters = () => {
    const result = clearFilters();

    if (typeof onFilterApplied === "function") {
      onFilterApplied(result);
    }
  };

  const handleDateClick = (event) => {
    if (typeof event.currentTarget.showPicker === "function") {
      event.currentTarget.showPicker();
    }
  };

  const getOptions = (optionSource) => {
    return getSafeOptions(filterOptions?.[optionSource]);
  };

  return (
    <section className="ipd-filters">
      <div className="ipd-filters__row">

        {/* =========================
            SEARCH
        ========================= */}
        {IPD_FILTER_CONFIG
          .filter((field) => field.type === "search")
          .map((field) => (
            <div
              key={field.name}
              className="ipd-filter ipd-filter--search"
            >
              <div className="ipd-filter__search-wrapper">
                <input
                  id={`ipd-filter-${field.name}`}
                  type="text"
                  name={field.name}
                  value={filters?.[field.name] ?? ""}
                  placeholder={field.placeholder}
                  onChange={handleSearchChange}
                  className="ipd-filter__search-input"
                />

                <SearchOutlinedIcon className="ipd-filter__search-icon" />
              </div>
            </div>
          ))}

        {/* =========================
            SELECT + DATE FILTERS
        ========================= */}
        {IPD_FILTER_CONFIG
          .filter((field) => field.type !== "search")
          .map((field) => {
            const value = filters?.[field.name] ?? "";

            /* =========================
               DATE
            ========================= */
            if (field.type === "date") {
              return (
                <div
                  key={field.name}
                  className="ipd-filter ipd-filter--date"
                >
                  <label
                    htmlFor={`ipd-filter-${field.name}`}
                    className="ipd-filter__label"
                  >
                    {field.label}
                  </label>

                  <div className="ipd-filter__date-wrapper">
                    <CalendarTodayOutlinedIcon className="ipd-filter__calendar-icon" />

                    <input
                      id={`ipd-filter-${field.name}`}
                      type="date"
                      name={field.name}
                      value={value || ""}
                      onChange={(event) =>
                        handleFilterChange(
                          field.name,
                          event.target.value
                        )
                      }
                      onClick={handleDateClick}
                      className="ipd-filter__date-input"
                    />

                    {!value && (
                      <span className="ipd-filter__date-placeholder">
                        {field.placeholder}
                      </span>
                    )}
                  </div>
                </div>
              );
            }

            /* =========================
               SELECT
            ========================= */
            if (field.type === "select") {
              const options = getOptions(field.optionSource);

              return (
                <div
                  key={field.name}
                  className="ipd-filter"
                >
                  <label
                    htmlFor={`ipd-filter-${field.name}`}
                    className="ipd-filter__label"
                  >
                    {field.label}
                  </label>

                  <div className="ipd-filter__select-wrapper">
                    <select
                      id={`ipd-filter-${field.name}`}
                      name={field.name}
                      value={value}
                      disabled={optionsLoading}
                      onChange={(event) =>
                        handleFilterChange(
                          field.name,
                          event.target.value
                        )
                      }
                      className="ipd-filter__select"
                    >
                      <option value="">
                        {field.placeholder}
                      </option>

                      {options.map((option, index) => {
                        const optionValue =
                          getOptionValue(option);

                        const optionLabel =
                          getOptionLabel(option);

                        if (!optionValue) {
                          return null;
                        }

                        return (
                          <option
                            key={`${field.name}-${optionValue}-${index}`}
                            value={optionValue}
                          >
                            {optionLabel}
                          </option>
                        );
                      })}
                    </select>

                    <KeyboardArrowDownOutlinedIcon className="ipd-filter__select-icon" />
                  </div>
                </div>
              );
            }

            return null;
          })}

        {/* =========================
            CLEAR
        ========================= */}
        <div className="ipd-filter ipd-filter--clear">
          <button
            type="button"
            className="ipd-filter__clear-button"
            onClick={handleClearFilters}
          >
            Clear
          </button>
        </div>
      </div>
    </section>
  );
};

export default IPDFilters;