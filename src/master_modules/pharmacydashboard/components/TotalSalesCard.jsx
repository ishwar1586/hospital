import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import "@/master_modules/pharmacydashboard/components/TotalSalesCard.css";

/* 🔹 Custom Tooltip */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;

    return (
      <div className="sales-tooltip">
        <p className="tooltip-date">{data.date}</p>
        <p className="tooltip-value">
          {data.value} <span>Sales</span>
        </p>
      </div>
    );
  }
  return null;
};

const TotalSalesCard = ({ data, config }) => {
  return (
    <div className="sales-card">

      {/* HEADER */}
      <div className="sales-header">
        <span className="sales-title">{config.title}</span>
        {config.showReport && (
          <span className="sales-link">View Report</span>
        )}
      </div>

      {/* TOTAL */}
      <h1 className="sales-total">
        {config.currency}
        {data.total.toLocaleString()}
      </h1>

      <p className="sales-sub">
        {config.currency}
        {data.monthly.toLocaleString()} in last month
      </p>

      {/* WEEKLY */}
      <div className="sales-weekly">
        <div>
          <p>This week so far</p>
          <h2>
            {config.currency}
            {data.weekly.toLocaleString()}
          </h2>
        </div>

        <span className="sales-growth">
          ↑ {data.change}%
          <small>vs. last week</small>
        </span>
      </div>

      {/* CHART */}
      <div className="sales-chart">
        <ResponsiveContainer width="100%" height={110}>
          <AreaChart
            data={data.graph}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          >

            {/* Gradient */}
            <defs>
              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#34d399" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#34d399" stopOpacity={0} />
              </linearGradient>
            </defs>

            {/* Area */}
            <Area
              type="monotone"
              dataKey="value"
              stroke="#34d399"
              strokeWidth={2.5}
              fill="url(#salesGradient)"
              dot={false}
              activeDot={{
                r: 5,
                fill: "#fff",
                stroke: "#34d399",
                strokeWidth: 2,
              }}
            />

            {/* Tooltip */}
            <Tooltip content={<CustomTooltip />} cursor={false} />

          </AreaChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default TotalSalesCard;