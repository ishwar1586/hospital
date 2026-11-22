
import React from "react";
import "./AddBedHeader.css";

import { addBedHeaderConfig } from "../../../../config/addBed/addBedHeader.config";

const AddBedHeader = ({ onBack }) => {
  const { title, description, backAction } = addBedHeaderConfig;
  const BackIcon = backAction.icon;

  return (
    <header className="add-bed-header">

      {/* HEADER CONTENT */}
      <div className="add-bed-header__content">
        <h1 className="add-bed-header__title">
          {title}
        </h1>

        <p className="add-bed-header__description">
          {description}
        </p>
      </div>

      {/* BACK BUTTON */}
      <button
        type="button"
        className="add-bed-header__back-button"
        onClick={onBack}
      >
        <BackIcon className="add-bed-header__back-icon" />

        <span>{backAction.label}</span>
      </button>

    </header>
  );
};

export default AddBedHeader;
