
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

export const addWardFooterConfig = {
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
      label: "Save Ward",
      icon: SaveOutlinedIcon,
      variant: "primary",
      position: "right",
    },
  ],
};
