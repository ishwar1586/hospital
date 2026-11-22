import {
    useState,
} from "react";

import IconButton
    from "@mui/material/IconButton";

import Menu
    from "@mui/material/Menu";

import MenuItem
    from "@mui/material/MenuItem";

import Divider
    from "@mui/material/Divider";

import MoreVertOutlinedIcon
    from "@mui/icons-material/MoreVertOutlined";

import VisibilityOutlinedIcon
    from "@mui/icons-material/VisibilityOutlined";

import EditOutlinedIcon
    from "@mui/icons-material/EditOutlined";

import DeleteOutlineOutlinedIcon
    from "@mui/icons-material/DeleteOutlineOutlined";


const ActionMenu = ({
    processing,
    onAction,
}) => {

    const [
        anchorEl,
        setAnchorEl,
    ] = useState(null);


    const open =
        Boolean(anchorEl);


    // =========================================
    // OPEN MENU
    // =========================================

    const handleOpen = (
        event
    ) => {

        setAnchorEl(
            event.currentTarget
        );

    };


    // =========================================
    // CLOSE MENU
    // =========================================

    const handleClose = () => {

        setAnchorEl(
            null
        );

    };


    // =========================================
    // HANDLE ACTION
    // =========================================

    const handleAction = (
        action
    ) => {

        handleClose();


        if (onAction) {

            onAction(
                action,
                processing
            );

        }

    };


    return (

        <>

            {/* =================================
                MORE BUTTON
            ================================= */}

            <IconButton
                type="button"
                size="small"
                onClick={
                    handleOpen
                }
                aria-label="More actions"
                aria-controls={
                    open
                        ? "processing-action-menu"
                        : undefined
                }
                aria-haspopup="true"
                aria-expanded={
                    open
                        ? "true"
                        : undefined
                }
                sx={{
                    width: 30,
                    height: 30,
                    color: "#64748b",
                    borderRadius: "6px",

                    "&:hover": {
                        backgroundColor:
                            "#f1f5f9",
                        color:
                            "#1f2937",
                    },
                }}
            >

                <MoreVertOutlinedIcon
                    sx={{
                        fontSize: 18,
                    }}
                />

            </IconButton>


            {/* =================================
                ACTION MENU
            ================================= */}

            <Menu
                id="processing-action-menu"
                anchorEl={
                    anchorEl
                }
                open={
                    open
                }
                onClose={
                    handleClose
                }
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
                        sx: {
                            minWidth: 155,
                            mt: 0.5,
                            border:
                                "1px solid #e5e7eb",
                            borderRadius:
                                "8px",
                            boxShadow:
                                "0 8px 24px rgba(15, 23, 42, 0.12)",
                        },
                    },
                }}
            >

                {/* =============================
                    VIEW
                ============================= */}

                <MenuItem
                    onClick={() =>
                        handleAction(
                            "view"
                        )
                    }
                    sx={{
                        minHeight: 36,
                        gap: 1,
                        px: 1.5,
                        fontSize: 11,
                        color: "#374151",
                    }}
                >

                    <VisibilityOutlinedIcon
                        sx={{
                            fontSize: 17,
                            color: "#64748b",
                        }}
                    />

                    <span>
                        View
                    </span>

                </MenuItem>


                {/* =============================
                    EDIT
                ============================= */}

                <MenuItem
                    onClick={() =>
                        handleAction(
                            "edit"
                        )
                    }
                    sx={{
                        minHeight: 36,
                        gap: 1,
                        px: 1.5,
                        fontSize: 11,
                        color: "#374151",
                    }}
                >

                    <EditOutlinedIcon
                        sx={{
                            fontSize: 17,
                            color: "#64748b",
                        }}
                    />

                    <span>
                        Edit
                    </span>

                </MenuItem>


                <Divider
                    sx={{
                        my: 0.5,
                    }}
                />


                {/* =============================
                    DELETE
                ============================= */}

                <MenuItem
                    onClick={() =>
                        handleAction(
                            "delete"
                        )
                    }
                    sx={{
                        minHeight: 36,
                        gap: 1,
                        px: 1.5,
                        fontSize: 11,
                        color: "#dc2626",

                        "&:hover": {
                            backgroundColor:
                                "#fef2f2",
                        },
                    }}
                >

                    <DeleteOutlineOutlinedIcon
                        sx={{
                            fontSize: 17,
                            color: "#dc2626",
                        }}
                    />

                    <span>
                        Delete
                    </span>

                </MenuItem>

            </Menu>

        </>

    );

};


export default ActionMenu;