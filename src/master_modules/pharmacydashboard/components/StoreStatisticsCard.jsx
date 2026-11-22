import { dashboardConfig } from "@/master_modules/pharmacydashboard/components/storeCustomers.config";
import "@/master_modules/pharmacydashboard/components/StoreStatisticsCard.css";

const StoreStatsCard = ({ data }) => {
  return (
    <div className="stats-card">
      <h3 className="card-title">Store Statistics</h3>

      {dashboardConfig.stats.map((item) => {
        const Icon = item.icon;

        return (
          <div className="stats-row" key={item.key}>
            <div>
              <p className="stats-label">{item.label}</p>
              <h2 className="stats-value">
                {data[item.key].toLocaleString()}
              </h2>
            </div>

            <div
              className="stats-icon"
              style={{ background: `${item.color}20` }}
            >
              <Icon className="icon" style={{ color: item.color }} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StoreStatsCard;