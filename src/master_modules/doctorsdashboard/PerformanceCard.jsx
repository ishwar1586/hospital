import "@/master_modules/doctorsdashboard/performancecard.css";

// const PerformanceCard = ({ data }) => {
//   if (!data) return null;

//   return (
//     <div className="card">
//       <div className="card-header">
//         <div>
//           <h3>Performance</h3>
//           <p>Daily metrics</p>
//         </div>
//         <span className="icon">📈</span>
//       </div>

//       {/* BAR CHART */}
//       <div className="bars">
//         {data.week.map((val, i) => (
//           <div
//             key={i}
//             className="bar"
//             style={{ height: `${val}%` }}
//           />
//         ))}
//       </div>

//       {/* METRICS */}
//       <div className="metrics">
//         <div>
//           <p>Avg. Consultation</p>
//           <h4>{data.avgConsultation} min</h4>
//         </div>
//         <div>
//           <p>Patients/Day</p>
//           <h4>{data.patientsPerDay}</h4>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PerformanceCard;


// import {
//   BarChart,
//   Bar,
//   XAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { useState } from "react";

// const PerformanceCard = ({ data }) => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   if (!data) return null;

//   return (
//     <div className="performance-card">
//       {/* HEADER */}
//       <div className="card-header">
//         <div>
//           <h3>Performance</h3>
//           <p>Daily metrics</p>
//         </div>
//         <span className="icon">📈</span>
//       </div>

//       {/* BAR CHART */}
//       <div className="chart-wrapper">
//         <ResponsiveContainer width="100%" height={160}>
//           <BarChart data={data.weekly}>
//             <XAxis
//               dataKey="day"
//               tick={{ fontSize: 12 }}
//               axisLine={false}
//               tickLine={false}
//             />

//             <Tooltip
//               cursor={{ fill: "transparent" }}
//               content={<CustomTooltip />}
//             />

//             <Bar
//               dataKey="patients"
//               radius={[8, 8, 0, 0]}
//               onMouseEnter={(_, index) => setActiveIndex(index)}
//               onMouseLeave={() => setActiveIndex(null)}
//             >
//               {data.weekly.map((_, index) => (
//                 <cell
//                   key={index}
//                   fill={
//                     activeIndex === null || activeIndex === index
//                       ? "#22c55e"
//                       : "rgba(34,197,94,0.35)"
//                   }
//                   cursor="pointer"
//                 />
//               ))}
//             </Bar>
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       {/* METRICS */}
//       <div className="performance-metrics">
//         <div>
//           <p>Avg. Consultation</p>
//           <h4>{data.avgConsultation} min</h4>
//         </div>
//         <div>
//           <p>Patients/Day</p>
//           <h4>{data.patientsPerDay}</h4>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PerformanceCard;

// import "./PerformanceCard.css";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useState } from "react";

/* ================= CUSTOM TOOLTIP ================= */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { day, patients } = payload[0].payload;

    return (
      <div className="performance-tooltip">
        <p className="tooltip-day">{day}</p>
        <div className="tooltip-row">
          <span className="tooltip-dot" />
          <span>Patients:</span>
          <strong>{patients}</strong>
        </div>
      </div>
    );
  }
  return null;
};

/* ================= MAIN COMPONENT ================= */
const PerformanceCard = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  if (!data) return null;

  return (
    <div className="performance-card">
      {/* HEADER */}
      <div className="card-header">
        <div>
          <h3>Performance</h3>
          <p>Daily metrics</p>
        </div>
        <span className="icon">📈</span>
      </div>

      {/* CHART */}
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={160}>
          <BarChart data={data.weekly}
          barCategoryGap={16}
          barGap={20}>
            <XAxis
              dataKey="day"
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              cursor={{ fill: "transparent" }}
              content={<CustomTooltip />}
            />

            <Bar
              dataKey="patients"
              radius={[3, 3, 0, 0]}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {data.weekly.map((_, index) => (
                <Cell
                  key={index}
                  fill={
                    activeIndex === null || activeIndex === index
                      ? "#22c55e"
                      : "rgba(34,197,94,0.35)"
                  }
                  cursor="pointer"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* METRICS */}
      <div className="performance-metrics">
        <div>
          <p>Avg. Consultation</p>
          <h4>{data.avgConsultation} min</h4>
        </div>
        <div>
          <p>Patients/Day</p>
          <h4>{data.patientsPerDay}</h4>
        </div>
      </div>
    </div>
  );
};

export default PerformanceCard;


