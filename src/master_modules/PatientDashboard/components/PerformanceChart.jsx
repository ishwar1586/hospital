import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const PerformanceChart = ({ data }) => {
  if (!data || data.length === 0) return null;

  const chartData = data.map((v, i) => ({
    day: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][i],
    value: v,
  }));

  const avg = Math.round(
    data.reduce((a, b) => a + b, 0) / data.length
  );

  return (
    <div className="chart-card">
      <h4>Performance Heart Rate</h4>

      <p className="avg-text">
        {avg} bpm <span>(Average)</span>
      </p>
      <div className="chart-box">
      <ResponsiveContainer  width="100%" height={320}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="day" />
          <YAxis domain={[120, 140]} />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#6b7280"
            strokeWidth={2}
            dot={{ r: 5}}
          />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceChart;