import React from "react";

import { IPD_TABS_CONFIG } from "../../config/ipdConfig";

import "./IPDTabs.css";

const IPDTabs = ({
  activeTab,
  onTabChange,
}) => {
  const tabs = Array.isArray(IPD_TABS_CONFIG)
    ? IPD_TABS_CONFIG
    : [];

  const handleTabChange = (tab) => {
    if (!tab?.value) {
      return;
    }

    if (typeof onTabChange === "function") {
      onTabChange(tab.value);
    }
  };

  return (
    <div className="ipd-tabs">
      <div className="ipd-tabs__list">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.value;

          return (
            <button
              key={tab.id}
              type="button"
              className={`ipd-tabs__tab ${
                isActive ? "ipd-tabs__tab--active" : ""
              }`}
              onClick={() => handleTabChange(tab)}
            >
              <span className="ipd-tabs__label">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default IPDTabs;