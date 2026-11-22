import React from "react";
import "./DepartmentFilters.css";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

import { departmentFiltersConfig } from "../../config/departmentFilters.config";
import { departmentFiltersMock } from "../../mock/departmentFilters.mock";

const DepartmentFilters = ({
  filters,
  onFilterChange,
  onRefresh,
}) => {
  const { fields, search, refresh } = departmentFiltersConfig;

  const handleRefresh = () => {
    onRefresh?.();
  };

  return (
    <section className="department-filters">
      <div className="department-filters__controls">
        {fields.map((field) => (
          <div
            className="department-filters__field"
            key={field.name}
          >
            <label
              htmlFor={`department-filter-${field.name}`}
              className="department-filters__label"
            >
              {field.label}
            </label>

            <div className="department-filters__select-wrapper">
              <select
                id={`department-filter-${field.name}`}
                className="department-filters__select"
                value={filters[field.name] ?? ""}
                onChange={(event) =>
                  onFilterChange(field.name, event.target.value)
                }
              >
                {(departmentFiltersMock[field.optionKey] || []).map(
                  (option) => (
                    <option
                      key={option.value || "all"}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  )
                )}
              </select>

              <KeyboardArrowDownOutlinedIcon className="department-filters__select-icon" />
            </div>
          </div>
        ))}

        <div className="department-filters__search-wrapper">
          <SearchOutlinedIcon className="department-filters__search-icon" />

          <input
            type="search"
            name={search.name}
            className="department-filters__search-input"
            placeholder={search.placeholder}
            value={filters.search ?? ""}
            onChange={(event) =>
              onFilterChange(search.name, event.target.value)
            }
          />
        </div>

        <button
          type="button"
          className="department-filters__refresh"
          title={refresh.tooltip}
          aria-label={refresh.label}
          onClick={handleRefresh}
        >
          <RefreshOutlinedIcon />
        </button>
      </div>
    </section>
  );
};

export default DepartmentFilters;