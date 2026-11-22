import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import api from "@/master_app/services/axios.config";

import DashboardCard from "./DashboardCard";
import PatientChart from "./PatientChart";
import TodayAppointments from "./TodayAppointments";
// import AppointmentSummary from "./AppointmentSummary";
import BloodBankChart from "./BloodBankChart";
import HospitalSurvey from "./HospitalSurvey";
import RevenueChart from "./RevenueChart";
import LabReportChart from "./LabReportChart";
import Appointments from "./Appointments";
import DoctorStatus from "./DoctorStatus";
import Operations from "./Operations";

/* 🔹 Receptionist specific */
// import ReceptionStats from "../receptionist/ReceptionStats";
// import ReceptionQuickActions from "../receptionist/ReceptionQuickActions";
// import WaitingQueue from "@/master_modules/receptionist/waitingQueue";

import { dashboardCardsConfig } from "../configs/dashboard.config";

import "@/master_assets/styles/dashboard.css";

const dashboardData = { appointments: 0, operations: 0, newPatients: 0, earning: 0 };

const MasterDashboard = () => {
  const role = useSelector((state) => state.auth.user?.role);

  const [metrics, setMetrics] = useState(dashboardData);
  useEffect(() => { let active = true; api.get("/dashboard").then(({data}) => { if (!active) return; setMetrics({ appointments: data.totals?.appointments || 0, operations: data.totals?.surgeries || data.totals?.admissions || 0, newPatients: data.totals?.patients || 0, earning: data.revenue?.collected || 0 }); }).catch(() => {}); return () => { active = false; }; }, []);
  const isAdmin = role === "ADMIN" || role === "SUPER_ADMIN";
  const isReceptionist = role === "RECEPTIONIST";
  const isDoctor = role === "DOCTOR";

  return (
    <div className="dashboard-page">

      {/* ======================================================
          🔝 TOP STATS CARDS (ADMIN / DOCTOR / RECEPTIONIST)
      ====================================================== */}
      <div className="dashboard-cards">
        {dashboardCardsConfig
          .filter((card) => {
            if (isReceptionist) {
              return ["appointments", "newPatients"].includes(card.dataKey);
            }
            return true;
          })
          .map((card) => (
            <DashboardCard
              key={card.key}
              title={card.title}
              Icon={card.icon}
              value={metrics[card.dataKey]}
              color={card.color}
              graphData={card.graph}
            />
          ))}
      </div>

      {/* ======================================================
          👑 ADMIN / DOCTOR – ANALYTICS SECTION
      ====================================================== */}
      {(isAdmin || isDoctor) && (
        <div className="dashboard-bottom-3">
          <div className="dashboard-panel">
            <PatientChart />
          </div>

          <div className="dashboard-panel">
            <TodayAppointments />
          </div>

          <div className="dashboard-panel">
            <BloodBankChart />
          </div>
        </div>
      )}

      {/* ======================================================
          👑 ADMIN ONLY – SURVEY + REVENUE
      ====================================================== */}
      {isAdmin && (
        <div className="dashboard-bottom-2">
          <div className="dashboard-panel">
            <HospitalSurvey />
          </div>

          <div className="dashboard-panel">
            <LabReportChart />
          </div>
        </div>
      )}

      {/* ======================================================
          🧑‍💼 RECEPTIONIST – QUICK STATS + ACTIONS
      ====================================================== */}
      {/* {isReceptionist && (
        <>
          <ReceptionStats />
          <ReceptionQuickActions />
        </>
      )} */}

      {/* ======================================================
          🧑‍💼 / 👑 – APPOINTMENTS + DOCTOR STATUS
      ====================================================== */}
      {(isAdmin || isReceptionist) && (
        <div className="dashboard-bottom-4">
          <div className="dashboard-appointments-panel">
            {/* <h3>Appointments</h3> */}
            <Appointments />
          </div>

          <div className="dashboard-panel">
            <DoctorStatus />
          </div>
        </div>
      )}

      {/* ======================================================
          🧑‍💼 RECEPTIONIST – WAITING QUEUE
      ====================================================== */}
      {/* {isReceptionist && (
        <div className="dashboard-bottom-5">
          <div className="dashboard-panel">
            <WaitingQueue />
          </div>
        </div>
      )} */}

      {/* ======================================================
          👑 ADMIN ONLY – OPERATIONS
      ====================================================== */}
      {isAdmin && (
        <div className="dashboard-bottom-5">
          <div className="dashboard-panel operations-panel">
            <Operations />
          </div>
        </div>
      )}
    </div>
  );
};

export default MasterDashboard;
