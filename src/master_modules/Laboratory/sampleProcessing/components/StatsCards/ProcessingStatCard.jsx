import TrendingUpOutlinedIcon
    from "@mui/icons-material/TrendingUpOutlined";

import TrendingDownOutlinedIcon
    from "@mui/icons-material/TrendingDownOutlined";
import "./ProcessingStatsCards.css";

const ProcessingStatCard = ({
    title,
    value,
    icon: Icon,
    trend,
    trendLabel = "",
    trendType = "up",
    description = "",
}) => {

    const isPositive =
        trendType === "up";


    return (

        <article className="processing-stat-card">


            {/* =================================
                TOP
            ================================= */}

            <div className="processing-stat-card__top">

                <div className="processing-stat-card__title">

                    {title}

                </div>


                {Icon && (

                    <div className="processing-stat-card__icon">

                        <Icon />

                    </div>

                )}

            </div>


            {/* =================================
                VALUE
            ================================= */}

            <div className="processing-stat-card__value">

                {value}

            </div>


            {/* =================================
                FOOTER
            ================================= */}

            <div className="processing-stat-card__footer">

                {trend !== undefined &&
                trend !== null && (

                    <span
                        className={`
                            processing-stat-card__trend
                            ${
                                isPositive
                                    ? "processing-stat-card__trend--up"
                                    : "processing-stat-card__trend--down"
                            }
                        `}
                    >

                        {isPositive ? (

                            <TrendingUpOutlinedIcon />

                        ) : (

                            <TrendingDownOutlinedIcon />

                        )}

                        <span>
                            {trend}
                        </span>

                    </span>

                )}


                {trendLabel && (

                    <span className="processing-stat-card__trend-label">

                        {trendLabel}

                    </span>

                )}


                {description && (

                    <span className="processing-stat-card__description">

                        {description}

                    </span>

                )}

            </div>

        </article>

    );

};


export default ProcessingStatCard;