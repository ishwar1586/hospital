import "./UnitStatsCards.css";

const UnitStatsCards = ({
  statsData = [],
}) => {

  return (
    <div className="unit-stats-grid">

      {statsData.map((item) => {

        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="unit-stat-card"
          >

            <div className="unit-stat-icon">
              <Icon />
            </div>

            <div className="unit-stat-content">

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

export default UnitStatsCards;