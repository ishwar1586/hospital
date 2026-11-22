
import GroupsOutlined from "@mui/icons-material/GroupsOutlined";
import AssignmentTurnedInOutlined from "@mui/icons-material/AssignmentTurnedInOutlined";
import AccessTimeOutlined from "@mui/icons-material/AccessTimeOutlined";
import MedicalServicesOutlined from "@mui/icons-material/MedicalServicesOutlined";
import CalendarMonthOutlined from "@mui/icons-material/CalendarMonthOutlined";
import HighlightOffOutlined from "@mui/icons-material/HighlightOffOutlined";

export const opdStatsConfig = [
  {
    id: "total-opd",
    dataKey: "totalOPD",
    label: "Total OPD Today",
    icon: GroupsOutlined,
    tone: "blue",
  },
  {
    id: "checked-in",
    dataKey: "checkedIn",
    label: "Checked In",
    icon: AssignmentTurnedInOutlined,
    tone: "green",
  },
  {
    id: "waiting",
    dataKey: "waiting",
    label: "Waiting",
    icon: AccessTimeOutlined,
    tone: "orange",
  },
  {
    id: "in-consultation",
    dataKey: "inConsultation",
    label: "In Consultation",
    icon: MedicalServicesOutlined,
    tone: "sky",
  },
  {
    id: "consulted",
    dataKey: "consulted",
    label: "Consulted",
    icon: CalendarMonthOutlined,
    tone: "purple",
  },
  {
    id: "no-show-cancelled",
    dataKey: "noShowCancelled",
    label: "No Show / Cancelled",
    icon: HighlightOffOutlined,
    tone: "red",
  },
];


export default opdStatsConfig;