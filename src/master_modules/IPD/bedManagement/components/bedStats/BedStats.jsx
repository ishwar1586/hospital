import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

import "@/master_modules/IPD/bedManagement/styles/bedstats.css";

const BedStats = ({ beds = [] }) => {

  const totalBeds = beds.length;

  const availableBeds =
    beds.filter(
      (bed) =>
        bed.status === "Available"
    ).length;

  const occupiedBeds =
    beds.filter(
      (bed) =>
        bed.status === "Occupied"
    ).length;

  const reservedBeds =
    beds.filter(
      (bed) =>
        bed.status === "Reserved"
    ).length;

  const stats = [
    {
      title: "Total Beds",
      value: totalBeds,
      icon: <KingBedOutlinedIcon />,
      className: "total",
    },

    {
      title: "Available Beds",
      value: availableBeds,
      icon:
        <CheckCircleOutlinedIcon />,
      className: "available",
    },

    {
      title: "Occupied Beds",
      value: occupiedBeds,
      icon: <PersonOutlinedIcon />,
      className: "occupied",
    },

    {
      title: "Reserved Beds",
      value: reservedBeds,
      icon:
        <AccessTimeOutlinedIcon />,
      className: "reserved",
    },
  ];

  return (
    <div className="bed-stats-grid">

      {stats.map((item) => (
        <div
          key={item.title}
          className={`bed-stat-card ${item.className}`}
        >
          <div className="bed-stat-icon">
            {item.icon}
          </div>

          <div>
            <h4>
              {item.title}
            </h4>

            <h2>
              {item.value}
            </h2>
          </div>
        </div>
      ))}

    </div>
  );
};

export default BedStats;