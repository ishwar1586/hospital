import { useState } from "react";

import "./ActionMenu.css";

import {
    IconButton,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
    Divider,
} from "@mui/material";

import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

import {
    VisibilityOutlined,
    // HistoryOutlined,
    // Inventory2Outlined,
    EditOutlined,
    SyncAltOutlined,
    LocalShippingOutlined,
    QrCodeOutlined,
    PrintOutlined,
    FileDownloadOutlined,
} from "@mui/icons-material";

const ActionMenu = ({

    row,

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

    const handleAction = (action) => {

        handleClose();

        if (typeof onAction === "function") {

            onAction(action, row);

        }

    };

    return (

        <>

            <IconButton

                size="small"

                className="stock-action-btn"

                onClick={handleOpen}

                aria-label="Stock Actions"

                aria-controls={open ? "stock-action-menu" : undefined}

                aria-haspopup="true"

                aria-expanded={open ? "true" : undefined}

            >

                <MoreVertOutlinedIcon fontSize="small"/>

            </IconButton>

            <Menu

                id="stock-action-menu"

                anchorEl={anchorEl}

                open={open}

                onClose={handleClose}

                PaperProps={{

                    className:"stock-action-menu",

                    elevation:3,

                }}

                anchorOrigin={{

                    vertical:"bottom",

                    horizontal:"right",

                }}

                transformOrigin={{

                    vertical:"top",

                    horizontal:"right",

                }}

            >

                {/* ========================== */}

                <MenuItem onClick={() => handleAction("view")}>

                    <ListItemIcon>

                        <VisibilityOutlined color="primary"/>

                    </ListItemIcon>

                    <ListItemText>

                        View Details

                    </ListItemText>

                </MenuItem>

                {/* ========================== */}

                {/* <MenuItem onClick={() => handleAction("batchHistory")}>

                    <ListItemIcon>

                        <Inventory2Outlined sx={{color:"#7C3AED"}}/>

                    </ListItemIcon>

                    <ListItemText>

                        Batch History

                    </ListItemText>

                </MenuItem> */}

                {/* ========================== */}

                {/* <MenuItem onClick={() => handleAction("stockLedger")}>

                    <ListItemIcon>

                        <HistoryOutlined sx={{color:"#16A34A"}}/>

                    </ListItemIcon>

                    <ListItemText>

                        Stock Ledger

                    </ListItemText>

                </MenuItem> */}

                <Divider/>

                {/* ========================== */}

                <MenuItem onClick={() => handleAction("edit")}>

                    <ListItemIcon>

                        <EditOutlined sx={{color:"#EA580C"}}/>

                    </ListItemIcon>

                    <ListItemText>

                        Edit Stock

                    </ListItemText>

                </MenuItem>

                {/* ========================== */}

                <MenuItem onClick={() => handleAction("adjustStock")}>

                    <ListItemIcon>

                        <SyncAltOutlined sx={{color:"#DC2626"}}/>

                    </ListItemIcon>

                    <ListItemText>

                        Stock Adjustment

                    </ListItemText>

                </MenuItem>

                {/* ========================== */}

                <MenuItem onClick={() => handleAction("transferStock")}>

                    <ListItemIcon>

                        <LocalShippingOutlined sx={{color:"#0284C7"}}/>

                    </ListItemIcon>

                    <ListItemText>

                        Transfer Stock

                    </ListItemText>

                </MenuItem>

                <Divider/>

                {/* ========================== */}

                <MenuItem onClick={() => handleAction("printBarcode")}>

                    <ListItemIcon>

                        <QrCodeOutlined sx={{color:"#4F46E5"}}/>

                    </ListItemIcon>

                    <ListItemText>

                        Print Barcode

                    </ListItemText>

                </MenuItem>

                {/* ========================== */}

                <MenuItem onClick={() => handleAction("printLabel")}>

                    <ListItemIcon>

                        <PrintOutlined sx={{color:"#475569"}}/>

                    </ListItemIcon>

                    <ListItemText>

                        Print Label

                    </ListItemText>

                </MenuItem>

                <Divider/>

                {/* ========================== */}

                <MenuItem onClick={() => handleAction("export")}>

                    <ListItemIcon>

                        <FileDownloadOutlined sx={{color:"#16A34A"}}/>

                    </ListItemIcon>

                    <ListItemText>

                        Export

                    </ListItemText>

                </MenuItem>

            </Menu>

        </>

    );

};

export default ActionMenu;