import "./CategoryStatsCards.css";

const CategoryStatsCards = ({
  statsData = [],
}) => {

  return (
    <div className="category-stats-grid">

      {statsData.map((item) => {

        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="category-stat-card"
          >

            <div className="category-stat-icon">
              <Icon />
            </div>

            <div className="category-stat-content">

              <p>
                {item.title}
              </p>

              <h3>
                {item.value}
              </h3>

            </div>

          </div>
        );
      })}

    </div>
  );
};

export default CategoryStatsCards;