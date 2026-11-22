 // import Doctors from "@/master_modules/_core/Doctors";
export const doctorModuleConfig = {
   role: "DOCTOR",
   baseRoute: "/doctor",
   permissions: {
     canEditProfile: false,
     canViewOtherDoctors: false,
   },
 };
export default doctorModuleConfig;

// import Doctors from "@/master_modules/_core/DoctorDashboard";

// export const doctordashboardModuleConfig = {
//   title: "Doctors",
//   component: Doctors,
// };
// export default doctordashboardModuleConfig;