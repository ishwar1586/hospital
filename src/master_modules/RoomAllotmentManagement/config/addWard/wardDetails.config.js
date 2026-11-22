
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";

export const wardDetailsConfig = {
  section: {
    title: "Ward Details",
    icon: ApartmentOutlinedIcon,
  },

  fields: [
    {
      name: "wardName",
      label: "Ward Name",
      type: "text",
      placeholder: "Enter ward name",
      required: true,
      gridSpan: 3,
    },
    {
      name: "wardCode",
      label: "Ward Code",
      type: "text",
      placeholder: "Enter ward code",
      required: true,
      gridSpan: 3,
    },
    {
      name: "wardType",
      label: "Ward Type",
      type: "select",
      placeholder: "Select ward type",
      required: true,
      optionKey: "wardTypes",
      gridSpan: 3,
    },
    {
      name: "department",
      label: "Department",
      type: "select",
      placeholder: "Select department",
      required: true,
      optionKey: "departments",
      gridSpan: 3,
    },
    {
      name: "floor",
      label: "Floor",
      type: "select",
      placeholder: "Select floor",
      required: false,
      optionKey: "floors",
      gridSpan: 2,
    },
    {
      name: "totalRooms",
      label: "Total Rooms",
      type: "number",
      placeholder: "0",
      required: false,
      min: 0,
      gridSpan: 2,
    },
    {
      name: "totalBeds",
      label: "Total Beds",
      type: "number",
      placeholder: "0",
      required: false,
      min: 0,
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
