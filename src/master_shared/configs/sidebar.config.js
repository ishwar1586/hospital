import TransferWithinAStationTwoToneIcon from '@mui/icons-material/TransferWithinAStationTwoTone';
import {
  LayoutDashboard,
  Users,
  UserCog,
  Stethoscope,
  Pill,
  FileText,
  Calendar,
  Bed,
  ClipboardList,
  Activity,
  RadioIcon,
  DropletsIcon,
  AmbulanceIcon,
  VideoIcon,
  Receipt,
  BookCopyIcon,
  View,
  ListCheck,
  ListChecksIcon,
  BookAIcon,
  Edit2,
  TestTube2,
  CopyCheck,
  EyeClosedIcon,
  Settings,
  FactoryIcon,
  PaperclipIcon,
} from "lucide-react";
import { Children } from "react";
import { BsDropletFill, BsRecord2, BsRecord2Fill } from "react-icons/bs";
import { FcCustomerSupport, FcExpired } from "react-icons/fc";
import { GiAllForOne, GiBlood, GiChargedArrow, GiHumanEar, GiHumanTarget, GiMedicinePills, GiMedicines, GiNurseFemale, GiStockpiles } from "react-icons/gi";
import { MdOutlineCategory, MdOutlineChildCare, MdOutlineLocalPharmacy } from "react-icons/md";
import { PiEyedropperSample, PiFinnTheHuman, PiUniteDuotone } from "react-icons/pi";
import { RiBillFill, RiCustomerService2Fill, RiExpandHorizontalSFill, RiPassExpiredFill, RiProfileFill } from "react-icons/ri";
import DoctorAppointmentsTable from "../../master_modules/doctorsdashboard/DoctorDashboardAppointmentTable";
import { FaMoneyBill, FaStaffSnake } from "react-icons/fa6";
import { IoAdd, IoBusiness } from "react-icons/io5";
import { GrBusinessService, GrCatalog, GrCatalogOption, GrTechnology } from "react-icons/gr";
import { AiFillInsurance, AiOutlineStock } from "react-icons/ai";
import { LiaBehance } from "react-icons/lia";
import { CategoryOutlined, FreeCancellation, List, LocalShippingOutlined, PointOfSaleSharp, ReportGmailerrorred, ReportGmailerrorredOutlined, Shop, SupportOutlined } from '@mui/icons-material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export const sidebarConfig = {
  ADMIN: [
    /* 🔥 DASHBOARDS */
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      children: [
        {
          label: "Main Dashboard",
          path: "/dashboard",
          icon: LayoutDashboard,
        },
        {
          label: "Dashboard 2",
          path: "/module/dashboardtwo",
          icon: LayoutDashboard,
        },
        {
          label: "Receptionist Dashboard",
          path: "/module/receptionist",
          icon: ClipboardList,
        },
        {
          label: "Doctor Dashboard",
          path: "/module/doctordashboard",
          icon: Stethoscope,
        },
        {
          label: "Patient Dashboard",
          // path: "/module/patientdashboard",
          icon: GiHumanEar,
          children: [
            {
              label: "Dashboard",
              path: "/module/patientdashboard",
              icon: Activity,
            },

            //Patients Appointments==================================================
            {
              label: "Appointments",
              // path: "/module/patientappointments",
              icon: Calendar,
              children: [
                {
                  label: "Book Appointments",
                  path: "/module/bookappointments",
                  icon: BookAIcon,
                },


              ],
            },
          ],
        },

        //Patients Appointments=============================================

        {
          label: "Pharmacy Dashboard",
          path: "/module/pharmacydashboard",
          icon: Pill,
        },
      ],
    },

    /* 🔥 PATIENTS ==================================================================*/
    {
      label: "Patients Management",
      // path: "/module/patient",
      icon: MdOutlineChildCare,
      children: [
        { label: "All Patients", path: "/module/allpatients", icon: UserCog },
      ],
    },

    /* 🔥 PATIENTS ===================================================================*/

    /* 🔥 DOCTORS Management========================================================= */
    {
      label: "Doctors Management",
      icon: Stethoscope,
      children: [
        { label: "All Doctors", path: "/module/alldoctors", icon: Users },

      ],
    },
    /* 🔥 DOCTORS Management========================================================= */



    /* 🔥 PHARMACY */
    {
      label: "Pharmacy",
      icon: MdOutlineLocalPharmacy,
      children: [
        {
          label: "Dashboard",
          path: "/module/pharmacydashboard",
          icon: LayoutDashboard,
        },
        {
          label: "Medicine Master",
          path: "/module/medicinemaster",
          icon: Pill,

        },
        {
          label: "Manufacturer Master",
          path: "/module/manufacturermaster",
          icon: FactoryIcon,

        },
        {
          label: "Category Master",
          path: "/module/categorymaster",
          icon: MdOutlineCategory,

        },
        {
          label: "Unit Master",
          path: "/module/unitmaster",
          icon: PiUniteDuotone,
        },
        {
          label: "Supplier Master",
          path: "/module/suppliermaster",
          icon: LocalShippingOutlined,
        },
        {
          label: "Purchase Master",
          path: "/module/purchasemaster",
          icon: Shop,
        },
        {
          label: "Stock Master",
          path: "/module/stockmaster",
          icon: AiOutlineStock,
        },
        {
          label: "Pos Billing",
          path: "/module/posbilling",
          icon: FaMoneyBill,
        },

        {
          label: "Sales Returns",
          path: "/module/salesreturn",
          icon: PointOfSaleSharp,
        },
        {
          label: "Expiry Management",
          path: "/module/expirymanagement",
          icon: RiPassExpiredFill,
        },
        {
          label: "Physical Stock Audit",
          path: "/module/physicalstockaudit",
          icon: GiStockpiles,
        },

      ],
    },

    /* 🔥 BILLING======================================================================================== */
    {
      label: "Accounting & Billing",
      // path: "/module/billing",
      icon: GrCatalog,
      children: [
        {
          label: "Billing & Invoices",
          path: "/module/billingandinvoice",
          icon: RiBillFill,
        },

      ],

    },
    /* 🔥 BILLING======================================================================================== */



// OPD Management======================================
  {
      label: "OPD",
      // icon: BookCopyIcon,
      icon: TransferWithinAStationTwoToneIcon,

      children: [

        {
          label: "OPD Management",
          path: "/module/opdmanagement",
          icon: TransferWithinAStationTwoToneIcon,
        },
      ],
    },
// OPD Management======================================

  


    // IPD  Management======================================
    {
      label: "IPD Management",

      icon: Bed,

      children: [

        {
          label: "IPD",
          path: "/module/ipdmanagement",
          icon: Bed,
        },



      ],
    },
    // IPD  Management======================================





    /* 🔥 APPOINTMENTS =============================================================*/
    {
      label: "Appointments Management",
      // path: "/module/appointments",
      icon: BookCopyIcon,
      children: [
        {
          label: "Appointments List",
          path: "/module/appointmentlist",
          icon: List,
        },
      ],
    },
    /* 🔥 APPOINTMENTS =============================================================*/

    //staff Management==========================================================
    {
      label: "Staff Management",
      // path: "/module/appointments",
      icon: GiHumanTarget,
      children: [
        {
          label: "All Staff",
          path: "/module/staffmanagement",
          icon: GiAllForOne,
        },
      ],
    },
    //staff Management==========================================================
    
    // AllDepartments====================================================================
     {
      label: "Departments Managements",
      icon: GrBusinessService,
      children: [
        {
          label: "All Departments ",
          path: "/module/alldepartments",
          icon: GrCatalogOption,
        },
      ],
    },
    // AllDepartments====================================================================

   

    {
      label: "Roles",
      icon: UserCog,
      children: [
        {
          label: "Role List",
          path: "/module/rolelist",
          icon: UserCog,
        },
      ],
    },
    /* 🔥 Administrator */
    {
      label: "Administrator",
      icon: Settings,
      children: [
        {
          label: "Company Information",
          path: "/module/companyinfo",
        },
        {
          label: "Bill Group Name Master",
          path: "/module/billgroupmaster",
        },

      ],
    },


  // Room Allotment Management=====================================================
   {
      label: "Room Allotment Management",
      // path: "/module/roomAllotment",
      icon: Bed,
      children: [
        {
          label: "Room Allotment",
          path: "/module/roomallotment",
          icon: Bed,
        },
      ],
    },
  // Room Allotment Management=====================================================
   

    // Laboratory==========================================================

    {
      label: "Laboratory",
      // path: "/module/laboratory",
      icon: Activity,
      children: [
        {
          label: "Laboratory Dashboard",
          path: "/module/laboratorydashboard",
          icon: LiaBehance,
        },
        {
          label: "Test Master",
          path: "/module/testmaster",
          icon: TestTube2,
        },
        {
          label: "Test Category",
          path: "/module/testcategory",
          icon: CategoryOutlined,
        },
        {
          label: "Sample Collection",
          path: "/module/samplecollection",
          icon: PiEyedropperSample,
        },
        {
          label: "Sample Processing",
          path: "/module/sampleprocessing",
          icon: PiEyedropperSample,
        },
        {
          label: "Test Queue",
          path: "/module/testqueue",
          icon: ListChecksIcon,
        },
        {
          label: "Result Entry",
          path: "/module/resultentry",
          icon: PaperclipIcon,
        },
        {
          label: "Result Verification",
          path: "/module/resultverification",
          icon: PaperclipIcon,
        },
        {
          label: "Report Generation",
          path: "/module/reportgeneration",
          icon: ReportGmailerrorredOutlined,
        },
        {
          label: "Report Dispatch",
          path: "/module/reportdispatch",
          icon: ReportGmailerrorred,
        },
      ],
    },


    // Laboratory==========================================================    



// Radiology Management==========================================================
  {
      label: "Radiology",
      // path: "/module/radiology",
      icon: RadioIcon,
      children: [
        {
          label: "Radiology Management ",
          path: "/module/radiologymanagement",
          icon: RadioIcon,
        },
      ],  
    },
// Radiology Management==========================================================
  

// Blood Bnak Management========================================================
 {
      label: "Blood Bank Management",
      // path: "/module/bloodbank",
      icon: DropletsIcon,
      children: [
        {
          label: "Blood Bank Management",
          path: "/module/bloodbankmanagement",
          icon: DropletsIcon,
        }
      ]
    },
// Blood Bnak Management========================================================
   
    {
      label: "Ambulance",
      path: "/module/ambulance",
      icon: AmbulanceIcon,
    },
    {
      label: "TeleMedicine",
      path: "/module/telemedicine",
      icon: VideoIcon,
    },
    {
      label: "Records",
      path: "/module/records",
      icon: FileText,
    },
    {
      label: "Insurance",
      path: "/module/insurance",
      icon: AiFillInsurance,
    },
    {
      label: "Discharge",
      path: "/module/discharge",
      icon: GiChargedArrow,
    },
    {
      label: "Role Master",
      path: "/module/rolemaster",
      icon: EyeClosedIcon,
    },
  ],
};

export default sidebarConfig;