import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Auth/Login";
import ProtectedRoute from "./ProtectedRoute";
import MasterLayout from "@/master_shared/core/MasterLayout.jsx";
import MasterPage from "@/master_modules/_core/MasterPage.jsx";
import MasterDashboard from "@/master_modules/_core/MasterDashboard.jsx";
import DashboardTwo from "@/master_modules/Dasboard2/pages/DashboardTwo.jsx";
import DoctorDashboard from "@/master_modules/_core/DoctorDashboard";

// pharma
import PharmacyDashboard from "@/master_modules/_core/PharmacyDashboard";
import MedicineMaster from "@/master_modules/pharmacydashboard/medicineMaster/pages/MedicineMaster";
import EditMedicine from "@/master_modules/pharmacydashboard/medicineMaster/pages/EditMedicine";
import AddMedicine from "@/master_modules/pharmacydashboard/medicineMaster/pages/AddMedicine";
import ManufacturerMaster from "@/master_modules/pharmacydashboard/manufacturerMaster/pages/ManufacturerMaster";
import EditManufacturer from "@/master_modules/pharmacydashboard/manufacturerMaster/pages/EditManufacturer";
import AddManufacturer from "@/master_modules/pharmacydashboard/manufacturerMaster/pages/AddManufacturer";
import CategoryMaster from "@/master_modules/pharmacydashboard/categoryMaster/pages/CategoryMaster";
import AddCategory from "@/master_modules/pharmacydashboard/categoryMaster/pages/AddCategory";
import EditCategory from "@/master_modules/pharmacydashboard/categoryMaster/pages/EditCategory";
import UnitMaster from "@/master_modules/pharmacydashboard/unitMaster/pages/UnitMaster";
import AddUnit from "@/master_modules/pharmacydashboard/unitMaster/pages/AddUnit";
import EditUnit from "@/master_modules/pharmacydashboard/unitMaster/pages/EditUnit";
import SupplierMaster from "@/master_modules/pharmacydashboard/supplierMaster/pages/SupplierMaster";
import AddSupplier from "@/master_modules/pharmacydashboard/supplierMaster/pages/AddSupplier";
import EditSupplier from "@/master_modules/pharmacydashboard/supplierMaster/pages/EditSupplier";
import PurchaseMaster from "@/master_modules/pharmacydashboard/purchaseMaster/pages/PurchaseMaster";
import AddPurchaseOrder
  from "@/master_modules/pharmacydashboard/purchaseMaster/pages/AddPurchaseOrder";

import EditPurchaseOrder
  from "@/master_modules/pharmacydashboard/purchaseMaster/pages/EditPurchaseOrder";
import AddGRN
  from "@/master_modules/pharmacydashboard/purchaseMaster/pages/AddGRN";

import StockMaster from "@/master_modules/pharmacydashboard/stockMaster/pages/StockMaster";
import EditStock
  from "@/master_modules/pharmacydashboard/stockMaster/pages/EditStock";
import AddStock
  from "@/master_modules/pharmacydashboard/stockMaster/pages/AddStock";

import PosBilling from "@/master_modules/pharmacydashboard/posBilling/pages/PosBilling";
import SalesReturn from "@/master_modules/pharmacydashboard/sales-return/pages/SalesReturn";
import ExpiryManagement from "@/master_modules/pharmacydashboard/expiry-management/pages/ExpiryManagement";
import PhysicalStockAudit from "@/master_modules/pharmacydashboard/physical-stock-audit/pages/PhysicalStockAudit";
//pharma
// Billing & Invoice===========================================================================================
import BillingManagement from "@/master_modules/Billing&Invoice/pages/BillingManagement";
// Billing & Invoice===========================================================================================

// AppointmentsList===========================================================================================
import AppointmentManagement from "@/master_modules/AppointmentManagement/pages/AppointmentManagement";

// AppointmentsList===========================================================================================

// Radiology Management=============================================
import RadiologyManagement from "@/master_modules/RadiologyManagement/pages/RadiologyManagement";
// Radiology Management=============================================

// Laboratory=============================================
import TestMaster from "@/master_modules/Laboratory/testMaster/pages/TestMaster";
import TestCategoryMaster from "@/master_modules/Laboratory/testCategoryMaster/pages/TestCategoryMaster";
import SampleCollection from "@/master_modules/Laboratory/sampleCollection/pages/SampleCollection";
import SampleProcessing from "@/master_modules/Laboratory/sampleProcessing/pages/SampleProcessing";
import TestQueue from "@/master_modules/Laboratory/testQueue/pages/TestQueue";
import ResultEntry from "@/master_modules/Laboratory/resultEntry/pages/ResultEntry";
import ResultVerification from "@/master_modules/Laboratory/resultVerification/pages/ResultVerification";
import ReportGeneration from "@/master_modules/Laboratory/reportGeneration/pages/ReportGeneration";
import ReportDispatch from "@/master_modules/Laboratory/reportDispatch/pages/ReportDispatch";

// Laboratory=============================================
// AllDepartments===================================================================
import DepartmentManagement from "@/master_modules/Department/pages/DepartmentManagement";
// AllDepartments===================================================================

import RoleList from "@/master_modules/Roles/pages/RoleList";

// Staff Management========================================
import StaffManagement from "@/master_modules/StaffManagement/pages/StaffManagement";
// Staff Management========================================

// All Patients===================================================================

import PatientManagement from "@/master_modules/PatientManagement/pages/PatientManagement";


// All Patients===================================================================


// Room Allotment Management=================================================
import RoomAllotmentManagement from "@/master_modules/RoomAllotmentManagement/pages/RoomAllotmentManagement";
// Room Allotment Management=================================================




// OPD Management==============================================
import OPDManagement from "@/master_modules/OPD/pages/OPDManagement";
// OPD Management==============================================



// import IPDDashboard from "@/master_modules/IPD/pages/IPDDashboard";


// IPD  Management===================================================
import IPDManagement from "@/master_modules/IPDManagement/pages/IPDManagement";

// IPD  Management===================================================


// Doctore Management===========================
import DoctorManagement from "@/master_modules/DoctorManagement/pages/DoctorManagement";
// Doctore Management===========================


// import DischargePatient from "@/master_modules/IPD/pages/DischargePatient";
const AppRoutes = () => {
  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={<Login />} />

      {/* Protected layout */}
      <Route
        element={
          <ProtectedRoute>
            <MasterLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<MasterDashboard />} />
        <Route path="/module/dashboardtwo" element={<DashboardTwo />} />
        <Route path="/module/:moduleKey" element={<MasterPage />} />
        <Route path="/module/doctordashboard" element={<DoctorDashboard />} />
        {/* pharma */}
        <Route path="/module/pharmacydashboard" element={<PharmacyDashboard />} />
        <Route path="/module/medicinemaster" element={<MedicineMaster />} />
        <Route path="/module/manufacturermaster" element={<ManufacturerMaster />} />
        <Route path="/module/categorymaster" element={<CategoryMaster />} />
        <Route path="/module/unitmaster" element={<UnitMaster />} />
        <Route path="/module/suppliermaster" element={<SupplierMaster />} />
        <Route path="/module/purchasemaster" element={<PurchaseMaster />} />
        <Route path="/module/stockmaster" element={<StockMaster />} />
        <Route path="/module/posbilling" element={<PosBilling />} />
        <Route path="/module/salesreturn" element={<SalesReturn />} />
        <Route path="/module/expirymanagement" element={<ExpiryManagement />} />
        <Route path="/module/physicalstockaudit" element={<PhysicalStockAudit />} />
     
      <Route
          path="/module/medicinemaster/edit/:medicineId"
          element={<EditMedicine />}
        />
        <Route
          path="/module/medicinemaster/add"
          element={<AddMedicine />}
        />
        <Route
          path="/module/manufacturermaster/edit/:manufacturerId"
          element={<EditManufacturer />}
        />
        <Route
          path="/module/manufacturermaster/add"
          element={<AddManufacturer />}
        />
        <Route
          path="/module/categorymaster/add"
          element={<AddCategory />}
        />

        <Route
          path="/module/categorymaster/edit/:categoryId"
          element={<EditCategory />}
        />

        <Route
          path="/module/unitmaster/add"
          element={<AddUnit />}
        />

        <Route
          path="/module/unitmaster/edit/:unitId"
          element={<EditUnit />}
        />

        <Route
          path="/module/suppliermaster/add"
          element={<AddSupplier />}
        />

        <Route
          path="/module/suppliermaster/edit/:supplierId"
          element={<EditSupplier />}
        />

        <Route
          path="/module/purchasemaster/add"
          element={<AddPurchaseOrder />}
        />
        <Route
          path="/module/purchasemaster/edit/:id"
          element={<EditPurchaseOrder />}
        />

        <Route
          path="/module/purchasemaster/grn/:id"
          element={<AddGRN />}
        />
        <Route

          path="/module/stockmaster/add"

          element={<AddStock />}

        />

        <Route

          path="/module/stockmaster/edit/:id"

          element={<EditStock />}

        />

        {/* pharma */}

           {/* Billing & Invoices========================================= */}
          <Route path="/module/billingandinvoice" element={<BillingManagement />} />
        
        {/* Billing & Invoices========================================= */}

        {/* laboratory */}


        <Route path="/module/testmaster" element={<TestMaster />} />
        <Route path="/module/testcategory" element={<TestCategoryMaster />} />
        <Route path="/module/samplecollection" element={<SampleCollection />} />
        <Route path="/module/sampleprocessing" element={<SampleProcessing />} />
        <Route path="/module/testqueue" element={<TestQueue />} />
        <Route path="/module/resultentry" element={<ResultEntry />} />
        <Route path="/module/resultverification" element={<ResultVerification />} />
        <Route path="/module/reportgeneration" element={<ReportGeneration />} />
        <Route path="/module/reportdispatch" element={<ReportDispatch />} />

        {/* laboratory */}

    {/* Radiology Management */}
        <Route path="/module/radiologymanagement" element={<RadiologyManagement />} />
    {/* Radiology Management */}


        {/* Patient Management */}
        <Route path="/module/allpatients" element={<PatientManagement />} />

        {/* Patient Management */}

{/* Staff Management */}
 <Route path="/module/staffmanagement" element={<StaffManagement />} />
{/* Staff Management */}

{/* AllDepartments====================================== */}
<Route path="/module/alldepartments" element={<DepartmentManagement />} />
{/* AllDepartments====================================== */}
        
        <Route path="/module/rolelist" element={<RoleList />} />
        {/* Apointments Management */}
        <Route path="/module/appointmentlist" element={<AppointmentManagement />} />
        {/* Apointments Management */}
       
        
        {/* BookAppointments==================== */}
        {/* <Route path="/module/bookappointments" element={<BookAppointments />} /> */}
        {/* BookAppointments==================== */}
       
       
       {/* Room Allotment======================================================= */}
          <Route path="/module/roomallotment" element={<RoomAllotmentManagement />} />
       {/* Room Allotment======================================================= */}

      
       

        {/* IPD Management */}
        <Route
          path="/module/ipdmanagement"
          element={<IPDManagement />}
        />
        {/* IPD Management */}

{/* OPD Management======================== */}
        <Route
          path="/module/opdmanagement"
          element={<OPDManagement />}
        />
{/* OPD Management======================== */}


        {/* DoctoreManagement======================== */}
        <Route
          path="/module/alldoctors"
          element={<DoctorManagement />}
        />
        {/* DoctoreManagement======================== */}


      </Route>

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>



  );
};

export default AppRoutes;
