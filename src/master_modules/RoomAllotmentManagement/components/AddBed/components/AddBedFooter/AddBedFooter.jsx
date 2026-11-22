import React from "react";
import "./AddBedFooter.css";

import { addBedFooterConfig } from "@/master_modules/RoomAllotmentManagement/config/addBed/addBedFooter.config";

import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const AddBedFooter = ({
  onCancel,
  onReset,
  onSubmit,
  isSubmitting = false,
}) => {
  const icons = {
    cancel: CloseOutlinedIcon,
    reset: RestartAltOutlinedIcon,
    save: SaveOutlinedIcon,
  };

  const handleAction = (action) => {
    if (action === "cancel") onCancel?.();
    if (action === "reset") onReset?.();
    if (action === "save") onSubmit?.();
  };

  return (
    <footer className="add-bed__footer">
      <div className="add-bed__footer-info">
        <span className="add-bed__footer-required">*</span>
        <span>Required fields must be completed before saving.</span>
      </div>

      <div className="add-bed__footer-actions">
        {addBedFooterConfig.buttons.map((button) => {
          const ButtonIcon = icons[button.action];
          const isSaveButton = button.action === "save";

          return (
            <button
              key={button.id}
              type="button"
              className={`add-bed__footer-button add-bed__footer-button--${button.variant}`}
              onClick={() => handleAction(button.action)}
              disabled={isSaveButton && isSubmitting}
            >
              <ButtonIcon />

              <span>
                {isSaveButton && isSubmitting
                  ? "Saving..."
                  : button.label}
              </span>
            </button>
          );
        })}
      </div>
    </footer>
  );
};

export default AddBedFooter;