const CollectionStatCard = ({
    title,
    value,
    suffix = "",
    subtitle,
    icon: Icon,
    variant,
}) => {

    return (

        <article
            className={`collection-stat-card collection-stat-card--${variant}`}
        >

            {/* =================================
                ICON
            ================================= */}

            <div className="collection-stat-card__icon">

                <Icon />

            </div>


            {/* =================================
                CONTENT
            ================================= */}

            <div className="collection-stat-card__content">

                <h3>
                    {title}
                </h3>


                <div className="collection-stat-card__value">

                    {value}

                    {suffix && (
                        <span>
                            {suffix}
                        </span>
                    )}

                </div>


                <div className="collection-stat-card__footer">

                    <span className="collection-stat-card__subtitle">

                        {subtitle}

                    </span>

                </div>

            </div>

        </article>

    );
};


export default CollectionStatCard;