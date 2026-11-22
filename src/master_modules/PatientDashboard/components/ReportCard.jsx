// import {
//   FiFileText,
//   FiDownload,
//   FiTrash2,
// } from "react-icons/fi";

// const ReportsCard = ({ data }) => {
//   return (
//     <div className="reports-card">

//       <div className="reports-header">
//         <h4>Reports/Documents</h4>
//         <span className="view">View All</span>
//       </div>

//       <div className="reports-list">
//         {data.map((r, i) => (
//           <div key={i} className="report-row">

//             <div className="left">
//               <FiFileText className="file-icon" />
//               <span>{r.name}</span>
//             </div>

//             <div className="actions">
//               <FiTrash2 />
//               <FiDownload />
//             </div>

//           </div>
//         ))}
//       </div>

//     </div>
//   );
// };

// export default ReportsCard;






import {
  FiFileText,
  FiDownload,
  FiTrash2,
} from "react-icons/fi";

const ReportsCard = ({ data }) => {
  return (
    <div className="reports-card">

      <div className="reports-header">
        <h4>Reports/Documents</h4>
        <span className="view">View All</span>
      </div>

      <div className="reports-list">
        {data.map((r, i) => (
          <div key={i} className="report-row">

            <div className="left">
              <FiFileText className="file-icon" />
              <span>{r.name}</span>
            </div>

            <div className="actions">
              <FiTrash2 />
              <FiDownload />
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default ReportsCard;