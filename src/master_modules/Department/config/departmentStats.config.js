import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PauseCircleOutlineOutlinedIcon from "@mui/icons-material/PauseCircleOutlineOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";

export const departmentStatsConfig = [
  {
    id: "totalDepartments",
    label: "Total Departments",
    icon: BusinessOutlinedIcon,
    color: "blue",
  },
  {
    id: "activeDepartments",
    label: "Active Departments",
    icon: GroupsOutlinedIcon,
    color: "green",
  },
  {
    id: "inactiveDepartments",
    label: "Inactive Departments",
    icon: PauseCircleOutlineOutlinedIcon,
    color: "red",
  },
  {
    id: "totalServices",
    label: "Total Services",
    icon: MedicalServicesOutlinedIcon,
    color: "purple",
  },
];