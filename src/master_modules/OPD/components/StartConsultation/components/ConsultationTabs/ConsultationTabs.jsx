
import React from "react";

import { consultationTabsConfig } from "../../config/consultationTabs.config";
import "./ConsultationTabs.css";

const ConsultationTabs = ({
  activeTab = consultationTabsConfig.defaultTab,
  onTabChange,
  tabs = consultationTabsConfig.tabs,
}) => {
  const handleTabChange = (tabId) => {
    if (typeof onTabChange === "function") {
      onTabChange(tabId);
    }
  };

  return (
    <nav className="consultation-tabs" aria-label="Consultation sections">
      <div className="consultation-tabs__list" role="tablist">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              id={`consultation-tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`consultation-panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              className={`consultation-tabs__tab ${
                isActive ? "consultation-tabs__tab--active" : ""
              }`}
              onClick={() => handleTabChange(tab.id)}
            >
              {Icon && <Icon className="consultation-tabs__icon" />}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default ConsultationTabs;
