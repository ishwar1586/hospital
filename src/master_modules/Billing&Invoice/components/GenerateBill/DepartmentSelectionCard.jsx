import React from "react";

const DepartmentSelectionCard = ({
  department,
  config = {},
  selected = false,
  onSelect,
}) => {
  if (!department) {
    return null;
  }

  const {
    id,
    title = "",
    description = "",
    enabled = true,
  } = department;

  const {
    icons = {},
    variants = {},
    card = {},
  } = config;

  const Icon = icons[id];

  const variant =
    variants[id] || "blue";

  const isDisabled =
    enabled === false;

  const handleSelect = () => {
    if (isDisabled) {
      return;
    }

    if (typeof onSelect === "function") {
      onSelect(department);
    }
  };

  return (
    <button
      type="button"
      className={`
        department-selection-card
        department-selection-card--${variant}
        ${
          selected
            ? "department-selection-card--selected"
            : ""
        }
        ${
          isDisabled
            ? "department-selection-card--disabled"
            : ""
        }
      `}
      onClick={handleSelect}
      disabled={isDisabled}
      aria-pressed={selected}
      aria-label={`Select ${title} billing department`}
    >

      {/* ================= ICON ================= */}

      {card.showIcon !== false && (
        <span className="department-selection-card__icon">

          {Icon && (
            <Icon
              className="department-selection-card__icon-svg"
            />
          )}

        </span>
      )}


      {/* ================= CONTENT ================= */}

      <span className="department-selection-card__content">

        <span className="department-selection-card__title">
          {title}
        </span>

        {card.showDescription !== false &&
          description && (
            <span className="department-selection-card__description">
              {description}
            </span>
          )}

      </span>

    </button>
  );
};

export default DepartmentSelectionCard;