import React from "react";

const DepartmentSelectionModalHeader = ({
  config = {},
  actionsConfig = {},
  onAction,
}) => {
  const {
    title = "",
    subtitle = "",
  } = config;

  const headerActions =
    Array.isArray(actionsConfig?.header)
      ? actionsConfig.header
      : [];

  const handleAction = (actionItem) => {
    if (typeof onAction !== "function") {
      return;
    }

    onAction(actionItem);
  };

  return (
    <header className="department-selection-modal__header">

      {/* ================= CONTENT ================= */}

      <div className="department-selection-modal__header-content">

        {title && (
          <h2 className="department-selection-modal__title">
            {title}
          </h2>
        )}

        {subtitle && (
          <p className="department-selection-modal__subtitle">
            {subtitle}
          </p>
        )}

      </div>


      {/* ================= ACTIONS ================= */}

      {headerActions.length > 0 && (
        <div className="department-selection-modal__header-actions">

          {headerActions.map((actionItem) => {
            if (!actionItem?.id) {
              return null;
            }

            const Icon = actionItem.icon;

            return (
              <button
                key={actionItem.id}
                type="button"
                className={`
                  department-selection-modal__close
                  department-selection-modal__close--${actionItem.variant || "icon"}
                `}
                onClick={() =>
                  handleAction(actionItem)
                }
                aria-label={
                  actionItem.ariaLabel ||
                  actionItem.label
                }
              >
                {Icon && (
                  <Icon className="department-selection-modal__close-icon" />
                )}
              </button>
            );
          })}

        </div>
      )}

    </header>
  );
};

export default DepartmentSelectionModalHeader;