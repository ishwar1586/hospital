
import React from "react";
import "./AddWardFooter.css";

import { addWardFooterConfig } from "../../../../config/addWard/addWardFooter.config";

const AddWardFooter = ({
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

  const leftActions = addWardFooterConfig.actions.filter(
    (action) => action.position === "left"
  );

  const rightActions = addWardFooterConfig.actions.filter(
    (action) => action.position === "right"
  );

  const renderAction = (action) => {
    const ActionIcon = action.icon;
    const isSaveAction = action.id === "save";

    return (
      <button
        key={action.id}
        type="button"
        className={`add-ward-footer__button add-ward-footer__button--${action.variant}`}
        onClick={actionHandlers[action.id]}
        disabled={isSaveAction && isSaving}
      >
        <ActionIcon className="add-ward-footer__button-icon" />

        <span>
          {isSaveAction && isSaving ? "Saving..." : action.label}
        </span>
      </button>
    );
  };

  return (
    <footer className="add-ward-footer">

      {/* LEFT ACTION */}
      <div className="add-ward-footer__left">
        {leftActions.map(renderAction)}
      </div>

      {/* RIGHT ACTIONS */}
      <div className="add-ward-footer__right">
        {rightActions.map(renderAction)}
      </div>

    </footer>
  );
};

export default AddWardFooter;
