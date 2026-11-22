
import React from "react";

import "./TestRow.css";

const TestRow = ({
  test,
  checked = false,
  onChange,
  disabled = false,
}) => {
  if (!test) return null;

  const handleChange = (event) => {
    onChange?.(test, event.target.checked);
  };

  const categoryColor = test.category?.color || "default";

  return (
    <label
      className={`lab-test-row ${
        checked ? "lab-test-row--selected" : ""
      } ${disabled ? "lab-test-row--disabled" : ""}`}
      htmlFor={`lab-test-${test.id}`}
    >
      <div className="lab-test-row__selection">
        <input
          id={`lab-test-${test.id}`}
          type="checkbox"
          className="lab-test-row__checkbox"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
        />
      </div>

      <div className="lab-test-row__name">
        <span>{test.name}</span>
      </div>

      <div className="lab-test-row__category">
        <span
          className={`lab-test-row__badge lab-test-row__badge--${categoryColor}`}
        >
          {test.category?.label || "Uncategorized"}
        </span>
      </div>
    </label>
  );
};

export default TestRow;
