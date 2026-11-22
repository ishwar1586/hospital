import React from "react";

import { patientTabs } from "../../config/tabs";

import "./PatientTabs.css";

const PatientTabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="patient-tabs-wrapper">
      <div className="patient-tabs" role="tablist">
        {patientTabs.map((tab) => {
          const isActive = activeTab === tab.value;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`patient-tab ${
                isActive ? "patient-tab--active" : ""
              }`}
              onClick={() => onTabChange(tab.value)}
            >
              <span className="patient-tab__label">
                {tab.label}
              </span>

              <span className="patient-tab__count">
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PatientTabs;