import "@/master_modules/doctorsdashboard/welcomebanner.css";
import StatsStrip from "@/master_modules/doctorsdashboard/StatsStrip";
import doctor_1 from "@/master_assets/images/doctor_1.jpg";
const WelcomeBanner = ({ doctor, stats }) => {
  return (
    <div className="welcome-banner">
      {/* LEFT CONTENT */}
      <div className="welcome-left">
        <p className="welcome-text">Welcome back</p>

        <h2 className="doctor-name">
          {doctor?.name || "Doctor"}
        </h2>

        <p className="doctor-meta">
          {doctor?.department || "-"}, {doctor?.qualification || "-"}
        </p>

        {/* ✅ STATS STRIP INSIDE BANNER */}
        <StatsStrip stats={stats} />
      </div>

      {/* RIGHT ILLUSTRATION */}
      <div className="welcome-right">
        <img
        //   src="/images/doctor_1.jpg"
        //   alt="Doctor Illustration"
         src={doctor_1} alt="Doctor" />
        
      </div>
    </div>
  );
};

export default WelcomeBanner;


