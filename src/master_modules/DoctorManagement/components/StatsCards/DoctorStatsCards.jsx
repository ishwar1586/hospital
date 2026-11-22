import React, {
    useMemo,
} from "react";

import {
    DOCTOR_STATS_CONFIG,
} from "../../config/doctorConfig";

import "./DoctorStatsCards.css";


// =========================================
// COMPONENT
// =========================================

const DoctorStatsCards = ({
    stats = {},
}) => {

    // =========================================
    // PREPARE STATS
    // =========================================

    const cards = useMemo(() => {

        return DOCTOR_STATS_CONFIG.map(
            (card) => {

                const value =
                    stats?.[card.key] ??
                    card.defaultValue ??
                    0;

                return {
                    ...card,
                    value,
                };
            }
        );

    }, [stats]);


    // =========================================
    // RENDER
    // =========================================

    return (

        <section
            className="doctor-stats-cards"
            aria-label="Doctor statistics"
        >

            <div className="doctor-stats-cards__grid">

                {cards.map((card) => {

                    const Icon =
                        card.icon;


                    return (

                        <article
                            key={card.key}
                            className={`
                                doctor-stat-card
                                doctor-stat-card--${card.iconVariant}
                            `}
                        >

                            {/* =================================
                                TOP ROW
                            ================================= */}

                            <div
                                className="
                                    doctor-stat-card__top
                                "
                            >

                                {/* ICON */}

                                <div
                                    className="
                                        doctor-stat-card__icon
                                    "
                                >

                                    {Icon && (
                                        <Icon />
                                    )}

                                </div>


                                {/* TREND */}

                                {card.trend && (
                                    <div
                                        className={`
                                            doctor-stat-card__trend
                                            doctor-stat-card__trend--${card.trend.type}
                                        `}
                                    >

                                        {card.trend.type ===
                                            "up" && (
                                            <span>
                                                ↑
                                            </span>
                                        )}

                                        <span>
                                            {card.trend.value}
                                        </span>

                                    </div>
                                )}

                            </div>


                            {/* =================================
                                CARD CONTENT
                            ================================= */}

                            <div
                                className="
                                    doctor-stat-card__body
                                "
                            >

                                <span
                                    className="
                                        doctor-stat-card__label
                                    "
                                >
                                    {card.label}
                                </span>


                                <strong
                                    className="
                                        doctor-stat-card__value
                                    "
                                >
                                    {card.value}
                                </strong>


                                {card.description && (
                                    <span
                                        className="
                                            doctor-stat-card__description
                                        "
                                    >
                                        {card.description}
                                    </span>
                                )}

                            </div>

                        </article>

                    );

                })}

            </div>

        </section>

    );
};


export default DoctorStatsCards;