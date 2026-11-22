import React from "react";
import CheckCircleOutlined from "@mui/icons-material/CheckCircleOutlined";

const CustomerTypeCard = ({
  customerType,
  config = {},
  selected = false,
  onSelect,
}) => {
  if (!customerType) {
    return null;
  }

  const {
    id,
    title = "",
    description = "",
    enabled = true,
  } = customerType;

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
      onSelect(customerType);
    }
  };

  return (
    <button
      type="button"
      className={`
        customer-type-card
        customer-type-card--${variant}
        ${
          selected
            ? "customer-type-card--selected"
            : ""
        }
        ${
          isDisabled
            ? "customer-type-card--disabled"
            : ""
        }
      `}
      onClick={handleSelect}
      disabled={isDisabled}
      aria-pressed={selected}
      aria-label={`Select ${title}`}
    >
      {/* =====================================================
          SELECTION INDICATOR
      ===================================================== */}

      {card.showSelectionIndicator !== false &&
        selected && (
          <span
            className="customer-type-card__selection"
            aria-hidden="true"
          >
            <CheckCircleOutlined />
          </span>
        )}


      {/* =====================================================
          ICON
      ===================================================== */}

      {card.showIcon !== false && (
        <span className="customer-type-card__icon">
          {Icon && (
            <Icon className="customer-type-card__icon-svg" />
          )}
        </span>
      )}


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <span className="customer-type-card__content">

        {card.showTitle !== false &&
          title && (
            <span className="customer-type-card__title">
              {title}
            </span>
          )}

        {card.showDescription !== false &&
          description && (
            <span className="customer-type-card__description">
              {description}
            </span>
          )}

      </span>
    </button>
  );
};

export default CustomerTypeCard;