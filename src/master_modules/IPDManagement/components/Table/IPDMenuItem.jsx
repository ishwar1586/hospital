import React from "react";

import MenuItem from "@mui/material/MenuItem";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const ACTION_ICON_MAP = {
  view: VisibilityOutlinedIcon,
  edit: EditOutlinedIcon,
  transfer: SwapHorizOutlinedIcon,
  discharge: ExitToAppOutlinedIcon,
  cancel: CancelOutlinedIcon,
};

const IPDMenuItem = ({
  action,
  onClick,
}) => {
  if (!action) {
    return null;
  }

  const IconComponent =
    ACTION_ICON_MAP[action.icon];

  return (
    <MenuItem
      dense
      className="ipd-menu-item"
      onClick={onClick}
    >
      {IconComponent && (
        <IconComponent className="ipd-menu-item__icon" />
      )}

      <span className="ipd-menu-item__label">
        {action.label}
      </span>
    </MenuItem>
  );
};

export default IPDMenuItem;