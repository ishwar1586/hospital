
import React from "react";
import "./AddWardHeader.css";

import { addWardHeaderConfig } from "../../../../config/addWard/addWardHeader.config";

const AddWardHeader = ({ onBack }) => {
  const BackIcon = addWardHeaderConfig.backButton.icon;

  return (
    <header className="add-ward-header">

      <div className="add-ward-header__content">
        <div className="add-ward-header__text">
          <h1 className="add-ward-header__title">
            {addWardHeaderConfig.title}
          </h1>

          <p className="add-ward-header__description">
            {addWardHeaderConfig.description}
          </p>
        </div>

        <button
          type="button"
          className="add-ward-header__back-button"
          onClick={onBack}
        >
          <BackIcon className="add-ward-header__back-icon" />

          <span>
            {addWardHeaderConfig.backButton.label}
          </span>
        </button>
      </div>

    </header>
  );
};

export default AddWardHeader;
