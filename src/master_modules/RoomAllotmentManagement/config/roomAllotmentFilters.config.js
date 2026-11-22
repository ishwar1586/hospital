
import {
  SearchOutlined,
  RefreshOutlined,
  FileDownloadOutlined,
} from "@mui/icons-material";

export const roomAllotmentFiltersConfig = [
  {
    id: "wardId",
    label: "All Wards",
    placeholder: "All Wards",
    optionKey: "wards",
  },
  {
    id: "roomType",
    label: "All Room Types",
    placeholder: "All Room Types",
    optionKey: "roomTypes",
  },
  {
    id: "roomId",
    label: "All Rooms",
    placeholder: "All Rooms",
    optionKey: "rooms",
  },
  {
    id: "bedStatus",
    label: "All Bed Status",
    placeholder: "All Bed Status",
    optionKey: "bedStatuses",
  },
];

export const roomAllotmentSearchConfig = {
  placeholder: "Search patient, UHID, room...",
  icon: SearchOutlined,
};

export const roomAllotmentFilterActions = [
  {
    id: "refresh",
    label: "Refresh",
    icon: RefreshOutlined,
  },
  {
    id: "download",
    label: "Download",
    icon: FileDownloadOutlined,
  },
];
