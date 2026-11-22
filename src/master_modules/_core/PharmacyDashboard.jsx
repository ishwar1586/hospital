
// import PharmacyDashboardLayout from "../pharmacydashboard/PharmacyDashboardLayout";

// import { pharmacyDashboardMock } from "@/master_modules/configs/pharmacydashboard.mock";
// const PharmacyDashboard = () => {
//   /**
//    * 🔮 FUTURE (backend):
//    * const { data, loading, error } = useDoctorDashboardApi();
//    */

//   const data = pharmacyDashboardMock; // TEMP: mock data

//   if (!data) {
//     return <div>Loading Pharmacy Dashboard...</div>;
//   }

//   return (
//     <div className="pharmacy-dashboard-wrapper">
//       <PharmacyDashboardLayout data={data} />
//     </div>
//   );
// };

// export default PharmacyDashboard;

import PharmacyDashboardLayout from "../pharmacydashboard/PharmacyDashboardLayout";
// import CustomerListPage from "@/master_modules/_core/customerlistpage";

import { pharmacyDashboardMock } from "@/master_modules/configs/pharmacydashboard.mock";

const PharmacyDashboard = () => {
  const data = pharmacyDashboardMock;

  return (
    <div className="pharmacy-dashboard-wrapper">
      {/* Dashboard Top Section */}
      <PharmacyDashboardLayout data={data} />

      {/* 🔥 Customer Table Section */}
      {/* <CustomerListPage /> */}
    </div>
  );
};

export default PharmacyDashboard;