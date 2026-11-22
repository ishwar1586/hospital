
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

export const roomRemarksConfig = {
  section: {
    title: "Remarks (Optional)",
    icon: DescriptionOutlinedIcon,
  },

  field: {
    name: "remarks",
    placeholder: "Enter any additional details about the room...",
    maxLength: 250,
    rows: 2,
  },
};
