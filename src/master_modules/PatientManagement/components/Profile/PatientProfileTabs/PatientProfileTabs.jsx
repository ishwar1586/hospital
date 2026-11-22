import React from "react";

import "./PatientProfileTabs.css";

const PatientProfileTabs = ({
  activeTab,
  onTabChange,
}) => {

  const tabs = [
    {
      id: "overview",
      label: "Overview",
    },
    {
      id: "visits",
      label: "Visits",
      count: 12,
    },
    {
      id: "prescriptions",
      label: "Prescriptions",
      count: 8,
    },
    {
      id: "reports",
      label: "Reports",
      count: 15,
    },
    {
      id: "bills",
      label: "Bills",
      count: 5,
    },
    {
      id: "documents",
      label: "Documents",
      count: 3,
    },
  ];

  return (
    <div className="patient-profile-tabs">

      <div className="patient-profile-tabs-list">

        {tabs.map((tab) => {

          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              className={`patient-profile-tab ${
                isActive ? "active" : ""
              }`}
              onClick={() => onTabChange(tab.id)}
            >

              <span className="patient-profile-tab-label">
                {tab.label}
              </span>

              {tab.count !== undefined && (
                <span className="patient-profile-tab-count">
                  {tab.count}
                </span>
              )}

            </button>
          );
        })}

      </div>

    </div>
  );
};

export default PatientProfileTabs;