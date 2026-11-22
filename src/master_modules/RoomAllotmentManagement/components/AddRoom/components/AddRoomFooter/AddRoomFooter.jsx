
import React from "react";
import "./AddRoomFooter.css";

import { addRoomFooterConfig } from "../../../../config/addRoom/addRoomFooter.config";

const AddRoomFooter = ({
  onCancel,
  onReset,
  onSave,
  isSaving = false,
}) => {
  const actionHandlers = {
    cancel: onCancel,
    reset: onReset,
    save: onSave,
  };

  const leftActions = addRoomFooterConfig.actions.filter(
    (action) => action.position === "left"
  );

  const rightActions = addRoomFooterConfig.actions.filter(
    (action) => action.position === "right"
  );

  const renderAction = (action) => {
    const ActionIcon = action.icon;
    const isSaveAction = action.id === "save";

    return (
      <button
        key={action.id}
        type="button"
        className={`add-room-footer__button add-room-footer__button--${action.variant}`}
        onClick={actionHandlers[action.id]}
        disabled={isSaveAction && isSaving}
      >
        <ActionIcon className="add-room-footer__button-icon" />

        <span>
          {isSaveAction && isSaving ? "Saving..." : action.label}
        </span>
      </button>
    );
  };

  return (
    <footer className="add-room-footer">

      {/* LEFT ACTION */}
      <div className="add-room-footer__left">
        {leftActions.map(renderAction)}
      </div>

      {/* RIGHT ACTIONS */}
      <div className="add-room-footer__right">
        {rightActions.map(renderAction)}
      </div>

    </footer>
  );
};

export default AddRoomFooter;
