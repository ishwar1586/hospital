export const doctorStatusColumns = [
  {
    key: "doctor",
    label: "Doctor Name",
    render: (_, row) => (
      <div className="doctor-cell">
        {/* EMPTY AVATAR PLACEHOLDER */}
        <div className="doctor-avatar-placeholder"></div>

        <div className="doctor-text">
          <p className="doctor-name">{row.name}</p>
          <span className="doctor-degree">{row.degree}</span>
        </div>
      </div>
    ),
  },
  {
    key: "status",
    label: "Status",
    render: (value) => (
      <span className={`status-pill ${value}`}>
        {value === "available" ? "Available" : "Absent"}
      </span>
    ),
  },
];

export default doctorStatusColumns;