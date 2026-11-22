import "@/master_modules/doctorsdashboard/revenuecard.css";

// const RevenueCard = ({ data }) => {
//   if (!data) return null;

//   return (
//     <div className="card">
//       <div className="card-header">
//         <div>
//           <h3>Today's Revenue</h3>
//           <h2>${data.total}</h2>
//         </div>
//         <span className="icon">💲</span>
//       </div>

//       {/* FAKE LINE CHART */}
//       <div className="line-chart">
//         <div className="line walkin" />
//         <div className="line followup" />
//         <div className="line online" />
//       </div>

//       {/* LEGEND */}
//       <ul className="legend">
//         <li><span className="dot green" /> Walk-ins: ${data.walkin}</li>
//         <li><span className="dot blue" /> Follow-ups: ${data.followups}</li>
//         <li><span className="dot purple" /> Online: ${data.online}</li>
//       </ul>
//     </div>
//   );
// };

// export default RevenueCard;


import "./RevenueCard.css";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RevenueCard = ({ data }) => {
  if (!data) return null;

  return (
    <div className="revenue-card">
      {/* HEADER */}
      <div className="revenue-header">
        <div>
          <h3>Today's Revenue</h3>
          <h2>${data.total.toLocaleString()}</h2>
        </div>
        <span className="revenue-icon">$</span>
      </div>

      {/* CHART */}
      <div className="revenue-chart">
        <ResponsiveContainer width="100%" height={140}>
          <AreaChart data={data.trend}>
            <XAxis dataKey="day" hide />

            <Tooltip content={<RevenueTooltip />} />

            <Area
              type="monotone"
              dataKey="walkins"
              stroke="#22c55e"
              fill="rgba(34,197,94,0.25)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="followups"
              stroke="#3b82f6"
              fill="rgba(59,130,246,0.25)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="online"
              stroke="#a855f7"
              fill="rgba(168,85,247,0.25)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* LEGEND */}
      <div className="revenue-legend">
        <div>
          <span className="dot green" />
          Walk-ins: ${data.breakdown.walkins}
        </div>
        <div>
          <span className="dot blue" />
          Follow-ups: ${data.breakdown.followups}
        </div>
        <div>
          <span className="dot purple" />
          Online: ${data.breakdown.online}
        </div>
      </div>
    </div>
  );
};

export default RevenueCard;

/* ================= TOOLTIP ================= */

const RevenueTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="revenue-tooltip">
        {payload.map((item) => (
          <div key={item.dataKey} className="tooltip-row">
            <span
              className="dot"
              style={{ background: item.stroke }}
            />
            <span>{item.dataKey}:</span>
            <strong>${item.value}</strong>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

