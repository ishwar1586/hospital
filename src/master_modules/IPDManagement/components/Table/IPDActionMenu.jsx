import React, { useState } from "react";

import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import Menu from "@mui/material/Menu";

import { IPD_ACTION_CONFIG } from "../../config/ipdConfig";

import IPDMenuItem from "./IPDMenuItem";

const IPDActionMenu = ({
  patient,
  actionHandlers = {},
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const isOpen = Boolean(anchorEl);

  const actions = Array.isArray(IPD_ACTION_CONFIG)
    ? IPD_ACTION_CONFIG.filter(
        (action) => action?.visible !== false
      )
    : [];

  const handleOpen = (event) => {
    event.stopPropagation();

    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAction = (action) => {
    if (!action) {
      return;
    }

    const actionType = action.action;

    const handler =
      actionHandlers?.[actionType];

    handleClose();

    if (typeof handler === "function") {
      handler(patient);
    }
  };

  return (
    <>
      <button
        type="button"
        className="ipd-action-menu__button"
        aria-label="Patient actions"
        aria-haspopup="menu"
        aria-expanded={
          isOpen ? "true" : undefined
        }
        onClick={handleOpen}
      >
        <MoreVertOutlinedIcon />
      </button>

      <Menu
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby":
            "ipd-action-menu-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{
          paper: {
            className:
              "ipd-action-menu__paper",
          },
        }}
      >
        {actions.map((action) => (
          <IPDMenuItem
            key={
              action.id ??
              action.action
            }
            action={action}
            onClick={() =>
              handleAction(action)
            }
          />
        ))}
      </Menu>
    </>
  );
};

export default IPDActionMenu;