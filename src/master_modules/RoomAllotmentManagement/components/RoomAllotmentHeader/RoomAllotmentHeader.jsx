import React from "react";
import "./RoomAllotmentHeader.css";

import { roomAllotmentHeaderConfig } from "../../config/roomAllotmentHeader.config";

const RoomAllotmentHeader = ({ onAction }) => {
  const { title, description, actions } = roomAllotmentHeaderConfig;

  const handleActionClick = (action) => {
    if (action.disabled) return;

    onAction?.(action.id);
  };

  return (
    <div className="room-allotment-header">

      {/* Header Information */}

      <div className="room-allotment-header__content">

        <h1 className="room-allotment-header__title">
          {title}
        </h1>

        <p className="room-allotment-header__description">
          {description}
        </p>

      </div>

      {/* Header Actions */}

      <div className="room-allotment-header__actions">

        {actions.map((action) => {
          const ActionIcon = action.icon;

          return (
            <button
              key={action.id}
              type="button"
              className={`room-allotment-header__action room-allotment-header__action--${action.variant}`}
              onClick={() => handleActionClick(action)}
              disabled={action.disabled}
            >

              {ActionIcon && (
                <ActionIcon
                  className="room-allotment-header__action-icon"
                />
              )}

              <span className="room-allotment-header__action-label">
                {action.label}
              </span>

            </button>
          );
        })}

      </div>

    </div>
  );
};

export default RoomAllotmentHeader;