
import React from "react";
import "./AddDepartmentHeader.css";

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import { addDepartmentHeaderConfig } from "../../../../config/addDepartment/addDepartmentHeader.config";

const AddDepartmentHeader = ({ onBack }) => {
  const { title, description, backButton } =
    addDepartmentHeaderConfig;

  return (
    <header className="add-department-header">

      {/* Header Information */}
      <div className="add-department-header__content">
        <h1 className="add-department-header__title">
          {title}
        </h1>

        <p className="add-department-header__description">
          {description}
        </p>
      </div>

      {/* Back Button */}
      <button
        type="button"
        className="add-department-header__back-button"
        onClick={onBack}
      >
        <ArrowBackOutlinedIcon className="add-department-header__back-icon" />

        <span>{backButton.label}</span>
      </button>

    </header>
  );
};

export default AddDepartmentHeader;
