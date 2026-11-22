import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

export const roomAllotmentHeaderConfig = {
  title: "Room Allotment Management",

  description:
    "Manage wards, rooms, beds and allocate rooms to admitted patients.",

  actions: [
    {
      id: "add-ward",
      label: "Add Ward",
      icon: AddOutlinedIcon,
      variant: "primary",
      disabled: false,
    },
    {
      id: "add-room",
      label: "Add Room",
      icon: AddOutlinedIcon,
      variant: "primary",
      disabled: false,
    },
    {
      id: "add-bed",
      label: "Add Bed",
      icon: AddOutlinedIcon,
      variant: "primary",
      disabled: false,
    },
  ],
};