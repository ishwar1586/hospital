
import React, { useState } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import { staffActionsConfig } from "../../config/staffActions.config";

const actionIcons = {
  visibility: VisibilityOutlinedIcon,
  edit: EditOutlinedIcon,
  "delete-outline": DeleteOutlineOutlinedIcon,
};

const StaffTableActions = ({ staff, onAction }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const actions = [...staffActionsConfig]
    .filter((action) => action.visible !== false)
    .filter((action) => action.disabled !== true)
    .sort((a, b) => a.order - b.order);

  const handleSelect = (action) => {
    setAnchorEl(null);
    onAction?.(action.action, staff);
  };

  return (
    <>
      <IconButton
        size="small"
        aria-label={`Actions for ${staff.name || staff.employeeId}`}
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        <MoreVertIcon fontSize="small" />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {actions.map((action) => {
          const Icon = actionIcons[action.icon];

          return (
            <MenuItem
              key={action.id}
              onClick={() => handleSelect(action)}
              className={
                action.color === "error"
                  ? "staff-table__action--delete"
                  : ""
              }
            >
              {Icon && (
                <ListItemIcon>
                  <Icon fontSize="small" />
                </ListItemIcon>
              )}
              <ListItemText>{action.label}</ListItemText>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default StaffTableActions;
