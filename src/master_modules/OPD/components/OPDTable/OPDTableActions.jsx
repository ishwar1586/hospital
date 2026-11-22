
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertOutlined from "@mui/icons-material/MoreVertOutlined";
import "./OPDTableActions.css";

import { opdActionsConfig } from "../../config/opdActions.config";

const OPDTableActions = ({ patient, onAction }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);

  const actions = opdActionsConfig.filter((action) => action.isActive);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAction = (actionId) => {
    handleClose();
    onAction?.(actionId, patient);
  };

  return (
    <div className="opd-table-actions">
      <IconButton
        className="opd-table-actions__trigger"
        aria-label={`Actions for ${patient.patientName}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={(event) => setAnchorEl(event.currentTarget)}
        size="small"
      >
        <MoreVertOutlined fontSize="small" />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        slotProps={{
          paper: {
            className: "opd-table-actions__menu",
            elevation: 3,
          },
        }}
      >
        {actions.map((action) => (
          <MenuItem
            key={action.id}
            className={`opd-table-actions__item opd-table-actions__item--${action.id}`}
            onClick={() => handleAction(action.id)}
          >
            {action.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default OPDTableActions;
