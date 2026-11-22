import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import "./StaffTabs.css";

import { staffTabsConfig } from "../../config/staffTabs.config";

const StaffTabs = ({
  activeTab = "all",
  onTabChange,
  loading = false,
}) => {
  const tabs = [...staffTabsConfig]
    .filter((tab) => tab.visible !== false)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  const handleChange = (_, newValue) => {
    onTabChange?.(newValue);
  };

  return (
    <Box className="staff-tabs">
      <Tabs
        value={activeTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        aria-label="Staff categories"
        className="staff-tabs__list"
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            value={tab.value}
            label={
              <span className="staff-tabs__label">
                <span>{tab.label}</span>

                {tab.count !== undefined && (
                  <span className="staff-tabs__count">
                    {tab.count}
                  </span>
                )}
              </span>
            }
            disabled={loading || tab.disabled === true}
            className="staff-tabs__item"
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default StaffTabs;