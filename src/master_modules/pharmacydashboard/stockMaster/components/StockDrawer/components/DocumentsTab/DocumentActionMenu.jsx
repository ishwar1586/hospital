import { useState } from "react";

import "./DocumentActionMenu.css";

import {

    IconButton,

    Menu,

    MenuItem,

    ListItemIcon,

    ListItemText,

    Divider,

} from "@mui/material";

import MoreVertOutlinedIcon
from "@mui/icons-material/MoreVertOutlined";

import {

    VisibilityOutlined,

    DownloadOutlined,

    PrintOutlined,

    ShareOutlined,

    HistoryOutlined,

    DeleteOutlineOutlined,

} from "@mui/icons-material";

const DocumentActionMenu = ({

    document,

}) => {

    const [anchorEl, setAnchorEl] =

        useState(null);

    const open = Boolean(anchorEl);

    /* ============================== */

    const handleOpen = (event) => {

        setAnchorEl(event.currentTarget);

    };

    const handleClose = () => {

        setAnchorEl(null);

    };

    /* ============================== */

    const handlePreview = () => {

        handleClose();

        console.log("Preview", document);

    };

    const handleDownload = () => {

        handleClose();

        console.log("Download", document);

    };

    const handlePrint = () => {

        handleClose();

        console.log("Print", document);

    };

    const handleShare = () => {

        handleClose();

        console.log("Share", document);

    };

    const handleHistory = () => {

        handleClose();

        console.log("Version History", document);

    };

    const handleDelete = () => {

        handleClose();

        console.log("Delete", document);

    };

    return (

        <>

            <IconButton

                onClick={handleOpen}

                size="small"

                className="document-action-btn"

            >

                <MoreVertOutlinedIcon/>

            </IconButton>

            <Menu

                anchorEl={anchorEl}

                open={open}

                onClose={handleClose}

                PaperProps={{

                    className:

                    "document-action-menu",

                }}

            >

                <MenuItem onClick={handlePreview}>

                    <ListItemIcon>

                        <VisibilityOutlined
                        color="primary"/>

                    </ListItemIcon>

                    <ListItemText>

                        Preview

                    </ListItemText>

                </MenuItem>

                <MenuItem onClick={handleDownload}>

                    <ListItemIcon>

                        <DownloadOutlined
                        sx={{
                            color:"#16A34A",
                        }}/>

                    </ListItemIcon>

                    <ListItemText>

                        Download

                    </ListItemText>

                </MenuItem>

                <MenuItem onClick={handlePrint}>

                    <ListItemIcon>

                        <PrintOutlined
                        sx={{
                            color:"#EA580C",
                        }}/>

                    </ListItemIcon>

                    <ListItemText>

                        Print

                    </ListItemText>

                </MenuItem>

                <Divider/>

                <MenuItem onClick={handleShare}>

                    <ListItemIcon>

                        <ShareOutlined
                        sx={{
                            color:"#2563EB",
                        }}/>

                    </ListItemIcon>

                    <ListItemText>

                        Share

                    </ListItemText>

                </MenuItem>

                <MenuItem onClick={handleHistory}>

                    <ListItemIcon>

                        <HistoryOutlined
                        sx={{
                            color:"#7C3AED",
                        }}/>

                    </ListItemIcon>

                    <ListItemText>

                        Version History

                    </ListItemText>

                </MenuItem>

                <Divider/>

                <MenuItem onClick={handleDelete}>

                    <ListItemIcon>

                        <DeleteOutlineOutlined
                        sx={{
                            color:"#DC2626",
                        }}/>

                    </ListItemIcon>

                    <ListItemText>

                        Delete

                    </ListItemText>

                </MenuItem>

            </Menu>

        </>

    );

};

export default DocumentActionMenu;