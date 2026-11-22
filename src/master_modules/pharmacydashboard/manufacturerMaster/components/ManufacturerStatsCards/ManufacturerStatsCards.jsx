import "./ManufacturerStatsCards.css";

const ManufacturerStatsCards = ({
  statsData = [],
}) => {

  return (
    <div className="manufacturer-stats-grid">

      {statsData.map((item) => {

        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="manufacturer-stat-card"
          >

            <div className="manufacturer-stat-icon">
              <Icon />
            </div>

            <div className="manufacturer-stat-content">

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

export default ManufacturerStatsCards;