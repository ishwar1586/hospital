import "@/master_modules/doctorsdashboard/statsstrip.css";
import { statsStripConfig } from "@/master_modules/configs/doctordashboard.configs";

const StatsStrip = ({ stats }) => {
  return (
    <div className="stats-strip">
      {statsStripConfig.map((item) => (
        <div
          key={item.key}
          className={`stat-box ${item.color}`}
        >
          <p>{item.label}</p>
          <h3>{stats[item.key]}+</h3>
        </div>
      ))}
    </div>
  );
};

export default StatsStrip;
