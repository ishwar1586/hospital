import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export const categoryActions = [
  {
    key: "view",
    label: "View Details",
    icon: VisibilityOutlinedIcon,
  },

  {
    key: "edit",
    label: "Edit Category",
    icon: EditOutlinedIcon,
  },

  {
    key: "delete",
    label: "Delete Category",
    icon: DeleteOutlineOutlinedIcon,
  },
];

export default categoryActions;