import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useState } from "react";
import "@/master_modules/pharmacydashboard/components/StoreVisitorsCard.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

const StoreVisitorsCard = ({ data, config }) => {
  const [filter, setFilter] = useState("Weekly");

  const chartData = {
    labels: data.map(d => d.date),
    datasets: [
      {
        label: "Physically",
        data: data.map(d => d.physical),
        borderColor: "#10b981",
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 5,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#10b981",
        borderWidth: 2,
      },
      {
        label: "Online",
        data: data.map(d => d.online),
        borderColor: "#ef4444",
        borderDash: [5, 5],
        fill: false,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 5,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#ef4444",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    interaction: {
      mode: "nearest", // 🔥 ONLY nearest dataset
      intersect: false,
    },
    plugins: {
      legend: { display: false },

      tooltip: {
        enabled: true,
        backgroundColor: "#1f2937",
        padding: 10,
        displayColors: false,
        callbacks: {
          title: (ctx) => ctx[0].label,
          label: (ctx) => {
            return `${ctx.raw} ${
              ctx.dataset.label === "Physically"
                ? "Physically"
                : "Online"
            }`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#9ca3af", font: { size: 11 } },
      },
      y: {
        grid: { color: "#e5e7eb", borderDash: [3, 3] },
        ticks: {
          color: "#9ca3af",
          font: { size: 11 },
          callback: (val) => `$ ${val}`,
        },
      },
    },
  };

  return (
    <div className="visitors-card">

      {/* HEADER */}
      <div className="visitors-header">
        <h3>{config.title}</h3>

        <select
          className="dropdown"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>

      {/* LEGEND */}
      <div className="legend">
        {config.legends.map((item) => (
          <span key={item.key}>
            <span
              className="dot"
              style={{ background: item.color }}
            ></span>
            {item.label}
          </span>
        ))}
      </div>

      {/* CHART */}
      <div className="visitors-chart">
        <Line data={chartData} options={options} />
      </div>

    </div>
  );
};

export default StoreVisitorsCard;