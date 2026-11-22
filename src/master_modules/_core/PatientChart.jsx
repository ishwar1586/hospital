import { useState } from "react";
import { Doughnut } from "react-chartjs-2";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import ChartDataLabels from "chartjs-plugin-datalabels";

import {
  FaVirus,
} from "react-icons/fa";

import { patientChartMock } from "@/master_modules/configs/patientChart.mock";

import "@/master_assets/styles/patient-chart.css";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  ChartDataLabels
);

const PatientChart = () => {
  const [range, setRange] = useState("daily");

  const dataSet = patientChartMock[range];

  const total = dataSet.reduce(
    (sum, item) => sum + item.value,
    0
  );

  /* CHART DATA */

  const chartData = {
    labels: dataSet.map((d) => d.label),

    datasets: [
      {
        data: dataSet.map((d) => d.value),

        backgroundColor: dataSet.map(
          (d) => d.color
        ),

        borderWidth: 4,

        borderColor: "#ffffff",

        hoverOffset: 6,
      },
    ],
  };

  /* CHART OPTIONS */

  const chartOptions = {
    responsive: true,

    maintainAspectRatio: false,

    cutout: "68%",

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        backgroundColor: "#7c83fd",
        padding: 12,

        displayColors: false,

        callbacks: {
          label: (ctx) => {
            return `${ctx.label}: ${ctx.raw}`;
          },
        },
      },

      datalabels: {
        color: "#ffffff",

        font: {
          weight: "700",
          size: 12,
        },

        formatter: (value) => {
          const percentage = (
            (value / total) *
            100
          ).toFixed(1);

          return `${percentage}%`;
        },
      },
    },
  };

  return (
    <div className="patient-chart-card">

      {/* HEADER */}

      <div className="patient-chart-header">

        <h3 className="patient-chart-title">
          Patient Chart
        </h3>

      </div>

      {/* TABS */}

      <div className="chart-tabs">

        {["daily", "weekly", "monthly"].map(
          (item) => (
            <button
              key={item}
              className={
                range === item
                  ? "active"
                  : ""
              }
              onClick={() =>
                setRange(item)
              }
            >
              {item.charAt(0).toUpperCase() +
                item.slice(1)}
            </button>
          )
        )}

      </div>

      {/* CHART */}

      <div className="patient-chart-body">

        <div className="chart-wrapper">

          <Doughnut
            data={chartData}
            options={chartOptions}
          />

          {/* CENTER */}

          <div className="chart-center">

            <h2>{total}</h2>

            <p>Total People</p>

          </div>

        </div>

      </div>

      {/* LEGEND */}

      <div className="chart-legend">

        {dataSet.map((item) => (
          <div
            className="legend-item"
            key={item.label}
          >

            <div
              className="legend-icon"
              style={{
                background: item.color,
              }}
            >
              <FaVirus />
            </div>

            <div className="legend-content">

              <h4>{item.label}</h4>

              <p>
                {Math.round(
                  (item.value / total) * 100
                )}
                %
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default PatientChart;
