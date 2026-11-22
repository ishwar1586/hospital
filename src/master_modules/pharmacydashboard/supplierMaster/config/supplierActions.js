import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export const supplierActions = [
  {
    key: "view",
    label: "View Details",
    icon: VisibilityOutlinedIcon,
  },

  {
    key: "edit",
    label: "Edit Supplier",
    icon: EditOutlinedIcon,
  },

  {
    key: "history",
    label: "Purchase History",
    icon: HistoryOutlinedIcon,
  },

  {
    key: "ledger",
    label: "Outstanding Ledger",
    icon: ReceiptLongOutlinedIcon,
  },

  {
    key: "print",
    label: "Print Supplier",
    icon: PrintOutlinedIcon,
  },

  {
    key: "delete",
    label: "Delete Supplier",
    icon: DeleteOutlineOutlinedIcon,
  },
];

export default supplierActions;