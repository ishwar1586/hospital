import "./TestQueueStatsCards.css";


const TestQueueStatCard = ({
    title,
    value,
    subtitle,
    icon: Icon,
    variant = "blue",
}) => {

    return (

        <article
            className={`
                test-queue-stat-card
                test-queue-stat-card--${variant}
            `}
        >


            {/* =================================
                ICON
            ================================= */}

            <div className="test-queue-stat-card__icon">

                {Icon && (

                    <Icon />

                )}

            </div>


            {/* =================================
                CONTENT
            ================================= */}

            <div className="test-queue-stat-card__content">

                <div className="test-queue-stat-card__title">

                    {title}

                </div>


                <div className="test-queue-stat-card__value">

                    {value}

                </div>


                <div className="test-queue-stat-card__subtitle">

                    {subtitle}

                </div>

            </div>

        </article>

    );

};


export default TestQueueStatCard;