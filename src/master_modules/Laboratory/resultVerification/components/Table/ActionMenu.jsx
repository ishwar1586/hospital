import {
    useState,
} from "react";


// =========================================
// MUI
// =========================================

import IconButton
    from "@mui/material/IconButton";

import Menu
    from "@mui/material/Menu";

import MenuItem
    from "@mui/material/MenuItem";


// =========================================
// ICONS
// =========================================

import MoreVertOutlinedIcon
    from "@mui/icons-material/MoreVertOutlined";

import VisibilityOutlinedIcon
    from "@mui/icons-material/VisibilityOutlined";

import RateReviewOutlinedIcon
    from "@mui/icons-material/RateReviewOutlined";

import HistoryOutlinedIcon
    from "@mui/icons-material/HistoryOutlined";

import ArticleOutlinedIcon
    from "@mui/icons-material/ArticleOutlined";

import BlockOutlinedIcon
    from "@mui/icons-material/BlockOutlined";


// =========================================
// COMPONENT
// =========================================

const ActionMenu = ({
    data = {},

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

    const isOpen =
        Boolean(
            anchorEl
        );


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

        setAnchorEl(
            null
        );

    };


    // =========================================
    // ACTION
    // =========================================

    const handleAction = (
        actionId
    ) => {

        handleClose();


        if (
            typeof onAction !==
            "function"
        ) {

            return;

        }


        onAction(
            actionId,
            data
        );

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <>

            {/* =================================
                THREE DOT BUTTON
            ================================= */}

            <IconButton

                size="small"

                aria-label="
                    Verification actions
                "

                aria-controls={
                    isOpen
                        ? "result-verification-action-menu"
                        : undefined
                }

                aria-haspopup="true"

                aria-expanded={
                    isOpen
                        ? "true"
                        : undefined
                }

                onClick={
                    handleOpen
                }

                sx={{

                    width: 28,

                    height: 28,

                    borderRadius: "6px",

                    color: "#64748b",

                    "&:hover": {

                        backgroundColor:
                            "#f1f5f9",

                        color:
                            "#334155",

                    },

                }}

            >

                <MoreVertOutlinedIcon
                    sx={{
                        fontSize: 17,
                    }}
                />

            </IconButton>


            {/* =================================
                ACTION MENU
            ================================= */}

            <Menu

                id="
                    result-verification-action-menu
                "

                anchorEl={
                    anchorEl
                }

                open={
                    isOpen
                }

                onClose={
                    handleClose
                }

                onClick={(event) =>
                    event.stopPropagation()
                }

                anchorOrigin={{
                    vertical:
                        "bottom",

                    horizontal:
                        "right",
                }}

                transformOrigin={{
                    vertical:
                        "top",

                    horizontal:
                        "right",
                }}

                slotProps={{

                    paper: {

                        elevation: 3,

                        sx: {

                            minWidth:
                                190,

                            mt:
                                0.5,

                            border:
                                "1px solid #e2e8f0",

                            borderRadius:
                                "7px",

                            boxShadow:
                                "0 8px 24px rgba(15, 23, 42, 0.10)",

                            "& .MuiMenuItem-root": {

                                minHeight:
                                    34,

                                gap:
                                    9,

                                px:
                                    1.25,

                                py:
                                    0.5,

                                color:
                                    "#475569",

                                fontSize:
                                    "11px",

                                fontWeight:
                                    500,

                                borderRadius:
                                    "5px",

                                mx:
                                    "4px",

                                my:
                                    "2px",

                            },

                            "& .MuiMenuItem-root:hover": {

                                backgroundColor:
                                    "#f8fafc",

                                color:
                                    "#1e293b",

                            },

                        },

                    },

                }}

            >


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

                    <VisibilityOutlinedIcon
                        sx={{
                            fontSize: 16,
                            color: "#64748b",
                        }}
                    />

                    <span>
                        View Details
                    </span>

                </MenuItem>


                {/* =================================
                    START REVIEW
                ================================= */}

                <MenuItem
                    onClick={() =>
                        handleAction(
                            "startReview"
                        )
                    }
                >

                    <RateReviewOutlinedIcon
                        sx={{
                            fontSize: 16,
                            color: "#2563eb",
                        }}
                    />

                    <span>
                        Start Review
                    </span>

                </MenuItem>


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

                    <ArticleOutlinedIcon
                        sx={{
                            fontSize: 16,
                            color: "#64748b",
                        }}
                    />

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

                    <HistoryOutlinedIcon
                        sx={{
                            fontSize: 16,
                            color: "#64748b",
                        }}
                    />

                    <span>
                        Verification History
                    </span>

                </MenuItem>


                {/* =================================
                    REJECT RESULT
                ================================= */}

                <MenuItem
                    onClick={() =>
                        handleAction(
                            "rejectResult"
                        )
                    }
                >

                    <BlockOutlinedIcon
                        sx={{
                            fontSize: 16,
                            color: "#dc2626",
                        }}
                    />

                    <span
                        style={{
                            color:
                                "#dc2626",
                        }}
                    >
                        Reject Result
                    </span>

                </MenuItem>

            </Menu>

        </>

    );

};


export default ActionMenu;