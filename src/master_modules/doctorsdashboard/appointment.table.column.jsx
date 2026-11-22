import  "@/master_modules/doctorsdashboard/mastertable.css";
import { FiFileText } from "react-icons/fi";
export const doctorAppointmentsColumns = [
  {
    key: "name",
    label: "Patient Name",
    render: (_, row) => (
      <div className="patient-cell">
        <img src={row.avatar} alt={row.name} />
        <span>{row.name}</span>
      </div>
    ),
  },
  {
    key: "gender",
    label: "Gender",
  },
  {
    key: "lastVisit",
    label: "Last Visit",
  },
  {
    key: "disease",
    label: "Diseases",
    render: (value) => (
      <span className={`disease-tag ${value.toLowerCase()}`}>
        {value}
      </span>
    ),
  },
  {
    key: "report",
    label: "Report",
    render: () => (
    <FiFileText  className="report-icon" />
  ),
  },
  {
    key: "details",
    label: "Details",
    render: () => <span className="table-link">Details</span>,
  },
];

export default doctorAppointmentsColumns;