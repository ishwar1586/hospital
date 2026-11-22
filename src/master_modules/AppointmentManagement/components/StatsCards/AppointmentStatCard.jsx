// src/master_modules/AppointmentManagement/components/StatsCards/AppointmentStatsCard.jsx

import React from "react";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const AppointmentStatsCard = ({
    title,
    value,
    subtitle,
    secondarySubtitle,
    icon,
    variant = "primary",
}) => {

    const renderIcon = () => {

        const icons = {
            calendar: (
                <CalendarMonthOutlinedIcon />
            ),

            upcoming: (
                <EventAvailableOutlinedIcon />
            ),

            pending: (
                <PendingActionsOutlinedIcon />
            ),

            cancelled: (
                <CancelOutlinedIcon />
            ),

            "no-show": (
                <AccessTimeOutlinedIcon />
            ),
        };

        return icons[icon] || (
            <CalendarMonthOutlinedIcon />
        );
    };

    return (
        <article
            className={`
                appointment-stats-card
                appointment-stats-card--${variant}
            `}
        >

            {/* =====================================
                Icon
            ===================================== */}

            <div className="appointment-stats-card__icon">
                {renderIcon()}
            </div>


            {/* =====================================
                Content
            ===================================== */}

            <div className="appointment-stats-card__content">

                <div className="appointment-stats-card__title">
                    {title}
                </div>


                <div className="appointment-stats-card__value">
                    {value}
                </div>


                <div className="appointment-stats-card__meta">

                    {subtitle && (
                        <span className="appointment-stats-card__subtitle">
                            {subtitle}
                        </span>
                    )}

                    {secondarySubtitle && (
                        <>
                            <span className="appointment-stats-card__meta-separator">
                                •
                            </span>

                            <span className="appointment-stats-card__secondary">
                                {secondarySubtitle}
                            </span>
                        </>
                    )}

                </div>

            </div>

        </article>
    );
};

export default AppointmentStatsCard;