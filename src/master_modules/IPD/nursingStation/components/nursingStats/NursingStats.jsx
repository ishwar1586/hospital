import {
  PeopleOutlined,
  FavoriteBorder,
  AssignmentLateOutlined,
  WarningAmberOutlined,
  TimelineOutlined,
} from "@mui/icons-material";

import "@/master_modules/IPD/nursingStation/styles/nursingstats.css";
import nursingStationStats
from "@/master_modules/IPD/nursingStation/mock/nursingStats.mock";

const NursingStats = () => {

  const stats = [
    {
      title: "Total Patients",
      value: nursingStationStats.totalPatients,
      subtitle: "Currently Admitted",
      icon: <PeopleOutlined />,
      className: "total-card",
    },

    {
      title: "My Patients",
      value: nursingStationStats.myPatients,
      subtitle: "Assigned to You",
      icon: <FavoriteBorder />,
      className: "my-card",
    },

    {
      title: "Pending Tasks",
      value: nursingStationStats.pendingTasks,
      subtitle: "Requires Attention",
      icon: <AssignmentLateOutlined />,
      className: "task-card",
    },

    {
      title: "Critical Alerts",
      value: nursingStationStats.criticalAlerts,
      subtitle: "High Priority",
      icon: <WarningAmberOutlined />,
      className: "alert-card",
    },

    {
      title: "Today's Rounds",
      value: nursingStationStats.todayRounds,
      subtitle: "Pending Rounds",
      icon: <TimelineOutlined />,
      className: "round-card",
    },
  ];

  return (

    <div className="nursing-stats-grid">

      {stats.map((item, index) => (

        <div
          key={index}
          className={`nursing-stat-card ${item.className}`}
        >

          <div className="stat-icon">
            {item.icon}
          </div>

          <div className="stat-content">

            <h4>
              {item.title}
            </h4>

            <h2>
              {item.value}
            </h2>

            <p>
              {item.subtitle}
            </p>

          </div>

        </div>

      ))}

    </div>

  );
};

export default NursingStats;