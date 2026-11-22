
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

export const additionalInformationConfig = {
  section: {
    title: "Additional Information",
    icon: DescriptionOutlinedIcon,
  },

  description: {
    name: "description",
    label: "Description (Optional)",
    placeholder: "Enter ward description...",
    type: "textarea",
    rows: 2,
    maxLength: 250,
    required: false,
  },
};
