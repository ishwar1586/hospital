import { useState } from "react";

import {
    IconButton,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

import {
    MoreVertOutlined,
    VisibilityOutlined,
    PlayCircleOutlineOutlined,
    PrintOutlined,
    PictureAsPdfOutlined,
    CancelOutlined,
} from "@mui/icons-material";

import "./AuditActionMenu.css";

const AuditActionMenu = ({

    row,

    onView,

    onContinue,

    onPrint,

    onExport,

    onCancel,

}) => {

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleOpen = (event) => {

        setAnchorEl(event.currentTarget);

    };

    const handleClose = () => {

        setAnchorEl(null);

    };

    return (

        <>

            <IconButton

                size="small"

                onClick={handleOpen}

            >

                <MoreVertOutlined />

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

                <MenuItem

                    onClick={() => {

                        onView(row);

                        handleClose();

                    }}

                >

                    <ListItemIcon>

                        <VisibilityOutlined fontSize="small" />

                    </ListItemIcon>

                    <ListItemText>

                        View Details

                    </ListItemText>

                </MenuItem>

                {

                    row.status === "In Progress" && (

                        <MenuItem

                            onClick={() => {

                                onContinue(row);

                                handleClose();

                            }}

                        >

                            <ListItemIcon>

                                <PlayCircleOutlineOutlined fontSize="small" />

                            </ListItemIcon>

                            <ListItemText>

                                Continue Audit

                            </ListItemText>

                        </MenuItem>

                    )

                }

                <MenuItem

                    onClick={() => {

                        onPrint(row);

                        handleClose();

                    }}

                >

                    <ListItemIcon>

                        <PrintOutlined fontSize="small" />

                    </ListItemIcon>

                    <ListItemText>

                        Print Report

                    </ListItemText>

                </MenuItem>

                <MenuItem

                    onClick={() => {

                        onExport(row);

                        handleClose();

                    }}

                >

                    <ListItemIcon>

                        <PictureAsPdfOutlined fontSize="small" />

                    </ListItemIcon>

                    <ListItemText>

                        Export PDF

                    </ListItemText>

                </MenuItem>

                {

                    row.status === "In Progress" && (

                        <MenuItem

                            className="audit-danger-item"

                            onClick={() => {

                                onCancel(row);

                                handleClose();

                            }}

                        >

                            <ListItemIcon>

                                <CancelOutlined

                                    fontSize="small"

                                    color="error"

                                />

                            </ListItemIcon>

                            <ListItemText>

                                Cancel Audit

                            </ListItemText>

                        </MenuItem>

                    )

                }

            </Menu>

        </>

    );

};

export default AuditActionMenu;