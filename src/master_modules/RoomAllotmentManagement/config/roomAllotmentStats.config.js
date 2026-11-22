
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";

export const roomAllotmentStatsConfig = [
  {
    id: "total-beds",
    title: "Total Beds",
    icon: BedOutlinedIcon,
    color: "blue",
    valueKey: "totalBeds",
    showPercentage: false,
  },
  {
    id: "occupied-beds",
    title: "Occupied Beds",
    icon: BedOutlinedIcon,
    color: "green",
    valueKey: "occupiedBeds",
    percentageKey: "occupiedPercentage",
    showPercentage: true,
  },
  {
    id: "available-beds",
    title: "Available Beds",
    icon: BedOutlinedIcon,
    color: "blue",
    valueKey: "availableBeds",
    percentageKey: "availablePercentage",
    showPercentage: true,
  },
  {
    id: "total-rooms",
    title: "Total Rooms",
    icon: MeetingRoomOutlinedIcon,
    color: "purple",
    valueKey: "totalRooms",
    showPercentage: false,
  },
  {
    id: "total-wards",
    title: "Total Wards",
    icon: ApartmentOutlinedIcon,
    color: "orange",
    valueKey: "totalWards",
    showPercentage: false,
  },
];
