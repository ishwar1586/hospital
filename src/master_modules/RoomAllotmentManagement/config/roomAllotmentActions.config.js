
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";

export const roomAllotmentActionsConfig = [
  {
    id: "view",
    label: "View Details",
    icon: VisibilityOutlinedIcon,
  },
  {
    id: "edit",
    label: "Edit Allotment",
    icon: EditOutlinedIcon,
  },
  {
    id: "release",
    label: "Release Bed",
    icon: MeetingRoomOutlinedIcon,
    danger: true,
  },
];
