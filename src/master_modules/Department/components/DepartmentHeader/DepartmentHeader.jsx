import React from "react";
import "./DepartmentHeader.css";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import { departmentHeaderConfig } from "../../config/departmentHeader.config";

const DepartmentHeader = ({ onAddDepartment }) => {
  const { title, description, action } = departmentHeaderConfig;

  return (
    <header className="department-header">
      <div className="department-header__content">
        <div className="department-header__text">
          <h1 className="department-header__title">
            {title}
          </h1>

          <p className="department-header__description">
            {description}
          </p>
        </div>

        <button
          type="button"
          className="department-header__action"
          onClick={onAddDepartment}
        >
          <AddOutlinedIcon className="department-header__action-icon" />

          <span>{action.label}</span>
        </button>
      </div>
    </header>
  );
};

export default DepartmentHeader;