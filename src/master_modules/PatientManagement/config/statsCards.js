import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import EmergencyOutlinedIcon from "@mui/icons-material/EmergencyOutlined";

export const statsCards = [
  {
    id: "total-patients",
    title: "Total Patients",
    value: "12,458",
    change: "+8.2%",
    changeType: "positive",
    description: "vs last month",
    icon: PeopleAltOutlinedIcon,
  },

  {
    id: "new-patients",
    title: "New Patients",
    value: "486",
    change: "+12.5%",
    changeType: "positive",
    description: "vs last month",
    icon: PersonAddAlt1OutlinedIcon,
  },

  {
    id: "opd-patients",
    title: "OPD Patients",
    value: "8,642",
    change: "+6.8%",
    changeType: "positive",
    description: "this month",
    icon: LocalHospitalOutlinedIcon,
  },

  {
    id: "ipd-patients",
    title: "IPD Patients",
    value: "2,316",
    change: "+4.3%",
    changeType: "positive",
    description: "this month",
    icon: HotelOutlinedIcon,
  },

  {
    id: "critical-patients",
    title: "Critical Patients",
    value: "38",
    change: "-2.1%",
    changeType: "negative",
    description: "vs last week",
    icon: EmergencyOutlinedIcon,
  },
];


export default statsCards;