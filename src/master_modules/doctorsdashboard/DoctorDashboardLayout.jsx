// src/master_modules/doctordashboard/DoctorDashboardLayout.jsx

import "@/master_assets/styles/doctordashboard.css";

import WelcomeBanner from "@/master_modules/doctorsdashboard/WelcomBanner";
// import StatsStrip from "@/master_modules/doctorsdashboard/StatsStrip";
import DoctorProfileCard from "@/master_modules/doctorsdashboard/DoctorProfileCard";
import AppointmentsSummary from "@/master_modules/doctorsdashboard/AppointmentSummary";
import PerformanceCard from "@/master_modules/doctorsdashboard/PerformanceCard";
import RevenueCard from "@/master_modules/doctorsdashboard/RevenueCard";
import AppointmentListCard from "@/master_modules/doctorsdashboard/AppointmentListCard";
import EmergencyCasesCard from "@/master_modules/doctorsdashboard/EmergencyCaseCard";

import { appointmentsMock } from "@/master_modules/doctorsdashboard/appointments.mock";
import { emergencyMock } from "@/master_modules/doctorsdashboard/emergency.mock";
import DoctorAppointmentsTable from "@/master_modules/doctorsdashboard/DoctorDashboardAppointmentTable";




const DoctorDashboardLayout = ({ data }) => {
  return (
<div className="doctor-dashboard-grid">

  {/* LEFT TOP */}
  <div className="left-top">
    <WelcomeBanner doctor={data.doctor} stats={data.stats} />
  </div>

  {/* RIGHT (SPANS 2 ROWS) */}
  <div className="right-full">
    <DoctorProfileCard profile={data.profile} />
  </div>

  {/* LEFT BOTTOM */}
  <div className="left-bottom">
    <AppointmentsSummary data={data.analytics.appointments} />
    <PerformanceCard data={data.analytics.performance} />
    <RevenueCard data={data.analytics.revenue} />
  </div>


  {/* 2nd bottom */}

  <div className="doctor-dashboard-bottom-2">
  <AppointmentListCard data={appointmentsMock} />
  <EmergencyCasesCard data={emergencyMock} />
</div>

{/* TABLE FULL WIDTH */}
      <div className="doctor-table-section">
        <DoctorAppointmentsTable />
      </div>
</div>


  );
};

export default DoctorDashboardLayout;
