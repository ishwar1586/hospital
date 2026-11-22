import { useNavigate } from "react-router-dom";
import {doctordashboardconfig} from "@/master_modules/configs/doctordashboard.configs";

const DoctorQuickActions = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h3>Quick Actions</h3>

      <div className="quick-actions">
        {doctordashboardconfig.quickActions.map((action) => (
          <button
            key={action.label}
            onClick={() => navigate(action.route)}
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DoctorQuickActions;
