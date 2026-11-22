import { FiX, FiCheckCircle } from "react-icons/fi";
import   "@/master_modules/PatientDashboard/components/patientextra.css";
// const AppointmentTable = ({
//   data = [],
//   showStatus = false,
//   showLocation = false,
//   variant = "card", // "card" | "today"
// }) => {
//   return (
//     <div className={`appoint-list ${variant}`}>
//       {data.map((a, i) => (
//         <div key={i} className="appoint-row">

//           <img src={a.avatar} className="avatar" />

//           {/* NAME */}
//           <div className="cell-block">
//             <div className="top">{a.name}</div>
//             <div className="bottom">{a.role}</div>
//           </div>

//           {/* DATE */}
//           <div className="cell-block">
//             <div className="top">{a.date}</div>
//             <div className="bottom">{a.time}</div>
//           </div>

//           {/* TREATMENT */}
//           <div className="cell-block">
//             <div className="label">Treatment</div>
//             <div className="value">{a.treatment}</div>
//           </div>

//           {/* CONTACT */}
//           <div className="cell-block">
//             <div className="label">Contact Number</div>
//             <div className="value">{a.phone}</div>
//           </div>

//           {/* 🔥 STATUS (ONLY TODAY VIEW) */}
//           {showStatus && (
//             <div className="cell-block">
//               <div className="label">Status</div>
//               <div className={`status ${a.status?.toLowerCase()}`}>
//                 {a.status}
//               </div>
//             </div>
//           )}
          
//           {showLocation && (
//             <div className="cell-block">
//               <div className="label">Location</div>
//               <div className={`location ${a.location?.toLowerCase()}`}>
//                 {a.location}
//               </div>
//             </div>
//           )}

//           {/* ACTION */}
//           <div className="actions">
//             <FiCheckCircle className="done" />
//             <FiX className="cancel" />
//           </div>

//         </div>
//       ))}
//     </div>
//   );
// };

// export default AppointmentTable;



const AppointmentTable = ({
  data = [],
  showStatus = false,
  showLocation = false,
  variant = "card",
  mode = "today", // 👈 main control
}) => {
  return (
    <div className={`appoint-list ${variant}`}>
      {data.map((a, i) => (
        <div key={i} className="appoint-row">

          <img src={a.avatar} className="avatar" />

          <div className="cell-block">
            <div className="top">{a.name}</div>
            <div className="bottom">{a.role}</div>
          </div>

          <div className="cell-block">
            <div className="top">{a.date}</div>
            <div className="bottom">{a.time}</div>
          </div>

          <div className="cell-block">
            <div className="label">Treatment</div>
            <div className="value">{a.treatment}</div>
          </div>

          <div className="cell-block">
            <div className="label">Contact Number</div>
            <div className="value">{a.phone}</div>
          </div>

          {/* STATUS (optional) */}

          {/* {showLocation && (
            <div className="cell-block">
              <div className="label">Location</div>
              <div className={`location ${a.location}`}>
                {a.location}
              </div>
            </div>
          )} */}


             
                    {showStatus && ( 
            <div className="cell-block">
              <div className="label">Status</div>
              <div className={`status ${a.status?.toLowerCase()}`}>
                {a.status}
              </div>
            </div>
          )}
          
      {showLocation && (
            <div className="cell-block">
              <div className="label">Location</div>
              <div className={`location ${a.location?.toLowerCase()}`}>
                {a.location}
              </div>
            </div>
          )}
          


          {/* 🔥 ACTION LOGIC */}
          <div className="actions">

            {/* UPCOMING → only cancel */}
            {mode === "upcoming" && (
              <FiX className="cancel" />
            )}

            {/* PAST → only done */}
            {mode === "past" && (
              <FiCheckCircle className="done" />
            )}

            {/* TODAY → both */}
            {mode === "today" && (
              <>
                <FiCheckCircle className="done" />
                <FiX className="cancel" />
              </>
            )}

          </div>

        </div>
      ))}
    </div>
  );
};

export default AppointmentTable;