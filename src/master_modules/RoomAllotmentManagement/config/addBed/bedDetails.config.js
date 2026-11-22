
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";

export const bedDetailsConfig = {
  section: {
    title: "Bed Details",
    icon: BedOutlinedIcon,
  },

  fields: [
    {
      name: "bedNo",
      label: "Bed No.",
      type: "text",
      placeholder: "Enter bed number",
      required: true,
      gridColumn: "half",
    },
    {
      name: "wardId",
      label: "Ward",
      type: "select",
      placeholder: "Select Ward",
      optionKey: "wards",
      required: true,
      gridColumn: "half",
    },
    {
      name: "bedType",
      label: "Bed Type",
      type: "select",
      placeholder: "Select Bed Type",
      optionKey: "bedTypes",
      required: true,
      gridColumn: "half",
    },
    {
      name: "roomId",
      label: "Room",
      type: "select",
      placeholder: "Select Room",
      optionKey: "rooms",
      required: true,
      dependentOn: "wardId",
      gridColumn: "half",
    },
    {
      name: "bedStatus",
      label: "Bed Status",
      type: "select",
      placeholder: "Select Status",
      optionKey: "bedStatuses",
      required: true,
      gridColumn: "half",
      statusField: true,
    },
    {
      name: "bedCharges",
      label: "Bed Charges (Per Day)",
      type: "number",
      placeholder: "Enter charges",
      prefix: "₹",
      min: 0,
      gridColumn: "half",
    },
  ],
};
