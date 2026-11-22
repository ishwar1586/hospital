import AppointmentCard from "@/master_modules/PatientDashboard/components/AppointmentCard";
import ReportsCard from "@/master_modules/PatientDashboard/components/ReportCard";

import config from "@/master_modules/PatientDashboard/components/patientExtra.config";
import data from "@/master_modules/PatientDashboard/components/patientExtra.mock";
import   "@/master_modules/PatientDashboard/components/patientextra.css";

const PatientExtraSection = () => {
  return (
    <div className="extra-grid">

      <AppointmentCard
        config={config.appointments}
        data={data.appointments}
      />

      <ReportsCard
        config={config.reports}
        data={data.reports}
      />

    </div>
  );
};

export default PatientExtraSection;