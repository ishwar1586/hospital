import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const RestingChart = ({ data }) => {
  if (!data || data.length === 0) return null;

  const chartData = data.map((v, i) => ({
    day: ["Sun", "Mon", "Tue", "Wed", "Thu"][i],
    value: v,
  }));

  const avg = Math.round(
    data.reduce((a, b) => a + b, 0) / data.length
  );

  return (
    <div className="chart-card">
      <h4>Resting Heart Rate</h4>

      <p className="avg-text">
        {avg} bpm <span>(Average)</span>
      </p>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="day" />
          <YAxis domain={[90, 90]} />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#f59e0b"
            strokeWidth={2}
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RestingChart;