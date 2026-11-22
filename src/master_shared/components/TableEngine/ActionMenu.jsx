import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

const ActionMenu = ({
    row,
    actions = [],
    onAction,
}) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    //   const handleAction = (action) => {
    //     action?.onClick?.(row);
    //   handleClose();
    //   };

    const handleAction = (action) => {
        onAction?.(action.key, row);

        handleClose();
    };



    return (
        <>
            <IconButton
                size="small"
                onClick={handleOpen}
            >
                <MoreVertOutlinedIcon />
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                transformOrigin={{
                    horizontal: "right",
                    vertical: "top",
                }}
                anchorOrigin={{
                    horizontal: "right",
                    vertical: "bottom",
                }}
            >
                {actions.map((action) => {
                    const Icon = action.icon;

                    return (
                        <MenuItem
                            key={action.key}
                            onClick={() =>
                                handleAction(action)
                            }
                        >
                            {Icon && (
                                <ListItemIcon>
                                    <Icon fontSize="small" />
                                </ListItemIcon>
                            )}

                            <ListItemText>
                                {action.label}
                            </ListItemText>
                        </MenuItem>
                    );
                })}
            </Menu>
        </>
    );
};

export default ActionMenu;