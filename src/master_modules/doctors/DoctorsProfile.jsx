// import "./DoctorProfile.css";
import { useSelector } from "react-redux";

const DoctorProfile = () => {
  // TEMP: mock data (backend aane pe API se replace)
  const doctor = {
    name: "Dr. Jay Soni",
    department: "Cardiology",
    qualification: "MBBS, MD",
    experience: "8 Years",
    email: "jay.soni@hospital.com",
    phone: "+91 9876543210",
    gender: "Male",
    shift: "Morning",
    joinedOn: "12 Aug 2019",
  };

  return (
    <div className="doctor-profile">
      {/* HEADER */}
      <div className="profile-header">
        <div className="avatar">{doctor.name.charAt(0)}</div>
        <div>
          <h2>{doctor.name}</h2>
          <p>{doctor.department}</p>
          <span className="badge">{doctor.qualification}</span>
        </div>
      </div>

      {/* STATS */}
      <div className="profile-stats">
        <div className="stat-card">
          <h4>{doctor.experience}</h4>
          <p>Experience</p>
        </div>
        <div className="stat-card">
          <h4>{doctor.shift}</h4>
          <p>Current Shift</p>
        </div>
        <div className="stat-card">
          <h4>{doctor.joinedOn}</h4>
          <p>Joined On</p>
        </div>
      </div>

      {/* DETAILS */}
      <div className="profile-details">
        <h3>Personal Information</h3>

        <div className="detail-grid">
          <div>
            <label>Email</label>
            <p>{doctor.email}</p>
          </div>
          <div>
            <label>Phone</label>
            <p>{doctor.phone}</p>
          </div>
          <div>
            <label>Gender</label>
            <p>{doctor.gender}</p>
          </div>
          <div>
            <label>Department</label>
            <p>{doctor.department}</p>
          </div>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="profile-actions">
        <button className="btn secondary">Request Update</button>
        <button className="btn primary">Edit Profile</button>
      </div>
    </div>
  );
};

export default DoctorProfile;
