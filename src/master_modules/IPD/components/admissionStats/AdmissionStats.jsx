import {
  LocalHospitalOutlined,
  TodayOutlined,
  MonitorHeartOutlined,
  AssignmentOutlined,
  BedOutlined,
  CheckCircleOutlined,
} from "@mui/icons-material";

import "@/master_modules/IPD/styles/admissionStats.css";

const AdmissionStats = ({
  totalAdmissions = 0,
  todayAdmissions = 0,
  activeAdmissions = 0,
  pendingDischarge = 0,
  occupiedBeds = 0,
  availableBeds = 0,
}) => {
  const stats = [
    {
      title: "Total Admissions",
      value: totalAdmissions,
      icon: <LocalHospitalOutlined />,
      className: "hospital",
    },
    {
      title: "Today's Admissions",
      value: todayAdmissions,
      icon: <TodayOutlined />,
      className: "today",
    },
    {
      title: "Active Admissions",
      value: activeAdmissions,
      icon: <MonitorHeartOutlined />,
      className: "active",
    },
    {
      title: "Pending Discharge",
      value: pendingDischarge,
      icon: <AssignmentOutlined />,
      className: "pending",
    },
    {
      title: "Occupied Beds",
      value: occupiedBeds,
      icon: <BedOutlined />,
      className: "occupied",
    },
    {
      title: "Available Beds",
      value: availableBeds,
      icon: <CheckCircleOutlined />,
      className: "available",
    },
  ];

  return (
    <div className="admission-stats">
      {stats.map((item) => (
        <div
          className="admission-stat-card"
          key={item.title}
        >
          <div className="stat-header">
            <span
              className={`stat-icon ${item.className}`}
            >
              {item.icon}
            </span>
          </div>

          <h3 className="stat-value">
            {item.value}
          </h3>

          <p className="stat-title">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AdmissionStats;