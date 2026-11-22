import MasterTable from "@/master_modules/_core/MasterTable";
import { doctorAppointmentsColumns } from "@/master_modules/doctorsdashboard/appointment.table.column";
import { doctorAppointmentsMock } from "@/master_modules/doctorsdashboard/appointmenttable.mock";
import "@/master_modules/doctorsdashboard/mastertable.css";

const DoctorAppointmentsTable = () => {
  return (
    <div className="doctor-table-card">

      {/* 🔹 HEADER */}
      <div className="doctor-table-header">
        <h3>Appointments</h3>
        <span className="view-all">View All</span>
      </div>

      {/* 🔹 TABLE */}
      <div className="doctor-table-body">
        <MasterTable
          columns={doctorAppointmentsColumns}
          data={doctorAppointmentsMock}
        />
      </div>

    </div>
  );
};

export default DoctorAppointmentsTable;
