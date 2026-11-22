
import React, { useMemo } from "react";

import TestRow from "../TestRow/TestRow";

import { labRadiologyConfig } from "../../../../config/labRadiology.config";

import "./TestList.css";

const TestList = ({
  tests = [],
  selectedTests = [],
  onTestChange,
  onSelectAll,
  loading = false,
  disabled = false,
}) => {
  const { testSelection } = labRadiologyConfig;
  const columns = testSelection.columns;

  const selectedIds = useMemo(
    () => new Set(selectedTests.map((test) => test.id)),
    [selectedTests]
  );

  const visibleTestIds = tests.map((test) => test.id);

  const selectedVisibleCount = visibleTestIds.filter((id) =>
    selectedIds.has(id)
  ).length;

  const allSelected =
    visibleTestIds.length > 0 &&
    selectedVisibleCount === visibleTestIds.length;

  const someSelected =
    selectedVisibleCount > 0 && !allSelected;

  const handleSelectAll = (event) => {
    onSelectAll?.(event.target.checked, tests);
  };

  const renderHeader = (column) => {
    if (column.type === "checkbox") {
      return (
        <input
          type="checkbox"
          className="lab-test-list__select-all"
          checked={allSelected}
          ref={(element) => {
            if (element) {
              element.indeterminate = someSelected;
            }
          }}
          onChange={handleSelectAll}
          disabled={disabled || loading || tests.length === 0}
          aria-label="Select all visible tests"
        />
      );
    }

    return column.label;
  };

  
  return (
    <div
      className="lab-test-list"
      role="tabpanel"
    >
      <div className="lab-test-list__header">
        {columns.map((column) => (
          <div
            key={column.key}
            className={`lab-test-list__heading lab-test-list__heading--${column.key}`}
          >
            {column.type === "checkbox" ? (
              <input
                type="checkbox"
                className="lab-test-list__select-all"
                checked={allSelected}
                ref={(element) => {
                  if (element) {
                    element.indeterminate = someSelected;
                  }
                }}
                onChange={handleSelectAll}
                disabled={disabled || loading || tests.length === 0}
                aria-label="Select all visible tests"
              />
            ) : (
              column.label
            )}
          </div>
        ))}
      </div>

      <div className="lab-test-list__body">
        {loading ? (
          <div className="lab-test-list__message">
            <span className="lab-test-list__loader" />
            {testSelection.loadingMessage}
          </div>
        ) : tests.length === 0 ? (
          <div className="lab-test-list__message">
            {testSelection.emptyMessage}
          </div>
        ) : (
          tests.map((test) => (
            <TestRow
              key={test.id}
              test={test}
              checked={selectedIds.has(test.id)}
              onChange={onTestChange}
              disabled={disabled}
            />
          ))
        )}
      </div>
    </div>
  );

};

export default TestList;
