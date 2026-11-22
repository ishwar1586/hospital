
import React from "react";
import { opdHeaderConfig } from "../../config/opdHeader.config";
import "./OPDHeader.css";

const OPDHeader = ({ config = opdHeaderConfig }) => {
  const { title, subtitle } = config;

  return (
    <header
      className="opd-header"
      aria-label="OPD Management overview"
    >
      <div className="opd-header__content">
        <h1 className="opd-header__title">{title}</h1>

        {subtitle && (
          <p className="opd-header__subtitle">{subtitle}</p>
        )}
      </div>
    </header>
  );
};

export default OPDHeader;
