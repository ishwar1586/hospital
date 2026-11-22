import { doctorDashboardMock } from "@/master_modules/configs/doctordashboard.mock";

const DoctorTodayAppointments = () => {
  return (
    <div>
      <h3>Today's Appointments</h3>

      {doctorDashboardMock.todayAppointments.map((apt) => (
        <div key={apt.id} className="appointment-row">
          <div>
            <strong>{apt.patientName}</strong>
            <p>{apt.time}</p>
          </div>
          <span className={`status ${apt.status.toLowerCase()}`}>
            {apt.status}
          </span>
        </div>
      ))}
    </div>
  );
};

export default DoctorTodayAppointments;
