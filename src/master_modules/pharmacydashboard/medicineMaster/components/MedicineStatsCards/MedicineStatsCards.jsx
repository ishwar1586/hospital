import "./MedicineStatsCards.css";

import { medicineStatsCards } from "../../config/medicineStatsCards";

const MedicineStatsCards = ({ statsData }) => {
  return (
    <div className="medicine-stats-grid">
      {medicineStatsCards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.key}
            className="medicine-stat-card"
          >
            <div>
              <span className="medicine-stat-title">
                {card.title}
              </span>

              <h3 className="medicine-stat-value">
                {statsData[card.key] || 0}
              </h3>
            </div>

            <div className="medicine-stat-icon">
              <Icon />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MedicineStatsCards;