import React from "react";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

import { patientFilterOptions } from "../../config/filters";

import "./PatientFilters.css";

const PatientFilters = ({
  filters,
  onFilterChange,
  onReset,
}) => {
  const handleChange = (event) => {
    const { name, value } = event.target;

    onFilterChange(name, value);
  };

  return (
    <div className="patient-filters">

      {/* Search */}
      <div className="patient-filter-search">
        <SearchOutlinedIcon />

        <input
          type="text"
          name="search"
          value={filters.search}
          onChange={handleChange}
          placeholder="Search by name, UHID, mobile..."
        />
      </div>

      {/* Department */}
      <div className="patient-filter-field">
        <select
          name="department"
          value={filters.department}
          onChange={handleChange}
        >
          {patientFilterOptions.departments.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Patient Type */}
      <div className="patient-filter-field">
        <select
          name="patientType"
          value={filters.patientType}
          onChange={handleChange}
        >
          {patientFilterOptions.patientTypes.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Gender */}
      <div className="patient-filter-field">
        <select
          name="gender"
          value={filters.gender}
          onChange={handleChange}
        >
          {patientFilterOptions.genders.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Age Group */}
      <div className="patient-filter-field">
        <select
          name="ageGroup"
          value={filters.ageGroup}
          onChange={handleChange}
        >
          {patientFilterOptions.ageGroups.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Status */}
      <div className="patient-filter-field">
        <select
          name="status"
          value={filters.status}
          onChange={handleChange}
        >
          {patientFilterOptions.statuses.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Date */}
      <div className="patient-filter-date">
        <CalendarMonthOutlinedIcon />

        <input
          type="date"
          name="date"
          value={filters.date}
          onChange={handleChange}
        />
      </div>

      {/* Reset */}
      <button
        type="button"
        className="patient-filter-reset"
        onClick={onReset}
      >
        <RestartAltOutlinedIcon />
        <span>Reset</span>
      </button>

    </div>
  );
};

export default PatientFilters;