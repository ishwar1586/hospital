import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const ActionMenu = ({ row, onAction }) => {

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleAction = (action) => {

        handleClose();

        if (onAction) {
            onAction(action, row);
        }
    };

    return (
        <>
            <IconButton
                size="small"
                onClick={handleOpen}
                aria-label="Test actions"
                aria-controls={open ? "test-action-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
            >
                <MoreVertOutlinedIcon fontSize="small" />
            </IconButton>

            <Menu
                id="test-action-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <MenuItem onClick={() => handleAction("view")}>
                    <VisibilityOutlinedIcon fontSize="small" />
                    <span>View</span>
                </MenuItem>

                <MenuItem onClick={() => handleAction("edit")}>
                    <EditOutlinedIcon fontSize="small" />
                    <span>Edit</span>
                </MenuItem>

                <MenuItem onClick={() => handleAction("duplicate")}>
                    <ContentCopyOutlinedIcon fontSize="small" />
                    <span>Duplicate</span>
                </MenuItem>

                <Divider />

                <MenuItem onClick={() => handleAction("delete")}>
                    <DeleteOutlineOutlinedIcon fontSize="small" />
                    <span>Delete</span>
                </MenuItem>
            </Menu>
        </>
    );
};

export default ActionMenu;