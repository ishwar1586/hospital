// import StatCard from "@/master_modules/PatientDashboard/components/StatCards";
// import RestingChart from "@/master_modules/PatientDashboard/components/RestingChart";
// import PerformanceChart from "@/master_modules/PatientDashboard/components/PerformanceChart";
// import MedicationCard from "@/master_modules/PatientDashboard/components/MedicationCards";

// import config from "@/master_modules/PatientDashboard/components/patientsdashboard.config";
// import data from "@/master_modules/PatientDashboard/components/patientsdashboard.mock";

// import "@/master_modules/PatientDashboard/patientsdashboard.css";

// const PatientsDashboard = () => {
//   return (
//     <div className="patient-dashboard">

//       {/* 🔥 TOP */}
//       <div className="stats-grid">
//         {config.stats.map((s) => (
//           <StatCard
//             key={s.key}
//             config={s}
//             data={data.stats[s.key]}
//           />
//         ))}
//       </div>

//       {/* 🔥 BOTTOM */}
//       <div className="charts-grid">

//         <RestingChart data={data.charts.resting} />

//         <PerformanceChart data={data.charts.performance} />

//         <MedicationCard data={data.medications} />

//       </div>

//     </div>
//   );
// };

// export default PatientsDashboard;





import StatCard from "@/master_modules/PatientDashboard/components/StatCards";
import RestingChart from "@/master_modules/PatientDashboard/components/RestingChart";
import PerformanceChart from "@/master_modules/PatientDashboard/components/PerformanceChart";
import MedicationCard from "@/master_modules/PatientDashboard/components/MedicationCards";
import PatientExtraSection from "@/master_modules/PatientDashboard/components/PatientsExtraSection";

import config from "@/master_modules/PatientDashboard/components/patientsdashboard.config";
import data from "@/master_modules/PatientDashboard/components/patientsdashboard.mock";

import "@/master_modules/PatientDashboard/patientsdashboard.css";
import "@/master_modules/PatientDashboard/components/patientextra.css"; // 💣 IMPORTANT

const PatientsDashboard = () => {
  return (
    <div className="patient-dashboard">

      {/* 🔥 TOP */}
      <div className="stats-grid">
        {config.stats.map((s) => (
          <StatCard
            key={s.key}
            config={s}
            data={data.stats[s.key]}
          />
        ))}
      </div>

      {/* 🔥 CHART + MED */}
      <div className="charts-grid">
        <RestingChart data={data.charts.resting} />
        <PerformanceChart data={data.charts.performance} />
        <MedicationCard data={data.medications} />
      </div>

      {/* 🔥 EXTRA SECTION (NEW) */}
      <div className="extra-wrapper">
        <PatientExtraSection />
      </div>

    </div>
  );
};

export default PatientsDashboard;