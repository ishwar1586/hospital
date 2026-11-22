import { CloseOutlined } from "@mui/icons-material";

const departmentSelectionActionsConfig = {
  header: [
    {
      id: "close",
      label: "Close",
      action: "close",
      icon: CloseOutlined,
      variant: "icon",
      position: "right",
      ariaLabel: "Close department selection",
    },
  ],

  footer: [
    {
      id: "cancel",
      label: "Cancel",
      action: "cancel",
      icon: null,
      variant: "secondary",
      position: "right",
      ariaLabel: "Cancel department selection",
    },
  ],

  selection: {
    action: "select-department",
    closeAfterSelection: false,
    allowDisabledSelection: false,
  },
};

export default departmentSelectionActionsConfig;