import "@/master_modules/doctorsdashboard/doctorprofilecard.css";

const DoctorProfileCard = ({ profile }) => {
  if (!profile) return null;

  const {
    name,
    department,
    hospital,
    avatar,
    patients,
    limit,
    surgery,
    consultation,
    appointments,
  } = profile;

  const percent = Math.round((patients / limit) * 100);

  return (
    <div className="doctor-profile-card">
      {/* ===== TOP ===== */}
      <div className="profile-top">
        <img
          src={avatar}
          alt={name}
          className="doctor-avatar"
        />

        <h3 className="doctor-name">{name}</h3>
        <p className="doctor-subtitle">
          {department} - {hospital}
        </p>
      </div>

      <hr className="divider" />

      {/* ===== PATIENT LIMIT ===== */}
      <div className="patient-limit-card">
        <div>
          <h4>{patients.toLocaleString()} Patients</h4>
          <p>{limit.toLocaleString()} Patients Limit</p>
        </div>

        <div className="progress-circle">
          <svg viewBox="0 0 36 36">
            <path
              className="circle-bg"
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="circle"
              strokeDasharray={`${percent}, 100`}
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" className="percentage">
              {percent}%
            </text>
          </svg>
        </div>
      </div>

      {/* ===== STATS ===== */}
      <div className="profile-stats">
        <div className="stat surgery">
          <p>Surgery</p>
          <h4>{surgery}</h4>
        </div>

        <div className="stat consultation">
          <p>Consultation</p>
          <h4>{consultation}</h4>
        </div>

         <div className="stat appointments">
        <p>Appointments</p>
        <h4>{appointments}</h4>
      </div>

      <div className="profile-footer">
        <p>Patients</p>
        <h4>{appointments.toLocaleString()}</h4>
      </div>
      </div>
     
    </div>
  );
};

export default DoctorProfileCard;
