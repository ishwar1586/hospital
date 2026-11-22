import "./CategoryStatsCards.css";

const CategoryStatCard = ({
    title,
    value,
    description,
    icon: Icon,
    variant = "blue",
}) => {

    return (
        <div
            className={`category-stat-card category-stat-card--${variant}`}
        >

            <div className="category-stat-card__content">

                <span className="category-stat-card__title">
                    {title}
                </span>

                <span className="category-stat-card__value">
                    {typeof value === "number"
                        ? value.toLocaleString("en-IN")
                        : value}
                </span>

                <span className="category-stat-card__description">
                    {description}
                </span>

            </div>


            <div className="category-stat-card__icon">

                <Icon />

            </div>

        </div>
    );
};

export default CategoryStatCard;