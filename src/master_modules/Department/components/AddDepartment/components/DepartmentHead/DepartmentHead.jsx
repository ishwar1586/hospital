
import React from "react";
import "./DepartmentHead.css";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

import { departmentHeadConfig } from "../../../../config/addDepartment/departmentHead.config";

const DepartmentHead = ({
  formData = {},
  onChange,
  doctors = [],
  errors = {},
}) => {
  const { field, emptyMessage } = departmentHeadConfig;

  const selectedDoctor = doctors.find(
    (doctor) => doctor.id === formData[field.name]
  );

  const handleChange = (event) => {
    onChange?.(field.name, event.target.value);
  };

  return (
    <div className="department-head">
      <label
        className="department-head__label"
        htmlFor="department-head-doctor"
      >
        {field.label}

        {field.required && (
          <span className="department-head__required">*</span>
        )}
      </label>

      <div className="department-head__select-wrapper">
        <PersonOutlineOutlinedIcon className="department-head__leading-icon" />

        <select
          id="department-head-doctor"
          name={field.name}
          className={`department-head__select ${
            errors[field.name] ? "department-head__select--error" : ""
          }`}
          value={formData[field.name] || ""}
          onChange={handleChange}
          aria-invalid={Boolean(errors[field.name])}
        >
          <option value="">{field.placeholder}</option>

          {doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>
              {doctor.name} — {doctor.specialization}
            </option>
          ))}
        </select>

        <KeyboardArrowDownOutlinedIcon className="department-head__arrow-icon" />
      </div>

      {errors[field.name] && (
        <p className="department-head__error">
          {errors[field.name]}
        </p>
      )}

      {selectedDoctor && (
        <div className="department-head__selected">
          <span className="department-head__selected-name">
            {selectedDoctor.name}
          </span>

          <span className="department-head__selected-specialization">
            {selectedDoctor.specialization}
          </span>
        </div>
      )}

      {doctors.length === 0 && (
        <p className="department-head__helper">
          {emptyMessage}
        </p>
      )}
    </div>
  );
};

export default DepartmentHead;
