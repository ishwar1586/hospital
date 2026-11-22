// src/master_modules/AppointmentManagement/components/StatsCards/AppointmentStatsCards.jsx

import React from "react";

import AppointmentStatsCard from "./AppointmentStatCard";

import {
    appointmentStatsCards,
} from "../../config/StatsCards.config";

import "./AppointmentStatsCards.css";

const AppointmentStatsCards = () => {

    return (
        <div className="appointment-stats-cards">

            {appointmentStatsCards.map((card) => (

                <AppointmentStatsCard
                    key={card.id}
                    title={card.title}
                    value={card.value}
                    subtitle={card.subtitle}
                    secondarySubtitle={
                        card.secondarySubtitle
                    }
                    icon={card.icon}
                    variant={card.variant}
                />

            ))}

        </div>
    );
};

export default AppointmentStatsCards;