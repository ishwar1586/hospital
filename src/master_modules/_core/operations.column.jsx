import "@/master_assets/styles/operations.css";
import { FiFileText } from "react-icons/fi";
export const operationsColumns = [
  {
    key: "patient",
    label: "Patient Name",
    render: (_, row) => (
      <div className="patient-cell">
        <div className="avatar-placeholder"></div>
        <span className="patient-name">{row.patient}</span>
      </div>
    ),
  },
  {
    key: "doctors",
    label: "Doctors Team",
    render: (value) => (
      <div className="doctor-team">
        {value.slice(0, 2).map((_, i) => (
          <div key={i} className="avatar-placeholder small"></div>
        ))}
        {value.length > 2 && (
          <span className="more-count">+{value.length - 2}</span>
        )}
      </div>
    ),
  },
  {
    key: "operationDate",
    label: "Date Of Operation",
  },
  {
    key: "duration",
    label: "Duration",
  },
  {
    key: "anesthesia",
    label: "Anesthesia Type",
  },
  {
    key: "followUp",
    label: "Follow-Up Date",
  },
  {
    key: "report",
    label: "Report",
    render: () => (
    <FiFileText className="report-icon" />
  ),
  },
  {
    key: "disease",
    label: "Diseases",
  },
];

export default operationsColumns;