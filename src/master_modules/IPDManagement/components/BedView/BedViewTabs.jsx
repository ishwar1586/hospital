import React from "react";

import "./BedViewTabs.css";


const BedViewTabs = ({
  tabs = [],
  activeTab = "",
  onTabChange,
}) => {
  return (
    <section className="bed-view-tabs">

      <div
        className="bed-view-tabs__list"
        role="tablist"
        aria-label="Bed View Tabs"
      >

        {tabs.map((tab) => {

          const isActive =
            activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`bed-view-tabs__tab ${
                isActive
                  ? "bed-view-tabs__tab--active"
                  : ""
              }`}
              onClick={() =>
                onTabChange?.(tab.id)
              }
            >
              {tab.label}
            </button>
          );

        })}

      </div>

    </section>
  );
};


export default BedViewTabs;