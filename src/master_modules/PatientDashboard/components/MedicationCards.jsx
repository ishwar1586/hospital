import {
  FiActivity,
  FiDroplet,
  FiZap,
  FiCircle,
} from "react-icons/fi";

// const iconList = [
//   { icon: <FiDroplet />, color: "#22c55e" },  // green
//   { icon: <FiActivity />, color: "#ef4444" }, // red
//   { icon: <FiZap />, color: "#3b82f6" },      // blue
//   { icon: <FiCircle />, color: "#f97316" },   // orange
//   { icon: <FiActivity />, color: "#7c3aed" }, // purple
// ];

const MedicationCard = ({ data }) => {
  return (
    <div className="med-card">

      {/* HEADER */}
      <div className="med-header">
        <h4>Medications</h4>
        <span className="view">View All</span>
      </div>

      {/* COLUMN LABELS */}
      <div className="med-columns">
        <span>Medicine</span>
        <span>Dosage</span>
      </div>

      <div className="divider" />

      {/* LIST */}
      <div className="med-list">
        {data.map((m, i) => {
        //   const iconData = iconList[i % iconList.length];

          return (
            <div
              key={i}
              className={`med-row ${i === 0 ? "active" : ""}`}
            >
              <div className="med-left">

                {/* ICON */}
                {/* <span
                  className="med-icon"
                  style={{ color: iconData.color }}
                >
                  {iconData.icon}
                </span> */}

                {/* NAME */}
                <span className="med-name">
                  {m.name}
                </span>
              </div>

              {/* DOSAGE */}
              <span className="med-dose">
                {m.dose}
              </span>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default MedicationCard;