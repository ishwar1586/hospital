import { FiActivity, FiHeart, FiDroplet, FiLayers } from "react-icons/fi";
import { GiBabyBottle, GiBlood, GiIncubator } from "react-icons/gi";

const iconMap = {
  bp: <FiDroplet />,
  heart: <FiHeart />,
  glucose: <FiActivity />,
  count: <GiBabyBottle />,
};

const StatCard = ({ config, data }) => {
  return (
    <div className="stat-card">

      {/* 🔥 ICON */}
      <div className="stat-icon">
        {iconMap[config.key]}
      </div>

      {/* 🔥 CONTENT */}
      <div className="stat-content">
        <p className="label">{config.label}</p>
        <h2 className="value">{data.value}</h2>

        <span
          className={`trend ${
            data.change.includes("+") ? "up" : "down"
          }`}
        >
          {data.change} than last month
        </span>
      </div>
    </div>
  );
};

export default StatCard;