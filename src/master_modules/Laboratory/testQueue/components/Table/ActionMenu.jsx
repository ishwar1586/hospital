import {
    useState,
} from "react";


// =========================================
// MUI COMPONENTS
// =========================================

import IconButton
    from "@mui/material/IconButton";

import Menu
    from "@mui/material/Menu";

import MenuItem
    from "@mui/material/MenuItem";


// =========================================
// MUI ICONS
// =========================================

import MoreVertOutlinedIcon
    from "@mui/icons-material/MoreVertOutlined";

import VisibilityOutlinedIcon
    from "@mui/icons-material/VisibilityOutlined";

import FlagOutlinedIcon
    from "@mui/icons-material/FlagOutlined";

import PlayCircleOutlineOutlinedIcon
    from "@mui/icons-material/PlayCircleOutlineOutlined";

import PauseCircleOutlineOutlinedIcon
    from "@mui/icons-material/PauseCircleOutlineOutlined";
import { Edit2Icon } from "lucide-react";


// =========================================
// COMPONENT
// =========================================

const ActionMenu = ({
    data,
    onAction,
}) => {


    // =========================================
    // MENU STATE
    // =========================================

    const [
        anchorEl,
        setAnchorEl,
    ] = useState(null);


    // =========================================
    // MENU OPEN STATE
    // =========================================

    const open =
        Boolean(anchorEl);


    // =========================================
    // OPEN MENU
    // =========================================

    const handleOpen = (
        event
    ) => {

        event.stopPropagation();

        setAnchorEl(
            event.currentTarget
        );

    };


    // =========================================
    // CLOSE MENU
    // =========================================

    const handleClose = () => {

        setAnchorEl(null);

    };


    // =========================================
    // ACTION
    // =========================================

    const handleAction = (
        action
    ) => {

        handleClose();


        if (onAction) {

            onAction(
                action,
                data
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

                className="
                    test-queue-action-menu__button
                "

                aria-label="Test queue actions"

                aria-controls={
                    open
                        ? "test-queue-action-menu"
                        : undefined
                }

                aria-haspopup="true"

                aria-expanded={
                    open
                        ? "true"
                        : undefined
                }

                onClick={
                    handleOpen
                }

            >

                <MoreVertOutlinedIcon />

            </IconButton>


            {/* =================================
                MENU
            ================================= */}

            <Menu

                id="
                    test-queue-action-menu
                "

                anchorEl={
                    anchorEl
                }

                open={
                    open
                }

                onClose={
                    handleClose
                }

                MenuListProps={{
                    "aria-labelledby":
                        "test-queue-action-button",
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

                        elevation: 3,

                        sx: {

                            minWidth: 185,

                            border:
                                "1px solid #e5e7eb",

                            borderRadius:
                                "8px",

                            mt: 0.5,

                            boxShadow:
                                "0 8px 24px rgba(15, 23, 42, 0.12)",

                        },

                    },

                }}

            >


                {/* =================================
                    VIEW
                ================================= */}

                <MenuItem
                    onClick={() =>
                        handleAction(
                            "view"
                        )
                    }
                >

                    <VisibilityOutlinedIcon />

                    <span>
                        View Details
                    </span>

                </MenuItem>


                {/* =================================
                    UPDATE PRIORITY
                ================================= */}

                <MenuItem
                    onClick={() =>
                        handleAction(
                            "updatePriority"
                        )
                    }
                >

                    <FlagOutlinedIcon />

                    <span>
                        Update Priority
                    </span>

                </MenuItem>

                {/* =================================}
                      Edit Test
                ================================= */}

                <MenuItem
                    onClick={() =>
                        handleAction(
                            "edit"
                        )
                    }
                >
                    <Edit2Icon />
                    <span>
                        Edit 
                    </span>
                </MenuItem>


                {/* =================================
                    START PROCESSING
                ================================= */}

                <MenuItem
                    onClick={() =>
                        handleAction(
                            "startProcessing"
                        )
                    }
                >

                    <PlayCircleOutlineOutlinedIcon />

                    <span>
                        Start Processing
                    </span>

                </MenuItem>


                {/* =================================
                    PUT ON HOLD
                ================================= */}

                <MenuItem
                    onClick={() =>
                        handleAction(
                            "putOnHold"
                        )
                    }
                >

                    <PauseCircleOutlineOutlinedIcon />

                    <span>
                        Put on Hold
                    </span>

                </MenuItem>


            </Menu>

        </>

    );

};


export default ActionMenu;