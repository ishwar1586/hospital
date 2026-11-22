import React from "react";
import "./BillingHeader.css";

const BillingHeader = ({
  config = {},
  onAction,
}) => {
  const {
    title = "",
    description = "",
    actions = [],
  } = config;

  const handleAction = (actionConfig) => {
    if (typeof onAction === "function") {
      onAction(actionConfig);
    }
  };

  const renderIcon = (IconComponent) => {
    if (!IconComponent) return null;

    return <IconComponent className="billing-header__action-icon" />;
  };

  return (
    <header className="billing-header">
      {/* Left Section */}
      <div className="billing-header__content">
        {title && (
          <h1 className="billing-header__title">
            {title}
          </h1>
        )}

        {description && (
          <p className="billing-header__description">
            {description}
          </p>
        )}
      </div>

      {/* Right Section */}
      {actions.length > 0 && (
        <div className="billing-header__actions">
          {actions.map((actionItem) => {
            const {
              id,
              label,
              type,
              icon,
              endIcon,
              variant = "secondary",
              action,
            } = actionItem;

            const buttonClass = `
              billing-header__action
              billing-header__action--${variant}
              ${type === "dropdown"
                ? "billing-header__action--dropdown"
                : ""}
            `.trim();

            return (
              <button
                key={id}
                type="button"
                className={buttonClass}
                onClick={() => handleAction(action)}
                aria-label={label}
              >
                {renderIcon(icon)}

                <span className="billing-header__action-label">
                  {label}
                </span>

                {endIcon && (
                  <span className="billing-header__action-end-icon">
                    {renderIcon(endIcon)}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default BillingHeader;