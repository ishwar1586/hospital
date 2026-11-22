import React, { useId, useState } from "react";

import {
    IconButton,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

import MoreVertOutlinedIcon
    from "@mui/icons-material/MoreVertOutlined";

import VisibilityOutlinedIcon
    from "@mui/icons-material/VisibilityOutlined";

import EditOutlinedIcon
    from "@mui/icons-material/EditOutlined";

import CalendarMonthOutlinedIcon
    from "@mui/icons-material/CalendarMonthOutlined";

import EventAvailableOutlinedIcon
    from "@mui/icons-material/EventAvailableOutlined";

import SwapVertOutlinedIcon
    from "@mui/icons-material/SwapVertOutlined";

import DeleteOutlineOutlinedIcon
    from "@mui/icons-material/DeleteOutlineOutlined";

import {
    DOCTOR_ACTIONS,
    DOCTOR_ACTION_CONFIG,
} from "../../config/doctorConfig";

import "./DoctorActionMenu.css";


// =========================================================
// ACTION ICONS
// =========================================================

const ACTION_ICONS = {
    [DOCTOR_ACTIONS.VIEW]:
        VisibilityOutlinedIcon,

    [DOCTOR_ACTIONS.EDIT]:
        EditOutlinedIcon,

    [DOCTOR_ACTIONS.SCHEDULE]:
        CalendarMonthOutlinedIcon,

    [DOCTOR_ACTIONS.BOOK_APPOINTMENT]:
        EventAvailableOutlinedIcon,

    [DOCTOR_ACTIONS.CHANGE_STATUS]:
        SwapVertOutlinedIcon,

    [DOCTOR_ACTIONS.DELETE]:
        DeleteOutlineOutlinedIcon,
};


// =========================================================
// COMPONENT
// =========================================================

const DoctorActionMenu = ({
    doctor,
    onAction,
}) => {

    const [
        anchorEl,
        setAnchorEl,
    ] = useState(null);


    const generatedId =
        useId();


    const menuId =
        `doctor-action-menu-${generatedId}`;


    const isOpen =
        Boolean(anchorEl);


    // =====================================================
    // OPEN MENU
    // =====================================================

    const handleOpen = (event) => {

        event.preventDefault();

        event.stopPropagation();


        setAnchorEl(
            event.currentTarget
        );
    };


    // =====================================================
    // CLOSE MENU
    // =====================================================

    const handleClose = (event) => {

        if (event) {
            event.stopPropagation();
        }


        setAnchorEl(null);
    };


    // =====================================================
    // ACTION
    // =====================================================

    const handleAction = (
        event,
        action
    ) => {

        event.stopPropagation();


        setAnchorEl(null);


        if (
            typeof onAction !==
            "function"
        ) {
            return;
        }


        onAction(
            action,
            doctor
        );
    };


    // =====================================================
    // RENDER
    // =====================================================

    return (

        <div
            className="doctor-action-menu"
            onClick={(event) =>
                event.stopPropagation()
            }
            onDoubleClick={(event) =>
                event.stopPropagation()
            }
        >

            {/* =========================================
                ACTION TRIGGER
            ========================================= */}

            <IconButton
                type="button"
                className="
                    doctor-action-menu__trigger
                "
                size="small"
                aria-label={
                    `Actions for ${
                        doctor?.name ??
                        "doctor"
                    }`
                }
                aria-controls={
                    isOpen
                        ? menuId
                        : undefined
                }
                aria-haspopup="menu"
                aria-expanded={
                    isOpen
                        ? "true"
                        : undefined
                }
                onClick={handleOpen}
            >

                <MoreVertOutlinedIcon
                    fontSize="small"
                />

            </IconButton>


            {/* =========================================
                ACTION MENU
            ========================================= */}

            <Menu
                id={menuId}
                anchorEl={anchorEl}
                open={isOpen}
                onClose={handleClose}
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
                slotProps={{
                    paper: {
                        className:
                            "doctor-action-menu__paper",
                    },
                }}
            >

                {Array.isArray(
                    DOCTOR_ACTION_CONFIG
                ) &&
                    DOCTOR_ACTION_CONFIG.map(
                        (actionConfig) => {

                            const ActionIcon =
                                ACTION_ICONS[
                                    actionConfig?.action
                                ];


                            if (
                                !actionConfig?.action
                            ) {
                                return null;
                            }


                            return (

                                <MenuItem
                                    key={
                                        actionConfig.id ??
                                        actionConfig.action
                                    }
                                    className={`
                                        doctor-action-menu__item

                                        ${
                                            actionConfig.destructive
                                                ? "doctor-action-menu__item--destructive"
                                                : ""
                                        }
                                    `}
                                    onClick={(event) =>
                                        handleAction(
                                            event,
                                            actionConfig.action
                                        )
                                    }
                                >

                                    {ActionIcon && (

                                        <ListItemIcon
                                            className="
                                                doctor-action-menu__icon
                                            "
                                        >

                                            <ActionIcon
                                                fontSize="small"
                                            />

                                        </ListItemIcon>

                                    )}


                                    <ListItemText
                                        primary={
                                            actionConfig.label ??
                                            actionConfig.action
                                        }
                                    />

                                </MenuItem>

                            );
                        }
                    )}

            </Menu>

        </div>
    );
};


export default DoctorActionMenu;