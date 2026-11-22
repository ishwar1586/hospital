import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { hospitalSurveyAPI } from "@/master_modules/configs/hospitalSurvey.mock";
import "@/master_assets/styles/hospitalSurvey.css";

const HospitalSurvey = () => {
  const [range, setRange] = useState("monthly");
  const [data, setData] = useState([]);

  // API driven (mock now, real API later)
  useEffect(() => {
    // future:
    // api.get(`/dashboard/survey?range=${range}`)
    setData(hospitalSurveyAPI[range]);
  }, [range]);

  return (
    <div className="survey-card">
      {/* Header */}
      <div className="survey-header">
        <h3>Hospital Survey</h3>

        <select value={range} onChange={(e) => setRange(e.target.value)}>
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      {/* Legend */}
      <div className="survey-legend">
        <div><span className="dot blue"></span> New Patients</div>
        <div><span className="dot orange"></span> Old Patients</div>
      </div>

      {/* REAL GRAPH */}
      <div className="survey-chart">
        <ResponsiveContainer width="100%" height={360}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="blueFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4}/>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>

              <linearGradient id="orangeFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f97316" stopOpacity={0.4}/>
                <stop offset="100%" stopColor="#f97316" stopOpacity={0}/>
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" opacity={0.2}/>
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="newPatients"
              stroke="#3b82f6"
              fill="url(#blueFill)"
              strokeWidth={3}
            />

            <Area
              type="monotone"
              dataKey="oldPatients"
              stroke="#f97316"
              fill="url(#orangeFill)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HospitalSurvey;
