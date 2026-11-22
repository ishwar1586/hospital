import "@/master_assets/styles/appointmentSummary.css";
import { appointmentSummaryMock } from "@/master_modules/configs/appointmentSummary.mock";

const AppointmentSummary = () => {
  const { total, completed, upcoming } = appointmentSummaryMock;

  return (
    <div className="appointment-summary-card">
      <h3 className="summary-title">Total Appointments</h3>

      <div className="summary-total">{total}</div>

      <div className="summary-stats">
        <div className="stat-box completed">
          <span className="stat-number">{completed}</span>
          <span className="stat-label">Completed</span>
        </div>

        <div className="stat-box upcoming">
          <span className="stat-number">{upcoming}</span>
          <span className="stat-label">Upcoming</span>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSummary;
