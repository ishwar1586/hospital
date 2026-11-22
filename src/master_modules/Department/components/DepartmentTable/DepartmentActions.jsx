import React, { useState } from "react";
import "./DepartmentActions.css";

import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import { departmentActionsConfig } from "../../config/departmentActions.config";

const actionIcons = {
  view: <VisibilityOutlinedIcon />,
  edit: <EditOutlinedIcon />,
  delete: <DeleteOutlineOutlinedIcon />,
};

const DepartmentActions = ({ department, onAction }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAction = (actionId) => {
    handleClose();
    onAction?.(actionId, department);
  };

  return (
    <div className="department-actions">
      <IconButton
        className="department-actions__trigger"
        onClick={handleOpen}
        aria-label="Department actions"
        size="small"
      >
        <MoreVertOutlinedIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          className: "department-actions__menu",
        }}
      >
        {departmentActionsConfig.map((action) => (
          <MenuItem
            key={action.id}
            onClick={() => handleAction(action.id)}
            className={
              action.danger
                ? "department-actions__menu-item department-actions__menu-item--danger"
                : "department-actions__menu-item"
            }
          >
            <ListItemIcon
              className="department-actions__menu-icon"
            >
              {actionIcons[action.icon]}
            </ListItemIcon>

            <ListItemText primary={action.label} />
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default DepartmentActions;