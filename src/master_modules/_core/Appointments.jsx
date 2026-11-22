import TableEngineMax from "@/master_modules/TableEngineMax/TableEngineMax";
import appointmentMock from "@/master_modules/configs/appointment.mock";
import { AppointmentTableConfig } from "@/master_modules/configs/appointment.config";
// import "@/master_assets/styles/appointments.css";


const AppointmentListPage = () => {
  return (
    <div className="table-card compact">
      {/* <span>Appointment</span> */}
      <TableEngineMax
        config={AppointmentTableConfig}
        data={appointmentMock}
      />
    </div>
  );
};

export default AppointmentListPage;