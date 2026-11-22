
// src/master_modules/StaffManagement/components/StaffFilters/StaffFilters.jsx

import React, { useMemo } from "react";
import {
  Box,
  TextField,
  MenuItem,
  InputAdornment,
  IconButton,
  Tooltip,
} from "@mui/material";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

import { staffFiltersConfig } from "../../config/staffFilters.config";

import { staffDepartmentsMock } from "../../mock/staffDepartments.mock";
import { staffDesignationsMock } from "../../mock/staffDesignations.mock";
import { staffEmploymentTypesMock } from "../../mock/staffEmploymentTypes.mock";
import { staffStatusesMock } from "../../mock/staffStatuses.mock";

import "./StaffFilters.css";

const optionsSourceMap = {
  staffDepartments: staffDepartmentsMock,
  staffDesignations: staffDesignationsMock,
  staffEmploymentTypes: staffEmploymentTypesMock,
  staffStatuses: staffStatusesMock,
};

const StaffFilters = ({
  filters = {},
  onFilterChange,
  onReset,
  loading = false,
}) => {
  const visibleFilters = useMemo(
    () =>
      [...staffFiltersConfig]
        .filter((filter) => filter.visible !== false)
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
    []
  );

  const getOptions = (filter) => {
    const source = optionsSourceMap[filter.optionsSource] ?? [];

    return source.filter((option) => option.isActive !== false &&
      (filter.name !== "status" || option.showInFilter !== false));
  };

  const handleChange = (name, value) => {
    onFilterChange?.(name, value);
  };

  const handleReset = () => {
    onReset?.();
  };

  const hasActiveFilters = visibleFilters.some((filter) => {
    if (filter.type === "search") {
      return Boolean(filters[filter.name]?.trim());
    }

    return Boolean(filters[filter.name]);
  });

  return (
    <Box
      component="section"
      className="staff-filters"
      aria-label="Filter staff"
    >
      <div className="staff-filters__header">
        {/* <div className="staff-filters__heading">
          <FilterAltOutlinedIcon className="staff-filters__heading-icon" />

          <div>
            <h3 className="staff-filters__title">Search & Filters</h3>
            <p className="staff-filters__subtitle">
              Find staff by name, department or employment details
            </p>
          </div>
        </div> */}

        {hasActiveFilters && (
          <button
            type="button"
            className="staff-filters__reset"
            onClick={handleReset}
            disabled={loading}
          >
            <ClearOutlinedIcon fontSize="small" />
            Reset filters
          </button>
        )}
      </div>

      <div className="staff-filters__grid">
        {visibleFilters.map((filter) => {
          if (filter.type === "search") {
            return (
              <TextField
                key={filter.id}
                className="staff-filters__field staff-filters__search"
                fullWidth
                size="small"
                placeholder={filter.placeholder || "Search staff..."}
                value={filters[filter.name] ?? ""}
                onChange={(event) =>
                  handleChange(filter.name, event.target.value)
                }
                disabled={loading}
                inputProps={{
                  "aria-label": filter.label || "Search staff",
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchOutlinedIcon />
                    </InputAdornment>
                  ),
                  endAdornment: filters[filter.name] ? (
                    <InputAdornment position="end">
                      <Tooltip title="Clear search">
                        <IconButton
                          size="small"
                          aria-label="Clear search"
                          onClick={() => handleChange(filter.name, "")}
                          edge="end"
                        >
                          <ClearOutlinedIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </InputAdornment>
                  ) : null,
                }}
              />
            );
          }

          const options = getOptions(filter);

          return (
            <TextField
              key={filter.id}
              className="staff-filters__field"
              select
              fullWidth
              size="small"
              label={filter.label}
              value={filters[filter.name] ?? ""}
              onChange={(event) =>
                handleChange(filter.name, event.target.value)
              }
              disabled={loading}
              SelectProps={{
                displayEmpty: true,
              }}
            >
              <MenuItem value="">
                All {filter.label?.replace(/^Filter by\s+/i, "") || "Options"}
              </MenuItem>

              {options.map((option) => (
                <MenuItem
                  key={option.id ?? option.value}
                  value={option[filter.optionValueKey || "value"]}
                >
                  {option[filter.optionLabelKey || "label"]}
                </MenuItem>
              ))}
            </TextField>
          );
        })}
      </div>
    </Box>
  );
};

export default StaffFilters;
