import React, { useState } from "react";

import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import "./AppointmentDetailsHeader.css";

const AppointmentDetailsHeader = ({
    appointment,
    onClose,
}) => {
    const [copied, setCopied] = useState(false);

    // =========================================
    // Appointment ID
    // =========================================

    const appointmentId =
        appointment?.appointmentId || appointment?.id || "—";

    // =========================================
    // Appointment Status
    // =========================================

    const appointmentStatus =
        appointment?.status || "Scheduled";

    // =========================================
    // Copy Appointment ID
    // =========================================

    const handleCopyAppointmentId = async () => {
        if (!appointmentId || appointmentId === "—") {
            return;
        }

        try {
            await navigator.clipboard.writeText(
                appointmentId
            );

            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 1500);
        } catch (error) {
            console.error(
                "Failed to copy appointment ID:",
                error
            );
        }
    };

    // =========================================
    // Status Class
    // =========================================

    const normalizedStatus = appointmentStatus
        .toLowerCase()
        .replace(/\s+/g, "-");

    // =========================================
    // Render
    // =========================================

    return (
        <header className="appointment-details-header">

            {/* =====================================
                Header Top
            ===================================== */}

            <div className="appointment-details-header__top">

                {/* =================================
                    Title
                ================================= */}

                <div className="appointment-details-header__title-wrapper">

                    <h2 className="appointment-details-header__title">
                        Appointment Details
                    </h2>

                    <span
                        className={`
                            appointment-details-header__status
                            appointment-details-header__status--${normalizedStatus}
                        `}
                    >
                        {appointmentStatus}
                    </span>

                </div>

                {/* =================================
                    Close Button
                ================================= */}

                <button
                    type="button"
                    className="appointment-details-header__close"
                    onClick={onClose}
                    aria-label="Close appointment details"
                >
                    <CloseOutlinedIcon />
                </button>

            </div>

            {/* =====================================
                Appointment ID
            ===================================== */}

            <div className="appointment-details-header__appointment-id-wrapper">

                <span className="appointment-details-header__appointment-id">
                    {appointmentId}
                </span>

                <button
                    type="button"
                    className="appointment-details-header__copy"
                    onClick={
                        handleCopyAppointmentId
                    }
                    aria-label="Copy appointment ID"
                    title={
                        copied
                            ? "Copied"
                            : "Copy appointment ID"
                    }
                >
                    <ContentCopyOutlinedIcon />
                </button>

                {copied && (
                    <span className="appointment-details-header__copied">
                        Copied
                    </span>
                )}

            </div>

        </header>
    );
};

export default AppointmentDetailsHeader;