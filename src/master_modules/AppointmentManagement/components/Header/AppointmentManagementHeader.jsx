import React from "react";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import {
    appointmentHeaderConfig,
} from "../../config/appointmentConfig";

import "./AppointmentManagementHeader.css";


// =========================================================
// ICON MAP
// =========================================================

const appointmentHeaderIcons = {
    settings: SettingsOutlinedIcon,
    download: FileDownloadOutlinedIcon,
    add: AddOutlinedIcon,
};


// =========================================================
// COMPONENT
// =========================================================

const AppointmentManagementHeader = ({
    onAppointmentSettings,
    onExport,
    onNewAppointment,
}) => {

    // =====================================================
    // ACTION HANDLER MAP
    // =====================================================

    const actionHandlers = {
        "appointment-settings":
            onAppointmentSettings,

        "export-appointments":
            onExport,

        "new-appointment":
            onNewAppointment,
    };


    // =====================================================
    // RENDER ACTION
    // =====================================================

    const renderAction = (action) => {

        const IconComponent =
            appointmentHeaderIcons[action.icon];

        const handleClick =
            actionHandlers[action.id];

        return (
            <button
                key={action.id}
                type="button"
                className={
                    `appointment-management-header__action
                    appointment-management-header__action--${action.type}`
                }
                onClick={handleClick}
            >

                {IconComponent && (
                    <IconComponent
                        className="appointment-management-header__action-icon"
                    />
                )}

                <span>
                    {action.label}
                </span>

            </button>
        );
    };


    // =====================================================
    // RENDER
    // =====================================================

    return (
        <header className="appointment-management-header">

            {/* =================================================
                HEADER CONTENT
            ================================================= */}

            <div className="appointment-management-header__content">

                <h1 className="appointment-management-header__title">
                    {appointmentHeaderConfig.title}
                </h1>

                <p className="appointment-management-header__subtitle">
                    {appointmentHeaderConfig.subtitle}
                </p>

            </div>


            {/* =================================================
                HEADER ACTIONS
            ================================================= */}

            <div className="appointment-management-header__actions">

                {appointmentHeaderConfig.actions.map(
                    renderAction
                )}

            </div>

        </header>
    );
};

export default AppointmentManagementHeader;