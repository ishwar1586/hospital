// src/master_modules/RadiologyManagement/components/RadiologyTabs/RadiologyTabs.jsx

import React from "react";
import "./RadiologyTabs.css";

import { radiologyTabsConfig } from "../../config/radiologyTabs.config";

const RadiologyTabs = ({
  config = radiologyTabsConfig,
  activeTab = config?.defaultTab ?? "all",
  onTabChange,
  counts = {},
}) => {
  if (!config || !Array.isArray(config.tabs)) {
    return null;
  }

  const handleTabClick = (tabId) => {
    if (typeof onTabChange === "function") {
      onTabChange(tabId);
    }
  };

  return (
    <div
      className="radiology-tabs"
      role="tablist"
      aria-label={config.ariaLabel}
    >
      <div className="radiology-tabs__list">
        {config.tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const count = counts[tab.id];

          return (
            <button
              key={tab.id}
              id={`radiology-tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`radiology-tabs__tab ${
                isActive ? "radiology-tabs__tab--active" : ""
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              <span className="radiology-tabs__label">
                {tab.label}
              </span>

              {count !== undefined && (
                <span
                  className={`radiology-tabs__count ${
                    isActive
                      ? "radiology-tabs__count--active"
                      : ""
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default RadiologyTabs;