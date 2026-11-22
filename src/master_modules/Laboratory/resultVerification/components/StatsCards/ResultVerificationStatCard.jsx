import "./ResultVerificationStatsCards.css";


// =========================================
// COMPONENT
// =========================================

const ResultVerificationStatCard = ({
    title = "",
    value = 0,
    subtitle = "",
    icon: Icon = null,
    variant = "default",
    onClick,
}) => {


    // =========================================
    // CLICK HANDLER
    // =========================================

    const handleClick = () => {

        if (
            typeof onClick ===
            "function"
        ) {

            onClick();

        }

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <article

            className={`
                result-verification-stat-card
                result-verification-stat-card--${variant}
                ${
                    typeof onClick === "function"
                        ? "result-verification-stat-card--clickable"
                        : ""
                }
            `}

            onClick={
                handleClick
            }

        >


            {/* =================================
                CARD CONTENT
            ================================= */}

            <div
                className="
                    result-verification-stat-card__content
                "
            >

                <span
                    className="
                        result-verification-stat-card__title
                    "
                >
                    {title}
                </span>


                <strong
                    className="
                        result-verification-stat-card__value
                    "
                >
                    {value}
                </strong>


                {subtitle && (

                    <span
                        className="
                            result-verification-stat-card__subtitle
                        "
                    >
                        {subtitle}
                    </span>

                )}

            </div>


            {/* =================================
                ICON
            ================================= */}

            {Icon && (

                <div
                    className="
                        result-verification-stat-card__icon
                    "
                >

                    <Icon />

                </div>

            )}

        </article>

    );

};


export default ResultVerificationStatCard;