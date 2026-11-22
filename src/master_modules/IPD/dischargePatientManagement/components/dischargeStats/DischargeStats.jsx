import AssignmentTurnedInOutlinedIcon
from "@mui/icons-material/AssignmentTurnedInOutlined";

import FactCheckOutlinedIcon
from "@mui/icons-material/FactCheckOutlined";

import VerifiedOutlinedIcon
from "@mui/icons-material/VerifiedOutlined";

import TaskAltOutlinedIcon
from "@mui/icons-material/TaskAltOutlined";

import dischargeStats
from "@/master_modules/IPD/dischargePatientManagement/mock/dischargeStats.mock";

import "@/master_modules/IPD/dischargePatientManagement/styles/dischargestats.css";

const iconMap = {
  pending:
    <AssignmentTurnedInOutlinedIcon />,

  today:
    <FactCheckOutlinedIcon />,

  approved:
    <VerifiedOutlinedIcon />,

  completed:
    <TaskAltOutlinedIcon />,
};

const DischargeStats = () => {

  return (

    <div className="discharge-stats-grid">

      {dischargeStats.map(
        (item) => (

          <div
            key={item.id}
            className={`discharge-stat-card ${item.type}`}
          >

            <div className="stat-icon">

              {iconMap[item.type]}

            </div>

            <div className="stat-content">

              <h4>
                {item.title}
              </h4>

              <h2>
                {item.count}
              </h2>

              <p>
                {item.subtitle}
              </p>

            </div>

          </div>

        )
      )}

    </div>

  );

};

export default DischargeStats;