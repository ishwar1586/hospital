
import React from "react";

import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

import { labRadiologyTabsConfig } from "../../../../config/labRadiologyTabs.config";

import "./TestTypeTabs.css";

const tabIcons = {
  science: ScienceOutlinedIcon,
  image: ImageOutlinedIcon,
};

const TestTypeTabs = ({
  activeTab = labRadiologyTabsConfig.defaultTab,
  onChange,
  tabs = labRadiologyTabsConfig.tabs,
  disabled = false,
}) => {
  const visibleTabs = tabs.filter((tab) => tab.enabled);

  return (
    <div
      className="lab-type-tabs"
      role="tablist"
      aria-label="Test categories"
    >
      {visibleTabs.map((tab) => {
        const Icon = tabIcons[tab.icon];
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`lab-type-tab-${tab.id}`}
            aria-selected={isActive}
            aria-controls={`lab-type-panel-${tab.id}`}
            className={`lab-type-tabs__button ${
              isActive ? "lab-type-tabs__button--active" : ""
            }`}
            onClick={() => onChange?.(tab.id)}
            disabled={disabled}
          >
            {Icon && (
              <Icon className="lab-type-tabs__icon" />
            )}

            <span className="lab-type-tabs__label">
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default TestTypeTabs;
