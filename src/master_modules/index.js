
import dashboardConfig from "./configs/dashboard.config";
// import { receptionistModuleConfig } from "./configs/receptionist.module.config";
import  patientConfig  from "./configs/patient.config";
import { billingConfig } from "./configs/billing.config";
import  doctorConfig  from "./configs/doctor.module.config";
import doctordashboardconfig from "./configs/doctordashboard.configs";
import appointmentsConfig from "./configs/appointments.configs";  
import roomAllotmentConfig from "./configs/roomalloatment.config";
import staffConfig from "./configs/staff.config";
// import pharmacyDashboardCards from "./configs/pharmacydashboard.config";
// import customerTableConfig from "@/master_modules/pharmacydashboard/customerlist/customerTable.config";  

export const moduleConfigs = {
  dashboard: dashboardConfig,
  // receptionist: receptionistModuleConfig,
  patient: patientConfig,
  billing: billingConfig,
  doctor:  doctorConfig,
  doctordashboard:doctordashboardconfig,
  appointments: appointmentsConfig,
  roomAllotment: roomAllotmentConfig,
  staff: staffConfig,
  // pharmacydashboard: pharmacyDashboardCards,
  // customerTable: customerTableConfig,
};
export default moduleConfigs;