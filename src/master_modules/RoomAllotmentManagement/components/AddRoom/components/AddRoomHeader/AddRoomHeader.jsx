
import React from "react";
import "./AddRoomHeader.css";

import { addRoomHeaderConfig } from "../../../../config/addRoom/addRoomHeader.config";

const AddRoomHeader = ({ onBack }) => {
  const { title, description, backAction } = addRoomHeaderConfig;

  const BackIcon = backAction.icon;

  return (
    <header className="add-room-header">

      {/* PAGE INFORMATION */}
      <div className="add-room-header__content">
        <h1 className="add-room-header__title">
          {title}
        </h1>

        <p className="add-room-header__description">
          {description}
        </p>
      </div>

      {/* BACK ACTION */}
      <button
        type="button"
        className="add-room-header__back-button"
        onClick={onBack}
      >
        <BackIcon className="add-room-header__back-icon" />

        <span>{backAction.label}</span>
      </button>

    </header>
  );
};

export default AddRoomHeader;
