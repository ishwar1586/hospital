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

import Divider
    from "@mui/material/Divider";


// =========================================
// MUI ICONS
// =========================================

import MoreVertOutlinedIcon
    from "@mui/icons-material/MoreVertOutlined";

import EditNoteOutlinedIcon
    from "@mui/icons-material/EditNoteOutlined";

import VisibilityOutlinedIcon
    from "@mui/icons-material/VisibilityOutlined";

import HistoryOutlinedIcon
    from "@mui/icons-material/HistoryOutlined";

import FactCheckOutlinedIcon
    from "@mui/icons-material/FactCheckOutlined";


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
    // OPEN STATE
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


        if (
            typeof onAction ===
            "function"
        ) {

            onAction(
                action,
                data
            );

        }

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <>

            {/* =================================
                MORE BUTTON
            ================================= */}

            <IconButton

                type="button"

                size="small"

                className="
                    result-entry-action-menu__button
                "

                aria-label="
                    Result entry actions
                "

                aria-controls={
                    open
                        ? "result-entry-action-menu"
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
                    result-entry-action-menu
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

                onClick={(event) =>
                    event.stopPropagation()
                }

                anchorOrigin={{
                    vertical: "bottom",

                    horizontal: "right",
                }}

                transformOrigin={{
                    vertical: "top",

                    horizontal: "right",
                }}

                MenuListProps={{
                    "aria-label":
                        "Result entry actions",
                }}

                slotProps={{
                    paper: {

                        elevation: 3,

                        sx: {

                            minWidth: 205,

                            border:
                                "1px solid #e5e7eb",

                            borderRadius:
                                "8px",

                            mt: 0.5,

                            boxShadow:
                                "0 8px 24px rgba(15, 23, 42, 0.12)",

                            overflow:
                                "hidden",

                            "& .MuiMenuItem-root": {

                                minHeight:
                                    "34px",

                                gap:
                                    "9px",

                                padding:
                                    "7px 11px",

                                color:
                                    "#475569",

                                fontSize:
                                    "9px",

                                fontWeight:
                                    600,

                            },

                            "& .MuiMenuItem-root:hover": {

                                backgroundColor:
                                    "#f8fafc",

                                color:
                                    "#1e293b",

                            },

                            "& .MuiMenuItem-root svg": {

                                width:
                                    "16px",

                                height:
                                    "16px",

                                color:
                                    "#64748b",

                            },

                        },

                    },

                }}

            >


                {/* =================================
                    ENTER RESULT
                ================================= */}

                <MenuItem
                    onClick={() =>
                        handleAction(
                            "enterResult"
                        )
                    }
                >

                    <EditNoteOutlinedIcon />

                    <span>
                        Enter Result
                    </span>

                </MenuItem>


                {/* =================================
                    VIEW DETAILS
                ================================= */}

                <MenuItem
                    onClick={() =>
                        handleAction(
                            "viewDetails"
                        )
                    }
                >

                    <VisibilityOutlinedIcon />

                    <span>
                        View Details
                    </span>

                </MenuItem>


                {/* =================================
                    EDIT RESULT
                ================================= */}

                <MenuItem
                    onClick={() =>
                        handleAction(
                            "editResult"
                        )
                    }
                >

                    <EditNoteOutlinedIcon />

                    <span>
                        Edit Result
                    </span>

                </MenuItem>


                <Divider
                    sx={{
                        margin:
                            "4px 0",
                    }}
                />


                {/* =================================
                    PREVIOUS RESULTS
                ================================= */}

                <MenuItem
                    onClick={() =>
                        handleAction(
                            "previousResults"
                        )
                    }
                >

                    <HistoryOutlinedIcon />

                    <span>
                        Previous Results
                    </span>

                </MenuItem>


                {/* =================================
                    VERIFICATION HISTORY
                ================================= */}

                <MenuItem
                    onClick={() =>
                        handleAction(
                            "verificationHistory"
                        )
                    }
                >

                    <FactCheckOutlinedIcon />

                    <span>
                        Verification History
                    </span>

                </MenuItem>


            </Menu>

        </>

    );

};


export default ActionMenu;