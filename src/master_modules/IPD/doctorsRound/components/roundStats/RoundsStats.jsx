import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";

import "@/master_modules/IPD/doctorsRound/styles/roundstats.css";

const RoundStats = ({
  rounds = [],
}) => {

  const totalRounds =
    rounds.length;

  const completedRounds =
    rounds.filter(
      (round) =>
        round.status ===
        "Completed"
    ).length;

  const pendingRounds =
    rounds.filter(
      (round) =>
        round.status ===
        "Pending"
    ).length;

  const criticalPatients =
    rounds.filter(
      (round) =>
        round.ward === "ICU"
    ).length;

  const stats = [
    {
      title: "Total Rounds",
      value: totalRounds,
      icon:
        <MedicalServicesOutlinedIcon />,
      className: "total",
    },

    {
      title: "Completed",
      value: completedRounds,
      icon:
        <AssignmentTurnedInOutlinedIcon />,
      className: "completed",
    },

    {
      title: "Pending",
      value: pendingRounds,
      icon:
        <PendingActionsOutlinedIcon />,
      className: "pending",
    },

    {
      title: "Critical Patients",
      value: criticalPatients,
      icon:
        <WarningAmberOutlinedIcon />,
      className: "critical",
    },
  ];

  return (
    <div className="round-stats-grid">

      {stats.map((item) => (

        <div
          key={item.title}
          className={`round-stat-card ${item.className}`}
        >

          <div className="round-stat-icon">
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

export default RoundStats;