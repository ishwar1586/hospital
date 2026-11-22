import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export const purchaseActions = [
  {
    key: "view",
    label: "View Details",
    icon: VisibilityOutlinedIcon,
  },

  {
    key: "edit",
    label: "Edit PO",
    icon: EditOutlinedIcon,
  },

  {
    key: "grn",
    label: "Receive Goods (GRN)",
    icon: Inventory2OutlinedIcon,
  },

  {
    key: "print",
    label: "Print PO",
    icon: PrintOutlinedIcon,
  },

  {
    key: "clone",
    label: "Clone PO",
    icon: ContentCopyOutlinedIcon,
  },

  {
    key: "cancel",
    label: "Cancel PO",
    icon: CancelOutlinedIcon,
  },

  {
    key: "delete",
    label: "Delete PO",
    icon: DeleteOutlineOutlinedIcon,
  },
];


export default  purchaseActions;