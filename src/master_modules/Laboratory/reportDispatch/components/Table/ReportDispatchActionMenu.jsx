// =========================================
// REPORT DISPATCH ACTION MENU
// =========================================

import {
    useState,
} from "react";


// =========================================
// MUI ICONS
// =========================================

import MoreVertOutlinedIcon
    from "@mui/icons-material/MoreVertOutlined";

import VisibilityOutlinedIcon
    from "@mui/icons-material/VisibilityOutlined";

import SendOutlinedIcon
    from "@mui/icons-material/SendOutlined";

import HistoryOutlinedIcon
    from "@mui/icons-material/HistoryOutlined";

import DownloadOutlinedIcon
    from "@mui/icons-material/DownloadOutlined";

import PrintOutlinedIcon
    from "@mui/icons-material/PrintOutlined";


// =========================================
// MUI MENU
// =========================================

import Menu
    from "@mui/material/Menu";

import MenuItem
    from "@mui/material/MenuItem";

import ListItemIcon
    from "@mui/material/ListItemIcon";

import ListItemText
    from "@mui/material/ListItemText";


// =========================================
// ACTION MENU
// =========================================

const ReportDispatchActionMenu = ({
    report = {},

    onView,
    onDispatch,
    onHistory,
}) => {

    // =========================================
    // MENU ANCHOR
    // =========================================

    const [
        anchorEl,
        setAnchorEl,
    ] = useState(null);


    // =========================================
    // MENU STATE
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
    // VIEW
    // =========================================

    const handleView = () => {

        handleClose();


        if (
            typeof onView !==
            "function"
        ) {
            return;
        }


        onView(
            report
        );

    };


    // =========================================
    // DISPATCH
    // =========================================

    const handleDispatch = () => {

        handleClose();


        if (
            typeof onDispatch !==
            "function"
        ) {
            return;
        }


        onDispatch(
            report
        );

    };


    // =========================================
    // HISTORY
    // =========================================

    const handleHistory = () => {

        handleClose();


        if (
            typeof onHistory !==
            "function"
        ) {
            return;
        }


        onHistory(
            report
        );

    };


    // =========================================
    // DOWNLOAD
    // =========================================

    const handleDownload = () => {

        handleClose();


        console.log(
            "Download report:",
            report
        );

    };


    // =========================================
    // PRINT
    // =========================================

    const handlePrint = () => {

        handleClose();


        console.log(
            "Print report:",
            report
        );

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <>

            {/* =================================
                MORE BUTTON
            ================================= */}

            <button
                type="button"

                className="
                    report-dispatch-action-menu__trigger
                "

                onClick={
                    handleOpen
                }

                aria-label="
                    Report actions
                "

                aria-controls={
                    isOpen
                        ? "report-dispatch-action-menu"
                        : undefined
                }

                aria-haspopup="menu"

                aria-expanded={
                    isOpen
                        ? "true"
                        : undefined
                }
            >

                <MoreVertOutlinedIcon />

            </button>


            {/* =================================
                MENU
            ================================= */}

            <Menu
                id="
                    report-dispatch-action-menu
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

                        className:
                            "report-dispatch-action-menu__paper",

                    },
                }}
            >

                {/* =============================
                    VIEW REPORT
                ============================= */}

                <MenuItem
                    onClick={
                        handleView
                    }

                    className="
                        report-dispatch-action-menu__item
                    "
                >

                    <ListItemIcon>

                        <VisibilityOutlinedIcon />

                    </ListItemIcon>


                    <ListItemText>
                        View Report
                    </ListItemText>

                </MenuItem>


                {/* =============================
                    DISPATCH
                ============================= */}

                <MenuItem
                    onClick={
                        handleDispatch
                    }

                    className="
                        report-dispatch-action-menu__item
                    "
                >

                    <ListItemIcon>

                        <SendOutlinedIcon />

                    </ListItemIcon>


                    <ListItemText>
                        Dispatch Report
                    </ListItemText>

                </MenuItem>


                {/* =============================
                    HISTORY
                ============================= */}

                <MenuItem
                    onClick={
                        handleHistory
                    }

                    className="
                        report-dispatch-action-menu__item
                    "
                >

                    <ListItemIcon>

                        <HistoryOutlinedIcon />

                    </ListItemIcon>


                    <ListItemText>
                        Delivery History
                    </ListItemText>

                </MenuItem>


                {/* =============================
                    DOWNLOAD
                ============================= */}

                <MenuItem
                    onClick={
                        handleDownload
                    }

                    className="
                        report-dispatch-action-menu__item
                    "
                >

                    <ListItemIcon>

                        <DownloadOutlinedIcon />

                    </ListItemIcon>


                    <ListItemText>
                        Download Report
                    </ListItemText>

                </MenuItem>


                {/* =============================
                    PRINT
                ============================= */}

                <MenuItem
                    onClick={
                        handlePrint
                    }

                    className="
                        report-dispatch-action-menu__item
                    "
                >

                    <ListItemIcon>

                        <PrintOutlinedIcon />

                    </ListItemIcon>


                    <ListItemText>
                        Print Report
                    </ListItemText>

                </MenuItem>

            </Menu>

        </>

    );

};


export default ReportDispatchActionMenu;