import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { BED_VIEW_PAGE_CONFIG } from "../../config/bedViewConfig";

import "./BedViewHeader.css";

const BedViewHeader = ({ onBack }) => {
  const { title, subtitle, backAction } = BED_VIEW_PAGE_CONFIG;

  return (
    <header className="bed-view-header">
      <div className="bed-view-header__content">
        {/* Left Content */}
        <div className="bed-view-header__info">
          <h1 className="bed-view-header__title">
            {title}
          </h1>

          {subtitle && (
            <p className="bed-view-header__subtitle">
              {subtitle}
            </p>
          )}
        </div>

        {/* Right Content */}
        <div className="bed-view-header__actions">
          <Tooltip title={backAction?.tooltip || "Back"}>
            <IconButton
              className="bed-view-header__back-button"
              onClick={onBack}
              aria-label={backAction?.ariaLabel || "Back to IPD Management"}
            >
              <ArrowBackIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </header>
  );
};

export default BedViewHeader;