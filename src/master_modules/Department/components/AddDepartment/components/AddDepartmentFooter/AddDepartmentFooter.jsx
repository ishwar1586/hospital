
import React from "react";
import "./AddDepartmentFooter.css";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

import { addDepartmentFooterConfig } from "../../../../config/addDepartment/addDepartmentFooter.config";

const AddDepartmentFooter = ({
  onCancel,
  onReset,
  onSave,
  isSaving = false,
  disabled = false,
}) => {
  const { cancel, reset, save } = addDepartmentFooterConfig;

  return (
    <footer className="add-department-footer">
      <div className="add-department-footer__left">
        <button
          type="button"
          className="add-department-footer__button add-department-footer__button--cancel"
          onClick={onCancel}
          disabled={disabled || isSaving}
        >
          <CloseOutlinedIcon className="add-department-footer__button-icon" />
          {cancel.label}
        </button>
      </div>

      <div className="add-department-footer__right">
        <button
          type="button"
          className="add-department-footer__button add-department-footer__button--reset"
          onClick={onReset}
          disabled={disabled || isSaving}
        >
          <RestartAltOutlinedIcon className="add-department-footer__button-icon" />
          {reset.label}
        </button>

        <button
          type="button"
          className="add-department-footer__button add-department-footer__button--save"
          onClick={onSave}
          disabled={disabled || isSaving}
        >
          <SaveOutlinedIcon className="add-department-footer__button-icon" />

          {isSaving ? "Saving..." : save.label}
        </button>
      </div>
    </footer>
  );
};

export default AddDepartmentFooter;
