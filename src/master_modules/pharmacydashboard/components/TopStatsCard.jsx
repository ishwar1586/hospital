import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./TopStatsCard.css";

/* 🔹 Custom Tooltip */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="chart-tooltip">
        <p>Value: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const TopStatsCard = ({ label, data, color }) => {
  return (
    <div className="top-card">

      {/* LEFT */}
      <div>
        <p className="card-label">{label}</p>

        <h2 className="card-value">
          ₹{data.value.toLocaleString()}
        </h2>

        <p className={`card-change ${data.trend}`}>
          {data.trend === "up" ? "↑" : "↓"} {data.change}% vs last week
        </p>
      </div>

      {/* RIGHT MINI GRAPH */}
      <div className="mini-chart">
        <ResponsiveContainer width={100} height={50}>
          <LineChart data={data.graph}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              dot={false}
              isAnimationActive={true}
              animationDuration={800}
            />
            <Tooltip content={<CustomTooltip />} />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default TopStatsCard;