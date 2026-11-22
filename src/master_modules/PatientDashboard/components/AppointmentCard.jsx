import { useState } from "react";
import AppointmentTable from "@/master_modules/PatientDashboard/MasterTable/AppointmentTable";

// const AppointmentCard = ({ data }) => {
//   const [tab, setTab] = useState("upcoming");

//   const list =
//     tab === "upcoming" ? data.upcoming : data.past;

//   return (
//     <div className="appoint-card">

//       {/* TABS */}
//       <div
//         className={`appoint-tabs ${
//           tab === "upcoming" ? "left-active" : "right-active"
//         }`}
//       >
//         <span onClick={() => setTab("upcoming")}>
//           Upcoming Appointment
//         </span>

//         <span onClick={() => setTab("past")}>
//           Past Appointment
//         </span>
//       </div>

//       {/* 🔥 REUSE TABLE */}
//       <AppointmentTable data={list} />

//     </div>
//   );
// };

// export default AppointmentCard;




const AppointmentCard = ({ data }) => {
  const [tab, setTab] = useState("upcoming");

  const list =
    tab === "upcoming" ? data.upcoming : data.past;

  return (
    <div className="appoint-card">

      <div
        className={`appoint-tabs ${
          tab === "upcoming" ? "left-active" : "right-active"
        }`}
      >
        <span onClick={() => setTab("upcoming")}>
          Upcoming Appointment
        </span>

        <span onClick={() => setTab("past")}>
          Past Appointment
        </span>
      </div>

      {/* 🔥 mode pass कर */}
      <AppointmentTable
        data={list}
        mode={tab}   // 👈 main magic
      />

    </div>
  );
};

export default AppointmentCard;

