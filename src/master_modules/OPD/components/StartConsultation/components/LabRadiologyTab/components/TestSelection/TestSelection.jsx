
import React from "react";

import TestTypeTabs from "../TestTypeTabs/TestTypeTabs";
import TestList from "../TestList/TestList";

import { labRadiologyConfig } from "../../../../config/labRadiology.config";
import { labRadiologyTabsConfig } from "../../../../config/labRadiologyTabs.config";

import "./TestSelection.css";

const TestSelection = ({
  activeTab = labRadiologyTabsConfig.defaultTab,
  onTabChange,

  tests = [],
  selectedTests = [],

  onTestChange,
  onSelectAll,

  loading = false,
  disabled = false,
}) => {
  const { testSelection } = labRadiologyConfig;

  const activeTabConfig = labRadiologyTabsConfig.tabs.find(
    (tab) => tab.id === activeTab
  );

  const panelId = activeTabConfig
    ? `lab-type-panel-${activeTabConfig.id}`
    : undefined;

  return (
    <section className="lab-test-selection">
      <div className="lab-test-selection__tabs">
        <TestTypeTabs
          activeTab={activeTab}
          onChange={onTabChange}
          disabled={disabled || loading}
        />
      </div>

      <div
        className="lab-test-selection__content"
        id={panelId}
        role="tabpanel"
        aria-labelledby={
          activeTabConfig
            ? `lab-type-tab-${activeTabConfig.id}`
            : undefined
        }
      >
        <div className="lab-test-selection__table">
          <div className="lab-test-selection__table-title">
            {testSelection.title}
          </div>

          <TestList
            tests={tests}
            selectedTests={selectedTests}
            onTestChange={onTestChange}
            onSelectAll={onSelectAll}
            loading={loading}
            disabled={disabled}
          />
        </div>
      </div>
    </section>
  );
};

export default TestSelection;
