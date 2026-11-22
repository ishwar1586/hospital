
import React from "react";
import "./DepartmentConfiguration.css";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import PauseCircleOutlineOutlinedIcon from "@mui/icons-material/PauseCircleOutlineOutlined";

import { departmentConfigurationConfig } from "../../../../config/addDepartment/departmentConfiguration.config";

const DepartmentConfiguration = ({
  formData = {},
  onChange,
}) => {
  const { section, status } = departmentConfigurationConfig;

  const isActive = Boolean(formData[status.name]);

  const handleStatusChange = () => {
    onChange?.(status.name, !isActive);
  };

  return (
    <section className="department-configuration">
      <div className="department-configuration__header">
        <div className="department-configuration__heading">
          <div className="department-configuration__icon-wrapper">
            <SettingsOutlinedIcon className="department-configuration__icon" />
          </div>

          <div className="department-configuration__heading-content">
            <h3 className="department-configuration__title">
              {section.title}
            </h3>

            <p className="department-configuration__description">
              {section.description}
            </p>
          </div>
        </div>
      </div>

      <div className="department-configuration__body">
        <div className="department-configuration__status-info">
          <div className="department-configuration__status-icon-wrapper">
            {isActive ? (
              <CheckCircleOutlineOutlinedIcon className="department-configuration__status-icon department-configuration__status-icon--active" />
            ) : (
              <PauseCircleOutlineOutlinedIcon className="department-configuration__status-icon department-configuration__status-icon--inactive" />
            )}
          </div>

          <div className="department-configuration__status-content">
            <span className="department-configuration__status-label">
              {status.label}
            </span>

            <p className="department-configuration__status-description">
              {isActive
                ? status.activeDescription
                : status.inactiveDescription}
            </p>
          </div>
        </div>

        <div className="department-configuration__status-control">
          <span
            className={`department-configuration__status-badge ${
              isActive
                ? "department-configuration__status-badge--active"
                : "department-configuration__status-badge--inactive"
            }`}
          >
            {isActive ? status.activeLabel : status.inactiveLabel}
          </span>

          <button
            type="button"
            className={`department-configuration__toggle ${
              isActive
                ? "department-configuration__toggle--active"
                : "department-configuration__toggle--inactive"
            }`}
            onClick={handleStatusChange}
            role="switch"
            aria-checked={isActive}
            aria-label={status.label}
          >
            <span className="department-configuration__toggle-thumb" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DepartmentConfiguration;
