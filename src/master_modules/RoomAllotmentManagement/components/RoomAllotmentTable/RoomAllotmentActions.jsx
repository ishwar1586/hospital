
import React, { useState } from "react";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { roomAllotmentActionsConfig } from "../../config/roomAllotmentActions.config";

const RoomAllotmentActions = ({ row, onAction }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAction = (actionId) => {
    setIsOpen(false);
    onAction?.(actionId, row);
  };

  return (
    <div className="room-allotment-actions">
      <button
        type="button"
        className="room-allotment-actions__trigger"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label="Open row actions"
        aria-expanded={isOpen}
      >
        <MoreVertOutlinedIcon />
      </button>

      {isOpen && (
        <>
          <button
            className="room-allotment-actions__backdrop"
            type="button"
            aria-label="Close actions"
            onClick={() => setIsOpen(false)}
          />

          <div className="room-allotment-actions__menu">
            {roomAllotmentActionsConfig.map((action) => {
              const ActionIcon = action.icon;

              return (
                <button
                  type="button"
                  key={action.id}
                  className={`room-allotment-actions__item ${
                    action.danger
                      ? "room-allotment-actions__item--danger"
                      : ""
                  }`}
                  onClick={() => handleAction(action.id)}
                >
                  <ActionIcon />
                  <span>{action.label}</span>
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default RoomAllotmentActions;
