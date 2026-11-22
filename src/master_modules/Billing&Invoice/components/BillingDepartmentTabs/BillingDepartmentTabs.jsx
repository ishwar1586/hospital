import React, { useEffect, useState } from "react";
import "./BillingDepartmentTabs.css";

const BillingDepartmentTabs = ({
  tabs = [],
  config = {},
  activeTab,
  onTabChange,
}) => {
  const {
    defaultActiveTabId = "",
    behavior = {},
  } = config;

  const [internalActiveTab, setInternalActiveTab] = useState(
    activeTab || defaultActiveTabId
  );

  const currentActiveTab =
    activeTab !== undefined
      ? activeTab
      : internalActiveTab;

  useEffect(() => {
    if (activeTab !== undefined) {
      setInternalActiveTab(activeTab);
    }
  }, [activeTab]);

  const handleTabClick = (tab) => {
    const selectedValue = tab.value ?? tab.id;

    setInternalActiveTab(selectedValue);

    if (typeof onTabChange === "function") {
      onTabChange(tab);
    }
  };

  if (!Array.isArray(tabs) || tabs.length === 0) {
    return null;
  }

  const isScrollable = behavior.scrollable !== false;

  return (
    <section
      className={`billing-department-tabs ${
        isScrollable
          ? "billing-department-tabs--scrollable"
          : ""
      }`}
    >
      <div className="billing-department-tabs__wrapper">
        {tabs.map((tab) => {
          const tabValue = tab.value ?? tab.id;

          const isActive =
            currentActiveTab === tabValue;

          return (
            <button
              key={tab.id}
              type="button"
              className={`
                billing-department-tabs__tab
                ${
                  isActive
                    ? "billing-department-tabs__tab--active"
                    : "billing-department-tabs__tab--inactive"
                }
              `}
              onClick={() => handleTabClick(tab)}
              aria-selected={isActive}
              role="tab"
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default BillingDepartmentTabs;