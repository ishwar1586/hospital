import { useState } from "react";

import IconButton from "@mui/material/IconButton";

import Menu from "@mui/material/Menu";

import MenuItem from "@mui/material/MenuItem";

import MoreVertOutlinedIcon
    from "@mui/icons-material/MoreVertOutlined";

import VisibilityOutlinedIcon
    from "@mui/icons-material/VisibilityOutlined";

import EditOutlinedIcon
    from "@mui/icons-material/EditOutlined";

import LocalPrintshopOutlinedIcon
    from "@mui/icons-material/LocalPrintshopOutlined";

import DeleteOutlineOutlinedIcon
    from "@mui/icons-material/DeleteOutlineOutlined";


const ActionMenu = ({
    collection,
    onAction,
}) => {

    const [anchorEl, setAnchorEl] =
        useState(null);


    const open =
        Boolean(anchorEl);


    const handleOpen = (event) => {

        setAnchorEl(
            event.currentTarget
        );

    };


    const handleClose = () => {

        setAnchorEl(null);

    };


    const handleAction = (
        actionId
    ) => {

        handleClose();

        if (onAction) {

            onAction(
                actionId,
                collection
            );

        }

    };


    return (
        <>
            <IconButton
                size="small"
                onClick={handleOpen}
                className="collection-action-button"
            >

                <MoreVertOutlinedIcon />

            </IconButton>


            <Menu
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

                <MenuItem
                    onClick={() =>
                        handleAction("view")
                    }
                >

                    <VisibilityOutlinedIcon />

                    <span>
                        View
                    </span>

                </MenuItem>


                <MenuItem
                    onClick={() =>
                        handleAction("edit")
                    }
                >

                    <EditOutlinedIcon />

                    <span>
                        Edit
                    </span>

                </MenuItem>


                <MenuItem
                    onClick={() =>
                        handleAction("print")
                    }
                >

                    <LocalPrintshopOutlinedIcon />

                    <span>
                        Print Barcode
                    </span>

                </MenuItem>


                <MenuItem
                    onClick={() =>
                        handleAction("delete")
                    }
                >

                    <DeleteOutlineOutlinedIcon />

                    <span>
                        Delete
                    </span>

                </MenuItem>

            </Menu>
        </>
    );
};


export default ActionMenu;