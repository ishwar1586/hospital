
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";

export const roomDetailsConfig = {
  section: {
    title: "Room Details",
    icon: BedOutlinedIcon,
  },

  fields: [
    {
      name: "roomNo",
      label: "Room No.",
      type: "text",
      placeholder: "Enter room number",
      required: true,
      gridSpan: 3,
    },
    {
      name: "wardId",
      label: "Ward",
      type: "select",
      placeholder: "Select ward",
      required: true,
      optionKey: "wards",
      gridSpan: 3,
    },
    {
      name: "roomType",
      label: "Room Type",
      type: "select",
      placeholder: "Select room type",
      required: true,
      optionKey: "roomTypes",
      gridSpan: 3,
    },
    {
      name: "floor",
      label: "Floor",
      type: "select",
      placeholder: "Select floor",
      required: true,
      optionKey: "floors",
      gridSpan: 3,
    },
    {
      name: "bedCapacity",
      label: "Bed Capacity",
      type: "number",
      placeholder: "0",
      required: true,
      min: 1,
      gridSpan: 2,
    },
    {
      name: "roomCharges",
      label: "Room Charges (Per Day)",
      type: "number",
      placeholder: "0",
      required: false,
      min: 0,
      prefix: "₹",
      gridSpan: 2,
    },
  ],

  status: {
    name: "status",
    label: "Status",
    activeLabel: "Active",
    inactiveLabel: "Inactive",
  },
};
