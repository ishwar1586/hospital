
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

export const addRoomFooterConfig = {
  actions: [
    {
      id: "cancel",
      label: "Cancel",
      icon: CloseOutlinedIcon,
      variant: "secondary",
      position: "left",
    },
    {
      id: "reset",
      label: "Reset",
      icon: RefreshOutlinedIcon,
      variant: "secondary",
      position: "right",
    },
    {
      id: "save",
      label: "Save Room",
      icon: SaveOutlinedIcon,
      variant: "primary",
      position: "right",
    },
  ],
};
