// =========================================
// REPORT ACTION MENU
// =========================================

import {
    useState,
} from "react";


// =========================================
// MATERIAL UI
// =========================================

import IconButton
    from "@mui/material/IconButton";

import Menu
    from "@mui/material/Menu";

import MenuItem
    from "@mui/material/MenuItem";

import ListItemIcon
    from "@mui/material/ListItemIcon";

import ListItemText
    from "@mui/material/ListItemText";


// =========================================
// ICONS
// =========================================

import MoreVertOutlinedIcon
    from "@mui/icons-material/MoreVertOutlined";

import VisibilityOutlinedIcon
    from "@mui/icons-material/VisibilityOutlined";

import DescriptionOutlinedIcon
    from "@mui/icons-material/DescriptionOutlined";

import DownloadOutlinedIcon
    from "@mui/icons-material/DownloadOutlined";

import PrintOutlinedIcon
    from "@mui/icons-material/PrintOutlined";

import EmailOutlinedIcon
    from "@mui/icons-material/EmailOutlined";

import RefreshOutlinedIcon
    from "@mui/icons-material/RefreshOutlined";


// =========================================
// REPORT ACTION MENU
// =========================================

const ReportActionMenu = ({
    report,

    onPreview,

    onGenerate,

    onDownload,

    onPrint,

    onEmail,

    onRetry,
}) => {

    // =========================================
    // MENU STATE
    // =========================================

    const [
        anchorEl,
        setAnchorEl,
    ] = useState(null);


    // =========================================
    // MENU OPEN
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
    // ACTION WRAPPER
    // =========================================

    const executeAction = (
        callback
    ) => {

        handleClose();


        if (
            typeof callback !==
            "function"
        ) {
            return;
        }


        callback(
            report
        );

    };


    // =========================================
    // REPORT STATUS
    // =========================================

    const status =
        (
            report?.status ||
            ""
        )
            .toLowerCase();


    // =========================================
    // ACTION VISIBILITY
    // =========================================

    const canGenerate =
        status ===
        "ready";


    const canRetry =
        status ===
        "failed";


    const canDownload =
        [
            "generated",
            "printed",
            "emailed",
            "downloaded",
        ].includes(
            status
        );


    const canPrint =
        [
            "generated",
            "printed",
            "emailed",
            "downloaded",
        ].includes(
            status
        );


    const canEmail =
        [
            "generated",
            "printed",
            "emailed",
            "downloaded",
        ].includes(
            status
        );


    // =========================================
    // RENDER
    // =========================================

    return (

        <>

            {/* =================================
                ACTION BUTTON
            ================================= */}

            <IconButton
                size="small"

                onClick={
                    handleOpen
                }

                aria-label="
                    Report actions
                "

                aria-controls={
                    isOpen
                        ? "report-action-menu"
                        : undefined
                }

                aria-haspopup="menu"

                aria-expanded={
                    isOpen
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
                            "#334155",
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
                MENU
            ================================= */}

            <Menu
                id="
                    report-action-menu
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
                        sx: {
                            minWidth:
                                175,

                            border:
                                "1px solid #e2e8f0",

                            borderRadius:
                                "8px",

                            boxShadow:
                                "0 8px 24px rgba(15, 23, 42, 0.10)",

                            mt:
                                0.5,

                            "& .MuiMenuItem-root": {
                                minHeight:
                                    34,

                                px:
                                    1.2,

                                fontSize:
                                    "11px",

                                color:
                                    "#475569",

                                borderRadius:
                                    "5px",

                                mx:
                                    0.5,

                                my:
                                    0.15,

                                "&:hover": {
                                    backgroundColor:
                                        "#f8fafc",
                                },
                            },

                            "& .MuiListItemIcon-root": {
                                minWidth:
                                    30,

                                color:
                                    "#64748b",
                            },

                            "& .MuiListItemText-primary": {
                                fontSize:
                                    "11px",

                                fontWeight:
                                    500,
                            },
                        },
                    },
                }}
            >

                {/* =============================
                    PREVIEW
                ============================= */}

                <MenuItem
                    onClick={() =>
                        executeAction(
                            onPreview
                        )
                    }
                >

                    <ListItemIcon>

                        <VisibilityOutlinedIcon
                            fontSize="small"
                        />

                    </ListItemIcon>

                    <ListItemText>
                        Preview Report
                    </ListItemText>

                </MenuItem>


                {/* =============================
                    GENERATE
                ============================= */}

                {canGenerate && (

                    <MenuItem
                        onClick={() =>
                            executeAction(
                                onGenerate
                            )
                        }
                    >

                        <ListItemIcon>

                            <DescriptionOutlinedIcon
                                fontSize="small"
                            />

                        </ListItemIcon>

                        <ListItemText>
                            Generate Report
                        </ListItemText>

                    </MenuItem>

                )}


                {/* =============================
                    DOWNLOAD
                ============================= */}

                {canDownload && (

                    <MenuItem
                        onClick={() =>
                            executeAction(
                                onDownload
                            )
                        }
                    >

                        <ListItemIcon>

                            <DownloadOutlinedIcon
                                fontSize="small"
                            />

                        </ListItemIcon>

                        <ListItemText>
                            Download
                        </ListItemText>

                    </MenuItem>

                )}


                {/* =============================
                    PRINT
                ============================= */}

                {canPrint && (

                    <MenuItem
                        onClick={() =>
                            executeAction(
                                onPrint
                            )
                        }
                    >

                        <ListItemIcon>

                            <PrintOutlinedIcon
                                fontSize="small"
                            />

                        </ListItemIcon>

                        <ListItemText>
                            Print Report
                        </ListItemText>

                    </MenuItem>

                )}


                {/* =============================
                    EMAIL
                ============================= */}

                {canEmail && (

                    <MenuItem
                        onClick={() =>
                            executeAction(
                                onEmail
                            )
                        }
                    >

                        <ListItemIcon>

                            <EmailOutlinedIcon
                                fontSize="small"
                            />

                        </ListItemIcon>

                        <ListItemText>
                            Email Report
                        </ListItemText>

                    </MenuItem>

                )}


                {/* =============================
                    RETRY
                ============================= */}

                {canRetry && (

                    <MenuItem
                        onClick={() =>
                            executeAction(
                                onRetry
                            )
                        }
                    >

                        <ListItemIcon>

                            <RefreshOutlinedIcon
                                fontSize="small"
                            />

                        </ListItemIcon>

                        <ListItemText>
                            Retry Generation
                        </ListItemText>

                    </MenuItem>

                )}

            </Menu>

        </>

    );

};


export default ReportActionMenu;