import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";

const headerActions = [
    {
        id: "refresh",
        label: "Refresh",
        icon: RefreshOutlinedIcon,
        variant: "secondary",
    },

    {
        id: "importCategories",
        label: "Import Categories",
        icon: FileUploadOutlinedIcon,
        variant: "secondary",
    },

    {
        id: "exportCategories",
        label: "Export",
        icon: FileDownloadOutlinedIcon,
        variant: "secondary",
    },

    {
        id: "addCategory",
        label: "Add New Category",
        icon: AddOutlinedIcon,
        variant: "primary",
    },
];

export default headerActions;