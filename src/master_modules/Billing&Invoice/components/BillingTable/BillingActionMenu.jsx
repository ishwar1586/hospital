import React, { useState } from "react";

import MoreVertOutlined from "@mui/icons-material/MoreVertOutlined";

const BillingActionMenu = ({
  row,
  actions = [],
  onAction,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((previous) => !previous);
  };

  const handleAction = (actionItem) => {
    setIsOpen(false);

    if (typeof onAction === "function") {
      onAction({
        action: actionItem.action,
        item: actionItem,
        row,
      });
    }
  };

  return (
    <div className="billing-action-menu">
      <button
        type="button"
        className="billing-action-menu__trigger"
        onClick={handleToggle}
        aria-label="Billing actions"
        aria-expanded={isOpen}
      >
        <MoreVertOutlined />
      </button>

      {isOpen && (
        <>
          <button
            type="button"
            className="billing-action-menu__backdrop"
            onClick={() => setIsOpen(false)}
            aria-label="Close billing action menu"
          />

          <div className="billing-action-menu__dropdown">
            {actions.map((actionItem) => {
              const Icon = actionItem.icon;

              return (
                <button
                  key={actionItem.id}
                  type="button"
                  className="billing-action-menu__item"
                  onClick={() =>
                    handleAction(actionItem)
                  }
                >
                  {Icon && (
                    <Icon className="billing-action-menu__item-icon" />
                  )}

                  <span className="billing-action-menu__item-label">
                    {actionItem.label}
                  </span>
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default BillingActionMenu;