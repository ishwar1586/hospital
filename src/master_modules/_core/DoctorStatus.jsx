import "@/master_assets/styles/doctorstatus.css";
import MasterList from "@/master_modules/_core/MasterList";
import doctorStatusMock from "@/master_modules/configs/doctorStatus.mock";
import { doctorStatusColumns } from "@/master_modules/_core/doctorStatus.column";

const DoctorStatus = () => {
  return (
    <div className="doctor-status-card">
      <div className="doctor-status-header">
        <h3>Doctor Status</h3>
        <span className="view-all">View All</span>
      </div>

      <MasterList
        columns={doctorStatusColumns}
        data={doctorStatusMock}
      />
    </div>
  );
};

export default DoctorStatus;
