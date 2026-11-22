import "@/master_modules/doctorsdashboard/emergencycasecard.css";

const EmergencyCasesCard = ({ data }) => {
  return (
    <div className="emergency-card">
      <div className="card-header danger">
        <h3>Emergency Cases</h3>
        <span className="badge">{data.length}</span>
      </div>

      <ul className="emergency-list">
        {data.map((item) => (
          <li key={item.id}>
            <div>
              <h4>{item.name}</h4>
              <span className={`tag ${item.level}`}>
                {item.type}
              </span>
            </div>
            <small>{item.timeAgo}</small>
          </li>
        ))}
      </ul>

      <p className="view-link">View All Emergency Cases</p>
    </div>
  );
};

export default EmergencyCasesCard;
