import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export const medicineActions = [
  {
    key: "view",
    label: "View Details",
    icon: VisibilityOutlinedIcon,
    onClick: (row) => {
      console.log("View", row);
    },
  },

  {
    key: "edit",
    label: "Edit Medicine",
    icon: EditOutlinedIcon,
    onClick: (row) => {
      console.log("Edit", row);
    },
  },

  {
    key: "batch",
    label: "Batch Details",
    icon: Inventory2OutlinedIcon,
    onClick: (row) => {
      console.log("Batch", row);
    },
  },

  {
    key: "print",
    label: "Print Barcode",
    icon: PrintOutlinedIcon,
    onClick: (row) => {
      console.log("Print", row);
    },
  },

  {
    key: "delete",
    label: "Delete",
    icon: DeleteOutlineOutlinedIcon,
    onClick: (row) => {
      console.log("Delete", row);
    },
  },
];