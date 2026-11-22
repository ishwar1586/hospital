const TestStatCard = ({
    title,
    value,
    description,
    icon: Icon,
    variant,
}) => {
    return (
        <div className={`test-stat-card test-stat-card--${variant}`}>

            <div className="test-stat-card__content">

                <h3 className="test-stat-card__title">
                    {title}
                </h3>

                <div className="test-stat-card__value">
                    {value}
                </div>

                <p className="test-stat-card__description">
                    {description}
                </p>

            </div>

            <div className="test-stat-card__icon">
                <Icon />
            </div>

        </div>
    );
};

export default TestStatCard;