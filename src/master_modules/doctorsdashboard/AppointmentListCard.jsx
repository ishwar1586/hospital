import "@/master_modules/doctorsdashboard/appointmentCard.css";

const AppointmentListCard = ({ data }) => {
  return (
    <div className="appointment-list-card">
      <div className="card-header">
        <h3>Appointments</h3>
        <span className="view-all">View All</span>
      </div>

      <ul className="appointment-list">
        {data.map((item) => (
          <li key={item.id}>
            <img src={item.avatar} alt={item.name} />
            <div className="info">
              <h4>{item.name}</h4>
              <p>{item.disease}</p>
            </div>
            <div className="time">
              <strong>{item.date}</strong>
              <span>{item.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentListCard;
