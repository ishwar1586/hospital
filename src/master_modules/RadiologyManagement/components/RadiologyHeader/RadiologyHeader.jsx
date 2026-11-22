
import React from "react";
import "./RadiologyHeader.css";

import { radiologyHeaderConfig } from "../../config/radiologyHeader.config";

const RadiologyHeader = ({
  config = radiologyHeaderConfig,
  onNewOrder,
}) => {
  const { title, subtitle, newOrderButton, layout } = config;

  if (!config) {
    return null;
  }

  const handleNewOrder = () => {
    if (typeof onNewOrder === "function") {
      onNewOrder();
    }
  };

  return (
    <header
      className="radiology-header"
      data-compact={layout?.compact ? "true" : "false"}
      data-alignment={layout?.alignment || "space-between"}
    >
      <div className="radiology-header__content">
        <h1 className="radiology-header__title">{title}</h1>

        {subtitle && (
          <p className="radiology-header__subtitle">{subtitle}</p>
        )}
      </div>

      {newOrderButton?.visible && (
        <button
          id={newOrderButton.id}
          type="button"
          className="radiology-header__new-order"
          onClick={handleNewOrder}
          disabled={
            newOrderButton.disabled ||
            typeof onNewOrder !== "function"
          }
        >
          <span
            className="radiology-header__button-icon"
            aria-hidden="true"
          >
            {newOrderButton.icon}
          </span>

          <span className="radiology-header__button-label">
            {newOrderButton.label}
          </span>
        </button>
      )}
    </header>
  );
};

export default RadiologyHeader;
