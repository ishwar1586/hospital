import { doctorDashboardMock } from "../configs/doctordashboard.mock";

const DoctorDashboardStats = () => {
  const { stats } = doctorDashboardMock;

  return (
    <div className="doctor-dashboard-stats">
      <div className="stat-card">
        <h3>{stats.todayAppointments}</h3>
        <p>Today Appointments</p>
      </div>
      <div className="stat-card">
        <h3>{stats.completed}</h3>
        <p>Completed</p>
      </div>
      <div className="stat-card">
        <h3>{stats.pending}</h3>
        <p>Pending</p>
      </div>
    </div>
  );
};

export default DoctorDashboardStats;
