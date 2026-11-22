
// import DoctorQuickActions from "@/master_modules/doctors/DoctorQuickActions";
// import DoctorDashboardStats from "@/master_modules/doctors/DoctorDashboardStats";
// // import DoctorTodayAppointments from "@/master_modules/doctors/DoctorTodayAppointments";

// import "@/master_assets/styles/doctordashboard.css";

// const DoctorDashboard = () => {
//   return (
//     <div className="doctor-dashboard-page">
//       <DoctorDashboardStats />

//       <div className="doctor-dashboard-grid">
//         {/* <DoctorTodayAppointments /> */}
//         <DoctorQuickActions />
//       </div>
//     </div>
//   );
// };

// export default DoctorDashboard;


// src/master_modules/core/doctordashboard.jsx

import DoctorDashboardLayout from "@/master_modules/doctorsdashboard/DoctorDashboardLayout";
import { doctorDashboardMock } from "@/master_modules/configs/doctordashboard.mock";

const DoctorDashboard = () => {
  /**
   * 🔮 FUTURE (backend):
   * const { data, loading, error } = useDoctorDashboardApi();
   */

  const data = doctorDashboardMock; // TEMP: mock data

  if (!data) {
    return <div>Loading Doctor Dashboard...</div>;
  }

  return (
    <div className="doctor-dashboard-wrapper">
      <DoctorDashboardLayout data={data} />
    </div>
  );
};

export default DoctorDashboard;
