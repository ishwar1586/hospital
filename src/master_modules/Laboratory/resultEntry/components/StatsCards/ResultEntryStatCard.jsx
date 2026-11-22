const ResultEntryStatCard = ({
    stat = {},
}) => {


    // =========================================
    // ICON
    // =========================================

    const Icon =
        stat.icon;


    // =========================================
    // TREND ICON
    // =========================================

    const TrendIcon =
        stat.trend?.icon;


    // =========================================
    // VARIANT
    // =========================================

    const variant =
        stat.variant ||
        "default";


    // =========================================
    // VALUE
    // =========================================

    const value =
        stat.value ??
        "0";


    // =========================================
    // LABEL
    // =========================================

    const label =
        stat.label ||
        "—";


    // =========================================
    // RENDER
    // =========================================

    return (

        <article
            className={`
                result-entry-stat-card
                result-entry-stat-card--${variant}
            `}
        >


            {/* =================================
                TOP ROW
            ================================= */}

            <div
                className="
                    result-entry-stat-card__top
                "
            >


                {/* =============================
                    ICON
                ============================= */}

                <div
                    className="
                        result-entry-stat-card__icon
                    "
                >

                    {Icon && (

                        <Icon />

                    )}

                </div>


                {/* =============================
                    TREND
                ============================= */}

                {stat.trend && (

                    <div
                        className={`
                            result-entry-stat-card__trend
                            result-entry-stat-card__trend--${
                                stat.trend.type ||
                                "neutral"
                            }
                        `}
                    >

                        {TrendIcon && (

                            <TrendIcon />

                        )}


                        <span>

                            {
                                stat.trend.value
                            }

                        </span>

                    </div>

                )}

            </div>


            {/* =================================
                VALUE
            ================================= */}

            <div
                className="
                    result-entry-stat-card__value
                "
            >

                {
                    value
                }

            </div>


            {/* =================================
                LABEL
            ================================= */}

            <div
                className="
                    result-entry-stat-card__label
                "
            >

                {
                    label
                }

            </div>


            {/* =================================
                DESCRIPTION
            ================================= */}

            {stat.description && (

                <div
                    className="
                        result-entry-stat-card__description
                    "
                >

                    {
                        stat.description
                    }

                </div>

            )}

        </article>

    );

};


export default ResultEntryStatCard;