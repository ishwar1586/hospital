
import React from "react";
import "./RoomAllotmentTabs.css";

import { roomAllotmentTabsConfig } from "../../config/roomAllotmentTabs.config";

const RoomAllotmentTabs = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="room-allotment-tabs">

      <div
        className="room-allotment-tabs__list"
        role="tablist"
        aria-label="Room allotment navigation"
      >

        {roomAllotmentTabsConfig.map((tab) => {
          const TabIcon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`room-allotment-tab-${tab.id}`}
              aria-selected={isActive}
              className={`room-allotment-tabs__item ${
                isActive
                  ? "room-allotment-tabs__item--active"
                  : ""
              }`}
              onClick={() => onTabChange?.(tab.id)}
            >

              {TabIcon && (
                <TabIcon className="room-allotment-tabs__icon" />
              )}

              <span className="room-allotment-tabs__label">
                {tab.label}
              </span>

            </button>
          );
        })}

      </div>

    </div>
  );
};

export default RoomAllotmentTabs;
