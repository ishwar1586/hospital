import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import HealingOutlinedIcon from "@mui/icons-material/HealingOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";

import "@/master_modules/IPD/nursingStation/styles/quickaction.css";

const QuickActions = () => {

  const actions = [
    {
      label: "Add Nursing Note",
      icon: <NoteAltOutlinedIcon />,
      className: "action-note",
    },

    {
      label: "Record Vital Signs",
      icon: <FavoriteBorderOutlinedIcon />,
      className: "action-vitals",
    },

    {
      label: "Medication Administration",
      icon: <MedicationOutlinedIcon />,
      className: "action-medication",
    },

    {
      label: "Patient Care",
      icon: <HealingOutlinedIcon />,
      className: "action-care",
    },

    {
      label: "Incident Report",
      icon: <ReportProblemOutlinedIcon />,
      className: "action-incident",
    },
  ];

  return (

    <div className="quick-actions-card">

      <div className="quick-actions-header">

        <h3>
          Quick Actions
        </h3>

      </div>

      <div className="quick-actions-list">

        {actions.map(
          (action, index) => (

            <button
              key={index}
              className={`quick-action-btn ${action.className}`}
            >

              {action.icon}

              <span>
                {action.label}
              </span>

            </button>

          )
        )}

      </div>

    </div>

  );

};

export default QuickActions;