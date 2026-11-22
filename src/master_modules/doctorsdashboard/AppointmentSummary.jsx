import "@/master_modules/doctorsdashboard/appointmentssummary.css";

// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const COLORS = {
//   scheduled: "#3b82f6",
//   completed: "#22c55e",
//   cancelled: "#ef4444",
// };

// const AppointmentsSummary = ({ data }) => {
//   if (!data) return null;

//   const chartData = [
//     { name: "Scheduled", value: data.scheduled, key: "scheduled" },
//     { name: "Completed", value: data.completed, key: "completed" },
//     { name: "Cancelled", value: data.cancelled, key: "cancelled" },
//   ];

//   return (
//     <div className="appointment-card">
//       {/* HEADER */}
//       <div className="card-header">
//         <div>
//           <h3>Appointments</h3>
//           <p>Today's Summary</p>
//         </div>
//         <span className="icon">🕒</span>
//       </div>

//       {/* CHART */}
//       <div className="chart-wrapper">
//         <ResponsiveContainer width="100%" height={180}>
//           <PieChart>
//             <Pie
//               data={chartData}
//               dataKey="value"
//               innerRadius={55}
//               outerRadius={75}
//               paddingAngle={3}
//             >
//               {chartData.map((entry) => (
//                 <Cell
//                   key={entry.key}
//                   fill={COLORS[entry.key]}
//                 />
//               ))}
//             </Pie>

//             {/* 👇 Hover pe data show hota hai */}
//             <Tooltip
//               formatter={(value, name) => [`${value}`, name]}
//             />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>

//       {/* LEGEND */}
//       <ul className="appointment-legend">
//         {chartData.map((item) => (
//           <li key={item.key}>
//             <span
//               className="dot"
//               style={{ background: COLORS[item.key] }}
//             />
//             {item.name}: {item.value}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };


import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";

const COLORS = {
  scheduled: "#3b82f6",
  completed: "#22c55e",
  cancelled: "#ef4444",
};

const AppointmentsSummary = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  if (!data) return null;

  const chartData = [
    { name: "Scheduled", value: data.scheduled, key: "scheduled" },
    { name: "Completed", value: data.completed, key: "completed" },
    { name: "Cancelled", value: data.cancelled, key: "cancelled" },
  ];

  return (
    <div className="appointment-card">
      {/* HEADER */}
      <div className="card-header">
        <div>
          <h3>Appointments</h3>
          <p>Today's Summary</p>
        </div>
        <span className="icon">🕒</span>
      </div>

      {/* CHART */}
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={180}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              innerRadius={55}
              outerRadius={75}
              paddingAngle={3}
              activeIndex={activeIndex}
              onMouseLeave={() => setActiveIndex(null)}
              onMouseEnter={(_, index) => setActiveIndex(index)}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={entry.key}
                  fill={COLORS[entry.key]}
                  cursor="pointer"   // 👈 pointer cursor
                  opacity={
                    activeIndex === null || activeIndex === index
                      ? 1   // 👈 active slice fully visible
                      : 0.4   // 👈 faded others
                  }
                />
              ))}
            </Pie>

            {/* 👇 CUSTOM TOOLTIP */}
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* LEGEND */}
      <ul className="appointment-legend">
        {chartData.map((item) => (
          <li key={item.key}>
            <span
              className="dot"
              style={{ background: COLORS[item.key] }}
            />
            {item.name}: {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};



/* ================= CUSTOM TOOLTIP ================= */

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, value, key } = payload[0].payload;
    const bgColor = COLORS[key];

    return (
      <div
        className="custom-tooltip"
        style={{ backgroundColor: bgColor }}
      >
        <p>{name}</p>
        <strong>{value}</strong>
      </div>
    );
  }

  return null;
};
export default AppointmentsSummary;
