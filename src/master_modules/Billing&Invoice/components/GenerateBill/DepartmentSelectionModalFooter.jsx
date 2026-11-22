import React from "react";

const DepartmentSelectionModalFooter = ({
  actionsConfig = {},
  onAction,
}) => {
  const footerActions =
    Array.isArray(actionsConfig?.footer)
      ? actionsConfig.footer
      : [];

  const handleAction = (actionItem) => {
    if (typeof onAction !== "function") {
      return;
    }

    onAction(actionItem);
  };

  if (footerActions.length === 0) {
    return null;
  }

  return (
    <footer className="department-selection-modal__footer">
      <div className="department-selection-modal__footer-actions">

        {footerActions.map((actionItem) => {
          if (!actionItem?.id) {
            return null;
          }

          const Icon = actionItem.icon;

          return (
            <button
              key={actionItem.id}
              type="button"
              className={`
                department-selection-modal__footer-button
                department-selection-modal__footer-button--${
                  actionItem.variant || "secondary"
                }
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
                <Icon className="department-selection-modal__footer-button-icon" />
              )}

              <span className="department-selection-modal__footer-button-label">
                {actionItem.label}
              </span>
            </button>
          );
        })}

      </div>
    </footer>
  );
};

export default DepartmentSelectionModalFooter;